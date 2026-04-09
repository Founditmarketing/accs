/* ========================================================================
   ACCS App — Core Application Logic
   ======================================================================== */

(function() {
  'use strict';

  // ── Testimonial Carousel ──────────────────────────────────────────────
  function initTestimonialCarousel() {
    const track = document.querySelector('.testimonial-slides');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!track || !dots.length) return;

    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoPlayInterval;

    function goToSlide(index) {
      currentSlide = index;
      if (currentSlide >= totalSlides) currentSlide = 0;
      if (currentSlide < 0) currentSlide = totalSlides - 1;

      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide(i);
        startAutoPlay();
      });
    });

    // Arrow clicks
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide(currentSlide - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        goToSlide(currentSlide + 1);
        startAutoPlay();
      });
    }

    // Touch swipe support
    let startX = 0;
    let isDragging = false;

    track.parentElement.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoPlay();
    }, { passive: true });

    track.parentElement.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
      }
      startAutoPlay();
    }, { passive: true });

    startAutoPlay();
  }

  // ── Accordion ─────────────────────────────────────────────────────────
  function initAccordions() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion-content');
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.accordion-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          openItem.querySelector('.accordion-content').style.maxHeight = '0';
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // ── Employment Form Multi-Step ────────────────────────────────────────
  function initFormSteps() {
    const form = document.getElementById('employment-form');
    if (!form) return;

    const steps = form.querySelectorAll('.form-panel');
    const stepIndicators = document.querySelectorAll('.form-step');
    const prevBtns = form.querySelectorAll('.step-prev');
    const nextBtns = form.querySelectorAll('.step-next');
    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => {
        step.style.display = i === index ? 'block' : 'none';
      });

      stepIndicators.forEach((ind, i) => {
        ind.classList.remove('active', 'completed');
        if (i < index) ind.classList.add('completed');
        if (i === index) ind.classList.add('active');
      });

      currentStep = index;
      
      // Scroll to top of form
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
          showStep(currentStep + 1);
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep > 0) {
          showStep(currentStep - 1);
        }
      });
    });

    showStep(0);
  }

  // ── Contact Form ──────────────────────────────────────────────────────
  function initContactForm() {
    const forms = document.querySelectorAll('.contact-form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Visual feedback
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate submission (replace with real endpoint)
        setTimeout(() => {
          submitBtn.textContent = '✓ Message Sent!';
          submitBtn.style.background = 'var(--success)';
          form.reset();
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 3000);
        }, 1000);
      });
    });
  }

  // ── Page transition effect ────────────────────────────────────────────
  function initPageTransitions() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  }

  // ── PWA Meta Setup ────────────────────────────────────────────────────
  function initPWA() {
    // Theme color for mobile browsers
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#0f172a';
      document.head.appendChild(meta);
    }
  }

  // ── Initialize ────────────────────────────────────────────────────────
  function init() {
    initPageTransitions();
    initTestimonialCarousel();
    initAccordions();
    initFormSteps();
    initContactForm();
    initPWA();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
