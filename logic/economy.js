import {
  KILL_REWARD_BASE,
  KILL_REWARD_PER_FLOOR,
  WAVE_CLEAR_GOLD,
  SPIRE_BIOME_PRESSURE,
  SPIRE_SURPLUS_GOLD_SCORE_RATE,
} from "../config/balance.js";

export function getKillRewardBase(floorIndex) {
  return KILL_REWARD_BASE + (floorIndex + 1) * KILL_REWARD_PER_FLOOR;
}

export function getWaveClearGold(nodeType) {
  return WAVE_CLEAR_GOLD[nodeType] ?? WAVE_CLEAR_GOLD.combat;
}

export function getSpireBiomePressure(spireNumber) {
  return SPIRE_BIOME_PRESSURE[spireNumber] || SPIRE_BIOME_PRESSURE[3];
}

/** Fusionne biome JSON + pression Spire pour computeEncounterStats. */
export function mergeBiomeWithSpirePressure(biome, spireNumber) {
  const p = getSpireBiomePressure(spireNumber);
  return {
    ...biome,
    hp: biome.hp * p.hp,
    speed: biome.speed * p.speed,
    reward: biome.reward * p.reward,
  };
}

/**
 * Fin de Spire : budget remis au depart de la suivante, excedant converti en score.
 * @returns {{ newGold: number, excessGold: number, scoreGain: number }}
 */
export function settleSpireGoldForNextSpire(currentGold, nextSpireStartingGold, rate = SPIRE_SURPLUS_GOLD_SCORE_RATE) {
  const excessGold = Math.max(0, currentGold - nextSpireStartingGold);
  const scoreGain = Math.round(excessGold * rate);
  return {
    newGold: nextSpireStartingGold,
    excessGold,
    scoreGain,
  };
}
