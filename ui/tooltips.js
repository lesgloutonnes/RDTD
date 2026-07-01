/** Tooltips contextuels (deck, noeuds, tours). */

let deckFloatTooltipEl = null;

function getDeckFloatTooltipEl() {
  if (!deckFloatTooltipEl) {
    deckFloatTooltipEl = document.createElement("div");
    deckFloatTooltipEl.id = "deck-float-tooltip";
    deckFloatTooltipEl.className = "deck-float-tooltip hidden";
    deckFloatTooltipEl.setAttribute("role", "tooltip");
    document.body.appendChild(deckFloatTooltipEl);
  }
  return deckFloatTooltipEl;
}

export function hideDeckFloatTooltip() {
  deckFloatTooltipEl?.classList.add("hidden");
}

function showDeckFloatTooltip(text, anchor) {
  const tip = getDeckFloatTooltipEl();
  tip.textContent = text;
  tip.classList.remove("hidden");
  tip.style.left = "-9999px";
  tip.style.top = "0";
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();

  let left = r.left - tw - 12;
  let top = r.top + (r.height - th) / 2;

  if (left < 8) {
    left = Math.min(r.right, window.innerWidth - 8) - tw;
    top = r.top - th - 10;
  }
  if (top < 8) top = r.bottom + 10;

  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  top = Math.max(8, Math.min(top, window.innerHeight - th - 8));

  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

/** Panneau run : tooltips fixes (evite le clipping du scroll). */
export function bindFloatingDeckTooltips(containerEl) {
  if (!containerEl?.closest(".run-panel")) return;
  if (containerEl.dataset.floatTipBound === "1") return;
  containerEl.dataset.floatTipBound = "1";

  containerEl.addEventListener("pointerover", (event) => {
    const chip = event.target.closest(".deck-chip[data-tooltip]");
    if (!chip || !containerEl.contains(chip)) return;
    showDeckFloatTooltip(chip.dataset.tooltip, chip);
  });

  containerEl.addEventListener("pointerout", (event) => {
    const chip = event.target.closest(".deck-chip[data-tooltip]");
    if (!chip) return;
    const next = event.relatedTarget;
    if (next && chip.contains(next)) return;
    hideDeckFloatTooltip();
  });

  containerEl.addEventListener("scroll", hideDeckFloatTooltip, { passive: true });
}

export function enhanceDeckTooltips(deckListEl, cardLibrary, formatDesc) {
  if (!deckListEl) return;
  deckListEl.querySelectorAll(".deck-chip").forEach((chip) => {
    const card = cardLibrary.find((c) => c.id === chip.dataset.cardId);
    if (!card) return;
    const tag = card.towerCard ? `Synergie tour · ${card.rarity}` : card.rarity;
    const text = formatDesc ? formatDesc(card) : card.desc;
    chip.dataset.tooltip = `${tag} — ${text}`;
  });
  bindFloatingDeckTooltips(deckListEl);
}

export function getNodeTooltip(nodeType, tooltipsConfig) {
  return tooltipsConfig?.nodes?.[nodeType] || "";
}

export function getPassiveTooltip(passive, tooltipsConfig) {
  if (!passive) return "";
  return tooltipsConfig?.tags?.[passive] || "";
}

export function bindSmartTowerTooltips(towerButtons, towerTypes, tooltipsConfig) {
  towerButtons.forEach((btn) => {
    const type = towerTypes[btn.dataset.tower];
    if (!type) return;
    const passiveTip = type.passive ? getPassiveTooltip(type.passive, tooltipsConfig) : "";
    const tip = passiveTip
      ? `${type.name} (${type.cost}☀) — ${type.desc} · ${passiveTip}`
      : `${type.name} (${type.cost}☀) — ${type.desc}`;
    btn.setAttribute("data-tooltip", tip);
    btn.classList.add("has-tooltip");
  });
}

let towerDockFloatTooltipEl = null;

function getTowerDockFloatTooltipEl() {
  if (!towerDockFloatTooltipEl) {
    towerDockFloatTooltipEl = document.createElement("div");
    towerDockFloatTooltipEl.id = "tower-dock-float-tooltip";
    towerDockFloatTooltipEl.className = "tower-dock-float-tooltip hidden";
    towerDockFloatTooltipEl.setAttribute("role", "tooltip");
    document.body.appendChild(towerDockFloatTooltipEl);
  }
  return towerDockFloatTooltipEl;
}

export function hideTowerDockFloatTooltip() {
  towerDockFloatTooltipEl?.classList.add("hidden");
}

function placeTowerDockTooltipBeside(tip, anchor, side, margin, dockTop, dockBottom) {
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();
  const left = side === "right" ? r.right + margin : r.left - tw - margin;
  const top = Math.max(
    dockTop + margin,
    Math.min(r.top + (r.height - th) / 2, dockBottom - th - margin),
  );
  return { left, top, placement: side };
}

function showTowerDockFloatTooltip(text, anchor) {
  const tip = getTowerDockFloatTooltipEl();
  tip.textContent = text;
  tip.classList.remove("hidden");
  tip.style.left = "-9999px";
  tip.style.top = "0";

  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();
  const dock = anchor.closest(".combat-dock");
  const dockRect = dock?.getBoundingClientRect();
  const dockTop = dockRect?.top ?? r.top;
  const dockBottom = dockRect?.bottom ?? r.bottom;
  const margin = 8;
  const canFitRight = r.right + margin + tw <= window.innerWidth - margin;
  const canFitLeft = r.left - margin - tw >= margin;

  let left = r.left + (r.width - tw) / 2;
  let top = r.top - th - margin;
  let placement = "above";

  const towerRow = anchor.closest(".action-towers");
  if (towerRow) {
    const buttons = [...towerRow.querySelectorAll(".tower-btn[data-tooltip]")];
    const idx = buttons.indexOf(anchor);
    const sideOrder = idx <= 0
      ? ["right", "left"]
      : idx >= buttons.length - 1
        ? ["left", "right"]
        : ["right", "left"];

    for (const side of sideOrder) {
      if (side === "right" && canFitRight) {
        ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "right", margin, dockTop, dockBottom));
        break;
      }
      if (side === "left" && canFitLeft) {
        ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "left", margin, dockTop, dockBottom));
        break;
      }
    }
  } else if (canFitRight) {
    ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "right", margin, dockTop, dockBottom));
  } else if (canFitLeft) {
    ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "left", margin, dockTop, dockBottom));
  } else if (top < margin) {
    top = Math.max(margin, dockTop + margin);
    placement = "above-clamped";
  }

  if (top < dockTop) {
    top = Math.max(dockTop + margin, Math.min(r.top + 4, dockBottom - th - margin));
    left = r.left + (r.width - tw) / 2;
    placement = "in-dock";
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
  top = Math.max(margin, Math.min(top, window.innerHeight - th - margin));

  tip.dataset.placement = placement;
  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

/** Infobulle flottante (hors flux) pour les tours du dock — ne déforme pas la carte. */
export function bindTowerDockHints(containerEl) {
  if (!containerEl) return;
  if (containerEl.dataset.dockHintBound === "1") return;
  containerEl.dataset.dockHintBound = "1";

  containerEl.addEventListener("pointerover", (event) => {
    const btn = event.target.closest(".tower-btn[data-tooltip]");
    if (!btn || !containerEl.contains(btn)) return;
    showTowerDockFloatTooltip(btn.dataset.tooltip, btn);
  });

  containerEl.addEventListener("pointerout", (event) => {
    const btn = event.target.closest(".tower-btn[data-tooltip]");
    if (!btn) return;
    const next = event.relatedTarget;
    if (next && btn.contains(next)) return;
    hideTowerDockFloatTooltip();
  });

  containerEl.addEventListener("scroll", hideTowerDockFloatTooltip, { passive: true });
  window.addEventListener("resize", hideTowerDockFloatTooltip, { passive: true });
}
