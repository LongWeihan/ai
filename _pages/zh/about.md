---
layout: about
title: 关于
permalink: /zh/
lang: zh
subtitle: AI 系统研究者｜长时运行 Agent Harness｜可靠的大模型基础设施

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
    <p class="section-kicker">AI 系统研究者</p>
    <h2 class="hero-headline">我在做的是能长期运行、可检查、可复现、且足够快的 Agent 系统。</h2>
    <p class="hero-lead">
      我的工作介于研究与系统工程之间：长时运行的编码 harness、可监督执行平台、Rust 原生多 Agent 编排，
      以及面向推理与 RAG 的效率和可靠性工具。
    </p>
    <div class="hero-actions">
      <a class="action-chip action-chip-primary" href="{{ '/zh/projects/' | relative_url }}">查看项目</a>
      <a class="action-chip" href="{{ '/zh/cv/' | relative_url }}">查看简历</a>
      <a class="action-chip" href="https://github.com/LongWeihan">GitHub</a>
    </div>
    <div class="metric-strip">
      <div class="metric-card">
        <span class="metric-value">3</span>
        <span class="metric-label">旗舰项目</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">4+</span>
        <span class="metric-label">研究工程仓库</span>
      </div>
      <div class="metric-card">
        <span class="metric-value">2次</span>
        <span class="metric-label">IEEEXtreme 全球前 5%</span>
      </div>
    </div>
  </div>
  <div class="hero-panel">
    <div class="hero-portrait-wrap">
      <img src="{{ '/assets/img/profile.png' | relative_url }}" alt="Weihan Long portrait" class="hero-portrait">
    </div>
    <div class="hero-panel-body">
      <p class="micro-label">当前重点</p>
      <ul class="signal-list">
        <li>带有显式规划、评估闭环和恢复能力的长时运行编码 Agent</li>
        <li>面向真实工作区、可监督、可审计的 Agent 执行平台</li>
        <li>Rust 原生、类型化、多 Agent 工作流编排系统</li>
      </ul>
      <div class="info-pairs">
        <div class="info-pair">
          <span class="info-key">邮箱</span>
          <span class="info-value">weihanlong@std.uestc.edu.cn</span>
        </div>
        <div class="info-pair">
          <span class="info-key">GitHub</span>
          <span class="info-value">github.com/LongWeihan</span>
        </div>
        <div class="info-pair">
          <span class="info-key">常驻</span>
          <span class="info-value">中国成都</span>
        </div>
        <div class="info-pair">
          <span class="info-key">访问</span>
          <span class="info-value">英国剑桥（2026–2027）</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p class="section-kicker">研究重点</p>
    <h3>我在优化什么</h3>
  </div>
  <div class="focus-grid">
    <article class="focus-card">
      <h4>长时运行 Agent 系统</h4>
      <p>
        把 planning、generation、evaluation、checkpointing 做成运行时的一等公民，而不是堆砌 prompt 技巧。
      </p>
    </article>
    <article class="focus-card">
      <h4>可靠的执行基础设施</h4>
      <p>
        让 Agent 能在真实项目目录里持续工作，留下可审计痕迹，并在人工监督下稳定推进任务。
      </p>
    </article>
    <article class="focus-card">
      <h4>推理与 RAG 效率</h4>
      <p>
        关注 tokenization、核函数、reranking 稳定性和证据治理，让大模型系统更快、更稳、更不脆弱。
      </p>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="section-heading">
    <p class="section-kicker">旗舰项目</p>
    <h3>当前最能代表我水平的三个项目</h3>
    <p class="section-copy">
      它们分别对应长时运行开发 harness、可监督执行平台和 Rust 原生多 Agent 编排，是本次主页改版的主叙事。
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
    <p class="section-kicker">研究工程档案</p>
    <h3>支撑能力的既有研究工程作品</h3>
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
    <p class="section-kicker">教育背景</p>
    <h3>教育经历</h3>
    <div class="timeline-list">
      <div class="timeline-item">
        <h4>剑桥大学</h4>
        <p>预期 2026–2027 · 联合培养访问学生 · CSC 全额奖学金</p>
      </div>
      <div class="timeline-item">
        <h4>电子科技大学</h4>
        <p>2024–2027 · 电子科学与技术硕士 · GPA 3.86/4.0 · A+</p>
      </div>
      <div class="timeline-item">
        <h4>电子科技大学</h4>
        <p>2020–2024 · 电子科学与技术学士 · GPA 3.82/4.0 · A+</p>
      </div>
    </div>
  </div>
  <div class="info-column">
    <p class="section-kicker">荣誉</p>
    <h3>执行力信号</h3>
    <div class="timeline-list">
      <div class="timeline-item">
        <h4>IEEEXtreme</h4>
        <p>24 小时编程竞赛全球前 5%，2021。</p>
      </div>
      <div class="timeline-item">
        <h4>荣誉学位</h4>
        <p>学院 Top 2，优秀毕业生。</p>
      </div>
      <div class="timeline-item">
        <h4>研究主线</h4>
        <p>Agent 系统、评估基础设施、推理优化与可靠性导向的 RAG。</p>
      </div>
    </div>
  </div>
</section>
