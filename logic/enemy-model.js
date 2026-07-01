import {
  getSpireEnemyHpMult,
  getSpireEnemySpeedMult,
} from "../config/campaign.js";
import { getKillRewardBase } from "./economy.js";
import { applyEnemyAbilities } from "./enemy-abilities.js";
import {
  applyBossTraits,
  applyEliteTraits,
  getEncounterMechanics,
} from "./encounter-mechanics.js";
import { applyTormentEnemyTraits } from "./ascension-mechanics.js";
import {
  applyWaveModifierToEnemy,
  getWaveModifierHpMult,
} from "./wave-modifiers.js";

const BASE_ENEMY_HP = 56;
const ENEMY_HP_PER_FLOOR = 18;
const BASE_ENEMY_SPEED = 43;
const ENEMY_SPEED_PER_FLOOR = 2.1;
const SWAMP_SPAWN_POISON_DPS = 2.5;
const SWAMP_SPAWN_POISON_TIME = 1.8;

export function createEnemyFromType(typeKey, {
  id,
  pathId = 0,
  enemyType,
  pathsLength,
  game,
  biomes,
  encounterConfig,
  getBiomeForFloor,
  applyBossTempWaveToEnemy,
  applyCollectorMapSnareToEnemy,
}) {
  const spireMult = getSpireEnemyHpMult(game.spire.spireNumber);
  const spireSpeedMult = getSpireEnemySpeedMult(game.spire.spireNumber);
  const floor = game.spire.floor;
  const baseHp = (BASE_ENEMY_HP + (floor + 1) * ENEMY_HP_PER_FLOOR) * spireMult;
  const baseSpeed = (BASE_ENEMY_SPEED + (floor + 1) * ENEMY_SPEED_PER_FLOOR) * spireSpeedMult;
  const baseReward = getKillRewardBase(floor);
  const encounter = game.encounter;
  let hp = Math.round(baseHp * enemyType.hpMult * encounter.hpMult);
  hp = Math.round(hp * getWaveModifierHpMult(game.waveModifier));
  const biome = game.biome || biomes[0];
  const enemy = {
    id,
    typeKey,
    pathId: pathId % pathsLength,
    segment: 0,
    t: 0,
    speed: baseSpeed * enemyType.speedMult * encounter.speedMult,
    hp,
    maxHp: hp,
    reward: Math.round(baseReward * enemyType.rewardMult * encounter.rewardMult),
    radius: enemyType.radius,
    color: enemyType.color,
    poisonTime: biome.id === "swamp" ? SWAMP_SPAWN_POISON_TIME : 0,
    poisonDps: biome.id === "swamp" ? SWAMP_SPAWN_POISON_DPS : 0,
  };

  const nodeType = game.spire.currentNodeType;
  const biomeId = game.biome?.id || getBiomeForFloor(floor)?.id;
  const mechanics = getEncounterMechanics(encounterConfig, nodeType, biomeId);
  if (nodeType === "elite" && typeKey !== "boss") applyEliteTraits(enemy, mechanics);
  if (typeKey === "boss") applyBossTraits(enemy, mechanics);
  applyWaveModifierToEnemy(enemy, game.waveModifier, nodeType);
  applyTormentEnemyTraits(enemy, game);

  if (game.run.dailySpawnPoison) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, game.run.dailySpawnPoison.dps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, game.run.dailySpawnPoison.time);
  }

  applyBossTempWaveToEnemy(enemy, game);
  applyCollectorMapSnareToEnemy(enemy, game);
  applyEnemyAbilities(enemy, enemyType);

  if (enemy.abilities?.includes("sting")) {
    enemy.reward = Math.round(enemy.reward * (enemy.stingRewardBonus || 1.12));
  }
  if (game.modifiers.enemySpawnSpeedMult) {
    enemy.speed *= game.modifiers.enemySpawnSpeedMult;
  }

  return enemy;
}
