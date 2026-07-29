/** Niveaux Tourment (Ascension) — difficulté cumulative, style Diablo. */
export const MAX_ASCENSION_LEVEL = 5;

/**
 * Valeurs par niveau (1 = premier Tourment après campagne).
 * Le joueur conserve deck / reliques : T1–T2 doivent écraser ce carry.
 *
 * Afflictions créatives : plafond de tours = n° d'étage, élites multi-boucliers
 * jaunes, nœuds boss à 2–3 boss.
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
    towerCapByFloor: true,
    eliteChampionChance: 1,
    eliteChampionMax: 3,
    eliteExtraSpawn: 2,
    eliteBossChance: 0.7,
    eliteChampionShieldMult: 1.15,
    eliteBossHpMult: 0.55,
    bossNodeBossCount: 2,
    rules: [
      "Serre rationnée : 1 tour max à l'étage 1, puis +1 par étage",
      "Choc : +88 % PV · +18 % vitesse · −6 % dégâts subis · horde +14 %",
      "Économie sèche : −22 % soleil, boutique +38 %, −2 vies max",
      "Élites : plusieurs boucliers jaunes · boss fréquent · nœud boss = 2 boss",
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
    towerCapByFloor: true,
    eliteChampionChance: 1,
    eliteChampionMax: 4,
    eliteExtraSpawn: 3,
    eliteBossChance: 0.85,
    eliteChampionShieldMult: 1.25,
    eliteBossHpMult: 0.58,
    bossNodeBossCount: 2,
    rules: [
      "Serre rationnée : tours max = n° d'étage",
      "Ennemis +108 % PV · horde +24 % · repos −38 %",
      "Tours : cadence −7 % · portée −8 px · économie sèche",
      "Élites multi-boucliers jaunes · nœud boss = 2 boss",
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
    towerCapByFloor: true,
    eliteChampionChance: 1,
    eliteChampionMax: 5,
    eliteExtraSpawn: 3,
    eliteBossChance: 0.9,
    eliteChampionShieldMult: 1.3,
    eliteBossHpMult: 0.62,
    bossNodeBossCount: 3,
    rules: [
      "Serre rationnée · portée −12 px · cadence −8 %",
      "Vagues +12 % rapides · plus d'élites sur la carte",
      "Élites saturées de boucliers jaunes",
      "Nœud boss = 3 boss",
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
    towerCapByFloor: true,
    eliteChampionChance: 1,
    eliteChampionMax: 6,
    eliteExtraSpawn: 4,
    eliteBossChance: 0.95,
    eliteChampionShieldMult: 1.35,
    eliteBossHpMult: 0.66,
    bossNodeBossCount: 3,
    rules: [
      "Serre rationnée · ravageurs −10 % dégâts subis",
      "Fuite élite/boss : −2 vies · carte plus hostile",
      "Élites : essaim de boucliers jaunes",
      "Nœud boss = 3 boss",
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
    eliteExtraSpawn: 5,
    shopPriceMult: 1.25,
    towerCapByFloor: true,
    eliteChampionChance: 1,
    eliteChampionMax: 8,
    eliteBossChance: 1,
    eliteChampionShieldMult: 1.45,
    eliteBossHpMult: 0.7,
    bossNodeBossCount: 3,
    rules: [
      "Serre rationnée · −3 vies max · cadence −14 % · portée −20 px",
      "Élites saturées (+renforts) · boucliers jaunes maximaux",
      "Fuite boss : −3 vies · chaque élite abrite un boss",
      "Nœud boss = 3 boss",
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
