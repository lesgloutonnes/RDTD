/** Détection phone / tablette / desktop + variables layout dynamiques. */

export function getFormFactor(width = window.innerWidth) {
  if (width <= 860) return "phone";
  if (width <= 1200) return "tablet";
  return "desktop";
}

export function isPhoneViewport() {
  return getFormFactor() === "phone";
}

export function isTabletViewport() {
  return getFormFactor() === "tablet";
}

export function isTouchLayout() {
  return getFormFactor() !== "desktop";
}

function isLandscapeViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(orientation: landscape)").matches;
}

function fallbackDockHeight(factor, screen) {
  const gameplay = screen === "playing" || screen === "paused";
  if (factor === "phone" && gameplay) {
    return isLandscapeViewport() ? 108 : 148;
  }
  return 0;
}

function measureDockHeight(factor, screen) {
  const gameplay = screen === "playing" || screen === "paused";
  if (!gameplay || factor === "desktop") return 0;

  const dock = document.querySelector(".combat-dock");
  if (!dock || getComputedStyle(dock).display === "none") return 0;

  const position = getComputedStyle(dock).position;
  const height = Math.ceil(dock.getBoundingClientRect().height) || 0;
  if (!height) return fallbackDockHeight(factor, screen);

  if (factor === "phone") {
    return position === "fixed" ? height : 0;
  }

  if (factor === "tablet") return height;
  return 0;
}

export function updateViewport(screen = document.body?.dataset?.screen || "title") {
  const factor = getFormFactor();
  const phonePortrait = factor === "phone" && !isLandscapeViewport();
  if (typeof document !== "undefined") {
    document.body.dataset.formFactor = factor;
    document.body.classList.toggle(
      "is-touch-landscape",
      factor !== "desktop" && isLandscapeViewport()
    );
    document.body.classList.toggle("is-phone-portrait", phonePortrait);
    document.documentElement.style.setProperty(
      "--dock-height",
      `${measureDockHeight(factor, screen)}px`
    );
  }
  return factor;
}

export function initViewport({ onChange } = {}) {
  const refresh = () => {
    const screen = document.body?.dataset?.screen || "title";
    const factor = updateViewport(screen);
    onChange?.(factor, screen);
  };
  refresh();
  window.addEventListener("resize", refresh, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(refresh, 120);
  });
  return { refresh, getFormFactor, isPhoneViewport, isTabletViewport, isTouchLayout };
}
