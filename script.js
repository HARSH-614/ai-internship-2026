// Simple typing cursor effect for the logo
const cursor = document.querySelector('.cursor');
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

// Add scroll listener for dynamic navbar styling (optional enhancement)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 15px rgba(0, 240, 255, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
