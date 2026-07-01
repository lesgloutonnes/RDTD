import { getTormentSpawnIntervalMult } from "../logic/ascension-mechanics.js";

const BASE_SPAWN_INTERVAL = 0.56;
const SPAWN_INTERVAL_FLOOR_REDUCTION = 0.012;
const MIN_SPAWN_INTERVAL = 0.2;

export function updateWaveSpawningState(game, {
  createEnemy,
  pathsLength,
}, dt) {
  if (game.wavePaused) return;
  if (!game.waveActive || game.spawnQueue.length === 0) return;
  game.spawnTimer -= dt;
  if (game.spawnTimer > 0) return;

  const typeKey = game.spawnQueue.shift();
  const pathId = game.spawnPathInc % pathsLength;
  game.spawnPathInc += 1;

  const enemy = createEnemy(typeKey, pathId);
  game.enemies.push(enemy);
  game.enemyById.set(enemy.id, enemy);
  const tormentMult = getTormentSpawnIntervalMult(game);
  game.spawnTimer = Math.max(
    (BASE_SPAWN_INTERVAL - game.spire.floor * SPAWN_INTERVAL_FLOOR_REDUCTION) * tormentMult,
    MIN_SPAWN_INTERVAL * tormentMult,
  );
}
