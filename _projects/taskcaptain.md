---
layout: page
title: TaskCaptain
description: Supervised execution platform for real workspaces, with transparent agent runs, task state, and local-first control.
img: assets/img/projects/taskcaptain.svg
importance: 2
category: flagship-systems
lang: en
github: https://github.com/LongWeihan/taskcaptain
permalink: /projects/taskcaptain/
project_slug: taskcaptain
flagship: true
card_label: Execution platform
year: 2026
stack:
  - Local-first
  - Agent runtime
  - Task state
  - Logs and artifacts
highlights:
  - Runs agents inside real project workspaces with visible task state.
  - Keeps logs, artifacts, and configuration boundaries explicit.
  - Positions AI as a supervised executor rather than a chat-only assistant.
---

`TaskCaptain` is a **supervised execution platform** for agent work inside real directories. Instead of treating AI as a one-shot assistant, it treats it as a worker that accepts a goal, progresses through visible task state, and leaves logs and artifacts that humans can review.

## What it is optimizing for

- **Local-first execution:** the workspace is not hidden behind a hosted black box.
- **Visible state transitions:** tasks, runs, and artifacts should remain inspectable.
- **Human supervision:** the system is built for controlled delegation, not blind autonomy.

## Mental model

```text
task request -> workspace -> captain runtime -> agents -> logs/artifacts -> human review
```

## Strong engineering signals

- It understands that agent software needs state and process boundaries.
- It treats logs and artifacts as part of product design, not debugging leftovers.
- It pushes toward a more serious model of agent software engineering: assign work, monitor progress, inspect outputs, continue.

## Why it is a flagship project

This repo shows product-level thinking about agent systems. The emphasis is not on a clever prompt, but on how to make an agent useful in real work under supervision.
