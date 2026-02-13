---
layout: default
title: "Underground Garage Encounter"
permalink: /projects/underground-garage-encounter/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header ald-hero-card" data-reveal>
    <h1>Underground Garage Encounter</h1>
    <p class="ald-subtitle">A Division-inspired third-person shooter encounter in an underground parking garage focused on cover-to-cover pacing, route choice, and a push → defend reversal with a telegraphed door-breach flank event.</p>
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
          <li><strong>Playtesting:</strong> Two peer tests plus fast iteration.</li>
          <li><strong>Documentation + capture:</strong> Notes, screenshots, and clips.</li>
        </ul>
      </section>
      <section class="ald-panel">
        <h2>Constraints</h2>
        <ul class="ald-breakdown-list">
          <li><strong>Scope:</strong> Single encounter slice with push → defend reversal.</li>
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
            <li><strong>Breach read:</strong> New angle is clearly telegraphed.</li>
            <li><strong>Feeling:</strong> Stressful but fair.</li>
          </ul>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Iteration &amp; Playtesting</h2>
    <div class="ald-iteration-summary">
      <p>Two peer playtests revealed key readability and fairness issues. I iterated quickly to make the encounter more readable while preserving the intended “overwhelmed” feeling.</p>
    </div>

    <div class="ald-iteration">
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20113629.png' | relative_url }}" alt="Door breach before">
        <figcaption>Door Breach (Before)</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Breach Readability</span>
        <small>Before → After</small>
      </div>
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20131400.png' | relative_url }}" alt="Door breach after">
        <figcaption>Door Breach (After)</figcaption>
      </figure>
    </div>

    <div class="ald-iteration">
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20131330.png' | relative_url }}" alt="Routes before">
        <figcaption>Routes (Before)</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Route Clarity</span>
        <small>Before → After</small>
      </div>
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/Parking%20Garage/Portfolio/Screenshots/Iterations/Ska%CC%88rmbild%202026-02-11%20131408.png' | relative_url }}" alt="Routes after">
        <figcaption>Routes (After)</figcaption>
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
            <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Initial%20Read%20Clip.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Threat Direction Control</h3>
          <p class="ald-highlight-lede">Sightlines keep Phase 1 as a forward push, then Phase 2 flips into a readable defense line.</p>
          <ul class="ald-highlight-points">
            <li><strong>Earned complexity:</strong> One main threat direction first.</li>
            <li><strong>Threat reversal:</strong> Clear pacing shift.</li>
            <li><strong>Cleaner firefights:</strong> Blockers reduce cheap crossfire.</li>
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
          <h3>Risk / Reward Route Design</h3>
          <p class="ald-highlight-lede">Routes are built around meaningful tradeoffs: direct pressure vs tighter angles to isolate enemies.</p>
          <ul class="ald-highlight-points">
            <li><strong>Golden path:</strong> Strong cover but wide exposure.</li>
            <li><strong>Alt routes:</strong> Risk to access, reward = cleaner engagements.</li>
            <li><strong>Movement:</strong> Encourages deliberate cover-to-cover play.</li>
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
          <h3>Telegraphing the Breach Event</h3>
          <p class="ald-highlight-lede">The breach stays stressful but readable using audio, light cues, and animation timing.</p>
          <ul class="ald-highlight-points">
            <li><strong>Attention pull:</strong> Alarm + rotating lights on the door.</li>
            <li><strong>Reaction window:</strong> Slow opening gives time.</li>
            <li><strong>Fair pressure:</strong> Adds stress without confusion.</li>
          </ul>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-walkthrough" id="walkthrough" data-reveal>
    <h2>Full Walkthrough</h2>
    <div class="ald-embed">
      <video controls preload="metadata">
        <source src="{{ '/assets/Parking%20Garage/Portfolio/Portfolio%20Clips/WEBM%20Clips/Signature%20Clip.webm' | relative_url }}" type="video/webm">
      </video>
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
