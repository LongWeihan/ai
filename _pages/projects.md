---
layout: page
title: Projects
permalink: /projects/
description: Selected agent systems and research engineering work.
nav: true
nav_order: 3
lang: en
horizontal: false
---

{% assign current_projects = site.projects | where: "lang", page.lang | sort: "importance" %}
{% assign flagship_projects = current_projects | where: "flagship", true %}
{% assign archive_projects = current_projects | where_exp: "item", "item.flagship != true" %}

<div class="projects-page-shell">
  <section class="page-intro compact">
    <p class="section-kicker">Project Index</p>
    <h2>From research prototypes to deployable agent systems</h2>
    <p class="section-copy">
      The first section highlights the three projects I want to foreground right now. The second section shows the
      research and infrastructure work around them.
    </p>
  </section>

  <section class="project-group">
    <div class="section-heading">
      <p class="section-kicker">Selected Projects</p>
      <h3>Recent work in focus</h3>
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
      <p class="section-kicker">Research Engineering Archive</p>
      <h3>Earlier systems, algorithms, and performance work</h3>
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
