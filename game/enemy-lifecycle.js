import { FUREUR_DEFAULT_MAX_STACKS } from "../config/balance.js";
import {
  applyFirstKillBonus,
  recordBestiaryKill,
} from "../logic/bestiary.js";
import { spawnSplitChildren } from "../logic/enemy-abilities.js";
import { recordRunKill } from "../logic/run-stats.js";
import { recordWaveKill } from "../logic/wave-report.js";

function removeEnemy(game, enemy) {
  const idx = game.enemies.indexOf(enemy);
  if (idx < 0) return false;
  game.enemies.splice(idx, 1);
  game.enemyById.delete(enemy.id);
  return true;
}

function spreadScorpioPoison(enemy, position, {
  distance,
  emitParticles,
  game,
  worldPosOfEnemy,
}) {
  if (!enemy._poisonedByScorpio || enemy.poisonDps <= 0) return;
  const chainCount = game.modifiers.scorpioChain || 2;
  const sorted = game.enemies
    .map((e) => ({ e, d: distance(worldPosOfEnemy(e), position) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, chainCount);
  sorted.forEach(({ e }) => {
    e.poisonDps = Math.max(e.poisonDps || 0, enemy.poisonDps);
    e.poisonTime = Math.max(e.poisonTime || 0, enemy.poisonTime || 3.5);
    e._poisonedByScorpio = true;
    const ePos = worldPosOfEnemy(e);
    emitParticles(ePos.x, ePos.y, "#7fff44", 6);
  });
}

function grantFureurRage(position, {
  createFloatText,
  distance,
  game,
  getTowerRange,
}) {
  game.towers.forEach((tower) => {
    if (tower.typeKey !== "sarracenia_fureur") return;
    if (distance(tower, position) > getTowerRange(tower) * 1.5) return;
    const maxStacks = game.modifiers.fureurMaxStacks || FUREUR_DEFAULT_MAX_STACKS;
    if (tower.rageStacks < maxStacks) {
      tower.rageStacks = Math.min(maxStacks, tower.rageStacks + 1);
      if (tower.rageStacks % 3 === 0) {
        createFloatText(`RAGE ${tower.rageStacks}!`, tower.x - 18, tower.y - 30, "#ffcc44");
      }
    }
  });
}

export function defeatEnemyLifecycle(enemy, position, {
  bestiaryConfig,
  canvas,
  createEnemy,
  createFloatText,
  distance,
  emitParticles,
  enemyTypes,
  gainScore,
  game,
  getTowerRange,
  playSound,
  renderBestiaryList,
  sfx,
  showMessage,
  worldPosOfEnemy,
}) {
  spawnSplitChildren(enemy, {
    createEnemy,
    worldPosOfEnemy,
    pushEnemy: (e) => {
      game.enemies.push(e);
      game.enemyById.set(e.id, e);
    },
    emitParticles,
  });
  if (enemy._splitDone && enemy.canSplit) sfx?.split();

  if (!removeEnemy(game, enemy)) return false;

  recordWaveKill(game);
  recordRunKill(game, enemy.typeKey);
  recordBestiaryKill(enemy.typeKey);

  const bestiaryBonus = applyFirstKillBonus(game, enemy.typeKey, enemyTypes, bestiaryConfig);
  if (bestiaryBonus) {
    showMessage(`Bestiaire : premier ${bestiaryBonus.name} — +${bestiaryBonus.bonusPct} % dégâts.`, "normal");
    createFloatText(`+${bestiaryBonus.bonusPct}% DMG`, canvas.width / 2 - 42, 118, "#b8ff9a");
    renderBestiaryList();
  }

  const gain = Math.round(enemy.reward * game.modifiers.rewardMult);
  game.gold += gain;
  gainScore(24 + gain * 3 + (game.spire.floor + 1));
  createFloatText(`+${gain}`, position.x, position.y - 12, "#f2f7bd");
  emitParticles(position.x, position.y, "#ffd48f", enemy.typeKey === "boss" ? 22 : 12);
  if (enemy.typeKey === "boss") {
    if (sfx?.bossDefeat) sfx.bossDefeat();
    else playSound(560, 0.12, "sawtooth", 0.03);
  }

  spreadScorpioPoison(enemy, position, {
    distance,
    emitParticles,
    game,
    worldPosOfEnemy,
  });

  grantFureurRage(position, {
    createFloatText,
    distance,
    game,
    getTowerRange,
  });

  return true;
}
