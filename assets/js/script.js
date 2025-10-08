
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

// document.querySelector(".nav .nav-link").on("click", function(){
//    document.querySelector(".nav").find(".active").removeClass("active");
//    document.querySelector(this).addClass("active");
// });

document.getElementById("query-submit").addEventListener("click", function(event) {
  let queryTopic = document.getElementById("queryTopic").value;
  let queryEmail = document.getElementById("queryEmail").value;
  let queryText = document.getElementById("queryText").value;
  if (!(queryTopic && queryEmail && queryText)) return;
  event.preventDefault();
  Toastify({
    text: `${queryTopic} query submitted.`,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#5bc93dff",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  document.getElementById("queryEmail").value = '';
  document.getElementById("queryText").value = '';
})