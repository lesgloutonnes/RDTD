/** Niveaux Tourment (Ascension) — difficulté cumulative, style Diablo. */
export const MAX_ASCENSION_LEVEL = 5;

/**
 * Valeurs cumulatives par niveau (1 = premier Tourment après campagne).
 * Le joueur conserve deck / reliques ; la pression monte par afflictions variées.
 *
 * Tourment I–II : choc d'entrée volontaire (carry de fin de campagne),
 * économie plus sèche, champions à bouclier jaune + boss possibles en élite.
 */
export const ASCENSION_TORMENT_BY_LEVEL = {
  1: {
    level: 1,
    name: "Tourment I",
    subtitle: "Ravage implacable",
    hpMult: 1.48,
    speedMult: 1.12,
    rewardMult: 0.92,
    forcedCombatWaveModifier: true,
    shopPriceMult: 1.24,
    maxLivesPenalty: -1,
    eliteChampionChance: 1,
    eliteBossChance: 0.55,
    eliteChampionShieldMult: 0.95,
    eliteBossHpMult: 0.58,
    rules: [
      "Choc d'entrée : ennemis nettement plus durs dès Spire 1",
      "Économie sèche : −8 % soleil, boutique +24 %, −1 vie max",
      "Élites Tourment : champion à bouclier jaune · boss possible",
      "Modificateur de vague aléatoire sur chaque combat",
    ],
  },
  2: {
    level: 2,
    name: "Tourment II",
    subtitle: "Horde dense",
    hpMult: 1.62,
    speedMult: 1.16,
    rewardMult: 0.95,
    enemyCountMult: 1.16,
    restHealMult: 0.72,
    eliteDamageReduction: 0.92,
    shopPriceMult: 1.2,
    maxLivesPenalty: -1,
    eliteChampionChance: 1,
    eliteBossChance: 0.72,
    eliteChampionShieldMult: 1.05,
    eliteBossHpMult: 0.62,
    rules: [
      "+16 % d'ennemis par vague · repos −28 %",
      "Économie sèche : −5 % soleil, boutique +20 %",
      "Élites : champion bouclier jaune · boss fréquent",
      "Élites ordinaires : −8 % dégâts subis",
    ],
  },
  3: {
    level: 3,
    name: "Tourment III",
    subtitle: "Brume étouffante",
    hpMult: 1.55,
    speedMult: 1.17,
    rewardMult: 1.05,
    enemyCountMult: 1.14,
    restHealMult: 0.76,
    eliteDamageReduction: 0.93,
    towerRangeBonus: -10,
    towerFireRateMult: 0.96,
    spawnIntervalMult: 0.88,
    mapEliteWeightMult: 1.35,
    shopPriceMult: 1.12,
    eliteChampionChance: 1,
    eliteBossChance: 0.8,
    eliteChampionShieldMult: 1.1,
    eliteBossHpMult: 0.65,
    rules: [
      "Portée des tours −10 px",
      "Cadence des tours −4 %",
      "Vagues +12 % rapides · plus d'élites sur la carte",
      "Champions bouclier jaune · boss en élite très fréquents",
    ],
  },
  4: {
    level: 4,
    name: "Tourment IV",
    subtitle: "Serre impitoyable",
    hpMult: 1.74,
    speedMult: 1.23,
    rewardMult: 1.18,
    enemyCountMult: 1.2,
    restHealMult: 0.68,
    eliteDamageReduction: 0.9,
    towerRangeBonus: -15,
    towerFireRateMult: 0.94,
    spawnIntervalMult: 0.82,
    mapEliteWeightMult: 1.55,
    enemyDamageReduction: 0.95,
    extraLeakLivesElite: 1,
    shopPriceMult: 1.15,
    eliteChampionChance: 1,
    eliteBossChance: 0.88,
    eliteChampionShieldMult: 1.15,
    eliteBossHpMult: 0.68,
    rules: [
      "Ravageurs ordinaires : −5 % dégâts subis",
      "Fuite sur élite / boss : −2 vies au lieu de −1",
      "Repos affaibli · carte plus hostile",
      "Boss quasi systématique sur les nœuds élite",
    ],
  },
  5: {
    level: 5,
    name: "Tourment V",
    subtitle: "Carnage final",
    hpMult: 1.96,
    speedMult: 1.3,
    rewardMult: 1.28,
    enemyCountMult: 1.26,
    restHealMult: 0.62,
    eliteDamageReduction: 0.87,
    towerRangeBonus: -18,
    towerFireRateMult: 0.9,
    spawnIntervalMult: 0.76,
    mapEliteWeightMult: 1.75,
    enemyDamageReduction: 0.92,
    extraLeakLivesElite: 1,
    extraLeakLivesBoss: 2,
    maxLivesPenalty: -2,
    eliteExtraSpawn: 1,
    shopPriceMult: 1.18,
    eliteChampionChance: 1,
    eliteBossChance: 1,
    eliteChampionShieldMult: 1.2,
    eliteBossHpMult: 0.72,
    rules: [
      "−2 vies max · cadence −10 % · portée −18 px",
      "Élites renforcées (+1 vague d'ennemis)",
      "Fuite boss : −3 vies · chaque élite abrite un boss",
      "Champions à bouclier jaune maximal",
    ],
  },
};

export function getAscensionTorment(level = 1) {
  const lv = Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level) || 1));
  return ASCENSION_TORMENT_BY_LEVEL[lv] || ASCENSION_TORMENT_BY_LEVEL[1];
}

export function formatTormentAfflictions(level = 1) {
  const torment = getAscensionTorment(level);
  return torment.rules.map((rule) => `• ${rule}`).join("\n");
}

export function formatTormentThreatLine(level = 1) {
  const t = getAscensionTorment(level);
  const hp = Math.round((t.hpMult - 1) * 100);
  const spd = Math.round((t.speedMult - 1) * 100);
  return `${t.name} — Ennemis +${hp}% PV · +${spd}% vitesse`;
}

export function canOfferNextTorment(game) {
  const mode = game?.run?.mode;
  const current = mode === "ascension" ? Number(game.run.ascensionLevel || 1) : 0;
  const next = current + 1;
  if (next > MAX_ASCENSION_LEVEL) return null;
  return next;
}
