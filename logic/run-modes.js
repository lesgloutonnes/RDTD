import { MAX_ASCENSION_LEVEL, getAscensionTorment, formatTormentAfflictions, formatTormentThreatLine, canOfferNextTorment } from "../config/ascension.js";
import { applyTormentMaxLivesPenalty, applyTormentToRun } from "./ascension-mechanics.js";
import { MAX_SPIRES } from "../config/campaign.js";
import { createSeededRng, generateShareableSeed, normalizeSeedInput } from "./seeded-rng.js";

export const RUN_MODE_STANDARD = "standard";
export const RUN_MODE_ASCENSION = "ascension";

export const CAMPAIGN_WON_KEY = "gloutonnes_campaign_won_v1";
export const MAX_ASCENSION_BEATEN_KEY = "gloutonnes_max_ascension_beaten_v1";
export const RUN_MODE_PREF_KEY = "gloutonnes_run_mode_pref";
export const ASCENSION_LEVEL_KEY = "gloutonnes_ascension_level";

export const RUN_MODE_LABELS = {
  [RUN_MODE_STANDARD]: "Campagne",
  [RUN_MODE_ASCENSION]: "Tourment",
};

export {
  MAX_ASCENSION_LEVEL,
  getAscensionTorment,
  formatTormentAfflictions,
  formatTormentThreatLine,
  canOfferNextTorment,
};

export function hasCampaignVictory() {
  try {
    return localStorage.getItem(CAMPAIGN_WON_KEY) === "1";
  } catch {
    return false;
  }
}

export function markCampaignVictory() {
  try {
    localStorage.setItem(CAMPAIGN_WON_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function loadMaxAscensionBeaten() {
  try {
    const n = Number(localStorage.getItem(MAX_ASCENSION_BEATEN_KEY));
    if (Number.isFinite(n)) return Math.max(0, Math.min(MAX_ASCENSION_LEVEL, Math.floor(n)));
  } catch {
    /* ignore */
  }
  return 0;
}

export function markAscensionBeaten(level) {
  const lv = Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level) || 1));
  const prev = loadMaxAscensionBeaten();
  if (lv <= prev) return;
  try {
    localStorage.setItem(MAX_ASCENSION_BEATEN_KEY, String(lv));
  } catch {
    /* ignore */
  }
}

export function loadRunModePreference() {
  try {
    const mode = localStorage.getItem(RUN_MODE_PREF_KEY);
    if (mode === RUN_MODE_ASCENSION || mode === RUN_MODE_STANDARD) {
      return mode;
    }
  } catch {
    /* ignore */
  }
  return RUN_MODE_STANDARD;
}

export function saveRunModePreference(mode) {
  try {
    localStorage.setItem(RUN_MODE_PREF_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function loadAscensionLevel() {
  try {
    const n = Number(localStorage.getItem(ASCENSION_LEVEL_KEY));
    if (Number.isFinite(n)) return Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(n)));
  } catch {
    /* ignore */
  }
  return 1;
}

export function saveAscensionLevel(level) {
  try {
    localStorage.setItem(ASCENSION_LEVEL_KEY, String(Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level)))));
  } catch {
    /* ignore */
  }
}


export function loadSeedPreference() {
  return "";
}

export function saveSeedPreference(_seed) {
  /* seed utilisateur retiré — seed interne par run */
}

export function isRunModeUnlocked(mode) {
  if (mode === RUN_MODE_STANDARD) return true;
  return hasCampaignVictory();
}

/** @deprecated Préférer getAscensionTorment — conservé pour compat bundle. */
export function getAscensionModifiers(level = 1) {
  const torment = getAscensionTorment(level);
  return {
    level: torment.level,
    hpMult: torment.hpMult,
    speedMult: torment.speedMult,
    rewardMult: torment.rewardMult,
    label: torment.name,
  };
}

/**
 * Configure game.run pour le mode choisi (avant startNewRun).
 * @returns {() => number} RNG de la run
 */
export function configureRunMode(game, {
  mode = RUN_MODE_STANDARD,
  ascensionLevel = 1,
  seedInput = "",
} = {}) {
  const safeMode = isRunModeUnlocked(mode) ? mode : RUN_MODE_STANDARD;
  const seed = normalizeSeedInput(seedInput || game.run?.seed || generateShareableSeed());
  const rng = createSeededRng(seed);

  game.run.mode = safeMode;
  game.run.seed = seed;
  game.run.ascensionLevel = safeMode === RUN_MODE_ASCENSION
    ? Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(ascensionLevel) || 1))
    : 1;
  game.run.maxSpires = MAX_SPIRES;
  game.run._rng = rng;

  if (safeMode === RUN_MODE_ASCENSION) {
    const torment = getAscensionTorment(game.run.ascensionLevel);
    applyTormentToRun(game, torment.level);
    game.run.encounterHpMult = (game.run.encounterHpMult || 1) * torment.hpMult;
    game.run.encounterSpeedMult = (game.run.encounterSpeedMult || 1) * torment.speedMult;
    game.encounter.rewardMult = (game.encounter?.rewardMult || 1) * torment.rewardMult;
    game.modifiers.rewardMult = (game.modifiers?.rewardMult || 1) * torment.rewardMult;
  }

  return rng;
}

export function getRunRng(game) {
  if (!game.run._rng) {
    game.run._rng = createSeededRng(game.run?.seed || "RDTD");
  }
  return game.run._rng;
}

export function getEffectiveMaxSpires(game) {
  return game.run?.maxSpires ?? MAX_SPIRES;
}

export function formatRunModeLine(game) {
  const mode = game.run?.mode || RUN_MODE_STANDARD;
  const parts = [RUN_MODE_LABELS[mode] || mode];
  if (mode === RUN_MODE_ASCENSION) {
    const torment = getAscensionTorment(game.run.ascensionLevel || 1);
    parts.push(torment.name);
  }
  return parts.join(" · ");
}

export function buildVictoryScreenCopy(game, { score, bestScore, dailyBonus = 0 } = {}) {
  const bonusLine = dailyBonus > 0 ? `\n\nBonus défi du jour : +${dailyBonus.toLocaleString()} score.` : "";
  const scoreLine = `Score final : ${score.toLocaleString()} · Record : ${bestScore.toLocaleString()}${bonusLine}`;
  const nextTorment = canOfferNextTorment(game);
  const isAscension = game.run?.mode === RUN_MODE_ASCENSION;
  const currentLevel = isAscension ? Number(game.run.ascensionLevel || 1) : 0;

  if (isAscension && currentLevel >= MAX_ASCENSION_LEVEL) {
    return {
      title: "Victoire — Maître du Tourment",
      text:
        `Tu as conquis les ${MAX_SPIRES} Spires au ${getAscensionTorment(MAX_ASCENSION_LEVEL).name}.\n\n` +
        "La serre n'a plus de secret pour toi.\n\n" +
        scoreLine,
      buttonText: "Terminer la run",
      ascensionButtonText: "",
    };
  }

  if (nextTorment) {
    const next = getAscensionTorment(nextTorment);
    const intro = isAscension
      ? `Tu as survécu aux ${MAX_SPIRES} Spires en ${getAscensionTorment(currentLevel).name}.\n\n`
      : `Tu as conquis les ${MAX_SPIRES} Spires. La campagne est validée pour le classement.\n\n`;
    const choice = isAscension
      ? `Tu peux clôturer cette run victorieuse ou tenter ${next.name} avec le même deck et les mêmes reliques.\n\n`
      : `Termine ici ou tente ${next.name} : même deck et reliques, mais la serre devient bien plus punitif.\n\n`;
    return {
      title: isAscension ? `Victoire — ${getAscensionTorment(currentLevel).name}` : "Victoire — Maître de la Serre",
      text:
        intro +
        choice +
        `Afflictions de ${next.name} :\n${formatTormentAfflictions(nextTorment)}\n\n` +
        scoreLine,
      buttonText: isAscension ? "Terminer la run" : "Terminer la campagne",
      ascensionButtonText: `Tenter ${next.name}`,
    };
  }

  return {
    title: "Victoire — Maître de la Serre",
    text: `Tu as conquis les ${MAX_SPIRES} Spires.\n\n${scoreLine}`,
    buttonText: "Terminer la campagne",
    ascensionButtonText: "",
  };
}
