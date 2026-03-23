// Animasi fade-in saat load
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".title-script, .desc, .italic, .date, .bow, .small, .venue, .address, .gallery-title, .gallery-grid img",
  );

  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 150 * index);
  });
});
