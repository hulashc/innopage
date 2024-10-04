// Fade in effect for sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = 0; // Start hidden
        section.style.transition = 'opacity 1s';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Fade in
                observer.unobserve(entry.target); // Stop observing once in view
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
