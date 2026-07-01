export function beginWaveStats(game) {
  game.waveStats = {
    startedAt: performance.now() / 1000,
    leaks: 0,
    kills: 0,
    goldAtStart: game.gold,
    damageByTower: {},
    damageByFamily: {},
  };
}

export function recordTowerDamage(game, towerId, amount, familyId = null) {
  if (!game.waveStats || !towerId) return;
  const key = String(towerId);
  game.waveStats.damageByTower[key] = (game.waveStats.damageByTower[key] || 0) + amount;
  if (familyId) {
    game.waveStats.damageByFamily[familyId] = (game.waveStats.damageByFamily[familyId] || 0) + amount;
  }
}

export function recordWaveLeak(game) {
  if (game.waveStats) game.waveStats.leaks += 1;
}

export function recordWaveKill(game) {
  if (game.waveStats) game.waveStats.kills += 1;
}

export function finalizeWaveStats(game) {
  if (!game.waveStats) return null;
  const now = performance.now() / 1000;
  return {
    ...game.waveStats,
    durationSec: now - game.waveStats.startedAt,
    goldEarned: game.gold - game.waveStats.goldAtStart,
  };
}

export function formatWaveReportHtml(stats, towerNameById) {
  if (!stats) return "<p>Aucune statistique.</p>";
  const rows = Object.entries(stats.damageByTower || {})
    .sort((a, b) => b[1] - a[1])
    .map(([id, dmg]) => {
      const name = towerNameById(id) || `Tour #${id}`;
      return `<tr><td>${name}</td><td><strong>${Math.round(dmg).toLocaleString()}</strong></td></tr>`;
    })
    .join("");

  const dmgTable = rows
    ? `<table class="wave-report-table"><thead><tr><th>Tour</th><th>Degats</th></tr></thead><tbody>${rows}</tbody></table>`
    : "<p class='leaderboard-empty'>Aucun degat enregistre.</p>";

  return `
    <ul class="wave-report-summary">
      <li><strong>Kills :</strong> ${stats.kills}</li>
      <li><strong>Fuites :</strong> ${stats.leaks}</li>
      <li><strong>Soleil gagne :</strong> +${Math.max(0, stats.goldEarned)}</li>
      <li><strong>Duree :</strong> ${stats.durationSec.toFixed(1)} s</li>
    </ul>
    <h3 style="margin:12px 0 6px;font-size:0.95rem">Degats par tour</h3>
    ${dmgTable}
  `;
}
