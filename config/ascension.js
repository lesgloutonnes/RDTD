/** Niveaux Tourment (Ascension) — difficulté cumulative, style Diablo. */
export const MAX_ASCENSION_LEVEL = 5;

/**
 * Valeurs cumulatives par niveau (1 = premier Tourment après campagne).
 * Le joueur conserve deck / reliques ; la pression monte par afflictions variées.
 */
export const ASCENSION_TORMENT_BY_LEVEL = {
  1: {
    level: 1,
    name: "Tourment I",
    subtitle: "Ravage implacable",
    hpMult: 1.22,
    speedMult: 1.07,
    rewardMult: 1.1,
    forcedCombatWaveModifier: true,
    shopPriceMult: 1.12,
    rules: [
      "Modificateur de vague aléatoire sur chaque combat",
      "Boutique +12 % de soleil",
    ],
  },
  2: {
    level: 2,
    name: "Tourment II",
    subtitle: "Horde dense",
    hpMult: 1.38,
    speedMult: 1.12,
    rewardMult: 1.2,
    enemyCountMult: 1.12,
    restHealMult: 0.78,
    eliteDamageReduction: 0.94,
    rules: [
      "+12 % d'ennemis par vague",
      "Repos soigne −22 %",
      "Élites : −6 % dégâts subis",
    ],
  },
  3: {
    level: 3,
    name: "Tourment III",
    subtitle: "Brume étouffante",
    hpMult: 1.55,
    speedMult: 1.17,
    rewardMult: 1.3,
    enemyCountMult: 1.14,
    restHealMult: 0.76,
    eliteDamageReduction: 0.93,
    towerRangeBonus: -10,
    towerFireRateMult: 0.96,
    spawnIntervalMult: 0.88,
    mapEliteWeightMult: 1.35,
    rules: [
      "Portée des tours −10 px",
      "Cadence des tours −4 %",
      "Vagues +12 % rapides · plus d'élites sur la carte",
    ],
  },
  4: {
    level: 4,
    name: "Tourment IV",
    subtitle: "Serre impitoyable",
    hpMult: 1.74,
    speedMult: 1.23,
    rewardMult: 1.42,
    enemyCountMult: 1.2,
    restHealMult: 0.68,
    eliteDamageReduction: 0.9,
    towerRangeBonus: -15,
    towerFireRateMult: 0.94,
    spawnIntervalMult: 0.82,
    mapEliteWeightMult: 1.55,
    enemyDamageReduction: 0.95,
    extraLeakLivesElite: 1,
    rules: [
      "Ravageurs ordinaires : −5 % dégâts subis",
      "Fuite sur élite / boss : −2 vies au lieu de −1",
      "Repos affaibli · carte plus hostile",
    ],
  },
  5: {
    level: 5,
    name: "Tourment V",
    subtitle: "Carnage final",
    hpMult: 1.96,
    speedMult: 1.3,
    rewardMult: 1.56,
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
    rules: [
      "−2 vies max · cadence −10 % · portée −18 px",
      "Élites renforcées (+1 vague d'ennemis)",
      "Fuite boss : −3 vies · récompenses +62 %",
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
