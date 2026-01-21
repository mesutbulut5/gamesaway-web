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
        const href = this.getAttribute('href');
        // Skip if href is just "#" or empty
        if (!href || href === '#') {
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);
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
    
    // Animate statistics numbers
    animateStats();
});

// Statistics Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = formatNumber(Math.floor(current));
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = formatNumber(target);
                    }
                };
                
                updateCount();
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
}

// ===== USER DROPDOWN TOGGLE =====
const userDropdownBtn = document.getElementById('userDropdownBtn');
const userDropdown = document.querySelector('.nav-user-dropdown');
const userDropdownMenu = document.getElementById('userDropdownMenu');

if (userDropdownBtn && userDropdown) {
    userDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userDropdown.contains(e.target)) {
            userDropdown.classList.remove('active');
        }
    });

    // Prevent dropdown from closing when clicking inside menu
    if (userDropdownMenu) {
        userDropdownMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// ===== SEARCH BAR FUNCTIONALITY =====
const navSearch = document.querySelector('.nav-search input');
if (navSearch) {
    navSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchQuery = navSearch.value.trim();
            if (searchQuery) {
                window.location.href = `/Home/Browse?search=${encodeURIComponent(searchQuery)}`;
            }
        }
    });
}


// ===== NAVBAR DROPDOWN TOGGLE (Mobile) =====
const navDropdowns = document.querySelectorAll('.nav-dropdown');

navDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    
    if (toggle && window.innerWidth <= 768) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            navDropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        });
    }
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
        navDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// ===== UNREGISTER SERVICE WORKER =====
// Completely remove any existing service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister().then(function(success) {
                if (success) {
                    console.log('Service Worker unregistered successfully');
                }
            });
        }
    });
    
    // Clear all caches
    if ('caches' in window) {
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        }).then(function() {
            console.log('All caches cleared');
        });
    }
}



// ===== SIDEBAR DROPDOWN TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
    const sidebarDropdowns = document.querySelectorAll('.sidebar-dropdown');
    
    sidebarDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.sidebar-dropdown-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Toggle current dropdown
                dropdown.classList.toggle('open');
                
                // Optional: Close other dropdowns (uncomment if you want accordion behavior)
                // sidebarDropdowns.forEach(other => {
                //     if (other !== dropdown) {
                //         other.classList.remove('open');
                //     }
                // });
            });
        }
    });
});
