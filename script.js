document.addEventListener('DOMContentLoaded', () => {
  // 1. INTERNATIONALIZATION (i18n) SYSTEM
  const translations = {
    en: {
      // Navigation
      'nav-about': 'About Us',
      'nav-team': 'Our Team',
      'nav-practice': 'Practice Areas',
      'nav-testimonials': 'Testimonials',
      'nav-faq': 'FAQ',
      'nav-contact': 'Contact',
      
      // Hero
      'hero-firm-type': 'Law Firm',
      'hero-slogan': 'Tradition, experience, and commitment at the service of your rights',
      'hero-cta': 'Contact Us',
      
      // About
      'about-title': 'About Our Firm',
      'about-subtitle': 'More than four decades of experience in law',
      'about-text': 'S&G Schnaider Garegnani is a law firm that combines the tradition and vast experience of its founding partners — with more than 40 years of practice — with the modern and dynamic vision of a new generation of legal professionals. We specialize in succession law, health law, and labor law, offering comprehensive and personalized advice to each of our clients.',
      'value-1-title': 'Professional Excellence',
      'value-1-text': 'Commitment to the highest standards of legal practice, with ongoing training and deep knowledge in each area of specialization.',
      'value-2-title': 'Commitment',
      'value-2-text': 'Dedicated and personalized attention to each case, understanding that behind every consultation there is a person who needs answers.',
      'value-3-title': 'Confidentiality',
      'value-3-text': 'Absolute discretion in handling all matters entrusted to us, guaranteeing the privacy of our clients.',
      'value-4-title': 'Results',
      'value-4-text': 'Results-oriented strategy, seeking the most favorable outcome through meticulous planning and expert execution.',
      
      // Team
      'team-title': 'Our Team',
      'team-subtitle': 'Professionals committed to your rights',
      'team-card1-specialty': 'Succession Law',
      'team-card1-desc': 'Over 40 years of experience in successions, estate divisions, and succession planning. His vast experience guarantees comprehensive advice in the protection of family assets.',
      'team-card2-specialty': 'Health Law',
      'team-card2-desc': 'Former director of one of the largest social security organizations in the country. Over 40 years contributing strategic vision and full knowledge in the sector, specialized in amparo appeals against coverage denials.',
      'team-card3-specialty': 'Labor Law',
      'team-card3-desc': 'Young professional with over 10 years of experience, focused on the current dynamics of labor law. She advises both employers and employees in the defense of their rights.',
      
      // Practice Areas
      'practice-title': 'Practice Areas',
      'practice-subtitle': 'Specialized legal solutions',
      'practice-1-title': 'Succession Law',
      'practice-1-item-1': 'Testate and intestate successions',
      'practice-1-item-2': 'Estate divisions',
      'practice-1-item-3': 'Succession planning',
      'practice-1-item-4': 'Family asset protection',
      'practice-1-item-5': 'Wills and bequests',
      'practice-1-item-6': 'Divorces',
      'practice-2-title': 'Health Law',
      'practice-2-item-1': 'Amparo appeals for coverage denial',
      'practice-2-item-2': 'Advisory for social security and prepaid health',
      'practice-2-item-3': 'Medical benefits claims',
      'practice-2-item-4': 'Pharmaceutical law',
      'practice-2-item-5': 'Health litigation',
      'practice-3-title': 'Labor Law',
      'practice-3-item-1': 'Employee defense',
      'practice-3-item-2': 'Employer advisory',
      'practice-3-item-3': 'Dismissals and settlements',
      'practice-3-item-4': 'Workplace accidents',
      'practice-3-item-5': 'Collective bargaining',
      
      // Testimonials
      'testimonials-title': 'What Our Clients Say',
      'testimonials-subtitle': 'Testimonials from those who trusted us',
      'testimonial-1-text': 'Dr. Schnaider guided us with professionalism and sensitivity during a complex succession process. His experience was fundamental in reaching a fair agreement among all parties.',
      'testimonial-1-author': 'María L., Client',
      'testimonial-2-text': 'Thanks to Dr. Garegnani, we were able to obtain the medical coverage that was being denied to us. Her knowledge of the healthcare system and her determination were key to winning the appeal.',
      'testimonial-2-author': 'Carlos R., Client',
      'testimonial-3-text': 'Dr. Carolina Schnaider represented me in a labor dispute with total dedication. She achieved the best possible outcome and always kept me informed at every stage of the process.',
      'testimonial-3-author': 'Javier M., Client',
      
      // FAQ
      'faq-title': 'Frequently Asked Questions',
      'faq-subtitle': 'Answers to the most common queries',
      'faq-q1': 'How can I schedule an initial consultation?',
      'faq-a1': 'You can contact us through the form on this page, by email at estudiosgyasoc@gmail.com, or visit us at our offices at Sarmiento 1586, CABA. We will respond within 24 business hours to coordinate a meeting.',
      'faq-q2': 'What are the firm\'s fees?',
      'faq-a2': 'Our fees vary according to the type and complexity of each case. During the initial consultation, we will provide you with a detailed and transparent fee proposal. We work with fixed fees, hourly rates, and success-based arrangements depending on the situation.',
      'faq-q3': 'What documentation do I need to start a succession process?',
      'faq-a3': 'Generally, you will need: the death certificate, family booklet, property titles, bank certificates, and any existing will. During the initial consultation, we will detail the specific documents required for your case.',
      'faq-q4': 'What is an amparo appeal and when should it be filed?',
      'faq-a4': 'An amparo is a swift legal remedy to protect fundamental rights. In health law, it is used when a social security organization or prepaid health company denies medical coverage that corresponds by law. Dr. Garegnani specializes in these procedures.',
      'faq-q5': 'Do you represent both employers and employees?',
      'faq-a5': 'Yes, Dr. Carolina Schnaider advises and represents both parties, always maintaining the highest ethical standards and avoiding any conflict of interest between cases.',
      'faq-q6': 'Do you offer virtual consultations?',
      'faq-a6': 'Yes, we offer virtual consultations via video call for clients who cannot come to our offices. You can request a virtual consultation through the contact form.',
      
      // Contact
      'contact-title': 'Contact Us',
      'contact-subtitle': 'We are here to help you',
      'form-name': 'Full Name',
      'form-email': 'Email Address',
      'form-phone': 'Phone',
      'form-area': 'Area of Consultation',
      'form-area-placeholder': 'Select an area',
      'form-area-1': 'Succession Law',
      'form-area-2': 'Health Law',
      'form-area-3': 'Labor Law',
      'form-message': 'Message',
      'form-submit': 'Send Inquiry',
      'contact-info-title': 'Contact Information',
      'contact-email-label': 'Email',
      'contact-address-label': 'Address',
      'contact-hours-label': 'Office Hours',
      'contact-hours-value': 'Monday to Friday, 9:00 AM to 6:00 PM',
      'contact-map-title': 'Our Location',
      
      // Footer
      'footer-copyright': '© 2026 S&G Schnaider Garegnani – Law Firm. All rights reserved.',
      'footer-links-title': 'Quick Links',
      'footer-contact-title': 'Contact',
      
      // Form validation messages
      'form-success': 'Thank you for your inquiry. We will contact you shortly.',
      'form-error-required': 'This field is required',
      'form-error-email': 'Please enter a valid email address',
  
      // Logo
      'logo-sub': 'Schnaider Garegnani',
    }
  };

  const spanishTexts = {};
  const i18nElements = document.querySelectorAll('[data-i18n]');
  
  // Store original texts
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      spanishTexts[key] = el.textContent || el.value || el.placeholder;
    }
  });

  let currentLang = localStorage.getItem('language') || 'es';
  const langSwitchBtn = document.getElementById('langSwitch');

  const updateLanguage = (lang) => {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
    if (langSwitchBtn) {
      if (lang === 'en') {
        langSwitchBtn.innerHTML = 'ES / <strong>EN</strong>';
      } else {
        langSwitchBtn.innerHTML = '<strong>ES</strong> / EN';
      }
    }

    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        let text = lang === 'en' ? translations.en[key] : spanishTexts[key];
        if (text) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
             if(el.type === 'submit' || el.type === 'button') {
                 el.value = text;
             } else {
                 el.placeholder = text;
             }
          } else if (el.tagName === 'OPTION') {
             el.textContent = text;
          } else {
             el.textContent = text;
          }
        }
      }
    });
  };

  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', () => {
      updateLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Init lang
  updateLanguage(currentLang);


  // 2. SMOOTH SCROLL NAVIGATION & 5. MOBILE MENU TOGGLE
  const headerOffset = 80;
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mainNav.contains(e.target) && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          if (mobileToggle) mobileToggle.classList.remove('active');
        }
      }
    });
  });


  // 3. ACTIVE NAV LINK ON SCROLL & 4. HEADER SCROLL EFFECT
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#mainNav a');

  window.addEventListener('scroll', () => {
    // Header effect
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - headerOffset - 50)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current) && current !== '') {
        link.classList.add('active');
      }
    });
  });

  // 6. SCROLL ANIMATIONS
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => scrollObserver.observe(el));


  // 7. TESTIMONIALS SLIDER
  const track = document.querySelector('.testimonials__track');
  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.testimonials__arrow--next');
    const prevButton = document.querySelector('.testimonials__arrow--prev');
    const dotsNav = document.querySelector('.testimonials__dots');
    
    if (slides.length > 0) {
      let currentIndex = 0;
      let intervalId;

      // Create dots
      if (dotsNav) {
          slides.forEach((_, idx) => {
             const dot = document.createElement('button');
             dot.classList.add('testimonials__dot');
             if(idx === 0) dot.classList.add('active');
             dotsNav.appendChild(dot);
          });
      }
      
      const dots = Array.from(document.querySelectorAll('.testimonials__dot'));

      const updateSlider = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
        currentIndex = index;
      };

      const moveToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateSlider(nextIndex);
      };

      const moveToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(prevIndex);
      };

      if (nextButton) nextButton.addEventListener('click', moveToNextSlide);
      if (prevButton) prevButton.addEventListener('click', moveToPrevSlide);

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          updateSlider(index);
        });
      });

      const startAutoRotate = () => {
        intervalId = setInterval(moveToNextSlide, 5000);
      };

      const stopAutoRotate = () => {
        clearInterval(intervalId);
      };

      track.parentElement.addEventListener('mouseenter', stopAutoRotate);
      track.parentElement.addEventListener('mouseleave', startAutoRotate);
      
      startAutoRotate();
    }
  }


  // 8. FAQ ACCORDION
  const faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq__item').forEach(faqItem => {
        faqItem.classList.remove('active');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


// 9. CONTACT FORM VALIDATION & FORMSPREE SUBMIT
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      let isValid = true;
      const name = contactForm.querySelector('input[name="name"]');
      const email = contactForm.querySelector('input[name="email"]');
      const area = contactForm.querySelector('select[name="area"]');
      const message = contactForm.querySelector('textarea[name="message"]');
      
      const showError = (input, msgKey) => {
        const oldErr = input.parentElement.querySelector('.form-error');
        if (oldErr) oldErr.remove();
        
        input.classList.add('error');
        const errSpan = document.createElement('span');
        errSpan.classList.add('form-error');
        errSpan.style.color = 'red';
        errSpan.style.fontSize = '0.85rem';
        errSpan.style.marginTop = '0.25rem';
        errSpan.style.display = 'block';
        
        const errText = currentLang === 'en' ? translations.en[msgKey] : (msgKey === 'form-error-required' ? 'Este campo es requerido' : 'Por favor ingrese un email válido');
        errSpan.textContent = errText;
        input.parentElement.appendChild(errSpan);
      };

      const clearError = (input) => {
        input.classList.remove('error');
        const err = input.parentElement.querySelector('.form-error');
        if (err) err.remove();
      };

      // Validate Name
      if (name && !name.value.trim()) {
        showError(name, 'form-error-required');
        isValid = false;
      } else if (name) {
        clearError(name);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !email.value.trim()) {
        showError(email, 'form-error-required');
        isValid = false;
      } else if (email && !emailRegex.test(email.value.trim())) {
        showError(email, 'form-error-email');
        isValid = false;
      } else if (email) {
        clearError(email);
      }

      // Validate Area
      if (area && !area.value) {
        showError(area, 'form-error-required');
        isValid = false;
      } else if (area) {
        clearError(area);
      }

      // Validate Message
      if (message && !message.value.trim()) {
        showError(message, 'form-error-required');
        isValid = false;
      } else if (message) {
        clearError(message);
      }

      // Si algún campo no es válido, cancela el envío
      if (!isValid) {
        e.preventDefault();
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const err = input.parentElement.querySelector('.form-error');
        if (err) err.remove();
      });
    });
  }
});
