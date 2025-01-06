---
layout: default
title: Home
permalink: /
---

{% if site.posts.size > 0 %}
  <section class="home-posts">
    <h2>Latest from My Portfolio</h2>
    {% for post in site.posts limit:1 %}
      <article>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </section>
{% else %}
  <p>No posts found. Stay tuned!</p>
{% endif %}
