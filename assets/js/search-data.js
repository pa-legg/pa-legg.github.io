// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "PhD studentships, research projects, external activities and code",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Taught modules, outreach workshops, and other teaching activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-ai-for-rapid-prototyping-in-education",
        
          title: 'AI for rapid prototyping in education <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/ai-for-rapid-prototyping-in-education-32fe4a89bea8?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-09-future-research-directions",
        
          title: 'Security Data Analytics — 09 — Future Research Directions <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-09-future-research-directions-4b6811d7c2c0?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-08-file-image-and-video-analytics",
        
          title: 'Security Data Analytics — 08 — File, Image and Video Analytics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-08-file-image-and-video-analytics-ca74bf915312?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-07-text-analytics",
        
          title: 'Security Data Analytics — 07 — Text Analytics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-07-text-analytics-72620bdd0028?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-06-visual-analytics",
        
          title: 'Security Data Analytics — 06 — Visual Analytics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-06-visual-analytics-d914156553cc?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-05-visualisation",
        
          title: 'Security Data Analytics — 05 — Visualisation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-05-visualisation-492820fd7cd0?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-04-machine-learning",
        
          title: 'Security Data Analytics — 04 — Machine Learning <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-04-machine-learning-5edef0e764f0?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-03-statistical-analysis",
        
          title: 'Security Data Analytics — 03 — Statistical Analysis <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-03-statistical-analysis-d0f0d944dcc0?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-a-pipeline-process",
        
          title: 'Security Data Analytics – A Pipeline Process <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/security-data-analytics-a-pipeline-process-9be6356f0a8d?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "post-security-data-analytics-an-introduction",
        
          title: 'Security Data Analytics - An Introduction <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@plegg/1-introduction-to-cyber-security-data-analytics-2e9b524c772b?source=rss-b5e2ee2ae6ee------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-book-chapter-on-developing-human-machine-decision-support-systems-for-insider-threat-detection-has-been-accepted-for-the-upcoming-springer-edited-book-data-analytics-and-decision-support-in-cybersecurity",
          title: 'My book chapter on developing human-machine decision support systems for insider threat detection...',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-by-the-bristol-post-to-advise-on-how-to-stay-safe-online-following-the-recent-wannacry-global-cyber-attack",
          title: 'I was interviewed by the Bristol Post to advise on how to stay...',
          description: "",
          section: "News",},{id: "news-alexander-downing-1st-year-undergraduate-at-uwe-bristol-joins-the-ai-research-group-on-a-10-week-summer-internship-scheme-working-with-dr-legg-to-develop-visual-analytic-tools-for-interacting-with-machine-learning-processes",
          title: 'Alexander Downing (1st Year Undergraduate at UWE Bristol) joins the AI research group...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-adarga-to-give-a-talk-on-human-machine-collaboration-in-active-machine-learning",
          title: 'I was invited to Adarga to give a talk on “Human-Machine Collaboration in...',
          description: "",
          section: "News",},{id: "news-emmanuel-smith-presents-our-recent-work-on-time-series-event-prediction-using-long-short-term-memory-networks-at-the-uk-workshop-on-computational-intelligence-in-cardiff",
          title: 'Emmanuel Smith presents our recent work on time-series event prediction using Long Short-Term...',
          description: "",
          section: "News",},{id: "news-professor-min-chen-university-of-oxford-presents-our-recent-work-at-ieee-vis-in-phoenix-arizona-usa-on-how-communication-theory-can-inform-design-separability-in-glyph-visualisation-with-a-use-case-of-visualising-collaborative-employee-activity-across-complex-shared-file-servers",
          title: 'Professor Min Chen (University of Oxford) presents our recent work at IEEE VIS...',
          description: "",
          section: "News",},{id: "news-i-served-on-the-national-cyber-security-centre-part-of-gchq-assessment-panel-for-the-academic-centres-of-excellence-in-cyber-security-research-doctoral-studentships-programme",
          title: 'I served on the National Cyber Security Centre (part of GCHQ) assessment panel...',
          description: "",
          section: "News",},{id: "news-i-gave-a-guest-lecture-to-the-hci-research-group-at-the-university-of-bristol-on-visual-analytics-and-human-machine-collaboration-for-insider-threat-detection-i-was-also-invited-to-be-a-guest-judge-at-the-techmodal-raspberry-pi-developer-contest",
          title: 'I gave a guest lecture to the HCI research group at the University...',
          description: "",
          section: "News",},{id: "news-our-team-legg-smith-preen-have-been-awarded-funding-by-the-defence-science-and-technology-laboratory-dstl-in-order-to-conduct-research-on-human-machine-collaboration-the-defence-and-security-accelerator-dasa-project-entitled-haste-human-centric-active-learning-for-decision-support-in-threat-exploration-will-commence-from-february-2018",
          title: 'Our team (Legg, Smith, Preen) have been awarded funding by the Defence Science...',
          description: "",
          section: "News",},{id: "news-research-by-our-team-in-the-ai-group-smith-legg-matovic-and-the-uwe-psychology-department-kinsey-has-been-accepted-for-journal-publication-in-acm-transactions-on-interactive-intelligent-systems-tiis-the-paper-entitled-predicting-user-s-confidence-during-visual-decision-making-will-be-included-in-an-upcoming-special-issue-on-the-topic-of-human-centered-machine-learning",
          title: 'Research by our team in the AI group (Smith, Legg, Matovic) and the...',
          description: "",
          section: "News",},{id: "news-i-have-been-appointed-as-programme-leader-for-the-new-msc-cyber-security-at-uwe-bristol-we-are-currently-looking-to-recruit-talented-and-motivated-students-who-are-interested-to-gain-skills-for-dealing-with-modern-threats-in-cyber-space-for-our-first-intake-of-september-2018-please-visit-the-course-page-for-futher-detail-and-information-on-how-to-apply",
          title: 'I have been appointed as programme leader for the new MSc Cyber Security...',
          description: "",
          section: "News",},{id: "news-i-am-a-program-chair-for-the-international-conference-on-engineering-applications-of-neural-networks-eann-2018-that-will-be-held-at-uwe-bristol-in-september-i-am-also-a-session-chair-for-collective-distributed-and-multi-criteria-decision-making-approaches-for-supporting-cyber-physical-security-analytics-at-the-ieee-international-conference-on-systems-man-and-cybernetics-smc-2018-the-making-of-a-human-centered-cyber-world",
          title: 'I am a Program Chair for the International Conference on Engineering Applications of...',
          description: "",
          section: "News",},{id: "news-our-recent-work-xu-cao-li-legg-p-and-liu-entitled-venue2vec-an-efficient-embedding-model-for-fine-grained-user-location-prediction-in-geo-social-networks-has-been-published-in-the-ieee-systems-journal-our-work-on-establishing-a-uk-community-within-cyber-security-education-with-colleagues-from-abertay-and-kingston-was-presented-at-the-ncsc-flagship-conference-cyber-uk",
          title: 'Our recent work (Xu, Cao, Li, Legg, P. and Liu) entitled ``Venue2Vec: An...',
          description: "",
          section: "News",},{id: "news-i-served-as-an-assessment-panel-member-for-the-2018-ukri-centre-for-doctoral-training-in-artificial-intelligence-programme",
          title: 'I served as an assessment panel member for the 2018 UKRI Centre for...',
          description: "",
          section: "News",},{id: "news-i-am-attending-the-colloquium-for-information-systems-security-education-cisse-in-new-orleans-with-colleagues-from-academia-and-government-as-part-of-an-initiative-for-developing-a-uk-cyber-security-skills-network-i-am-also-presenting-as-part-of-the-bristol-festival-of-learning-on-the-topic-of-what-do-we-really-mean-by-cyber-security",
          title: 'I am attending the Colloquium for Information Systems Security Education (CISSE) in New...',
          description: "",
          section: "News",},{id: "news-two-undergraduate-students-have-joined-the-computer-science-research-centre-that-i-am-supervising-as-part-of-the-uwe-summer-internship-scheme-adam-chakof-is-working-with-myself-and-dr-fiona-carroll-on-visualising-cyber-space-for-non-expert-users-and-anirudh-singh-is-working-with-myself-and-prof-jim-smith-on-understanding-user-confidence-and-trust-when-labelling-data-for-machine-learning-classifiers",
          title: 'Two undergraduate students have joined the Computer Science Research Centre that I am...',
          description: "",
          section: "News",},{id: "news-research-by-phd-candidate-emmanuel-smith-entitled-visualising-state-space-representations-of-lstm-networks-has-been-accepted-for-the-workshop-on-visualization-for-ai-explainability-co-located-with-ieee-vis-2018",
          title: 'Research by PhD candidate Emmanuel Smith entitled ``Visualising State Space Representations of LSTM...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-the-cybersecurity-infrastructure-configuration-training-with-palo-alto-networks-to-become-a-palo-alto-networks-cybersecurity-academy-instructor-i-presented-our-dasa-funded-project-on-human-centric-active-learning-for-decision-support-in-threat-exploration-at-the-dstl-science-and-technology-autonomy-event-i-am-also-delighted-to-announce-that-have-recently-been-appointed-to-the-position-of-associate-professor-of-cyber-security-at-uwe-bristol",
          title: 'I successfully completed the Cybersecurity Infrastructure Configuration training with Palo Alto Networks, to...',
          description: "",
          section: "News",},{id: "news-i-presented-research-at-the-1st-interdisciplinary-symposium-on-organised-crime-on-the-topic-of-cybercrime-and-insider-threat-can-ai-save-us-from-these-adversaries-hosted-by-the-centre-for-applied-legal-research-at-uwe-bristol-i-also-attended-the-south-west-security-awareness-special-interest-group-sasig-event-in-bristol",
          title: 'I presented research at the 1st Interdisciplinary Symposium on Organised Crime, on the...',
          description: "",
          section: "News",},{id: "news-i-am-currently-recruiting-for-a-3-year-fully-funded-phd-scholarship-working-in-the-area-of-cyber-security-at-uwe-bristol-this-project-aims-to-explore-the-utilisation-of-blockchain-technology-within-secure-military-defence-environments-for-sharing-of-collaborative-supply-chain-documents-that-may-contain-both-public-and-private-elements-the-project-is-funded-jointly-by-uwe-bristol-and-techmodal-ltd-please-get-in-touch-if-you-are-interested-or-would-like-to-discuss-this-post-further-full-details-are-available-here",
          title: 'I am currently recruiting for a 3-year fully-funded PhD scholarship, working in the...',
          description: "",
          section: "News",},{id: "news-i-attended-the-national-cyber-security-centre-ncsc-annual-education-event-inspiring-and-educating-future-generations-in-cyber-security-at-the-event-colleagues-and-i-presented-our-work-on-developing-a-greater-sense-of-community-and-sharing-within-uk-cyber-security-education-we-launched-the-uk-chapter-of-the-colloqium-for-information-systems-security-education-cisse-uk",
          title: 'I attended the National Cyber Security Centre (NCSC) annual education event, “Inspiring and...',
          description: "",
          section: "News",},{id: "news-i-served-on-the-national-cyber-security-centre-part-of-gchq-assessment-panel-for-the-academic-centres-of-excellence-in-cyber-security-research-doctoral-studentships-programme",
          title: 'I served on the National Cyber Security Centre (part of GCHQ) assessment panel...',
          description: "",
          section: "News",},{id: "news-our-recent-work-on-human-machine-collaboration-to-improve-performance-of-active-machine-learning-has-been-published-in-the-human-centric-computing-and-information-sciences-journal-the-work-by-our-team-legg-smith-downing-studies-how-visual-analytics-can-help-inform-humans-in-the-development-of-machine-learning-models-to-identify-limitations-and-robustness-of-models-when-learning-from-small-limited-data-samples-we-also-demonstrate-how-both-humans-and-machines-can-inform-each-other-on-their-levels-of-confidence-when-performing-such-tasks-to-suitably-account-for-uncertainty-in-further-decision-making-tasks",
          title: 'Our recent work on human-machine collaboration to improve performance of active machine learning...',
          description: "",
          section: "News",},{id: "news-cisseuk-hosted-a-one-day-workshop-on-how-we-teach-students-about-experience-as-the-main-barrier-to-entry-for-many-students-academics-consider-how-best-to-integrate-experience-as-a-skill-that-students-can-report-on-when-interviewing-for-roles-it-was-a-productive-and-insightful-workshop-with-a-number-of-interesting-outcomes-reported-we-also-took-our-bsc-and-msc-students-on-a-field-trip-to-abertay-university-to-the-securitay-conference-this-is-a-largest-student-organised-security-conference-in-europe-and-was-a-fantastic-opportunity-to-offer-our-students",
          title: 'CISSEUK hosted a one-day workshop on how we teach students about `experience’. As...',
          description: "",
          section: "News",},{id: "news-our-recent-work-mills-spyridopoulos-legg-entitled-efficient-and-interpretable-real-time-malware-detection-using-random-forest-has-been-accepted-for-the-2019-ieee-international-conference-on-cyber-situational-awareness-cybersa-alan-mills-2nd-year-bsc-forensic-computing-and-security-undergraduate-at-uwe-led-the-work-on-developing-a-light-weight-raspberry-pi-malware-classifier-system-that-not-only-detects-malware-in-real-time-but-also-allows-users-to-examine-and-assess-how-the-classifier-has-made-the-decision-he-will-present-the-work-at-this-year-s-conference-which-will-be-held-at-the-university-of-oxford-in-june",
          title: 'Our recent work (Mills, Spyridopoulos, Legg) entitled ``Efficient and Interpretable Real-Time Malware Detection...',
          description: "",
          section: "News",},{id: "news-working-with-colleagues-in-the-faculty-of-business-and-law-and-with-synalogik-we-have-successfully-attracted-innovateuk-funding-for-developing-ai-methods-in-risk-analysis-and-assessment-we-have-also-successfully-secured-an-internship-working-with-the-ncsc-in-the-area-of-malware-visualisation-our-uwecyber-outreach-work-has-continued-and-three-students-thomas-higgs-pennie-spruhan-and-avin-karim-have-been-running-scalectrix-hacking-events-in-schools-around-bristol",
          title: 'Working with colleagues in the Faculty of Business and Law, and with Synalogik,...',
          description: "",
          section: "News",},{id: "news-jonathan-white-msc-cyber-security-student-has-been-awarded-a-ncsc-summer-internship-to-work-on-improving-cyber-security-in-the-home-detection-analysis-and-understanding-of-iot-and-home-network-threats-for-non-expert-users-we-also-had-the-official-launch-event-of-our-new-cyber-security-enterprise-studio-with-chris-skidmore-mp-minister-of-state-for-universities-science-research-and-innovation-the-studio-will-aims-to-bring-students-and-industry-closer-to-work-on-short-projects-the-initiative-is-supported-by-the-institute-of-coding",
          title: 'Jonathan White (MSc Cyber Security student) has been awarded a NCSC Summer Internship...',
          description: "",
          section: "News",},{id: "news-alan-mills-2nd-year-bsc-forensic-computing-and-security-undergraduate-at-uwe-presented-efficient-and-interpretable-real-time-malware-detection-using-random-forest-at-the-2019-ieee-international-conference-on-cyber-situational-awareness-cybersa-hosted-at-the-university-of-oxford-uwecyber-hosted-the-bsides-bristol-security-conference-on-20-21-june-i-attended-the-cisse-conference-in-las-vegas-10-12-june-and-presented-on-cyber-security-education-in-the-uk",
          title: 'Alan Mills (2nd year BSc Forensic Computing and Security undergraduate at UWE) presented...',
          description: "",
          section: "News",},{id: "news-uwe-hosted-the-first-cisse-uk-workshop-with-over-70-attendees-from-academia-industry-and-government-uwe-also-hosted-a-teacher-s-workshop-for-cyber-security-curriculum-that-saw-over-30-school-teachers-in-bristol-attend-and-contribute-towards-how-industry-and-academia-can-help-improve-schooling-in-cyber-security-uwecyber-hosted-a-join-seminar-with-the-centre-for-transport-and-society-on-the-future-of-connected-and-autonomous-vehicles",
          title: 'UWE hosted the first CISSE UK workshop, with over 70 attendees from academia,...',
          description: "",
          section: "News",},{id: "news-we-welcomed-two-new-phd-students-to-the-uwecyber-group-gwyn-wilkinson-and-andrew-mccarthy-they-are-both-working-with-our-industry-collaborator-techmodal-to-support-novel-research-initiatives-in-line-with-the-needs-of-defence-and-national-security-gwyn-is-working-in-the-area-of-privacy-preserving-techniques-and-andy-is-working-in-the-area-of-adversarial-machine-learning",
          title: 'We welcomed two new PhD students to the UWEcyber group, Gwyn Wilkinson and...',
          description: "",
          section: "News",},{id: "news-we-welcomed-alan-mills-to-join-the-uwecyber-group-working-as-a-research-assistant-on-an-industry-collaboration-alan-will-work-with-our-partner-vq-communications-via-the-foundry-initiative-at-uwe-that-links-students-with-paid-employment-opportunities-in-industry-he-will-be-working-on-a-7-month-project-to-conduct-penetration-testing-on-their-video-conferencing-software-and-hardware-appliances",
          title: 'We welcomed Alan Mills to join the UWEcyber group working as a research...',
          description: "",
          section: "News",},{id: "news-working-with-three-bsc-forensic-computing-and-security-students-pennie-spruhan-avin-karim-and-abbey-russell-jeffrey-we-hosted-a-workshop-as-part-of-the-ncsc-cyberschoolshub-empowercyber-project-this-was-a-one-day-event-where-800-year-8-girls-across-gloucestershire-attended-to-take-part-in-cyber-security-and-computer-science-challenges-put-on-by-industry-and-academia-we-were-delighted-to-be-a-part-of-this-event-and-it-was-fantastic-to-help-inspire-a-new-generation-of-computer-scientists-into-cyber-security",
          title: 'Working with three BSc Forensic Computing and Security students, Pennie Spruhan, Avin Karim,...',
          description: "",
          section: "News",},{id: "news-research-by-jon-white-and-myself-was-presented-at-the-ncsc-annual-education-conference-on-the-topic-of-profiling-home-iot-devices-we-also-hosted-the-annual-unlockcyber-schools-outreach-event-that-saw-300-students-across-bristol-attend-uwe-for-a-day-of-cyber-security-workshops",
          title: 'Research by Jon White and myself was presented at the NCSC Annual Education...',
          description: "",
          section: "News",},{id: "news-i-am-working-with-colleagues-in-the-bristol-robotics-laboratory-on-the-cavforth-project-this-project-is-exploring-the-cyber-security-considerations-around-connected-and-autonomous-vehicles-to-develop-a-fully-autonomous-bus-for-commuting-on-the-forth-bridge-in-edinburgh-i-also-acted-as-an-external-phd-examiner-at-cardiff-university-reviewing-work-in-the-area-of-malware-analysis-and-propagation-via-social-networks",
          title: 'I am working with colleagues in the Bristol Robotics Laboratory on the ``CAVForth’’...',
          description: "",
          section: "News",},{id: "news-i-served-as-chair-for-the-ncsc-cyberfirst-schools-panel-and-as-a-panel-reviewer-for-the-ncsc-master-certification-panel",
          title: 'I served as Chair for the NCSC CyberFirst schools panel, and as a...',
          description: "",
          section: "News",},{id: "news-we-have-been-successful-in-attracting-research-funding-from-the-cyber-security-body-of-knowledge-to-pursue-the-project-teaching-cybok-cyber-physical-systems-security-through-interactive-simulation-more-details",
          title: 'We have been successful in attracting research funding from the Cyber Security Body...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-cardiff-university-cybersecurity-privacy-and-human-computer-collaboration-seminar-light-bulbs-and-race-cars-cyber-security-education-using-remote-cyber-physical-systems",
          title: 'I presented at the Cardiff University Cybersecurity, Privacy and Human-Computer Collaboration Seminar: “Light...',
          description: "",
          section: "News",},{id: "news-i-gave-a-keynote-talk-at-this-year-s-ieee-cyber-science-2021-conference-to-address-the-conference-theme-of-advancing-cyber-security-education-in-a-post-covid-world-i-also-presented-work-on-hacking-the-iot-home-as-part-of-cyber-security-outreach-projects-we-have-conducted-over-the-last-18-months",
          title: 'I gave a Keynote talk at this year’s IEEE Cyber Science 2021 conference...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-be-recognised-as-a-full-member-of-the-chartered-institute-of-information-security-ciisec",
          title: 'I am delighted to be recognised as a Full Member of the Chartered...',
          description: "",
          section: "News",},{id: "news-we-have-been-successful-in-attracting-funding-from-the-national-cyber-security-centre-to-support-teacher-training-workshops-as-part-of-our-ace-cse-we-welcomed-a-new-cohort-of-over-70-msc-cyber-security-students-to-uwe-this-month",
          title: 'We have been successful in attracting funding from the National Cyber Security Centre...',
          description: "",
          section: "News",},{id: "news-we-have-been-successful-in-attracting-funding-to-support-the-development-of-a-new-cyber-security-and-cyber-crime-research-cluster-within-the-university-i-was-part-of-a-panel-for-the-future-impact-podcast-series-discussing-the-pros-and-cons-of-cryptocurrencies-i-successfully-passed-the-comptia-pentest-pt0-002-and-gained-the-comptia-network-vulnerability-assessment-cnvp-recognition-i-also-acted-as-an-external-phd-examiner-at-kingston-university-reviewing-work-in-the-area-of-steganography-and-encryption-for-mobile-banking-and-i-served-as-an-external-assessor-for-the-open-university-in-the-development-of-a-new-cyber-security-distance-learning-module",
          title: 'We have been successful in attracting funding to support the development of a...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-guest-editor-for-the-mdpi-journal-of-cybersecurity-and-privacy-hosting-a-special-issue-on-machine-learning-and-data-analytics-for-cyber-security-i-am-also-a-co-organiser-of-the-7th-international-conference-on-cyber-security-and-privacy-in-communication-networks-iccs-2021-working-with-colleagues-from-cardiff-metropolitan-university-and-university-of-south-wales-to-be-hosted-online-early-december-i-am-also-the-course-director-of-the-new-institute-of-coding-skills-bootcamps-in-cyber-security-hosted-by-uwe-which-start-this-month-i-am-delighted-to-announce-that-i-have-been-promoted-by-the-university-to-the-rank-of-full-professor",
          title: 'I am serving as a guest editor for the MDPI Journal of Cybersecurity...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-guest-lecture-as-part-of-the-cardiff-university-doctoral-training-hub-seminar-series-on-hci-and-cyber-security-boundaries-and-fusion",
          title: 'I gave an invited guest lecture as part of the Cardiff University Doctoral...',
          description: "",
          section: "News",},{id: "news-we-have-launched-our-cyber-security-and-cyber-crime-cluster-we-have-started-our-institute-of-coding-cyber-skills-bootcamp-and-we-have-started-our-cyber-security-education-workshop-for-school-teachers-we-have-welcomed-our-january-2022-intake-to-our-msc-cyber-security-programme-we-have-delivered-another-round-of-our-scale-up-4-growth-gloucestershire-workshop-on-cyber-security-to-industry-members-through-our-partnership-with-gloucestershire-college-we-have-welcomed-a-new-phd-student-james-barrett-to-the-csct-department-who-will-work-with-ribbon-communications-on-cyber-security-in-5g-networks",
          title: 'We have launched our Cyber Security and Cyber Crime Cluster. We have started...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-guest-lecture-for-city-of-bristol-college-on-cyber-security-and-the-global-pandemic-i-served-on-the-discribe-hub-assessment-panel-i-hosted-a-splunk4rookies-workshop-event-in-collaboration-with-splunk",
          title: 'I was invited to give a guest lecture for City of Bristol College...',
          description: "",
          section: "News",},{id: "news-andrew-mccarthy-3rd-year-phd-student-has-published-his-recent-work-functionality-preserving-adversarial-machine-learning-for-robust-classification-in-cybersecurity-and-intrusion-detection-domains-a-survey-which-has-been-accepted-by-the-mdpi-journal-of-cybersecurity-and-privacy",
          title: 'Andrew McCarthy (3rd Year PhD student) has published his recent work, “Functionality-preserving Adversarial...',
          description: "",
          section: "News",},{id: "news-i-was-an-invited-guest-speaker-for-the-uk-cyber-security-council-leader-s-briefing-i-was-also-an-invited-guest-speaker-for-the-let-s-make-tech-inclusive-event-hosted-by-london-borough-of-redbridge-i-attended-cyberuk-2022-the-annual-government-flagship-event-for-cyber-security",
          title: 'I was an invited guest speaker for the UK Cyber Security Council Leader’s...',
          description: "",
          section: "News",},{id: "news-uwe-hosted-another-annual-unlock-cyber-day-that-saw-310-students-and-21-schools-come-to-learn-about-cyber-security-at-uwe-bristol-we-had-industry-partners-offering-workshops-as-well-as-our-cyber-scalextric-project-running-for-students-to-play-with-a-hack-the-scoreboards-watch-the-video-from-unlock-cyber-2022-here-working-with-psychology-we-have-been-successful-in-attracting-funding-for-a-project-building-a-place-based-approach-to-preventing-online-sexual-abuse-the-project-will-commence-in-september-2022",
          title: 'UWE hosted another annual Unlock Cyber day that saw 310 students and 21...',
          description: "",
          section: "News",},{id: "news-as-part-of-cisseuk-i-co-organised-cyber-education-2022-at-roehampton-university-that-saw-industry-academia-and-government-come-together-to-learn-about-cyber-security-education-challenges-and-display-practical-projects-that-address-solutions-alan-mills-presented-our-recent-paper-ogma-visualisation-for-software-container-security-analysis-and-automated-remediation-at-the-2022-ieee-international-conference-on-cyber-security-and-resilience-i-hosted-a-one-day-workshop-on-cyber-security-and-policing-research-as-part-of-the-cyber-security-and-cyber-crime-research-cluster",
          title: 'As part of CISSEUK, I co-organised Cyber Education 2022 at Roehampton University that...',
          description: "",
          section: "News",},{id: "news-i-gave-a-guest-talk-for-the-ncsc-cyberfirst-futures-programme-on-career-routes-in-technology-and-getting-into-cyber-security",
          title: 'I gave a guest talk for the NCSC CyberFirst Futures programme on career...',
          description: "",
          section: "News",},{id: "news-we-have-successful-won-funding-from-the-serapis-framework-project-to-conduct-a-review-of-autonomous-resilience-in-cyber-defence-working-with-trimetis-and-pa-consulting",
          title: 'We have successful won funding from the SERAPIS framework project, to conduct a...',
          description: "",
          section: "News",},{id: "news-i-contributed-to-the-casugol-60s-video-series-to-provide-advice-to-those-starting-out-for-cyber-security-careers",
          title: 'I contributed to the CASUGOL 60s video series, to provide advice to those...',
          description: "",
          section: "News",},{id: "news-jonathan-white-and-myself-presented-work-at-the-online-cisse-conference-jonathan-presented-our-paper-entitled-interactive-cyber-physical-system-hacking-engaging-students-early-using-scalextric-whilst-i-presented-work-entitled-teaching-offensive-and-defensive-cyber-security-in-schools-using-a-raspberry-pi-cyber-range-jonathan-white-and-myself-have-also-been-accepted-for-an-upcoming-book-chapter-on-federated-learning-data-privacy-and-cyber-security-in-edge-based-machine-learning-for-the-book-entitled-data-protection-in-a-post-pandemic-society-dppps-best-practices-laws-regulations-and-recent-solutions",
          title: 'Jonathan White and myself presented work at the online CISSE conference. Jonathan presented...',
          description: "",
          section: "News",},{id: "news-andrew-mccarthy-3rd-year-phd-student-has-successfully-been-accepted-for-publication-of-his-recent-work-defending-against-adversarial-machine-learning-attacks-using-hierarchical-learning-a-case-study-on-network-traffic-attack-classification-in-the-journal-of-information-security-and-applications-i-also-served-as-a-phd-external-examiner-for-de-montfort-university-leicester-on-the-topic-of-re-identification-attacks-on-anonymised-databases",
          title: 'Andrew McCarthy (3rd Year PhD student) has successfully been accepted for publication of...',
          description: "",
          section: "News",},{id: "news-invited-panel-hosted-by-dsit-on-regional-cyber-skills",
          title: 'Invited panel hosted by DSIT on regional cyber skills',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-27-dsit-panel-engine-shed/";
            },},{id: "news-thanks-to-all-uwecyber-speakers-for-2023",
          title: 'Thanks to all UWEcyber speakers for 2023!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-20-thanks-uwecyber-speakers/";
            },},{id: "news-cyberuk-2024-in-birmingham",
          title: 'CyberUK 2024 in Birmingham',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-05-cyberuk2024/";
            },},{id: "news-congratulations-to-our-new-graduates",
          title: 'Congratulations to our new graduates!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-18-graduation/";
            },},{id: "news-uwecyber-shortlisted-for-cyber-university-of-the-year-2024",
          title: 'UWEcyber shortlisted for Cyber University of the Year 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-01-shortlisted-for-cyber-university-of-the-year/";
            },},{id: "news-welcome-to-two-new-phd-students-yen-and-michael",
          title: 'Welcome to two new PhD students, Yen and Michael',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-01-welcome-yen-and-michael/";
            },},{id: "news-a-year-in-review-2024",
          title: 'A year in review 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-23-year-in-review/";
            },},{id: "news-edited-book-on-advances-in-teaching-and-learning-for-cyber-security-education",
          title: 'Edited book on Advances in Teaching and Learning for Cyber Security Education',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-01-cse-book/";
            },},{id: "news-10-years-at-uwe",
          title: '10 years at UWE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-09-10years-UWE/";
            },},{id: "news-invited-talk-at-university-of-plymouth",
          title: 'Invited talk at University of Plymouth',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-12-plymouth-talk/";
            },},{id: "news-belkasoft-forensics-training",
          title: 'Belkasoft Forensics Training',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-28-belkasoft/";
            },},{id: "news-new-research-paper-on-machine-learning-based-software-fuzzing",
          title: 'New research paper on machine learning-based software fuzzing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-30-mtfuzz-paper/";
            },},{id: "news-new-research-paper-on-industrial-control-systems-cyber-threat-simulation",
          title: 'New research paper on industrial control systems cyber threat simulation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-28-trist/";
            },},{id: "news-cyberuk-2025-in-manchester",
          title: 'CyberUK 2025 in Manchester',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-cyberuk2025/";
            },},{id: "news-sparkles-a-long-overdue-refresh-of-my-web-pages-sparkles-smile",
          title: ':sparkles: A long overdue refresh of my web pages :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-congratulations-to-sadegh-for-passing-his-phd",
          title: 'Congratulations to Sadegh for passing his PhD!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-13-02-sadegh/";
            },},{id: "news-appointed-to-uk-government-cyber-advisory-board",
          title: 'Appointed to UK Government Cyber Advisory Board',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-18-gcab/";
            },},{id: "news-presented-at-the-usa-ncyte-cyber-security-across-disciplines-conference",
          title: 'Presented at the USA NCyTE Cyber Security Across Disciplines conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-27-cyad/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-facebounce",
          title: 'Facebounce',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2010_fundusreg%20copy/";
            },},{id: "projects-fundus-slo-registration",
          title: 'Fundus-SLO Registration',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2010_fundusreg/";
            },},{id: "projects-matchpad",
          title: 'MatchPad',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2011_matchpad/";
            },},{id: "projects-pocketcoder",
          title: 'PocketCoder',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2011_pocketcoder/";
            },},{id: "projects-shipping-forecast",
          title: 'Shipping Forecast',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2011_shipping-forecast/";
            },},{id: "projects-tide-times",
          title: 'Tide Times',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2011_tidetimes/";
            },},{id: "projects-insidervis",
          title: 'InsiderVis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2015_insidervis/";
            },},{id: "projects-interactive-pca",
          title: 'Interactive PCA',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2015_interactivepca/";
            },},{id: "projects-activate-visual-analytics-in-active-machine-learning",
          title: 'ActiVAte - Visual Analytics in Active Machine Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2018_activate/";
            },},{id: "projects-haste",
          title: 'HASTE',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2019_haste/";
            },},{id: "projects-phishvis",
          title: 'PhishVis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2019_phishvis/";
            },},{id: "projects-morrigu-anti-evasion-malware-analysis",
          title: 'MORRIGU - Anti-Evasion Malware Analysis',
          description: "Alan Mills and Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_2020_morrigu/";
            },},{id: "projects-mitigating-poisoning-attacks-in-federated-learning-environment",
          title: 'Mitigating poisoning attacks in federated learning environment',
          description: "Aimen Djemaa",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_aimen-djemaa/";
            },},{id: "projects-methods-for-improving-robustness-against-adversarial-machine-learning-attacks",
          title: 'Methods for improving robustness against adversarial machine learning attacks',
          description: "Andrew McCarthy (2023)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_andy-mccarthy/";
            },},{id: "projects-design-of-a-secure-digital-twin-to-detect-and-mitigate-advanced-persistent-threats-on-cyber-physical-systems-in-smart-manufacturing",
          title: 'Design of a secure digital twin to detect and mitigate advanced persistent threats...',
          description: "Carol Lo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_carol-lo/";
            },},{id: "projects-interactive-machine-learning-for-identifying-threats-to-security-and-service-in-large-scale-mobile-networks",
          title: 'Interactive machine learning for identifying threats to security and service in large-scale mobile...',
          description: "James Barrett",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_james-barrett/";
            },},{id: "projects-security-privacy-and-performance-analysis-of-federated-learning-systems",
          title: 'Security, privacy and performance analysis of federated learning systems',
          description: "Jonathan White",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_jon-white/";
            },},{id: "projects-cybersecurity-for-the-internet-of-medical-things",
          title: 'Cybersecurity for the internet of medical things',
          description: "Mia Smith",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_mia-smith/";
            },},{id: "projects-a-defence-model-for-large-language-models-llms-against-multi-turn-jailbreak-attacks",
          title: 'A defence model for large language models (LLMs) against multi-turn jailbreak attacks',
          description: "Michael Tchuindjang",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_michael-tchundjang/";
            },},{id: "projects-advancing-software-fuzzing-techniques-through-the-exploration-of-cryptographic-concepts-and-machine-learning",
          title: 'Advancing software fuzzing techniques through the exploration of cryptographic concepts and machine learning...',
          description: "Sadegh Bamohabbat Chafjiri (2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_sadegh-bamohabbat/";
            },},{id: "projects-advancing-rust-based-malware-analysis",
          title: 'Advancing rust-based malware analysis',
          description: "Yen Wang",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd_yen-wang/";
            },},{id: "projects-tri-partite-multimedia-object-description",
          title: 'TRI-Partite multimedia Object Description',
          description: "Phil Legg (RA), Mark Hall, Jonathan Quinn, Philip Smart, Christopher Jones",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2009_tripartite/";
            },},{id: "projects-sports-video-visualisation",
          title: 'Sports Video Visualisation',
          description: "Phil Legg (RA), David Chung, Matthew Parry, Iwan Griffiths, David Marshall, Min Chen",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2010_spotsviz/";
            },},{id: "projects-citd-corporate-insider-threat-detection",
          title: 'CITD - Corporate Insider Threat Detection',
          description: "Phil Legg (RA), Jason Nurse, Oliver Buckley, Jassim Happa, Ioannis Agrafiotis, Michael Goldsmith, Sadie Creese",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2013_citd/";
            },},{id: "projects-enhanced-personal-situational-awareness-through-network-and-systems-visualization",
          title: 'Enhanced personal situational awareness through network and systems visualization',
          description: "Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2015_enhancedpsa/";
            },},{id: "projects-richerpicture-automated-network-defence-through-business-and-threat-led-machine-learning",
          title: 'RicherPicture - Automated network defence through business and threat-led machine learning',
          description: "Jassim Happa, Phil Legg, Thomas Bashford-Rogers, Ioannis Agrafiotis, Michael Goldsmith and Sadie Creese",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2015_richerpicture/";
            },},{id: "projects-creating-machine-intelligence-with-intelligent-interactive-visualisation",
          title: 'Creating Machine Intelligence with Intelligent Interactive Visualisation',
          description: "Phil Legg and Jim Smith",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2016_machineintel/";
            },},{id: "projects-haste-human-centric-active-learning-for-decision-support-in-threat-exploration",
          title: 'HASTE - Human-centric Active-learning for decision Support in Threat Exploration',
          description: "Phil Legg and Jim Smith",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2018_haste/";
            },},{id: "projects-interactive-inspection-of-adversarial-machine-learning-for-collaborative-human-machine-trust-and-security-in-data-driven-military-and-defence",
          title: 'Interactive Inspection of Adversarial Machine Learning for Collaborative Human-Machine Trust and Security in...',
          description: "Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2019_adversarial/";
            },},{id: "projects-application-penetration-testing",
          title: 'Application Penetration Testing',
          description: "Phil Legg and Alan Mills",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2019_applicationpentest/";
            },},{id: "projects-cyber-security-in-the-home-detecting-iot-threats",
          title: 'Cyber Security in the Home - Detecting IoT Threats',
          description: "Phil Legg and Jonathan White",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2019_cyberathome/";
            },},{id: "projects-shared-collaborative-project-planning-in-secure-federated-learning-environments",
          title: 'Shared Collaborative Project Planning in Secure Federated Learning Environments',
          description: "Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2019_securefederated/";
            },},{id: "projects-analysis-and-visualisation-of-ransomware-and-malicious-network-propagation",
          title: 'Analysis and Visualisation of Ransomware and Malicious Network Propagation',
          description: "Phil Legg and Jacob Williams",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2020_analysisvisransomware/";
            },},{id: "projects-cyber-security-assessment-for-project-cav-forth",
          title: 'Cyber Security Assessment for Project CAV Forth',
          description: "Phil Legg, Kun Wei, Chris Harper and Tony Pipe",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2020_cavsecurity/";
            },},{id: "projects-identifying-and-tackling-counter-terrorism-finances-through-investigation-automation-scout-a-fully-automated-enhanced-risk-assessment-engine",
          title: 'Identifying and Tackling Counter-Terrorism Finances through Investigation Automation (SCOUT A fully automated enhanced...',
          description: "Nic Ryder, Phil Legg and Henry Hillman",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2020_counterterrorism/";
            },},{id: "projects-teaching-cybok-cyber-physical-systems-security-through-interactive-simulation",
          title: 'Teaching CyBOK Cyber-Physical Systems Security through Interactive Simulation',
          description: "Phil Legg, Jon Stadon, and Ian Johnson",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2021_cybokcpss/";
            },},{id: "projects-co-creation-of-innovative-school-projects-for-teachers-to-improve-cyber-security-education",
          title: 'Co-creation of innovative school projects for teachers to improve cyber security education',
          description: "Phil Legg (PI), Ian Johnson and Elaine Brown",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2021_cocreationschools/";
            },},{id: "projects-cyber-security-and-cyber-crime-cluster-csc3",
          title: 'Cyber Security and Cyber Crime Cluster (CSC3)',
          description: "Phil Legg and Nic Ryder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_csc3/";
            },},{id: "projects-cyber-security-education-for-schools",
          title: 'Cyber Security Education for Schools',
          description: "Phil Legg, Aida Abzhaparova, Alan Mills, Zeinab Rezaeifar, Martin Webley, Ian Johnson",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_cybersecurityschools/";
            },},{id: "projects-cyber-security-and-data-governance-for-smes",
          title: 'Cyber Security and Data Governance for SMEs',
          description: "Phil Legg, Felix Ritchie, Aida Abzhaparova, Thomas Win, Elizabeth Green, Martin Webley, Ian Johnson",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_cybersecuritysme/";
            },},{id: "projects-measuring-the-suitability-of-artificial-intelligence-in-autonomous-resilience-for-cyber-defence-arcd",
          title: 'Measuring the Suitability of Artificial Intelligence in Autonomous Resilience for Cyber Defence (ARCD)...',
          description: "Craig Williams, Andrew McCarthy, Alasdair Vincent, Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_measuringsuitability/";
            },},{id: "projects-building-a-place-based-approach-to-preventing-online-sexual-abuse",
          title: 'Building a place-based approach to preventing online sexual abuse',
          description: "Kieran McCartan (PI), Ameila Anning, Ian Johnson, Matt Wood, Nick Addis, Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_placebasedapproach/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_telco/";
            },},{id: "projects-transform-suspicious-activity-reports-sars-uk-39-s-first-technology-line-of-defence",
          title: 'Transform Suspicious Activity Reports (SARs); UK&amp;#39;s First Technology Line of Defence',
          description: "Nic Ryder, Phil Legg, Demelza Hall, Sam Bourton, Diana Johnson",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_transformsuspicious/";
            },},{id: "projects-turing-network-development-awards",
          title: 'Turing Network Development Awards',
          description: "Matt Studley, Phil Legg (Co-I), Nic Ryder, and Felix Ritchie",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2022_turingnetwork/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2023_cybersandpit/";
            },},{id: "projects-cyberwest-west-of-england-schools-and-teachers",
          title: 'CyberWEST (West of England Schools and Teachers)',
          description: "Phil Legg, Aida Abzhaparova, Alan Mills, Alma Oracevic, Nirosha Holten, and Nathan Clarke",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2023_cyberwest/";
            },},{id: "projects-teaching-cybok-through-cyber-physical-systems",
          title: 'Teaching CyBOK through Cyber Physical Systems',
          description: "Alan Mills, Jonathan White and Phil Legg",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2023_cybok/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_2023_humansensor/";
            },},{id: "projects-resources-for-phd-students",
          title: 'Resources for PhD Students',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/resources_phdguide/";
            },},{id: "projects-cyber-security-analytics",
          title: 'Cyber Security Analytics',
          description: "MSc Cyber Security module (2021-present)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_csa/";
            },},{id: "projects-cyber-security-consultancy",
          title: 'Cyber Security Consultancy',
          description: "Final year BSc Cyber Security and Digital Forensics module (2024-present)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_csc/";
            },},{id: "projects-information-risk-management",
          title: 'Information Risk Management',
          description: "MSc Cyber Security module (2018-2021)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_irm/";
            },},{id: "projects-object-orientated-analysis-design-and-programming",
          title: 'Object-orientated Analysis, Design and Programming',
          description: "MSc Software Engineering module (2016-2018)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_ooadp/";
            },},{id: "projects-security-data-analytics-and-visualisation",
          title: 'Security Data Analytics and Visualisation',
          description: "Final year BSc Cyber Security and Digital Forensics module (2017-2024)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_sdav/";
            },},{id: "projects-security-management-in-practice",
          title: 'Security Management in Practice',
          description: "Final year BSc Cyber Security and Digital Forensics module (2015-2019)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching_smip/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%50%68%69%6C.%4C%65%67%67@%75%77%65.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/prof-phil-legg", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3460-5609", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Tn43ogoAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
