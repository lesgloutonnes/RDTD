function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

export function pickDailyChallenge(challenges, date = new Date()) {
  if (!challenges?.length) return null;
  const key = getDateKey(date);
  const idx = hashString(key) % challenges.length;
  return { ...challenges[idx], dateKey: key };
}

export const DAILY_COMPLETION_KEY_PREFIX = "gloutonnes_daily_done_";
export const DAILY_BONUS_SCORE = 400;

export function isDailyCompletedToday(date = new Date()) {
  const key = getDateKey(date);
  try {
    return localStorage.getItem(`${DAILY_COMPLETION_KEY_PREFIX}${key}`) === "1";
  } catch {
    return false;
  }
}

export function markDailyCompletedToday(date = new Date()) {
  const key = getDateKey(date);
  try {
    localStorage.setItem(`${DAILY_COMPLETION_KEY_PREFIX}${key}`, "1");
  } catch {
    /* ignore */
  }
}

/** Run « valide » pour le bonus quotidien : progression réelle, pas une mort instantanée. */
export function qualifiesForDailyCompletion(game) {
  if (!game.daily?.id) return false;
  const spire = game.spire?.spireNumber || 1;
  const floor = (game.spire?.floor ?? 0) + 1;
  return game.screen === "victory" || spire >= 2 || floor >= 5;
}

/** Premier succès du jour → bonus fixe ; 0 si déjà fait ou run trop courte. */
export function tryApplyDailyCompletionBonus(game, date = new Date()) {
  if (!game.daily?.id || isDailyCompletedToday(date)) return 0;
  if (!qualifiesForDailyCompletion(game)) return 0;
  markDailyCompletedToday(date);
  return DAILY_BONUS_SCORE;
}

export function applyDailyChallenge(game, challenge) {
  if (!challenge) return;
  game.daily = {
    id: challenge.id,
    name: challenge.name,
    desc: challenge.desc,
    dateKey: challenge.dateKey,
  };
  if (challenge.enemySpeedMult) game.run.dailySpeedMult = challenge.enemySpeedMult;
  if (challenge.enemyHpMult) game.run.dailyHpMult = challenge.enemyHpMult;
  if (challenge.towerDamageMult) game.modifiers.globalDamage *= challenge.towerDamageMult;
  if (challenge.rewardMult) game.modifiers.rewardMult *= challenge.rewardMult;
  if (challenge.waveClearGoldMult) game.run.dailyWaveClearMult = challenge.waveClearGoldMult;
  if (challenge.shopCardDiscount) {
    game.run.shopCardDiscount = (game.run.shopCardDiscount || 0) - challenge.shopCardDiscount;
  }
  if (challenge.spawnPoisonDps) {
    game.run.dailySpawnPoison = {
      dps: challenge.spawnPoisonDps,
      time: challenge.spawnPoisonTime || 3.5,
    };
  }
}
