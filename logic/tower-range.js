import { TOWER_UPGRADE_RANGE_MULT } from "../config/balance.js";
import { getBossTempTowerMods } from "./boss-temp-cards.js";
import { TOWER_MAX_LEVEL } from "./tower-model.js";

export const TOWER_MIN_RANGE = 70;

export function getEffectiveTowerRange(tower, {
  game,
  rangeOverride,
}) {
  const family = tower.family || tower.typeKey;
  const bossMods = getBossTempTowerMods(game);
  let range = (rangeOverride ?? tower.range)
    + game.modifiers.globalRange
    + (game.encounter.towerRangeBonus || 0);
  range *= 1 + (bossMods.rangeBonus || 0);
  if (family === "thorn") {
    range += game.modifiers.thornRange + (game.deckSynergy?.mods?.thornRange || 0);
  }
  return Math.max(TOWER_MIN_RANGE, range);
}

export function getTowerTypePreviewRange(typeKey, {
  game,
  towerTypes,
}) {
  const type = towerTypes[typeKey];
  if (!type) return TOWER_MIN_RANGE;
  return getEffectiveTowerRange({
    typeKey,
    family: type.family || typeKey,
    range: type.range,
  }, { game });
}

export function getTowerUpgradePreviewRange(tower, {
  game,
}) {
  if (!tower || tower.level >= TOWER_MAX_LEVEL) return null;
  return getEffectiveTowerRange(tower, {
    game,
    rangeOverride: tower.range * TOWER_UPGRADE_RANGE_MULT,
  });
}
