---
layout: page
title: Turbo-Softmax
description: High-precision fast Softmax in C for generic MCUs (IEEE-754 tricks + poly exp).
img: assets/img/projects/turbo_softmax_perf.png
importance: 3
category: kernels
lang: en
github: https://github.com/LongWeihan/Turbo-Softmax
permalink: /projects/turbo-softmax/
---

Turbo-Softmax is a **high-precision, yet blazing fast Softmax** implementation in C. It targets MCU/embedded settings where hardware SIMD/FPU may be limited, and speedups must be achieved without large LUT memory.

## Highlights

- **Range reduction** with IEEE-754 bit-level construction of `2^i`
- **Fast `exp(t)`** via a 5th-order polynomial approximation
- **4.0×–4.2× speedup** over typical `math.h` implementations (dims 16–1024)
- **Numerical stability:** max error `< 1e-6`, negligible KL divergence

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/turbo_softmax_perf.png" title="Performance" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/turbo_softmax_accuracy.png" title="Accuracy" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Build (GCC/MinGW)

```powershell
gcc -O3 -std=c11 -Wall -Wextra -pedantic example.c qsoftmax.c -lm -o example.exe
./example.exe
```

