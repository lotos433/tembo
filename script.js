// ===== Accordion for Services Page =====
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    
    // Close all items
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    });
    
    // Toggle current item
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

// Handle URL hash for services page
if (window.location.hash) {
  const targetId = window.location.hash.substring(1);
  const targetItem = document.getElementById(targetId);
  if (targetItem) {
    setTimeout(() => {
      targetItem.classList.add('open');
      const trigger = targetItem.querySelector('.accordion-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formStatus = document.getElementById('formStatus');
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    
    // Validation
    if (!name) {
      formStatus.textContent = 'Ad və soyad daxil edin.';
      formStatus.className = 'form-status error';
      return;
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = 'Düzgün email ünvanı daxil edin.';
      formStatus.className = 'form-status error';
      return;
    }
    
    if (!message) {
      formStatus.textContent = 'Mesajınızı yazın.';
      formStatus.className = 'form-status error';
      return;
    }
    
    // Simulate form submission
    formStatus.textContent = 'Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlanılacaq.';
    formStatus.className = 'form-status success';
    
    // Reset form
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  });
}

// ===== Burger Menu =====
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ===== Toast notifications =====
function showToast(message, duration = 3000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ===== Intersection Observer for animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .value-card, .team-card, .testimonial-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===== Header scroll effect =====
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ===== Counter animation for stats =====
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function update() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }
  
  update();
}

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statElements = entry.target.querySelectorAll('.stat-item strong, .hero-stats strong');
      statElements.forEach(el => {
        const text = el.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (number && !isNaN(number)) {
          el.setAttribute('data-target', number);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, .story-stats').forEach(el => {
  statsObserver.observe(el);
});

// ===== Form input validation styling =====
document.querySelectorAll('input, textarea, select').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focused');
  });
});

// ===== Mobile menu body scroll lock =====
const mobileMenu = document.querySelector('.nav.open');
if (mobileMenu) {
  document.body.style.overflow = 'hidden';
}

// Close mobile menu on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// ===== Lazy loading for images (placeholder) =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== Page load animation =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll('.animate-in').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 50);
    });
  }, 100);
});