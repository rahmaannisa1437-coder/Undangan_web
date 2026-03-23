const targetDate = new Date("March 30, 2030 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((gap / (1000 * 60)) % 60);
  const second = Math.floor((gap / 1000) % 60);

  document.getElementById("days").innerText = day;
  document.getElementById("hours").innerText = hour;
  document.getElementById("minutes").innerText = minute;
  document.getElementById("seconds").innerText = second;
}

setInterval(updateCountdown, 1000);
updateCountdown();
