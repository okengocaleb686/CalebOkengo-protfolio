// ===== Portfolio Management System =====

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillCards = document.querySelectorAll('.skill-card');
const contactCards = document.querySelectorAll('.contact-card');
const projectCards = document.querySelectorAll('.project-card');

// ===== Portfolio Data =====
const portfolioData = {
  name: 'CALEB OKENGO',
  email: 'okengocaleb411@gmail.com',
  github: 'https://github.com/kengo2',
  linkedin: 'https://linkedin.com/in/caleb-okengo',
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern personal portfolio with responsive design and smooth animations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: '#',
      icon: 'fa-laptop-code'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      icon: 'fa-shopping-cart'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop task management.',
      tags: ['JavaScript', 'Firebase', 'CSS'],
      github: '#',
      live: '#',
      icon: 'fa-tasks'
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'E-learning platform with user authentication and course tracking.',
      tags: ['Python', 'Flask', 'MySQL'],
      github: '#',
      live: '#',
      icon: 'fa-graduation-cap'
    }
  ]
};

// ===== Mobile Menu Toggle =====
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  if (mobileMenu.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Active Navigation Link =====
function setActiveNavLink() {
  const scrollPosition = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Theme Toggle (Light/Dark Mode) =====
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.setAttribute('aria-label', 'Toggle dark mode');
themeToggle.style.cssText = `
  position: fixed;
  top: 90px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--white);
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  z-index: 1000;
  color: var(--text-color);
`;

document.body.appendChild(themeToggle);

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// Add dark mode styles
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
  body.dark-mode {
    --bg-color: #1a1a2e;
    --text-color: #eee;
    --text-light: #aaa;
    --white: #16213e;
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  body.dark-mode .skill-card,
  body.dark-mode .project-card,
  body.dark-mode .contact-card,
  body.dark-mode .timeline-content {
    background: #16213e;
  }
  body.dark-mode .mobile-menu {
    background: #16213e;
  }
`;
document.head.appendChild(darkModeStyles);

// ===== Project Filtering =====
const filterButtons = document.createElement('div');
filterButtons.className = 'project-filters';
filterButtons.innerHTML = `
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="frontend">Frontend</button>
  <button class="filter-btn" data-filter="backend">Backend</button>
  <button class="filter-btn" data-filter="fullstack">Full Stack</button>
`;

const projectsSection = document.querySelector('#projects');
const filtersContainer = document.createElement('div');
filtersContainer.className = 'filters-container';
filtersContainer.appendChild(filterButtons);
projectsSection.insertBefore(filtersContainer, projectsSection.querySelector('.projects-grid'));

const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects(btn.dataset.filter);
  });
});

function filterProjects(category) {
  const allProjects = document.querySelectorAll('.project-card');
  allProjects.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
      card.classList.add('animate-in');
    } else {
      const tags = card.querySelectorAll('.tag');
      const hasCategory = Array.from(tags).some(tag => {
        const tagText = tag.textContent.toLowerCase();
        if (category === 'frontend') return ['html', 'css', 'javascript', 'react'].some(t => tagText.includes(t));
        if (category === 'backend') return ['python', 'node', 'flask', 'api'].some(t => tagText.includes(t));
        if (category === 'fullstack') return ['mongodb', 'mysql', 'firebase'].some(t => tagText.includes(t));
        return true;
      });
      card.style.display = hasCategory ? 'block' : 'none';
    }
  });
}

// Add filter button styles
const filterStyles = document.createElement('style');
filterStyles.textContent = `
  .filters-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  .filter-btn {
    padding: 10px 25px;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .filter-btn:hover,
  .filter-btn.active {
    background: var(--primary-color);
    color: white;
  }
  .theme-toggle:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;
document.head.appendChild(filterStyles);

// ===== Contact Form =====
const contactFormHTML = `
  <div class="contact-form-container">
    <form id="contactForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your Name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required placeholder="What's this about?">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary form-submit">
        <i class="fas fa-paper-plane"></i> Send Message
      </button>
    </form>
    <div id="formResponse" class="form-response"></div>
  </div>
`;

const contactSection = document.querySelector('#contact');
const contactGrid = contactSection.querySelector('.contact-grid');
contactGrid.insertAdjacentHTML('beforebegin', contactFormHTML);

const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

const formStyles = document.createElement('style');
formStyles.textContent = `
  .contact-form-container {
    max-width: 600px;
    margin: 0 auto 40px;
  }
  .contact-form {
    background: var(--white);
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--secondary-color);
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  .form-submit {
    width: 100%;
    justify-content: center;
  }
  .form-response {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    display: none;
  }
  .form-response.success {
    display: block;
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  .form-response.error {
    display: block;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;
document.head.appendChild(formStyles);

// Form validation and submission
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Basic validation
  if (!validateEmail(formData.email)) {
    showFormResponse('Please enter a valid email address', 'error');
    return;
  }

  // Save to localStorage (simulating backend)
  const messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
  messages.push({
    ...formData,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('portfolioMessages', JSON.stringify(messages));

  // Show success message
  showFormResponse('Thank you! Your message has been sent successfully.', 'success');
  contactForm.reset();

  // Log for demo purposes
  console.log('Message saved:', formData);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showFormResponse(message, type) {
  formResponse.textContent = message;
  formResponse.className = `form-response ${type}`;
  setTimeout(() => {
    formResponse.className = 'form-response';
  }, 5000);
}

// ===== Visitor Counter =====
const visitorCounter = document.createElement('div');
visitorCounter.className = 'visitor-counter';
visitorCounter.innerHTML = `
  <i class="fas fa-eye"></i>
  <span id="visitorCount">0</span> views
`;

const footer = document.querySelector('.footer');
footer.appendChild(visitorCounter);

const counterStyles = document.createElement('style');
counterStyles.textContent = `
  .visitor-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  .visitor-counter i {
    color: #ffd32a;
  }
`;
document.head.appendChild(counterStyles);

// Get or create visitor count
let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitorCount').textContent = visitorCount;

// ===== Dynamic Project Rendering =====
function renderProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.innerHTML = '';

  portfolioData.projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <i class="fas ${project.icon}"></i>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" class="project-link"><i class="fab fa-github"></i> Code</a>
          <a href="${project.live}" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);

    // Re-observe for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 150);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(projectCard);
  });
}

// ===== Skill Progress Animation =====
function animateSkillProgress() {
  const skillProgress = document.querySelectorAll('.skill-progress');
  skillProgress.forEach(progress => {
    const width = progress.style.width;
    progress.style.width = '0%';
    setTimeout(() => {
      progress.style.width = width;
    }, 500);
  });
}

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card, .contact-card, .timeline-item, .project-card').forEach(el => {
  animateOnScroll.observe(el);
});

// ===== Add Animation CSS =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  .skill-card,
  .contact-card,
  .project-card,
  .timeline-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .skill-card.animate-in,
  .contact-card.animate-in,
  .project-card.animate-in,
  .timeline-item.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(animationStyles);

// ===== Typing Effect =====
const heroText = document.querySelector('.hero-subtitle');
const words = [
  'Full-Stack Developer',
  'ICT Specialist',
  'UI/UX Enthusiast',
  'Problem Solver'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    heroText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    heroText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #00a8ff);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
`;

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'translateY(0)';
});

// ===== Close Mobile Menu on Resize =====
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('open');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// ===== Preloader =====
function showPreloader() {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.innerHTML = '<div class="loader"></div>';
  preloader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3498db, #00a8ff);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  `;
  
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.style.cssText = `
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  const keyframes = document.createElement('style');
  keyframes.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
  `;
  document.head.appendChild(keyframes);
  
  preloader.appendChild(loader);
  document.body.prepend(preloader);
  
  return preloader;
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  // Show preloader
  const preloader = showPreloader();
  
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1500);
  
  // Initialize features
  setActiveNavLink();
  animateSkillProgress();
  
  // Start typing effect after preloader
  setTimeout(typeEffect, 2500);
  
  console.log('Portfolio initialized for:', portfolioData.name);
  console.log('Messages received:', JSON.parse(localStorage.getItem('portfolioMessages') || '[]').length);
});
