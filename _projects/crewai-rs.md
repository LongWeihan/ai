---
layout: page
title: crewai-rs
description: Rust-native multi-agent orchestration with typed tasks, deterministic flow control, and deployment-friendly runtime design.
img: assets/img/projects/crewai_rs.svg
importance: 3
category: flagship-systems
lang: en
github: https://github.com/LongWeihan/crewai-rs
permalink: /projects/crewai-rs/
project_slug: crewai-rs
flagship: true
card_label: Rust orchestration
year: 2026
stack:
  - Rust
  - Multi-agent
  - Typed flows
  - YAML blueprint
highlights:
  - Rebuilds multi-agent orchestration in Rust rather than Python glue code.
  - Uses typed runtime concepts for agents, tasks, crews, and flows.
  - Targets lower overhead and more deployable agent infrastructure.
---

`crewai-rs` is a **Rust-native multi-agent orchestration framework**. It focuses on typed runtime concepts, deterministic workflow composition, and a systems-oriented approach to deployment rather than a notebook-first developer experience.

## Why Rust here matters

- Agent frameworks often become orchestration-heavy and runtime-light.
- Rust is a strong fit when reliability, explicit contracts, and deployable services matter.
- A typed runtime creates cleaner boundaries between agents, tasks, crews, and flow control.

## Runtime model

```text
Agent -> Task -> Crew -> Flow -> Runtime
```

## What this project emphasizes

- **Typed orchestration:** cleaner contracts for multi-agent execution.
- **Deployment-minded runtime:** better fit for services and infrastructure use cases.
- **Low-overhead systems thinking:** the framework is designed with runtime discipline rather than scripting convenience as the default.

## Why it is a flagship project

This repo is important because it shows depth below the application layer. It signals the ability to design not only agent products, but also the orchestration substrate they run on.
