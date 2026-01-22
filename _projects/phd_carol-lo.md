---
layout: page
title: Micro-, Meso-, and Macro-Level Detection of Advanced Persistent Threats (APT) in Industrial Cyber-Physical Systems: A Focus on Living-off-the-Land Techniques
description: Carol Lo (2026)
img: assets/img/thumbs/phd-notepad.jpg
importance: 4
category: phd students
---

#### Abstract

Attacks on industrial Cyber Physical Systems (CPS) can cause severe and irreversible real-world impacts, as demonstrated by the Ukraine power grid attacks. Detecting cyber-physical threats remains challenging, particularly when adversaries employ Living-off-the-Land (LOTL) techniques that abuse legitimate tools, protocols, and system functions to evade conventional security controls. This thesis addresses the problem of detecting stealthy, multi-stage LOTL-based Advanced Persistent Threats (APT) in industrial CPS environments. To enable safe, repeatable, and realistic experimentation, this research develops a set of simulation-based testbeds and proposes a multi-level detection strategy that integrates evidence across process, network, and host domains, rather than detection in isolation in industry. 

The structured approach consists of three analytical levels. At the micro-level, an interpretable supervised deep learning-based anomaly detection method is used to perform multi-class classification of CPS process states, enabling detection of control manipulation beyond conventional binary and rule-based approaches. At the meso-level, a risk-based unsupervised learning approach is applied to identify high-risk OPC UA write operations capable of directly manipulating physical processes. In parallel, an interpretable, rule-driven, point-based anomaly scoring method aggregates heterogeneous host telemetry into time-bounded anomaly scores, amplifying weak and low-and-slow signals that may be overlooked in isolation. At the macro-level, a two-level decision fusion framework correlates heterogeneous evidence across time and domains. The first fusion layer integrates OT process and network anomalies, while the second integrates host-level evidence to restore situational awareness even when individual alerts are weak or unreliable. 

Experimental results demonstrate that cross-domain evidence integration using decision fusion significantly improves detection timeliness, interpretability, and situational awareness compared to single-layer detection. The proposed framework provides a practical, risk-aware, and extensible foundation for human-in-the-loop CPS security under realistic industrial constraints.

[Carol Lo - Academic Profile](https://people.uwe.ac.uk/Person/CarolLo)
