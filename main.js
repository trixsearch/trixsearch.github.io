
// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change hamburger icon
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.padding = '15px 0';
        header.style.backdropFilter = 'blur(5px)';
    }
});

// Resume Modal
const viewResumeBtn = document.getElementById('viewResume');
const closeResumeBtn = document.getElementById('closeResume');
const resumeModal = document.getElementById('resumeModal');

viewResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resumeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeResumeBtn.addEventListener('click', () => {
    resumeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        resumeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Typing animation
const techStack = ["Java", "Django", "React", "Python", "PostgreSQL"];
let techIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text span');

function type() {
    const currentTech = techStack[techIndex];
    
    if (isDeleting) {
        // Remove characters
        typingElement.textContent = "Full Stack " + currentTech.substring(0, charIndex - 1) + " Developer";
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            techIndex = (techIndex + 1) % techStack.length;
        }
    } else {
        // Add characters
        typingElement.textContent = "Full Stack " + currentTech.substring(0, charIndex + 1) + " Developer";
        charIndex++;
        
        if (charIndex === currentTech.length + 1) {
            isDeleting = true;
            // Pause at end before deleting
            setTimeout(type, 2000);
            return;
        }
    }
    
    const speed = isDeleting ? 100 : 150;
    setTimeout(type, speed);
}

// Start typing animation
setTimeout(type, 1000);
