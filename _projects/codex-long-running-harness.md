---
layout: page
title: codex-long-running-harness
description: Codex-first harness for long-running app development with sprint planning, evaluator loops, and benchmark snapshots.
img: assets/img/projects/codex_long_running_harness.svg
importance: 1
category: flagship-systems
lang: en
github: https://github.com/LongWeihan/codex-long-running-harness
permalink: /projects/codex-long-running-harness/
project_slug: codex-long-running-harness
flagship: true
card_label: Long-running agents
year: 2026
stack:
  - Codex
  - Sprint planning
  - Evaluator loop
  - Benchmarks
highlights:
  - Breaks open-ended app development into inspectable sprints.
  - Couples planner, generator, and evaluator roles instead of single-shot prompting.
  - Saves benchmark snapshots so progress is measurable and reproducible.
---

`codex-long-running-harness` is a **Codex-first development harness** for tasks that are too large for a single conversational pass. It treats long-horizon coding as an iterative system problem: plan the work, execute a sprint, evaluate the output, checkpoint the result, then continue.

## Why it matters

- Long-running software work needs explicit state, not just longer prompts.
- Evaluation has to be part of the loop, otherwise the system drifts silently.
- Progress should be inspectable after each sprint, with artifacts that survive restarts.

## Core workflow

```text
goal -> planner -> sprint backlog -> generator -> evaluator -> snapshot -> next sprint
```

## What this project emphasizes

- **Sprintized execution:** large coding goals are decomposed into bounded work cycles.
- **Evaluator-driven iteration:** quality gates are part of the runtime, not an afterthought.
- **Recoverability:** intermediate results and benchmark snapshots make it possible to resume work instead of restarting from scratch.
- **Research-grade traceability:** each iteration can be compared, audited, and improved systematically.

## Why it is a flagship project

This repo is a stronger signal than an ordinary agent demo because it focuses on the real bottleneck: how to make an AI coding system work over time without becoming opaque or fragile.
