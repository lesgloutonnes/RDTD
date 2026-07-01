import {
  TOWER_UPGRADE_DAMAGE_MULT,
  TOWER_UPGRADE_FIRE_RATE_MULT,
  TOWER_UPGRADE_PROJECTILE_SPEED_MULT,
  TOWER_UPGRADE_RANGE_MULT,
} from "../config/balance.js";

export const TOWER_MAX_LEVEL = 3;
export const TOWER_UPGRADE_COST_RATE = 0.82;
export const TOWER_SELL_REFUND_RATE = 0.7;

export function createTowerFromType(typeKey, type, pad, id) {
  return {
    id,
    typeKey,
    name: type.name,
    family: type.family || typeKey,
    passive: type.passive || null,
    x: pad.x,
    y: pad.y,
    level: 1,
    baseCost: type.cost,
    investedGold: type.cost,
    range: type.range,
    fireRate: type.fireRate,
    damage: type.damage,
    projectileSpeed: type.projectileSpeed,
    color: type.color,
    projectileColor: type.projectileColor,
    soundFreq: type.soundFreq,
    cooldown: 0.15,
    padRef: pad,
    rageStacks: 0,
  };
}

export function getUpgradeCost(tower) {
  return Math.round(tower.baseCost * TOWER_UPGRADE_COST_RATE * tower.level);
}

export function getTowerSellRefund(tower) {
  return Math.round(tower.investedGold * TOWER_SELL_REFUND_RATE);
}

export function needsSellConfirmation(tower) {
  return tower.level > 1 || tower.investedGold > tower.baseCost * 1.05;
}

export function canUpgradeTower(tower) {
  return Boolean(tower) && tower.level < TOWER_MAX_LEVEL;
}

export function applyTowerUpgrade(tower, cost) {
  tower.investedGold += cost;
  tower.level += 1;
  tower.damage *= TOWER_UPGRADE_DAMAGE_MULT;
  tower.range *= TOWER_UPGRADE_RANGE_MULT;
  tower.fireRate *= TOWER_UPGRADE_FIRE_RATE_MULT;
  tower.projectileSpeed *= TOWER_UPGRADE_PROJECTILE_SPEED_MULT;
  return tower;
}
