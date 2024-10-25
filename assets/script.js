/**
 * Count downtime
 * @type {number}
 */
// Set the date and time you're counting down to
var countDownDate = new Date("Nov 01, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();

  // Find the difference between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results in the relevant HTML elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

/**
 * Switch favicon dark and light mode
 */
$(document).ready(function () {
  if (!window.matchMedia)
    return;

  var current = $('head > link[rel="icon"][media]');
  $.each(current, function (i, icon) {
    var match = window.matchMedia(icon.media);

    function swap() {
      if (match.matches) {
        current.remove();
        current = $(icon).appendTo('head');
      }
    }

    match.addListener(swap);
    swap();
  });
});

/**
 * Lock orientation
 */
// Check if the orientation API is available
if (screen.orientation && screen.orientation.lock) {
  // Lock orientation to landscape or portrait
  screen.orientation.lock("portrait") // or "landscape"
    .then(() => {
      console.log("Orientation locked");
    })
    .catch((err) => {
      console.error("Orientation lock failed:", err);
    });
}
