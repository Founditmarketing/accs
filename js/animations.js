/* ========================================================================
   ACCS Animations — Micro-Interactions & Motion Engine
   ======================================================================== */

(function() {
  'use strict';

  // ── Scroll Reveal with enhanced easing ─────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
  });

  function initRevealAnimations() {
    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // ── Counter Animation ────────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  function initCounterAnimations() {
    document.querySelectorAll('[data-count]').forEach(el => {
      counterObserver.observe(el);
    });
  }

  // ── Enhanced Parallax ─────────────────────────────────────────────────
  function initParallax() {
    const hero = document.querySelector('.hero-bg img');
    const beacon = document.querySelector('.hero-beacon');
    if (!hero) return;
    if (window.innerWidth < 768) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (scrolled < window.innerHeight * 1.2) {
            hero.style.transform = `translateY(${scrolled * 0.18}px) scale(1.08)`;
            if (beacon) {
              beacon.style.transform = `translateY(${scrolled * -0.08}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Staggered Grid Reveal ────────────────────────────────────────────
  function initStaggerReveal() {
    const grids = document.querySelectorAll('.stagger-grid');
    
    grids.forEach(grid => {
      const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              child.style.animationDelay = `${i * 100}ms`;
              child.classList.add('stagger-in');
            });
            gridObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      gridObserver.observe(grid);
    });
  }

  // ── Magnetic Button Hover ─────────────────────────────────────────────
  function initMagneticButtons() {
    if (window.innerWidth < 1024) return;

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        this.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      });

      btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  // ── Card Tilt Effect ─────────────────────────────────────────────────
  function initCardTilt() {
    if (window.innerWidth < 1024) return;

    document.querySelectorAll('.service-card, .value-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        this.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${y * -4}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  // ── Smooth Nav Underline Indicator ────────────────────────────────────
  function initNavIndicator() {
    const nav = document.querySelector('.desktop-nav');
    if (!nav) return;

    const indicator = document.createElement('span');
    indicator.className = 'nav-indicator';
    nav.appendChild(indicator);

    const links = nav.querySelectorAll('a');
    const activeLink = nav.querySelector('a.active');

    function moveIndicator(el) {
      if (!el) {
        indicator.style.opacity = '0';
        return;
      }
      const rect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      indicator.style.width = rect.width + 'px';
      indicator.style.left = (rect.left - navRect.left) + 'px';
      indicator.style.opacity = '1';
    }

    if (activeLink) {
      requestAnimationFrame(() => moveIndicator(activeLink));
    }

    links.forEach(link => {
      link.addEventListener('mouseenter', () => moveIndicator(link));
    });

    nav.addEventListener('mouseleave', () => {
      moveIndicator(activeLink);
    });
  }

  // ── Smooth Scroll for Anchor Links ───────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Hero Stagger Load ────────────────────────────────────────────────
  function initHeroStagger() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    requestAnimationFrame(() => {
      hero.classList.add('hero-loaded');
    });
  }

  // ── Initialize All ───────────────────────────────────────────────────
  function init() {
    initRevealAnimations();
    initCounterAnimations();
    initParallax();
    initStaggerReveal();
    initMagneticButtons();
    initCardTilt();
    initNavIndicator();
    initSmoothScroll();
    initHeroStagger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.ACCSAnimations = {
    initRevealAnimations,
    initCounterAnimations,
    initStaggerReveal,
    initMagneticButtons,
    initCardTilt
  };
})();
