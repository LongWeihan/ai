---
layout: about
title: 关于
permalink: /zh/
lang: zh
subtitle: 大语言模型系统与算法工程师（推理优化 / Agentic RAG / 高性能内核）

profile:
  align: right
  image: profile.png
  image_circular: false
  more_info: >
    <p><b>邮箱：</b> weihanlong@std.uestc.edu.cn</p>
    <p><b>GitHub：</b> github.com/LongWeihan</p>
    <p><b>地点：</b> 中国·成都 · 英国·剑桥（访问，2026–2027）</p>

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

我专注于大语言模型（LLM）系统与算法：**Agentic RAG 的可靠性治理**，以及 **推理效率优化**（Tokenizer / Softmax / 高性能内核）。

学历：
- 剑桥大学联合培养，CSC 全奖，预计 **2026-2027**
- 电子科技大学（UESTC）硕士（GPA **3.86/4.0**）
- 电子科技大学（UESTC）本科（GPA **3.82/4.0**）

## 方向

- **推理优化：** Tokenizer 端前缀缓存、数值稳定的快速核函数、CPU 瓶颈消除。
- **Agentic RAG 证据治理：** 在冲突/噪声证据下进行裁剪与预算分配，降低幻觉与 token 成本。
- **评测与可靠性：** 面向“长上下文 + 冲突来源 + 重复攻击”的压力测试与成本指标（如 TPC）。

## 代表项目

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign featured = site.projects | where: "lang", page.lang | sort: "importance" %}
    {% for project in featured limit: 3 %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

## 荣誉

- IEEEXtreme 编程赛全球 Top 5%（2021、2025）
- 荣誉学位（学院 Top 2）、优秀毕业生
