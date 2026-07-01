/** Capacites ennemies definies dans content/enemies.json (champ abilities). */

export function applyEnemyAbilities(enemy, enemyType) {
  const abilities = enemyType?.abilities || [];
  enemy.abilities = abilities;
  if (abilities.includes("spawn_shield")) {
    enemy.hitShield = enemy.hitShield ?? 4;
  }
  if (abilities.includes("dash")) {
    enemy.dashInterval = 2.4;
    enemy.dashTimer = 1.2;
    enemy.dashBoostSec = 0;
  }
  if (abilities.includes("split_on_death")) {
    enemy.canSplit = !enemy._isSplitChild;
  }
  if (abilities.includes("regen")) {
    enemy.regenPerSec = 0.012;
  }
  if (abilities.includes("sting")) {
    enemy.stingRewardBonus = 1.12;
  }
}

/** Réduction de dégâts passive (mucus, etc.). */
export function applyEnemyDamageReduction(enemy, rawDamage) {
  let dmg = rawDamage;
  if (enemy.abilities?.includes("mucus")) dmg *= 0.9;
  if (enemy.damageReduction) dmg *= enemy.damageReduction;
  return dmg;
}

/** Régénération passive (escargot). */
export function tickEnemyRegen(enemy, dt) {
  if (!enemy.regenPerSec || enemy.hp <= 0) return;
  if (enemy.hp >= enemy.maxHp) return;
  enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.maxHp * enemy.regenPerSec * dt);
}

/** Multiplicateur de vitesse temporaire (dash). */
export function tickEnemyAbilityMovement(enemy, dt) {
  if (!enemy.abilities?.includes("dash")) return 1;
  enemy.dashTimer -= dt;
  if (enemy.dashTimer <= 0) {
    enemy.dashTimer = enemy.dashInterval ?? 2.4;
    enemy.dashBoostSec = 0.65;
  }
  if (enemy.dashBoostSec > 0) {
    enemy.dashBoostSec = Math.max(0, enemy.dashBoostSec - dt);
    return 1.75;
  }
  return 1;
}

/** Reduit les degats si bouclier de hits actif. */
export function applyHitShieldDamage(enemy, rawDamage) {
  if (!enemy.hitShield || enemy.hitShield <= 0) return rawDamage;
  enemy.hitShield -= 1;
  return rawDamage * 0.12;
}

export function spawnSplitChildren(enemy, helpers) {
  if (!enemy.canSplit || enemy._splitDone) return;
  enemy._splitDone = true;
  const pos = helpers.worldPosOfEnemy(enemy);
  for (let i = 0; i < 2; i += 1) {
    const child = helpers.createEnemy("crawler", enemy.pathId);
    child._isSplitChild = true;
    child.canSplit = false;
    child.hp = Math.max(12, Math.round(enemy.maxHp * 0.22));
    child.maxHp = child.hp;
    child.speed *= 1.35;
    child.reward = Math.max(4, Math.round(enemy.reward * 0.35));
    child.radius = 8;
    child.segment = enemy.segment;
    child.t = Math.max(0, enemy.t - 0.04 * (i + 1));
    helpers.pushEnemy(child);
    helpers.emitParticles?.(pos.x + (i ? 6 : -6), pos.y, "#8a5040", 5);
  }
}
