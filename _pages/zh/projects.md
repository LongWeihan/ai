---
layout: page
title: 项目
permalink: /zh/projects/
description: 我的开源项目与系统实验。
nav: true
nav_order: 3
lang: zh
horizontal: true
---

<!-- pages/projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign sorted_projects = sorted_projects | where: "lang", page.lang %}

  <!-- Generate cards for each project -->

  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
  </div>
</div>
