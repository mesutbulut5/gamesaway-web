// ===== THEME TOGGLE (Dark/Light Mode) =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);

        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

function updateThemeIcon(theme) {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ===== LANGUAGE TOGGLE (TR/EN) =====
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'tr';

// Apply saved language
applyLanguage(currentLang);

if (langToggle) {
    langToggle.textContent = currentLang.toUpperCase();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('language', currentLang);
        langToggle.textContent = currentLang.toUpperCase();
        applyLanguage(currentLang);
    });
}

function applyLanguage(lang) {
    // Update all elements with data-tr and data-en attributes
    document.querySelectorAll('[data-tr]').forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        const text = lang === 'tr' ? trText : enText;

        if (!text) return;

        // Check if element contains only text (no child elements)
        const hasOnlyText = Array.from(element.childNodes).every(node =>
            node.nodeType === 3 || (node.nodeType === 1 && node.tagName === 'BR')
        );

        if (hasOnlyText) {
            // Simple case: just text content
            element.textContent = text;
        } else {
            // Complex case: has child elements (like icons, spans, etc.)
            // Find and update only the direct text nodes
            let textNodeFound = false;
            element.childNodes.forEach(node => {
                if (node.nodeType === 3 && node.textContent.trim()) {
                    node.textContent = text;
                    textNodeFound = true;
                }
            });

            // If no text node found, it might be wrapped in a span or similar
            if (!textNodeFound) {
                // Check for a single text-containing child
                const textChild = Array.from(element.children).find(child =>
                    child.children.length === 0 && child.textContent.trim()
                );
                if (textChild) {
                    textChild.textContent = text;
                }
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(element => {
        if (lang === 'tr') {
            if (element.type === 'email') {
                element.placeholder = 'E-posta adresiniz';
            }
        } else {
            if (element.type === 'email') {
                element.placeholder = 'Your email address';
            }
        }
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Blog Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        blogCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would normally send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        const message = currentLang === 'tr'
            ? 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
            : 'Your message has been sent successfully! We will get back to you soon.';
        alert(message);

        // Reset form
        contactForm.reset();
    });
}

// Newsletter Form
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const message = currentLang === 'tr'
            ? 'Bültene kaydınız başarıyla tamamlandı!'
            : 'Successfully subscribed to newsletter!';
        alert(message);
        form.reset();
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.feature-card, .blog-card, .step, .download-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker failed', err));
    });
}
