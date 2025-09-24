// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Create a single observer instance
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 2. Add the class to trigger the CSS transition
        entry.target.classList.add('is-inViewport');
        // 3. Stop observing so it only runs once
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // 4. Observe every element with data-inviewport (fade-right/left/up/whatever)
  document.querySelectorAll('[data-inviewport]').forEach(el => {
    observer.observe(el);
  });
});