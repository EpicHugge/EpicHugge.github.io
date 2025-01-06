---
layout: default
title: Home
permalink: /
---

<!-- Portfolio content goes here -->
{% if site.posts.size > 0 %}
  <section class="home-posts">
    <h2>Latest from My Portfolio</h2>
    {% for post in site.posts limit:1 %}
      <article>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
        <!-- or post.content if you want the full text. 
             Using an excerpt keeps it neat. -->
      </article>
    {% endfor %}
  </section>
{% endif %}
