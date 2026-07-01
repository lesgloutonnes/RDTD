import { BOSS_ENRAGE_DAMAGE_MULT, BOSS_SHIELD_DAMAGE_MULT } from "../config/balance.js";

/** Mécaniques elite/boss pilotées par content/encounters.json */

export function getEncounterMechanics(encounterConfig, nodeType, biomeId = null) {
  if (nodeType === "elite") return encounterConfig.elite;
  if (nodeType === "boss") {
    return encounterConfig.bossByBiome?.[biomeId] || encounterConfig.boss;
  }
  return null;
}

export function applyEliteTraits(enemy, mechanics) {
  if (!mechanics || enemy.typeKey === "boss") return;
  if (mechanics.armorMult) {
    enemy.armorShredMult = 1;
    enemy.damageReduction = mechanics.armorMult;
  }
  // Régénération plate (PV/s), distincte de regenPerSec (% max PV/s sur escargot).
  if (mechanics.regenPerSec) enemy.flatRegenPerSec = mechanics.regenPerSec;
}

export function applyBossTraits(enemy, mechanics) {
  if (!mechanics?.phases?.length) return;
  enemy.bossPhaseIndex = 0;
  enemy.bossPhases = mechanics.phases;
  enemy.bossShield = 0;
  enemy.bossEnraged = false;
  enemy.isBoss = true;
}

export function updateBossPhases(enemy, mechanics, helpers) {
  if (!enemy.isBoss || !enemy.bossPhases) return;
  const hpRatio = enemy.hp / enemy.maxHp;
  let phaseIndex = enemy.bossPhaseIndex;
  while (
    phaseIndex < enemy.bossPhases.length - 1
    && hpRatio <= enemy.bossPhases[phaseIndex + 1].hpRatio
  ) {
    phaseIndex += 1;
  }
  if (phaseIndex !== enemy.bossPhaseIndex) {
    const phase = enemy.bossPhases[phaseIndex];
    enemy.bossPhaseIndex = phaseIndex;
    enemy.speed *= phase.speedMult || 1;
    if (phase.shieldSeconds) enemy.bossShield = phase.shieldSeconds;
    if (phase.spawnAdds?.length) helpers.spawnAdds(phase.spawnAdds, enemy);
    if (phaseIndex >= enemy.bossPhases.length - 1) enemy.bossEnraged = true;
    helpers.onPhaseChange(phase, enemy);
  }
  if (enemy.bossShield > 0) {
    enemy.bossShield = Math.max(0, enemy.bossShield - helpers.dt);
  }
}

export function computeDamageToEnemy(enemy, rawDamage) {
  let dmg = rawDamage;
  if (enemy.abilities?.includes("mucus")) dmg *= 0.9;
  if (enemy.damageReduction) dmg *= enemy.damageReduction;
  if (enemy.bossShield > 0) dmg *= BOSS_SHIELD_DAMAGE_MULT;
  if (enemy.bossEnraged && enemy.bossPhaseIndex >= 2) dmg *= BOSS_ENRAGE_DAMAGE_MULT;
  return dmg;
}

export function extendEncounterQueue(queue, nodeType, mechanics) {
  if (nodeType === "elite" && mechanics?.extraBeetles) {
    for (let i = 0; i < mechanics.extraBeetles; i += 1) queue.push("beetle");
  }
  return queue;
}
