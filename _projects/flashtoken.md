---
layout: page
title: FlashToken
description: Tokenizer-side prefix caching for low-latency LLM systems, with 27x-37x speedups on reusable prompts.
img: assets/img/projects/flashtoken_fixed_prefix_speedup.png
importance: 5
category: llm-systems
lang: en
github: https://github.com/LongWeihan/FlashToken
permalink: /projects/flashtoken/
project_slug: flashtoken
card_label: Inference efficiency
year: 2025
stack:
  - Tokenization
  - Prefix caching
  - Tiktoken
highlights:
  - Reuses long prompt prefixes without touching model weights.
  - Supports both fixed-prefix and append-only chat workflows.
  - Delivers large speedups while preserving exact token equivalence.
---

FlashToken speeds up tokenization without changing model weights. When prompts share long prefixes (system prompts, templates, conversation history), FlashToken avoids re-tokenizing the same text over and over.

## Highlights

- **Correctness:** `mismatches = 0` (token-by-token equality with `tiktoken.encode_ordinary`).
- **Speed:** 27×–37× speedup on long-prefix reuse / append-only chat benchmarks.
- **Two strategies:** fixed-prefix reuse and append-only delta tokenization (KV-cache friendly).

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_fixed_prefix_speedup.png" title="Fixed prefix speedup" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_append_only_speedup.png" title="Append-only speedup" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/flashtoken_append_only_rollback_hist.png" title="Rollback distribution" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Quickstart

```python
import tiktoken
from flashtoken import FixedPrefixTokenCache

enc = tiktoken.get_encoding("cl100k_base")
cache = FixedPrefixTokenCache(enc, prefix="SYSTEM: ... long ...\n")
tokens = cache.encode_ordinary("User: hello\n")
```
