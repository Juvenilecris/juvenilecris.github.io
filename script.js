// Corrected script.js
document.addEventListener('DOMContentLoaded', function() {
    // --- START: CONSOLIDATED STYLE FIX ---
    // Create a single style element to hold all dynamic CSS rules.
    const customStyles = document.createElement('style');
    document.head.appendChild(customStyles);
    // --- END: CONSOLIDATED STYLE FIX ---

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Add a subtle animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to navigation links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section, .hero');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const animatedElements = document.querySelectorAll('.section, .research-card, .news-item, .pub-item, .project-item, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // News item click functionality (placeholder for future blog implementation)
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add your blog/news detail page logic here
            console.log('News item clicked:', this.querySelector('.news-title').textContent);
        });
    });

    // Publication and Project hover effects
    const pubItems = document.querySelectorAll('.pub-item, .project-item');
    pubItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Social media link hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Gallery image modal functionality (optional enhancement)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // Create modal overlay
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.9); display: flex; align-items: center;
                    justify-content: center; z-index: 10000; cursor: pointer;
                `;

                const modalImg = document.createElement('img');
                modalImg.src = img.src;
                modalImg.style.cssText = `
                    max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 8px;
                `;

                modal.appendChild(modalImg);
                document.body.appendChild(modal);

                // Close modal on click
                modal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });

                // Close modal on escape key
                const handleKeyPress = function(e) {
                    if (e.key === 'Escape') {
                        if (document.body.contains(modal)) {
                            document.body.removeChild(modal);
                        }
                        document.removeEventListener('keydown', handleKeyPress);
                    }
                };
                document.addEventListener('keydown', handleKeyPress);
            }
        });
    });

    // Enhanced typing animation for hero title with cursor
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.innerHTML = '<span class="typing-text"></span><span class="typing-cursor">|</span>';
        const typingText = heroTitle.querySelector('.typing-text');
        const typingCursor = heroTitle.querySelector('.typing-cursor');

        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                typingText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    if (typingCursor) typingCursor.style.opacity = '0';
                }, 1000);
            }
        };

        // Start typing animation after a short delay
        setTimeout(typeWriter, 1500);
    }

    // Add cursor blinking animation
    // --- FIX: Appending to the single 'customStyles' element ---
    customStyles.textContent += `
        .typing-cursor {
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;

    // Add loading states for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading indicator (optional)
            const loadingSpan = document.createElement('span');
            loadingSpan.textContent = ' ↗';
            loadingSpan.style.opacity = '0.7';
            this.appendChild(loadingSpan);
        });
    });

    // Enhanced parallax effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        // Hero section parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            // This parallax effect can conflict with smooth scrolling, consider disabling if issues arise.
            // const rate = scrolled * -0.3;
            // hero.style.transform = `translateY(${rate}px)`;
        }

        // Floating shapes parallax
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });

        // Profile image subtle rotation on scroll
        const profileImg = document.querySelector('.profile-frame img');
        if (profileImg && scrolled < window.innerHeight) {
            const rotation = scrolled * 0.1;
            profileImg.style.transform = `rotate(${rotation}deg)`;
        }
    });

    // Add hover effects to research tags
    const researchTags = document.querySelectorAll('.research-tag');
    researchTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add particle effect on mouse move
    let mouseX = 0,
        mouseY = 0;
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create subtle particle effect
        if (Math.random() < 0.1) {
            createParticle(mouseX, mouseY);
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px; height: 4px; background: rgba(255, 255, 255, 0.6);
            border-radius: 50%; pointer-events: none; z-index: 9999;
            left: ${x}px; top: ${y}px;
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
            animation: particleFloat 2s ease-out forwards;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }

    // Add particle animation CSS
    // --- FIX: Appending to the single 'customStyles' element ---
    customStyles.textContent += `
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            }
        }
    `;

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.theme-toggle, .pub-link, .project-link');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.cssText = `
                position: absolute; width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px; background: rgba(255, 255, 255, 0.3);
                border-radius: 50%; transform: scale(0);
                animation: ripple 0.6s linear; pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation and active nav links
    // --- FIX: Appending to the single 'customStyles' element, and removed the duplicate 'style' variable ---
    customStyles.textContent += `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;

    // Performance optimization: Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));

    // Add smooth reveal animation for sections
    const revealElements = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    console.log('Personal homepage initialized successfully! 🚀');
});