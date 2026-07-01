/** Applique la mutation de run choisie (début de campagne). */
export function applyRunMutation(game, mutation) {
  if (!mutation) return;
  const m = game.modifiers;

  if (mutation.enemySpeedMult) {
    game.run.encounterSpeedMult = mutation.enemySpeedMult;
  }
  if (mutation.enemyHpMult) {
    game.run.encounterHpMult = mutation.enemyHpMult;
  }
  if (mutation.towerDamageMult) {
    m.globalDamage *= mutation.towerDamageMult;
  }
  if (mutation.rewardMult) {
    m.rewardMult *= mutation.rewardMult;
  }
  if (mutation.maxLivesBonus) {
    game.maxLives = Math.max(8, game.maxLives + mutation.maxLivesBonus);
    game.lives = Math.min(game.lives, game.maxLives);
  }
  if (mutation.shopCardDiscount) {
    game.run.shopCardDiscount = mutation.shopCardDiscount;
  }
}

export function getMutationShopDiscount(game) {
  return game.run?.shopCardDiscount || 0;
}
