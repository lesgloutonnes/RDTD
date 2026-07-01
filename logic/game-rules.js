export function computeRestHeal(maxLives, _collectorId) {
  return Math.max(4, Math.round(maxLives * 0.35));
}

export function getNodeResultAdvanceAction(isSpireTransitionPending) {
  return isSpireTransitionPending ? "nextSpire" : "nextFloor";
}
