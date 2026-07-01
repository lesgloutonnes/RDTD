export function beginRunStats(game) {
  game.runStats = {
    startedAt: performance.now() / 1000,
    totalKills: 0,
    totalLeaks: 0,
    wavesCleared: 0,
    goldAtStart: game.gold,
    damageByTower: {},
    damageByFamily: {},
    killsByType: {},
    highestSpire: game.spire?.spireNumber || 1,
    highestFloor: game.spire?.floor || 0,
  };
}

export function recordRunKill(game, typeKey) {
  if (!game.runStats) return;
  game.runStats.totalKills += 1;
  if (typeKey) {
    game.runStats.killsByType[typeKey] = (game.runStats.killsByType[typeKey] || 0) + 1;
  }
}

export function recordRunLeak(game) {
  if (!game.runStats) return;
  game.runStats.totalLeaks += 1;
}

export function recordRunTowerDamage(game, towerId, amount, familyId = null) {
  if (!game.runStats || !towerId) return;
  const key = String(towerId);
  game.runStats.damageByTower[key] = (game.runStats.damageByTower[key] || 0) + amount;
  if (familyId) {
    game.runStats.damageByFamily[familyId] = (game.runStats.damageByFamily[familyId] || 0) + amount;
  }
}

export function recordRunWaveCleared(game) {
  if (game.runStats) game.runStats.wavesCleared += 1;
}

export function touchRunProgress(game) {
  if (!game.runStats || !game.spire) return;
  game.runStats.highestSpire = Math.max(game.runStats.highestSpire, game.spire.spireNumber);
  game.runStats.highestFloor = Math.max(game.runStats.highestFloor, game.spire.floor);
}

export function finalizeRunStats(game) {
  if (!game.runStats) return null;
  const now = performance.now() / 1000;
  return {
    ...game.runStats,
    durationSec: Math.max(0, now - game.runStats.startedAt),
    goldEarned: game.gold - game.runStats.goldAtStart,
    cardCount: game.deck?.picked?.length || 0,
    relicCount: game.relics?.picked?.length || 0,
    bestiaryBonus: game.run?.bestiaryDamageBonus || 0,
    bestiaryDiscovered: [...(game.run?.bestiaryDiscovered || [])],
    outcome: game.screen,
  };
}

export function formatRunEndReportHtml(stats, helpers) {
  if (!stats) return "";

  const towerRows = Object.entries(stats.damageByTower || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, dmg]) => {
      const name = helpers.towerNameById(id) || `Tour #${id}`;
      return `<tr><td>${helpers.escape(name)}</td><td><strong>${Math.round(dmg).toLocaleString()}</strong></td></tr>`;
    })
    .join("");

  const killRows = Object.entries(stats.killsByType || {})
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => {
      const label = helpers.enemyNameByType(type) || type;
      return `<li>${helpers.escape(label)} : <strong>${count}</strong></li>`;
    })
    .join("");

  const dmgTable = towerRows
    ? `<table class="wave-report-table run-end-table"><thead><tr><th>Tour</th><th>Dégâts</th></tr></thead><tbody>${towerRows}</tbody></table>`
    : "";

  const bestiaryLine = stats.bestiaryDiscovered?.length
    ? `<li><strong>Bestiaire :</strong> ${stats.bestiaryDiscovered.length} type(s) découvert(s) (+${Math.round((stats.bestiaryBonus || 0) * 100)} % dégâts)</li>`
    : "";

  const mins = Math.floor(stats.durationSec / 60);
  const secs = Math.round(stats.durationSec % 60);

  return `
    <div class="run-end-report">
      <ul class="wave-report-summary run-end-summary">
        <li><strong>Kills :</strong> ${stats.totalKills}</li>
        <li><strong>Fuites :</strong> ${stats.totalLeaks}</li>
        <li><strong>Vagues :</strong> ${stats.wavesCleared}</li>
        <li><strong>Soleil gagné :</strong> +${Math.max(0, stats.goldEarned)}</li>
        <li><strong>Deck :</strong> ${stats.cardCount} cartes · ${stats.relicCount} reliques</li>
        <li><strong>Durée :</strong> ${mins > 0 ? `${mins} min ` : ""}${secs} s</li>
        ${bestiaryLine}
      </ul>
      ${dmgTable ? `<h3 class="run-end-subtitle">Top tours</h3>${dmgTable}` : ""}
      ${killRows ? `<h3 class="run-end-subtitle">Proies abattues</h3><ul class="run-end-kills">${killRows}</ul>` : ""}
    </div>`;
}
