document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {threshold: 0.1});

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
        card.style.animationPlayState = 'paused';
    });

    // Observe platform buttons
    document.querySelectorAll('.platform-button').forEach(button => {
        observer.observe(button);
        button.style.animationPlayState = 'paused';
    });
});
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
    }
  });
  