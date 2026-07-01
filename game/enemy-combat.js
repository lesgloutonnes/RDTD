import { SKILLS } from "../config/balance.js";
import {
  applyCollectorMapSnareToEnemy,
  getSnareSlowFactor,
  tickCollectorMapSnare,
} from "../logic/hunter-slow.js";
import {
  tickEnemyAbilityMovement,
  tickEnemyRegen,
} from "../logic/enemy-abilities.js";

export function updateEnemyCombat(game, {
  biome,
  createEnemy,
  createFloatText,
  defeatEnemy,
  distance,
  emitParticles,
  encounterConfig,
  enemyRoute,
  getEncounterMechanics,
  loseLifeAndCheck,
  maybeTriggerBossCardPhase,
  sfx,
  showMessage,
  updateBossPhases,
  worldPosOfEnemy,
}, dt) {
  tickCollectorMapSnare(game, dt);

  let slowFactor = 1;
  if (game.skills.snare.active > 0) {
    slowFactor = getSnareSlowFactor(
      SKILLS.snare.slowFactor,
      game.modifiers.snareSlowFactorMult || 1,
    );
  }

  for (let i = game.enemies.length - 1; i >= 0; i -= 1) {
    const enemy = game.enemies[i];
    applyCollectorMapSnareToEnemy(enemy, game);
    tickEnemyRegen(enemy, dt);

    if (enemy.poisonTime > 0 && enemy.poisonDps > 0) {
      enemy.poisonTime = Math.max(0, enemy.poisonTime - dt);
      if (enemy.poisonTime > 0 && Math.random() < dt * 2.5) sfx?.poison();
      enemy.hp -= enemy.poisonDps * dt;
      if (enemy.hp <= 0) {
        maybeTriggerBossCardPhase(enemy);
        defeatEnemy(enemy, worldPosOfEnemy(enemy));
        continue;
      }
    }

    if (enemy.burnTime > 0 && enemy.burnDps > 0) {
      enemy.burnTime = Math.max(0, enemy.burnTime - dt);
      if (enemy.burnTime > 0 && Math.random() < dt * 2.2) sfx?.burn();
      enemy.hp -= enemy.burnDps * dt;
      if (enemy.hp <= 0) {
        maybeTriggerBossCardPhase(enemy);
        defeatEnemy(enemy, worldPosOfEnemy(enemy));
        continue;
      }
    }

    if (enemy.armorShredTime > 0) {
      enemy.armorShredTime = Math.max(0, enemy.armorShredTime - dt);
      if (enemy.armorShredTime <= 0) enemy.armorShredMult = 1;
    }

    if (enemy.slowTime > 0) {
      enemy.slowTime = Math.max(0, enemy.slowTime - dt);
    }

    if (enemy.flatRegenPerSec > 0 && enemy.hp < enemy.maxHp) {
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.flatRegenPerSec * dt);
    }

    if (enemy.isBoss) {
      const bossMech = getEncounterMechanics(encounterConfig, "boss", biome.id);
      updateBossPhases(enemy, bossMech, {
        dt,
        spawnAdds: (types) => {
          types.forEach((addKey, addIndex) => {
            const add = createEnemy(addKey, enemy.pathId);
            add.segment = enemy.segment;
            add.t = Math.max(0, enemy.t - 0.06 * (addIndex + 1));
            game.enemies.push(add);
            game.enemyById.set(add.id, add);
          });
          showMessage("Le boss appelle des renforts !", "warn");
          sfx?.bossPhase();
        },
        onPhaseChange: (phase) => {
          const label = phase.label || "Nouvelle phase";
          showMessage(label, "warn");
          const pos = worldPosOfEnemy(enemy);
          createFloatText(pos.x, pos.y - 20, label, "#f5c842");
          sfx?.bossPhase();
        },
      });
    }

    const dashMult = tickEnemyAbilityMovement(enemy, dt);
    if (dashMult > 1.2 && enemy.dashBoostSec > 0.5) sfx?.dash();

    const enemySlowMult = (enemy.slowTime > 0 && enemy.slowMult) ? enemy.slowMult : 1;
    let remaining = enemy.speed * dt * slowFactor * enemySlowMult * dashMult;
    if (biome.id === "night" && enemy.typeKey === "wasp") remaining *= 1.12;
    const route = enemyRoute(enemy);

    while (remaining > 0 && enemy.segment < route.length - 1) {
      const from = route[enemy.segment];
      const to = route[enemy.segment + 1];
      const segmentLength = distance(from, to);
      const leftOnSegment = (1 - enemy.t) * segmentLength;
      if (remaining < leftOnSegment) {
        enemy.t += remaining / segmentLength;
        remaining = 0;
      } else {
        remaining -= leftOnSegment;
        enemy.segment += 1;
        enemy.t = 0;
      }
    }

    if (enemy.segment >= route.length - 1) {
      game.enemies.splice(i, 1);
      game.enemyById.delete(enemy.id);
      const end = route[route.length - 1];
      emitParticles(end.x - 8, end.y, "#d85f4e", 12);
      if (enemy.typeKey === "boss") {
        createFloatText("BOSS!", end.x - 22, end.y - 24, "#ff6a4a");
        loseLifeAndCheck({ bossBreach: true });
        return;
      }
      loseLifeAndCheck();
    }
  }
}
