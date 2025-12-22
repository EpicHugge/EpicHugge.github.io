---
layout: default
title: Projects
permalink: /projects/
body_class: project-archive
---

<section class="featured-projects project-archive">
  <div class="section-header">
    <p class="eyebrow">Project Archive</p>
    <h1>Projects</h1>
  </div>
  <div class="featured-projects-grid">
    {% for project in site.data.projects %}
      <article class="project-card">
        <div class="project-card-media">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }} cover image" loading="lazy" decoding="async">
        </div>
        <div class="project-card-body">
          <p class="project-card-meta">{{ project.role }} &middot; {{ project.timeframe }}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
          <div class="project-card-tags">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <a class="project-card-link" href="{{ project.url | relative_url }}">Read case study &rarr;</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
