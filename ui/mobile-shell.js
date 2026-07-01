import { getFormFactor, isPhoneViewport, isTabletViewport, isTouchLayout } from "./viewport.js";

/** Tiroir deck / onglets run et panneau stats repliable (mobile / tablette). */
export { getFormFactor, isPhoneViewport, isTabletViewport, isTouchLayout };

/** Tiroir deck / onglets run et panneau stats repliable (mobile). */
export function initMobileShell({
  runDrawer,
  runDrawerFab,
  runDrawerScrim,
  runDrawerClose,
  runDrawerTabs,
  runTabPanels,
  statsMoreBtn,
  statsGrid,
  onDrawerChange,
}) {
  let activeTab = "deck";

  function isMobileShell() {
    return isPhoneViewport();
  }

  function isTabletShell() {
    return isTabletViewport();
  }

  function isTouchShell() {
    return isTouchLayout();
  }

  function setTab(tabId) {
    activeTab = tabId;
    runDrawerTabs?.forEach((tab) => {
      const on = tab.dataset.runTab === tabId;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    runTabPanels?.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.runTabPanel === tabId);
    });
  }

  function openRunDrawer(tabId) {
    if (!isTouchShell() || !runDrawer) return;
    if (tabId) setTab(tabId);
    runDrawer.classList.add("is-open");
    runDrawerScrim?.classList.remove("hidden");
    runDrawerFab?.setAttribute("aria-expanded", "true");
    document.body.classList.add("run-drawer-open");
    onDrawerChange?.(true);
  }

  function closeRunDrawer() {
    if (!runDrawer) return;
    runDrawer.classList.remove("is-open");
    runDrawerScrim?.classList.add("hidden");
    runDrawerFab?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("run-drawer-open");
    onDrawerChange?.(false);
  }

  function toggleRunDrawer() {
    if (runDrawer?.classList.contains("is-open")) closeRunDrawer();
    else openRunDrawer(activeTab);
  }

  function toggleStatsExpanded() {
    if (!statsGrid || !statsMoreBtn) return;
    const expanded = statsGrid.classList.toggle("is-expanded");
    statsMoreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    statsMoreBtn.classList.toggle("is-expanded", expanded);
  }

  runDrawerFab?.addEventListener("click", toggleRunDrawer);
  runDrawerScrim?.addEventListener("click", closeRunDrawer);
  runDrawerClose?.addEventListener("click", closeRunDrawer);

  runDrawerTabs?.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.runTab));
  });

  statsMoreBtn?.addEventListener("click", toggleStatsExpanded);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && runDrawer?.classList.contains("is-open")) {
      closeRunDrawer();
    }
  });

  return {
    openRunDrawer,
    closeRunDrawer,
    setTab,
    isMobileShell,
    isTabletShell,
    isTouchShell,
  };
}

export function updateRunDrawerBadge(badgeEl, deckCount, relicCount) {
  if (!badgeEl) return;
  const total = deckCount + relicCount;
  if (total <= 0) {
    badgeEl.classList.add("hidden");
    badgeEl.textContent = "0";
    return;
  }
  badgeEl.classList.remove("hidden");
  badgeEl.textContent = String(total);
}
