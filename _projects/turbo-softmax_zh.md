---
layout: page
title: Turbo-Softmax
description: 面向通用 MCU 的高精度快速 Softmax（IEEE-754 位操作 + 多项式 exp）。
img: assets/img/projects/turbo_softmax_perf.png
importance: 3
category: kernels
lang: zh
github: https://github.com/LongWeihan/Turbo-Softmax
permalink: /zh/projects/turbo-softmax/
---

Turbo-Softmax 是一个用 C 实现的**高精度、极致快速** Softmax。它面向 MCU/嵌入式场景：在缺少 SIMD/FPU 或无法容忍大 LUT 内存开销时，通过可移植的数值近似实现显著提速。

## 亮点

- 通过 **IEEE-754 位级构造**实现 `2^i`（Range Reduction）
- 使用 **5 阶多项式**近似 `exp(t)`
- 相比常见 `math.h` 实现实现 **4.0×–4.2×** speedup（维度 16–1024）
- 数值稳定：最大误差 `< 1e-6`，KL 散度可忽略

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/turbo_softmax_perf.png" title="性能" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/turbo_softmax_accuracy.png" title="精度" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## 编译运行（GCC/MinGW）

```powershell
gcc -O3 -std=c11 -Wall -Wextra -pedantic example.c qsoftmax.c -lm -o example.exe
./example.exe
```

