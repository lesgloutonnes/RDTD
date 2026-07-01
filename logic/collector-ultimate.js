import { GARDIEN_ULTIMATE_MAP_SNARE } from "../config/balance.js";
import {
  applyCollectorMapSnareToEnemy,
  triggerHunterUltimateMapSnare,
} from "./hunter-slow.js";

export function canUseCollectorUltimate(game) {
  return !game.collectorUltimate?.usedThisSpire;
}

export function resetCollectorUltimateForSpire(game) {
  game.collectorUltimate = { usedThisSpire: false };
}

/**
 * Active l'ultime du collectionneur (1× par Spire).
 * @returns {{ ok: boolean, message: string }}
 */
export function activateCollectorUltimate(game, collector, helpers) {
  if (!collector?.ultimateId) {
    return { ok: false, message: "Ce collectionneur n'a pas d'ultime." };
  }
  if (game.collectorUltimate?.usedThisSpire) {
    return { ok: false, message: "Ultime deja utilise sur cette Spire." };
  }
  if (game.screen !== "playing") {
    return { ok: false, message: "Utilisable en combat seulement." };
  }

  const id = collector.ultimateId;
  game.collectorUltimate.usedThisSpire = true;

  if (id === "herbier_burst") {
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("ULTIME +120 soleil!", game.canvas?.width / 2 - 60 || 400, 120, "#ffe87a");
    return { ok: true, message: "Charles : +120 soleil immediatement." };
  }

  if (id === "distiller_burst") {
    game.skills.boost.timer = 0;
    game.skills.boost.active = game.skills.boost.duration + (game.modifiers.boostDurationBonus || 0);
    game.skills.snare.timer = 0;
    game.skills.snare.active = game.skills.snare.duration + (game.modifiers.snareDurationBonus || 0);
    game.modifiers.spitterPoison += 8;
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("ULTIME DISTILL!", game.canvas?.width / 2 - 50 || 400, 120, "#8fe275");
    return { ok: true, message: "Mayeu : competences activees + poison renforce." };
  }

  if (id === "gardien_burst") {
    const heal = Math.round(game.maxLives * 0.45);
    game.lives = Math.min(game.maxLives, game.lives + heal);
    triggerHunterUltimateMapSnare(game);
    for (const enemy of game.enemies) {
      applyCollectorMapSnareToEnemy(enemy, game);
    }
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("GEL DE SERRE!", game.canvas?.width / 2 - 55 || 400, 100, "#a8e8ff");
    helpers.createFloatText?.(`+${heal} PV`, game.canvas?.width / 2 - 20 || 400, 120, "#d7ffd4");
    return {
      ok: true,
      message: `Chris : +${heal} vies et ralentissement global (${GARDIEN_ULTIMATE_MAP_SNARE.duration} s).`,
    };
  }

  return { ok: false, message: "Ultime inconnu." };
}
