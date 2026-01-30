---
layout: page
title: OrderGuard
description: 让 LLM 判题 / 重排 / 工具选择对“候选顺序”更鲁棒（LaTIn / PCons）。
img: assets/img/projects/orderguard_order_flip_rate.svg
importance: 4
category: llm-systems
lang: zh
github: https://github.com/LongWeihan/OrderGuard
permalink: /zh/projects/orderguard/
---

候选项的顺序本身并不是有意义的信号——但很多 LLM 流水线会在不经意间把它当成信号。

当你用 LLM 从 N 个候选中**选 1 个**（LLM-as-a-judge、RAG reranking、Agent 的 tool/action selection），只要把同一组候选换个排列顺序，最终赢家就可能改变，导致系统不稳定、评测噪声大、线上难复现。

**OrderGuard** 是一个无需训练的推理期包装器：通过对候选顺序做（近似）**置换边缘化**（marginalize over permutations），使用强约束的 **logprob forced-choice 打分** + **自适应 early-stop**，显著降低“顺序敏感性”，并在多选 benchmark 上带来稳定的准确率增益。

## 核心思想

- **置换群 group-averaging（推理期不变性）：** 把候选顺序当作干扰变量，通过多个置换的打分聚合来边缘化顺序。
- **低方差设计（LaTIn）：** 用位置均衡的循环调度（Latin-square 风格），相比随机置换方差更低。
- **自适应停止：** 用 JS divergence 判断聚合分布是否稳定（阈值触发 early-stop），把更多 test-time compute 分配给“难样本”。

## 关键结果（Qwen3，可复现）

- 单次（single-shot）的“从列表里选一个”对重排极其不稳定：只做 **10 次随机重排**，赢家翻转比例可达 **58–75%**（视模型而定）。
- OrderGuard 在 Qwen3 上把宏平均准确率提升 **+2.8 到 +4.6 个百分点**，单个数据集最高可到 **+7.6pp**。

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/orderguard_order_flip_rate.svg" title="顺序翻转率（Qwen3）" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/orderguard_macro_accuracy.svg" title="宏平均准确率（Qwen3）" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## 最小 API

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

