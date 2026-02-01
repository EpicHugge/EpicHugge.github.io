---
layout: default
title: "It's a Fish, Your Majesty"
permalink: /projects/game-project-2/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header" data-reveal>
    <h1>It's a Fish, Your Majesty</h1>
  </header>

  <div class="ald-hero-media" data-reveal>
    <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-hero.png' | relative_url }}" alt="It's a Fish, Your Majesty hero">
    <a class="ald-hero-cta" href="{{ '/assets/images/gp2-hero.png' | relative_url }}" target="_blank" rel="noopener">
      View Hero Still <span aria-hidden="true">&rarr;</span>
    </a>
  </div>

  <div class="ald-split">
    <section class="ald-panel" data-reveal>
      <h2>Summary</h2>
      <p class="ald-text-lede">
        2.5D side-scrolling brawler built in four weeks by a 15-person team. I moved from sound and music to full-time
        level design after week one, taking ownership of combat spaces and traversal flow.
      </p>
      <ul class="ald-text-points">
        <li><strong>2.5D perspective:</strong> Side-on view with depth lanes so players can dodge and reposition.</li>
        <li><strong>Focus:</strong> Keep melee encounters readable while maintaining fast momentum.</li>
        <li><strong>Constraint:</strong> Stabilize a broken blockout early so the team could test and ship.</li>
      </ul>
    </section>
    <section class="ald-panel ald-breakdown-panel" data-reveal>
      <h2>Breakdown</h2>
      <ul class="ald-breakdown-list">
        <li><strong>Duration:</strong> 4 weeks</li>
        <li class="ald-engine">
          <strong>Engine:</strong> Unity
          <img src="{{ '/assets/images/tool-icons/unity.svg' | relative_url }}" alt="Unity logo" class="ald-engine-logo">
        </li>
        <li><strong>Team:</strong> 15 people</li>
        <li><strong>Role:</strong> Level Designer</li>
      </ul>
    </section>
    <section class="ald-panel ald-goals-panel" data-reveal>
      <h2>Goals</h2>
            <ul class="ald-goals">
        <li><strong>Readable combat spaces:</strong> Keep fights clear so players can make quick decisions.</li>
        <li><strong>Fast traversal feel:</strong> Make movement feel quick and satisfying without breaking combat.</li>
        <li><strong>Encounter rhythm:</strong> Establish a steady flow of action and recovery beats.</li>
        <li><strong>Team iteration:</strong> Keep the level stable and testable for frequent changes.</li>
      </ul>
    </section>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Overview</h2>
    <div class="ald-map ald-map-single">
      <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-final.png' | relative_url }}" alt="Level overview" class="ald-map-image">
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Highlights</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-screenshot1.png' | relative_url }}" alt="Role transition moment">
        </div>
        <div class="ald-highlight-text">
          <h3>Role Transition</h3>
          <p class="ald-highlight-lede">
            I began the project as Sound &amp; Music Designer, with a secondary role in Level Design. After the first week, I stepped into Level Design full-time when the original designer had to leave.
          </p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>Adapt:</strong> Stepped in quickly to keep the workflow smooth for the team.</li>
              <li><strong>Balance:</strong> Kept combat, traversal, and level structure aligned as the level evolved.</li>
              <li><strong>Timeline:</strong> Delivered within the project's tight timeline.</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-screenshot2.png' | relative_url }}" alt="Traversal adjustments">
        </div>
        <div class="ald-highlight-text">
          <h3>Design</h3>
          <p class="ald-highlight-lede">
            The hook ability was originally intended for reaching high platforms, but this conflicted with enemy AI, as they couldn't follow the player. To fix this, I repositioned hook anchors to focus on speed and traversal rather than vertical movement, allowing for fluid mobility without breaking combat flow.
          </p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>Playtest change:</strong> Removed excess platforms to keep the brawler focus intact.</li>
              <li><strong>Ambush tuning:</strong> Fine-tuned ambush sections as AI changed.</li>
              <li><strong>Difficulty:</strong> Adjusted enemy placement to keep a balanced curve.</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-screenshot3.png' | relative_url }}" alt="Encounter pacing">
        </div>
        <div class="ald-highlight-text">
          <h3>Collaboration</h3>
          <p class="ald-highlight-lede">
            I worked closely with programmers, artists, and designers to balance combat, traversal, and level flow. Frequent enemy AI tweaks required ongoing adjustments to enemy placement and ambush pacing to maintain fair difficulty.
          </p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>Jump alignment:</strong> Coordinated with programmers so platform spacing felt responsive.</li>
              <li><strong>Communication:</strong> Kept disciplines aligned so their work could ship smoothly.</li>
              <li><strong>Quality:</strong> Protected balance and polish while changes landed.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Iteration</h2>
    <div class="ald-iteration-summary">
      <p>
        I inherited an unfinished blockout with technical issues that blocked testing and asset integration. I stabilized
        the layout first, then iterated on flow, encounter pacing, and traversal spacing to keep the brawler focus sharp.
      </p>
      <ul class="ald-list">
        <li><strong>Stabilize:</strong> Repair layout and collisions so the team could playtest reliably.</li>
        <li><strong>Refine:</strong> Adjust pathing, spacing, and ambush timing for clarity.</li>
        <li><strong>Align:</strong> Sync enemy placement and traversal tuning with gameplay updates.</li>
      </ul>
    </div>
    <div class="ald-iteration">
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-blockout.png' | relative_url }}" alt="Blockout layout">
        <figcaption>Blockout v1</figcaption>
      </figure>
      <div class="ald-iteration-center">
        <span>Fast Iteration</span>
        <small>4-week timeline</small>
      </div>
      <figure>
        <img loading="lazy" decoding="async" src="{{ '/assets/images/gp2-final.png' | relative_url }}" alt="Polished level">
        <figcaption>Polished Level</figcaption>
      </figure>
    </div>
  </div>
  <div class="ald-section" data-reveal>
    <h2>Reflections &amp; Takeaways</h2>
    <div class="ald-reflections">
      <p class="ald-text-lede">
        It's a Fish, Your Majesty challenged me to adapt quickly, problem-solve under pressure, and collaborate across disciplines. Taking over Level Design mid-project, I prioritized efficiency, ensuring a functional, testable level without blocking development.
      </p>
      <ul class="ald-text-points">
        <li><strong>Combat + traversal:</strong> Refined enemy placement, encounter pacing, and platforming density to keep movement fluid and the brawler focus intact.</li>
        <li><strong>Mechanical cohesion:</strong> The hook traversal work reinforced that features must complement, not disrupt, gameplay.</li>
        <li><strong>Iteration:</strong> Feedback-driven changes to level structure, AI placement, and encounter flow strengthened my passion for level design and cross-discipline collaboration.</li>
      </ul>
    </div>
  </div>

  <a class="ald-footer-cta" href="{{ '/assets/images/gp2-hero.png' | relative_url }}" target="_blank" rel="noopener" data-reveal>
    View Hero Still <span aria-hidden="true">&#9654;</span>
  </a>
</section>
