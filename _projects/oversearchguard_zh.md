---
layout: page
title: OverSearchGuard
description: 面向 RAG / Agent 的冲突感知证据裁剪（evidence thinning）。
img: assets/img/projects/oversearchguard_tradeoff.svg
importance: 1
category: llm-systems
lang: zh
github: https://github.com/LongWeihan/OverSearchGuard
permalink: /zh/projects/oversearchguard/
---

OverSearchGuard 是一个面向 Agentic RAG 的**证据治理层**：它位于“检索”和“生成”之间，在调用大模型之前，把大段证据裁剪为少量、高置信、具备冲突处理能力的证据行——**无需微调**。

`检索 → OverSearchGuard → LLM`

## 解决什么问题

- **抵御“错但重复”刷屏**：通过 `cap-per-source` 限制低质量重复证据的主导性。
- **显式建模可靠度与新鲜度**：source weights + half-life 衰减。
- **成本导向决策**：报告 TPC（total tokens per correct），并支持可选的 BEA（预算内逐步加证据）。

## 结果（可复现）

基准：`paper` 套件（`n=300`，`google/flan-t5-small`，CUDA）。

- 准确率：`0.143 → 0.970`（`bea_fallback`，最好）
- 平均总 tokens：`491.5 → 117.3`

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_overall.svg" title="总体指标" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_tradeoff.svg" title="准确率-成本权衡" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/oversearchguard_scenarios.svg" title="分场景表现" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## 作为库使用

```python
from oversearchguard.api import build_thin_prompt

payload = build_thin_prompt(question, evidence_lines)
prompt = payload["prompt"]       # 直接发给任意 LLM
candidate = payload["candidate"] # CACT 候选值（可用于 guardrail）
```

