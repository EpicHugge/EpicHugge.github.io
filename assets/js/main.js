---
---

document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.classList.remove('no-js');
  window.addEventListener('load', () => {
    document.documentElement.classList.remove('page-loading');
  });
  window.addEventListener('pageshow', () => {
    document.documentElement.classList.remove('page-exit');
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pageTransitionDuration = 200;

  const navigateWithFade = (url) => {
    if (!url) return;
    if (prefersReducedMotion) {
      window.location.href = url;
      return;
    }
    document.documentElement.classList.add('page-exit');
    window.setTimeout(() => {
      window.location.href = url;
    }, pageTransitionDuration);
  };

  const shouldHandleLink = (link) => {
    if (!link) return false;
    if (link.dataset.noTransition === 'true') return false;
    if (link.hasAttribute('download')) return false;
    if (link.target === '_blank') return false;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return false;
    } catch (error) {
      return false;
    }
    return true;
  };

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a');
    if (!shouldHandleLink(link)) return;
    event.preventDefault();
    navigateWithFade(link.href);
  });

  const setupLazyVideos = () => {
    const videos = document.querySelectorAll('video[data-lazy-video]');
    if (!videos.length) {
      return;
    }

    const loadVideo = (video) => {
      const sources = video.querySelectorAll('source[data-src]');
      sources.forEach((source) => {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
      });
      video.load();
      if (video.hasAttribute('autoplay') && !prefersReducedMotion) {
        video.play().catch(() => {});
      }
      video.removeAttribute('data-lazy-video');
    };

    if (!('IntersectionObserver' in window)) {
      videos.forEach(loadVideo);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadVideo(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '200px 0px', threshold: 0.1 });

    videos.forEach((video) => observer.observe(video));
  };

  const setupProjectNavKeys = () => {
    if (!document.body.classList.contains('project-page')) {
      return;
    }
    const prevLink = document.querySelector('.project-nav-link[data-project-nav="prev"]');
    const nextLink = document.querySelector('.project-nav-link[data-project-nav="next"]');
    if (!prevLink && !nextLink) {
      return;
    }

    const isTypingTarget = (target) => {
      if (!target) return false;
      const tag = target.tagName?.toLowerCase();
      return target.isContentEditable || tag === 'input' || tag === 'textarea' || tag === 'select';
    };

    document.addEventListener('keydown', (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      if (isTypingTarget(document.activeElement)) return;

      if (event.key === 'ArrowLeft' && prevLink) {
        navigateWithFade(prevLink.href);
      }
      if (event.key === 'ArrowRight' && nextLink) {
        navigateWithFade(nextLink.href);
      }
    });
  };



  const setupMediaShimmer = () => {
    const videos = document.querySelectorAll('video');
    if (!videos.length) return;
    videos.forEach((video) => {
      const container = video.closest('.ald-highlight-media, .spotlight-media, .project-card-media, .ald-hero-media, .case-study-hero, .about-media');
      if (!container) return;
      container.classList.add('media-shimmer');
      container.classList.add('media-loading');
      const stopLoading = () => container.classList.remove('media-loading');
      if (video.readyState >= 2) {
        stopLoading();
      } else {
        video.addEventListener('loadeddata', stopLoading, { once: true });
        video.addEventListener('canplay', stopLoading, { once: true });
      }
    });
  };


  const setupHeroParallax = () => {
    if (prefersReducedMotion) return;
    const targets = document.querySelectorAll(
      '.about-hero-card .card-media img, .ald-hero-media video, .ald-hero-media img'
    );
    if (!targets.length) return;
    targets.forEach((target) => target.classList.add('hero-parallax'));
    let ticking = false;
    const updateParallax = () => {
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const offset = (rect.top - window.innerHeight / 2) * -0.02;
        const clamped = Math.max(Math.min(offset, 12), -12);
        target.style.transform = `translateY(${clamped}px)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  };


  const setupBackToTop = () => {
    if (document.querySelector('.back-to-top')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.textContent = 'Back to top';
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
    document.body.appendChild(button);

    const toggleButton = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      button.classList.toggle('is-visible', progress > 0.6);
    };
    toggleButton();
    window.addEventListener('scroll', toggleButton, { passive: true });
  };


  setupLazyVideos();
  setupProjectNavKeys();
  setupMediaShimmer();
  setupHeroParallax();
  setupBackToTop();
  const setupMoodboardLightbox = () => {
    const items = document.querySelectorAll('.ald-moodboard-item');
    const lightbox = document.querySelector('.ald-lightbox');
    if (!items.length || !lightbox) return;

    if (lightbox.parentElement !== document.body) {
      document.body.appendChild(lightbox);
    }

    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.ald-lightbox-close');

    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || 'Moodboard image';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };

    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const img = item.querySelector('img');
        const src = item.dataset.full || (img ? img.src : '');
        if (!src) return;
        openLightbox(src, img ? img.alt : '');
      });
    });

    lightbox.addEventListener('click', () => {
      closeLightbox();
    });

    // Click anywhere on the overlay (including the image area) to close.

    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeLightbox();
      });
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  };

  setupMoodboardLightbox();

  const toolchainSection = document.querySelector('.toolchain');
  if (toolchainSection) {
    const chips = toolchainSection.querySelectorAll('.toolchip');
    chips.forEach((chip, index) => {
      chip.style.transitionDelay = `${index * 120}ms`;
    });
    const triggerToolchain = () => {
      toolchainSection.classList.add('reveal');
    };
      if (prefersReducedMotion) {
        triggerToolchain();
      } else {
        setTimeout(triggerToolchain, 1200);
      }
    }

  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('toggle'));
    });
  }

  const caseStudies = document.querySelectorAll('.case-study, .ald-case');
  if (caseStudies.length) {
    caseStudies.forEach((caseStudy) => {
      const revealItems = caseStudy.querySelectorAll('[data-reveal]');
      revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 80}ms`;
      });
      const queueReveal = (el, delay = 0) => {
        if (el.dataset.revealDone) {
          return;
        }
        el.dataset.revealDone = 'true';
        if (prefersReducedMotion) {
          el.classList.add('reveal');
          return;
        }
        const baseDelay = 60;
        requestAnimationFrame(() => {
          setTimeout(() => el.classList.add('reveal'), baseDelay + delay);
        });
      };
      const isInView = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.9;
      };
      if (prefersReducedMotion) {
        revealItems.forEach((item) => queueReveal(item, 0));
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              queueReveal(entry.target, 0);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
        revealItems.forEach((item, index) => {
          if (isInView(item)) {
            queueReveal(item, index * 40);
          } else {
            observer.observe(item);
          }
        });
      }
    });
  }

  // Fade-in for featured projects sections
  const featuredSections = document.querySelectorAll('.featured-projects');
  if (featuredSections.length) {
    const featuredObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate3d(0, 0, 0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    featuredSections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translate3d(0, 16px, 0)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      section.style.willChange = 'opacity, transform';
      featuredObserver.observe(section);
    });
  }

  // Fade-in for any portfolio pieces
  const portfolioSections = document.querySelectorAll('.portfolio-piece');
  if (portfolioSections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    portfolioSections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translate3d(0, 12px, 0)';
      section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      section.style.willChange = 'opacity, transform';
      observer.observe(section);
    });
  }

  // Header Shrink
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.fixed-header');
    if (header) {
      header.classList.toggle('shrink', window.scrollY > 50);
    }
  });

  // Floor Switcher
  const floorSwitcher = document.getElementById('floor-switcher');
  if (floorSwitcher) {
    const floorImage = floorSwitcher.querySelector('.floor-image');
    const arrowLeft  = floorSwitcher.querySelector('.arrow-left');
    const arrowRight = floorSwitcher.querySelector('.arrow-right');
    const floorIndicator = floorSwitcher.querySelector('.floor-indicator');
    const floors = [
      {
        src: '{{ "/assets/media/ui/top-floor.png" | relative_url }}',
        alt: 'Top Floor Overview',
        label: 'Top Floor'
      },
      {
        src: '{{ "/assets/media/ui/lower-floor.png" | relative_url }}',
        alt: 'Lower Floor Overview',
        label: 'Lower Floor'
      }
    ];
    let currentIndex = 0;
    function updateFloor() {
      floorImage.src = floors[currentIndex].src;
      floorImage.alt = floors[currentIndex].alt;
      floorIndicator.textContent = floors[currentIndex].label;
    }
    updateFloor();
    arrowLeft.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? floors.length - 1 : currentIndex - 1;
      updateFloor();
    });
    arrowRight.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % floors.length;
      updateFloor();
    });
  }

  // Blockout Carousel - handle all (desktop only)
  const carouselContainers = document.querySelectorAll('.blockout-carousel .carousel-container');
  if (!window.matchMedia('(max-width: 768px)').matches) {
    carouselContainers.forEach((container) => {
      const images = container.querySelectorAll('img');
      let currentCarouselIndex = 0;
      const totalImages = images.length;
      if (!totalImages) {
        return;
      }
    const parent = container.parentElement;
    const updateCarousel = () => {
      const slideWidth = parent.clientWidth;
      images.forEach((img) => {
        img.style.width = `${slideWidth}px`;
      });
      container.style.width = `${totalImages * slideWidth}px`;
      container.style.transform = `translateX(-${currentCarouselIndex * slideWidth}px)`;
    };
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    const prevButton = parent.querySelector('.carousel-prev');
    const nextButton = parent.querySelector('.carousel-next');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex === 0) ? totalImages - 1 : currentCarouselIndex - 1;
        updateCarousel();
      });
    }
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentCarouselIndex = (currentCarouselIndex + 1) % totalImages;
        updateCarousel();
      });
    }
      setInterval(() => {
        currentCarouselIndex = (currentCarouselIndex + 1) % totalImages;
        updateCarousel();
      }, 5000);
    });
  }
});
