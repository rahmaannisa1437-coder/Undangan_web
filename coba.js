/* ================================
   SCROLL ANIMATION
================================ */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

sections.forEach((section) => {
  observer.observe(section);
});

/* ================================
   COUNTDOWN
   Target: March 30, 2030 - 15:00
================================ */
const targetDate = new Date("March 30, 2030 15:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    daysEl.innerHTML = "00";
    hoursEl.innerHTML = "00";
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days.toString().padStart(2, "0");
  hoursEl.innerHTML = hours.toString().padStart(2, "0");
  minutesEl.innerHTML = minutes.toString().padStart(2, "0");
  secondsEl.innerHTML = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ================================
   FLOATING PEARLS (ELEGANT VERSION)
================================ */
const leftContainer = document.getElementById("pearlsLeft");
const rightContainer = document.getElementById("pearlsRight");

function createPearls(container, side) {
  const total = 14; // jumlah pearl

  for (let i = 0; i < total; i++) {
    const pearl = document.createElement("div");
    pearl.classList.add("floating-pearl");

    // ukuran pearl random
    const size = Math.random() * 12 + 6;
    pearl.style.width = size + "px";
    pearl.style.height = size + "px";

    // posisi horizontal
    if (side === "left") {
      pearl.style.left = Math.random() * 90 + "px";
    } else {
      pearl.style.right = Math.random() * 90 + "px";
    }

    // posisi vertikal random
    pearl.style.top = Math.random() * 100 + "vh";

    // animasi random agar tidak barengan
    pearl.style.animationDuration = Math.random() * 8 + 12 + "s";
    pearl.style.animationDelay = Math.random() * 6 + "s";

    container.appendChild(pearl);
  }
}

if (leftContainer) createPearls(leftContainer, "left");
if (rightContainer) createPearls(rightContainer, "right");

/* ================================
   BACKGROUND MUSIC
================================ */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// saat pertama klik, unmute
document.addEventListener(
  "click",
  function () {
    music.muted = false;
    music.play();
  },
  { once: true },
);

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "🔊";
  } else {
    music.pause();
    btn.innerHTML = "🔈";
  }
});