---
layout: post
title: New research paper on machine learning-based software fuzzing 
date: 2025-04-28
inline: false
related_posts: false
---

Pleased to share a new publication by Sadegh Bamohabbat, Antisthenis Tsompanas, Jun Hong and myself on "Leveraging activation and optimisation layers as dynamic strategies in the multi-task fuzzing scheme" in the Computer Standards & Interfaces journal. Well done Sadegh Bamohabbat on leading this research.

In the paper we explore enhancements to neural network based software fuzzing technique MTFuzz, including different optimisation and activation functions in the neural network structure used. We find that by exploring parameter optimisation of the neural network structure we can ultimately improve the capability of identifying software vulnerabilities through fuzz testing. 

Full abstract and link below:
Fuzzing is a common technique for identifying vulnerabilities in software. Recent approaches, like She et al.’s Multi-Task Fuzzing (MTFuzz), use neural networks to improve fuzzing efficiency. However, key elements like network architecture and hyperparameter tuning are still not well-explored. Factors like activation layers, optimisation function design, and vanishing gradient strategies can significantly impact fuzzing results by improving test case selection. This paper delves into these aspects to improve neural network-driven fuzz testing.
We focus on three key neural network parameters to improve fuzz testing: the Leaky Rectified Linear Unit (LReLU) activation, Nesterov-accelerated Adaptive Moment Estimation (Nadam) optimisation, and sensitivity analysis. LReLU adds non-linearity, aiding feature extraction, while Nadam helps to improve weight updates by considering both current and future gradient directions. Sensitivity analysis optimises layer selection for gradient calculation, enhancing fuzzing efficiency.
Based on these insights, we propose LMTFuzz, a novel fuzzing scheme optimised for these Machine Learning (ML) strategies. We explore the individual and combined effects of LReLU, Nadam, and sensitivity analysis, as well as their hybrid configurations, across six different software targets. Experimental results demonstrate that LReLU, individually or when paired with sensitivity analysis, significantly enhances fuzz testing performance. However, when combined with Nadam, LReLU shows improvement on some targets, though less pronounced than its combination with sensitivity analysis. This combination improves accuracy, reduces loss, and increases edge coverage, with improvements of up to 23.8%. Furthermore, it leads to a significant increase in unique bug detection, with some targets detecting up to 2.66 times more bugs than baseline methods.

Paper: https://lnkd.in/eW-B3aZY

hashtag#cyber hashtag#security hashtag#software hashtag#testing hashtag#fuzzing hashtag#neuralnetwork

<p style="text-align:center;">
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7317482203691581440" height="1637" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
</p>

