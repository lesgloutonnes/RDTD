export const FLOOR_SCALING = [
  { hp: 1, speed: 1, reward: 1, count: 0 },
  { hp: 1.04, speed: 1.01, reward: 1.05, count: 0 },
  { hp: 1.11, speed: 1.025, reward: 1.1, count: 0 },
  { hp: 1.2, speed: 1.04, reward: 1.15, count: 1 },
  { hp: 1.31, speed: 1.055, reward: 1.21, count: 1 },
  { hp: 1.45, speed: 1.075, reward: 1.28, count: 2 },
  { hp: 1.63, speed: 1.095, reward: 1.36, count: 2 },
  { hp: 1.86, speed: 1.12, reward: 1.46, count: 3 },
];

export const CARD_RARITY_WEIGHTS = {
  Commune: [72, 68, 64, 58, 54, 50, 46, 40],
  Rare: [24, 27, 30, 34, 36, 38, 40, 42],
  Epique: [4, 5, 6, 8, 10, 12, 14, 18],
};

export const CRIT_CHANCE_CAP = 0.24;

/** Multiplicateur de dégâts sur un coup critique (1,5 = +50 %). */
export const CRIT_DAMAGE_MULT = 1.5;

export const BASE_SPIRE_STARTING_GOLD = 176;

/** Soleil au-dela du budget de la prochaine Spire → score (fin de Spire). */
export const SPIRE_SURPLUS_GOLD_SCORE_RATE = 2;

export const COLLECTOR_BONUSES = {
  herbier: { snapperDamage: 1.08, rewardMult: 1.08 },
  distiller: { spitterDamage: 1.08, skillExtraUsesPerWave: 1 },
  /** Chris (gardien) : dégâts Drosera, ralentissements renforcés, Racines un peu plus forte. */
  gardien: { thornDamage: 1.08, slowPotency: 1.1, snareSlowFactorMult: 0.94 },
};

/** Ultime Chris : gel court toute la carte (en plus du soin). */
export const GARDIEN_ULTIMATE_MAP_SNARE = {
  duration: 4.5,
  slowMult: 0.6,
};

export const FUREUR_RAGE_PER_STACK = 0.07;
export const FUREUR_DEFAULT_MAX_STACKS = 10;

export const BELLE_SLOW_PASSIVE = 0.68;
export const BELLE_SLOW_CARD = 0.56;

/** Poison de base appliqué par toute la famille Sarracenia (spitter). */
export const SPITTER_BASE_POISON = 4;
export const ATLAS_BASE_POISON = 17;
export const SCORPIO_BASE_POISON = 14;
export const RYU_BASE_BURN_DPS = 10;
export const CAPENSIS_BASE_AOE = 55;
export const B52_BASE_ARMOR_DUR = 3;
export const B52_BASE_ARMOR_MULT = 1.25;
export const WHITE_TIGER_BASE_PIERCE = 2;

/** Multiplicateurs par niveau d'amélioration de tour (niv. 1 → 2 → 3). */
export const TOWER_UPGRADE_DAMAGE_MULT = 1.28;
export const TOWER_UPGRADE_RANGE_MULT = 1.08;
export const TOWER_UPGRADE_FIRE_RATE_MULT = 1.12;
export const TOWER_UPGRADE_PROJECTILE_SPEED_MULT = 1.04;

/** Rayon d'aura de base ; multiplié par tower.range / range de base après upgrades. */
export const CREAMSICLE_AURA_BASE_RANGE = 150;
/** Réduction de cooldown voisins : +N × dt par frame (= +N % cadence, ex. 0,5 → +50 %). */
export const CREAMSICLE_AURA_COOLDOWN_ACCEL = 0.38;

export const BOSS_SHIELD_DAMAGE_MULT = 0.42;
export const BOSS_ENRAGE_DAMAGE_MULT = 0.88;

/** Or par kill (avant mult ennemi / reliques / Charles). */
export const KILL_REWARD_BASE = 9;
export const KILL_REWARD_PER_FLOOR = 2;

/** Bonus soleil fin de vague. */
export const WAVE_CLEAR_GOLD = {
  combat: 40,
  elite: 60,
  boss: 88,
};

/** Events non-combat. */
export const EVENT_GOLD = {
  nectar: 50,
  cardFallback: 58,
};

/** Utilisations max d'Engrais / Racines par vague (timer remis a 0 entre les vagues). */
export const SKILL_USES_PER_WAVE = 1;

/** Compétences actives (valeurs de base). */
export const SKILLS = {
  boost: {
    cooldown: 28,
    duration: 7,
    fireRateMult: 1.58,
    damageMult: 1.24,
  },
  snare: {
    cooldown: 24,
    duration: 5,
    slowFactor: 0.48,
  },
};

/**
 * Pression biome par Spire (s'applique en plus du biome d'étage).
 * Spire 2+ : un peu plus de PV/vitesse, or légèrement réduit sur Spire 2.
 */
export const SPIRE_BIOME_PRESSURE = {
  1: { hp: 1, speed: 1, reward: 1 },
  2: { hp: 1.03, speed: 1.025, reward: 0.98 },
  3: { hp: 1.07, speed: 1.04, reward: 0.99 },
  4: { hp: 1.1, speed: 1.055, reward: 0.98 },
  5: { hp: 1.13, speed: 1.07, reward: 0.98 },
};

/** Décalage d'index biome selon la Spire (étages plus hostiles plus tôt). */
export const SPIRE_BIOME_FLOOR_OFFSET = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 3,
};
