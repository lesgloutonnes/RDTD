/** Registre des effets cartes/reliques (logique non sérialisable). */

export const CARD_EFFECT_IDS = new Set([
  "fertile_winds", "acid_sap", "apex_jaws", "thorn_lord", "long_tendrils",
  "sun_contract", "spore_reactor", "hyper_resin", "temporal_moss", "overgrowth",
  "deep_roots", "critical_nectar", "predator_instinct",
  "b52_mastication", "ryu_embrase", "tiger_fangs", "atlas_corrosif", "belle_entrave",
  "fureur_ardente", "creamsicle_nectar", "capensis_explosion", "scorpioides_chaine",
  "gale_folie", "resin_trap", "solar_lens", "beast_hunter", "venom_spread",
  "thorn_wall", "snapper_bite", "moss_armor", "flare_bloom",
]);

export const RELIC_EFFECT_IDS = new Set([
  "sun_idol", "venom_gland", "titan_bark", "pulse_root", "thorn_crown",
  "amber_seed", "moss_cloak", "fang_relic", "bloom_chalice", "spore_satchel",
  "honey_lens", "night_bell", "cursed_amber", "frenzied_spores", "hollow_nectar",
]);

export function applyCardEffect(effectId, ctx) {
  const { game } = ctx;
  const m = game.modifiers;
  switch (effectId) {
    case "fertile_winds": m.globalFireRate *= 1.1; break;
    case "acid_sap": m.spitterPoison += 6; break;
    case "apex_jaws": m.snapperDamage *= 1.26; break;
    case "thorn_lord": m.thornDamage *= 1.18; m.thornRange += 16; break;
    case "long_tendrils": m.globalRange += 14; break;
    case "sun_contract": game.gold += 75; m.rewardMult *= 1.07; break;
    case "spore_reactor": m.globalDamage *= 1.1; break;
    case "hyper_resin": m.projectileSpeedMult *= 1.15; break;
    case "temporal_moss": m.skillExtraUsesPerWave = (m.skillExtraUsesPerWave || 0) + 1; break;
    case "overgrowth": m.boostDurationBonus += 1.8; break;
    case "deep_roots": m.snareDurationBonus += 1.5; break;
    case "critical_nectar": m.critChance += 0.07; break;
    case "predator_instinct": m.globalDamage *= 1.05; m.globalFireRate *= 1.03; break;
    case "b52_mastication":
      m.b52ArmorDur = (m.b52ArmorDur || 3) + 2;
      m.b52DamageBonus = (m.b52DamageBonus || 1) * 1.18;
      break;
    case "ryu_embrase":
      m.ryuBurnDps = (m.ryuBurnDps || 10) + 3;
      m.ryuBurnSpread = true;
      break;
    case "tiger_fangs": m.tigerPierceCount = 3; break;
    case "atlas_corrosif": m.atlasExtraPoison = (m.atlasExtraPoison || 0) + 8; break;
    case "belle_entrave": m.belleSlow = 0.52; break;
    case "fureur_ardente": m.fureurMaxStacks = (m.fureurMaxStacks || 10) + 3; break;
    case "creamsicle_nectar": m.creamsicleAuraBonus = (m.creamsicleAuraBonus || 0) + 14; break;
    case "capensis_explosion": m.capensisAoe = (m.capensisAoe || 55) + 20; break;
    case "scorpioides_chaine": m.scorpioChain = 3; break;
    case "gale_folie": m.critMult *= 1.08; break;
    case "resin_trap": m.snareDurationBonus += 1; break;
    case "solar_lens": m.globalRange += 10; break;
    case "beast_hunter": m.rewardMult *= 1.08; break;
    case "venom_spread": m.spitterPoison += 3; break;
    case "thorn_wall": m.thornDamage *= 1.12; break;
    case "snapper_bite": m.snapperDamage *= 1.12; break;
    case "moss_armor": game.maxLives += 2; game.lives = Math.min(game.maxLives, game.lives + 2); break;
    case "flare_bloom": m.globalDamage *= 1.04; m.globalFireRate *= 1.04; break;
    default:
      throw new Error(`Effet carte inconnu: ${effectId}`);
  }
}

export function applyRelicEffect(effectId, ctx) {
  const { game } = ctx;
  const m = game.modifiers;
  switch (effectId) {
    case "sun_idol": m.rewardMult *= 1.12; break;
    case "venom_gland": m.spitterPoison += 4; break;
    case "titan_bark": {
      game.maxLives += 3;
      if (!ctx.skipInstantHeal) {
        const heal = Math.round(game.maxLives * 0.5);
        game.lives = Math.min(game.maxLives, game.lives + heal);
      }
      break;
    }
    case "pulse_root": m.skillExtraUsesPerWave = (m.skillExtraUsesPerWave || 0) + 1; break;
    case "thorn_crown": m.thornDamage *= 1.18; break;
    case "amber_seed": m.globalFireRate *= 1.08; break;
    case "moss_cloak": m.enemySpawnSpeedMult = (m.enemySpawnSpeedMult || 1) * 0.94; break;
    case "fang_relic": m.snapperDamage *= 1.12; break;
    case "bloom_chalice": m.waveClearHeal = (m.waveClearHeal || 0) + 1; break;
    case "spore_satchel": m.globalDamage *= 1.08; break;
    case "honey_lens": m.globalRange += 10; break;
    case "night_bell": m.critChance += 0.05; break;
    case "cursed_amber":
      m.rewardMult *= 1.15;
      game.maxLives = Math.max(4, game.maxLives - 1);
      game.lives = Math.min(game.lives, game.maxLives);
      break;
    case "frenzied_spores":
      m.globalFireRate *= 1.08;
      m.enemySpawnSpeedMult = (m.enemySpawnSpeedMult || 1) * 1.04;
      break;
    case "hollow_nectar":
      game.gold += 60;
      game.lives = Math.max(1, game.lives - 2);
      break;
    default:
      throw new Error(`Effet relique inconnu: ${effectId}`);
  }
}

export function hydrateCards(rawCards, getContext) {
  return rawCards.map((card) => ({
    ...card,
    effect: () => applyCardEffect(card.effectId, getContext()),
  }));
}

export function hydrateRelics(rawRelics, getContext) {
  return rawRelics.map((relic) => ({
    ...relic,
    effect: (opts = {}) => applyRelicEffect(relic.effectId, { ...getContext(), ...opts }),
  }));
}
