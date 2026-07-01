function pickWeighted(weights, fallbackPool, rng = Math.random) {
  const entries = Object.entries(weights || {}).filter(([, w]) => w > 0);
  if (!entries.length) {
    return fallbackPool[Math.floor(rng() * fallbackPool.length)] || "combat";
  }
  let total = 0;
  for (const [, w] of entries) total += w;
  let roll = rng() * total;
  for (const [type, w] of entries) {
    roll -= w;
    if (roll <= 0) return type;
  }
  return entries[entries.length - 1][0];
}

export function rollCrossroadsFloor(maxFloors, laneConfig, rng = Math.random) {
  const cfg = laneConfig?.crossroads || {};
  const min = cfg.minFloor ?? 2;
  const max = maxFloors - (cfg.maxFloorOffset ?? 3);
  if (max <= min) return min;
  return min + Math.floor(rng() * (max - min + 1));
}

/**
 * @returns {{ map: string[][], crossroadsFloor: number|null }}
 */
export function generateSpireMap({
  maxFloors,
  mapNodePool,
  laneConfig,
  rng = Math.random,
}) {
  const pool = mapNodePool?.length
    ? mapNodePool
    : ["combat", "combat", "event", "rest", "shop", "elite"];
  const lanes = laneConfig?.lanes || [];
  const crossroadsFloor = rollCrossroadsFloor(maxFloors, laneConfig, rng);
  const map = [];

  for (let floor = 0; floor < maxFloors; floor += 1) {
    if (floor === 0) {
      map.push(["combat", "combat", "combat"]);
      continue;
    }
    if (floor === maxFloors - 1) {
      map.push(["boss", "boss", "boss"]);
      continue;
    }
    if (floor === crossroadsFloor) {
      map.push(["crossroads", "crossroads", "crossroads"]);
      continue;
    }
    const row = [];
    for (let lane = 0; lane < 3; lane += 1) {
      const laneDef = lanes[lane];
      const type = pickWeighted(laneDef?.weights, pool, rng);
      row.push(type);
    }
    map.push(row);
  }

  return { map, crossroadsFloor };
}

export function getLaneAffinityHint(lane, laneConfig) {
  return laneConfig?.lanes?.[lane]?.hint || "";
}

export function getLaneEncounterHpMult(lane, laneConfig) {
  return laneConfig?.lanes?.[lane]?.encounterHpMult ?? 1;
}

export function getLaneDef(lane, laneConfig) {
  return laneConfig?.lanes?.[lane] ?? null;
}

export function getLaneEventLaneTag(lane, laneConfig) {
  return getLaneDef(lane, laneConfig)?.eventLaneTag || null;
}

export function getLaneEventUniqueBias(lane, laneConfig) {
  return getLaneDef(lane, laneConfig)?.eventUniqueBias ?? 0;
}

export function laneGuaranteesWaveModifier(lane, laneConfig) {
  return Boolean(getLaneDef(lane, laneConfig)?.guaranteedWaveModifier);
}

/** Type de nœud à l'étage floor+offset sur le couloir lane. */
export function getPreviewNodeType(map, floor, lane, maxFloors, offset = 2) {
  const target = floor + offset;
  if (target >= maxFloors - 1) return "boss";
  if (target < 0 || !map[target]) return null;
  return map[target][lane] ?? null;
}

/** Aperçu multi-etages pour la carte (etages +1, +2, +3). */
export function getMapLanePreview(map, floor, lane, maxFloors) {
  const steps = [];
  for (const offset of [1, 2, 3]) {
    const type = getPreviewNodeType(map, floor, lane, maxFloors, offset);
    if (!type) continue;
    steps.push({ floor: floor + offset + 1, type });
  }
  return steps;
}
