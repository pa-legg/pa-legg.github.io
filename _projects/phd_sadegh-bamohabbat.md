---
layout: page
title: Advancing software fuzzing techniques through the exploration of cryptographic concepts and machine learning
description: Sadegh Bamohabbat Chafjiri (2025)
img: assets/img/thumbs/phd-notepad.jpg
importance: 4
category: phd students
---

#### Abstract

Modern software and networks are the backbone of our digital society, yet they are increasingly susceptible to security vulnerabilities that malicious actors may exploit. Effectively addressing these vulnerabilities necessitates proactive and automated strategies to identify and mitigate risks, particularly within large-scale datasets. Fuzzing has emerged as a pivotal technique in this field; however, traditional methods encounter significant challenges related to deep bug discovery, input quality, and scalability. Leveraging machine learning (ML) techniques, including advanced architectures such as Long Short-Term Memory (LSTM), Generative Adversarial Networks (GANs), and Gated Recurrent Units (GRUs), and categorizing them provides a clear roadmap and perspective for solving the problem. This dissertation begins by categorizing the integration of various machine learning models, including Traditional ML (TML), Deep Learning (DL), Reinforcement Learning (RL), and Deep Reinforcement Learning (DRL), and reviews advancements, methodologies, and challenges in applying these paradigms to fuzzing.

Building on this foundation, we propose novel enhancements to fuzzing tools by integrating cryptographic structures. Specifically, we embedded substitution-permutation networks (SPNs) and Feistel networks (FNs) into the custom mutator of the AFL++ framework, referred to as the HonggFuzz library. This resulted in the development of a new custom mutator, HonggFuzz+, which demonstrates improved performance in identifying software bugs and discovering new code edges through optimised search space exploration. Preliminary experimental results, focusing on the number of unique bugs identified across various targets, validate the effectiveness of these methods in diversifying memory region relationships, paving the way for advancements in fuzzing tool development.

In the next stage, we extended the experiments to a wider range of targets and optimised the implementation of Feistel-inspired transformations (Feistel swaps) by integrating them directly into the baseline of AFL++. This approach eliminated the need for a custom mutator while streamlining the integration of cryptographic mutators and enhancing randomisation efficiency. Additionally, we addressed challenges related to code coverage and random number generation (RNG) bias by leveraging a larger-scale benchmark, fuzzbench. We present three innovative fuzzing models CAFL++, PCGAFL++, and CPCGAFL++. These integrate Feistel-inspired transformations and unbiased RNG mechanisms into AFL++, resulting in enhanced code coverage and stability. Our evaluation across multiple targets highlights the advantages of these approaches, particularly in reducing performance variability and enhancing bug discovery.

Finally, we investigate the role of neural network optimisations in fuzzing, employing techniques like LReLU to counteract gradient vanishing issues, Nesterov-accelerated Adaptive Moment Estimation (Nadam) for refined weight updates, and sensitivity analysis for model refinement. These innovations, coupled with game-theoretic insights, demonstrate significant improvements in fuzzing efficacy, achieving better accuracy, edge coverage, and unique bug identification compared to baseline methods. This dissertation thus contributes novel methodologies and insights to advance the state-of-the-art in software fuzzing, enhancing both its effectiveness and reliability in the evolving cybersecurity landscape.

#### Links

[Thesis - To appear online](#)

[Sadegh Bamohabbat Chafjiri - Academic Profile](https://people.uwe.ac.uk/Person/SadeghBamohabbatchafjiri)
