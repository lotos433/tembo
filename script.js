/* =========================================================
   VOYAGE — interactions
   - Dark/light theme toggle with persistence
   - Reveal-on-scroll animations
   - Tilt/parallax on the 3D hero scene
   - Search tabs, swap inputs
   - Affiliate/referral links (configurable)
   - Mobile menu
   ========================================================= */

(() => {
  // ---------- AFFILIATE / REFERRAL LINKS ----------
  // Drop in your real partner markers/aids here. The site uses Aviasales
  // for flights and Booking.com for hotels by default, both with a "marker".
  const REF = {
    flightSearch: 'https://www.aviasales.ru/?marker=demo',
    hotelSearch: 'https://search.hotellook.com/?marker=demo',
    flight: 'https://www.aviasales.ru/?marker=demo',
    hotel: 'https://www.booking.com/index.html?aid=demo',
  };

  // ---------- THEME ----------
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'voyage-theme';

  const getPreferredTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  applyTheme(getPreferredTheme());

  themeBtn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    // small bounce feedback
    themeBtn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(.85)' }, { transform: 'scale(1)' }],
      { duration: 300, easing: 'cubic-bezier(.22,.61,.36,1)' }
    );
  });

  // ---------- MOBILE MENU ----------
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  burger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // ---------- REVEAL ON SCROLL ----------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 40, 240)}ms`;
    observer.observe(el);
  });

  // ---------- 3D HERO PARALLAX ----------
  const scene = document.querySelector('.scene');
  const hero3d = document.querySelector('.hero-3d');
  if (scene && hero3d && !matchMedia('(max-width: 720px)').matches) {
    let raf = null;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    hero3d.addEventListener('mousemove', (e) => {
      const rect = hero3d.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 18;
      targetY = -y * 18;
      if (!raf) loop();
    });
    hero3d.addEventListener('mouseleave', () => {
      targetX = 0; targetY = 0;
      if (!raf) loop();
    });

    function loop() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      scene.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  }

  // ---------- FLOATING CARDS DEPTH ----------
  document.querySelectorAll('.floating-card').forEach((card, idx) => {
    card.style.transform += ` translateZ(${30 + idx * 12}px)`;
  });

  // ---------- SEARCH TABS ----------
  const tabs = document.querySelectorAll('.search-tabs .tab');
  tabs.forEach((tab) =>
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    })
  );

  // ---------- SWAP FROM/TO ----------
  const swapBtn = document.querySelector('.swap-btn');
  swapBtn?.addEventListener('click', () => {
    const fromInput = document.querySelector('.field-from input');
    const toInput = document.querySelector('.field-to input');
    if (fromInput && toInput) {
      const tmp = fromInput.value;
      fromInput.value = toInput.value;
      toInput.value = tmp;
    }
  });

  // ---------- AFFILIATE LINK INJECTION ----------
  // Search form button -> flight referral
  const searchBtn = document.querySelector('.btn-search');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      // open referral in new tab
      e.preventDefault();
      const activeTab = document.querySelector('.search-tabs .tab.active')?.dataset.tab;
      const url = activeTab === 'hotel' ? REF.hotelSearch : REF.flightSearch;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Flight cards
  document.querySelectorAll('.flight-card').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.link || REF.flight;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // Hotel cards
  document.querySelectorAll('.hotel-card').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.link || REF.hotel;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // ---------- SMOOTH SCROLL OFFSET FIX ----------
  // (Already handled via CSS scroll-behavior + sticky nav. No-op.)

  // ---------- BG ORB SUBTLE PARALLAX ----------
  const orbs = document.querySelectorAll('.orb');
  if (orbs.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let scrollY = window.scrollY;
    const update = () => {
      scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.06;
        orb.style.translate = `0 ${scrollY * speed}px`;
      });
    };
    window.addEventListener('scroll', update, { passive: true });
  }

  // ---------- TILT ON FEATURE / FLIGHT CARDS ----------
  const tiltCards = document.querySelectorAll('.feature-card, .flight-card');
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---------- DATE FIELDS DEFAULT ----------
  const dateFields = document.querySelectorAll('input[type="date"]');
  if (dateFields.length >= 2) {
    const today = new Date();
    const inWeek = new Date(today.getTime() + 14 * 86400000);
    const inTwoWeeks = new Date(today.getTime() + 21 * 86400000);
    const fmt = (d) => d.toISOString().slice(0, 10);
    if (!dateFields[0].value) dateFields[0].value = fmt(inWeek);
    if (!dateFields[1].value) dateFields[1].value = fmt(inTwoWeeks);
  }
})();
