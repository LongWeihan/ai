---
layout: page
title: Projects
permalink: /projects/
description: Flagship agent systems and selected research engineering work.
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
      The first section contains the systems that now define the homepage. The second section shows the research and
      infrastructure work that supports them.
    </p>
  </section>

  <section class="project-group">
    <div class="section-heading">
      <p class="section-kicker">Flagship Systems</p>
      <h3>Current strongest work</h3>
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
