---
layout: page
title: FlashToken
description: 面向低延迟 LLM 系统的 Tokenizer 端前缀缓存，在可复用提示上可达 27x-37x 提速。
img: assets/img/projects/flashtoken_fixed_prefix_speedup.png
importance: 5
category: llm-systems
lang: zh
github: https://github.com/LongWeihan/FlashToken
permalink: /zh/projects/flashtoken/
project_slug: flashtoken
card_label: 推理效率
year: 2025
stack:
  - Tokenization
  - Prefix caching
  - Tiktoken
highlights:
  - 在不改模型权重的前提下复用长提示前缀。
  - 同时支持固定前缀和 append-only 对话流程。
  - 保持 token 完全一致的同时获得大幅提速。
---

FlashToken 在**不改变模型权重**的前提下加速 tokenization：当多次请求共享长前缀（system prompt、模板、对话历史）时，避免重复编码同一段文本。

## 亮点

- **零错配：** 与 `tiktoken.encode_ordinary` token-by-token 一致（`mismatches = 0`）。
- **大幅提速：** 在“长前缀复用 / append-only 对话”场景达到 27×–37× speedup。
- **两种策略：** 固定前缀复用 + append-only 增量编码（更贴合 KV-cache 工作流）。

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_fixed_prefix_speedup.png" title="固定前缀提速" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_append_only_speedup.png" title="对话 append-only 提速" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_append_only_rollback_hist.png" title="回滚分布" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## 快速开始

```python
import tiktoken
from flashtoken import FixedPrefixTokenCache

enc = tiktoken.get_encoding("cl100k_base")
cache = FixedPrefixTokenCache(enc, prefix="SYSTEM: ... 很长 ...\n")
tokens = cache.encode_ordinary("User: hello\n")
```
