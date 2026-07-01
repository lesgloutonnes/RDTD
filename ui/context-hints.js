const STORAGE_KEY = "gloutonnes_context_hints_v1";

function loadSeen() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveSeen(seen) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]));
  } catch {
    /* ignore */
  }
}

function matchesWhen(hint, ctx) {
  const when = hint.when;
  if (!when) return true;
  if (when.spireNumber != null && ctx.spireNumber !== when.spireNumber) return false;
  if (when.floor != null && ctx.floor !== when.floor) return false;
  return true;
}

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

/**
 * Indices contextuels (1× par mécanique / Spire), indépendants du guide linéaire.
 */
export function createContextHintsController({ hints = [], isBlocked = () => false }) {
  let seen = loadSeen();
  let overlayEl = null;
  let cardEl = null;

  function ensureDom() {
    if (overlayEl) return;
    overlayEl = document.createElement("div");
    overlayEl.id = "context-hints-overlay";
    overlayEl.className = "onboarding-overlay context-hints-overlay hidden";
    overlayEl.innerHTML = `
      <div class="onboarding-card context-hints-card">
        <p class="onboarding-kicker" id="context-hints-kicker">Astuce</p>
        <h2 id="context-hints-title"></h2>
        <p id="context-hints-text"></p>
        <div class="onboarding-actions">
          <button type="button" id="context-hints-dismiss" class="overlay-btn">Compris</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlayEl);
    cardEl = overlayEl.querySelector(".context-hints-card");
    overlayEl.querySelector("#context-hints-dismiss").addEventListener("click", hide);
  }

  function clearHighlight() {
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
    });
    if (cardEl) {
      cardEl.style.top = "";
      cardEl.style.left = "";
      cardEl.style.position = "";
    }
  }

  function highlightTarget(selector) {
    clearHighlight();
    if (!selector) return;
    const target = document.querySelector(selector);
    if (!target) return;
    target.classList.add("onboarding-highlight");
    placeCardNearTarget(cardEl, target);
  }

  function hide() {
    overlayEl?.classList.add("hidden");
    clearHighlight();
  }

  function show(hint, ctx = {}) {
    if (isBlocked()) return false;
    ensureDom();
    overlayEl.classList.remove("hidden");
    const kicker = hint.kicker || "Première fois";
    overlayEl.querySelector("#context-hints-kicker").textContent = kicker;
    overlayEl.querySelector("#context-hints-title").textContent =
      ctx.titleOverride || hint.title || "Astuce";
    overlayEl.querySelector("#context-hints-text").textContent =
      ctx.textOverride || hint.text || "";
    highlightTarget(hint.target);
    return true;
  }

  function tryShow(hintId, ctx = {}) {
    if (!hintId || seen.has(hintId)) return false;
    const hint = hints.find((h) => h.id === hintId);
    if (!hint || !matchesWhen(hint, ctx)) return false;
    if (!show(hint, ctx)) return false;
    seen.add(hintId);
    saveSeen(seen);
    return true;
  }

  function resetForDev() {
    seen = new Set();
    localStorage.removeItem(STORAGE_KEY);
    hide();
  }

  function isSeen(hintId) {
    return seen.has(hintId);
  }

  return { tryShow, hide, resetForDev, isSeen };
}
