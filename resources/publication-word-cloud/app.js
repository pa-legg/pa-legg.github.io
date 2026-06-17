const SOURCE_URL = "https://pa-legg.github.io/publications/";
const FALLBACK_TEXT_URL =
  "https://raw.githubusercontent.com/pa-legg/pa-legg.github.io/main/_pages/publications.md";

const DEFAULT_STOPWORDS = new Set([
  "the", "and", "for", "with", "this", "that", "from", "using", "use", "our", "their",
  "these", "those", "into", "within", "between", "across", "towards", "through", "toward",
  "were", "been", "being", "are", "was", "is", "to", "of", "in", "on", "an", "a", "by",
  "or", "as", "we", "it", "at", "can", "be", "also", "than", "such", "which", "have",
  "has", "had", "not", "its", "they", "them", "more", "most", "paper", "study", "results",
  "propose", "proposed", "approach", "method", "methods", "based", "analysis", "show", "shows"
]);

const els = {
  status: document.getElementById("status"),
  maxWords: document.getElementById("maxWords"),
  maxWordsValue: document.getElementById("maxWordsValue"),
  minLength: document.getElementById("minLength"),
  minLengthValue: document.getElementById("minLengthValue"),
  layoutMode: document.getElementById("layoutMode"),
  rotationMode: document.getElementById("rotationMode"),
  palette: document.getElementById("palette"),
  titlesOnly: document.getElementById("titlesOnly"),
  yearMin: document.getElementById("yearMin"),
  yearMax: document.getElementById("yearMax"),
  cloudSvg: document.getElementById("cloudSvg"),
  cloudWrap: document.getElementById("cloudWrap"),
  cloudEmpty: document.getElementById("cloudEmpty"),
  trackedWords: document.getElementById("trackedWords"),
  timeChart: document.getElementById("timeChart"),
  themeToggle: document.getElementById("themeToggle"),
  toggleControls: document.getElementById("toggleControls"),
  closeControls: document.getElementById("closeControls"),
  controlsSidebar: document.getElementById("controlsSidebar"),
  sidebarBackdrop: document.getElementById("sidebarBackdrop")
};

let papers = [];
let chart = null;
let renderQueued = false;

const palettes = {
  viridis: (i, n) => d3.interpolateViridis((i + 1) / Math.max(n, 2)),
  warm: (i, n) => d3.interpolateWarm((i + 1) / Math.max(n, 2)),
  cool: (i, n) => d3.interpolateCool((i + 1) / Math.max(n, 2)),
  category10: (i) => d3.schemeCategory10[i % 10]
};

function setStatus(msg) {
  els.status.textContent = msg;
}

function parsePublicationsFromHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const papers = [];

  doc.querySelectorAll("h2.bibliography").forEach((heading) => {
    const year = Number.parseInt(heading.textContent.trim(), 10);
    if (!Number.isFinite(year)) return;

    let sibling = heading.nextElementSibling;
    while (sibling && !sibling.matches("ol.bibliography")) {
      sibling = sibling.nextElementSibling;
    }
    if (!sibling) return;

    sibling.querySelectorAll("li").forEach((item) => {
      const title = item.querySelector(".title")?.textContent?.trim();
      const abstract =
        item.querySelector(".abstract p")?.textContent?.trim() ||
        item.querySelector(".abstract")?.textContent?.trim() ||
        "";
      const venue = item.querySelector(".periodical")?.textContent?.trim() || "";
      if (title) papers.push({ title, abstract, year, venue });
    });
  });

  return papers;
}

function looksLikeTitle(line) {
  if (!line || line.length < 5 || line.length > 220) return false;
  if (/^(Abs|HTML|PDF|DOI|Open|In\s)/i.test(line)) return false;
  if (/^[A-Z][a-z]+,\s[A-Z]/.test(line)) return false;
  if (/\.(png|jpg|jpeg|gif|webp)$/i.test(line)) return false;
  return !line.endsWith(",");
}

function parsePublicationsFromMarkdown(text) {
  const lines = text
    .split("\n")
    .map((l) => l.replace(/^\s*\d+\|/, "").trim())
    .filter(Boolean);

  const out = [];
  let year = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const yearMatch = line.match(/^(?:##\s*)?(\d{4})$/);
    if (yearMatch && Number(yearMatch[1]) >= 1990) {
      year = Number(yearMatch[1]);
      continue;
    }

    const numberedTitle = line.match(/^\d+\.\s+(.+)$/);
    const maybeTitle = numberedTitle ? numberedTitle[1] : line;
    if (!year || !looksLikeTitle(maybeTitle)) continue;

    let abstract = "";
    for (let j = i + 1; j < Math.min(lines.length, i + 12); j++) {
      const candidate = lines[j];
      if (/^(?:##\s*)?\d{4}$/.test(candidate) || /^\d+\.\s+/.test(candidate)) break;
      if (candidate.length > 120 && !candidate.startsWith("In ")) {
        abstract = candidate;
        break;
      }
    }
    out.push({ title: maybeTitle, abstract, year, venue: "" });
  }

  const seen = new Set();
  return out.filter((p) => {
    const key = `${p.year}:${p.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchPublications() {
  const response = await fetch(SOURCE_URL);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const html = await response.text();

  const fromHtml = parsePublicationsFromHtml(html);
  if (fromHtml.length > 0) return fromHtml;

  const fallback = await fetch(FALLBACK_TEXT_URL);
  if (!fallback.ok) throw new Error(`Fallback HTTP ${fallback.status}`);
  const markdown = await fallback.text();
  const fromMarkdown = parsePublicationsFromMarkdown(markdown);
  if (fromMarkdown.length === 0) throw new Error("No publications parsed from source");
  return fromMarkdown;
}

function tokenize(text, minLength) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^-+|-+$/g, ""))
    .filter((t) => t.length >= minLength && !DEFAULT_STOPWORDS.has(t) && !/^\d+$/.test(t));
}

function computeWordStats(data, opts) {
  const counter = new Map();
  const byYear = new Map();

  for (const p of data) {
    if (p.year < opts.yearMin || p.year > opts.yearMax) continue;
    const source = opts.titlesOnly ? p.title : `${p.title} ${p.abstract}`;
    const words = tokenize(source, opts.minLength);
    for (const w of words) {
      counter.set(w, (counter.get(w) || 0) + 1);
      if (!byYear.has(w)) byYear.set(w, new Map());
      const yearMap = byYear.get(w);
      yearMap.set(p.year, (yearMap.get(p.year) || 0) + 1);
    }
  }

  return { counter, byYear };
}

function getRotation(mode) {
  if (mode === "none") return () => 0;
  if (mode === "angled") return () => (Math.random() > 0.5 ? 45 : -45);
  return () => (Math.random() > 0.5 ? 0 : 90);
}

function getCloudDimensions() {
  const rect = els.cloudWrap.getBoundingClientRect();
  return {
    width: Math.max(320, Math.floor(rect.width)),
    height: Math.max(400, Math.floor(rect.height))
  };
}

function renderCloud(words, opts) {
  const { width, height } = getCloudDimensions();
  els.cloudSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  els.cloudSvg.setAttribute("width", width);
  els.cloudSvg.setAttribute("height", height);

  const svg = d3.select(els.cloudSvg);
  svg.selectAll("*").remove();

  if (!words.length) {
    els.cloudEmpty.hidden = false;
    return;
  }
  els.cloudEmpty.hidden = true;

  if (typeof d3.layout?.cloud !== "function") {
    els.cloudEmpty.hidden = false;
    els.cloudEmpty.textContent = "Word cloud library failed to load. Check your network connection.";
    return;
  }

  const max = d3.max(words, (d) => d.value) || 1;
  const min = d3.min(words, (d) => d.value) || 1;
  const sizeScale = d3.scaleSqrt().domain([min, max]).range([16, 80]);
  const color = palettes[opts.palette];

  const layout = d3.layout
    .cloud()
    .size([width, height])
    .words(words.map((d) => ({ text: d.word, size: sizeScale(d.value), value: d.value })))
    .padding(3)
    .rotate(getRotation(opts.rotationMode))
    .spiral(opts.layoutMode)
    .font("sans-serif")
    .fontSize((d) => d.size)
    .on("end", (layoutWords) => {
      if (!layoutWords?.length) {
        els.cloudEmpty.hidden = false;
        els.cloudEmpty.textContent = "Could not layout word cloud. Try fewer words or different rotation.";
        return;
      }

      els.cloudEmpty.hidden = true;

      svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .selectAll("text")
        .data(layoutWords)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style("font-family", "system-ui, sans-serif")
        .style("fill", (_, i) => color(i, layoutWords.length))
        .style("cursor", "default")
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text((d) => d.text)
        .append("title")
        .text((d) => `${d.text}: ${d.value}`);
    });

  layout.start();
}

function renderTimeChart(topWords, byYear, yearMin, yearMax) {
  const labels = Array.from({ length: yearMax - yearMin + 1 }, (_, i) => yearMin + i);
  const datasets = topWords.map((w, i) => ({
    label: w.word,
    data: labels.map((y) => byYear.get(w.word)?.get(y) || 0),
    borderColor: palettes.category10(i),
    backgroundColor: palettes.category10(i),
    tension: 0.2
  }));

  if (chart) chart.destroy();
  chart = new Chart(els.timeChart.getContext("2d"), {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Word count per year" } },
        x: { title: { display: true, text: "Year" } }
      }
    }
  });
}

function currentOptions() {
  return {
    maxWords: Number(els.maxWords.value),
    minLength: Number(els.minLength.value),
    layoutMode: els.layoutMode.value,
    rotationMode: els.rotationMode.value,
    palette: els.palette.value,
    titlesOnly: els.titlesOnly.checked,
    yearMin: Number(els.yearMin.value),
    yearMax: Number(els.yearMax.value),
    trackedWords: Number(els.trackedWords.value)
  };
}

function render() {
  if (!papers.length) return;

  const opts = currentOptions();
  const { counter, byYear } = computeWordStats(papers, opts);
  const ranked = Array.from(counter.entries())
    .map(([word, value]) => ({ word, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, opts.maxWords);

  renderCloud(ranked, opts);
  renderTimeChart(ranked.slice(0, opts.trackedWords), byYear, opts.yearMin, opts.yearMax);
  setStatus(`${papers.length} papers · ${ranked.length} words shown`);
}

function queueRender() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    render();
  });
}

function setSidebarOpen(open) {
  els.controlsSidebar.classList.toggle("open", open);
  els.controlsSidebar.setAttribute("aria-hidden", String(!open));
  els.toggleControls.setAttribute("aria-expanded", String(open));
  els.sidebarBackdrop.hidden = !open;
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((x) => x.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`${tab.dataset.tab}Tab`).classList.add("active");
      queueRender();
    });
  });
}

function setupEvents() {
  const updateDisplayValues = () => {
    els.maxWordsValue.textContent = els.maxWords.value;
    els.minLengthValue.textContent = els.minLength.value;
  };

  [
    els.maxWords,
    els.minLength,
    els.layoutMode,
    els.rotationMode,
    els.palette,
    els.titlesOnly,
    els.yearMin,
    els.yearMax,
    els.trackedWords
  ].forEach((input) => input.addEventListener("input", () => {
    updateDisplayValues();
    queueRender();
  }));

  updateDisplayValues();

  els.toggleControls.addEventListener("click", () => {
    setSidebarOpen(!els.controlsSidebar.classList.contains("open"));
  });
  els.closeControls.addEventListener("click", () => setSidebarOpen(false));
  els.sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));

  els.themeToggle.addEventListener("click", () => {
    const dark = document.body.dataset.theme === "dark";
    document.body.dataset.theme = dark ? "light" : "dark";
    els.themeToggle.textContent = dark ? "🌙" : "☀️";
  });

  window.addEventListener("resize", queueRender);
}

async function init() {
  setupTabs();
  setupEvents();
  setStatus("Fetching publications…");

  try {
    papers = await fetchPublications();
    const years = papers.map((p) => p.year);
    const minY = Math.min(...years);
    const maxY = Math.max(...years);
    els.yearMin.value = minY;
    els.yearMax.value = maxY;
    els.yearMin.min = minY;
    els.yearMin.max = maxY;
    els.yearMax.min = minY;
    els.yearMax.max = maxY;
    render();
  } catch (err) {
    console.error(err);
    setStatus(`Could not load data: ${err.message}`);
    els.cloudEmpty.hidden = false;
    els.cloudEmpty.textContent = `Failed to load publications: ${err.message}`;
  }
}

init();
