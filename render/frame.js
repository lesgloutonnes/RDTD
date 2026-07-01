export function renderBoardFrame({
  ctx,
  canvas,
  game,
  drawBackground,
  drawSetDressing,
  drawPath,
  drawPads,
  drawRangePreviews,
  drawTower,
  drawEnemy,
  drawProjectiles,
  drawWeather,
  drawFireflies,
  drawTowerUpgradeVfx,
  drawUltimateVfx,
  drawFx,
  drawLightingOverlay,
}) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawSetDressing();
  drawPath();
  drawPads();
  if (drawRangePreviews) drawRangePreviews();
  game.towers.forEach(drawTower);
  if (drawTowerUpgradeVfx) drawTowerUpgradeVfx(ctx, game);
  game.enemies.forEach(drawEnemy);
  drawProjectiles();
  drawWeather();
  drawFireflies();
  if (drawUltimateVfx) drawUltimateVfx(ctx, canvas, game);
  drawFx();
  drawLightingOverlay();
}

export function updateHudView({ game, maxFloors, hudCache, hudElements, updateTowerPanel, updateSkillsUI }) {
  const values = {
    lives: game.lives,
    gold: game.gold,
    wave: `${Math.min(game.spire.floor + 1, maxFloors)}/${maxFloors}`,
    enemyCount: game.enemies.length + game.spawnQueue.length,
    score: game.score,
    bestScore: game.bestScore,
  };

  if (hudCache.lives !== values.lives) {
    hudCache.lives = values.lives;
    hudElements.livesEl.textContent = String(values.lives);
  }
  if (hudCache.gold !== values.gold) {
    hudCache.gold = values.gold;
    hudElements.goldEl.textContent = String(values.gold);
  }
  if (hudCache.wave !== values.wave) {
    hudCache.wave = values.wave;
    hudElements.waveEl.textContent = values.wave;
  }
  if (hudCache.enemyCount !== values.enemyCount) {
    hudCache.enemyCount = values.enemyCount;
    hudElements.enemyCountEl.textContent = String(values.enemyCount);
  }
  if (hudCache.score !== values.score) {
    hudCache.score = values.score;
    hudElements.scoreEl.textContent = String(values.score);
  }
  if (hudCache.bestScore !== values.bestScore) {
    hudCache.bestScore = values.bestScore;
    hudElements.bestScoreEl.textContent = String(values.bestScore);
  }

  updateTowerPanel();
  updateSkillsUI();
}
