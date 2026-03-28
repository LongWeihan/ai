---
layout: page
title: 项目
permalink: /zh/projects/
description: 当前旗舰 Agent 系统与既有研究工程作品。
nav: true
nav_order: 3
lang: zh
horizontal: false
---

{% assign current_projects = site.projects | where: "lang", page.lang | sort: "importance" %}
{% assign flagship_projects = current_projects | where: "flagship", true %}
{% assign archive_projects = current_projects | where_exp: "item", "item.flagship != true" %}

<div class="projects-page-shell">
  <section class="page-intro compact">
    <p class="section-kicker">项目总览</p>
    <h2>从研究原型到可部署的 Agent 系统</h2>
    <p class="section-copy">
      第一部分是当前最强的三项代表作，第二部分展示为它们打底的研究工程、算法与性能优化工作。
    </p>
  </section>

  <section class="project-group">
    <div class="section-heading">
      <p class="section-kicker">旗舰项目</p>
      <h3>当前最强代表作</h3>
    </div>
    <div class="projects">
      <div class="row row-cols-1 row-cols-lg-3">
        {% for project in flagship_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="project-group">
    <div class="section-heading">
      <p class="section-kicker">研究工程档案</p>
      <h3>既有系统、算法与性能工程作品</h3>
    </div>
    <div class="projects">
      <div class="row row-cols-1 row-cols-lg-2">
        {% for project in archive_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    </div>
  </section>
</div>
