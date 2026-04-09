/* ========================================================================
   ACCS Components — Shared Header, Footer, Tab Bar
   ======================================================================== */

(function() {
  'use strict';

  // ── SVG Icons ─────────────────────────────────────────────────────────
  const icons = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>',
    services: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>',
    team: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>',
    careers: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>',
    contact: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>',
    externalLink: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>',
  };

  // ── Get Current Page ──────────────────────────────────────────────────
  function getCurrentPage() {
    const path = window.location.pathname;
    if (path === '/' || path.endsWith('index.html')) return 'home';
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('employment')) return 'careers';
    if (path.includes('resources')) return 'resources';
    if (path.includes('contact')) return 'contact';
    return 'home';
  }

  // ── Render Header ─────────────────────────────────────────────────────
  function renderHeader() {
    const page = getCurrentPage();
    const header = document.createElement('header');
    header.className = 'site-header';
    header.id = 'site-header';

    header.innerHTML = `
      <div class="header-inner">
        <a href="index.html" class="logo" aria-label="ACCS Home">
          <div class="logo-icon">🏠</div>
          <div>
            <span class="logo-text">ACCS</span>
            <span class="logo-sub">Care Services</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <a href="index.html" ${page === 'home' ? 'class="active"' : ''}>Home</a>
          <a href="about.html" ${page === 'about' ? 'class="active"' : ''}>About</a>
          <a href="services.html" ${page === 'services' ? 'class="active"' : ''}>Services</a>
          <a href="index.html#team" ${page === 'team' ? 'class="active"' : ''}>Our Team</a>
          <a href="employment.html" ${page === 'careers' ? 'class="active"' : ''}>Careers</a>
          <a href="resources.html" ${page === 'resources' ? 'class="active"' : ''}>Resources</a>
          <a href="contact.html" ${page === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>

        <a href="tel:318-640-7422" class="header-phone" aria-label="Call us">
          ${icons.phone}
          <span>318-640-7422</span>
        </a>
      </div>
    `;

    document.body.prepend(header);
  }

  // ── Render Tab Bar ────────────────────────────────────────────────────
  function renderTabBar() {
    const page = getCurrentPage();
    const tabBar = document.createElement('nav');
    tabBar.className = 'tab-bar';
    tabBar.id = 'tab-bar';
    tabBar.setAttribute('aria-label', 'Mobile Navigation');

    const tabs = [
      { id: 'home', label: 'Home', icon: icons.home, href: 'index.html' },
      { id: 'services', label: 'Services', icon: icons.services, href: 'services.html' },
      { id: 'team', label: 'Team', icon: icons.team, href: 'index.html#team' },
      { id: 'careers', label: 'Careers', icon: icons.careers, href: 'employment.html' },
      { id: 'contact', label: 'Contact', icon: icons.contact, href: 'contact.html' },
    ];

    tabBar.innerHTML = tabs.map(tab => `
      <a href="${tab.href}" class="tab-bar-item ${page === tab.id ? 'active' : ''}" aria-label="${tab.label}">
        ${tab.icon}
        <span>${tab.label}</span>
      </a>
    `).join('');

    document.body.appendChild(tabBar);
  }

  // ── Render Floating Call Button ───────────────────────────────────────
  function renderFAB() {
    const fab = document.createElement('a');
    fab.href = 'tel:318-640-7422';
    fab.className = 'fab-call';
    fab.id = 'fab-call';
    fab.setAttribute('aria-label', 'Call ACCS');
    fab.innerHTML = icons.phone;
    document.body.appendChild(fab);
  }

  // ── Render Footer ────────────────────────────────────────────────────
  function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.id = 'site-footer';

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo">
              <div class="logo-icon">🏠</div>
              <div>
                <span class="logo-text" style="color: var(--white);">ACCS</span>
                <span class="logo-sub">Care Services</span>
              </div>
            </a>
            <p>Alternative Concept Care Services provides exceptional in-home care across Louisiana. We keep your light burning bright.</p>
          </div>

          <div class="footer-nav">
            <h3 class="footer-heading">Quick Links</h3>
            <div class="footer-links">
              <a href="index.html">Home</a>
              <a href="about.html">About Us</a>
              <a href="services.html">Our Services</a>
              <a href="employment.html">Careers</a>
              <a href="resources.html">Resources</a>
              <a href="contact.html">Contact</a>
              <a href="https://accs7nac.flywheelsites.com/" target="_blank" rel="noopener">Natchitoches Office ↗</a>
            </div>
          </div>

          <div class="footer-services">
            <h3 class="footer-heading">Services</h3>
            <div class="footer-links">
              <a href="services.html">24 Hour Care</a>
              <a href="services.html">Alzheimer's Care</a>
              <a href="services.html">Companionship</a>
              <a href="services.html">Meal Prep</a>
              <a href="services.html">Housekeeping</a>
              <a href="services.html">Personal Care</a>
              <a href="services.html">Transportation</a>
            </div>
          </div>

          <div class="footer-contact">
            <h3 class="footer-heading">Our Offices</h3>
            <div class="footer-office">
              <h4>Ball Office</h4>
              <div class="office-detail">
                ${icons.location}
                <span>4811 Monroe Hwy, Ball, LA 71405</span>
              </div>
              <div class="office-detail">
                ${icons.phone}
                <a href="tel:318-640-7422">318-640-7422</a>
              </div>
              <div class="office-detail">
                ${icons.mail}
                <a href="mailto:alternative@accs6.com">alternative@accs6.com</a>
              </div>
            </div>
            <div class="footer-office">
              <h4>Leesville Office</h4>
              <div class="office-detail">
                ${icons.location}
                <span>1206 South 5th St, Leesville, LA 71446</span>
              </div>
              <div class="office-detail">
                ${icons.phone}
                <a href="tel:337-404-9292">337-404-9292</a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Alternative Concept Care Services. All rights reserved.</p>
          <div class="footer-waiver-badges">
            <span>NOW</span>
            <span>ROW</span>
            <span>SIL</span>
            <span>CCW</span>
            <span>LTPCS</span>
            <span>EPSDT</span>
            <span>Children's Choice</span>
            <span>Private Pay</span>
            <span>VA Community Care</span>
          </div>
        </div>
      </div>
    `;

    // Insert before tab bar if present
    const tabBar = document.getElementById('tab-bar');
    if (tabBar) {
      document.body.insertBefore(footer, tabBar);
    } else {
      document.body.appendChild(footer);
    }
  }

  // ── Header Scroll Behavior ───────────────────────────────────────────
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 60) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Initialize ────────────────────────────────────────────────────────
  function init() {
    renderHeader();
    renderTabBar();
    renderFAB();
    renderFooter();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export icons for other scripts
  window.ACCSIcons = icons;
})();
