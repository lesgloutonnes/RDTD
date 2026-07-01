import { SPIRE_BIOME_FLOOR_OFFSET } from "../config/balance.js";

/**
 * Sélection de biome par étage et Spire.
 * @param {number} floor — index 0..max-1
 * @param {number} spireNumber — 1..3
 * @param {Array} biomes — liste BIOMES
 * @param {number} bossFloorIndex — étage boss (ex. 7)
 */
export function pickBiomeForFloor(floor, spireNumber, biomes, bossFloorIndex) {
  if (!biomes?.length) return null;
  if (floor >= bossFloorIndex) {
    return biomes[biomes.length - 1];
  }
  const offset = SPIRE_BIOME_FLOOR_OFFSET[spireNumber] ?? SPIRE_BIOME_FLOOR_OFFSET[3];
  const idx = Math.min(Math.floor(floor / 2) + offset, biomes.length - 2);
  return biomes[idx];
}
