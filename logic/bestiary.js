const STORAGE_KEY = "gloutonnes_bestiary_v1";

export const DEFAULT_BESTIARY_CONFIG = {
  firstKillDamageBonus: 0.02,
  maxFirstKillBonusTypes: 5,
};

export function loadBestiaryProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveBestiaryProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* ignore */
  }
}

export function initRunBestiary(game) {
  game.run.bestiaryDiscovered = [];
  game.run.bestiaryDamageBonus = 0;
}

export function recordBestiaryKill(typeKey) {
  if (!typeKey) return;
  const progress = loadBestiaryProgress();
  const entry = progress[typeKey] || { kills: 0, firstSeen: null };
  entry.kills += 1;
  if (!entry.firstSeen) {
    entry.firstSeen = new Date().toLocaleDateString("fr-BE", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }
  progress[typeKey] = entry;
  saveBestiaryProgress(progress);
}

/**
 * Premier kill d'un type pendant la run → bonus dégâts cumulé.
 * @returns {{ name: string, bonusPct: number } | null}
 */
export function applyFirstKillBonus(game, typeKey, enemyTypes, config = DEFAULT_BESTIARY_CONFIG) {
  if (!typeKey || typeKey === "boss") return null;
  if (!game.run) return null;
  if (game.run.bestiaryDiscovered.includes(typeKey)) return null;

  const maxTypes = config.maxFirstKillBonusTypes ?? 5;
  if (game.run.bestiaryDiscovered.length >= maxTypes) return null;

  const bonus = config.firstKillDamageBonus ?? 0.02;
  game.run.bestiaryDiscovered.push(typeKey);
  game.run.bestiaryDamageBonus = (game.run.bestiaryDamageBonus || 0) + bonus;
  game.modifiers.globalDamage = (game.modifiers.globalDamage || 1) * (1 + bonus);

  const name = enemyTypes[typeKey]?.name || typeKey;
  return { name, bonusPct: Math.round(bonus * 100) };
}

export function renderBestiaryListHtml(enemyTypes, progress, runDiscovered = []) {
  const runSet = new Set(runDiscovered);
  const entries = Object.entries(enemyTypes || {})
    .filter(([key]) => key !== "boss")
    .map(([key, def]) => {
      const saved = progress[key];
      const discovered = Boolean(saved?.kills) || runSet.has(key);
      const name = def.name || key;
      const desc = def.bestiaryDesc || def.desc || "Ravageur de la serre.";
      const kills = saved?.kills || 0;
      const status = discovered
        ? `<span class="bestiary-status bestiary-status--known">Connu</span>`
        : `<span class="bestiary-status bestiary-status--unknown">???</span>`;
      const meta = discovered
        ? `<span class="bestiary-meta">${kills} abattu(s)${saved?.firstSeen ? ` · vu le ${saved.firstSeen}` : ""}</span>`
        : `<span class="bestiary-meta">Tue-le une fois pour le révéler.</span>`;
      const runTag = runSet.has(key) ? ` <span class="bestiary-run-tag">Nouveau cette run</span>` : "";
      return `
        <article class="bestiary-entry ${discovered ? "is-known" : "is-unknown"}">
          <header class="bestiary-entry-head">
            <strong>${discovered ? name : "Proie inconnue"}</strong>
            ${status}${runTag}
          </header>
          <p>${discovered ? desc : "Trace de mucus ou de carapace…"}</p>
          ${meta}
        </article>`;
    });

  const boss = enemyTypes?.boss;
  if (boss) {
    const saved = progress.boss;
    const discovered = Boolean(saved?.kills);
    entries.push(`
      <article class="bestiary-entry bestiary-entry--boss ${discovered ? "is-known" : "is-unknown"}">
        <header class="bestiary-entry-head">
          <strong>${discovered ? boss.name || "Colosse de la serre" : "Boss"}</strong>
          <span class="bestiary-status ${discovered ? "bestiary-status--known" : "bestiary-status--unknown"}">${discovered ? "Vaincu" : "???"}</span>
        </header>
        <p>${discovered ? boss.bestiaryDesc || boss.desc : "Le gardien des étages finaux."}</p>
        ${discovered ? `<span class="bestiary-meta">${saved.kills} victoire(s)</span>` : ""}
      </article>`);
  }

  return entries.join("");
}
