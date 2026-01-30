---
layout: page
title: OrderGuard
description: Order-robust LLM judging/reranking/tool selection via permutation marginalization (LaTIn / PCons).
img: assets/img/projects/orderguard_order_flip_rate.svg
importance: 4
category: llm-systems
lang: en
github: https://github.com/LongWeihan/OrderGuard
permalink: /projects/orderguard/
---

Candidate order is not a meaningful signal — but many LLM pipelines accidentally treat it as one.

When you use an LLM to **pick 1 option out of N** (LLM-as-a-judge, RAG reranking, agent tool/action selection), simply reordering the exact same options can silently change the winner and make systems flaky.

**OrderGuard** is a training-free inference wrapper that reduces order sensitivity by (approximately) **marginalizing over permutations** using forced-choice **logprob scoring** plus an adaptive early-stop.

## Key ideas

- **Permutation-group averaging (inference-time invariance):** treat option order as a nuisance variable and marginalize it out by aggregating scores over permutations.
- **Low-variance design (LaTIn):** use a position-balanced cyclic schedule (Latin-square style) to reduce variance vs random shuffles.
- **Adaptive stopping:** stop when the aggregated distribution stabilizes (JS divergence threshold), allocating more test-time compute only to hard examples.

## Headline results (Qwen3, reproducible)

- Single-shot multiple-choice is extremely order-sensitive: with just **10 random shuffles**, the predicted winner flips on **58–75%** of examples (depending on the model).
- OrderGuard improves macro accuracy by **+2.8 to +4.6 pp** (and up to **+7.6 pp** on a single dataset).

Biggest per-dataset gains (accuracy, absolute pp vs single):

| Model | Dataset | Gain | Method |
|---|---|---:|---|
| Qwen/Qwen3-0.6B | OpenBookQA | **+7.6 pp** | LaTIn |
| Qwen/Qwen3-0.6B | TruthfulQA(MC1) | **+7.0 pp** | PCons |
| Qwen/Qwen3-0.6B | CSQA | **+6.6 pp** | PCons |
| Qwen/Qwen3-1.7B | HellaSwag | **+7.4 pp** | LaTIn |
| Qwen/Qwen3-1.7B | OpenBookQA | **+5.2 pp** | LaTIn |
| Qwen/Qwen3-1.7B | MMLU(all) | **+3.6 pp** | LaTIn |

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/orderguard_accuracy_gain_by_task.png" title="Accuracy gains by task (paired bootstrap 95% CI)" class="img-fluid rounded z-depth-1" avoid_scaling=true %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/orderguard_order_flip_rate.svg" title="Order flip rate under shuffles (Qwen3)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/orderguard_macro_accuracy.svg" title="Macro accuracy (Qwen3)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Minimal API

```python
from orderguard.methods import latin_consensus
from orderguard.modeling import load_lm

lm = load_lm("Qwen/Qwen3-1.7B", torch_dtype=None)

question = "Pick the best next tool for: extract the answer from a table."
choices = [
    "WebSearch: use the browser to find information online.",
    "Calculator: do arithmetic precisely.",
    "TableParser: read structured tables and extract fields.",
    "WriteCode: write a short script to compute the result.",
]

res = latin_consensus(lm, question, choices, max_perms=7, min_perms=3, js_eps=0.005, seed=0)
print("winner:", choices[res.pred_index], "perms_used:", res.meta["perms_used"])
```
