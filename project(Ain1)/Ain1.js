// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(45, 55, 72, 0.95)';
        header.style.padding = '1rem 0';
    } else {
        header.style.background = 'rgba(45, 55, 72, 0.7)';
        header.style.padding = '1.5rem 0';
    }
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.pageX - card.getBoundingClientRect().left;
        const y = e.pageY - card.getBoundingClientRect().top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

//fashion hub try ons

// Add mouse position effect to CSS
const style = document.createElement('style');
style.textContent = `
.service-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
                rgba(255,255,255,0.1) 0%, 
                transparent 100%);
    pointer-events: none;
    z-index: -1;
    transition: opacity 0.3s;
}
`;
document.head.appendChild(style);

// Form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks for subscribing with ${email}! We'll be in touch.`);
    e.target.reset();


    
});