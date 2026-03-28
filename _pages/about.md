---
layout: about
title: About
permalink: /
lang: en
subtitle: AI Systems Researcher | Long-running Agent Harnesses | Reliable LLM Infrastructure

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

{% assign current_projects = site.projects | where: "lang", page.lang | sort: "importance" %}
{% assign flagship_projects = current_projects | where: "flagship", true %}
{% assign archive_projects = current_projects | where_exp: "item", "item.flagship != true" %}

<section class="hero-grid">
  <div class="hero-copy">
    <p class="section-kicker">AI Systems Researcher</p>
    <h2 class="hero-headline">I build long-running agent systems that stay inspectable, reproducible, and fast.</h2>
    <p class="hero-lead">
      My work sits between research and systems engineering: long-horizon coding harnesses, supervised execution
      platforms, Rust-native multi-agent orchestration, and reliability tooling for LLM inference and RAG.
    </p>
    <div class="hero-actions">
      <a class="action-chip action-chip-primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="action-chip" href="{{ '/cv/' | relative_url }}">Open CV</a>
      <a class="action-chip" href="https://github.com/LongWeihan">GitHub</a>
    </div>
    <div class="metric-strip">
      <div class="metric-card">
        <span class="metric-value">3</span>
        <span class="metric-label">flagship systems</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">4+</span>
        <span class="metric-label">research engineering repos</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">2x</span>
        <span class="metric-label">IEEEXtreme global top 5%</span>
      </div>
    </div>
  </div>
  <div class="hero-panel">
    <div class="hero-portrait-wrap">
      <img src="{{ '/assets/img/profile.png' | relative_url }}" alt="Weihan Long portrait" class="hero-portrait">
    </div>
    <div class="hero-panel-body">
      <p class="micro-label">Current focus</p>
      <ul class="signal-list">
        <li>Long-running coding agents with explicit planning and evaluator loops</li>
        <li>Local-first supervised execution platforms for real workspaces</li>
        <li>Rust-native orchestration for typed multi-agent workflows</li>
      </ul>
      <div class="info-pairs">
        <div class="info-pair">
          <span class="info-key">Email</span>
          <span class="info-value">weihanlong@std.uestc.edu.cn</span>
        </div>
        <div class="info-pair">
          <span class="info-key">GitHub</span>
          <span class="info-value">github.com/LongWeihan</span>
        </div>
        <div class="info-pair">
          <span class="info-key">Base</span>
          <span class="info-value">Chengdu, China</span>
        </div>
        <div class="info-pair">
          <span class="info-key">Visiting</span>
          <span class="info-value">Cambridge, UK (2026–2027)</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p class="section-kicker">Research Focus</p>
    <h3>What I am optimizing for</h3>
  </div>
  <div class="focus-grid">
    <article class="focus-card">
      <h4>Long-running agent systems</h4>
      <p>
        Designing harnesses where planning, generation, evaluation, and checkpointing are first-class runtime
        concepts rather than prompt hacks.
      </p>
    </article>
    <article class="focus-card">
      <h4>Reliable execution infrastructure</h4>
      <p>
        Building agent software that can work inside real project directories, leave auditable traces, and remain
        useful under human supervision.
      </p>
    </article>
    <article class="focus-card">
      <h4>Inference and RAG efficiency</h4>
      <p>
        Working on tokenization, kernels, reranking robustness, and evidence governance so LLM systems are faster and
        less fragile.
      </p>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p class="section-kicker">Flagship Systems</p>
    <h3>The three projects that now define the homepage</h3>
    <p class="section-copy">
      These are the clearest signals of my current level: long-horizon coding harnesses, supervised execution, and
      Rust-native agent orchestration.
    </p>
  </div>
  <div class="projects">
    <div class="row row-cols-1 row-cols-lg-3">
      {% for project in flagship_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p class="section-kicker">Research Engineering Archive</p>
    <h3>Earlier systems that still anchor the stack</h3>
  </div>
  <div class="projects">
    <div class="row row-cols-1 row-cols-lg-2">
      {% for project in archive_projects limit: 4 %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="home-section info-columns">
  <div class="info-column">
    <p class="section-kicker">Education</p>
    <h3>Academic path</h3>
    <div class="timeline-list">
      <div class="timeline-item">
        <h4>University of Cambridge</h4>
        <p>Expected 2026–2027 · Visiting Student · CSC Full Scholarship</p>
      </div>
      <div class="timeline-item">
        <h4>University of Electronic Science and Technology of China</h4>
        <p>2024–2027 · MPhil in Electronic Science and Technology · GPA 3.86/4.0 · Grade A+</p>
      </div>
      <div class="timeline-item">
        <h4>University of Electronic Science and Technology of China</h4>
        <p>2020–2024 · BEng in Electronic Science and Technology · GPA 3.82/4.0 · Grade A+</p>
      </div>
    </div>
  </div>
  <div class="info-column">
    <p class="section-kicker">Honors</p>
    <h3>Signals of execution</h3>
    <div class="timeline-list">
      <div class="timeline-item">
        <h4>IEEEXtreme</h4>
        <p>Global Top 5% in the 24-hour programming competition, 2021.</p>
      </div>
      <div class="timeline-item">
        <h4>Honors Degree</h4>
        <p>Top 2 in college, Outstanding Graduate.</p>
      </div>
      <div class="timeline-item">
        <h4>Research orientation</h4>
        <p>Agent systems, evaluation infrastructure, inference optimization, and reliability-aware RAG.</p>
      </div>
    </div>
  </div>
</section>
