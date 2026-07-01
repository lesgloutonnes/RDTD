export function computeEncounterStats({ nodeType, floor, floorScaling, biome }) {
  const floorScale = floorScaling[Math.min(floor, floorScaling.length - 1)];
  if (nodeType === "elite") {
    return {
      hpMult: floorScale.hp * biome.hp * 1.42,
      speedMult: floorScale.speed * biome.speed,
      rewardMult: floorScale.reward * biome.reward * 1.55,
      countBonus: floorScale.count + 2,
      towerRangeBonus: biome.towerRange,
      towerFireRateMult: biome.towerFireRate,
    };
  }
  if (nodeType === "boss") {
    return {
      hpMult: floorScale.hp * biome.hp * 2.08,
      speedMult: floorScale.speed * biome.speed * 0.94,
      rewardMult: floorScale.reward * biome.reward * 2.35,
      countBonus: floorScale.count + 2,
      towerRangeBonus: biome.towerRange,
      towerFireRateMult: biome.towerFireRate,
    };
  }
  return {
    hpMult: floorScale.hp * biome.hp,
    speedMult: floorScale.speed * biome.speed,
    rewardMult: floorScale.reward * biome.reward,
    countBonus: floorScale.count,
    towerRangeBonus: biome.towerRange,
    towerFireRateMult: biome.towerFireRate,
  };
}

export function pickEncounterEnemy(floor, spireNumber = 1, enemyDefs = {}, rng = Math.random) {
  const entries = Object.entries(enemyDefs)
    .filter(([id, def]) => id !== "boss" && floor >= (def.spawnMinFloor ?? 0))
    .filter(([, def]) => (def.spawnMinSpire ?? 1) <= spireNumber)
    .map(([id, def]) => ({
      id,
      weight: (def.spawnWeight ?? 0.1) * (1 + floor * 0.04),
    }));

  if (!entries.length) return "crawler";

  let total = 0;
  for (const e of entries) total += e.weight;
  let roll = rng() * total;
  for (const e of entries) {
    roll -= e.weight;
    if (roll <= 0) return e.id;
  }
  return entries[entries.length - 1].id;
}

export function generateEncounterQueueByFloor({
  floor,
  nodeType,
  countBonus,
  floorScaling,
  spireNumber = 1,
  enemyDefs = {},
  rng = Math.random,
}) {
  const floorScale = floorScaling[Math.min(floor, floorScaling.length - 1)];
  const count = 9 + (floor + 1) * 2 + countBonus;
  const queue = [];
  for (let i = 0; i < count; i += 1) {
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
  }
  if (nodeType === "elite") {
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
  }
  if (nodeType === "boss") queue.push("boss");
  return queue;
}
