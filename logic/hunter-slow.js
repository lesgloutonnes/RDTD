import { GARDIEN_ULTIMATE_MAP_SNARE } from "../config/balance.js";

/** Ralentissement plus fort : mult vitesse plus bas (ex. 0,68 → ~0,64 avec +12 %). */
export function strengthenSlowMult(slowMult, potency = 1) {
  if (!potency || potency <= 1 || slowMult >= 1) return slowMult;
  return 1 - (1 - slowMult) * potency;
}

export function getSnareSlowFactor(baseFactor, snareSlowFactorMult = 1) {
  return baseFactor * snareSlowFactorMult;
}

export function triggerHunterUltimateMapSnare(game) {
  game.run.collectorMapSnareRemaining = GARDIEN_ULTIMATE_MAP_SNARE.duration;
}

export function tickCollectorMapSnare(game, dt) {
  if (!(game.run.collectorMapSnareRemaining > 0)) return;
  game.run.collectorMapSnareRemaining = Math.max(0, game.run.collectorMapSnareRemaining - dt);
}

export function applyCollectorMapSnareToEnemy(enemy, game) {
  if (!(game.run.collectorMapSnareRemaining > 0)) return;
  const mult = strengthenSlowMult(
    GARDIEN_ULTIMATE_MAP_SNARE.slowMult,
    game.modifiers.slowPotency || 1
  );
  enemy.slowTime = Math.max(enemy.slowTime || 0, game.run.collectorMapSnareRemaining);
  enemy.slowMult = Math.min(enemy.slowMult ?? 1, mult);
}

export function applySlowToEnemy(enemy, slowMult, duration, game) {
  const mult = strengthenSlowMult(slowMult, game.modifiers.slowPotency || 1);
  enemy.slowMult = Math.min(enemy.slowMult ?? 1, mult);
  enemy.slowTime = Math.max(enemy.slowTime || 0, duration);
}
