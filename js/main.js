// countDownDate
let countDownDate = new Date("dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secounds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    secounds < 10 ? `0${secounds}` : secounds;
  if (distance < 0) {
    clearInterval(counter);
  }
}, 1000);
//  Scroll Animation
let progs = document.querySelectorAll(".prog span");
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".count");
let sec = document.querySelector(".stats");
let started = false;
window.onscroll = () => {
  // Progress Increment
  if (window.scrollY >= section.offsetTop - 250) {
    progs.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
  // Scroll Counter
  if (window.scrollY >= sec.offsetTop - 250) {
    if (!started) {
      spans.forEach((span) => {
        let goal = span.dataset.num;
        let counter = setInterval(() => {
          span.textContent++;
          if (span.textContent == goal) {
            clearInterval(counter);
          }
        }, 2000 / goal);
      });
    }
    started = true;
  }
};
