export function updateProjectileCombat(game, {
  applyHitShieldDamage,
  applySlowToEnemy,
  computeDamageToEnemy,
  createFloatText,
  defeatEnemy,
  distance,
  emitParticles,
  getBossTempDamageMult,
  getEnemyById,
  getTowerArmorShredDuration,
  getTowerArmorShredMult,
  getTowerBurnDps,
  getTowerById,
  getTowerSlowPotency,
  getTowerSplashRadius,
  maybeTriggerBossCardPhase,
  playSound,
  recordRunTowerDamage,
  recordTowerDamage,
  scaleTowerPassiveDuration,
  sfx,
  towerTypes,
  worldPosOfEnemy,
}, dt) {
  for (let i = game.projectiles.length - 1; i >= 0; i -= 1) {
    const projectile = game.projectiles[i];
    projectile.life -= dt;
    if (projectile.life <= 0) {
      game.projectiles.splice(i, 1);
      continue;
    }
    const target = getEnemyById(projectile.targetId);
    if (!target) {
      game.projectiles.splice(i, 1);
      continue;
    }

    const targetPos = worldPosOfEnemy(target);
    const dx = targetPos.x - projectile.x;
    const dy = targetPos.y - projectile.y;
    const dist = Math.hypot(dx, dy) || 0.0001;
    const step = projectile.speed * dt;

    if (dist <= step) {
      let rawDmg = projectile.damage * getBossTempDamageMult(game);
      if (target.hitShield > 0) {
        rawDmg = applyHitShieldDamage(target, rawDmg);
        sfx?.shieldHit();
      }
      const dmg = computeDamageToEnemy(target, rawDmg);
      target.hp -= dmg;
      const towerRef = projectile.towerId ? getTowerById(projectile.towerId) : null;
      if (towerRef) {
        const fam = towerRef.family || towerRef.typeKey;
        recordTowerDamage(game, projectile.towerId, dmg, fam);
        recordRunTowerDamage(game, projectile.towerId, dmg, fam);
      }
      maybeTriggerBossCardPhase(target);

      if (projectile.poisonDps > 0) {
        const durBase = projectile.passive === "heavy_poison"
          ? 4
          : projectile.passive === "chain_poison"
            ? 3.5
            : 3;
        const poisonDur = towerRef
          ? scaleTowerPassiveDuration(durBase, towerRef, towerTypes)
          : durBase;
        if (projectile.passive === "heavy_poison") {
          target.poisonDps = (target.poisonDps || 0) + projectile.poisonDps;
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
        } else if (projectile.passive === "chain_poison") {
          target.poisonDps = Math.max(target.poisonDps || 0, projectile.poisonDps);
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
          target._poisonedByScorpio = true;
        } else {
          target.poisonDps = Math.max(target.poisonDps || 0, projectile.poisonDps);
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
        }
      }

      if (projectile.passive === "burn") {
        const burnDps = towerRef
          ? getTowerBurnDps(towerRef, game, towerTypes)
          : (game.modifiers.ryuBurnDps || 10);
        const burnTick = towerRef ? scaleTowerPassiveDuration(2, towerRef, towerTypes) : 2;
        const burnMax = towerRef ? scaleTowerPassiveDuration(6, towerRef, towerTypes) : 6;
        target.burnDps = Math.max(target.burnDps || 0, burnDps);
        target.burnTime = Math.min((target.burnTime || 0) + burnTick, burnMax);
        emitParticles(targetPos.x, targetPos.y, "#ff6020", 6);
        if (game.modifiers.ryuBurnSpread) {
          let closestOther = null;
          let closestD = Infinity;
          game.enemies.forEach((e) => {
            if (e.id === target.id) return;
            const d = distance(worldPosOfEnemy(e), targetPos);
            if (d < 70 && d < closestD) {
              closestD = d;
              closestOther = e;
            }
          });
          if (closestOther) {
            closestOther.burnDps = Math.max(closestOther.burnDps || 0, burnDps * 0.6);
            closestOther.burnTime = Math.min((closestOther.burnTime || 0) + 1.5, 5);
            const otherPos = worldPosOfEnemy(closestOther);
            emitParticles(otherPos.x, otherPos.y, "#ff8040", 4);
          }
        }
      }

      if (projectile.passive === "armor_shred") {
        target.armorShredMult = towerRef
          ? getTowerArmorShredMult(towerRef, towerTypes)
          : 1.25;
        target.armorShredTime = towerRef
          ? getTowerArmorShredDuration(towerRef, game, towerTypes)
          : (game.modifiers.b52ArmorDur || 3);
        createFloatText("BRISE!", targetPos.x - 14, targetPos.y - 18, "#ff8080");
      }

      if (projectile.passive === "slow") {
        const slowAmount = towerRef
          ? getTowerSlowPotency(towerRef, game, towerTypes)
          : (game.modifiers.belleSlow || 0.68);
        const slowDur = towerRef
          ? scaleTowerPassiveDuration(2.5, towerRef, towerTypes)
          : 2.5;
        applySlowToEnemy(target, slowAmount, slowDur, game);
      }

      if (projectile.passive === "splash") {
        const radius = towerRef
          ? getTowerSplashRadius(towerRef, game, towerTypes)
          : (game.modifiers.capensisAoe || 55);
        const splashDmg = projectile.damage * 0.5;
        const splashKill = [];
        game.enemies.slice().forEach((e) => {
          if (e.id === target.id) return;
          if (distance(worldPosOfEnemy(e), targetPos) <= radius) {
            e.hp -= splashDmg;
            const ePos = worldPosOfEnemy(e);
            emitParticles(ePos.x, ePos.y, "#b8ff90", 4);
            if (e.hp <= 0) splashKill.push(e);
          }
        });
        splashKill.forEach((e) => defeatEnemy(e, worldPosOfEnemy(e)));
      }

      emitParticles(targetPos.x, targetPos.y, projectile.color, 8);
      if (projectile.crit) {
        createFloatText("CRIT!", targetPos.x - 10, targetPos.y - 16, "#ffe5b8");
        sfx?.crit();
      } else {
        if (sfx?.impact) sfx.impact(projectile);
        else playSound(220, 0.03, "square", 0.018);
      }
      if (projectile.poisonDps > 0) sfx?.poison();
      if (projectile.passive === "burn") sfx?.burn();
      if (projectile.passive === "slow") sfx?.slow();
      if (target.hp <= 0) {
        maybeTriggerBossCardPhase(target);
        defeatEnemy(target, targetPos);
      }

      if (projectile.pierceLeft > 0) {
        projectile.pierceLeft -= 1;
        let nextTarget = null;
        let minDist = Infinity;
        game.enemies.forEach((e) => {
          if (e.id === target.id) return;
          const d = distance(worldPosOfEnemy(e), { x: projectile.x, y: projectile.y });
          if (d < minDist) {
            minDist = d;
            nextTarget = e;
          }
        });
        if (nextTarget) {
          projectile.targetId = nextTarget.id;
          continue;
        }
      }

      game.projectiles.splice(i, 1);
      continue;
    }

    projectile.x += (dx / dist) * step;
    projectile.y += (dy / dist) * step;
  }
}
