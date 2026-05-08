// main.js
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileMenu();
  initHeroAnimations();
  initForms();
});

// Theme Toggle
function initTheme() {
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('drawer-theme-toggle')
  ];
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcons('dark');
  } else {
    updateThemeIcons('light');
  }

  themeToggles.forEach(toggle => {
    if(!toggle) return;
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      if (newTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
      
      updateThemeIcons(newTheme);
    });
  });
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.ph-moon, .ph-sun');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.classList.remove('ph-moon');
      icon.classList.add('ph-sun');
    } else {
      icon.classList.remove('ph-sun');
      icon.classList.add('ph-moon');
    }
  });
}

// RTL Toggle
function initRTL() {
  const rtlToggles = [
    document.getElementById('rtl-toggle'),
    document.getElementById('drawer-rtl-toggle')
  ];
  
  const savedDir = localStorage.getItem('dir');
  if (savedDir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  rtlToggles.forEach(toggle => {
    if(!toggle) return;
    toggle.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('dir', newDir);
    });
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-drawer');
  const drawer = document.getElementById('mobile-drawer');
  
  if (!menuBtn || !drawer) return;

  const overlay = document.createElement('div');
  overlay.className = 'drawer-overlay';
  document.body.appendChild(overlay);

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawerFn() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawerFn);
  overlay.addEventListener('click', closeDrawerFn);
}

// Hero Animations
function initHeroAnimations() {
  const textElements = document.querySelectorAll('.animate-words');
  textElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    const words = text.split(' ');
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + (index < words.length - 1 ? ' ' : '');
      span.className = 'word';
      span.style.animationDelay = `${index * 0.15}s`;
      el.appendChild(span);
    });
  });
}

// Form Validation
function initForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const errorEl = field.nextElementSibling;
        
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          field.classList.remove('success');
          if (errorEl && errorEl.classList.contains('form-error')) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'This field is required';
          }
        } else if (field.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.classList.add('error');
            field.classList.remove('success');
            if (errorEl && errorEl.classList.contains('form-error')) {
              errorEl.style.display = 'block';
              errorEl.textContent = 'Please enter a valid email';
            }
          } else {
            field.classList.remove('error');
            field.classList.add('success');
            if (errorEl && errorEl.classList.contains('form-error')) errorEl.style.display = 'none';
          }
        } else if (field.tagName === 'TEXTAREA' && field.value.length < 20) {
          isValid = false;
          field.classList.add('error');
          field.classList.remove('success');
          if (errorEl && errorEl.classList.contains('form-error')) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'Please enter at least 20 characters';
          }
        } else {
          field.classList.remove('error');
          field.classList.add('success');
          if (errorEl && errorEl.classList.contains('form-error')) errorEl.style.display = 'none';
        }
      });
      
      if (isValid) {
        // Show success inline
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sent Successfully!';
        btn.style.backgroundColor = '#22c55e';
        btn.style.borderColor = '#22c55e';
        btn.style.color = '#fff';
        
        form.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style = '';
          form.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
        }, 3000);
      }
    });
  });
}
