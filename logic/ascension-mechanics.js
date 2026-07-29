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
  game.run.tormentEliteChampionChance = torment.eliteChampionChance ?? 0;
  game.run.tormentEliteChampionMax = torment.eliteChampionMax ?? 1;
  game.run.tormentEliteBossChance = torment.eliteBossChance ?? 0;
  game.run.tormentEliteChampionShieldMult = torment.eliteChampionShieldMult ?? 1;
  game.run.tormentEliteBossHpMult = torment.eliteBossHpMult ?? 0.6;
  game.run.tormentBossNodeBossCount = torment.bossNodeBossCount ?? 1;
  game.run.tormentTowerCapByFloor = Boolean(torment.towerCapByFloor);
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

/**
 * Plafond de tours en Tourment : étage 1 → 1 tour, étage 2 → 2, etc.
 * @returns {number|null} null = pas de plafond
 */
export function getTormentTowerCap(game) {
  if (game.run?.mode !== "ascension") return null;
  if (!game.run.tormentTowerCapByFloor) return null;
  return Math.max(1, (game.spire?.floor ?? 0) + 1);
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

/** Champion élite Tourment : gros bouclier de vie jaune (pool séparé). */
export function tryPromoteTormentChampion(enemy, game) {
  if (game.run?.mode !== "ascension") return false;
  if (game.spire?.currentNodeType !== "elite") return false;
  if (enemy.typeKey === "boss" || enemy.isBoss) return false;

  const maxChampions = Math.max(1, game.run.tormentEliteChampionMax ?? 1);
  const spawned = game.tormentChampionsSpawned || 0;
  if (spawned >= maxChampions) return false;

  const chance = game.run.tormentEliteChampionChance ?? 0;
  if (chance <= 0) return false;
  const rng = typeof game.run._rng === "function" ? game.run._rng : Math.random;
  if (rng() > chance) return false;

  const shieldMult = game.run.tormentEliteChampionShieldMult ?? 1;
  const shield = Math.max(24, Math.round(enemy.maxHp * shieldMult));
  enemy.isTormentChampion = true;
  enemy.lifeShield = shield;
  enemy.maxLifeShield = shield;
  enemy.radius = Math.round(enemy.radius * 1.18);
  enemy.reward = Math.round(enemy.reward * 1.55);
  enemy.color = "#d4a017";
  game.tormentChampionsSpawned = spawned + 1;
  if (game.waveStats) {
    game.waveStats.tormentChampionsSpawned = game.tormentChampionsSpawned;
  }
  return true;
}

/** Boss spawné sur nœud élite en Tourment : plus faible qu'un boss d'étage. */
export function applyTormentEliteBossNerf(enemy, game) {
  if (game.run?.mode !== "ascension") return;
  if (game.spire?.currentNodeType !== "elite") return;
  if (enemy.typeKey !== "boss" && !enemy.isBoss) return;
  const hpMult = game.run.tormentEliteBossHpMult ?? 0.6;
  enemy.hp = Math.max(40, Math.round(enemy.hp * hpMult));
  enemy.maxHp = enemy.hp;
  enemy.reward = Math.max(20, Math.round(enemy.reward * 0.7));
  enemy.isEliteBoss = true;
  enemy.radius = Math.round((enemy.radius || 22) * 0.92);
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
      const fillers = out.filter((id) => id !== "boss");
      out.push(
        pickEncounterEnemy(floor, spireNumber, enemyDefs, rng)
        || (fillers.length ? fillers[Math.floor(rng() * fillers.length)] : null)
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
  // Tourment : boss possible (voire fréquent) sur les nœuds élite.
  if (nodeType === "elite") {
    const bossChance = game.run.tormentEliteBossChance ?? 0;
    if (bossChance > 0 && rng() < bossChance && !out.includes("boss")) {
      out.push("boss");
    }
  }
  // Nœud boss : 2–3 boss selon le niveau de Tourment.
  if (nodeType === "boss") {
    const want = Math.max(1, game.run.tormentBossNodeBossCount ?? 1);
    let have = out.filter((id) => id === "boss").length;
    while (have < want) {
      out.push("boss");
      have += 1;
    }
  }
  return out;
}
