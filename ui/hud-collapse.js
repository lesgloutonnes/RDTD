import { isTouchLayout } from "./viewport.js";

const STORAGE_KEY = "rtdtd-hud-collapsed";

export function isTouchLandscape() {
  return (
    isTouchLayout()
    && typeof window !== "undefined"
    && window.matchMedia("(orientation: landscape)").matches
  );
}

export function initHudCollapse({ collapseBtn, onChange } = {}) {
  let collapsed = readPreference();

  function apply(next) {
    collapsed = next;
    document.body.classList.toggle("hud-collapsed", collapsed);
    collapseBtn?.setAttribute("aria-expanded", collapsed ? "false" : "true");
    collapseBtn?.classList.toggle("is-collapsed", collapsed);
    collapseBtn?.setAttribute(
      "aria-label",
      collapsed ? "Agrandir le panneau latéral" : "Réduire le panneau latéral"
    );
    onChange?.(collapsed);
  }

  function readPreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "0") return false;
    if (stored === "1") return true;
    return isTouchLandscape();
  }

  function refreshChrome() {
    const touchLandscape = isTouchLandscape();
    document.body.classList.toggle("is-touch-landscape", touchLandscape);
    collapseBtn?.classList.toggle("hidden", !touchLandscape);
    if (!touchLandscape) {
      document.body.classList.remove("hud-collapsed");
      return;
    }
    apply(collapsed);
  }

  collapseBtn?.addEventListener("click", () => {
    apply(!collapsed);
    localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
  });

  refreshChrome();
  window.addEventListener("resize", refreshChrome, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(refreshChrome, 150);
  });

  return {
    refresh: refreshChrome,
    setCollapsed: (value, { persist = false } = {}) => {
      if (persist) localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
      apply(value);
    },
    isCollapsed: () => collapsed,
  };
}

export function collapseHudForCombat(hudCollapse) {
  if (!isTouchLandscape()) return;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "0") return;
  hudCollapse?.setCollapsed?.(true);
}
