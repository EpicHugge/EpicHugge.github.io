---
layout: default
title: About Me
permalink: /about/
---

<!-- HERO SECTION: Quick Introduction & Portrait Image -->
<section class="about-hero fade-in">
  <div class="about-hero-text">
    <h1>Yo!, I'm Hugo!</h1>
    <p>
      I'm a Game Design student at Futuregames in Umeå specializing in Level & Quest Design. I create immersive environments, player-driven narratives, and worlds that tell stories beyond words.
    </p>
  </div>
  <div class="about-hero-media">
    <img src="{{ '/assets/images/hugo-portrait.jpg' | relative_url }}" alt="Hugo Portrait" class="about-portrait">
  </div>
</section>

<!-- MY JOURNEY: Background & Skills -->
<section class="about-journey fade-in">
  <h2>My Journey</h2>
  <p>
    I've always been fascinated by storytelling and interactive worlds—whether through video games, D&D campaigns, or films.
  </p>
</section>

<!-- PERSONAL INTERESTS: Show Your Personality with WebM Animations -->
<section class="about-interests fade-in">
  <h2>Beyond Game Design</h2>
  <p>
    When I'm not designing levels or Quests, you'll find me climbing, playing with my familys dog, or immersing myself in RPGs or Movies. These passions fuel my creativity and keep me inspired.
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
</section>

<!-- INDUSTRY INVOLVEMENT: Arctic Game Dev Volunteering -->
<section class="about-industry fade-in">
  <div class="about-industry-content">
    <h2>Industry Involvement</h2>
    <h3>Arctic Game Dev Volunteer</h3>
    <p>
      Volunteering with Arctic Game Dev has given me the opportunity to support local game development initiatives, network with industry professionals, and help organize game-related events. This experience has deepened my insight into industry collaboration, event coordination, and professional networking.
    </p>
    <img src="{{ '/assets/images/arctic-volunteers.jpg' | relative_url }}" alt="Arctic Game Dev Volunteers" class="about-volunteers">
  </div>
</section>

<!-- CONTACT & CALL TO ACTION -->
<section class="about-contact fade-in">
  <h2>Contact Me!</h2>
  <p>
    Feel free to explore my work and <a href="{{ '/contact/' | relative_url }}">get in touch</a>—I'd love to chat!
  </p>
</section>
