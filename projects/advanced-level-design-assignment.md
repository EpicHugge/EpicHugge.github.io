---
layout: default
title: "Water Treatment Plant"
permalink: /projects/advanced-level-design-assignment/
body_class: project-page
---

<section class="ald-case">
  <header class="ald-header" data-reveal>
    <h1>Water Treatment Plant</h1>
  </header>

  <div class="ald-hero-media" data-reveal>
    <video preload="auto" autoplay loop muted playsinline poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00003.png' | relative_url }}">
      <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Intro.webm' | relative_url }}" type="video/webm">
    </video>
    <a class="ald-hero-cta" href="#walkthrough">
      Watch Full Walkthrough <span aria-hidden="true">&rarr;</span>
    </a>
  </div>

  <div class="ald-split">
    <section class="ald-panel" data-reveal>
      <h2>Summary</h2>
      <p class="ald-text-lede">
        A first-person horror puzzle space. It guides the player without UI using lighting and framing.
      </p>
      <ul class="ald-text-points">
        <li><strong>Experience:</strong> Calm problem-solving → unease → reveal.</li>
        <li><strong>Constraints:</strong> One room with limited interactions.</li>
        <li><strong>Focus:</strong> Player guidance and clarity. Pacing through the environment.</li>
      </ul>
    </section>
    <section class="ald-panel" data-reveal>
      <h2>Breakdown</h2>
      <ul class="ald-breakdown-list">
        <li><strong>Duration:</strong> 5 weeks</li>
        <li class="ald-engine">
          <strong>Engine:</strong> Unreal Engine
          <img src="{{ '/assets/images/tool-icons/unreal.svg' | relative_url }}" alt="Unreal Engine logo" class="ald-engine-logo">
        </li>
        <li><strong>Perspective:</strong> First person</li>
        <li><strong>Genre:</strong> Horror</li>
      </ul>
      <p class="ald-assets"><strong>Assets:</strong> Unreal Engine Blockout Starter Pack.</p>
    </section>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Overview</h2>
    <div class="ald-map ald-map-single">
      <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Overviewimage3.png' | relative_url }}" alt="Level overview map" class="ald-map-image">
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Player Journey Breakdown</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00003.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Intro.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>1. Entry &amp; First Read</h3>
          <p class="ald-highlight-lede">The player enters from the catwalk and reads the pressure valve as important through red alarm lights and sound.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>What the player sees:</strong> Red alarm lights, steam, and a loud valve zone straight ahead.</li>
              <li><strong>Why focus lands there:</strong> Strong color contrast and alarm audio make the valve the clearest first action.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/HighresScreenshot00009.png' | relative_url }}" alt="State change and redirection">
        </div>
        <div class="ald-highlight-text">
          <h3>2. State Change &amp; Redirection</h3>
          <p class="ald-highlight-lede">Lowering the pressure turns off the alarm lights and clears the steam which redirects the player downward.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>What the player sees:</strong> Red light drops, steam clears, and the lower route becomes readable.</li>
              <li><strong>Why focus shifts:</strong> The strongest visual noise disappears so attention moves to the newly opened path.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00008.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Lighting%20and%20Guidence.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>3. Problem Identification</h3>
          <p class="ald-highlight-lede">The screen bar looks damaged and draws the player in, then a quick look down reveals the replacement part waiting below.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>What the player sees:</strong> A broken pipe at the screen bar and a visible part on the lower level.</li>
              <li><strong>Why focus stays clear:</strong> The missing piece and the replacement are both in view so the task reads fast.</li>
            </ul>
          </div>
        </div>
      </article>

      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00008.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/The%20Reveal.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>4. Reveal &amp; Resolution Setup</h3>
          <p class="ald-highlight-lede">Reaching the lower floor exposes the broken screen bars and confirms the source of the system failure, prompting the player to return and replace the missing pipe.</p>
          <div class="ald-highlight-detail">
            <ul class="ald-highlight-points">
              <li><strong>What the player sees:</strong> The breach up close and clear damage around the screen bars.</li>
              <li><strong>Why the return makes sense:</strong> The failure source is now confirmed so replacing the pipe feels like the direct next move.</li>
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
        I ran six playtests with peers. Early versions had two main rooms. Feedback showed the screen bar room needed more
        work on navigation and puzzle clarity. I cut the second room. That let me polish one space and improve layout plus
        lighting and feedback.
      </p>
      <ul class="ald-list">
        <li><strong>Scope cut:</strong> Removed the second room to increase polish and reduce cognitive load.</li>
        <li><strong>Flow rework:</strong> Redesigned the catwalk and walkway route to create a clearer critical path and smoother pacing.</li>
        <li><strong>Puzzle feedback:</strong> Moved interactions and added VFX and light cues so players understood cause -> effect.</li>
        <li><strong>Test focus:</strong> Each iteration targeted either navigation clarity or puzzle feedback.</li>
      </ul>
    </div>
    <div class="ald-iteration">
    <figure>
      <div class="blockout-carousel ald-carousel">
        <div class="carousel-container">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration1/Iteration1-1.png' | relative_url }}" alt="Iteration 1 1">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration1/Iteration1-2.png' | relative_url }}" alt="Iteration 1 2">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration1/Iteration1-3.png' | relative_url }}" alt="Iteration 1 3">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration1/Iteration1-4.png' | relative_url }}" alt="Iteration 1 4">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration1/Iteration1-5.png' | relative_url }}" alt="Iteration 1 5">
        </div>
      </div>
      <figcaption>Blockout v1</figcaption>
    </figure>
    <div class="ald-iteration-center">
      <span>6 Iterations</span>
      <small>Playtest sessions</small>
    </div>
    <figure>
      <div class="blockout-carousel ald-carousel">
        <div class="carousel-container">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/Iteration6-1.png' | relative_url }}" alt="Iteration 6 1">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/Iteration6-2.png' | relative_url }}" alt="Iteration 6 2">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/Iteration6-3.png' | relative_url }}" alt="Iteration 6 3">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/Iteration6-4.png' | relative_url }}" alt="Iteration 6 4">
          <img loading="lazy" decoding="async" src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Iteration6/Iteration6-5.png' | relative_url }}" alt="Iteration 6 5">
        </div>
      </div>
      <figcaption>Iteration 6</figcaption>
    </figure>
  </div>

  </div>

  <div class="ald-section" data-reveal>
    <h2>Level Highlights</h2>
    <div class="ald-highlights">
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00003.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/PuzzleSolving.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Restore the Pressure</h3>
          <p class="ald-highlight-lede">
            Main sequence that gets the system running again.
          </p>
          <ul class="ald-highlight-points">
            <li><strong>Puzzle sequence:</strong> Lower pressure. Install the missing pipe. Reactivate the screen bars to open the route.</li>
            <li><strong>Intent:</strong> Make the sequence feel like fixing a real industrial system. Not just pressing buttons.</li>
            <li><strong>Clarity:</strong> Added VFX and lighting feedback so cause -> effect reads instantly without UI.</li>
            <li><strong>Flow:</strong> Each step sends the player back through familiar space so the layout reads better on return.</li>
          </ul>
        </div>
      </article>
      <article class="ald-highlight alt">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00006.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/Leading%20Lines.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>Guided Exploration</h3>
          <p class="ald-highlight-lede">
            Navigation has no objective markers. The environment does the guiding.
          </p>
          <ul class="ald-highlight-points">
            <li><strong>Guidance:</strong> Lighting contrast and framing plus leading lines pull players toward key interactables.</li>
            <li><strong>Flow:</strong> Reworked the catwalk route to reduce confusion and clarify the critical path.</li>
            <li><strong>Curiosity:</strong> Opened up areas players naturally wanted to explore so it felt rewarding.</li>
            <li><strong>Landmarks:</strong> Used strong light sources and silhouettes so key spaces stayed memorable.</li>
          </ul>
        </div>
      </article>
      <article class="ald-highlight">
        <div class="ald-highlight-media">
          <video class="ald-highlight-video" autoplay loop muted playsinline preload="metadata" poster="{{ '/assets/images/AdvancedLevelDesign-Assignment/HighresScreenshot00008.png' | relative_url }}">
            <source src="{{ '/assets/images/AdvancedLevelDesign-Assignment/The%20Reveal.webm' | relative_url }}" type="video/webm">
          </video>
        </div>
        <div class="ald-highlight-text">
          <h3>The Breach Reveal</h3>
          <p class="ald-highlight-lede">
            Narrative payoff that flips the mood from problem-solving to threat.
          </p>
          <ul class="ald-highlight-points">
            <li><strong>Moment:</strong> Torn screen bars confirm something powerful forced its way through.</li>
            <li><strong>Storytelling:</strong> Communicated through environment not exposition.</li>
            <li><strong>Pacing:</strong> Relief beat followed by a new unanswered question and tension spike.</li>
            <li><strong>Orientation:</strong> The breach doubles as a landmark that reorients the player.</li>
          </ul>
        </div>
      </article>
    </div>
  </div>

  <div class="ald-section" data-reveal>
    <h2>Reflections &amp; Takeaways</h2>
    <div class="ald-reflections">
      <p class="ald-text-lede">
        Iteration is where the real work is. Six playtests showed me things I would not catch alone. They made the weak spots obvious.
      </p>
      <ul class="ald-text-points">
        <li><strong>Observation &gt; opinion:</strong> Watching where players hesitated or misread was more useful than likes or dislikes.</li>
        <li><strong>Playtest-driven improvements:</strong> Reworked the catwalk flow for navigation clarity. Strengthened cause -&gt; effect feedback and opened curiosity hotspots.</li>
        <li><strong>Scope choice:</strong> Cutting the second room let me polish one space and improve clarity, pacing and overall quality.</li>
        <li><strong>Guidance takeaway:</strong> Strong lighting cues reduced hesitation more than extra signage.</li>
      </ul>
    </div>
  </div>

  <div class="ald-walkthrough" id="walkthrough" data-reveal>
    <h2>Full Walkthrough</h2>
    <div class="ald-embed">
      <iframe src="https://www.youtube.com/embed/imjaIaKAfCw" title="Advanced Level Design Assignment walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</section>
