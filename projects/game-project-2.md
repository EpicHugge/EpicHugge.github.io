---
layout: default
title: "It's a Fish, Your Majesty"
permalink: /projects/game-project-2/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header ald-hero-card" data-reveal>
    <h1>It's a Fish, Your Majesty</h1>
    <p class="ald-subtitle">I stepped into level design <strong>mid-production</strong> to get a <strong>playable level</strong> back on track and keep the team moving.</p>
  </header>

  <div class="ald-hero-media" data-reveal>
    <video preload="auto" class="ald-hero-video" autoplay loop muted playsinline poster="{{ '/assets/images/GP2/gp2-hero.png' | relative_url }}">
      <source src="{{ '/assets/images/GP2/Hero.webm' | relative_url }}" type="video/webm">
    </video>
    <a class="ald-hero-cta" href="#walkthrough">Watch Full Walkthrough <span aria-hidden="true">&rarr;</span></a>
  </div>

  <div class="ald-actions" data-reveal>
    <a class="ald-link-pill" href="https://futuregames.itch.io/its-a-fish-your-majesty" target="_blank" rel="noopener">
      <img src="{{ '/assets/images/tool-icons/itch.svg' | relative_url }}" alt="" class="ald-link-icon" aria-hidden="true">
      Play on itch.io <span aria-hidden="true">&rarr;</span>
    </a>
  </div>

  <div class="ald-section" data-reveal>
    <div class="ald-split">
      <section class="ald-panel">
        <h2>My Role</h2>
        <ul class="ald-text-points">
          <li><strong>Joined:</strong> After week one, moved from sound and music to full-time level design.</li>
          <li><strong>Owned:</strong> Combat spaces, traversal flow, and encounter pacing.</li>
          <li><strong>Stabilized:</strong> Fixed a broken blockout so the team could playtest and ship.</li>
        </ul>
      </section>
      <section class="ald-panel ald-breakdown-panel">
        <h2>Constraints</h2>
        <ul class="ald-breakdown-list">
          <li><strong>Duration:</strong> 4 weeks</li>
          <li class="ald-engine">
            <strong>Engine:</strong> Unity
            <img src="{{ '/assets/images/tool-icons/unity.svg' | relative_url }}" alt="Unity logo" class="ald-engine-logo">
          </li>
          <li><strong>Team:</strong> 15 people</li>
          <li><strong>Perspective:</strong> 2.5D side-scroller</li>
        </ul>
      </section>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Production Challenge</h2>
    <div class="ald-iteration-summary">
      <p>
        Midway through the project the team lacked a <strong>playable level prototype</strong>, which <strong>blocked iteration</strong>. During this period I was volunteering at <strong>Umeå Game Conference</strong>. When I returned I stepped into level design to <strong>stabilize the project</strong> and deliver a <strong>playable level</strong>.
      </p>
    </div>
    <div class="ald-quote">
      <blockquote>
        During GP2 we did not have a playable prototype level when we expected. It caused delays and stress for the team.
        After Hugo returned from the game conference, we had a proper level in place within a few days.
      </blockquote>
      <cite>— Product Owner, GP2 (15-person team)</cite>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Stabilization &amp; Iteration</h2>
    <div class="ald-iteration-summary">
      <ul class="ald-list">
        <li><strong>Stabilize:</strong> Repair layout and collisions so the team could playtest reliably.</li>
        <li><strong>Refine:</strong> Adjust pathing and spacing to improve clarity and ambush timing.</li>
        <li><strong>Align:</strong> Sync enemy placement and traversal tuning with gameplay updates.</li>
      </ul>
    </div>
    <div class="ald-iteration">
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/images/GP2/gp2-blockout.png' | relative_url }}" alt="Blockout layout">
        <figcaption>Blockout v1</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Fast Iteration</span>
        <small>4-week timeline</small>
      </div>
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/images/GP2/gp2-final.png' | relative_url }}" alt="Polished level">
        <figcaption>Playable Level</figcaption>
      </figure>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Collaboration Highlights</h2>
    <div class="ald-highlights">
      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video preload="auto" autoplay loop muted playsinline poster="{{ '/assets/images/GP2/gp2-screenshot2.png' | relative_url }}">
            <source src="{{ '/assets/images/GP2/Hook.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Hook Adjustment</h3>
          <p class="ald-highlight-lede">The hook was meant for high platforms. That broke <strong>enemy AI</strong> so I shifted anchors to keep <strong>speed and combat flow</strong> intact.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>Playtest change:</strong> Removed excess platforms to keep the brawler focus intact.</li>
              <li><strong>Difficulty:</strong> Adjusted enemy placement to keep a balanced curve.</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/GP2/gp2-screenshot3.png' | relative_url }}" alt="Encounter pacing">
        </div>
        <div class="ald-highlight-text">
          <h3>Cross-Discipline Sync</h3>
          <p class="ald-highlight-lede">I worked closely with programmers, artists and designers to keep <strong>combat</strong>, <strong>traversal</strong>, and <strong>level flow</strong> aligned.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>Game mechanics + AI:</strong> Adjusted level flow after new mechanics and AI changes landed.</li>
              <li><strong>Communication:</strong> Kept disciplines aligned so their work could ship smoothly.</li>
              <li><strong>Quality:</strong> Protected balance and polish while changes landed.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-walkthrough" id="walkthrough" data-reveal>
    <h2>Full Walkthrough</h2>
    <div class="ald-embed">
      <iframe src="https://www.youtube.com/embed/q6qp8VoVdEg" title="It's a Fish, Your Majesty walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Takeaways</h2>
    <div class="ald-reflections">
      <ul class="ald-text-points">
        <li><strong>Adaptability:</strong> Stepping in mid-project kept production moving.</li>
        <li><strong>Collaboration:</strong> Tight feedback loops with other disciplines prevented rework.</li>
        <li><strong>Stability first:</strong> Fixing the blockout unlocked better playtests and faster iteration.</li>
      </ul>
    </div>
  </div>
</section>
