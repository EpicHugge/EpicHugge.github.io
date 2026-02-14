---
layout: default
title: "{{TITLE}}"
permalink: /projects/{{SLUG}}/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header ald-hero-card" data-reveal>
    <h1>{{TITLE}}</h1>
    <p class="ald-subtitle">{{ONE_LINER}}</p>
  </header>

  <div class="ald-hero-media" data-reveal>
    <video preload="auto" autoplay loop muted playsinline poster="{{ '/assets/media/projects/{{SLUG}}/images/hero.png' | relative_url }}">
      <source src="{{ '/assets/media/projects/{{SLUG}}/videos/hero.webm' | relative_url }}" type="video/webm">
    </video>
    <a class="ald-hero-cta" href="#walkthrough">Watch Full Walkthrough <span aria-hidden="true">&rarr;</span></a>
  </div>

  <div class="ald-section" data-reveal>
    <div class="ald-split">
      <section class="ald-panel">
        <h2>My Role</h2>
        <ul class="ald-text-points">
          <li><strong>Role:</strong> {{ROLE}}</li>
          <li><strong>Owned:</strong> {{OWNED}}</li>
          <li><strong>Iteration:</strong> {{ITERATION}}</li>
        </ul>
      </section>
      <section class="ald-panel">
        <h2>Constraints</h2>
        <ul class="ald-breakdown-list">
          <li><strong>Scope:</strong> {{SCOPE}}</li>
          <li><strong>Duration:</strong> {{DURATION}}</li>
          <li class="ald-engine">
            <strong>Engine:</strong> {{ENGINE}}
            <img src="{{ '/assets/icons/tools/{{ENGINE_ICON}}' | relative_url }}" alt="{{ENGINE}} logo" class="ald-engine-logo">
          </li>
          <li><strong>Perspective:</strong> {{PERSPECTIVE}}</li>
        </ul>
        <p class="ald-assets"><strong>Assets:</strong> {{ASSETS}}</p>
      </section>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Overview</h2>
    <div class="ald-map ald-map-single">
      <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/overview/overview.png' | relative_url }}" alt="Level overview map" class="ald-map-image">
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Player Journey</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/journey/journey-1.png' | relative_url }}" alt="Journey step 1">
        </div>
        <div class="ald-highlight-text">
          <h3>1. {{JOURNEY_TITLE_1}}</h3>
          <p class="ald-highlight-lede">{{JOURNEY_TEXT_1}}</p>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/journey/journey-2.png' | relative_url }}" alt="Journey step 2">
        </div>
        <div class="ald-highlight-text">
          <h3>2. {{JOURNEY_TITLE_2}}</h3>
          <p class="ald-highlight-lede">{{JOURNEY_TEXT_2}}</p>
        </div>
      </article>

      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/journey/journey-3.png' | relative_url }}" alt="Journey step 3">
        </div>
        <div class="ald-highlight-text">
          <h3>3. {{JOURNEY_TITLE_3}}</h3>
          <p class="ald-highlight-lede">{{JOURNEY_TEXT_3}}</p>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/journey/journey-4.png' | relative_url }}" alt="Journey step 4">
        </div>
        <div class="ald-highlight-text">
          <h3>4. {{JOURNEY_TITLE_4}}</h3>
          <p class="ald-highlight-lede">{{JOURNEY_TEXT_4}}</p>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Iteration &amp; Playtesting</h2>
    <div class="ald-iteration-summary">
      <p>{{ITERATION_SUMMARY}}</p>
    </div>
    <div class="ald-iteration">
      <figure>
        <div class="blockout-carousel ald-carousel">
          <div class="carousel-container">
            <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/iteration/iter-1.png' | relative_url }}" alt="Iteration 1">
          </div>
        </div>
        <figcaption>Blockout</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Iteration</span>
        <small>Before → After</small>
      </div>
      <figure>
        <div class="blockout-carousel ald-carousel">
          <div class="carousel-container">
            <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/iteration/final-1.png' | relative_url }}" alt="Final 1">
          </div>
        </div>
        <figcaption>Final</figcaption>
      </figure>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Key Design Decisions</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/media/projects/{{SLUG}}/images/decisions/decision-1.png' | relative_url }}" alt="Decision 1">
        </div>
        <div class="ald-highlight-text">
          <h3>{{DECISION_TITLE_1}}</h3>
          <p class="ald-highlight-lede">{{DECISION_TEXT_1}}</p>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-walkthrough" id="walkthrough" data-reveal>
    <h2>Full Walkthrough</h2>
    <div class="ald-embed">
      <iframe src="{{WALKTHROUGH_URL}}" title="{{TITLE}} walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Takeaways</h2>
    <div class="ald-reflections">
      <ul class="ald-text-points">
        <li>{{TAKEAWAY_1}}</li>
        <li>{{TAKEAWAY_2}}</li>
        <li>{{TAKEAWAY_3}}</li>
      </ul>
    </div>
  </div>

  <a class="ald-footer-cta" href="{{ '/contact/' | relative_url }}">Get in touch</a>
  {% include project-nav.html slug="{{SLUG}}" %}
</section>
