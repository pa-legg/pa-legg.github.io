---
layout: page
title: Micro, Meso, and Macro Level Detection of Advanced Persistent Threats (APT) in Industrial Cyber Physical Systems Techniques
description: Carol Lo (2026)
img: assets/img/thumbs/lo01.png
importance: 4
category: phd students (completed)
---

#### Abstract

Attacks on industrial Cyber-Physical Systems (CPS) can cause severe and irreversible real-world consequences, as demonstrated by incidents such as the Ukraine power grid attacks. Detecting cyber-physical threats remains challenging, particularly when adversaries employ Living-off-the-Land (LOTL) techniques that abuse legitimate tools, protocols, and system functions to evade conventional security controls. This thesis addresses the problem of detecting stealthy, multi-stage LOTL-based Advanced Persistent Threats (APT) in industrial CPS environments. 

To enable safe, repeatable, and realistic experimentation, this research develops a set of simulation-based cyber-physical testbeds and proposes a multi-level detection framework that integrates evidence across process, network, and host domains. Unlike conventional detection approaches that analyse these domains independently, this thesis introduces a unified two-level decision fusion strategy that correlates heterogeneous cyber and physical evidence under conditions of partial observability.

The proposed detection framework operates across three analytical levels. At the micro-level, an interpretable supervised deep learning anomaly detection method performs multi-class classification of CPS process states, enabling detection of control manipulation beyond conventional binary and rule-based approaches. 

At the meso-level, a risk-based unsupervised learning approach identifies high-risk OPC UA write operations capable of directly manipulating physical processes, while an interpretable point-based scoring mechanism aggregates heterogeneous host telemetry into time-bounded anomaly scores to amplify weak and low-and-slow attack signals. 

At the macro-level, a two-level decision fusion process correlates heterogeneous evidence across time and domains: the first fusion layer integrates process and network anomalies, and the second incorporates host anomalies to enhance situational awareness even when individual alerts are weak or ambiguous. 

Literature revealed significant challenges in accessing facilities that support cyber-physical experimentation, and the scarcity of representative APT datasets. These challenges motivated this research to investigate the design and implementation of simulation-based testbeds for the safe and repeatable simulation of multi-stage LOTL-based attacks, and the development and evaluation of detection strategies (RQ1).

The experimental results on two case studies related to quality-checking and pick-and-place processes demonstrate that process- and network-level anomalies provide reliable confirmation of physical manipulation in CPS, but are limited in their ability to provide early warning, whereas host-level anomalies offer earlier indicators of cyber-initiated intrusion (RQ2 - RQ3). 

By fusing heterogeneous evidence across process, network, and host domains, the proposed decision fusion mechanism significantly improves detection robustness, timeliness, interpretability, and situational awareness compared to single-layer detection approaches (RQ4). 

The framework functions as an additional analytical layer that complements existing security architectures. It provides a practical and extensible foundation for human-in-the-loop CPS security operations under industrial constraints, supporting earlier and more interpretable detection of cyber actions that escalate into physical consequences.

The findings contribute to CPS security research by establishing a cross-domain decision fusion framework under partial observability, highlighting the necessity of risk-aware and interpretable analytics for human-in-the-loop operations, and informing governance and industrial practice by demonstrating the importance of continuous cross-domain monitoring as a complement to preventive-centric security mechanisms in industrial CPS environments.

#### Links

[Carol Lo - Academic Profile](https://people.uwe.ac.uk/Person/CarolLo)
