---
layout: page
title: codex-long-running-harness
description: 面向长时运行应用开发的 Codex-first harness，强调 sprint 规划、评估闭环和 benchmark 快照。
img: assets/img/projects/codex_long_running_harness.svg
importance: 1
category: flagship-systems
lang: zh
github: https://github.com/LongWeihan/codex-long-running-harness
permalink: /zh/projects/codex-long-running-harness/
project_slug: codex-long-running-harness
flagship: true
card_label: 长时运行 Agent
year: 2026
stack:
  - Codex
  - Sprint planning
  - Evaluator loop
  - Benchmarks
highlights:
  - 把开放式应用开发拆成可检查的 sprint。
  - 不走单次 prompting，而是显式规划器、生成器、评估器协同。
  - 保存 benchmark 快照，让进展可度量、可复现。
---

`codex-long-running-harness` 是一个面向**长时运行应用开发**的 Codex-first harness。它把长周期编码任务视为系统工程问题，而不是把 prompt 拉得更长：先规划、再执行 sprint、再评估、再记录快照，然后进入下一轮。

## 为什么重要

- 长周期软件任务需要显式状态管理，而不是更长的上下文。
- 评估必须进入主循环，否则系统会在无人察觉时漂移。
- 每一轮 sprint 都应该留下可恢复的工件，而不是中断后全部重来。

## 核心流程

```text
goal -> planner -> sprint backlog -> generator -> evaluator -> snapshot -> next sprint
```

## 这个项目真正强调的能力

- **Sprint 化执行：** 把超长任务拆成有边界、可检查的工作周期。
- **评估驱动迭代：** evaluator 不是附属工具，而是运行时的一部分。
- **可恢复性：** 中间结果和 benchmark 快照使系统能够持续推进，而不是频繁重启。
- **研究级可追踪：** 每一次迭代都能被比较、审计和系统优化。

## 为什么它值得放在首页重点位置

这不是普通的 Agent demo。它解决的是更核心的问题：如何让 AI 编码系统在更长时间内稳定工作，同时保持透明、可验证和可恢复。
