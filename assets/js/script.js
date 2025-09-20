const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

document.querySelectorAll('[data-inviewport]').forEach(el => {
  Obs.observe(el, obsOptions);
});