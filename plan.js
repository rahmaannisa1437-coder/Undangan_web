const leftContainer = document.getElementById("pearlsLeft");
const rightContainer = document.getElementById("pearlsRight");

function createPearls(container, side) {
  const total = 14; // jumlah pearl lebih elegan

  for (let i = 0; i < total; i++) {
    const pearl = document.createElement("div");
    pearl.classList.add("floating-pearl");

    // ukuran pearl random (kecil → besar)
    const size = Math.random() * 12 + 6;
    pearl.style.width = size + "px";
    pearl.style.height = size + "px";

    // posisi horizontal random sesuai sisi
    if (side === "left") {
      pearl.style.left = Math.random() * 90 + "px";
    } else {
      pearl.style.right = Math.random() * 90 + "px";
    }

    // posisi awal vertikal random agar tidak bareng semua
    pearl.style.top = Math.random() * 100 + "vh";

    // animasi lebih smooth & bervariasi
    pearl.style.animationDuration = Math.random() * 8 + 12 + "s";
    pearl.style.animationDelay = Math.random() * 6 + "s";

    container.appendChild(pearl);
  }
}

createPearls(leftContainer, "left");
createPearls(rightContainer, "right");
