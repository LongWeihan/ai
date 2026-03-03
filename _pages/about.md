---
layout: about
title: About
permalink: /
lang: en
subtitle: LLM Systems & Algorithms Engineer | UESTC | Visiting Student @ University of Cambridge (Expected 2026 – 2027)

profile:
  align: right
  image: profile.png
  image_circular: false # keep rectangular
  more_info: >
    <p><b>Email:</b> weihanlong@std.uestc.edu.cn</p>
    <p><b>GitHub:</b> github.com/LongWeihan</p>
    <p><b>Location:</b> Chengdu, China | Cambridge, UK (visiting, 2026 – 2027)</p>

selected_papers: false
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items

latest_posts:
  enabled: false
---

I build fast and reliable LLM systems — especially around **agentic RAG** and **inference efficiency**.

Education:
- **University of Cambridge**<br>Expected **2026 – 2027**<br>Visiting Student (CSC Full Scholarship)
- **University of Electronic Science and Technology of China (UESTC)**<br>**2024 – 2027**<br>MPhil in Electronic Science and Technology (Grade A+)<br>GPA: **3.86/4.0**
- **University of Electronic Science and Technology of China (UESTC)**<br>**2020 – 2024**<br>Bachelor in Electronic Science and Technology (Grade A+)<br>GPA: **3.82/4.0**
- Honors Degree (Top 2 in college), Outstanding Graduate

## Focus

- **Inference optimization:** tokenizer-side prefix caching, numerically stable kernels, CPU bottleneck removal.
- **Agentic RAG governance:** conflict-aware evidence thinning to resist *wrong-but-repeated* evidence and reduce token cost.
- **Evaluation & reliability:** stress-test suites for noisy/contradictory evidence; cost-aware metrics (e.g., TPC).

## Featured Projects

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign featured = site.projects | where: "lang", page.lang | sort: "importance" %}
    {% for project in featured limit: 3 %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

## Honors

- Global Top 5% — **IEEEXtreme – 24-hour Programming Competition** (2021)
- Honors Degree (Top 2 in college), Outstanding Graduate
