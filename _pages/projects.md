---
layout: page
title: Projects
permalink: /projects/
description: Selected open-source work and experiments.
nav: true
nav_order: 3
lang: en
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign sorted_projects = sorted_projects | where: "lang", page.lang %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
