---
layout: default
title: Projects
permalink: /projects/
body_class: project-archive
---

<section class="featured-projects project-archive case-study">
  <div class="section-header" data-reveal>
    <p class="eyebrow">Featured</p>
    <h2>Primary Showcase</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign project = site.data.projects | where: "slug", "underground-garage-encounter" | first %}
    {% if project %}
      {% include project-card.html project=project %}
    {% endif %}
  </div>
</section>

<section class="featured-projects project-archive case-study">
  <div class="section-header" data-reveal>
    <p class="eyebrow">Collaboration &amp; Production</p>
    <h2>Team Projects</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign collab_order = "game-project-2,game-project-3,game-project-4" | split: "," %}
    {% for slug in collab_order %}
      {% assign project = site.data.projects | where: "slug", slug | first %}
      {% if project %}
        {% include project-card.html project=project %}
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="featured-projects project-archive case-study">
  <div class="section-header" data-reveal>
    <p class="eyebrow">Solo &amp; Practice</p>
    <h2>Additional Work</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign solo_order = "advanced-level-design-assignment,level-design-assignment" | split: "," %}
    {% for slug in solo_order %}
      {% assign project = site.data.projects | where: "slug", slug | first %}
      {% if project %}
        {% include project-card.html project=project %}
      {% endif %}
    {% endfor %}
  </div>
</section>
