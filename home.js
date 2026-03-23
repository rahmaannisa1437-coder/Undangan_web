// FADE IN ON SCROLL
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 },
);

sections.forEach((section) => {
  observer.observe(section);
});

// CALENDAR
const calendar = document.getElementById("calendar");
const year = 2030;
const month = 2;

["S", "M", "T", "W", "T", "F", "S"].forEach((d) => {
  let el = document.createElement("div");
  el.innerText = d;
  calendar.appendChild(el);
});

const firstDay = new Date(year, month, 1).getDay();
const lastDate = new Date(year, month + 1, 0).getDate();

for (let i = 0; i < firstDay; i++) {
  calendar.appendChild(document.createElement("div"));
}

for (let i = 1; i <= lastDate; i++) {
  let day = document.createElement("div");
  if (i === 30) day.classList.add("special");
  day.innerText = i;
  calendar.appendChild(day);
}

// COUNTDOWN
const targetDate = new Date("March 30, 2030 15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  document.getElementById("days").innerText = Math.floor(
    distance / (1000 * 60 * 60 * 24),
  );
  document.getElementById("hours").innerText = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  document.getElementById("minutes").innerText = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60),
  );
  document.getElementById("seconds").innerText = Math.floor(
    (distance % (1000 * 60)) / 1000,
  );
}, 1000);

// MUSIC TOGGLE
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "🔊";
  } else {
    music.pause();
    toggle.innerText = "🔈";
  }
});

// LOCAL STORAGE FORM
const form = document.getElementById("wishForm");
const wishList = document.getElementById("wishList");

function loadWishes() {
  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];
  wishList.innerHTML = "";
  wishes.forEach((w) => {
    wishList.innerHTML += `<p><strong>${w.name}</strong>: ${w.message}</p>`;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const wishes = JSON.parse(localStorage.getItem("wishes")) || [];
  wishes.push({ name, message });
  localStorage.setItem("wishes", JSON.stringify(wishes));

  form.reset();
  loadWishes();
});

loadWishes();
