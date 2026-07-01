const STORAGE_KEY = "gloutonnes_onboarding_v1";

function getBottomInset() {
  const dockHeight = Number.parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--dock-height"),
    10,
  );
  return Number.isFinite(dockHeight) ? Math.max(0, dockHeight) : 0;
}

function placeCardNearTarget(cardEl, target) {
  const margin = 12;
  const gap = 12;
  const rect = target.getBoundingClientRect();
  const cardRect = cardEl.getBoundingClientRect();
  const cardWidth = cardRect.width || 320;
  const cardHeight = cardRect.height || 180;
  const viewportBottom = window.innerHeight - margin - getBottomInset();
  const spaceBelow = viewportBottom - rect.bottom - gap;
  const spaceAbove = rect.top - margin - gap;

  let top = rect.bottom + gap;
  if (spaceBelow < cardHeight && spaceAbove > spaceBelow) {
    top = rect.top - cardHeight - gap;
  }

  const left = Math.max(
    margin,
    Math.min(rect.left, window.innerWidth - cardWidth - margin),
  );

  cardEl.style.position = "fixed";
  cardEl.style.left = `${Math.round(left)}px`;
  cardEl.style.top = `${Math.round(Math.max(margin, Math.min(top, viewportBottom - cardHeight)))}px`;
}

export function createOnboardingController({ steps, onStepChange }) {
  let stepIndex = 0;
  let overlayEl = null;
  let cardEl = null;

  function isDone() {
    return localStorage.getItem(STORAGE_KEY) === "done";
  }

  function markDone() {
    localStorage.setItem(STORAGE_KEY, "done");
    hide();
  }

  function ensureDom() {
    if (overlayEl) return;
    overlayEl = document.createElement("div");
    overlayEl.id = "onboarding-overlay";
    overlayEl.className = "onboarding-overlay hidden";
    overlayEl.innerHTML = `
      <div class="onboarding-card">
        <p class="onboarding-kicker">Guide</p>
        <h2 id="onboarding-title"></h2>
        <p id="onboarding-text"></p>
        <div class="onboarding-actions">
          <button type="button" id="onboarding-skip" class="overlay-btn alt">Passer</button>
          <button type="button" id="onboarding-next" class="overlay-btn">Suivant</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlayEl);
    cardEl = overlayEl.querySelector(".onboarding-card");

    overlayEl.querySelector("#onboarding-skip").addEventListener("click", markDone);
    overlayEl.querySelector("#onboarding-next").addEventListener("click", () => {
      if (stepIndex >= steps.length - 1) markDone();
      else showStep(stepIndex + 1);
    });
  }

  function highlightTarget(selector) {
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
      el.classList.remove("onboarding-highlight--positioned");
    });
    if (!selector) return;
    const target = document.querySelector(selector);
    if (!target) return;
    target.classList.add("onboarding-highlight");
    if (getComputedStyle(target).position === "static") {
      target.classList.add("onboarding-highlight--positioned");
    }
    placeCardNearTarget(cardEl, target);
  }

  function showStep(index) {
    ensureDom();
    stepIndex = index;
    const step = steps[index];
    overlayEl.classList.remove("hidden");
    overlayEl.querySelector("#onboarding-title").textContent = step.title;
    overlayEl.querySelector("#onboarding-text").textContent = step.text;
    overlayEl.querySelector("#onboarding-next").textContent = index >= steps.length - 1 ? "C'est parti" : "Suivant";
    highlightTarget(step.target);
    onStepChange?.(step, index);
  }

  function hide() {
    overlayEl?.classList.add("hidden");
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
      el.classList.remove("onboarding-highlight--positioned");
    });
    if (cardEl) {
      cardEl.style.top = "";
      cardEl.style.left = "";
      cardEl.style.position = "";
    }
  }

  function startIfNeeded(screen) {
    if (isDone() || !steps?.length) return;
    const idx = steps.findIndex((s) => s.screen === screen);
    if (idx < 0) return;
    showStep(idx);
  }

  function resetForDev() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { startIfNeeded, showStep, hide, markDone, isDone, resetForDev };
}
