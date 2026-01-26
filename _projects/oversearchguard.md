---
layout: page
title: OverSearchGuard
description: Conflict-aware evidence thinning for search-augmented LLMs (RAG / agents).
img: assets/img/projects/oversearchguard_tradeoff.svg
importance: 1
category: llm-systems
lang: en
github: https://github.com/LongWeihan/OverSearchGuard
permalink: /projects/oversearchguard/
---

OverSearchGuard is an **evidence-governance** layer for agentic RAG: it sits between retrieval and generation and selects a small, high-confidence, conflict-aware subset of evidence lines before calling the LLM — **no fine-tuning required**.

`retrieval → OverSearchGuard → LLM`

## What it does

- **Robust to “wrong-but-repeated” evidence** via `cap-per-source` (anti-dup / anti-spam).
- **Explicit reliability + recency modeling** (source weights + half-life decay).
- **Cost-aware policy**: reports TPC (total tokens per correct answer) and supports optional BEA (Budgeted Evidence Accumulation).

## Results (reproducible)

Benchmark: `paper` suite (`n=300`, `google/flan-t5-small`, CUDA).

- Accuracy: `0.143 → 0.970` (`bea_fallback`, best)
- Avg total tokens: `491.5 → 117.3`

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_overall.svg" title="Overall metrics" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_tradeoff.svg" title="Efficiency frontier" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_scenarios.svg" title="Scenario breakdown" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Quick use (library)

```python
from oversearchguard.api import build_thin_prompt

payload = build_thin_prompt(question, evidence_lines)
prompt = payload["prompt"]       # send to any LLM
candidate = payload["candidate"] # CACT candidate (useful for guardrails)
```

