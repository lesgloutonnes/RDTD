/** Famille de tour (snapper / spitter / thorn) pour une carte de run. */
export function getCardTowerLine(card, towerTypes = {}) {
  if (!card) return null;
  if (card.towerFamily) return card.towerFamily;
  if (card.towerCard && towerTypes[card.towerCard]?.family) {
    return towerTypes[card.towerCard].family;
  }
  return null;
}

/**
 * Compte les cartes de run par ligne de tour (Dionaea / Sarracenia / Drosera).
 * Les variantes (towerCard) comptent pour la ligne de la tour choisie au draft.
 */
export function countCardsByFamily(pickedIds, cardLibrary, towerTypes = {}) {
  const counts = {};
  for (const id of pickedIds) {
    const card = cardLibrary.find((c) => c.id === id);
    const line = getCardTowerLine(card, towerTypes);
    if (!line) continue;
    counts[line] = (counts[line] || 0) + 1;
  }
  return counts;
}

/**
 * Calcule les bonus de synergie actifs (tiers cumulatifs : palier le plus haut atteint).
 * @returns {{ active: Array, mods: object }}
 */
export function computeDeckSynergyState(pickedIds, cardLibrary, synergyConfig, towerTypes = {}) {
  const counts = countCardsByFamily(pickedIds, cardLibrary, towerTypes);
  const mods = {
    snapperDamage: 1,
    spitterPoison: 0,
    thornDamage: 1,
    thornRange: 0,
    globalDamage: 1,
    globalFireRate: 1,
    critChance: 0,
  };
  const active = [];

  for (const family of synergyConfig?.families || []) {
    const count = counts[family.id] || 0;
    if (count < 1) continue;
    const tiers = [...(family.tiers || [])].sort((a, b) => b.minCards - a.minCards);
    const tier = tiers.find((t) => count >= t.minCards);
    if (!tier) continue;
    active.push({ familyId: family.id, label: family.label, count, tier });
    if (tier.snapperDamage) mods.snapperDamage *= tier.snapperDamage;
    if (tier.spitterPoison) mods.spitterPoison += tier.spitterPoison;
    if (tier.thornDamage) mods.thornDamage *= tier.thornDamage;
    if (tier.thornRange) mods.thornRange += tier.thornRange;
    if (tier.globalDamage) mods.globalDamage *= tier.globalDamage;
    if (tier.globalFireRate) mods.globalFireRate *= tier.globalFireRate;
    if (tier.critChance) mods.critChance += tier.critChance;
  }

  return { active, mods };
}
