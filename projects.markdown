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
    {% assign project = site.data.projects | where: "slug", "advanced-level-design-assignment" | first %}
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
        <span class="card-hover-label">Full breakdown</span>
      </div>
      <div class="project-card-meta-row">
        <span class="tag">Role: {{ project.role_tag }}</span>
        <span class="tag">Team: {{ project.team_tag }}</span>
      </div>
      <div class="project-card-body">
        <h3>{{ project.title }}</h3>
        <p class="project-card-summary">{{ project.summary }}</p>
        <div class="project-keywords">
          {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      </div>
    </article>
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
          <span class="card-hover-label">Full breakdown</span>
        </div>
        <div class="project-card-meta-row">
          <span class="tag">Role: {{ project.role_tag }}</span>
          <span class="tag">Team: {{ project.team_tag }}</span>
        </div>
        <div class="project-card-body">
          <h3>{{ project.title }}</h3>
          <p class="project-card-summary">{{ project.summary }}</p>
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
    <p class="eyebrow">Solo &amp; Practice</p>
    <h2>Additional Work</h2>
  </div>
  <div class="featured-projects-grid">
    {% assign solo_order = "subway-encounter,level-design-assignment" | split: "," %}
    {% for slug in solo_order %}
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
          <span class="card-hover-label">Full breakdown</span>
        </div>
        <div class="project-card-meta-row">
          <span class="tag">Role: {{ project.role_tag }}</span>
          <span class="tag">Team: {{ project.team_tag }}</span>
        </div>
        <div class="project-card-body">
          <h3>{{ project.title }}</h3>
          <p class="project-card-summary">{{ project.summary }}</p>
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
