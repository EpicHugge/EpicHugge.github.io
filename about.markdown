---
layout: default
title: About Me
permalink: /about/
---

<!-- HERO CARD: Introduction -->
<section class="about-hero-card fade-in">
  <div class="card">
    <div class="card-media">
      <img src="{{ '/assets/images/hugo-portrait.jpg' | relative_url }}" alt="Hugo Portrait">
    </div>
    <div class="card-content">
      <h1>Yo!, I'm Hugo!</h1>
      <p>
        I'm a Game Design student at Futuregames in Umeå specializing in Level &amp; Quest Design.
      </p>
    </div>
  </div>
</section>

<!-- PERSONAL INTERESTS CARD -->
<section class="about-interests-card fade-in">
  <div class="card">
    <h2>Beyond Game Design</h2>
    <p>
      When I'm not designing Levels or Quests, you'll find me at the Gym lifting weights or Bouldering, playing with my family's dog, or immersing myself in RPGs / Movies. These passions fuel my creativity and keep me inspired.
    </p>
    <div class="about-interests-media">
      <video autoplay loop muted playsinline class="about-dog">
        <source src="{{ '/assets/images/dog-playing.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video.
      </video>
      <video autoplay loop muted playsinline class="about-climbing">
        <source src="{{ '/assets/images/climbing.webm' | relative_url }}" type="video/webm">
        Your browser does not support the video.
      </video>
    </div>
  </div>
</section>

<!-- INDUSTRY INVOLVEMENT CARD -->
<section class="about-industry-card fade-in">
  <div class="card">
    <h2>Industry Involvement</h2>
    <h3>Arctic Game Dev Volunteer</h3>
    <p>
      Volunteering with Arctic Game Dev has given me the opportunity to support local game development initiatives, network with industry professionals. This experience has deepened my insight into industry collaboration, event coordination, and professional networking.
    </p>
    <img src="{{ '/assets/images/arctic-volunteers.jpg' | relative_url }}" alt="Arctic Game Dev Volunteers" class="about-volunteers">
  </div>
</section>

<!-- CONTACT CARD -->
<section class="about-contact-card fade-in">
  <div class="card">
    <h2>Contact Me!</h2>
    <p>
      Feel free to explore my work and <a href="{{ '/contact/' | relative_url }}">get in touch</a>—I'd love to chat!
    </p>
  </div>
</section>
