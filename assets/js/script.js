
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

var map = L.map('map').setView([51, -0.4], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var polygon = L.polygon([
    [50.68600031718477, -0.9553387777987041],
    [50.73871276651515, 0.6456011365207798],
    [51.21560758185905, -0.48471658140918117]
]).addTo(map);

for (let element of document.getElementsByClassName("query-submit")) {
  element.addEventListener("click", function(event) {
    let queryAndNumber = element.getAttribute('id').slice(0, -7);
    let queryTopic = document.getElementById(`${queryAndNumber}Topic`);
    let queryEmail = document.getElementById(`${queryAndNumber}Email`);
    let queryText = document.getElementById(`${queryAndNumber}Text`);
    if (!(queryTopic.value && queryEmail.value && queryText.value)) return;
    event.preventDefault();
    Toastify({
      text: `${queryTopic.value} query submitted.`,
      duration: 3000,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#198754",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    queryEmail.value = '';
    queryText.value = '';
  })
}