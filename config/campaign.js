/** Campagne Spire : 5 paliers, fin tres difficile mais beatable si maitrise. */
export const MAX_SPIRES = 5;

export function getSpireEnemyHpMult(spireNumber) {
  if (spireNumber <= 1) return 1;
  if (spireNumber <= 3) return 1 + (spireNumber - 1) * 0.26;
  return 1.52 + (spireNumber - 3) * 0.24;
}

export function getSpireEnemySpeedMult(spireNumber) {
  if (spireNumber <= 1) return 1;
  if (spireNumber <= 3) return 1 + (spireNumber - 1) * 0.06;
  return 1.12 + (spireNumber - 3) * 0.06;
}

/** Ligne UI (prochaine Spire ou pression actuelle). */
export function formatSpireThreatLine(spireNumber) {
  const hp = Math.round((getSpireEnemyHpMult(spireNumber) - 1) * 100);
  const spd = Math.round((getSpireEnemySpeedMult(spireNumber) - 1) * 100);
  return `Ennemis +${hp}% PV · +${spd}% vitesse`;
}
