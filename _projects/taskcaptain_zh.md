---
layout: page
title: TaskCaptain
description: 面向真实工作区的可监督 Agent 执行平台，强调任务状态透明、运行过程可见、控制权本地优先。
img: assets/img/projects/taskcaptain.svg
importance: 2
category: flagship-systems
lang: zh
github: https://github.com/LongWeihan/taskcaptain
permalink: /zh/projects/taskcaptain/
project_slug: taskcaptain
flagship: true
card_label: 执行平台
year: 2026
stack:
  - Local-first
  - Agent runtime
  - Task state
  - Logs and artifacts
highlights:
  - 让 Agent 在真实项目工作区中运行，并保留清晰任务状态。
  - 显式管理日志、工件和配置边界。
  - 把 AI 定位为可监督执行者，而不是仅会聊天的助手。
---

`TaskCaptain` 是一个面向真实工作目录的**可监督 Agent 执行平台**。它不是把 AI 当作“一次性回答问题的助手”，而是把 AI 当作接收目标、沿任务状态持续推进、并留下日志与工件供人类复核的执行者。

## 它在优化什么

- **本地优先执行：** 工作区不被封装进不可见的远端黑盒。
- **状态透明：** 任务、运行过程、工件都应该可检查。
- **人工监督：** 设计目标是“受控委托”，不是无约束自治。

## 理解它的方式

```text
task request -> workspace -> captain runtime -> agents -> logs/artifacts -> human review
```

## 这个项目体现出的工程判断

- 说明 Agent 软件需要状态管理和流程边界，而不只是 prompt。
- 把日志和工件当作产品的一部分，而不是调试残留物。
- 朝着更严肃的 agent software engineering 方向推进：分配任务、监控进展、审查结果、继续迭代。

## 为什么它是旗舰项目

这个仓库体现的是产品级 Agent 系统思考。重点不在“提示词技巧”，而在“怎样让 Agent 在真实工作里可控、可监督、可持续地有用”。
