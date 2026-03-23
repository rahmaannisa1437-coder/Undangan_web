/* =============================================
   script.js — Open Invitation Cover (R & E)
   Blue Botanical / Watercolor Aesthetic
   ============================================= */

"use strict";

/* ------------------------------------------------
   1. PARALLAX — Monogram letters drift on mouse/tilt
------------------------------------------------ */
(function initParallax() {
  const monoR = document.getElementById("monoR");
  const monoE = document.getElementById("monoE");

  if (!monoR || !monoE) return;

  // Mouse parallax (desktop)
  document.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx; // -1 to 1
    const dy = (e.clientY - cy) / cy;

    monoR.style.transform = `translate(${dx * -6}px, ${dy * -4}px)`;
    monoE.style.transform = `translate(${dx * 6}px, ${dy * -4}px)`;
  });

  // DeviceOrientation parallax (mobile)
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      if (e.gamma == null) return;
      const tiltX = Math.max(-30, Math.min(30, e.gamma)) / 30; // -1 to 1
      const tiltY = Math.max(-30, Math.min(30, e.beta - 20)) / 30;

      monoR.style.transform = `translate(${tiltX * -8}px, ${tiltY * -4}px)`;
      monoE.style.transform = `translate(${tiltX * 8}px, ${tiltY * -4}px)`;
    });
  }
})();

/* ------------------------------------------------
   2. OPEN INVITATION BUTTON — transition handler
------------------------------------------------ */
(function initButton() {
  const btn = document.getElementById("btnOpen");
  const page = document.getElementById("coverPage");

  if (!btn || !page) return;

  btn.addEventListener("click", function handleClick() {
    btn.removeEventListener("click", handleClick);
    btn.disabled = true;

    // Gold ripple effect
    const ripple = document.createElement("span");
    Object.assign(ripple.style, {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255,220,120,0.4)",
      width: "10px",
      height: "10px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%) scale(0)",
      animation: "goldRipple 0.6s ease-out forwards",
      pointerEvents: "none",
    });

    injectKeyframes(
      "goldRippleKF",
      `
      @keyframes goldRipple {
        to { transform: translate(-50%,-50%) scale(26); opacity: 0; }
      }
    `,
    );

    // Re-map animation name since keyframe injected dynamically
    ripple.style.animation = "goldRipple 0.6s ease-out forwards";
    btn.appendChild(ripple);

    // Page exit animation
    setTimeout(() => {
      page.classList.add("exit");
    }, 200);

    // After exit — redirect or show main content
    page.addEventListener("animationend", function onExit(e) {
      if (e.animationName !== "pageExit") return;
      page.removeEventListener("animationend", onExit);

      // ── OPTION A: Redirect to main invitation page ──
      // window.location.href = 'invitation.html';

      // ── OPTION B: Show a simple reveal screen (placeholder) ──
      showWelcomeScreen();
    });
  });

  function showWelcomeScreen() {
    const page = document.getElementById("coverPage");
    page.style.display = "none";

    const screen = document.createElement("div");
    Object.assign(screen.style, {
      position: "fixed",
      inset: "0",
      background:
        "linear-gradient(160deg, #e8eff5 0%, #f0f5f8 50%, #e6eef4 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      zIndex: "100",
      animation: "welcomeIn 0.9s cubic-bezier(0.16,1,0.3,1) both",
      textAlign: "center",
      padding: "32px",
    });

    injectKeyframes(
      "welcomeInKF",
      `
      @keyframes welcomeIn {
        from { opacity:0; transform: scale(0.97); }
        to   { opacity:1; transform: scale(1); }
      }
    `,
    );

    screen.innerHTML = `
      <div style="
        font-family: 'Playfair Display', Georgia, serif;
        font-size: clamp(48px, 14vw, 80px);
        font-weight: 900;
        color: #1e3558;
        letter-spacing: -2px;
        line-height: 1;
        opacity: 0.88;
      ">R &amp; E</div>

      <div style="
        width: 48px; height: 1px;
        background: linear-gradient(90deg, transparent, #7a9bbf, transparent);
        margin: 8px auto;
      "></div>

      <p style="
        font-family: 'IM Fell English', Georgia, serif;
        font-style: italic;
        font-size: 14px;
        color: #4a6a88;
        line-height: 1.8;
        max-width: 280px;
      ">
        Selamat datang di halaman<br/>undangan pernikahan kami.<br/>
        <em>Dengan penuh kasih &amp; syukur.</em>
      </p>

      <div style="
        margin-top: 8px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 10px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #8b7336;
      ">SABTU · 29 MARET 2030</div>
    `;

    document.body.appendChild(screen);
  }
})();

/* ------------------------------------------------
   3. MENU BUTTON — subtle hover feedback
------------------------------------------------ */
(function initMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  if (!menuBtn) return;

  let open = false;

  menuBtn.addEventListener("click", () => {
    open = !open;
    const spans = menuBtn.querySelectorAll("span");
    if (open) {
      spans[0].style.transform = "translateY(6.5px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-6.5px) rotate(-45deg)";
    } else {
      spans.forEach((s) => {
        s.style.transform = "";
        s.style.opacity = "";
      });
    }
  });
})();

/* ------------------------------------------------
   HELPER: inject CSS keyframes once by id
------------------------------------------------ */
function injectKeyframes(id, css) {
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}
