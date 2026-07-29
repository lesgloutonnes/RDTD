/** Niveaux Tourment (Ascension) — difficulté cumulative, style Diablo. */
export const MAX_ASCENSION_LEVEL = 5;

/**
 * Valeurs par niveau (1 = premier Tourment après campagne).
 * Le joueur conserve deck / reliques : T1–T2 doivent écraser ce carry.
 *
 * T1–T2 : choc d'entrée rude (PV, horde, DR, économie) + élites Tourment.
 * T3–T5 : afflictions de tours / carte / fuites, PV toujours au-dessus de T2.
 */
export const ASCENSION_TORMENT_BY_LEVEL = {
  1: {
    level: 1,
    name: "Tourment I",
    subtitle: "Ravage implacable",
    hpMult: 1.88,
    speedMult: 1.18,
    rewardMult: 0.78,
    enemyCountMult: 1.14,
    restHealMult: 0.7,
    enemyDamageReduction: 0.94,
    towerFireRateMult: 0.95,
    forcedCombatWaveModifier: true,
    shopPriceMult: 1.38,
    maxLivesPenalty: -2,
    eliteChampionChance: 1,
    eliteBossChance: 0.65,
    eliteChampionShieldMult: 1.2,
    eliteBossHpMult: 0.55,
    rules: [
      "Choc d'entrée : ennemis +88 % PV · +18 % vitesse · −6 % dégâts subis",
      "Horde +14 % · cadence tours −5 % · repos −30 %",
      "Économie sèche : −22 % soleil, boutique +38 %, −2 vies max",
      "Élites : champion bouclier jaune · boss fréquent",
    ],
  },
  2: {
    level: 2,
    name: "Tourment II",
    subtitle: "Horde dense",
    hpMult: 2.08,
    speedMult: 1.22,
    rewardMult: 0.82,
    enemyCountMult: 1.24,
    restHealMult: 0.62,
    eliteDamageReduction: 0.9,
    enemyDamageReduction: 0.92,
    towerFireRateMult: 0.93,
    towerRangeBonus: -8,
    shopPriceMult: 1.32,
    maxLivesPenalty: -2,
    eliteChampionChance: 1,
    eliteBossChance: 0.8,
    eliteChampionShieldMult: 1.3,
    eliteBossHpMult: 0.58,
    rules: [
      "Ennemis +108 % PV · horde +24 % · repos −38 %",
      "Tours : cadence −7 % · portée −8 px",
      "Économie sèche : −18 % soleil, boutique +32 %, −2 vies max",
      "Élites : bouclier jaune épais · boss très fréquent · −10 % dégâts subis",
    ],
  },
  3: {
    level: 3,
    name: "Tourment III",
    subtitle: "Brume étouffante",
    hpMult: 2.18,
    speedMult: 1.24,
    rewardMult: 0.92,
    enemyCountMult: 1.2,
    restHealMult: 0.66,
    eliteDamageReduction: 0.9,
    enemyDamageReduction: 0.93,
    towerRangeBonus: -12,
    towerFireRateMult: 0.92,
    spawnIntervalMult: 0.88,
    mapEliteWeightMult: 1.35,
    shopPriceMult: 1.28,
    maxLivesPenalty: -2,
    eliteChampionChance: 1,
    eliteBossChance: 0.85,
    eliteChampionShieldMult: 1.35,
    eliteBossHpMult: 0.62,
    rules: [
      "Portée des tours −12 px · cadence −8 %",
      "Vagues +12 % rapides · plus d'élites sur la carte",
      "Économie encore tendue · −2 vies max",
      "Champions bouclier jaune · boss en élite très fréquents",
    ],
  },
  4: {
    level: 4,
    name: "Tourment IV",
    subtitle: "Serre impitoyable",
    hpMult: 2.4,
    speedMult: 1.28,
    rewardMult: 1.05,
    enemyCountMult: 1.26,
    restHealMult: 0.58,
    eliteDamageReduction: 0.88,
    towerRangeBonus: -16,
    towerFireRateMult: 0.9,
    spawnIntervalMult: 0.82,
    mapEliteWeightMult: 1.55,
    enemyDamageReduction: 0.9,
    extraLeakLivesElite: 1,
    shopPriceMult: 1.22,
    maxLivesPenalty: -2,
    eliteChampionChance: 1,
    eliteBossChance: 0.92,
    eliteChampionShieldMult: 1.4,
    eliteBossHpMult: 0.66,
    rules: [
      "Ravageurs : −10 % dégâts subis · élites −12 %",
      "Fuite sur élite / boss : −2 vies au lieu de −1",
      "Repos très affaibli · carte plus hostile",
      "Boss quasi systématique sur les nœuds élite",
    ],
  },
  5: {
    level: 5,
    name: "Tourment V",
    subtitle: "Carnage final",
    hpMult: 2.7,
    speedMult: 1.34,
    rewardMult: 1.18,
    enemyCountMult: 1.32,
    restHealMult: 0.52,
    eliteDamageReduction: 0.84,
    towerRangeBonus: -20,
    towerFireRateMult: 0.86,
    spawnIntervalMult: 0.74,
    mapEliteWeightMult: 1.75,
    enemyDamageReduction: 0.88,
    extraLeakLivesElite: 1,
    extraLeakLivesBoss: 2,
    maxLivesPenalty: -3,
    eliteExtraSpawn: 1,
    shopPriceMult: 1.25,
    eliteChampionChance: 1,
    eliteBossChance: 1,
    eliteChampionShieldMult: 1.5,
    eliteBossHpMult: 0.7,
    rules: [
      "−3 vies max · cadence −14 % · portée −20 px",
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
