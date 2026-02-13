---
layout: default
title: "Underground Garage Encounter"
permalink: /projects/underground-garage-encounter/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header ald-hero-card" data-reveal>
    <h1>Underground Garage Encounter</h1>
    <p class="ald-subtitle">A Division-inspired third-person shooter encounter in an underground parking garage focused on cover-to-cover pacing, route choice, and a push → defend reversal with a clearly signaled door-breach flank event.</p>
  </header>

  <div class="ald-hero-media" data-reveal>
    <video preload="auto" autoplay loop muted playsinline poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00001.png' | relative_url }}">
      <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Hero%20Clip.webm' | relative_url }}" type="video/webm">
    </video>
    <a class="ald-hero-cta" href="#walkthrough">Watch Full Walkthrough <span aria-hidden="true">&rarr;</span></a>
  </div>

  <div class="ald-section" data-reveal>
    <div class="ald-split">
      <section class="ald-panel">
        <h2>My Role</h2>
        <p>I built this as a short, intense portfolio sprint to combine my recent learning into one complete TPS encounter slice.</p>
        <ul class="ald-text-points">
          <li><strong>Level + encounter design:</strong> Layout, pacing, and player guidance.</li>
          <li><strong>Implementation:</strong> Objective flow, spawns, and encounter sequencing.</li>
          <li><strong>Documentation + capture:</strong> Notes, screenshots, and clips.</li>
        </ul>
      </section>
      <section class="ald-panel">
        <h2>Constraints</h2>
        <ul class="ald-breakdown-list">
          <li><strong>Scope:</strong> Single encounter slice.</li>
          <li><strong>Duration:</strong> 4-day sprint</li>
          <li class="ald-engine">
            <strong>Engine:</strong> Unreal Engine 5
            <img src="{{ '/assets/images/tool-icons/unreal.svg' | relative_url }}" alt="Unreal Engine logo" class="ald-engine-logo">
          </li>
          <li><strong>Perspective:</strong> Third person</li>
        </ul>
        <p class="ald-assets"><strong>Assets:</strong> Unreal Engine Blockout Starter Pack + IWALS / AGLS.</p>
      </section>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Overview</h2>
    <div class="ald-map ald-map-single">
      <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Overview%20Image.png' | relative_url }}" alt="Top-down encounter overview" class="ald-map-image">
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Player Journey</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00002.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Initial%20Read%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>1. Spawn &amp; Read Moment</h3>
          <p class="ald-highlight-lede">The encounter opens with a quick read: objective direction, cover density, and route options are visible before committing.</p>
          <ul class="ald-highlight-points">
            <li><strong>Objective framing:</strong> Visible early to set direction.</li>
            <li><strong>Cover language:</strong> Safety and tempo are readable at a glance.</li>
            <li><strong>Route hints:</strong> Framing and lighting suggest choices.</li>
          </ul>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00003.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Different%20Paths%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>2. Push Phase &amp; Route Choice</h3>
          <p class="ald-highlight-lede">The push phase teaches the space. The golden path is direct but exposed; alternative routes require commitment but give tighter angles.</p>
          <ul class="ald-highlight-points">
            <li><strong>Golden path:</strong> Faster, more exposure, head-on pressure.</li>
            <li><strong>Alt paths:</strong> Risk to access, reward = tighter sightlines.</li>
            <li><strong>Pacing:</strong> Built for cover-to-cover movement.</li>
          </ul>
        </div>
      </article>

      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00004.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Calm%20Moment%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>3. Reset &amp; Upload Trigger</h3>
          <p class="ald-highlight-lede">After clearing the initial space, the player gets a calm reset moment to reload, reposition, and read the next objective.</p>
          <ul class="ald-highlight-points">
            <li><strong>Reset beat:</strong> Pacing contrast after the push.</li>
            <li><strong>Objective clarity:</strong> Interaction is obvious and readable.</li>
            <li><strong>Setup:</strong> Player is positioned for the reversal.</li>
          </ul>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00007.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Defend%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>4. Defend + Door Breach Event</h3>
          <p class="ald-highlight-lede">The upload flips threat direction. Mid-defense, a side door breach opens a new angle that creates controlled overwhelm.</p>
          <ul class="ald-highlight-points">
            <li><strong>Threat reversal:</strong> Enemies push from the player’s entry side.</li>
            <li><strong>Breach read:</strong> New angle is clearly signaled.</li>
            <li><strong>Feeling:</strong> Stressful but fair.</li>
          </ul>
        </div>
      </article>
    </div>
  </div>

    <div class="ald-section" data-reveal>
    <h2>Iteration &amp; Playtesting</h2>
    <div class="ald-iteration-summary">
      <p>Four playtests revealed key readability and fairness issues. I iterated quickly to make the encounter more readable while preserving the intended “overwhelmed” feeling.</p>
    </div>

    <div class="ald-iteration">
      <figure>
        <div class="blockout-carousel ald-carousel">
          <div class="carousel-container">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Itertaion1%20without%20breach%20readability.png' | relative_url }}" alt="Iteration screenshot 1">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Iterion%20with%20breach%20readability.png' | relative_url }}" alt="Iteration screenshot 2">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20113629.png' | relative_url }}" alt="Iteration screenshot 3">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20113648.png' | relative_url }}" alt="Iteration screenshot 4">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20131330.png' | relative_url }}" alt="Iteration screenshot 5">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20131345.png' | relative_url }}" alt="Iteration screenshot 6">
          </div>
        </div>
        <figcaption>Iteration Passes</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Iterations</span>
        <small>Before → After</small>
      </div>
      <figure>
        <div class="blockout-carousel ald-carousel">
          <div class="carousel-container">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00003.png' | relative_url }}" alt="Finished screenshot 1">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00004.png' | relative_url }}" alt="Finished screenshot 2">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00005.png' | relative_url }}" alt="Finished screenshot 3">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00006.png' | relative_url }}" alt="Finished screenshot 4">
            <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00007.png' | relative_url }}" alt="Finished screenshot 5">
          </div>
        </div>
        <figcaption>Final Pass</figcaption>
      </figure>
    </div>

    <div class="ald-iteration-summary">
      <p><strong>Extra note:</strong> Players rushed into the open without reading the encounter. I added a subtle blocker and adjusted first-cover placement to create a deliberate “pause and scan” moment.</p>
    </div>
  </div>

<div class="ald-section" data-reveal>
    <h2>Key Design Decisions</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00001.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Defend%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Escalation Rhythm</h3>
          <p class="ald-highlight-lede">The encounter builds pressure in steps so players can stabilize, then adapt to a new problem—not just more enemies.</p>
          <ul class="ald-highlight-points">
            <li><strong>Waves:</strong> Reinforcements arrive in distinct waves, not a constant trickle.</li>
            <li><strong>Readable entries:</strong> Entry points are predictable so the threat can be read and answered.</li>
            <li><strong>Mid-fight shift:</strong> The new beat changes the situation, not just the count.</li>
          </ul>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00002.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Different%20Paths%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Tactical Choice Under Pressure</h3>
          <p class="ald-highlight-lede">The space supports multiple viable approaches, so decision-making matters, not just aim.</p>
          <ul class="ald-highlight-points">
            <li><strong>Tradeoffs:</strong> Multiple holds with clear control vs safety tradeoffs.</li>
            <li><strong>Repositioning:</strong> Strong positions become risky when conditions change.</li>
            <li><strong>Planning:</strong> Rewards movement and planning over one “correct” spot.</li>
          </ul>
        </div>
      </article>

      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Finished/HighresScreenshot00007.png' | relative_url }}">
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Signature%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Controlled Overwhelm</h3>
          <p class="ald-highlight-lede">The defend phase aims for stress without confusion, with a clear spike and reaction window.</p>
          <ul class="ald-highlight-points">
            <li><strong>Spike moment:</strong> Pressure ramps into a clear peak, then resolves.</li>
            <li><strong>Clear cues:</strong> Light, sound, and motion introduce the new angle.</li>
            <li><strong>Decision:</strong> Forces hold / rotate / fall back.</li>
          </ul>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-walkthrough" id="walkthrough" data-reveal>
    <h2>Full Walkthrough</h2>
    <div class="ald-embed">
      <iframe src="https://www.youtube.com/embed/pTpTl0-H360" title="Underground Garage Encounter walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Takeaways</h2>
    <div class="ald-reflections">
      <ul class="ald-text-points">
        <li><strong>Timeboxing:</strong> Forced better prioritization and clearer beats.</li>
        <li><strong>Telegraphing:</strong> Essential when a new combat angle appears mid-fight.</li>
        <li><strong>Route clarity:</strong> Small layout and lighting changes improved discovery.</li>
        <li><strong>Next:</strong> Extend the newly opened area and improve lighting/material pass for clarity.</li>
      </ul>
    </div>
  </div>

  <a class="ald-footer-cta" href="{{ '/contact/' | relative_url }}">Get in touch</a>
</section>
