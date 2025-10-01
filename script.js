// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update toggle button icon
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.navToggle.addEventListener('click', () => this.toggleNav());
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.navMenu.classList.remove('active');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.navMenu.classList.remove('active');
            }
        });
    }

    toggleNav() {
        this.navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = this.navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (this.navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    }
}

// Smooth Scrolling
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Scroll Animations
class ScrollAnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll(`
            .hero-content,
            .about-content,
            .research-item,
            .publication-item,
            .project-item,
            .news-item,
            .gallery-item,
            .social-link
        `);

        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }
}

// Publication Manager
class PublicationManager {
    constructor() {
        this.publications = [
            {
                title: "Advanced Vision-Language Models for Multimodal Understanding",
                authors: "Ningning Wang, Co-author Name, Another Author",
                venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
                year: "2024",
                abstract: "This paper presents novel approaches to vision-language model integration, focusing on improved multimodal understanding capabilities. Our method demonstrates significant improvements in cross-modal retrieval and visual question answering tasks.",
                links: {
                    arxiv: "#",
                    code: "#",
                    pdf: "#",
                    bibtex: "#"
                }
            },
            {
                title: "Reinforcement Learning for Autonomous Decision Making",
                authors: "Ningning Wang, Research Partner, Collaborator Name",
                venue: "International Conference on Machine Learning (ICML)",
                year: "2024",
                abstract: "We propose a new reinforcement learning framework that enhances autonomous decision-making capabilities in complex environments. The approach shows promising results in robotic navigation and game playing scenarios.",
                links: {
                    arxiv: "#",
                    code: "#",
                    pdf: "#",
                    bibtex: "#"
                }
            }
        ];
        this.init();
    }

    init() {
        this.renderPublications();
    }

    renderPublications() {
        const container = document.querySelector('.publications-grid');
        if (!container) return;

        container.innerHTML = this.publications.map(pub => `
            <div class="publication-item fade-in">
                <div class="publication-header">
                    <h3>${pub.title}</h3>
                    <div class="publication-venue">
                        <span class="venue-name">${pub.venue}</span>
                        <span class="venue-year">${pub.year}</span>
                    </div>
                </div>
                <div class="publication-authors">
                    ${pub.authors}
                </div>
                <div class="publication-abstract">
                    <p>${pub.abstract}</p>
                </div>
                <div class="publication-links">
                    ${pub.links.arxiv ? `<a href="${pub.links.arxiv}" class="pub-link">
                        <img src="icon/Arxiv.svg" alt="ArXiv">
                        <span>ArXiv</span>
                    </a>` : ''}
                    ${pub.links.code ? `<a href="${pub.links.code}" class="pub-link">
                        <i class="fas fa-code"></i>
                        <span>Code</span>
                    </a>` : ''}
                    ${pub.links.pdf ? `<a href="${pub.links.pdf}" class="pub-link">
                        <i class="fas fa-file-pdf"></i>
                        <span>PDF</span>
                    </a>` : ''}
                    ${pub.links.bibtex ? `<a href="${pub.links.bibtex}" class="pub-link">
                        <i class="fas fa-quote-right"></i>
                        <span>BibTeX</span>
                    </a>` : ''}
                </div>
            </div>
        `).join('');
    }
}

// Project Manager
class ProjectManager {
    constructor() {
        this.projects = [
            {
                title: "VLM-Based Image Captioning System",
                description: "A comprehensive system that generates natural language descriptions for images using state-of-the-art vision-language models. Features real-time processing and multilingual support.",
                image: "project1.jpg",
                links: {
                    demo: "#",
                    code: "#"
                }
            },
            {
                title: "Reinforcement Learning Environment",
                description: "An open-source reinforcement learning environment for testing and developing RL algorithms. Includes various scenarios from simple navigation to complex multi-agent systems.",
                image: "project2.jpg",
                links: {
                    demo: "#",
                    code: "#"
                }
            },
            {
                title: "Multimodal AI Assistant",
                description: "An intelligent assistant that can understand and respond to both visual and textual inputs. Built using transformer architectures and fine-tuned for specific domains.",
                image: "project3.jpg",
                links: {
                    demo: "#",
                    code: "#"
                }
            }
        ];
        this.init();
    }

    init() {
        this.renderProjects();
    }

    renderProjects() {
        const container = document.querySelector('.projects-grid');
        if (!container) return;

        container.innerHTML = this.projects.map(project => `
            <div class="project-item fade-in">
                <div class="project-image">
                    <div class="project-placeholder">
                        <i class="fas fa-image"></i>
                        <p>${project.title}</p>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        ${project.links.demo ? `<a href="${project.links.demo}" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Demo</span>
                        </a>` : ''}
                        ${project.links.code ? `<a href="${project.links.code}" class="project-link">
                            <i class="fab fa-github"></i>
                            <span>Code</span>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// News Manager
class NewsManager {
    constructor() {
        this.newsItems = [
            {
                date: { day: "15", month: "Dec" },
                title: "Accepted to USTC Graduate Program",
                content: "Excited to announce my acceptance to the University of Science and Technology of China for Master's degree in Information and Communication Engineering!",
                link: "#"
            },
            {
                date: { day: "10", month: "Nov" },
                title: "Paper Accepted at CVPR 2024",
                content: "Our research on vision-language models has been accepted for presentation at the Conference on Computer Vision and Pattern Recognition 2024.",
                link: "#"
            },
            {
                date: { day: "25", month: "Oct" },
                title: "New Research Collaboration",
                content: "Starting a new collaboration with the AI Research Lab at USTC focusing on multimodal learning and reinforcement learning applications.",
                link: "#"
            }
        ];
        this.init();
    }

    init() {
        this.renderNews();
    }

    renderNews() {
        const container = document.querySelector('.news-grid');
        if (!container) return;

        container.innerHTML = this.newsItems.map(news => `
            <div class="news-item fade-in">
                <div class="news-date">
                    <span class="date-day">${news.date.day}</span>
                    <span class="date-month">${news.date.month}</span>
                </div>
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                    <a href="${news.link}" class="news-link">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');
    }
}

// Gallery Manager
class GalleryManager {
    constructor() {
        this.photos = [
            { src: "photos/photo1.jpg", alt: "Life Photo 1" },
            { src: "photos/photo2.jpg", alt: "Life Photo 2" },
            { src: "photos/photo3.jpg", alt: "Life Photo 3" },
            { src: "photos/photo4.jpg", alt: "Life Photo 4" },
            { src: "photos/photo5.jpg", alt: "Life Photo 5" },
            { src: "photos/photo6.jpg", alt: "Life Photo 6" }
        ];
        this.init();
    }

    init() {
        this.renderGallery();
    }

    renderGallery() {
        const container = document.querySelector('.gallery-grid');
        if (!container) return;

        container.innerHTML = this.photos.map((photo, index) => `
            <div class="gallery-item fade-in">
                <div class="gallery-placeholder">
                    <i class="fas fa-camera"></i>
                    <p>Photo ${index + 1}</p>
                </div>
            </div>
        `).join('');
    }
}

// Social Links Manager
class SocialLinksManager {
    constructor() {
        this.socialLinks = [
            { icon: "icon/邮箱.svg", name: "Email", url: "mailto:your.email@example.com" },
            { icon: "icon/github-fill.svg", name: "GitHub", url: "https://github.com/yourusername" },
            { icon: "icon/Google scholar.svg", name: "Google Scholar", url: "https://scholar.google.com/citations?user=yourid" },
            { icon: "icon/dblp_.svg", name: "DBLP", url: "https://dblp.org/pid/yourid" },
            { icon: "icon/openreview.png", name: "OpenReview", url: "https://openreview.net/profile?id=yourid" },
            { icon: "icon/知乎.svg", name: "Zhihu", url: "https://www.zhihu.com/people/yourusername" },
            { icon: "icon/小红书.svg", name: "Xiaohongshu", url: "https://www.xiaohongshu.com/user/profile/yourid" },
            { icon: "icon/QQ.svg", name: "QQ", url: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=yourqqnumber" }
        ];
        this.init();
    }

    init() {
        this.renderSocialLinks();
    }

    renderSocialLinks() {
        const container = document.querySelector('.social-links');
        if (!container) return;

        container.innerHTML = this.socialLinks.map(link => `
            <a href="${link.url}" class="social-link fade-in" target="_blank" rel="noopener noreferrer">
                <img src="${link.icon}" alt="${link.name}">
                <span>${link.name}</span>
            </a>
        `).join('');
    }
}

// Utility Functions
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Navbar scroll effect
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        const handleScroll = Utils.throttle(() => {
            if (window.scrollY > 50) {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                this.navbar.style.backdropFilter = 'blur(20px)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.backdropFilter = 'blur(10px)';
                this.navbar.style.boxShadow = 'none';
            }

            // Dark theme navbar
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                if (window.scrollY > 50) {
                    this.navbar.style.background = 'rgba(26, 26, 46, 0.98)';
                } else {
                    this.navbar.style.background = 'rgba(26, 26, 46, 0.95)';
                }
            }
        }, 10);

        window.addEventListener('scroll', handleScroll);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new NavigationManager();
    new SmoothScrollManager();
    new ScrollAnimationManager();
    new PublicationManager();
    new ProjectManager();
    new NewsManager();
    new GalleryManager();
    new SocialLinksManager();
    new NavbarScrollEffect();

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', Utils.debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            
            // Reset hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }
}, 250));
