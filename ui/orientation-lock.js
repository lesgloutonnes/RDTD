import { updateViewport } from "./viewport.js";

/** Indique l'orientation téléphone sans bloquer l'UI mobile/PWA. */
export function isPortraitPhone() {
  if (typeof window === "undefined") return false;
  if (window.innerWidth > 860) return false;
  return window.matchMedia("(orientation: portrait)").matches;
}

export function initOrientationLock({ overlayEl } = {}) {
  const update = () => {
    const portrait = isPortraitPhone();
    const orientation = portrait ? "portrait" : "landscape";
    document.body.dataset.orientation = orientation;
    document.body.classList.remove("orientation-blocked");
    overlayEl?.classList.add("hidden");
    overlayEl?.setAttribute("aria-hidden", "true");
    updateViewport(document.body?.dataset?.screen || "title");
    return portrait;
  };

  update();
  window.addEventListener("resize", update, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(update, 150);
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) update();
  });

  return { update, isPortraitPhone };
}
