import {
  ATLAS_BASE_POISON,
  B52_BASE_ARMOR_DUR,
  B52_BASE_ARMOR_MULT,
  BELLE_SLOW_PASSIVE,
  CAPENSIS_BASE_AOE,
  CREAMSICLE_AURA_BASE_RANGE,
  CREAMSICLE_AURA_COOLDOWN_ACCEL,
  CRIT_CHANCE_CAP,
  FUREUR_RAGE_PER_STACK,
  RYU_BASE_BURN_DPS,
  SCORPIO_BASE_POISON,
  SKILLS,
  SPITTER_BASE_POISON,
  WHITE_TIGER_BASE_PIERCE,
} from "../config/balance.js";
import { getBossTempDamageMult, getBossTempTowerMods } from "./boss-temp-cards.js";

/** Ratio stat actuelle / stat de base du type (reflète les upgrades de niveau). */
export function getTowerStatRatio(tower, towerTypes, stat) {
  if (!tower?.typeKey) return 1;
  const base = towerTypes[tower.typeKey]?.[stat];
  const current = tower?.[stat];
  if (!base || base <= 0 || !current) return 1;
  return current / base;
}

export function getTowerDamageRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "damage");
}

export function getTowerRangeRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "range");
}

export function getTowerFireRateRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "fireRate");
}

/** Durées de passifs (slow, poison, brûlure…) suivent la cadence améliorée. */
export function scaleTowerPassiveDuration(baseSec, tower, towerTypes) {
  return baseSec * getTowerFireRateRatio(tower, towerTypes);
}

export function getCreamsicleAuraRange(game, creamsicleTower = null, towerTypes = {}) {
  const cardBonus = game.modifiers.creamsicleAuraBonus || 0;
  const upgradeMult = creamsicleTower
    ? getTowerRangeRatio(creamsicleTower, towerTypes)
    : 1;
  return Math.round((CREAMSICLE_AURA_BASE_RANGE + cardBonus) * upgradeMult);
}

/** Multiplicateur de cadence équivalent à l'accélération de cooldown Creamsicle. */
export function getCreamsicleHasteMult(tower, game, towers, distanceFn, towerTypes = {}) {
  let accel = 0;
  for (const src of towers) {
    if (src.typeKey !== "drosera_creamsicle") continue;
    if (src.id === tower.id) continue;
    const auraRange = getCreamsicleAuraRange(game, src, towerTypes);
    if (distanceFn(src, tower) <= auraRange) {
      accel += CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(src, towerTypes);
    }
  }
  return 1 + accel;
}

export function getTowerPoisonDps(tower, game, syn = {}, towerTypes = {}) {
  const dmgMult = getTowerDamageRatio(tower, towerTypes);
  const family = tower.family || tower.typeKey;
  let poison = 0;
  if (family === "spitter") {
    poison = SPITTER_BASE_POISON + game.modifiers.spitterPoison + (syn.spitterPoison || 0);
  }
  if (tower.typeKey === "sarracenia_atlas5") {
    poison = ATLAS_BASE_POISON + (game.modifiers.atlasExtraPoison || 0);
  }
  if (tower.typeKey === "drosera_scorpioides") {
    poison = SCORPIO_BASE_POISON;
  }
  return poison * dmgMult;
}

export function getTowerBurnDps(tower, game, towerTypes = {}) {
  return (game.modifiers.ryuBurnDps || RYU_BASE_BURN_DPS) * getTowerDamageRatio(tower, towerTypes);
}

export function getTowerSplashRadius(tower, game, towerTypes = {}) {
  return (game.modifiers.capensisAoe || CAPENSIS_BASE_AOE) * getTowerRangeRatio(tower, towerTypes);
}

export function getTowerArmorShredMult(tower, towerTypes = {}) {
  const dmgRatio = getTowerDamageRatio(tower, towerTypes);
  return B52_BASE_ARMOR_MULT + (dmgRatio - 1) * 0.15;
}

export function getTowerArmorShredDuration(tower, game, towerTypes = {}) {
  return scaleTowerPassiveDuration(game.modifiers.b52ArmorDur || B52_BASE_ARMOR_DUR, tower, towerTypes);
}

export function getTowerSlowPotency(tower, game, towerTypes = {}) {
  const base = game.modifiers.belleSlow || BELLE_SLOW_PASSIVE;
  const fr = getTowerFireRateRatio(tower, towerTypes);
  return Math.max(0.38, base / fr);
}

export function getTowerPierceCount(tower, game, towerTypes = {}) {
  const base = game.modifiers.tigerPierceCount || WHITE_TIGER_BASE_PIERCE;
  return Math.max(base, Math.round(base * getTowerDamageRatio(tower, towerTypes)));
}

/** Texte passif avec valeurs effectives (upgrades + cartes). */
export function getTowerPassiveDescription(tower, game, towerTypes = {}) {
  const syn = game.deckSynergy?.mods || {};
  const type = towerTypes[tower.typeKey];
  if (!type) return null;

  if (tower.typeKey === "drosera_creamsicle") {
    const auraPx = getCreamsicleAuraRange(game, tower, towerTypes);
    const hastePct = Math.round(
      CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(tower, towerTypes) * 100,
    );
    return `Aura : +${hastePct}% cadence aux tours proches (${auraPx} px)`;
  }

  const family = tower.family || tower.typeKey;
  if (family === "spitter" && !type.passive) {
    const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
    const dur = scaleTowerPassiveDuration(3, tower, towerTypes).toFixed(1);
    return `Poison : ${dps} DPS (${dur} s)`;
  }

  switch (type.passive) {
    case "splash": {
      const r = Math.round(getTowerSplashRadius(tower, game, towerTypes));
      return `Impact AoE : 50% dégâts dans ${r} px`;
    }
    case "armor_shred": {
      const mult = getTowerArmorShredMult(tower, towerTypes);
      const dur = getTowerArmorShredDuration(tower, game, towerTypes).toFixed(1);
      return `Morsure : +${Math.round((mult - 1) * 100)}% dégâts subis par la cible (${dur} s)`;
    }
    case "burn": {
      const dps = Math.round(getTowerBurnDps(tower, game, towerTypes) * 10) / 10;
      const maxDur = scaleTowerPassiveDuration(6, tower, towerTypes).toFixed(0);
      return `Combustion : ${dps} DPS, cumulable jusqu'à ${maxDur} s`;
    }
    case "pierce": {
      const n = getTowerPierceCount(tower, game, towerTypes);
      return `Projectile traversant : touche ${n} ennemis`;
    }
    case "heavy_poison": {
      const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
      return `Poison lourd : ${dps} DPS, s'accumule`;
    }
    case "slow": {
      const slow = getTowerSlowPotency(tower, game, towerTypes);
      const dur = scaleTowerPassiveDuration(2.5, tower, towerTypes).toFixed(1);
      return `Nectar : ennemis à ${Math.round(slow * 100)}% de vitesse pendant ${dur} s`;
    }
    case "chain_poison": {
      const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
      return `Poison ${dps} DPS — mort par poison = propagation à ${game.modifiers.scorpioChain || 2} proches`;
    }
  }

  return type.passiveDesc || null;
}

/** Empreinte pour rafraîchir le tooltip flottant (niveau, passifs, aura Creamsicle…). */
export function getTowerTooltipFingerprint(tower, game, {
  eff,
  passiveText,
  range,
  nextRange,
  gold,
}) {
  const creamsicleSig = game.towers
    .filter((t) => t.typeKey === "drosera_creamsicle")
    .map((t) => `${t.id}:${t.level}:${t.range}:${t.fireRate}:${t.x}:${t.y}`)
    .join(";");
  return [
    tower.id,
    tower.level,
    tower.damage,
    tower.range,
    tower.fireRate,
    gold,
    Math.round(eff.damage * 100),
    eff.fireRate.toFixed(3),
    eff.creamsicleMult.toFixed(4),
    eff.boostActive ? 1 : 0,
    range,
    nextRange ?? "",
    passiveText ?? "",
    creamsicleSig,
  ].join("|");
}

/** Stats effectives affichées dans le panneau tour (miroir de updateTowers). */
export function computeTowerEffectiveStats(tower, { game, towers, biome, distanceFn, towerTypes = {} }) {
  const syn = game.deckSynergy?.mods || {};
  const bossMods = getBossTempTowerMods(game);
  const boostFireRate = game.skills.boost.active > 0 ? SKILLS.boost.fireRateMult : 1;
  const boostDmg = game.skills.boost.active > 0 ? SKILLS.boost.damageMult : 1;
  const creamsicleMult = getCreamsicleHasteMult(tower, game, towers, distanceFn, towerTypes);

  const fireRate =
    tower.fireRate
    * game.modifiers.globalFireRate
    * boostFireRate
    * (game.encounter.towerFireRateMult || 1)
    * (syn.globalFireRate || 1)
    * bossMods.fireRateMult
    * creamsicleMult;

  let damage = tower.damage * game.modifiers.globalDamage * boostDmg * getBossTempDamageMult(game);
  if (syn.globalDamage) damage *= syn.globalDamage;
  const family = tower.family || tower.typeKey;
  if (family === "snapper") {
    damage *= game.modifiers.snapperDamage * (syn.snapperDamage || 1) * bossMods.snapperMult;
  }
  if (family === "spitter") damage *= game.modifiers.spitterDamage;
  if (family === "thorn") {
    damage *= game.modifiers.thornDamage * (syn.thornDamage || 1) * bossMods.thornMult;
  }
  if (biome?.id === "heart" && family === "snapper") damage *= 1.12;
  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    damage *= 1 + tower.rageStacks * FUREUR_RAGE_PER_STACK;
  }
  if (tower.typeKey === "dionaea_b52" && game.modifiers.b52DamageBonus) {
    damage *= game.modifiers.b52DamageBonus;
  }

  const critChance = Math.min(
    game.modifiers.critChance + (syn.critChance || 0) + bossMods.critBonus,
    CRIT_CHANCE_CAP,
  );
  const avgDamage = damage * (1 + critChance * (game.modifiers.critMult - 1));

  return {
    damage,
    avgDamage,
    critChance,
    fireRate,
    creamsicleMult,
    boostActive: boostFireRate > 1 || boostDmg > 1,
  };
}
