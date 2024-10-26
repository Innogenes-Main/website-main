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
  var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  // Output the results in the relevant HTML elements
  document.getElementById("days-1").innerHTML = days;
  document.getElementById("hours-1").innerHTML = hours;
  document.getElementById("minutes-1").innerHTML = minutes;
  document.getElementById("seconds-1").innerHTML = seconds;
  document.getElementById("days-2").innerHTML = days;
  document.getElementById("hours-2").innerHTML = hours;
  document.getElementById("minutes-2").innerHTML = minutes;
  document.getElementById("seconds-2").innerHTML = seconds;

  // If the countdown is finished, display some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-1").innerHTML = "0";
    document.getElementById("hours-1").innerHTML = "0";
    document.getElementById("minutes-1").innerHTML = "0";
    document.getElementById("seconds-1").innerHTML = "0";
    document.getElementById("days-2").innerHTML = "0";
    document.getElementById("hours-2").innerHTML = "0";
    document.getElementById("minutes-2").innerHTML = "0";
    document.getElementById("seconds-2").innerHTML = "0";
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
