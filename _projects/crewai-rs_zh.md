---
layout: page
title: crewai-rs
description: Rust 原生多 Agent 编排框架，强调类型化任务、确定性流程控制与更适合部署的运行时设计。
img: assets/img/projects/crewai_rs.svg
importance: 3
category: flagship-systems
lang: zh
github: https://github.com/LongWeihan/crewai-rs
permalink: /zh/projects/crewai-rs/
project_slug: crewai-rs
flagship: true
card_label: Rust 编排
year: 2026
stack:
  - Rust
  - Multi-agent
  - Typed flows
  - YAML blueprint
highlights:
  - 不再依赖 Python 胶水代码，而是用 Rust 重建多 Agent 编排。
  - 用类型化运行时概念组织 agent、task、crew 和 flow。
  - 面向更低开销、更适合部署的 Agent 基础设施。
---

`crewai-rs` 是一个**Rust 原生的多 Agent 编排框架**。它强调类型化运行时概念、确定性工作流组合，以及面向系统部署的设计，而不是 notebook-first 的实验型体验。

## 为什么 Rust 很关键

- 很多 Agent 框架更像“编排脚本集合”，运行时约束并不强。
- 当可靠性、契约清晰度和可部署性变重要时，Rust 非常合适。
- 类型化运行时有助于把 agent、task、crew 和 flow control 的边界做清楚。

## 运行时模型

```text
Agent -> Task -> Crew -> Flow -> Runtime
```

## 这个项目强调的能力

- **类型化编排：** 让多 Agent 执行拥有更清晰的契约。
- **面向部署的运行时：** 更适合服务化和基础设施场景。
- **低开销系统思维：** 默认关注运行时纪律，而不是脚本式便捷性。

## 为什么它值得放在首页重点位置

这个仓库说明你不只是在做 Agent 应用层产品，也有能力设计它们赖以运行的编排底座，这是更深一层的系统工程信号。
