document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  
  if (burger && nav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
    });
    
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }
  
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        accordionItems.forEach(i => i.classList.remove('open'));
        
        if (!isOpen) {
          item.classList.add('open');
          const content = item.querySelector('.accordion-content');
          if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        }
      });
    }
  });
  
  const counters = document.querySelectorAll('.hero-stat strong');
  const observerOptions = {
    threshold: 0.5
  };
  
  const animateCounter = (el) => {
    const text = el.textContent;
    const match = text.match(/(\d+)/);
    
    if (match) {
      const target = parseInt(match[1]);
      const suffix = text.replace(match[1], '');
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current) + suffix;
        }
      }, 30);
    }
  };
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statElements = entry.target.querySelectorAll('.hero-stat strong');
        statElements.forEach(el => animateCounter(el));
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    counterObserver.observe(heroStats);
  }
  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Sorğunuz uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.');
      this.reset();
    });
  }
});