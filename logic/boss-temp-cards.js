export function pickBossTempCardPair(library, rng = Math.random) {
  if (!library?.length) return [];
  const a = library[Math.floor(rng() * library.length)];
  let b = library[Math.floor(rng() * library.length)];
  let guard = 0;
  while (b.id === a.id && guard < 8) {
    b = library[Math.floor(rng() * library.length)];
    guard += 1;
  }
  return [a, b];
}

export function applyBossTempCardEffect(game, effectId) {
  const wave = game.bossTempWave;
  if (!wave) return;

  switch (effectId) {
    case "boss_temp_damage":
      wave.damageMult = 1.28;
      break;
    case "boss_temp_snare":
      wave.snareAllSec = 6.5;
      wave.snareMult = 0.58;
      break;
    case "boss_temp_gold":
      wave.bonusGoldOnWin = 45;
      break;
    case "boss_temp_poison":
      wave.spawnPoisonDps = 4;
      wave.spawnPoisonTime = 5;
      break;
    case "boss_temp_fire_rate":
      wave.towerFireRateMult = 1.18;
      break;
    case "boss_temp_crit":
      wave.critBonus = 0.12;
      break;
    case "boss_temp_range":
      wave.towerRangeBonus = 0.14;
      break;
    case "boss_temp_heal":
      wave.healOnWin = 2;
      break;
    case "boss_temp_thorn":
      wave.thornDamageMult = 1.3;
      break;
    case "boss_temp_snapper":
      wave.snapperDamageMult = 1.3;
      break;
    default:
      break;
  }
}

export function applyBossTempWaveToEnemy(enemy, game) {
  const wave = game.bossTempWave;
  if (!wave) return;
  if (wave.spawnPoisonDps) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, wave.spawnPoisonDps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, wave.spawnPoisonTime || 4);
  }
  if (wave.snareAllSec && !enemy._bossTempSnared) {
    enemy.slowTime = Math.max(enemy.slowTime || 0, wave.snareAllSec);
    enemy.slowMult = Math.min(enemy.slowMult ?? 1, wave.snareMult ?? 0.55);
    enemy._bossTempSnared = true;
  }
}

export function getBossTempDamageMult(game) {
  return game.bossTempWave?.damageMult ?? 1;
}

export function consumeBossTempGoldBonus(game, { skipHeal = false } = {}) {
  const wave = game.bossTempWave;
  if (!wave) return 0;
  const bonus = wave.bonusGoldOnWin || 0;
  if (bonus) game.gold += bonus;
  if (wave.healOnWin && !skipHeal) {
    game.lives = Math.min(game.maxLives, game.lives + wave.healOnWin);
  }
  return bonus;
}

export function getBossTempTowerMods(game) {
  const wave = game.bossTempWave;
  if (!wave) {
    return { fireRateMult: 1, critBonus: 0, rangeBonus: 0, thornMult: 1, snapperMult: 1 };
  }
  return {
    fireRateMult: wave.towerFireRateMult ?? 1,
    critBonus: wave.critBonus ?? 0,
    rangeBonus: wave.towerRangeBonus ?? 0,
    thornMult: wave.thornDamageMult ?? 1,
    snapperMult: wave.snapperDamageMult ?? 1,
  };
}

export function clearBossTempWave(game) {
  game.bossTempWave = null;
  game.bossCardPhaseDone = false;
}
