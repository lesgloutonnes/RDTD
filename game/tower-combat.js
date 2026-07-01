import {
  CREAMSICLE_AURA_COOLDOWN_ACCEL,
  CRIT_CHANCE_CAP,
  FUREUR_RAGE_PER_STACK,
  SKILLS,
} from "../config/balance.js";

export function updateTowerCombat(game, {
  biome,
  distance,
  distanceSq,
  getBossTempTowerMods,
  getCreamsicleAuraRange,
  getTowerFireRateRatio,
  getTowerPierceCount,
  getTowerPoisonDps,
  getTowerRange,
  playSound,
  sfx,
  towerTypes,
  worldPosOfEnemy,
}, dt) {
  const boostFireRate = game.skills.boost.active > 0 ? SKILLS.boost.fireRateMult : 1;
  const boostDmg = game.skills.boost.active > 0 ? SKILLS.boost.damageMult : 1;

  game.towers.forEach((tower) => {
    tower.cooldown -= dt;
    if (tower.cooldown > 0) return;

    let target = null;
    let bestProgress = -1;
    const range = getTowerRange(tower);
    const rangeSq = range * range;
    for (const enemy of game.enemies) {
      const pos = worldPosOfEnemy(enemy);
      if (distanceSq(pos, tower) > rangeSq) continue;
      const progress = enemy.segment + enemy.t;
      if (progress > bestProgress) {
        bestProgress = progress;
        target = enemy;
      }
    }
    if (!target) return;

    const syn = game.deckSynergy?.mods || {};
    const bossMods = getBossTempTowerMods(game);
    const fireRate =
      tower.fireRate
      * game.modifiers.globalFireRate
      * boostFireRate
      * (game.encounter.towerFireRateMult || 1)
      * (syn.globalFireRate || 1)
      * bossMods.fireRateMult;
    tower.cooldown = 1 / fireRate;

    let damage = tower.damage * game.modifiers.globalDamage * boostDmg;
    if (syn.globalDamage) damage *= syn.globalDamage;
    const family = tower.family || tower.typeKey;
    if (family === "snapper") {
      damage *= game.modifiers.snapperDamage * (syn.snapperDamage || 1) * bossMods.snapperMult;
    }
    if (family === "spitter") damage *= game.modifiers.spitterDamage;
    if (family === "thorn") {
      damage *= game.modifiers.thornDamage * (syn.thornDamage || 1) * bossMods.thornMult;
    }
    if (biome.id === "heart" && family === "snapper") damage *= 1.12;
    if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
      damage *= 1 + tower.rageStacks * FUREUR_RAGE_PER_STACK;
    }
    if (tower.typeKey === "dionaea_b52" && game.modifiers.b52DamageBonus) {
      damage *= game.modifiers.b52DamageBonus;
    }

    const critChance = game.modifiers.critChance + (syn.critChance || 0) + bossMods.critBonus;
    const crit = Math.random() < Math.min(critChance, CRIT_CHANCE_CAP);
    if (crit) damage *= game.modifiers.critMult;

    if (target.armorShredTime > 0 && target.armorShredMult) {
      damage *= target.armorShredMult;
    }

    const poisonDps = getTowerPoisonDps(tower, game, syn, towerTypes);

    let pierceLeft = 0;
    if (tower.typeKey === "dionaea_white_tiger") {
      pierceLeft = getTowerPierceCount(tower, game, towerTypes) - 1;
    }

    game.projectiles.push({
      x: tower.x,
      y: tower.y,
      towerRef: tower,
      towerId: tower.id,
      targetId: target.id,
      speed: tower.projectileSpeed * game.modifiers.projectileSpeedMult,
      damage,
      color: tower.projectileColor,
      trailColor: tower.color,
      life: 1.8,
      poisonDps,
      crit,
      passive: tower.passive,
      pierceLeft,
    });
    if (sfx?.towerShot) sfx.towerShot(tower);
    else playSound(tower.soundFreq, 0.04, "triangle", 0.012);
  });

  game.towers.forEach((tower) => {
    if (tower.typeKey !== "drosera_creamsicle") return;
    const auraRange = getCreamsicleAuraRange(game, tower, towerTypes);
    game.towers.forEach((other) => {
      if (other.id === tower.id) return;
      if (distance(tower, other) <= auraRange) {
        const hasteAccel = CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(tower, towerTypes);
        other.cooldown = Math.max(0, other.cooldown - dt * hasteAccel);
      }
    });
  });
}
