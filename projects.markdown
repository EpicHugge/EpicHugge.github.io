---
layout: default
title: Projects
permalink: /projects/
body_class: project-archive
---

<section class="featured-projects project-archive case-study">
  <div class="section-header" data-reveal>
    <p class="eyebrow">Level Design</p>
    <h2>Projects</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign level_order = "advanced-level-design-assignment,game-project-2,game-project-3,level-design-assignment" | split: "," %}
    {% for slug in level_order %}
      {% assign project = site.data.projects | where: "slug", slug | first %}
      {% if project %}
      <article class="project-card" data-reveal>
        <a class="project-card-hit" href="{{ project.url | relative_url }}" aria-label="View {{ project.title }}"></a>
        <div class="project-card-media">
          {% if project.media_type == "video" %}
            <video preload="auto" autoplay loop muted playsinline class="project-card-video">
              <source src="{{ project.media_src | relative_url }}" type="video/webm">
            </video>
          {% else %}
            <img src="{{ project.media_src | relative_url }}" alt="{{ project.title }} hero" loading="lazy" decoding="async">
          {% endif %}
          {% if project.engine_icon %}
            <img class="engine-badge" src="{{ project.engine_icon | relative_url }}" alt="{{ project.title }} engine">
          {% endif %}
        </div>
        <div class="project-card-meta-row">
          <span class="tag">Role: {{ project.role_tag }}</span>
          <span class="tag">Team: {{ project.team_tag }}</span>
        </div>
        <div class="project-card-body">
          <h3>{{ project.title }}</h3>
          <div class="project-keywords">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </article>
    {% endif %}
    {% endfor %}
  </div>
</section>

<section class="featured-projects project-archive case-study">
  <div class="section-header" data-reveal>
    <p class="eyebrow">Production &amp; Leadership</p>
    <h2>Projects</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign leadership_projects = site.data.projects | where_exp: "project", "project.slug == 'game-project-4'" %}
    {% for project in leadership_projects %}
      <article class="project-card" data-reveal>
        <a class="project-card-hit" href="{{ project.url | relative_url }}" aria-label="View {{ project.title }}"></a>
        <div class="project-card-media">
          {% if project.media_type == "video" %}
            <video preload="auto" autoplay loop muted playsinline class="project-card-video">
              <source src="{{ project.media_src | relative_url }}" type="video/webm">
            </video>
          {% else %}
            <img src="{{ project.media_src | relative_url }}" alt="{{ project.title }} hero" loading="lazy" decoding="async">
          {% endif %}
          {% if project.engine_icon %}
            <img class="engine-badge" src="{{ project.engine_icon | relative_url }}" alt="{{ project.title }} engine">
          {% endif %}
        </div>
        <div class="project-card-meta-row">
          <span class="tag">Role: {{ project.role_tag }}</span>
          <span class="tag">Team: {{ project.team_tag }}</span>
        </div>
        <div class="project-card-body">
          <h3>{{ project.title }}</h3>
          <div class="project-keywords">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
