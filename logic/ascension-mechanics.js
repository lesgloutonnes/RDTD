import { getAscensionTorment } from "../config/ascension.js";

/** Applique les afflictions Tourment sur game.run (mode Ascension). */
export function applyTormentToRun(game, level = 1) {
  const torment = getAscensionTorment(level);
  game.run.tormentLevel = torment.level;
  game.run.tormentForcedWaveModifier = Boolean(torment.forcedCombatWaveModifier);
  game.run.tormentShopPriceMult = torment.shopPriceMult ?? 1;
  game.run.tormentRestHealMult = torment.restHealMult ?? 1;
  game.run.tormentEnemyCountMult = torment.enemyCountMult ?? 1;
  game.run.tormentEliteDamageReduction = torment.eliteDamageReduction ?? 1;
  game.run.tormentEnemyDamageReduction = torment.enemyDamageReduction ?? 1;
  game.run.tormentTowerRangeBonus = torment.towerRangeBonus ?? 0;
  game.run.tormentTowerFireRateMult = torment.towerFireRateMult ?? 1;
  game.run.tormentSpawnIntervalMult = torment.spawnIntervalMult ?? 1;
  game.run.tormentMapEliteWeightMult = torment.mapEliteWeightMult ?? 1;
  game.run.tormentExtraLeakElite = torment.extraLeakLivesElite ?? 0;
  game.run.tormentExtraLeakBoss = torment.extraLeakLivesBoss ?? 0;
  game.run.tormentMaxLivesPenalty = torment.maxLivesPenalty ?? 0;
  game.run.tormentEliteExtraSpawn = torment.eliteExtraSpawn ?? 0;
}

export function applyTormentMaxLivesPenalty(game) {
  const penalty = game.run?.tormentMaxLivesPenalty || 0;
  if (!penalty) return;
  game.maxLives = Math.max(6, game.maxLives + penalty);
  game.lives = Math.min(game.lives, game.maxLives);
}

export function applyTormentEncounterPenalties(encounter, game) {
  if (game.run?.mode !== "ascension") return;
  const rangeBonus = game.run.tormentTowerRangeBonus ?? 0;
  const fireMult = game.run.tormentTowerFireRateMult ?? 1;
  if (rangeBonus) {
    encounter.towerRangeBonus = (encounter.towerRangeBonus || 0) + rangeBonus;
  }
  if (fireMult !== 1) {
    encounter.towerFireRateMult = (encounter.towerFireRateMult || 1) * fireMult;
  }
}

export function shouldForceTormentWaveModifier(game, nodeType) {
  if (game.run?.mode !== "ascension") return false;
  if (!game.run.tormentForcedWaveModifier) return false;
  return nodeType === "combat" || nodeType === "elite" || nodeType === "boss";
}

export function getTormentShopPriceMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentShopPriceMult ?? 1;
}

export function getTormentRestHealMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentRestHealMult ?? 1;
}

export function getTormentSpawnIntervalMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentSpawnIntervalMult ?? 1;
}

export function getTormentEnemyCountMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentEnemyCountMult ?? 1;
}

/** Vies perdues en plus lors d'une fuite (0 = comportement normal). */
export function getTormentExtraLeakLives(game, { nodeType, bossBreach = false } = {}) {
  if (game.run?.mode !== "ascension" || bossBreach) return 0;
  if (nodeType === "boss") return game.run.tormentExtraLeakBoss ?? 0;
  if (nodeType === "elite") return game.run.tormentExtraLeakElite ?? 0;
  return 0;
}

export function applyTormentEnemyTraits(enemy, game) {
  if (game.run?.mode !== "ascension" || enemy.typeKey === "boss") return;
  const nodeType = game.spire?.currentNodeType;
  let reduction = game.run.tormentEnemyDamageReduction ?? 1;
  if (nodeType === "elite") {
    reduction = Math.min(reduction, game.run.tormentEliteDamageReduction ?? 1);
  }
  if (reduction < 1) {
    enemy.damageReduction = Math.min(enemy.damageReduction ?? 1, reduction);
  }
}

export function applyTormentToLaneConfig(laneConfig, eliteWeightMult = 1) {
  if (!eliteWeightMult || eliteWeightMult === 1) return laneConfig;
  const lanes = (laneConfig.lanes || []).map((lane) => {
    if (!lane.weights?.elite) return lane;
    return {
      ...lane,
      weights: {
        ...lane.weights,
        elite: Math.max(1, Math.round(lane.weights.elite * eliteWeightMult)),
      },
    };
  });
  return { ...laneConfig, lanes };
}

export function extendQueueForTorment(queue, game, {
  nodeType,
  pickEncounterEnemy,
  floor,
  spireNumber,
  enemyDefs,
  rng,
}) {
  if (game.run?.mode !== "ascension") return queue;
  const countMult = game.run.tormentEnemyCountMult ?? 1;
  let out = queue.slice();
  if (countMult > 1) {
    const target = Math.max(out.length, Math.round(out.length * countMult));
    while (out.length < target) {
      out.push(
        pickEncounterEnemy(floor, spireNumber, enemyDefs, rng)
        || out[Math.floor(rng() * out.length)]
        || "beetle",
      );
    }
  }
  const extraElite = game.run.tormentEliteExtraSpawn ?? 0;
  if (extraElite > 0 && nodeType === "elite") {
    for (let i = 0; i < extraElite; i += 1) {
      out.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng) || "beetle");
    }
  }
  return out;
}
