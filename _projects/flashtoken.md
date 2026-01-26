---
layout: page
title: FlashToken
description: Tokenizer-side prefix caching for low-latency LLM systems (tiktoken).
img: assets/img/projects/flashtoken_fixed_prefix_speedup.png
importance: 2
category: llm-systems
lang: en
github: https://github.com/LongWeihan/FlashToken
permalink: /projects/flashtoken/
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

