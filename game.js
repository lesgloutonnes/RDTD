import {
  FLOOR_SCALING,
  CARD_RARITY_WEIGHTS,
  CRIT_DAMAGE_MULT,
  BASE_SPIRE_STARTING_GOLD,
  SPIRE_SURPLUS_GOLD_SCORE_RATE,
  COLLECTOR_BONUSES,
  BELLE_SLOW_CARD,
  SKILLS,
  SKILL_USES_PER_WAVE,
  EVENT_GOLD,
} from "./config/balance.js";
import {
  MAX_SPIRES,
  formatSpireThreatLine,
} from "./config/campaign.js";
import {
  mergeBiomeWithSpirePressure,
  settleSpireGoldForNextSpire,
} from "./logic/economy.js";
import { pickBiomeForFloor } from "./logic/biomes.js";
import { computeEncounterStats, generateEncounterQueueByFloor, pickEncounterEnemy } from "./logic/encounter.js";
import { computeRestHeal, getNodeResultAdvanceAction } from "./logic/game-rules.js";
import {
  canActivateSkill,
  formatSkillChargeLabel,
  resetSkillsForNewWave,
  tickSkillTimers,
} from "./logic/skills.js";
import {
  applyCollectorMapSnareToEnemy,
  applySlowToEnemy,
} from "./logic/hunter-slow.js";
import { renderBoardFrame, updateHudView } from "./render/frame.js";
import {
  drawUltimateVfx,
  triggerUltimateVfx,
  updateUltimateVfx,
} from "./render/ultimate-vfx.js";
import {
  drawPlacementRangePreview,
  drawTowerSelectionRange,
} from "./render/range-previews.js";
import { drawEnemySprite } from "./render/enemy.js";
import { drawProjectileSprites } from "./render/projectiles.js";
import { drawWeatherOverlay, updateWeatherState } from "./render/weather.js";
import { drawCombatFx, updateCombatFx } from "./render/fx.js";
import { drawTowerSprite } from "./render/tower.js";
import { drawBoardBackdropStyle, drawBoardPads, drawBoardPaths } from "./render/board.js";
import {
  drawFireflyDecor,
  drawLightingOverlayDecor,
  drawSetDressingDecor,
} from "./render/decor.js";
import {
  drawTowerLevelAura,
  drawTowerUpgradeVfx,
  triggerTowerUpgradeVfx,
  updateTowerUpgradeVfx,
} from "./render/tower-upgrade-vfx.js";
import { bindUiEvents } from "./ui/bindings.js";
import { initMobileShell, updateRunDrawerBadge } from "./ui/mobile-shell.js";
import {
  initViewport,
  updateViewport,
  isTouchLayout,
  isPhoneViewport,
  isTabletViewport,
} from "./ui/viewport.js";
import { initOrientationLock } from "./ui/orientation-lock.js";
import { collapseHudForCombat, initHudCollapse } from "./ui/hud-collapse.js";
import { createRunMusicController } from "./audio/run-music.js";
import { loadGameContent } from "./content/loader.js";
import {
  fetchLeaderboard,
  submitLeaderboardEntry,
  LEADERBOARD_MAX,
} from "./logic/leaderboard-api.js";
import {
  generateSpireMap,
  getLaneAffinityHint,
  getLaneEncounterHpMult,
  getLaneEventLaneTag,
  getLaneEventUniqueBias,
  getMapLanePreview,
  laneGuaranteesWaveModifier,
} from "./logic/map-generation.js";
import {
  applyTormentEncounterPenalties,
  applyTormentMaxLivesPenalty,
  extendQueueForTorment,
  getTormentExtraLeakLives,
  getTormentRestHealMult,
  getTormentShopPriceMult,
} from "./logic/ascension-mechanics.js";
import {
  buildVictoryScreenCopy,
  configureRunMode,
  formatRunModeLine,
  getAscensionTorment,
  getRunRng,
  hasCampaignVictory,
  loadAscensionLevel,
  markAscensionBeaten,
  markCampaignVictory,
  RUN_MODE_ASCENSION,
  RUN_MODE_STANDARD,
  saveAscensionLevel,
  saveRunModePreference,
} from "./logic/run-modes.js";
import { createSeededRng, generateShareableSeed } from "./logic/seeded-rng.js";
import {
  clearRunSave,
  formatRunSaveSummary,
  hasRunSave,
  loadRunState,
  saveRunState,
  serializeRunState,
  shouldPersistRunScreen,
} from "./logic/run-save.js";
import { initShared, shared } from "./game/shared.js";
import { MAX_FLOORS } from "./game/state.js";
import * as mapFlow from "./game/map-flow.js";
import { defeatEnemyLifecycle } from "./game/enemy-lifecycle.js";
import { updateWaveSpawningState } from "./game/wave-spawning.js";
import { finishWaveIfReady } from "./game/wave-completion.js";
import { updateProjectileCombat } from "./game/projectile-combat.js";
import { updateTowerCombat } from "./game/tower-combat.js";
import { updateEnemyCombat } from "./game/enemy-combat.js";
import { renderLeaderboardPanel } from "./game/leaderboard-ui.js";
import { applyRunMutation, getMutationShopDiscount } from "./logic/run-mutations.js";
import {
  pickWaveModifier,
  scaleEncounterQueue,
  applyWaveModifierToEncounter,
} from "./logic/wave-modifiers.js";
import {
  pickNodeObjective,
  shouldRollObjective,
} from "./logic/node-objectives.js";
import {
  beginWaveStats,
  recordTowerDamage,
  recordWaveLeak,
  formatWaveReportHtml,
} from "./logic/wave-report.js";
import {
  beginRunStats,
  recordRunLeak,
  recordRunTowerDamage,
  touchRunProgress,
  finalizeRunStats,
  formatRunEndReportHtml,
} from "./logic/run-stats.js";
import { createEnemyFromType } from "./logic/enemy-model.js";
import {
  DEFAULT_BESTIARY_CONFIG,
  initRunBestiary,
  renderBestiaryListHtml,
  loadBestiaryProgress,
} from "./logic/bestiary.js";
import {
  canUseCollectorUltimate,
  resetCollectorUltimateForSpire,
  activateCollectorUltimate,
} from "./logic/collector-ultimate.js";
import {
  pickBossTempCardPair,
  applyBossTempCardEffect,
  applyBossTempWaveToEnemy,
  getBossTempDamageMult,
  getBossTempTowerMods,
  clearBossTempWave,
} from "./logic/boss-temp-cards.js";
import { computeDeckSynergyState } from "./logic/deck-synergies.js";
import { canAddCardToDeck, isCardAtMaxStack } from "./logic/cards.js";
import {
  applyTowerUpgrade,
  canUpgradeTower,
  createTowerFromType,
  getTowerSellRefund,
  getUpgradeCost,
  needsSellConfirmation,
} from "./logic/tower-model.js";
import {
  getEffectiveTowerRange,
  getTowerTypePreviewRange as getTowerTypePreviewRangeModel,
  getTowerUpgradePreviewRange as getTowerUpgradePreviewRangeModel,
} from "./logic/tower-range.js";
import {
  computeTowerEffectiveStats,
  getCreamsicleAuraRange,
  getTowerArmorShredDuration,
  getTowerArmorShredMult,
  getTowerBurnDps,
  getTowerPassiveDescription,
  getTowerTooltipFingerprint,
  getTowerPierceCount,
  getTowerPoisonDps,
  getTowerSlowPotency,
  getTowerSplashRadius,
  getTowerFireRateRatio,
  scaleTowerPassiveDuration,
} from "./logic/tower-stats.js";
import {
  pickDailyChallenge,
  applyDailyChallenge,
  DAILY_BONUS_SCORE,
  isDailyCompletedToday,
  tryApplyDailyCompletionBonus,
} from "./logic/daily-challenge.js";
import {
  applyHitShieldDamage,
} from "./logic/enemy-abilities.js";
import { pickRandomEvent, applyEventChoiceEffect } from "./logic/event-choices.js";
import { createSfxPlayer } from "./audio/sfx.js";
import {
  updateBossPhases,
  computeDamageToEnemy,
  extendEncounterQueue,
  getEncounterMechanics,
} from "./logic/encounter-mechanics.js";
import { createOnboardingController } from "./ui/onboarding.js";
import { createContextHintsController } from "./ui/context-hints.js";
import {
  enhanceDeckTooltips,
  bindFloatingDeckTooltips,
  bindSmartTowerTooltips,
  bindTowerDockHints,
  getNodeTooltip,
} from "./ui/tooltips.js";
import { createTitleAnimState, updateTitleScreenAnim, drawTitleScreenFrame } from "./render/title-screen.js?v=title-bg-v1";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const livesEl = document.getElementById("lives");
const goldEl = document.getElementById("gold");
const waveEl = document.getElementById("wave");
const enemyCountEl = document.getElementById("enemy-count");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const messageEl = document.getElementById("message");
const deckListEl = document.getElementById("deck-list");
const relicListEl = document.getElementById("relic-list");
const collectorPanel = document.getElementById("collector-panel");
const collectorNameEl = document.getElementById("collector-name");
const collectorPowerEl = document.getElementById("collector-power");
const collectorUltimateBlockEl = document.getElementById("collector-ultimate-block");
const collectorUltimateNameEl = document.getElementById("collector-ultimate-name");
const collectorUltimateDescEl = document.getElementById("collector-ultimate-desc");
const skillUltimateLabelEl = document.getElementById("skill-ultimate-label");

const startWaveBtn = document.getElementById("start-wave");
const speedBtn = document.getElementById("speed-toggle");
const pauseBtn = document.getElementById("pause-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const audioBtn = document.getElementById("audio-btn");
const audioSettingsBtn = document.getElementById("audio-settings-btn");
const audioSettingsPopover = document.getElementById("audio-settings-popover");
const musicVolumeInput = document.getElementById("music-volume");
const sfxVolumeInput = document.getElementById("sfx-volume");

const skillBoostBtn = document.getElementById("skill-boost");
const skillSnareBtn = document.getElementById("skill-snare");
const skillUltimateBtn = document.getElementById("skill-ultimate");
const skillUltimateCdEl = document.getElementById("skill-ultimate-cd");
const mutationOverlay = document.getElementById("mutation-overlay");
const mutationChoicesEl = document.getElementById("mutation-choices");
const crossroadsOverlay = document.getElementById("crossroads-overlay");
const crossroadsChoicesEl = document.getElementById("crossroads-choices");
const waveSummaryOverlay = document.getElementById("wave-summary-overlay");
const waveSummaryBodyEl = document.getElementById("wave-summary-body");
const waveSummaryContinueBtn = document.getElementById("wave-summary-continue");
const bossCardOverlay = document.getElementById("boss-card-overlay");
const bossCardChoicesEl = document.getElementById("boss-card-choices");
const deckSynergyListEl = document.getElementById("synergy-list");
const eventOverlay = document.getElementById("event-overlay");
const eventOverlayTitle = document.getElementById("event-overlay-title");
const eventOverlayDesc = document.getElementById("event-overlay-desc");
const eventChoicesEl = document.getElementById("event-choices");
const dailyBannerEl = document.getElementById("daily-challenge-banner");
const titleDailyPanel = document.getElementById("title-daily-panel");
const titleDailyNameEl = document.getElementById("title-daily-name");
const titleDailyDescEl = document.getElementById("title-daily-desc");
const titleDailyRewardEl = document.getElementById("title-daily-reward");
const titleDailyStatusEl = document.getElementById("title-daily-status");
const sellConfirmOverlay = document.getElementById("sell-confirm-overlay");
const sellConfirmTextEl = document.getElementById("sell-confirm-text");
const sellConfirmOkBtn = document.getElementById("sell-confirm-ok");
const sellConfirmCancelBtn = document.getElementById("sell-confirm-cancel");
const nodeRetryOverlay = document.getElementById("node-retry-overlay");
const nodeRetryAcceptBtn = document.getElementById("node-retry-accept");
const nodeRetryDeclineBtn = document.getElementById("node-retry-decline");
const skillBoostCdEl = document.getElementById("skill-boost-cd");
const skillSnareCdEl = document.getElementById("skill-snare-cd");

const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayText = document.getElementById("overlay-text");
const overlayButton = document.getElementById("overlay-button");
const overlayAscensionBtn = document.getElementById("overlay-ascension-btn");
const overlayLeaderboardBtn = document.getElementById("overlay-leaderboard-btn");
const overlayStatsEl = document.getElementById("overlay-stats");
const overlayCard = document.getElementById("overlay-card");

const draftOverlay = document.getElementById("draft-overlay");
const draftChoicesEl = document.getElementById("draft-choices");
const collectorOverlay = document.getElementById("collector-overlay");
const collectorChoicesEl = document.getElementById("collector-choices");

const mapOverlay = document.getElementById("map-overlay");
const mapFloorLabel = document.getElementById("map-floor-label");
const mapRouteHintEl = document.getElementById("map-route-hint");
const bestiaryListEl = document.getElementById("bestiary-list");
const mapChoicesEl = document.getElementById("map-choices");
const shopOverlay = document.getElementById("shop-overlay");
const shopGoldLabel = document.getElementById("shop-gold-label");
const shopChoicesEl = document.getElementById("shop-choices");
const shopSkipBtn = document.getElementById("shop-skip");
const towerDraftOverlayEl = document.getElementById("tower-draft-overlay");
const towerDraftGridEl = document.getElementById("tower-draft-grid");
const towerDraftConfirmBtn = document.getElementById("tower-draft-confirm");
const towerDraftCountEl = document.getElementById("tower-draft-count");
const leaderboardOverlay = document.getElementById("leaderboard-overlay");
const leaderboardTableEl = document.getElementById("leaderboard-table");
const leaderboardCloseBtn = document.getElementById("leaderboard-close");
const leaderboardBtn = document.getElementById("leaderboard-btn");
const nodeResultOverlay = document.getElementById("node-result-overlay");
const nodeResultTitle = document.getElementById("node-result-title");
const nodeResultText = document.getElementById("node-result-text");
const nodeResultContinueBtn = document.getElementById("node-result-continue");

const runDrawerEl = document.getElementById("run-drawer");
const runDrawerFabEl = document.getElementById("run-drawer-fab");
const runDrawerScrimEl = document.getElementById("run-drawer-scrim");
const runDrawerCloseEl = document.getElementById("run-drawer-close");
const runDrawerBadgeEl = document.getElementById("run-drawer-badge");
const hudStatsEl = document.getElementById("hud-stats");
const statsMoreBtnEl = document.getElementById("stats-more-btn");
const hudCollapseBtnEl = document.getElementById("hud-collapse-btn");

const towerFloatHud = document.getElementById("tower-float-hud");
const towerFloatPanel = document.getElementById("tower-float-panel");
const towerFloatTooltip = document.getElementById("tower-float-tooltip");
const upgradeBtn = document.getElementById("upgrade-btn");
const sellBtn = document.getElementById("sell-btn");
const actionTowersEl = document.getElementById("action-towers");
const canvasZoneEl = document.querySelector(".canvas-zone");
const towerButtons = [...document.querySelectorAll(".tower-btn")];
const titleInputWrap  = document.getElementById("title-input-wrap");
const playerNameInput = document.getElementById("player-name-input");
const titlePlayBtn    = document.getElementById("title-play-btn");
const titleVersionEl = document.getElementById("title-version");
const titleResumePanel = document.getElementById("title-resume-panel");
const titleResumeSummary = document.getElementById("title-resume-summary");
const titleResumeBtn = document.getElementById("title-resume-btn");
const combatObjectiveBanner = document.getElementById("combat-objective-banner");
const cancelPlacementBtn = document.getElementById("cancel-placement-btn");
const mobileToastEl = document.getElementById("mobile-toast");
let mobileToastTimer = null;

const BEST_SCORE_KEY = "plantes_td_best_score_v5";
const PLAYER_NAME_KEY = "gloutonnes_player_name";
const SPEED_PREF_KEY = "gloutonnes_speed_pref";
const AUDIO_ENABLED_KEY = "gloutonnes_audio_enabled";
const MUSIC_VOLUME_KEY = "gloutonnes_music_vol";
const SFX_VOLUME_KEY = "gloutonnes_sfx_vol";

/** Classement local conserve dans le navigateur. */
let leaderboardEntries = [];
let leaderboardDailyEntries = [];
let leaderboardDailyKey = null;
let leaderboardLoadState = "idle";
let leaderboardErrorCode = null;
let leaderboardErrorDetail = null;
let pendingSellTowerId = null;

/** ?spire=5 ou ?devSpire=5 — saute a cette Spire apres le debut de run (test layout). */
function parseDevSpireFromUrl() {
  const params = new URLSearchParams(location.search);
  const raw = params.get("spire") ?? params.get("devSpire");
  if (!raw) return null;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1 || n > MAX_SPIRES) return null;
  return Math.floor(n);
}

let _devJumpSpire = parseDevSpireFromUrl();

// ── Layouts des Spires (chemin + emplacements) ────────────────────────────
const SPIRE_LAYOUTS = [
  {
    name: "La Serre",
    desc: "Le terrain familier de la serre. Maitrise les bases.",
    path: [
      { x: 0,   y: 88  }, { x: 214, y: 88  }, { x: 214, y: 220 },
      { x: 650, y: 220 }, { x: 650, y: 358 }, { x: 228, y: 358 },
      { x: 228, y: 500 }, { x: 960, y: 500 },
    ],
    pads: [
      { x: 117, y: 196 }, { x: 330, y: 112 }, { x: 494, y: 294 },
      { x: 760, y: 164 }, { x: 756, y: 438 }, { x: 517, y: 456 },
      { x: 338, y: 279 }, { x: 122, y: 432 }, { x: 609, y: 95  },
      { x: 598, y: 438 },
    ],
  },
  {
    name: "La Ravine",
    desc: "Deux entrees (nord et sud) avec couloirs plus espaces, puis convergence vers la sortie.",
    paths: [
      [
        { x: 0, y: 55 }, { x: 200, y: 55 }, { x: 200, y: 165 },
        { x: 430, y: 165 }, { x: 650, y: 165 }, { x: 650, y: 285 },
        { x: 880, y: 285 }, { x: 960, y: 285 },
      ],
      [
        { x: 0, y: 485 }, { x: 200, y: 485 }, { x: 200, y: 375 },
        { x: 430, y: 375 }, { x: 650, y: 375 }, { x: 650, y: 285 },
        { x: 880, y: 285 }, { x: 960, y: 285 },
      ],
    ],
    pads: [
      { x: 105, y: 120 }, { x: 105, y: 420 }, { x: 310, y: 270 },
      { x: 520, y: 120 }, { x: 520, y: 420 }, { x: 520, y: 270 },
      { x: 740, y: 200 }, { x: 740, y: 370 }, { x: 785, y: 220 },
      { x: 380, y: 270 },
    ],
  },
  {
    name: "Le Maelstrom",
    desc: "Trois entrees independantes : un couloir en U par ligne d'attaque.",
    paths: [
      [
        { x: 0, y: 90 }, { x: 280, y: 90 }, { x: 280, y: 420 },
        { x: 560, y: 420 }, { x: 560, y: 90 }, { x: 960, y: 90 },
      ],
      [
        { x: 0, y: 270 }, { x: 280, y: 270 }, { x: 280, y: 450 },
        { x: 560, y: 450 }, { x: 560, y: 270 }, { x: 960, y: 270 },
      ],
      [
        { x: 0, y: 450 }, { x: 280, y: 450 }, { x: 280, y: 120 },
        { x: 560, y: 120 }, { x: 560, y: 450 }, { x: 960, y: 450 },
      ],
    ],
    pads: [
      { x: 200, y: 90 }, { x: 200, y: 255 }, { x: 200, y: 420 },
      { x: 480, y: 90 }, { x: 480, y: 255 }, { x: 480, y: 420 },
      { x: 700, y: 90 }, { x: 700, y: 270 }, { x: 700, y: 450 },
      { x: 820, y: 270 },
    ],
  },
  {
    name: "Les Quatre Vents",
    desc: "Quatre entrees : pression constante sur toute la largeur de la serre.",
    paths: [
      [
        { x: 0, y: 58 }, { x: 170, y: 58 }, { x: 300, y: 175 },
        { x: 500, y: 200 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 175 }, { x: 170, y: 175 }, { x: 300, y: 255 },
        { x: 500, y: 265 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 355 }, { x: 170, y: 355 }, { x: 300, y: 310 },
        { x: 500, y: 280 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 482 }, { x: 170, y: 482 }, { x: 300, y: 400 },
        { x: 500, y: 320 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
    ],
    pads: [
      { x: 95, y: 115 }, { x: 95, y: 400 }, { x: 235, y: 128 },
      { x: 400, y: 130 }, { x: 400, y: 390 }, { x: 400, y: 265 },
      { x: 600, y: 200 }, { x: 600, y: 330 }, { x: 780, y: 265 },
      { x: 640, y: 198 }, { x: 200, y: 265 }, { x: 860, y: 200 },
    ],
  },
  {
    name: "Le Pentacle",
    desc: "Cinq couloirs en dents de scie — chaque voie serpente et sort a un niveau different.",
    paths: [
      [
        { x: 0, y: 52 }, { x: 155, y: 52 }, { x: 155, y: 128 },
        { x: 355, y: 128 }, { x: 355, y: 52 }, { x: 555, y: 52 },
        { x: 555, y: 105 }, { x: 775, y: 105 }, { x: 960, y: 88 },
      ],
      [
        { x: 0, y: 168 }, { x: 205, y: 168 }, { x: 205, y: 248 },
        { x: 405, y: 248 }, { x: 405, y: 168 }, { x: 605, y: 168 },
        { x: 605, y: 225 }, { x: 825, y: 225 }, { x: 960, y: 178 },
      ],
      [
        { x: 0, y: 268 }, { x: 245, y: 268 }, { x: 245, y: 405 },
        { x: 485, y: 405 }, { x: 485, y: 155 }, { x: 725, y: 155 },
        { x: 725, y: 268 }, { x: 960, y: 268 },
      ],
      [
        { x: 0, y: 368 }, { x: 205, y: 368 }, { x: 205, y: 288 },
        { x: 405, y: 288 }, { x: 405, y: 368 }, { x: 605, y: 368 },
        { x: 605, y: 312 }, { x: 825, y: 312 }, { x: 960, y: 358 },
      ],
      [
        { x: 0, y: 488 }, { x: 155, y: 488 }, { x: 155, y: 412 },
        { x: 355, y: 412 }, { x: 355, y: 488 }, { x: 555, y: 488 },
        { x: 555, y: 435 }, { x: 775, y: 435 }, { x: 960, y: 468 },
      ],
    ],
    pads: [
      { x: 88, y: 90 }, { x: 258, y: 90 }, { x: 452, y: 62 },
      { x: 655, y: 78 }, { x: 860, y: 50 },
      { x: 108, y: 208 }, { x: 308, y: 208 }, { x: 506, y: 254 },
      { x: 750, y: 506 },
      { x: 320, y: 326 }, { x: 330, y: 314 }, { x: 704, y: 368 },
      { x: 68, y: 428 }, { x: 254, y: 506 }, { x: 506, y: 326 },
      { x: 655, y: 458 }, { x: 878, y: 418 },
    ],
  },
];

// ── Chemins et emplacements actifs (mutables selon la Spire) ──────────────
let paths = [SPIRE_LAYOUTS[0].path.map((p) => ({ ...p }))];
let path = paths[0];
let pads = SPIRE_LAYOUTS[0].pads.map((p) => ({ ...p, occupiedBy: null }));

function getLayoutRoutes(layout) {
  if (layout.paths?.length) return layout.paths;
  return [layout.path];
}

/** Budget de départ par Spire = base × nombre de voies ennemies */
function getStartingGoldForSpire(spireNumber) {
  const layout = SPIRE_LAYOUTS[Math.min(spireNumber - 1, SPIRE_LAYOUTS.length - 1)];
  const routeCount = getLayoutRoutes(layout).length;
  return BASE_SPIRE_STARTING_GOLD * routeCount;
}

function applySpireLayout(layout) {
  paths = getLayoutRoutes(layout).map((route) => route.map((p) => ({ ...p })));
  path = paths[0];
  pads.length = 0;
  layout.pads.forEach((p) => pads.push({ ...p, occupiedBy: null }));
  game.spawnPathInc = 0;
}

function enemyRoute(enemy) {
  return paths[enemy.pathId ?? 0] ?? paths[0];
}

let towerTypes = {};
let enemyTypes = {};
let CARD_LIBRARY = [];
let RELIC_LIBRARY = [];
let BIOMES = [];
let COLLECTOR_LIBRARY = [];
let ENCOUNTER_CONFIG = { elite: {}, boss: {} };
let ONBOARDING_CONFIG = { steps: [] };
let TOOLTIPS_CONFIG = {};
let MAP_NODE_POOL = [];
let MAP_LANE_CONFIG = {};
let MUTATION_LIBRARY = [];
let WAVE_MODIFIER_LIBRARY = [];
let NODE_OBJECTIVE_LIBRARY = [];
let BOSS_TEMP_CARD_LIBRARY = [];
let DECK_SYNERGY_CONFIG = { families: [] };
let DAILY_CHALLENGES = [];
let EVENT_LIBRARY = [];
let META_CONFIG = {};
let BESTIARY_CONFIG = DEFAULT_BESTIARY_CONFIG;
let onboarding = null;
let contextHints = null;
let _afterWaveSummaryCallback = null;

const game = {
  lives: 20,
  maxLives: 20,
  gold: 150,
  score: 0,
  bestScore: Number(localStorage.getItem(BEST_SCORE_KEY) || 0),
  selectedTowerType: null,
  selectedTowerId: null,
  placementHoverPad: null,
  speedMultiplier: 1,
  waveActive: false,
  waveCount: 0,
  animT: 0,
  spawnTimer: 0,
  spawnQueue: [],
  enemies: [],
  enemyById: new Map(),
  towers: [],
  projectiles: [],
  particles: [],
  floatTexts: [],
  rainDrops: [],
  decor: {
    leaves: [],
    stones: [],
    mushrooms: [],
    fireflies: [],
  },
  biome: null,
  fogOffset: 0,
  enemyIdInc: 1,
  spawnPathInc: 0,
  towerIdInc: 1,
  lastTs: 0,
  screen: "menu",
  collector: {
    selectedId: null,
  },
  towerDeck: [],
  draft: { activeChoices: [] },
  shop: { offers: [] },
  deck: { picked: [] },
  relics: { picked: [] },
  spire: {
    map: [],
    floor: 0,
    lane: 1,
    crossroadsOfferCardId: null,
    lanesMerged: false,
    pathTrail: [],
    currentNodeType: null,
    pendingAdvanceAfterDraft: false,
    spireNumber: 1,
    pendingSpireTransition: false,
  },
  run: {
    mutationId: null,
    shopCardDiscount: 0,
    encounterSpeedMult: 1,
    encounterHpMult: 1,
    dailySpeedMult: 1,
    dailyHpMult: 1,
    dailyWaveClearMult: 1,
    nodeRetryAvailable: true,
  },
  deckSynergy: { active: [], mods: {} },
  daily: null,
  waveModifier: null,
  nodeObjective: null,
  waveStats: null,
  wavePaused: false,
  collectorUltimate: { usedThisSpire: false },
  bossCardPhaseDone: false,
  bossTempWave: null,
  ultimateVfxList: [],
  towerUpgradeVfxList: [],
  synergyFlash: null,
  pendingEvent: null,
  modifiers: {},
  encounter: {
    hpMult: 1,
    speedMult: 1,
    rewardMult: 1,
    countBonus: 0,
    towerRangeBonus: 0,
    towerFireRateMult: 1,
  },
  skills: {
    boost: {
      cooldown: SKILLS.boost.cooldown,
      timer: 0,
      duration: SKILLS.boost.duration,
      active: 0,
      usesMax: SKILL_USES_PER_WAVE,
      usesLeft: SKILL_USES_PER_WAVE,
    },
    snare: {
      cooldown: SKILLS.snare.cooldown,
      timer: 0,
      duration: SKILLS.snare.duration,
      active: 0,
      usesMax: SKILL_USES_PER_WAVE,
      usesLeft: SKILL_USES_PER_WAVE,
    },
  },
};

const hudCache = {
  lives: null,
  gold: null,
  wave: null,
  enemyCount: null,
  score: null,
  bestScore: null,
};

let backgroundGradient = null;
let grassPattern = null;
let dirtPattern = null;
let pathPebbles = [];

const BIOME_DECOR_PALETTES = {
  greenhouse: {
    leaves: ["#6fb44d", "#477f38", "#9bcf66"],
    stones: ["#7e876f", "#5e6f58"],
    pebbles: ["#b89d70", "#f0d9a7"],
  },
  swamp: {
    leaves: ["#5e8f52", "#2f6338", "#9bb965"],
    stones: ["#62715a", "#4c5a44"],
    pebbles: ["#8d7652", "#c7a86a"],
  },
  hive: {
    leaves: ["#aaa14a", "#6f7132", "#d2bd55"],
    stones: ["#8f7a49", "#6a5635"],
    pebbles: ["#c88d45", "#ffd37a"],
  },
  night: {
    leaves: ["#557d78", "#2c5552", "#8fc6c2"],
    stones: ["#66747a", "#43545c"],
    pebbles: ["#7a6c5f", "#c7b09a"],
  },
  heart: {
    leaves: ["#874c6b", "#4d2f4a", "#c06a86"],
    stones: ["#76505c", "#4c3440"],
    pebbles: ["#9c6a58", "#d49b83"],
  },
};

const audio = {
  enabled: true,
  ctx: null,
  musicVolume: 0.45,
  sfxVolume: 1,
};

function makeSprite(svgMarkup) {
  const img = new Image();
  img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`;
  return img;
}

const isLocalDevHost = location.protocol === "file:" || location.hostname === "127.0.0.1" || location.hostname === "localhost";
const localAssetCacheBust = isLocalDevHost ? String(Date.now()) : "";

function withLocalAssetCacheBust(src) {
  if (!localAssetCacheBust) return src;
  const url = new URL(src, location.href);
  url.searchParams.set("dev-cache-bust", localAssetCacheBust);
  return url.href;
}

function makeImageSprite(src) {
  const img = new Image();
  img.src = withLocalAssetCacheBust(src);
  return img;
}

function makeFallbackImageSprite(src, fallbackSprite) {
  const img = makeImageSprite(src);
  img.onerror = () => {
    img.onerror = null;
    if (fallbackSprite?.src) img.src = fallbackSprite.src;
  };
  return img;
}

const BIOME_FLOOR_TEXTURES = {
  greenhouse: makeImageSprite("./assets/textures/biome-greenhouse-floor.png?v=biome-floor-v1"),
  swamp: makeImageSprite("./assets/textures/biome-swamp-floor.png?v=biome-floor-v1"),
  hive: makeImageSprite("./assets/textures/biome-hive-floor.png?v=biome-floor-v1"),
  night: makeImageSprite("./assets/textures/biome-night-floor.png?v=biome-floor-v1"),
  heart: makeImageSprite("./assets/textures/biome-heart-floor.png?v=biome-floor-v1"),
};

function drawCoverImage(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawW = image.naturalWidth * scale;
  const drawH = image.naturalHeight * scale;
  ctx.drawImage(image, x + (width - drawW) / 2, y + (height - drawH) / 2, drawW, drawH);
}

function isTowerPhotoPortrait(path) {
  return /\.(png|webp|jpe?g)$/i.test(path || "");
}

function getTowerPortraitPath(towerId) {
  const type = towerTypes[towerId];
  if (type?.portrait) return type.portrait;
  return `./assets/towers/${towerId}.svg`;
}

/** Focal vertical des miniatures deck (lisibilite a petite taille). */
const DECK_PORTRAIT_FOCUS = {
  snapper: "center 34%",
  dionaea_b52: "center 38%",
  dionaea_akai_ryu: "center 36%",
  dionaea_white_tiger: "center 32%",
  spitter: "center 30%",
  sarracenia_atlas5: "center 28%",
  sarracenia_scarlet_belle: "center 32%",
  sarracenia_fureur: "center 36%",
  thorn: "center 42%",
  drosera_creamsicle: "center 38%",
  drosera_regia: "center 44%",
  drosera_scorpioides: "center 40%",
};

function getDeckPortraitPath(towerId) {
  return getTowerPortraitPath(towerId);
}

function getTowerFallbackPortraitPath(towerId) {
  return `./assets/towers/${towerId}.svg`;
}

function makeLayeredPortrait(primary, fallback) {
  return fallback && primary !== fallback
    ? `url('${primary}'), url('${fallback}')`
    : `url('${primary}')`;
}

function getTowerPortraitLayers(towerId) {
  return makeLayeredPortrait(getTowerPortraitPath(towerId), getTowerFallbackPortraitPath(towerId));
}

function getCollectorFallbackPortraitPath(collectorId) {
  const byId = {
    herbier: "./assets/collectors/charles-herbier.svg",
    distiller: "./assets/collectors/mayeu-distiller.svg",
    gardien: "./assets/collectors/chris-gardien.svg",
  };
  return byId[collectorId] || "";
}

function getCollectorPortraitLayers(collector) {
  return makeLayeredPortrait(collector.portrait, getCollectorFallbackPortraitPath(collector.id));
}

const sprites = {
  towers: {
    snapper: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='35%' cy='22%'><stop offset='0' stop-color='#c8f7b0'/><stop offset='.45' stop-color='#4a9e3a'/><stop offset='1' stop-color='#1a4d18'/></radialGradient></defs><ellipse cx='32' cy='44' rx='17' ry='8' fill='#142a12' opacity='.55'/><path d='M19 35c-7-12 1-25 14-26 14-1 23 13 16 27-5 11-24 12-30-1z' fill='url(#g)'/><path d='M19 29c8 7 22 7 31 0-3 11-25 15-31 0z' fill='#0f2a0c'/><path d='M24 30l4 7 4-7 4 7 4-7' stroke='#eaffd4' stroke-width='2' fill='none'/><circle cx='39' cy='20' r='5' fill='#e8ffd8'/><circle cx='41' cy='20' r='2' fill='#1a3a14'/><path d='M22 48c9-9 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    spitter: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#c8f884'/><stop offset='.45' stop-color='#55a93a'/><stop offset='1' stop-color='#16441b'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#edffad'/><stop offset='1' stop-color='#5fb044'/></linearGradient></defs><ellipse cx='32' cy='53' rx='16' ry='6' fill='#10220e' opacity='.45'/><path d='M21 53c3-10 4-24 3-34 3-3 7-5 12-5 6 0 10 3 13 7-3 11-4 24-2 32-7 4-19 4-26 0z' fill='url(#tube)'/><path d='M36 17c7 10 7 25 5 36' stroke='#184c1c' stroke-width='2' fill='none' opacity='.45'/><path d='M28 19c-1 10 0 23 2 34' stroke='#dfff9c' stroke-width='2' fill='none' opacity='.55'/><path d='M17 19c4-12 21-18 36-7-8 1-14 6-17 13-5-4-11-6-19-6z' fill='url(#hood)'/><ellipse cx='34' cy='21' rx='13' ry='8' fill='#e8ff9b'/><ellipse cx='34' cy='22' rx='9' ry='5' fill='#102414' opacity='.88'/><path d='M25 19c6-4 14-4 20 0' stroke='#f4ffc8' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M21 56c8-6 17-6 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    thorn: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#d0ffa0'/><stop offset='.5' stop-color='#3a8c38'/><stop offset='1' stop-color='#173614'/></radialGradient></defs><ellipse cx='32' cy='46' rx='16' ry='7' fill='#0e1e0a' opacity='.5'/><circle cx='32' cy='30' r='13' fill='url(#g)'/><path d='M32 17l2 8 7-4-4 8 8 2-8 3 4 7-7-4-2 8-2-8-7 4 4-7-8-3 8-2-4-8 7 4z' fill='#c0f890' opacity='.9'/><circle cx='32' cy='30' r='5' fill='#227022'/><path d='M20 49c9-8 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_regia: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='45%'><stop offset='0' stop-color='#b8f7a0'/><stop offset='.5' stop-color='#3d8f32'/><stop offset='1' stop-color='#1a4a18'/></radialGradient></defs><ellipse cx='32' cy='48' rx='22' ry='9' fill='#142a12' opacity='.55'/><circle cx='32' cy='30' r='20' fill='url(#g)'/><path d='M32 4l6 17 17-7-9 16 15 9-17 3 3 18-14-13-14 13 3-18-17-3 15-9-9-16-17 7z' fill='#9ef078' opacity='.92'/><path d='M32 12l4 12 11-5-6 12 12 5-12 4 4 12-11-5-4 12-4-12-11 5 6-12-12-5z' fill='#d8ffb8' opacity='.75'/><circle cx='32' cy='30' r='9' fill='#2a6b22'/><path d='M18 52c11-9 22-9 32 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    // ── Variantes ────────────────────────────────────────────────────────
    dionaea_b52: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='38%' cy='20%'><stop offset='0' stop-color='#8ee86a'/><stop offset='.45' stop-color='#2d6b22'/><stop offset='1' stop-color='#0a1208'/></radialGradient></defs><ellipse cx='32' cy='50' rx='24' ry='10' fill='#080e08' opacity='.6'/><path d='M6 34c-4-18 6-32 26-34 22-2 32 16 22 32-8 16-38 18-48-2z' fill='url(#g)'/><path d='M8 28c12 10 36 11 48 0-8 14-40 16-48 0z' fill='#050a06'/><path d='M12 24l7 11 7-11 7 11 7-11 6 11 6-11' stroke='#1a1a1a' stroke-width='2.5' fill='none' stroke-linecap='round'/><path d='M12 24l7 11 7-11 7 11 7-11 6 11' stroke='#7cff5a' stroke-width='1.5' fill='none' stroke-linecap='round'/><circle cx='44' cy='14' r='8' fill='#6ecf50'/><circle cx='46' cy='14' r='3.5' fill='#0a0a0a'/><path d='M14 54c12-9 24-9 36 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    dionaea_akai_ryu: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='35%' cy='25%'><stop offset='0' stop-color='#ffa060'/><stop offset='.5' stop-color='#CC3300'/><stop offset='1' stop-color='#600f00'/></radialGradient></defs><ellipse cx='32' cy='46' rx='19' ry='8' fill='#1a0600' opacity='.55'/><path d='M14 33c-5-13 3-25 18-26 14-1 23 13 17 27-5 11-28 12-35-1z' fill='url(#g)'/><path d='M15 29c8 8 26 8 35 0-3 10-28 14-35 0z' fill='#3d0e00'/><path d='M18 27l5 8 5-8 5 8 5-8 4 8' stroke='#ffa060' stroke-width='2.5' fill='none' stroke-linecap='round'/><circle cx='40' cy='18' r='6' fill='#ffd0a0'/><circle cx='42' cy='18' r='2.5' fill='#200800'/><path d='M40 12l4-5 2 6' stroke='#ff7020' stroke-width='1.5' fill='none'/><path d='M18 50c10-8 20-8 30 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    dionaea_white_tiger: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='36%' cy='22%'><stop offset='0' stop-color='#f8fff0'/><stop offset='.42' stop-color='#c8e8b0'/><stop offset='1' stop-color='#4a6a42'/></radialGradient></defs><ellipse cx='32' cy='46' rx='18' ry='8' fill='#1a2218' opacity='.5'/><path d='M16 32c-4-12 4-24 18-26 16-2 24 12 18 26-4 12-28 14-36 0z' fill='url(#g)'/><path d='M17 28c8 8 24 8 34 0-4 10-30 12-34 0z' fill='#2a4a28'/><path d='M20 26l4 7 4-7 4 7 4-7 4 7' stroke='#e8ffe0' stroke-width='2' fill='none' stroke-linecap='round'/><path d='M18 24l3 5M26 22l2 4M34 22l2 4M42 24l3 5' stroke='#88aa70' stroke-width='1.5' fill='none' opacity='.85'/><circle cx='40' cy='18' r='5.5' fill='#f0ffe8'/><circle cx='41.5' cy='18' r='2' fill='#2a4a20'/><path d='M18 50c10-8 20-8 30 0' stroke='#3a6a30' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_atlas5: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f7fff0'/><stop offset='.4' stop-color='#84c96b'/><stop offset='1' stop-color='#174a25'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffffff'/><stop offset='1' stop-color='#86c86d'/></linearGradient></defs><ellipse cx='32' cy='54' rx='18' ry='6.5' fill='#10220e' opacity='.45'/><path d='M19 54c3-12 4-28 2-39 4-4 9-6 15-6 7 0 13 4 16 9-4 13-5 27-2 36-8 5-23 5-31 0z' fill='url(#tube)'/><path d='M37 14c8 12 8 28 5 40' stroke='#184c1c' stroke-width='2.2' fill='none' opacity='.42'/><path d='M28 16c-1 12 0 27 2 38' stroke='#fbfff0' stroke-width='2.2' fill='none' opacity='.65'/><path d='M13 16c5-14 25-21 43-8-10 1-16 7-20 16-6-5-13-8-23-8z' fill='url(#hood)'/><ellipse cx='35' cy='18' rx='15' ry='8.5' fill='#fbfff0'/><ellipse cx='35' cy='19' rx='10' ry='5.3' fill='#102414' opacity='.88'/><path d='M24 16c7-5 16-5 23 0' stroke='#ffffff' stroke-width='2.7' stroke-linecap='round' fill='none'/><path d='M20 57c9-7 19-7 29 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_scarlet_belle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffb29d'/><stop offset='.43' stop-color='#c8322d'/><stop offset='1' stop-color='#5b1010'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffd5c8'/><stop offset='1' stop-color='#b82327'/></linearGradient></defs><ellipse cx='32' cy='53' rx='17' ry='6' fill='#190504' opacity='.46'/><path d='M20 53c3-11 4-25 2-35 4-4 8-6 14-6 7 0 12 4 15 8-4 12-5 24-2 33-8 5-21 5-29 0z' fill='url(#tube)'/><path d='M36 17c7 11 7 25 5 36' stroke='#5e0e0e' stroke-width='2' fill='none' opacity='.5'/><path d='M28 18c-1 11 0 25 2 35' stroke='#ffc2b6' stroke-width='2' fill='none' opacity='.58'/><path d='M15 18c5-13 23-20 39-8-9 1-15 7-18 15-6-5-12-7-21-7z' fill='url(#hood)'/><ellipse cx='34' cy='20' rx='14' ry='8' fill='#ffb5a8'/><ellipse cx='34' cy='21' rx='9.5' ry='5' fill='#200808' opacity='.88'/><path d='M24 18c6-5 15-5 22 0' stroke='#ffd8d0' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M29 24c1 8 1 18 0 27M40 24c1 8 0 18-1 27' stroke='#ff7770' stroke-width='1.6' fill='none' opacity='.55'/><path d='M20 56c8-7 18-7 28 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_fureur: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#fff6a4'/><stop offset='.43' stop-color='#d4a800'/><stop offset='1' stop-color='#654800'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#fffbd0'/><stop offset='1' stop-color='#c28b00'/></linearGradient></defs><ellipse cx='32' cy='53' rx='17' ry='6' fill='#211b06' opacity='.46'/><path d='M20 53c3-11 4-26 2-36 4-4 8-6 14-6 7 0 12 4 15 8-4 13-5 25-2 34-8 5-21 5-29 0z' fill='url(#tube)'/><path d='M36 16c7 12 7 26 5 37' stroke='#6f5200' stroke-width='2' fill='none' opacity='.5'/><path d='M28 18c-1 11 0 25 2 35' stroke='#fff2a0' stroke-width='2' fill='none' opacity='.62'/><path d='M15 17c5-13 23-20 39-8-9 1-15 7-18 15-6-5-12-7-21-7z' fill='url(#hood)'/><ellipse cx='34' cy='19' rx='14' ry='8' fill='#fff3a0'/><ellipse cx='34' cy='20' rx='9.5' ry='5' fill='#211807' opacity='.88'/><path d='M24 17c6-5 15-5 22 0' stroke='#fffbd0' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M29 23c1 8 1 19 0 28M40 23c1 8 0 19-1 28' stroke='#fff0a0' stroke-width='1.6' fill='none' opacity='.6'/><path d='M17 28l-7-6M50 28l8-6M17 40l-8-2M50 40l8-2' stroke='#ffe566' stroke-width='2.5' stroke-linecap='round' fill='none' opacity='.75'/><path d='M20 56c8-7 18-7 28 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_creamsicle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#ffe0c0'/><stop offset='.5' stop-color='#E8895E'/><stop offset='1' stop-color='#7a3820'/></radialGradient></defs><ellipse cx='32' cy='46' rx='17' ry='8' fill='#1e0e06' opacity='.5'/><circle cx='32' cy='30' r='14' fill='url(#g)'/><path d='M32 16l3 11 9-6-5 9 11 4-11 4 5 9-9-6-3 11-3-11-9 6 5-9-11-4 11-4-5-9 9 6z' fill='#ffe0b0' opacity='.85'/><circle cx='32' cy='30' r='6' fill='#b86040'/><path d='M22 50c8-8 16-8 24 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_scorpioides: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#90ff60'/><stop offset='.5' stop-color='#2D5A27'/><stop offset='1' stop-color='#0d200a'/></radialGradient></defs><ellipse cx='32' cy='46' rx='16' ry='8' fill='#080f06' opacity='.55'/><circle cx='32' cy='30' r='13' fill='url(#g)'/><path d='M32 17l2 8 6-5-3 9 9 1-9 4 5 7-8-3 1 9-3-9-6 5 3-8-8-2 9-3-3-8 6 5z' fill='#80ff40' opacity='.9'/><circle cx='32' cy='30' r='5' fill='#1a4016'/><path d='M42 24 Q50 18 52 26 Q54 34 46 36' stroke='#70ff30' stroke-width='2' fill='none' stroke-linecap='round'/><circle cx='47' cy='36' r='2.5' fill='#7fff44'/><path d='M20 49c9-8 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
  },
  enemies: {
    crawler: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><defs><radialGradient id='g'><stop offset='0' stop-color='#9b6140'/><stop offset='1' stop-color='#3f2116'/></radialGradient></defs><ellipse cx='24' cy='34' rx='14' ry='6' fill='#1b120d' opacity='.35'/><ellipse cx='24' cy='26' rx='15' ry='11' fill='url(#g)'/><path d='M11 29c8 4 17 4 26 0' stroke='#2d170f' stroke-width='2' opacity='.45'/><circle cx='20' cy='23' r='2.2' fill='#f0dcc9'/><circle cx='29' cy='23' r='2.2' fill='#f0dcc9'/></svg>"
    ),
    beetle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52'><defs><radialGradient id='g'><stop offset='0' stop-color='#8a7058'/><stop offset='1' stop-color='#30231c'/></radialGradient></defs><ellipse cx='26' cy='38' rx='16' ry='6' fill='#17100c' opacity='.35'/><ellipse cx='26' cy='29' rx='16' ry='12' fill='url(#g)'/><path d='M26 17v23' stroke='#211610' stroke-width='2'/><rect x='20' y='15' width='12' height='12' rx='4' fill='#6c5442'/><path d='M12 29h-7M40 29h7M15 35l-6 5M37 35l6 5' stroke='#211610' stroke-width='2' stroke-linecap='round'/></svg>"
    ),
    wasp: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'><ellipse cx='21' cy='31' rx='10' ry='4' fill='#180d09' opacity='.3'/><ellipse cx='21' cy='24' rx='11' ry='8' fill='#8d3a1f'/><path d='M14 23h14M13 27h16' stroke='#ffc766' stroke-width='2'/><ellipse cx='14' cy='17' rx='8' ry='4' fill='#d6e9f7' opacity='.75'/><ellipse cx='28' cy='17' rx='8' ry='4' fill='#d6e9f7' opacity='.75'/><path d='M31 24l7 2-7 3' fill='#3b190e'/></svg>"
    ),
    slug: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='46' height='30'><ellipse cx='23' cy='22' rx='18' ry='6' fill='#2a3a20' opacity='.35'/><ellipse cx='23' cy='16' rx='19' ry='9' fill='#6a8a58'/><ellipse cx='10' cy='15' rx='4' ry='3' fill='#8ab070'/><circle cx='8' cy='14' r='1.2' fill='#1a2810'/></svg>"
    ),
    snail: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='40'><ellipse cx='24' cy='30' rx='16' ry='5' fill='#1a140f' opacity='.35'/><ellipse cx='30' cy='18' rx='12' ry='10' fill='#8a7a68'/><path d='M22 24h14' stroke='#5a4a38' stroke-width='2'/><ellipse cx='14' cy='26' rx='8' ry='5' fill='#9ab088'/><circle cx='11' cy='25' r='1.3' fill='#203018'/></svg>"
    ),
    hornet: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><ellipse cx='22' cy='32' rx='11' ry='4' fill='#180d09' opacity='.3'/><ellipse cx='22' cy='24' rx='12' ry='9' fill='#1a1410'/><path d='M12 23h20M11 27h22M11 31h22' stroke='#f0b030' stroke-width='2.2'/><ellipse cx='14' cy='16' rx='9' ry='4' fill='#e8f4ff' opacity='.8'/><ellipse cx='30' cy='16' rx='9' ry='4' fill='#e8f4ff' opacity='.8'/><path d='M33 25l8 3-8 4' fill='#5a3010'/></svg>"
    ),
    boss: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72'><defs><radialGradient id='g'><stop offset='0' stop-color='#7b5e50'/><stop offset='1' stop-color='#21130f'/></radialGradient></defs><ellipse cx='36' cy='58' rx='25' ry='8' fill='#130b09' opacity='.38'/><circle cx='36' cy='40' r='24' fill='url(#g)'/><circle cx='36' cy='28' r='11' fill='#6d5047'/><path d='M18 31l-8-9M54 31l8-9M18 45l-11 5M54 45l11 5' stroke='#23140f' stroke-width='4' stroke-linecap='round'/><circle cx='31' cy='28' r='2.5' fill='#f4dbc6'/><circle cx='42' cy='28' r='2.5' fill='#f4dbc6'/><path d='M26 43c7 5 14 5 21 0' stroke='#f08f2f' stroke-width='3' fill='none'/></svg>"
    ),
  },
};

Object.keys(sprites.towers).forEach((id) => {
  sprites.towers[id] = makeFallbackImageSprite(`./assets/towers/${id}.png?v=towers-png-v2`, sprites.towers[id]);
});

Object.keys(sprites.enemies).forEach((id) => {
  sprites.enemies[id] = makeFallbackImageSprite(`./assets/enemies/${id}.png?v=enemies-png-v1`, sprites.enemies[id]);
});

const runMusic = createRunMusicController({ audio, ensureAudioContext });
let sfx = null;

const MAX_PARTICLES = 260;

function ensureAudioContext() {
  if (audio.ctx) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  audio.ctx = new AudioCtx();
}

function playSound(freq, duration, type = "sine", gainValue = 0.035) {
  if (!audio.enabled) return;
  const scaledGain = gainValue * (audio.sfxVolume ?? 1);
  if (scaledGain <= 0.0001) return;
  ensureAudioContext();
  if (!audio.ctx) return;
  if (audio.ctx.state === "suspended") audio.ctx.resume();
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  const now = audio.ctx.currentTime;
  const attack = Math.min(0.006, duration * 0.25);
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(scaledGain, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(audio.ctx.destination);
  osc.start();
  osc.stop(now + duration);
}

if (!sfx) sfx = createSfxPlayer(playSound);

function getSynergyTierKeys(state) {
  return (state?.active || []).map((a) => `${a.familyId}:${a.tier?.minCards}`);
}

function updateRunMusic() {
  if (!audio.enabled) {
    runMusic.stop();
    return;
  }
  if (game.screen === "title") return;

  const biomeId = game.biome?.id || getBiomeForFloor(game.spire.floor)?.id || "greenhouse";
  const spireNumber = game.spire.spireNumber || 1;

  const runScreens = new Set(["map", "playing", "paused", "menu", "collector", "mutation", "nodeResult", "event", "crossroads"]);
  if (runScreens.has(game.screen)) {
    if (runMusic.getMode() !== "run") {
      runMusic.transitionToRun({ biomeId, spireNumber });
    } else {
      runMusic.setBiomeContext({ biomeId, spireNumber });
    }
  }
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceSq(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function worldPosOfEnemy(enemy) {
  const route = enemyRoute(enemy);
  return lerp(route[enemy.segment], route[enemy.segment + 1], enemy.t);
}

function findRouteFacingX(route, startSegment, step) {
  for (let segment = startSegment; segment >= 0 && segment < route.length - 1; segment += step) {
    const dx = route[segment + 1].x - route[segment].x;
    if (Math.abs(dx) > 0.5) return Math.sign(dx);
  }
  return 0;
}

function enemyFacingX(enemy) {
  const route = enemyRoute(enemy);
  const currentFacing = findRouteFacingX(route, enemy.segment, 1);
  if (currentFacing) return currentFacing;
  const previousFacing = findRouteFacingX(route, enemy.segment - 1, -1);
  return previousFacing || 1;
}

function resetModifiers() {
  game.modifiers = {
    globalDamage: 1,
    globalFireRate: 1,
    globalRange: 0,
    rewardMult: 1,
    projectileSpeedMult: 1,
    critChance: 0,
    critMult: CRIT_DAMAGE_MULT,
    snapperDamage: 1,
    spitterDamage: 1,
    thornDamage: 1,
    thornRange: 0,
    spitterPoison: 0,
    skillCooldownMult: 1,
    skillExtraUsesPerWave: 0,
    boostDurationBonus: 0,
    snareDurationBonus: 0,
    slowPotency: 1,
    snareSlowFactorMult: 1,
  };
}

function getBiomeForFloor(floor) {
  return pickBiomeForFloor(floor, game.spire.spireNumber, BIOMES, MAX_FLOORS - 1);
}

function updateBiomeUiTheme() {
  if (typeof document === "undefined") return;
  const biomeId = game.biome?.id || getBiomeForFloor(game.spire.floor)?.id || "greenhouse";
  document.body.dataset.biome = biomeId;
}

function applyBiomeForCurrentFloor() {
  const nextBiome = getBiomeForFloor(game.spire.floor);
  if (game.biome && game.biome.id === nextBiome.id && grassPattern && dirtPattern) {
    updateBiomeUiTheme();
    updateRunMusic();
    return;
  }
  game.biome = nextBiome;
  backgroundGradient = null;
  initWorldArt();
  updateBiomeUiTheme();
  updateRunMusic();
}

function setEncounterForNode(type) {
  const biome = mergeBiomeWithSpirePressure(
    getBiomeForFloor(game.spire.floor),
    game.spire.spireNumber
  );
  game.encounter = computeEncounterStats({
    nodeType: type,
    floor: game.spire.floor,
    floorScaling: FLOOR_SCALING,
    biome,
  });
  const laneHp = getLaneEncounterHpMult(game.spire.lane, MAP_LANE_CONFIG);
  if (laneHp !== 1) game.encounter.hpMult *= laneHp;
  if (game.run.encounterHpMult !== 1) game.encounter.hpMult *= game.run.encounterHpMult;
  if (game.run.encounterSpeedMult !== 1) game.encounter.speedMult *= game.run.encounterSpeedMult;
  if (game.run.dailySpeedMult !== 1) game.encounter.speedMult *= game.run.dailySpeedMult;
  if (game.run.dailyHpMult !== 1) game.encounter.hpMult *= game.run.dailyHpMult;
  applyTormentEncounterPenalties(game.encounter, game);
}

function showMobileToast(text, mode = "normal") {
  if (!mobileToastEl || !isTouchLayout()) return;
  mobileToastEl.textContent = text;
  mobileToastEl.classList.remove("hidden", "mobile-toast--warn", "mobile-toast--danger");
  if (mode === "warn") mobileToastEl.classList.add("mobile-toast--warn");
  if (mode === "danger") mobileToastEl.classList.add("mobile-toast--danger");
  if (mobileToastTimer) clearTimeout(mobileToastTimer);
  mobileToastTimer = setTimeout(() => {
    mobileToastEl.classList.add("hidden");
  }, 3800);
}

function showMessage(text, mode = "normal") {
  messageEl.textContent = text;
  messageEl.classList.remove("message--warn", "message--danger");
  if (mode === "warn") messageEl.classList.add("message--warn");
  if (mode === "danger") messageEl.classList.add("message--danger");
  messageEl.style.border = "";
  messageEl.style.background = "";
  showMobileToast(text, mode);
}

function showOverlay(title, text, buttonText, statsHtml = "") {
  overlayTitle.textContent = title;
  overlayText.textContent = text;
  overlayButton.textContent = buttonText;
  overlayAscensionBtn?.classList.add("hidden");
  overlayLeaderboardBtn?.classList.add("hidden");
  if (overlayStatsEl) {
    overlayStatsEl.innerHTML = statsHtml || "";
    overlayStatsEl.classList.toggle("hidden", !statsHtml);
  }
  overlay.classList.remove("hidden");
}

function buildRunEndStatsHtml() {
  const stats = finalizeRunStats(game);
  if (!stats) return "";
  return formatRunEndReportHtml(stats, {
    escape: escapeHtml,
    towerNameById: (id) => {
      const t = getTowerById(Number(id));
      return t ? `${t.name} (niv.${t.level})` : null;
    },
    enemyNameByType: (type) => enemyTypes[type]?.name || type,
  });
}

/** Fin de run : ecran victoire (5 Spires) ou defaite (vies a 0). */
function showEndRunScreen({ outcome, title, text, buttonText, statsHtml, ascensionButtonText = "" }) {
  game._persistedEndRunScreen = { outcome, title, text, buttonText, ascensionButtonText };
  if (overlayCard) {
    overlayCard.classList.remove("run-end-victory", "run-end-defeat");
    if (outcome === "victory") overlayCard.classList.add("run-end-victory");
    if (outcome === "defeat") overlayCard.classList.add("run-end-defeat");
  }
  showOverlay(title, text, buttonText, statsHtml ?? buildRunEndStatsHtml());
  if (ascensionButtonText && overlayAscensionBtn) {
    overlayAscensionBtn.textContent = ascensionButtonText;
    overlayAscensionBtn.classList.remove("hidden");
  }
  overlayLeaderboardBtn?.classList.remove("hidden");
  scheduleRunSave();
}

function hideOverlay() {
  overlay.classList.add("hidden");
  overlayCard?.classList.remove("run-end-victory", "run-end-defeat");
  overlayAscensionBtn?.classList.add("hidden");
  overlayLeaderboardBtn?.classList.add("hidden");
  if (overlayStatsEl) {
    overlayStatsEl.innerHTML = "";
    overlayStatsEl.classList.add("hidden");
  }
}

function hideAllTransientOverlays() {
  hideDraftOverlay();
  hideCollectorOverlay();
  hideMapOverlay();
  hideShopOverlay();
  hideNodeResult();
  hideEventOverlay();
  hideCrossroadsOverlay();
  hideMutationOverlay();
  hideWaveSummaryOverlay();
  hideBossCardOverlay();
  hideSellConfirmOverlay();
  nodeRetryOverlay?.classList.add("hidden");
}

function showDraftOverlay() {
  draftOverlay.classList.remove("hidden");
}

function hideDraftOverlay() {
  draftOverlay.classList.add("hidden");
}

function showCollectorOverlay() {
  collectorOverlay.classList.remove("hidden");
}

function hideCollectorOverlay() {
  collectorOverlay.classList.add("hidden");
}

function showMapOverlay() {
  mapOverlay.classList.remove("hidden");
}

function hideMapOverlay() {
  mapOverlay.classList.add("hidden");
}

function showShopOverlay() {
  shopOverlay.classList.remove("hidden");
}

function hideShopOverlay() {
  shopOverlay.classList.add("hidden");
}

function showNodeResult(title, text) {
  game._persistedNodeResult = { title, text };
  nodeResultTitle.textContent = title;
  nodeResultText.textContent = text;
  nodeResultOverlay.classList.remove("hidden");
  scheduleRunSave();
}

function hideNodeResult() {
  nodeResultOverlay.classList.add("hidden");
}

function createFloatText(text, x, y, color = "#f6ffd8") {
  game.floatTexts.push({ text, x, y, vy: -30, life: 0.9, color });
}

function emitParticles(x, y, color, count) {
  if (game.particles.length > MAX_PARTICLES) {
    game.particles.splice(0, game.particles.length - MAX_PARTICLES);
  }
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 35 + Math.random() * 150;
    game.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.45 + Math.random() * 0.35,
      color,
      radius: 1.5 + Math.random() * 2.6,
    });
  }
}

function initWeather() {
  game.rainDrops = [];
  for (let i = 0; i < 120; i += 1) {
    game.rainDrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 180 + Math.random() * 260,
      len: 9 + Math.random() * 8,
    });
  }
}

function createNoisePattern(baseColor, speckColor, lineColor) {
  const texture = document.createElement("canvas");
  texture.width = 96;
  texture.height = 96;
  const t = texture.getContext("2d");
  t.fillStyle = baseColor;
  t.fillRect(0, 0, texture.width, texture.height);

  for (let i = 0; i < 220; i += 1) {
    t.globalAlpha = 0.1 + Math.random() * 0.18;
    t.fillStyle = speckColor;
    t.fillRect(Math.random() * 96, Math.random() * 96, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }

  t.strokeStyle = lineColor;
  t.lineWidth = 1;
  for (let i = 0; i < 36; i += 1) {
    const x = Math.random() * 96;
    const y = Math.random() * 96;
    t.globalAlpha = 0.08 + Math.random() * 0.12;
    t.beginPath();
    t.moveTo(x, y);
    t.quadraticCurveTo(x + 5, y + 3, x + 12, y + 1);
    t.stroke();
  }
  t.globalAlpha = 1;
  return ctx.createPattern(texture, "repeat");
}

function initWorldArt() {
  const biome = game.biome || BIOMES[0];
  const decorPalette = getBiomeDecorPalette(biome);
  grassPattern = createNoisePattern(biome.grass[0], biome.grass[1], biome.grass[2]);
  dirtPattern = createNoisePattern(biome.dirt[0], biome.dirt[1], biome.dirt[2]);
  game.decor.leaves = [];
  game.decor.stones = [];
  game.decor.mushrooms = [];
  game.decor.fireflies = [];
  pathPebbles = [];

  for (let i = 0; i < 90; i += 1) {
    game.decor.leaves.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 3 + Math.random() * 9,
      rot: Math.random() * Math.PI,
      color: pickFrom(decorPalette.leaves, "#5f9e3f"),
      vein: biome.grass[2],
      blade: Math.random() > 0.72,
    });
  }

  for (let i = 0; i < 24; i += 1) {
    game.decor.stones.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 5 + Math.random() * 10,
      color: pickFrom(decorPalette.stones, "#7e876f"),
    });
  }

  const mushroomCount = biome.id === "night" || biome.id === "heart" ? 30 : 18;
  for (let i = 0; i < mushroomCount; i += 1) {
    game.decor.mushrooms.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: 0.6 + Math.random() * 0.7,
      cap: biome.id === "heart" ? "#c74771" : Math.random() > 0.5 ? "#d96657" : "#f0a64a",
    });
  }

  const fireflyCount = biome.id === "night" ? 46 : 24;
  for (let i = 0; i < fireflyCount; i += 1) {
    game.decor.fireflies.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    });
  }

  for (const route of paths) {
    for (let i = 0; i < Math.ceil(70 / paths.length); i += 1) {
      const segIdx = Math.floor(Math.random() * (route.length - 1));
      const t = Math.random();
      const p = lerp(route[segIdx], route[segIdx + 1], t);
      pathPebbles.push({
        x: p.x + (Math.random() - 0.5) * 58,
        y: p.y + (Math.random() - 0.5) * 58,
        r: 1.2 + Math.random() * 2.6,
        color: pickFrom(decorPalette.pebbles, "#b89d70"),
      });
    }
  }
}

function updateBestScore() {
  if (game.score <= game.bestScore) return;
  game.bestScore = game.score;
  localStorage.setItem(BEST_SCORE_KEY, String(game.bestScore));
}

function getPlayerName() {
  return localStorage.getItem(PLAYER_NAME_KEY) || "Anonyme";
}
function savePlayerName(raw) {
  const clean = (raw || "").trim().slice(0, 18);
  localStorage.setItem(PLAYER_NAME_KEY, clean || "Anonyme");
}

function buildLeaderboardEntry() {
  const collector = getSelectedCollector();
  const mutation = MUTATION_LIBRARY.find((m) => m.id === game.run.mutationId);
  const deckLine = (game.towerDeck || [])
    .map((key) => towerTypes[key]?.name?.split(" ").pop() || key)
    .join(" / ");
  const entry = {
    name: getPlayerName(),
    score: game.score,
    floor: game.spire.floor + 1,
    wave: game.waveCount || 0,
    collector: collector ? collector.name : "Aucun",
    date: new Date().toLocaleDateString("fr-BE", { day: "2-digit", month: "2-digit", year: "2-digit" }),
    spire: game.spire.spireNumber,
    victory: game.screen === "victory" ? 1 : 0,
    mutation: mutation?.name || "Aucune",
    deck: deckLine || "—",
  };
  if (game.daily?.dateKey) entry.dailyKey = game.daily.dateKey;
  return entry;
}

async function refreshLeaderboardLocal() {
  leaderboardLoadState = "loading";
  renderLeaderboard();
  const result = await fetchLeaderboard();
  if (result.ok) {
    leaderboardEntries = result.entries;
    leaderboardDailyEntries = result.dailyEntries || [];
    leaderboardDailyKey = result.dailyKey || null;
    leaderboardLoadState = "ready";
    leaderboardErrorCode = null;
    leaderboardErrorDetail = null;
  } else {
    leaderboardEntries = [];
    leaderboardDailyEntries = [];
    leaderboardDailyKey = null;
    leaderboardLoadState = "error";
    leaderboardErrorCode = result.error || "network";
    leaderboardErrorDetail = result.detail || null;
  }
  renderLeaderboard();
}

function saveRunToLeaderboard() {
  if (game.score <= 0) return;
  const entry = buildLeaderboardEntry();
  void submitLeaderboardEntry(entry).then((result) => {
    if (result.ok) {
      leaderboardEntries = result.entries;
      leaderboardDailyEntries = result.dailyEntries || [];
      leaderboardDailyKey = result.dailyKey || leaderboardDailyKey;
      leaderboardLoadState = "ready";
      if (!leaderboardOverlay.classList.contains("hidden")) {
        renderLeaderboard();
      }
    }
  });
}

function renderLeaderboard() {
  if (!leaderboardTableEl) return;
  leaderboardTableEl.innerHTML = renderLeaderboardPanel({
    loadState: leaderboardLoadState,
    globalEntries: leaderboardEntries,
    dailyEntries: leaderboardDailyEntries,
    dailyKey: leaderboardDailyKey,
    errorCode: leaderboardErrorCode,
    errorDetail: leaderboardErrorDetail,
    escapeHtml,
  });
}

async function showLeaderboard() {
  leaderboardOverlay.classList.remove("hidden");
  await refreshLeaderboardLocal();
}

function hideLeaderboard() {
  leaderboardOverlay.classList.add("hidden");
}

function gainScore(amount) {
  game.score += amount;
  updateBestScore();
}

function renderDeckList() {
  if (game.deck.picked.length === 0) {
    deckListEl.innerHTML = "<span class='deck-empty'>Aucune carte pour l'instant.</span>";
    renderSynergyList();
    updateRunDrawerBadge(runDrawerBadgeEl, 0, game.relics.picked.length);
    return;
  }
  const counts = new Map();
  game.deck.picked.forEach((id) => counts.set(id, (counts.get(id) || 0) + 1));
  const items = [...counts.entries()].map(([id, count]) => {
    const card = CARD_LIBRARY.find((c) => c.id === id);
    const label = `${card ? card.name : id}${count > 1 ? ` x${count}` : ""}`;
    const tooltip = card ? `${card.rarity} - ${formatCardDesc(card)}` : "Effet inconnu";
    const maxBadge = card?.stackable && isCardAtMaxStack(card, count)
      ? '<span class="deck-chip-max" aria-label="Stack maximum atteint">MAX</span>'
      : "";
    const towerType = card?.towerCard ? towerTypes[card.towerCard] : null;
    if (towerType) {
      const portrait = getDeckPortraitPath(card.towerCard);
      const portraitLayers = getTowerPortraitLayers(card.towerCard);
      const portraitPos = DECK_PORTRAIT_FOCUS[card.towerCard] || "center 38%";
      const rarityClass = getTowerRarityClass(towerType.rarity);
      const photoClass = isTowerPhotoPortrait(portrait) ? " deck-chip--photo" : "";
      const countSuffix = count > 1 ? ` ×${count}` : "";
      return `<span class="deck-chip deck-chip--portrait deck-chip--${rarityClass}${photoClass}" data-card-id="${id}" data-tooltip="${escapeHtml(tooltip)}" style="--deck-portrait: ${portraitLayers}; --deck-portrait-pos: ${portraitPos}">${escapeHtml(card.name)}${countSuffix}${maxBadge}</span>`;
    }
    return `<span class="deck-chip deck-chip--card ${getCardTextureClass(card)}" data-card-id="${id}" data-tooltip="${escapeHtml(tooltip)}">${label}${maxBadge}</span>`;
  });
  deckListEl.innerHTML = items.join("");
  enhanceDeckTooltips(deckListEl, CARD_LIBRARY, formatCardDesc);
  renderSynergyList();
  updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, game.relics.picked.length);
}

function recalcDeckSynergies() {
  const state = computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  );
  game.deckSynergy = state;
}

function renderSynergyList() {
  if (!deckSynergyListEl) return;
  recalcDeckSynergies();
  const families = DECK_SYNERGY_CONFIG?.families || [];
  if (!families.length) {
    deckSynergyListEl.innerHTML = "<span class='synergy-chip inactive'>Aucune synergie configuree.</span>";
    return;
  }
  const flashSet = new Set(game.synergyFlash?.families || []);
  const activeById = new Map(game.deckSynergy.active.map((a) => [a.familyId, a]));
  deckSynergyListEl.innerHTML = families
    .map((fam) => {
      const active = activeById.get(fam.id);
      const flashClass = flashSet.has(fam.id) ? " flash" : "";
      if (!active) {
        return `<span class="synergy-chip inactive">${fam.label} : 0 carte</span>`;
      }
      return `<span class="synergy-chip${flashClass}" title="${escapeHtml(active.tier.desc)}">${fam.label} · ${active.count} carte(s) — ${active.tier.desc}</span>`;
    })
    .join("");
}

function updateDailyChallengeBanner() {
  if (!dailyBannerEl) return;
  if (!game.daily?.name) {
    dailyBannerEl.classList.add("hidden");
    dailyBannerEl.textContent = "";
    dailyBannerEl.removeAttribute("title");
    return;
  }
  dailyBannerEl.classList.remove("hidden");
  const done = isDailyCompletedToday();
  dailyBannerEl.classList.toggle("is-complete", done);
  dailyBannerEl.textContent = done
    ? `Défi du jour : ${game.daily.name} ✓`
    : `Défi du jour : ${game.daily.name} (+${DAILY_BONUS_SCORE})`;
  dailyBannerEl.title = `${game.daily.desc} ${
    done ? "Déjà complété aujourd'hui." : `+${DAILY_BONUS_SCORE} score si validé.`
  }`;
}

function showDailyChallengeDetails() {
  if (!game.daily?.name) return;
  const done = isDailyCompletedToday();
  showMessage(
    `Défi du jour : ${game.daily.name} — ${game.daily.desc} ${
      done ? "Déjà complété aujourd'hui." : `+${DAILY_BONUS_SCORE} score si validé.`
    }`,
    done ? "normal" : "warn"
  );
}

function renderTitleResumePanel() {
  if (!titleResumePanel) return;
  const show = game.screen === "title" && hasRunSave();
  titleResumePanel.classList.toggle("hidden", !show);
  if (titleResumeSummary && show) {
    titleResumeSummary.textContent = formatRunSaveSummary();
  }
}

function collectRunSaveUiState() {
  return {
    mapOpen: mapOverlay && !mapOverlay.classList.contains("hidden"),
    shopOpen: shopOverlay && !shopOverlay.classList.contains("hidden"),
    draftOpen: draftOverlay && !draftOverlay.classList.contains("hidden"),
    eventOpen: eventOverlay && !eventOverlay.classList.contains("hidden"),
    nodeResultOpen: nodeResultOverlay && !nodeResultOverlay.classList.contains("hidden"),
    crossroadsOpen: crossroadsOverlay && !crossroadsOverlay.classList.contains("hidden"),
    collectorOpen: collectorOverlay && !collectorOverlay.classList.contains("hidden"),
    towerDraftOpen: towerDraftOverlayEl && !towerDraftOverlayEl.classList.contains("hidden"),
    mutationOpen: mutationOverlay && !mutationOverlay.classList.contains("hidden"),
    overlayOpen: overlay && !overlay.classList.contains("hidden"),
  };
}

function persistRunSaveNow() {
  if (!shouldPersistRunScreen(game.screen)) return;
  const payload = serializeRunState(game, {
    pads,
    ui: collectRunSaveUiState(),
  });
  saveRunState(payload);
}

let _runSaveTimer = null;
function scheduleRunSave() {
  if (_runSaveTimer) clearTimeout(_runSaveTimer);
  _runSaveTimer = setTimeout(() => {
    _runSaveTimer = null;
    persistRunSaveNow();
  }, 350);
}

function restoreRunUiState(data) {
  hideAllTransientOverlays();
  hideOverlay();

  if (data.screen === "victory" && data.persistedEndRun) {
    setScreen("victory");
    showEndRunScreen(data.persistedEndRun);
    return;
  }

  setScreen(data.screen);

  if (data.screen === "map" || data.ui?.mapOpen) {
    renderMapChoices();
    showMapOverlay();
    return;
  }

  if (data.screen === "shop" || data.ui?.shopOpen) {
    renderShopOffers();
    showShopOverlay();
    return;
  }

  if (data.screen === "draft" || data.ui?.draftOpen) {
    if (data.draftCardIds?.length) {
      game.draft.activeChoices = data.draftCardIds
        .map((id) => CARD_LIBRARY.find((c) => c.id === id))
        .filter(Boolean);
      renderDraftChoices();
    }
    showDraftOverlay();
    return;
  }

  if (data.screen === "event" || data.ui?.eventOpen) {
    if (game.pendingEvent && renderPendingEventOverlay()) return;
  }

  if (data.screen === "nodeResult" || data.ui?.nodeResultOpen) {
    if (data.persistedNodeResult) {
      showNodeResult(data.persistedNodeResult.title, data.persistedNodeResult.text);
    }
    return;
  }

  if (data.screen === "crossroads" || data.ui?.crossroadsOpen) {
    showCrossroadsOverlayFromState();
    return;
  }

  if (data.screen === "collector" || data.ui?.collectorOpen) {
    renderCollectorChoices();
    showCollectorOverlay();
    return;
  }

  if (data.screen === "towerDraft" || data.ui?.towerDraftOpen) {
    openTowerDraftOverlay();
    return;
  }

  if (data.screen === "mutation" || data.ui?.mutationOpen) {
    openMutationOverlay();
    return;
  }

  if (data.screen === "playing" || data.screen === "paused") {
    renderTowerShopButtons();
    mapFlow.updateCombatObjectiveBanner();
    if (data.screen === "paused") {
      pauseBtn.textContent = "Reprendre";
    }
  }
}

function restoreRunFromSave() {
  const data = loadRunState();
  if (!data) {
    showMessage("Aucune sauvegarde trouvée.", "warn");
    renderTitleResumePanel();
    return false;
  }

  const layoutIdx = Math.min((data.spire?.spireNumber || 1) - 1, SPIRE_LAYOUTS.length - 1);
  applySpireLayout(SPIRE_LAYOUTS[layoutIdx]);

  game.lives = data.lives;
  game.maxLives = data.maxLives;
  game.gold = data.gold;
  game.score = data.score;
  game.speedMultiplier = data.speedMultiplier ?? 1;
  game.waveActive = data.waveActive;
  game.waveCount = data.waveCount ?? 0;
  game.wavePaused = data.wavePaused ?? false;
  game.spawnTimer = data.spawnTimer ?? 0;
  game.spawnQueue = [...(data.spawnQueue || [])];
  game.enemyIdInc = data.enemyIdInc ?? 1;
  game.spawnPathInc = data.spawnPathInc ?? 0;
  game.towerIdInc = data.towerIdInc ?? 1;
  game.selectedTowerType = data.selectedTowerType ?? null;
  game.selectedTowerId = data.selectedTowerId ?? null;
  game.spire = { ...game.spire, ...data.spire };
  game.run = { ...data.run };
  game.run._rng = createSeededRng(data.run.seed || generateShareableSeed());
  if (data.run._rngState != null) game.run._rng.setState(data.run._rngState);
  game.deck = { picked: [...(data.deck?.picked || [])] };
  game.relics = { picked: [...(data.relics?.picked || [])] };
  game.towerDeck = [...(data.towerDeck || [])];
  game.collector = { ...game.collector, ...data.collector };
  game.modifiers = { ...data.modifiers };
  game.deckSynergy = data.deckSynergy || { active: [], mods: {} };
  game.encounter = { ...game.encounter, ...data.encounter };
  game.skills = data.skills;
  game.collectorUltimate = data.collectorUltimate || { usedThisSpire: false };
  game.bossCardPhaseDone = data.bossCardPhaseDone ?? false;
  game.bossTempWave = data.bossTempWave;
  game.waveModifier = data.waveModifier;
  game.pendingWaveModifier = data.pendingWaveModifier;
  game.nodeObjective = data.nodeObjective;
  game.waveStats = data.waveStats;
  game.runStats = data.runStats;
  game.draft.activeChoices = (data.draftCardIds || [])
    .map((id) => CARD_LIBRARY.find((c) => c.id === id))
    .filter(Boolean);
  game.shop.offers = data.shopOffers || [];
  game.pendingEvent = data.pendingEventId
    ? EVENT_LIBRARY.find((e) => e.id === data.pendingEventId) || null
    : null;
  game._persistedEndRunScreen = data.persistedEndRun || null;
  game._persistedNodeResult = data.persistedNodeResult || null;
  game.projectiles = [];
  game.particles = [];
  game.floatTexts = [];

  if (data.dailyId && DAILY_CHALLENGES.length) {
    game.daily = DAILY_CHALLENGES.find((d) => d.id === data.dailyId) || game.daily;
  }

  game.towers = [];
  pads.forEach((pad) => { pad.occupiedBy = null; });
  for (const saved of data.towers || []) {
    const pad = pads[saved.padIndex];
    const type = towerTypes[saved.typeKey];
    if (!pad || !type) continue;
    const tower = createTowerFromType(saved.typeKey, type, pad, game.towerIdInc++);
    tower.level = saved.level;
    tower.investedGold = saved.investedGold;
    tower.rageStacks = saved.rageStacks || 0;
    tower.damage = saved.damage;
    tower.range = saved.range;
    tower.fireRate = saved.fireRate;
    tower.projectileSpeed = saved.projectileSpeed;
    tower.cooldown = saved.cooldown ?? tower.cooldown;
    pad.occupiedBy = tower.id;
    game.towers.push(tower);
  }

  game.enemies = (data.enemies || []).map((e) => ({ ...e }));
  game.enemyById = new Map(game.enemies.map((e) => [e.id, e]));

  const biome = BIOMES.find((b) => b.id === data.biomeId) || getBiomeForFloor(game.spire.floor);
  game.biome = biome;
  backgroundGradient = null;
  initWorldArt();
  updateBiomeUiTheme();

  loadSpeedPreference();
  renderDeckList();
  renderRelicList();
  renderSynergyList();
  renderBestiaryList();
  renderCollectorPanel();
  updateSkillsUI();
  updateHud();
  restoreRunUiState(data);
  updateRunMusic();
  showMessage("Run reprise la ou tu t'etais arrete.", "normal");
  scheduleRunSave();
  return true;
}

function resumeRunFromSave() {
  if (game.screen !== "title") return;
  ensureAudioContext();
  leaveTitleScreenForResume();
  if (!restoreRunFromSave()) {
    setScreen("title");
  }
}

function leaveTitleScreenForResume() {
  if (game.screen !== "title") return;
  titleInputWrap?.classList.add("hidden");
  titleDailyPanel?.classList.add("hidden");
  titleResumePanel?.classList.add("hidden");
  setScreen("menu");
}

function confirmAbandonRunSave() {
  if (!hasRunSave()) return true;
  return window.confirm(
    "Une run est deja sauvegardee. L'abandonner et en commencer une nouvelle ?",
  );
}

function abandonRunSaveAndStartFresh() {
  clearRunSave();
  renderTitleResumePanel();
}

function updateTitleVersionLabel() {
  if (!titleVersionEl) return;
  const version = META_CONFIG?.gameVersion || "beta";
  const content = META_CONFIG?.contentVersion ? ` · contenu ${META_CONFIG.contentVersion}` : "";
  titleVersionEl.textContent = `Build ${version}${content}`;
}

function updateTitleDailyPanel() {
  if (!titleDailyPanel) return;
  const showCenterDaily = game.screen === "title" && game.daily?.name && isPhoneViewport();
  if (!showCenterDaily) {
    titleDailyPanel.classList.add("hidden");
    return;
  }
  titleDailyPanel.classList.remove("hidden");
  titleDailyPanel.classList.toggle("is-complete", isDailyCompletedToday());
  if (titleDailyNameEl) titleDailyNameEl.textContent = game.daily.name;
  if (titleDailyDescEl) titleDailyDescEl.textContent = game.daily.desc;
  if (titleDailyRewardEl) {
    titleDailyRewardEl.textContent =
      `Bonus : +${DAILY_BONUS_SCORE} score à la première run validée (étage 5+, Spire 2+ ou victoire).`;
  }
  if (titleDailyStatusEl) {
    const done = isDailyCompletedToday();
    titleDailyStatusEl.textContent = done
      ? "✓ Défi complété aujourd'hui — bonus déjà obtenu."
      : "À toi de jouer — le défi s'applique dès ta prochaine run.";
    titleDailyStatusEl.classList.toggle("is-pending", !done);
  }
}

function applyDailyChallengeForRun() {
  const challenge = pickDailyChallenge(DAILY_CHALLENGES);
  applyDailyChallenge(game, challenge);
  updateDailyChallengeBanner();
  updateTitleDailyPanel();
}

function applyRunEndDailyBonus() {
  const bonus = tryApplyDailyCompletionBonus(game);
  if (bonus > 0) {
    gainScore(bonus);
    updateDailyChallengeBanner();
    updateTitleDailyPanel();
    return bonus;
  }
  return 0;
}

function loadSpeedPreference() {
  const saved = localStorage.getItem(SPEED_PREF_KEY);
  if (saved === "2") {
    game.speedMultiplier = 2;
    if (speedBtn) speedBtn.textContent = "x2";
  }
}

function saveSpeedPreference() {
  localStorage.setItem(SPEED_PREF_KEY, String(game.speedMultiplier));
}

function renderRelicList() {
  if (game.relics.picked.length === 0) {
    relicListEl.innerHTML = "<span class='deck-empty'>Aucune relique pour l'instant.</span>";
    updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, 0);
    return;
  }
  const items = game.relics.picked.map((id) => {
    const relic = RELIC_LIBRARY.find((r) => r.id === id);
    const label = relic ? relic.name : id;
    const tooltip = relic ? `Relique - ${relic.desc}` : "Relique inconnue";
    return `<span class="deck-chip relic ${getRelicTextureClass(id)}" data-relic-id="${escapeHtml(id)}" data-tooltip="${escapeHtml(tooltip)}"><span class="relic-glyph" aria-hidden="true"></span>${label}</span>`;
  });
  relicListEl.innerHTML = items.join("");
  updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, game.relics.picked.length);
  bindFloatingDeckTooltips(relicListEl);
}

function getSelectedCollector() {
  return COLLECTOR_LIBRARY.find((collector) => collector.id === game.collector.selectedId) || null;
}

function getCollectorUltimateInfo(collector) {
  if (!collector?.ultimateId && !collector?.ultimateName && !collector?.ultimateDesc) return null;
  const name = collector.ultimateName || "Ultime";
  const desc = collector.ultimateDesc || "1× par Spire.";
  return { name, desc };
}

/** Sous-titre du bouton ultime (barre d'action) — aligne avec le panneau Collectionneur. */
function formatUltimateSkillHint(ult, ready) {
  if (!ready) return "1× / Spire · Utilise";
  if (!ult?.desc) return "1× / Spire · Pret";
  return ult.desc.replace(/^1×\s*par\s*Spire\s*:\s*/i, "").trim() || ult.desc;
}

function applyCollectorUltimateToUi(collector) {
  const ult = collector ? getCollectorUltimateInfo(collector) : null;
  if (collectorUltimateBlockEl) {
    collectorUltimateBlockEl.classList.toggle("hidden", !ult);
  }
  if (ult) {
    if (collectorUltimateNameEl) collectorUltimateNameEl.textContent = ult.name;
    if (collectorUltimateDescEl) collectorUltimateDescEl.textContent = ult.desc;
  }
  if (skillUltimateLabelEl) {
    skillUltimateLabelEl.textContent = ult?.name || "Ultime";
  }
  if (skillUltimateBtn) {
    skillUltimateBtn.title = ult
      ? `${ult.name} — ${ult.desc} (touche U)`
      : "Ultime du collectionneur (1× par Spire, touche U)";
  }
}

function renderCollectorPanel() {
  const collector = getSelectedCollector();
  if (!collector) {
    collectorPanel.classList.add("hidden");
    applyCollectorUltimateToUi(null);
    return;
  }
  collectorPanel.classList.remove("hidden");
  collectorNameEl.textContent = `${collector.name} - ${collector.title}`;
  collectorPowerEl.textContent = collector.power;
  applyCollectorUltimateToUi(collector);
}

function renderCollectorPowerLines(power) {
  const splitAt = power.indexOf(". ");
  if (splitAt === -1) {
    return `<span class="collector-power-line">${escapeHtml(power)}</span>`;
  }
  const first = power.slice(0, splitAt + 1);
  const second = power.slice(splitAt + 2);
  return `<span class="collector-power-line">${escapeHtml(first)}</span>`
    + `<span class="collector-power-line">${escapeHtml(second)}</span>`;
}

function renderCollectorChoices() {
  collectorChoicesEl.innerHTML = COLLECTOR_LIBRARY.map((collector) => {
    const ult = getCollectorUltimateInfo(collector);
    const ultimateBlock = ult
      ? `<span class="detail collector-ultimate-pick">
          <span class="collector-ultimate-pick-label">Ultime · ${escapeHtml(ult.name)}</span>
          <span class="collector-ultimate-pick-desc">${escapeHtml(ult.desc)}</span>
        </span>`
      : "";
    const portraitClass = collector.portrait ? " collector-choice--portrait" : "";
    const portraitStyle = collector.portrait
      ? ` style="--collector-portrait: ${getCollectorPortraitLayers(collector)}"`
      : "";
    return `
      <button class="draft-choice collector-choice${portraitClass}" data-collector-id="${collector.id}" type="button"
        title="${escapeHtml(ult ? `${ult.name} — ${ult.desc}` : collector.power)}"${portraitStyle}>
        <div class="collector-choice-body">
          <h3>${escapeHtml(collector.name)}</h3>
          <p class="collector-choice-title">${escapeHtml(collector.title)}</p>
          <span class="detail collector-power">${renderCollectorPowerLines(collector.power)}</span>
          ${ultimateBlock}
          <span class="tag collector-flavor">${escapeHtml(collector.flavor)}</span>
        </div>
      </button>
    `;
  }).join("");
}

function openCollectorSelection() {
  if (!confirmAbandonRunSave()) return;
  abandonRunSaveAndStartFresh();
  resetRunState();
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.lives = game.maxLives;
  game.run.mutationId = null;
  game.towerDeck = [];
  hideOverlay();
  renderCollectorChoices();
  renderTowerShopButtons();
  setScreen("collector");
  showCollectorOverlay();
  showMessage("Choisis ton Collectionneur pour cette run.", "normal");
  requestAnimationFrame(() => onboarding?.startIfNeeded("collector"));
}

// ─── TOWER DRAFT ─────────────────────────────────────────────────────────────

const TOWER_FAMILIES = [
  { key: "snapper", label: "Dionaea muscipula" },
  { key: "spitter", label: "Sarracenia" },
  { key: "thorn", label: "Drosera" },
];

const TOWER_RARITY_ORDER = { Commune: 0, Rare: 1, Epique: 2 };
const TOWER_FAMILY_BASE_ID = { snapper: "snapper", spitter: "spitter", thorn: "thorn" };

function sortTowerVariantsForDraft(a, b) {
  const rarityDiff = (TOWER_RARITY_ORDER[a.rarity] ?? 9) - (TOWER_RARITY_ORDER[b.rarity] ?? 9);
  if (rarityDiff !== 0) return rarityDiff;
  if (a.id === TOWER_FAMILY_BASE_ID[a.family]) return -1;
  if (b.id === TOWER_FAMILY_BASE_ID[b.family]) return 1;
  return a.name.localeCompare(b.name, "fr");
}

/** Libellés barre d'action avant draft des 3 variantes. */
const TOWER_FAMILY_BAR_SLOTS = [
  { family: "snapper", pickTitle: "Choisis ta Dionaea", shortLabel: "Dionaea" },
  { family: "spitter", pickTitle: "Choisis ton Sarracenia", shortLabel: "Sarracenia" },
  { family: "thorn", pickTitle: "Choisis ton Drosera", shortLabel: "Drosera" },
];

function isTowerDeckDrafted() {
  if (!game.towerDeck || game.towerDeck.length !== 3) return false;
  const families = new Set();
  for (const id of game.towerDeck) {
    const type = towerTypes[id];
    if (!type) return false;
    families.add(type.family);
  }
  return families.size === 3;
}

function getTowerDeckVariantForFamily(family) {
  return game.towerDeck.find((id) => towerTypes[id]?.family === family) || null;
}

function openTowerDraftOverlay() {
  game.towerDeck = [];
  renderTowerShopButtons();
  hideCollectorOverlay();
  renderTowerDraftGrid();
  towerDraftCountEl.textContent = "0 / 3 sélectionnées";
  towerDraftConfirmBtn.disabled = true;
  towerDraftOverlayEl.classList.remove("hidden");
  setScreen("towerDraft");
  showMessage("Compose ton deck : choisis 3 plantes pour cette run.", "normal");
  requestAnimationFrame(() => onboarding?.startIfNeeded("towerDraft"));
}

function hideTowerDraftOverlay() {
  towerDraftOverlayEl.classList.add("hidden");
}

const TOWER_RARITY_CLASS = { Commune: "commune", Rare: "rare", Epique: "epique" };

function getTowerRarityClass(rarity) {
  return TOWER_RARITY_CLASS[rarity] || "commune";
}

function getCardTextureClass(card) {
  const classes = [`card-rarity-${getTowerRarityClass(card?.rarity || "Commune")}`];
  if (card?.towerFamily) classes.push(`card-family-${card.towerFamily}`);
  if (card?.towerCard) {
    const tower = towerTypes[card.towerCard];
    if (tower?.family) classes.push(`card-family-${tower.family}`);
    classes.push("card-specific");
  }
  if (!card?.towerFamily && !card?.towerCard) classes.push("card-global");
  return classes.join(" ");
}

function getRelicTextureClass(relicId) {
  if (/sun|honey|amber/.test(relicId)) return "relic-solar";
  if (/venom|spore|moss/.test(relicId)) return "relic-botanical";
  if (/bark|root|thorn|fang/.test(relicId)) return "relic-organic";
  if (/night|cursed/.test(relicId)) return "relic-mystic";
  return "relic-ancient";
}

function setTowerBtnRarityBand(btn, rarity) {
  btn.classList.remove("tower-btn--commune", "tower-btn--rare", "tower-btn--epique");
  if (rarity) btn.classList.add(`tower-btn--${getTowerRarityClass(rarity)}`);
}

function setTowerBtnPortrait(btn, variantId) {
  btn.classList.remove("tower-btn--portrait", "tower-btn--photo");
  btn.style.removeProperty("--tower-portrait");
  if (!variantId) return;
  const portrait = getTowerPortraitPath(variantId);
  btn.classList.add("tower-btn--portrait");
  if (isTowerPhotoPortrait(portrait)) btn.classList.add("tower-btn--photo");
  btn.style.setProperty("--tower-portrait", getTowerPortraitLayers(variantId));
}

function renderTowerDraftGrid() {
  const RARITY_LABELS = { Commune: "Commune", Rare: "Rare", Epique: "Épique" };
  towerDraftGridEl.innerHTML = TOWER_FAMILIES.map(({ key, label }) => {
    // Object.entries pour avoir la clé réelle (ex: "dionaea_b52") comme data-variant-id
    const variants = Object.entries(towerTypes)
      .filter(([, v]) => v.family === key && v.rarity)
      .map(([id, v]) => ({ id, ...v }))
      .sort(sortTowerVariantsForDraft);
    const cards = variants.map((v) => {
      const rarityClass = v.rarity ? v.rarity.toLowerCase() : "commune";
      const portrait = getTowerPortraitPath(v.id);
      const photoClass = isTowerPhotoPortrait(portrait) ? " tower-variant-card--photo" : "";
      return `<button class="tower-variant-card tower-variant-card--portrait${photoClass} rarity-${rarityClass}" data-variant-id="${v.id}"
        style="--tower-portrait: ${getTowerPortraitLayers(v.id)}">
        <div class="tower-variant-body">
          <span class="tvc-name">${v.name}</span>
          <span class="tvc-rarity">${RARITY_LABELS[v.rarity] || v.rarity}</span>
          <p class="tvc-desc">${v.desc}</p>
          <small class="tvc-passive">⚡ ${v.passiveDesc}</small>
          <div class="tvc-stats">
            <span>⚔ ${v.damage}</span>
            <span>🎯 ${v.range}</span>
            <span>⏱ ${v.fireRate.toFixed(1)}/s</span>
            <span>☀ ${v.cost}</span>
          </div>
        </div>
      </button>`;
    }).join("");
    return `<div class="tower-family-col"><h3>${label}</h3><div class="tower-family-cards">${cards}</div></div>`;
  }).join("");
}

function renderTowerShopButtons() {
  towerButtons.forEach((btn) => {
    const family = btn.dataset.family || btn.dataset.tower;
    const slot = TOWER_FAMILY_BAR_SLOTS.find((s) => s.family === family);
    if (!slot) {
      btn.style.display = "none";
      return;
    }
    btn.style.display = "";

    const variantId = getTowerDeckVariantForFamily(family);
    const type = variantId ? towerTypes[variantId] : null;
    if (!type) {
      btn.dataset.tower = family;
      setTowerBtnRarityBand(btn, null);
      setTowerBtnPortrait(btn, null);
      btn.classList.remove("has-tooltip", "active");
      btn.removeAttribute("data-tooltip");
      const span = btn.querySelector("span");
      const small = btn.querySelector("small");
      if (span) span.textContent = slot.pickTitle;
      btn.dataset.shortLabel = slot.shortLabel;
      if (small) small.textContent = "";
      return;
    }
    btn.dataset.tower = variantId;
    btn.dataset.shortLabel = slot.shortLabel;
    setTowerBtnRarityBand(btn, type.rarity);
    setTowerBtnPortrait(btn, variantId);
    const span = btn.querySelector("span");
    const small = btn.querySelector("small");
    if (span) {
      span.textContent = isTouchLayout()
        ? (type.name.split(/[\s(]/)[0] || slot.shortLabel)
        : type.name;
    }
    btn.dataset.shortLabel = slot.shortLabel;
    const passif = type.passiveDesc && !type.passiveDesc.startsWith("Tour de base") ? ` · ${type.passiveDesc}` : "";
    if (small) small.textContent = `${type.cost}☀  ${type.desc || ""}${passif}`;
  });
  const tooltipButtons = towerButtons.filter((btn) => {
    const family = btn.dataset.family || btn.dataset.tower;
    return Boolean(getTowerDeckVariantForFamily(family));
  });
  if (tooltipButtons.length) bindSmartTowerTooltips(tooltipButtons, towerTypes, TOOLTIPS_CONFIG);
  bindTowerDockHints(actionTowersEl);
  requestAnimationFrame(() => updateViewport(game.screen));
}

// ─────────────────────────────────────────────────────────────────────────────

function applyCollectorStartBonus() {
  const collector = getSelectedCollector();
  if (!collector) return;

  if (collector.id === "herbier") {
    const b = COLLECTOR_BONUSES.herbier;
    game.modifiers.snapperDamage *= b.snapperDamage;
    game.modifiers.rewardMult *= b.rewardMult;
    return;
  }

  if (collector.id === "distiller") {
    const b = COLLECTOR_BONUSES.distiller;
    game.modifiers.spitterDamage *= b.spitterDamage;
    if (b.skillExtraUsesPerWave) {
      game.modifiers.skillExtraUsesPerWave += b.skillExtraUsesPerWave;
    }
    return;
  }

  if (collector.id === "gardien") {
    const b = COLLECTOR_BONUSES.gardien;
    game.modifiers.thornDamage *= b.thornDamage;
    game.modifiers.slowPotency = b.slowPotency || 1;
    game.modifiers.snareSlowFactorMult = b.snareSlowFactorMult || 1;
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pickFrom(list, fallback) {
  if (!Array.isArray(list) || list.length === 0) return fallback;
  return list[Math.floor(Math.random() * list.length)];
}

function getBiomeDecorPalette(biome) {
  return BIOME_DECOR_PALETTES[biome?.id] || BIOME_DECOR_PALETTES.greenhouse;
}

function refreshEnemyLookup() {
  game.enemyById.clear();
  for (const enemy of game.enemies) {
    game.enemyById.set(enemy.id, enemy);
  }
}

function getEnemyById(id) {
  return game.enemyById.get(id) || null;
}

function getTowerById(id) {
  return game.towers.find((tower) => tower.id === id) || null;
}

function getTowerRange(tower, { rangeOverride } = {}) {
  return getEffectiveTowerRange(tower, { game, rangeOverride });
}

function getTowerTypePreviewRange(typeKey) {
  return getTowerTypePreviewRangeModel(typeKey, { game, towerTypes });
}

function getTowerUpgradePreviewRange(tower) {
  return getTowerUpgradePreviewRangeModel(tower, { game });
}

function drawPlacementRangePreviews() {
  drawPlacementRangePreview(ctx, {
    game,
    getTowerTypePreviewRange,
    isTouchLayout,
  });
}

function setScreen(screen) {
  game.screen = screen;
  if (typeof document !== "undefined") {
    document.body.dataset.screen = screen;
    updateViewport(screen);
    if (screen === "title") {
      document.body.dataset.biome = "greenhouse";
    } else {
      updateBiomeUiTheme();
    }
  }
  mobileShell?.closeRunDrawer();
  const gameplay = screen === "playing" || screen === "paused";
  if (gameplay) collapseHudForCombat(hudCollapse);
  else if (screen === "map" || screen === "title") hudCollapse?.refresh?.();
  startWaveBtn.disabled = !gameplay;
  speedBtn.disabled = !gameplay;
  pauseBtn.disabled = !gameplay;
  skillBoostBtn.disabled = !gameplay;
  skillSnareBtn.disabled = !gameplay;
  if (skillUltimateBtn) skillUltimateBtn.disabled = !gameplay;
  upgradeBtn.disabled = !gameplay;
  sellBtn.disabled = !gameplay;
  if (screen === "title") {
    hideOverlay();
    updateTitleDailyPanel();
    renderTitleResumePanel();
    updateTitleVersionLabel();

    // Affiche et prépare le champ pseudo
    if (titleInputWrap) {
      titleInputWrap.classList.remove("hidden");
      // Relance l'animation CSS à chaque passage sur l'écran titre
      titleInputWrap.style.animation = "none";
      void titleInputWrap.offsetHeight;
      titleInputWrap.style.animation = "";
    }
    if (playerNameInput) {
      const saved = localStorage.getItem(PLAYER_NAME_KEY);
      playerNameInput.value = saved || "";
      if (titlePlayBtn) titlePlayBtn.disabled = !playerNameInput.value.trim();
    }

    // Si l'AudioContext est déjà débloqué (retour depuis une partie),
    // démarre la musique automatiquement sans interaction.
    requestAnimationFrame(() => {
      if (game.screen === "title" && audio.ctx && audio.ctx.state === "running") {
        tryStartTitleMusic();
      }
    });
  } else {
    updateTitleDailyPanel();
    updateRunMusic();
    if (shouldPersistRunScreen(screen)) scheduleRunSave();
  }
}

function getTowerHudAnchor(tower) {
  if (!canvasZoneEl || !tower) return null;
  const canvasRect = canvas.getBoundingClientRect();
  const zoneRect = canvasZoneEl.getBoundingClientRect();
  if (!canvasRect.width || !canvasRect.height) return null;
  return {
    x: canvasRect.left - zoneRect.left + (tower.x / canvas.width) * canvasRect.width,
    y: canvasRect.top - zoneRect.top + (tower.y / canvas.height) * canvasRect.height,
    zoneW: zoneRect.width,
    zoneH: zoneRect.height,
  };
}

function placeTowerFloatPanel(anchor) {
  if (!towerFloatPanel) return;
  towerFloatPanel.style.visibility = "hidden";
  towerFloatPanel.style.left = "0";
  towerFloatPanel.style.top = "0";

  const pw = towerFloatPanel.offsetWidth;
  const ph = towerFloatPanel.offsetHeight;
  const combatDock = document.querySelector(".combat-dock");
  const dockFixed = combatDock && getComputedStyle(combatDock).position === "fixed";
  const dockReserve =
    dockFixed && isTouchLayout() && (game.screen === "playing" || game.screen === "paused")
      ? Number.parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--dock-height"),
          10
        ) || 0
      : 0;
  const x = Math.max(pw / 2 + 8, Math.min(anchor.zoneW - pw / 2 - 8, anchor.x));
  let y = anchor.y + (isTouchLayout() ? 14 : 22);
  if (y + ph > anchor.zoneH - 8 - dockReserve) {
    y = Math.max(8, anchor.zoneH - ph - 8 - dockReserve);
  }

  towerFloatPanel.style.left = `${Math.round(x)}px`;
  towerFloatPanel.style.top = `${Math.round(y)}px`;
  towerFloatPanel.style.visibility = "";
}

let towerPanelCacheKey = "";

function updateTowerPanel() {
  if (!towerFloatHud) return;
  const tower = getTowerById(game.selectedTowerId);
  const canManageTower = game.screen === "playing" || game.screen === "paused";
  if (!tower || !canManageTower) {
    towerPanelCacheKey = "";
    towerFloatHud.classList.add("hidden");
    towerFloatHud.setAttribute("aria-hidden", "true");
    return;
  }

  const anchor = getTowerHudAnchor(tower);
  if (!anchor) {
    towerFloatHud.classList.add("hidden");
    return;
  }

  const nextCost = getUpgradeCost(tower);
  const refund = getTowerSellRefund(tower);
  const range = getTowerRange(tower).toFixed(0);
  const nextRange = getTowerUpgradePreviewRange(tower);
  const biome = game.biome || BIOMES[0];
  const eff = computeTowerEffectiveStats(tower, {
    game,
    towers: game.towers,
    biome,
    distanceFn: distance,
    towerTypes,
  });
  const dmg = Math.round(eff.damage);
  const cadence = eff.fireRate.toFixed(2);
  const dmgTitle = eff.critChance > 0.005
    ? `Dégâts effectifs (~${Math.round(eff.avgDamage)} moy. avec ${Math.round(eff.critChance * 100)}% crit)`
    : "Dégâts effectifs";
  const cadenceTitle = eff.creamsicleMult > 1.001
    ? `Cadence effective (aura Creamsicle +${Math.round((eff.creamsicleMult - 1) * 100)}%)`
    : eff.boostActive
      ? "Cadence effective (Engrais actif)"
      : "Cadence effective";
  const dmgBuffClass = eff.boostActive ? " tfc-stat--buffed" : "";
  const cadenceBuffClass = (eff.creamsicleMult > 1.001 || eff.boostActive) ? " tfc-stat--buffed" : "";
  const canAffordUpgrade = game.gold >= nextCost;

  towerFloatHud.classList.remove("hidden");
  towerFloatHud.setAttribute("aria-hidden", "false");

  const passiveText = getTowerPassiveDescription(tower, game, towerTypes);
  const fingerprint = getTowerTooltipFingerprint(tower, game, {
    eff,
    passiveText,
    range,
    nextRange: nextRange?.toFixed(0) ?? "",
    gold: game.gold,
  });
  const contentChanged = fingerprint !== towerPanelCacheKey;
  towerPanelCacheKey = fingerprint;

  const passiveLine = passiveText
    && !passiveText.startsWith("Tour de base")
    && passiveText !== "Aucun passif — puissance brute"
    ? `<p class="tfc-passive">⚡ ${escapeHtml(passiveText)}</p>`
    : "";

  if (towerFloatTooltip && contentChanged) {
    towerFloatTooltip.innerHTML = `
      <div class="tfc-head">
        <strong class="tfc-title">${escapeHtml(tower.name)}</strong>
        <span class="tfc-level">Niv ${tower.level}</span>
      </div>
      <div class="tfc-stats">
        <span class="tfc-stat${dmgBuffClass}" title="${escapeHtml(dmgTitle)}">⚔ <b>${dmg}</b></span>
        <span class="tfc-stat" title="Portée effective">🎯 <b>${range}</b></span>
        <span class="tfc-stat${cadenceBuffClass}" title="${escapeHtml(cadenceTitle)}">⏱ <b>${cadence}/s</b></span>
      </div>
      ${passiveLine}
      <p class="tfc-upgrade-hint">${
        tower.level >= 3
          ? "Niveau maximum atteint."
          : `Amélioration → niv. ${tower.level + 1} : <b>${nextCost} ☀</b> · portée <b>${range}</b> → <b>${nextRange.toFixed(0)}</b>${canAffordUpgrade ? "" : " (fonds insuffisants)"}`
      }</p>
      <p class="tfc-sell-hint">Vente : <b>+${refund} ☀</b> (70 % de ${tower.investedGold} investis)</p>
    `;
  }

  placeTowerFloatPanel(anchor);
  updateMobileCombatZoom();

  upgradeBtn.textContent = tower.level >= 3 ? "Max" : `↑ ${nextCost}`;
  upgradeBtn.disabled = tower.level >= 3 || !canAffordUpgrade;
  upgradeBtn.title = tower.level >= 3
    ? "Niveau maximum"
    : `Améliorer au niv. ${tower.level + 1} (${nextCost} soleil)`;
  sellBtn.textContent = `Vendre +${refund}`;
  sellBtn.title = `Vendre : remboursement ${refund} soleil (70 % investi)`;
}

function updateSkillsUI() {
  const boost = game.skills.boost;
  const snare = game.skills.snare;
  const boostReady = canActivateSkill(boost);
  const snareReady = canActivateSkill(snare);
  skillBoostCdEl.textContent = boost.active > 0
    ? `Actif ${boost.active.toFixed(1)}s`
    : formatSkillChargeLabel(boost);
  skillSnareCdEl.textContent = snare.active > 0
    ? `Actif ${snare.active.toFixed(1)}s`
    : formatSkillChargeLabel(snare);
  skillBoostBtn.classList.toggle("cooldown", !boostReady && boost.active <= 0);
  skillSnareBtn.classList.toggle("cooldown", !snareReady && snare.active <= 0);
  if (game.screen === "playing") {
    skillBoostBtn.disabled = !boostReady;
    skillSnareBtn.disabled = !snareReady;
  }
  if (skillUltimateBtn && skillUltimateCdEl) {
    const ultReady = canUseCollectorUltimate(game);
    const ult = getCollectorUltimateInfo(getSelectedCollector());
    skillUltimateCdEl.textContent = formatUltimateSkillHint(ult, ultReady);
    skillUltimateBtn.classList.toggle("used", !ultReady);
    skillUltimateBtn.disabled = game.screen !== "playing";
    applyCollectorUltimateToUi(getSelectedCollector());
  }
}

function createTower(typeKey, pad) {
  const type = towerTypes[typeKey];
  return createTowerFromType(typeKey, type, pad, game.towerIdInc++);
}

function createEnemy(typeKey, pathId = 0) {
  const enemyType = enemyTypes[typeKey];
  return createEnemyFromType(typeKey, {
    id: game.enemyIdInc++,
    pathId,
    enemyType,
    pathsLength: paths.length,
    game,
    biomes: BIOMES,
    encounterConfig: ENCOUNTER_CONFIG,
    getBiomeForFloor,
    applyBossTempWaveToEnemy,
    applyCollectorMapSnareToEnemy,
  });
}

// Reset léger entre deux combats — conserve les tours et les emplacements.
function resetEncounterState() {
  game.waveActive = false;
  game.spawnTimer = 0;
  game.spawnQueue = [];
  game.spawnPathInc = 0;
  game.run.collectorMapSnareRemaining = 0;
  game.ultimateVfxList = [];
  game.towerUpgradeVfxList = [];
  game.enemies = [];
  game.projectiles = [];
  game.particles = [];
  game.floatTexts = [];
  game.selectedTowerId = null;
  game.enemyById.clear();
  towerFloatHud?.classList.add("hidden");
  mapFlow.updateCombatObjectiveBanner();
  startWaveBtn.textContent = "Lancer la vague";
}

// Reset complet (nouvelle run ou nouvelle Spire) — efface aussi tours et pads.
function resetEncounterBoard() {
  resetEncounterState();
  game.towers = [];
  game.selectedTowerType = null;
  pads.forEach((pad) => { pad.occupiedBy = null; });
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  renderTowerShopButtons();
}

function resetRunState() {
  // Remettre le chemin et les emplacements de la Spire 1
  applySpireLayout(SPIRE_LAYOUTS[0]);

  resetEncounterBoard();
  game.speedMultiplier = 1;
  game.enemyIdInc = 1;
  game.towerIdInc = 1;
  game.waveCount = 0;
  game.deck.picked = [];
  game.relics.picked = [];
  game.draft.activeChoices = [];
  game.shop.offers = [];
  game.spire.currentNodeType = null;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.spireNumber = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.crossroadsOfferCardId = null;
  game.spire.lanesMerged = false;
  game.spire.pathTrail = [];
  game.runStats = null;
  game.run = {
    mutationId: game.run?.mutationId ?? null,
    shopCardDiscount: 0,
    encounterSpeedMult: 1,
    encounterHpMult: 1,
    dailySpeedMult: 1,
    dailyHpMult: 1,
    dailyWaveClearMult: 1,
    nodeRetryAvailable: true,
  };
  game.deckSynergy = { active: [], mods: {} };
  game.waveModifier = null;
  game.nodeObjective = null;
  game.waveStats = null;
  game.wavePaused = false;
  game.bossCardPhaseDone = false;
  game.bossTempWave = null;
  resetCollectorUltimateForSpire(game);
  game.skills.boost.cooldown = SKILLS.boost.cooldown;
  game.skills.boost.duration = SKILLS.boost.duration;
  game.skills.snare.cooldown = SKILLS.snare.cooldown;
  game.skills.snare.duration = SKILLS.snare.duration;
  resetSkillsForNewWave(game);
  game.maxLives = 20;
  pauseBtn.textContent = "Pause";
  hideDraftOverlay();
  hideCollectorOverlay();
  hideMapOverlay();
  hideShopOverlay();
  resetModifiers();
  renderDeckList();
  renderRelicList();
  renderCollectorPanel();
}

function grantCard(card) {
  const before = getSynergyTierKeys(computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  ));
  card.effect();
  game.deck.picked.push(card.id);
  const afterState = computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  );
  const newTiers = afterState.active.filter(
    (a) => !before.includes(`${a.familyId}:${a.tier?.minCards}`)
  );
  if (newTiers.length) {
    game.synergyFlash = { t: 0, families: newTiers.map((t) => t.familyId) };
    sfx?.synergy();
    showMessage(`Synergie active : ${newTiers.map((t) => t.label).join(", ")}!`, "normal");
  }
  renderDeckList();
}

function grantRelic(relic, opts = {}) {
  if (!relic) return;
  if (game.relics.picked.includes(relic.id)) return;
  relic.effect(opts);
  game.relics.picked.push(relic.id);
  renderRelicList();
  let msg = `Relique obtenue: ${relic.name}.`;
  if (opts.skipInstantHeal) {
    msg += " (Soin différé : des fuites ont été enregistrées sur cette vague.)";
  }
  showMessage(msg, "normal");
  createFloatText("RELIQUE!", canvas.width / 2 - 30, 86, "#ffe7b8");
  sfx?.relic?.();
}

function grantRandomRelic(opts = {}) {
  const available = RELIC_LIBRARY.filter((relic) => !game.relics.picked.includes(relic.id));
  if (available.length === 0) return;
  const relic = available[Math.floor(Math.random() * available.length)];
  grantRelic(relic, opts);
}

function pickRandomCardForReward() {
  const pool = getAvailableCardPool();
  if (pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const globals = CARD_LIBRARY.filter((card) => {
    if (card.towerCard || card.towerFamily) return false;
    return canAddCardToDeck(card, game.deck.picked);
  });
  if (globals.length > 0) {
    return globals[Math.floor(Math.random() * globals.length)];
  }
  return null;
}

function grantRandomCardSilently() {
  const card = pickRandomCardForReward();
  if (!card) return null;
  grantCard(card);
  return card;
}

function startNewRun() {
  clearRunSave();
  resetRunState();
  resetModifiers();
  configureRunMode(game, {
    mode: RUN_MODE_STANDARD,
    ascensionLevel: 1,
    seedInput: generateShareableSeed(),
  });
  initRunBestiary(game);
  beginRunStats(game);
  applyDailyChallengeForRun();
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.spire.map = buildSpireMap();
  game.spire.floor = 0;
  game.spire.lane = 1;
  resetCollectorUltimateForSpire(game);
  const mutation = MUTATION_LIBRARY.find((m) => m.id === game.run.mutationId);
  if (mutation) applyRunMutation(game, mutation);
  applyCollectorStartBonus();
  resetSkillsForNewWave(game);
  game.lives = game.maxLives;
  loadSpeedPreference();
  renderSynergyList();
  renderBestiaryList();
  const collector = getSelectedCollector();
  showMessage(
    `Run lancee (${formatRunModeLine(game)}) avec ${collector ? collector.name : "un Collectionneur"}: choisis ta route.`,
    "normal"
  );
  if (game.daily?.name && !isDailyCompletedToday()) {
    showMessage(`Défi actif : ${game.daily.name} — ${game.daily.desc}`, "warn");
  }

  hideOverlay();
  hideCollectorOverlay();
  hideTowerDraftOverlay();
  renderCollectorPanel();
  renderTowerShopButtons();
  sfx?.runStart?.();
  openMapForCurrentFloor();
  scheduleRunSave();

  if (_devJumpSpire && _devJumpSpire > 1) {
    const target = _devJumpSpire;
    _devJumpSpire = null;
    jumpToSpire(target);
  }
}

/** Saut direct vers une Spire (test / debug). */
function jumpToSpire(targetSpire) {
  const n = Math.max(1, Math.min(MAX_SPIRES, Math.floor(Number(targetSpire)) || 1));
  game.spire.spireNumber = n;
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.currentNodeType = null;

  const layoutIdx = Math.min(n - 1, SPIRE_LAYOUTS.length - 1);
  const layout = SPIRE_LAYOUTS[layoutIdx];
  applySpireLayout(layout);
  resetEncounterBoard();
  game.waveActive = false;
  game.spawnQueue = [];
  game.gold = getStartingGoldForSpire(n);
  game.biome = BIOMES[0];
  initWorldArt();
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  resetSkillsForNewWave(game);

  hideDraftOverlay();
  hideShopOverlay();
  hideNodeResult();
  nodeRetryOverlay?.classList.add("hidden");
  setScreen("playing");
  openMapForCurrentFloor();

  const routes = getLayoutRoutes(layout).length;
  showMessage(`[Test] Spire ${n}/${MAX_SPIRES} — ${layout.name} (${routes} voie(s)).`, "normal");
}

const getNodeLabel = mapFlow.getNodeLabel;
const getNodeDescription = mapFlow.getNodeDescription;
const isLaneReachable = mapFlow.isLaneReachable;
const renderMapChoices = () => mapFlow.renderMapChoices();
const onMapNodeChosen = (...args) => mapFlow.onMapNodeChosen(...args);
const buildSpireMap = () => mapFlow.buildSpireMap();

function renderBestiaryList() {
  if (!bestiaryListEl) return;
  const progress = loadBestiaryProgress();
  bestiaryListEl.innerHTML = renderBestiaryListHtml(
    enemyTypes,
    progress,
    game.run?.bestiaryDiscovered || []
  );
}

function openMutationOverlay() {
  const mutationChoices = MUTATION_LIBRARY.map(
    (m) => `
    <button class="draft-choice mutation-choice--mutation" data-mutation-id="${m.id}">
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <span class="tag">Mutation</span>
    </button>`
  ).join("");
  const noneChoice = `
    <button class="draft-choice mutation-choice--standard" data-mutation-id="none">
      <h3>Serre standard</h3>
      <p>Aucune mutation — run classique sans modificateur global.</p>
      <span class="tag">Classique</span>
    </button>`;
  mutationChoicesEl.innerHTML = mutationChoices + noneChoice;
  mutationOverlay.classList.remove("hidden");
  setScreen("mutation");
  requestAnimationFrame(() => onboarding?.startIfNeeded("mutation"));
}

function hideMutationOverlay() {
  mutationOverlay.classList.add("hidden");
}

function onMutationChosen(mutationId) {
  game.run.mutationId = mutationId === "none" ? null : mutationId;
  hideMutationOverlay();
  startNewRun();
}

function showCrossroadsOverlayFromState() {
  const gold = MAP_LANE_CONFIG?.crossroads?.goldReward ?? 85;
  const offerCard = game.spire.crossroadsOfferCardId
    ? CARD_LIBRARY.find((c) => c.id === game.spire.crossroadsOfferCardId)
    : null;

  const cardBody = offerCard
    ? `<p><strong>${escapeHtml(offerCard.name)}</strong> — ${escapeHtml(formatCardDesc(offerCard))}</p>`
    : `<p>Aucune carte compatible : +${gold} soleil a la place.</p>`;
  const cardTag = offerCard ? escapeHtml(offerCard.rarity) : "Secours";

  crossroadsChoicesEl.className = "draft-choices event-choices--pair";
  crossroadsChoicesEl.innerHTML = `
    <button class="draft-choice" data-crossroads-reward="gold">
      <h3>Reserve de nectar</h3>
      <p>+${gold} soleil immediatement.</p>
      <span class="tag">Soleil</span>
    </button>
    <button class="draft-choice" data-crossroads-reward="card">
      <h3>Mutation spontanee</h3>
      ${cardBody}
      <span class="tag">${cardTag}</span>
    </button>`;
  hideMapOverlay();
  crossroadsOverlay.classList.remove("hidden");
  setScreen("crossroads");
}

function openCrossroadsReward() {
  const offerCard = pickRandomCardForReward();
  game.spire.crossroadsOfferCardId = offerCard?.id ?? null;
  showCrossroadsOverlayFromState();
  tryContextHint("crossroads_first");
}

function hideCrossroadsOverlay() {
  crossroadsOverlay.classList.add("hidden");
}

function onCrossroadsRewardChosen(reward) {
  hideCrossroadsOverlay();
  const gold = MAP_LANE_CONFIG?.crossroads?.goldReward ?? 85;
  const offeredId = game.spire.crossroadsOfferCardId;
  game.spire.crossroadsOfferCardId = null;

  if (reward === "gold") {
    game.gold += gold;
    showMessage(`Carrefour : +${gold} soleil.`, "normal");
  } else {
    const card = offeredId ? CARD_LIBRARY.find((c) => c.id === offeredId) : null;
    if (card) {
      grantCard(card);
      renderDeckList();
      showMessage(`Carrefour : carte "${card.name}" ajoutee au deck.`, "normal");
    } else {
      game.gold += gold;
      showMessage(`Carrefour : pas de carte — +${gold} soleil.`, "normal");
    }
  }
  game.spire.lane = 1;
  game.spire.lanesMerged = true;
  advanceAfterCrossroads();
}

function advanceAfterCrossroads() {
  advanceToNextFloor();
}

function showWaveSummaryOverlay(stats, objectiveMessages, onContinue) {
  const towerNameById = (id) => {
    const t = getTowerById(Number(id));
    return t ? `${t.name} (niv.${t.level})` : null;
  };
  let html = formatWaveReportHtml(stats, towerNameById);
  if (game.waveModifier?.name) {
    html = `<p><strong>Modificateur :</strong> ${game.waveModifier.name} — ${game.waveModifier.desc}</p>${html}`;
  }
  if (objectiveMessages?.length) {
    html = `<ul class="wave-report-summary">${objectiveMessages.map((m) => `<li>${m}</li>`).join("")}</ul>${html}`;
  }
  waveSummaryBodyEl.innerHTML = html;
  _afterWaveSummaryCallback = onContinue;
  waveSummaryOverlay.classList.remove("hidden");
}

function hideWaveSummaryOverlay() {
  waveSummaryOverlay.classList.add("hidden");
  _afterWaveSummaryCallback = null;
}

function continueAfterWaveSummary() {
  const cb = _afterWaveSummaryCallback;
  hideWaveSummaryOverlay();
  if (cb) cb();
}

function openBossCardPick() {
  const pair = pickBossTempCardPair(BOSS_TEMP_CARD_LIBRARY);
  bossCardChoicesEl.innerHTML = pair
    .map(
      (c) => `
    <button class="draft-choice draft-choice--boss-card card-rarity-epique" data-boss-card-id="${c.id}" data-effect-id="${c.effectId}">
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="tag">1 vague</span>
    </button>`
    )
    .join("");
  game.wavePaused = true;
  bossCardOverlay.classList.remove("hidden");
  tryContextHint("boss_half_hp");
}

function hideBossCardOverlay() {
  bossCardOverlay.classList.add("hidden");
  game.wavePaused = false;
}

function onBossTempCardChosen(effectId) {
  game.bossTempWave = {};
  applyBossTempCardEffect(game, effectId);
  hideBossCardOverlay();
  game.enemies.forEach((e) => applyBossTempWaveToEnemy(e, game));
  showMessage("Carte d'urgence activee pour le reste de la vague.", "warn");
  sfx?.cardPick?.();
}

function maybeTriggerBossCardPhase(enemy) {
  if (enemy.typeKey !== "boss" || game.bossCardPhaseDone) return;
  if (enemy.hp / enemy.maxHp > 0.5) return;
  game.bossCardPhaseDone = true;
  openBossCardPick();
}

function activateCollectorUltimateSkill() {
  const collector = getSelectedCollector();
  const result = activateCollectorUltimate(game, collector, {
    createFloatText,
    canvas,
    emitParticles,
    triggerUltimateVfx: (ultimateId) =>
      triggerUltimateVfx(game, ultimateId, canvas, emitParticles),
  });
  if (result.ok && collector?.ultimateId === "herbier_burst") {
    game.gold += 120;
  }
  showMessage(result.message, result.ok ? "normal" : "warn");
  if (result.ok) {
    sfx?.ultimate?.(collector?.ultimateId);
  }
  updateSkillsUI();
}

/** Passe a l'etage suivant sur la carte (jamais victoire globale ici). */
function advanceToNextFloor() {
  if (game.spire.floor >= MAX_FLOORS - 1) return;
  game.spire.floor += 1;
  openMapForCurrentFloor();
}

function tryContextHint(hintId, ctx = {}) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => contextHints?.tryShow(hintId, ctx));
  });
}

function trySpireIntroHint() {
  const n = game.spire.spireNumber;
  if (game.spire.floor !== 0 || n < 2) return;
  const layout = SPIRE_LAYOUTS[Math.min(n - 1, SPIRE_LAYOUTS.length - 1)];
  const routes = getLayoutRoutes(layout).length;
  tryContextHint(`spire_${n}_intro`, {
    spireNumber: n,
    floor: 0,
    titleOverride: `Spire ${n}/${MAX_SPIRES} — ${layout.name}`,
    textOverride: `${layout.desc} · ${routes} voie(s). ${formatSpireThreatLine(n)}`,
  });
}

function openMapForCurrentFloor() {
  if (game.spire.floor >= MAX_FLOORS) return;
  applyBiomeForCurrentFloor();
  setScreen("map");
  hideDraftOverlay();
  hideCollectorOverlay();
  hideShopOverlay();
  hideNodeResult();
  renderMapChoices();
  showMapOverlay();
  requestAnimationFrame(() => {
    onboarding?.startIfNeeded("map");
    trySpireIntroHint();
  });
}

function openVictory() {
  runMusic.stop();
  hideAllTransientOverlays();
  touchRunProgress(game);
  markCampaignVictory();
  if (game.run.mode === RUN_MODE_ASCENSION) {
    markAscensionBeaten(game.run.ascensionLevel || 1);
  }
  setScreen("victory");
  const dailyBonus = applyRunEndDailyBonus();
  saveRunToLeaderboard();
  const copy = buildVictoryScreenCopy(game, {
    score: game.score,
    bestScore: game.bestScore,
    dailyBonus,
  });
  showEndRunScreen({
    outcome: "victory",
    title: copy.title,
    text: copy.text,
    buttonText: copy.buttonText,
    ascensionButtonText: copy.ascensionButtonText,
  });
  const endMsg = game.run.mode === RUN_MODE_ASCENSION
    ? `${getAscensionTorment(game.run.ascensionLevel || 1).name} termine.`
    : "Campagne terminee.";
  showMessage(endMsg, "normal");
  sfx?.victory?.();
}

function getNextAscensionLevel() {
  const current = game.run.mode === RUN_MODE_ASCENSION ? Number(game.run.ascensionLevel || 1) : 0;
  return Math.max(1, Math.min(5, Math.floor(current) + 1));
}

function continueCampaignAscension() {
  const nextLevel = getNextAscensionLevel();
  const startGold = getStartingGoldForSpire(1);
  const settlement = settleSpireGoldForNextSpire(game.gold, startGold, SPIRE_SURPLUS_GOLD_SCORE_RATE);

  hideOverlay();
  hideLeaderboard();
  hideAllTransientOverlays();
  contextHints?.hide();
  onboarding?.hide?.();
  towerFloatHud?.classList.add("hidden");

  saveRunModePreference(RUN_MODE_ASCENSION);
  saveAscensionLevel(nextLevel);

  game.run.encounterHpMult = 1;
  game.run.encounterSpeedMult = 1;
  configureRunMode(game, {
    mode: RUN_MODE_ASCENSION,
    ascensionLevel: nextLevel,
    seedInput: generateShareableSeed(),
  });
  applyTormentMaxLivesPenalty(game);

  game.spire.spireNumber = 1;
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.currentNodeType = null;
  game.spire.crossroadsOfferCardId = null;
  game.spire.lanesMerged = false;
  game.spire.pathTrail = [];
  game.waveModifier = null;
  game.nodeObjective = null;
  game.waveStats = null;
  game.wavePaused = false;
  game.bossCardPhaseDone = false;
  game.bossTempWave = null;
  game.waveCount = 0;
  game.waveActive = false;
  game.spawnQueue = [];

  applySpireLayout(SPIRE_LAYOUTS[0]);
  resetEncounterBoard();
  game.gold = settlement.newGold;
  if (settlement.scoreGain > 0) gainScore(settlement.scoreGain);
  game.lives = game.maxLives;
  game.biome = BIOMES[0];
  backgroundGradient = null;
  initWorldArt();
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  resetSkillsForNewWave(game);
  beginRunStats(game);
  loadSpeedPreference();
  renderDeckList();
  renderRelicList();
  renderSynergyList();
  renderBestiaryList();
  renderCollectorPanel();
  renderTowerShopButtons();
  openMapForCurrentFloor();
  scheduleRunSave();
  runMusic.transitionToRun({
    biomeId: getBiomeForFloor(game.spire.floor)?.id || "greenhouse",
    spireNumber: game.spire.spireNumber,
  });

  const torment = getAscensionTorment(nextLevel);
  const goldNote = settlement.scoreGain > 0
    ? ` ${settlement.excessGold} soleil convertis en +${settlement.scoreGain} score.`
    : "";
  showMessage(
    `${torment.name} lance : Spire 1/${MAX_SPIRES}, deck conserve.${goldNote} ${torment.rules[0] || ""}`,
    "warn",
  );
  sfx?.spireStart?.();
}

function startNextSpire() {
  game.spire.spireNumber += 1;
  game.spire.floor = 0;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;

  // Charger le layout de la nouvelle Spire
  const layoutIdx = Math.min(game.spire.spireNumber - 1, SPIRE_LAYOUTS.length - 1);
  const layout = SPIRE_LAYOUTS[layoutIdx];
  applySpireLayout(layout);

  // Reset complet du plateau (les tours repartent à zéro entre Spires)
  resetEncounterBoard();

  const startGold = getStartingGoldForSpire(game.spire.spireNumber);
  const priorGold = game.gold;
  const settlement = settleSpireGoldForNextSpire(priorGold, startGold, SPIRE_SURPLUS_GOLD_SCORE_RATE);
  game.gold = settlement.newGold;
  if (settlement.scoreGain > 0) {
    gainScore(settlement.scoreGain);
    createFloatText(
      `+${settlement.scoreGain} score`,
      canvas.width / 2 - 52,
      72,
      "#ffe7b8"
    );
  }

  // Régénérer le décor pour le nouveau terrain
  game.biome = BIOMES[0];
  initWorldArt();

  // Générer la carte de la nouvelle Spire
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  // Ouvrir la carte
  openMapForCurrentFloor();

  const layout2 = SPIRE_LAYOUTS[layoutIdx];
  const routes = getLayoutRoutes(layout2).length;
  let economyNote = `Budget: ${startGold} soleil.`;
  if (settlement.excessGold > 0) {
    economyNote += ` ${settlement.excessGold} soleil convertis en +${settlement.scoreGain} score (x${SPIRE_SURPLUS_GOLD_SCORE_RATE}).`;
  } else if (priorGold < startGold) {
    economyNote += ` (tu avais ${priorGold} soleil, reinitialise au budget de depart).`;
  }
  showMessage(
    `Spire ${game.spire.spireNumber}/${MAX_SPIRES} : ${layout2.name} — ${routes} voie(s). ${economyNote}`,
    settlement.excessGold > 0 ? "normal" : "warn"
  );
  sfx?.spireStart?.();
}

function getDeckFamilies() {
  const families = new Set();
  for (const towerId of game.towerDeck) {
    const family = towerTypes[towerId]?.family;
    if (family) families.add(family);
  }
  return families;
}

function isCardRelevantForDeck(card) {
  if (card.towerCard && !game.towerDeck.includes(card.towerCard)) return false;
  if (card.towerFamily && !getDeckFamilies().has(card.towerFamily)) return false;
  return true;
}

function getAvailableCardPool() {
  return CARD_LIBRARY.filter((card) => {
    if (!isCardRelevantForDeck(card)) return false;
    return canAddCardToDeck(card, game.deck.picked);
  });
}

/** Texte carte : précise quelles tours du deck sont concernées (famille / variante). */
function formatCardDesc(card) {
  if (!card) return "";
  if (card.towerCard) {
    const tower = towerTypes[card.towerCard];
    if (tower) return `${card.desc} · ${tower.name}`;
    return card.desc;
  }
  if (card.towerFamily) {
    const inDeck = game.towerDeck
      .map((id) => towerTypes[id])
      .filter((t) => t && t.family === card.towerFamily);
    if (inDeck.length) {
      return `${card.desc} · ${inDeck.map((t) => t.name).join(", ")}`;
    }
  }
  return card.desc;
}

function pickCardsFromPool(pool, count) {
  const floorIdx = Math.min(game.spire.floor, MAX_FLOORS - 1);
  const picks = [];
  const available = pool.slice();

  const drawOne = (list) => {
    const weights = list.map((card) => {
      const table = CARD_RARITY_WEIGHTS[card.rarity] || CARD_RARITY_WEIGHTS.Commune;
      return table[floorIdx] || 1;
    });
    const total = weights.reduce((a, b) => a + b, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < list.length; i += 1) {
      roll -= weights[i];
      if (roll <= 0) return i;
    }
    return list.length - 1;
  };

  while (picks.length < count && available.length > 0) {
    const idx = drawOne(available);
    picks.push(available[idx]);
    available.splice(idx, 1);
  }
  return picks;
}

function getShopOffers() {
  const priceMult = getTormentShopPriceMult(game);
  const cardChoices = pickCardsFromPool(getAvailableCardPool(), 2);
  const offers = cardChoices.map((card, idx) => ({
    id: `card-${idx}-${card.id}`,
    type: "card",
    cardId: card.id,
    name: card.name,
    desc: formatCardDesc(card),
    price: Math.max(
      50,
      Math.round(
        ((card.rarity === "Epique" ? 165 : card.rarity === "Rare" ? 125 : 95)
          - getMutationShopDiscount(game))
        * priceMult,
      ),
    ),
    bought: false,
  }));

  const relicPool = RELIC_LIBRARY.filter((relic) => !game.relics.picked.includes(relic.id));
  if (relicPool.length > 0) {
    const relic = relicPool[Math.floor(Math.random() * relicPool.length)];
    offers.push({
      id: `relic-${relic.id}`,
      type: "relic",
      relicId: relic.id,
      name: relic.name,
      desc: relic.desc,
      price: Math.round(220 * priceMult),
      bought: false,
    });
  } else {
    offers.push({
      id: "heal-pack",
      type: "heal",
      name: "Pack de Nectar",
      desc: "Soigne 40% de la vie max.",
      price: Math.round(110 * priceMult),
      bought: false,
    });
  }

  return offers;
}

function renderShopOffers() {
  shopGoldLabel.textContent = `Soleil disponible: ${game.gold}`;
  shopChoicesEl.innerHTML = game.shop.offers
    .map((offer) => {
      const soldClass = offer.bought ? "sold disabled" : "";
      const affordClass = !offer.bought && game.gold < offer.price ? "unaffordable" : "";
      return `
      <button type="button" class="draft-choice shop-choice${soldClass ? ` ${soldClass}` : ""}${affordClass ? ` ${affordClass}` : ""}" data-offer-id="${offer.id}">
        <h3>${offer.name}</h3>
        <p>${offer.desc}</p>
        <span class="detail">${getShopOfferLabel(offer)}</span>
        <span class="price">${offer.bought ? "Achete" : `${offer.price} soleil`}</span>
      </button>
    `;
    })
    .join("");
}

function getShopOfferLabel(offer) {
  if (offer.type === "card") return "Carte ajoutee au deck";
  if (offer.type === "relic") return "Relique permanente";
  return "Soin immediat";
}

function openShopNode() {
  game.shop.offers = getShopOffers();
  setScreen("shop");
  showShopOverlay();
  renderShopOffers();
  showMessage("Boutique: choisis un achat ou quitte.", "normal");
  tryContextHint("shop_first");
}

function advanceAfterShop() {
  hideShopOverlay();
  advanceToNextFloor();
}

function buyShopOfferById(offerId) {
  const offer = game.shop.offers.find((item) => item.id === offerId);
  if (!offer || offer.bought) return;
  if (game.gold < offer.price) {
    showMessage("Pas assez de soleil pour cet achat.", "warn");
    return;
  }

  game.gold -= offer.price;
  offer.bought = true;

  if (offer.type === "card") {
    const card = CARD_LIBRARY.find((item) => item.id === offer.cardId);
    if (card) {
      grantCard(card);
      renderDeckList();
      showMessage(`Achat: carte ${card.name}.`, "normal");
    }
  } else if (offer.type === "relic") {
    const relic = RELIC_LIBRARY.find((item) => item.id === offer.relicId);
    grantRelic(relic);
  } else if (offer.type === "heal") {
    const heal = Math.round(game.maxLives * 0.4);
    game.lives = Math.min(game.maxLives, game.lives + heal);
    showMessage(`Achat: soin +${heal} vies.`, "normal");
  }

  sfx?.shopBuy?.();
  renderShopOffers();
}

function handleNonCombatNode(type) {
  let title = "";
  let text = "";

  if (type === "rest") {
    const collector = getSelectedCollector();
    const baseHeal = computeRestHeal(game.maxLives, collector ? collector.id : null);
    const finalHeal = Math.max(1, Math.round(baseHeal * getTormentRestHealMult(game)));
    game.lives = Math.min(game.maxLives, game.lives + finalHeal);
    title = "Repos";
    text = `Tu recuperes ${finalHeal} vies. Le repos ne donne pas de carte, mais permet de stabiliser une run difficile.`;
    showMessage(`Repos: +${finalHeal} vies.`, "normal");
    createFloatText(`+${finalHeal} PV`, canvas.width / 2 - 10, 90, "#d7ffd4");
    tryContextHint("rest_first");
  } else if (type === "shop") {
    openShopNode();
    return;
  } else if (type === "event") {
    openEventOverlay();
    return;
  }

  setScreen("nodeResult");
  hideMapOverlay();
  showNodeResult(title, text);
}

function renderPendingEventOverlay() {
  const event = game.pendingEvent;
  if (!event?.choices?.length) return false;
  eventOverlayTitle.textContent = event.title || "Evenement";
  eventOverlayDesc.textContent = event.desc || "";
  let eventChoicesClass = "draft-choices";
  if (event.layout === "cross") eventChoicesClass += " event-choices--cross";
  else if (event.choices.length === 2) eventChoicesClass += " event-choices--pair";
  eventChoicesEl.className = eventChoicesClass;
  eventChoicesEl.innerHTML = event.choices.map(
    (c) => {
      const slotClass = c.slot ? ` event-choice--${c.slot}` : "";
      return `
    <button class="draft-choice${slotClass}" data-event-choice-id="${c.id}">
      <h3>${escapeHtml(c.label)}</h3>
      <p>${escapeHtml(c.desc)}</p>
      <span class="tag">Choix</span>
    </button>`;
    }
  ).join("");
  hideMapOverlay();
  eventOverlay.classList.remove("hidden");
  setScreen("event");
  return true;
}

function openEventOverlay() {
  const laneTag = getLaneEventLaneTag(game.spire.lane, MAP_LANE_CONFIG);
  const uniqueBias = getLaneEventUniqueBias(game.spire.lane, MAP_LANE_CONFIG);
  const event = pickRandomEvent(EVENT_LIBRARY, getRunRng(game), {
    laneTag,
    uniqueBias,
  });
  if (!event?.choices?.length) {
    game.gold += EVENT_GOLD.nectar;
    hideMapOverlay();
    setScreen("nodeResult");
    showNodeResult("Event", `Reserve de nectar : +${EVENT_GOLD.nectar} soleil.`);
    return;
  }
  game.pendingEvent = event;
  renderPendingEventOverlay();
  tryContextHint("event_first");
}

function hideEventOverlay() {
  eventOverlay?.classList.add("hidden");
  game.pendingEvent = null;
}

function onEventChoiceChosen(choiceId) {
  const event = game.pendingEvent;
  const choice = event?.choices?.find((c) => c.id === choiceId);
  hideEventOverlay();
  hideMapOverlay();
  const result = applyEventChoiceEffect(choice, {
    game,
    gainScore,
    showMessage,
    grantCard,
    renderDeckList,
    pickRandomCardForReward,
    grantRandomRelic,
  });
  setScreen("nodeResult");
  showNodeResult(result.title, result.text);
}

function advanceAfterNodeResult() {
  hideNodeResult();
  advanceToNextFloor();
}

function advanceFromNodeResult() {
  if (getNodeResultAdvanceAction(game.spire.pendingSpireTransition) === "nextSpire") {
    startNextSpire();
    return;
  }
  advanceAfterNodeResult();
}

function getDraftChoices() {
  return pickCardsFromPool(getAvailableCardPool(), 3);
}

function renderDraftChoices() {
  draftChoicesEl.innerHTML = game.draft.activeChoices
    .map(
      (card) => `
      <button class="draft-choice draft-choice--card ${getCardTextureClass(card)}" data-card-id="${card.id}">
        <h3>${card.name}</h3>
        <p>${formatCardDesc(card)}</p>
        <span class="tag">${card.rarity}</span>
      </button>
    `
    )
    .join("");
}

function startDraftPhase() {
  game.draft.activeChoices = getDraftChoices();
  renderDraftChoices();
  setScreen("draft");
  showDraftOverlay();
  showMessage("Choisis une carte pour ton deck.", "normal");
  tryContextHint("draft_first");
}

function applyCardById(cardId) {
  const card = CARD_LIBRARY.find((c) => c.id === cardId);
  if (!card) return;
  grantCard(card);
  renderDeckList();
  hideDraftOverlay();
  game.draft.activeChoices = [];
  gainScore(90);
  sfx?.cardPick?.();
  showMessage(`Carte choisie: ${card.name}.`, "normal");

  if (game.spire.pendingAdvanceAfterDraft) {
    game.spire.pendingAdvanceAfterDraft = false;
    advanceToNextFloor();
    return;
  }

  setScreen("playing");
}

function generateEncounterQueue(type) {
  const queue = generateEncounterQueueByFloor({
    floor: game.spire.floor,
    nodeType: type,
    countBonus: game.encounter.countBonus,
    floorScaling: FLOOR_SCALING,
    spireNumber: game.spire.spireNumber,
    enemyDefs: enemyTypes,
    rng: getRunRng(game),
  });
  const mechanics = getEncounterMechanics(ENCOUNTER_CONFIG, type, game.biome?.id);
  const extended = extendEncounterQueue(queue, type, mechanics);
  return extendQueueForTorment(extended, game, {
    nodeType: type,
    pickEncounterEnemy,
    floor: game.spire.floor,
    spireNumber: game.spire.spireNumber,
    enemyDefs: enemyTypes,
    rng: getRunRng(game),
  });
}

function spawnWave() {
  if (game.screen !== "playing" || game.waveActive) return;
  if (!game.spire.currentNodeType) return;
  resetSkillsForNewWave(game);
  updateSkillsUI();
  game.waveActive = true;
  game.waveCount += 1;
  game.waveModifier = game.pendingWaveModifier
    || pickWaveModifier(WAVE_MODIFIER_LIBRARY, getRunRng(game));
  game.pendingWaveModifier = null;
  applyWaveModifierToEncounter(game.encounter, game.waveModifier);
  beginWaveStats(game);
  let queue = generateEncounterQueue(game.spire.currentNodeType);
  queue = scaleEncounterQueue(queue, game.waveModifier);
  game.spawnQueue = queue;
  game.spawnTimer = 0.1;
  startWaveBtn.textContent = "Combat en cours...";
  const modLabel = game.waveModifier ? ` · ${game.waveModifier.name}` : "";
  const objLabel = game.nodeObjective ? ` · Objectif: ${game.nodeObjective.name}` : "";
  mapFlow.updateCombatObjectiveBanner();
  showMessage(`${getNodeLabel(game.spire.currentNodeType)} lance${modLabel}${objLabel}.`, "normal");
  onboarding?.startIfNeeded("wave");
}

function loseLifeAndCheck({ bossBreach = false } = {}) {
  if (game.waveActive) {
    recordWaveLeak(game);
    recordRunLeak(game);
  }
  const nodeType = game.spire.currentNodeType || "combat";
  const extraLeak = getTormentExtraLeakLives(game, { nodeType, bossBreach });
  if (bossBreach) {
    sfx?.leak?.(true);
    const bossTormentExtra = game.run.mode === RUN_MODE_ASCENSION
      ? (game.run.tormentExtraLeakBoss ?? 0)
      : 0;
    if (bossTormentExtra > 0) {
      const totalLoss = 1 + bossTormentExtra;
      game.lives -= totalLoss;
      createFloatText(`-${totalLoss} vies`, canvas.width / 2 - 34, 96, "#ff6a72");
      showMessage(
        `Le boss franchit la ligne (${getAscensionTorment(game.run.ascensionLevel || 1).name}) ! −${totalLoss} vies.`,
        "danger",
      );
    } else {
      game.lives = 0;
    }
  } else {
    const totalLoss = 1 + extraLeak;
    game.lives -= totalLoss;
    sfx?.leak?.(false);
    createFloatText(`-${totalLoss} vie${totalLoss > 1 ? "s" : ""}`, canvas.width / 2 - 34, 96, "#ff8a72");
    const leakMsg = extraLeak > 0 && game.run.mode === RUN_MODE_ASCENSION
      ? `Ravageur en fuite (${getAscensionTorment(game.run.ascensionLevel || 1).name}) ! −${totalLoss} vies.`
      : `Ravageur en fuite ! ${game.lives} vie${game.lives > 1 ? "s" : ""} restante${game.lives > 1 ? "s" : ""}.`;
    showMessage(leakMsg, "warn");
  }
  if (game.lives > 0) {
    if (bossBreach) showMessage("Le boss a franchi la ligne !", "danger");
    return;
  }

  const inCombatNode = ["combat", "elite", "boss"].includes(game.spire.currentNodeType);
  if (
    game.run.nodeRetryAvailable &&
    inCombatNode &&
    game.screen === "playing"
  ) {
    nodeRetryOverlay?.classList.remove("hidden");
    game.wavePaused = true;
    showMessage(
      bossBreach
        ? "Le boss a franchi la ligne ! Derniere chance : reprendre ce noeud ?"
        : "Derniere chance : reprendre ce noeud ?",
      "warn"
    );
    return;
  }

  triggerGameOver({ bossLeak: bossBreach });
}

function triggerGameOver({ bossLeak = false } = {}) {
  clearRunSave();
  runMusic.stop();
  game.wavePaused = false;
  game.waveActive = false;
  game.spawnQueue = [];
  game.enemies = [];
  game.enemyById.clear();
  hideAllTransientOverlays();
  touchRunProgress(game);
  setScreen("gameover");
  const dailyBonus = applyRunEndDailyBonus();
  saveRunToLeaderboard();
  const spireReached = game.spire.spireNumber;
  const floorReached = game.spire.floor + 1;
  const defeatReason = bossLeak
    ? "Un boss a atteint la destination : la serre est perdue."
    : "Tes vies sont epuisees.";
  const bonusLine = dailyBonus > 0 ? `\n\nBonus défi du jour : +${dailyBonus.toLocaleString()} score.` : "";
  showEndRunScreen({
    outcome: "defeat",
    title: bossLeak ? "Defaite — Le boss a franchi la ligne" : "Defaite — La serre est tombee",
    text:
      `${defeatReason} (Spire ${spireReached}/${MAX_SPIRES}, etage ${floorReached}/${MAX_FLOORS}).\n\n` +
      `La mort met fin a la run — seule une victoire sur la Spire ${MAX_SPIRES} compte comme triomphe.\n\n` +
      `Score : ${game.score.toLocaleString()} · Record : ${game.bestScore.toLocaleString()}${bonusLine}`,
    buttonText: "Menu principal",
  });
  showMessage("Run terminee. Retour au menu principal.", "danger");
}

function acceptNodeRetry() {
  if (!game.run.nodeRetryAvailable) return;
  game.run.nodeRetryAvailable = false;
  game.maxLives = Math.max(6, game.maxLives - 2);
  game.lives = Math.max(1, Math.round(game.maxLives * 0.45));
  nodeRetryOverlay?.classList.add("hidden");
  game.wavePaused = false;
  resetEncounterState();
  showMessage(`Reprise du noeud (${game.lives} vies, -2 max).`, "warn");
  createFloatText("REPRISE!", canvas.width / 2 - 36, 100, "#ffe87a");
  sfx?.retry?.();
}

function declineNodeRetry() {
  nodeRetryOverlay?.classList.add("hidden");
  triggerGameOver();
}

function defeatEnemy(enemy, position) {
  defeatEnemyLifecycle(enemy, position, {
    bestiaryConfig: BESTIARY_CONFIG,
    canvas,
    createEnemy,
    createFloatText,
    distance,
    emitParticles,
    enemyTypes,
    gainScore,
    game,
    getTowerRange,
    playSound,
    renderBestiaryList,
    sfx,
    showMessage,
    worldPosOfEnemy,
  });
}

function finishWaveIfNeeded() {
  finishWaveIfReady(game, {
    gainScore,
    getLayoutRoutes,
    getStartingGoldForSpire,
    grantRandomCardSilently,
    grantRandomRelic,
    hideMapOverlay,
    openVictory,
    setScreen,
    setStartWaveLabel: (label) => {
      startWaveBtn.textContent = label;
    },
    showMessage,
    showNodeResult,
    showWaveSummaryOverlay,
    sfx,
    spireLayouts: SPIRE_LAYOUTS,
    startDraftPhase,
    tryContextHint,
  });
}

function updateSkillTimers(dt) {
  tickSkillTimers(game, dt);
}

function updateEnemies(dt) {
  const biome = game.biome || BIOMES[0];
  updateEnemyCombat(game, {
    biome,
    createEnemy,
    createFloatText,
    defeatEnemy,
    distance,
    emitParticles,
    encounterConfig: ENCOUNTER_CONFIG,
    enemyRoute,
    getEncounterMechanics,
    loseLifeAndCheck,
    maybeTriggerBossCardPhase,
    sfx,
    showMessage,
    updateBossPhases,
    worldPosOfEnemy,
  }, dt);
}

function updateTowers(dt) {
  const biome = game.biome || BIOMES[0];
  updateTowerCombat(game, {
    biome,
    distance,
    distanceSq,
    getBossTempTowerMods,
    getCreamsicleAuraRange,
    getTowerFireRateRatio,
    getTowerPierceCount,
    getTowerPoisonDps,
    getTowerRange,
    playSound,
    sfx,
    towerTypes,
    worldPosOfEnemy,
  }, dt);
}

function updateProjectiles(dt) {
  updateProjectileCombat(game, {
    applyHitShieldDamage,
    applySlowToEnemy,
    computeDamageToEnemy,
    createFloatText,
    defeatEnemy,
    distance,
    emitParticles,
    getBossTempDamageMult,
    getEnemyById,
    getTowerArmorShredDuration,
    getTowerArmorShredMult,
    getTowerBurnDps,
    getTowerById,
    getTowerSlowPotency,
    getTowerSplashRadius,
    maybeTriggerBossCardPhase,
    playSound,
    recordRunTowerDamage,
    recordTowerDamage,
    scaleTowerPassiveDuration,
    sfx,
    towerTypes,
    worldPosOfEnemy,
  }, dt);
}

function updateParticles(dt) {
  updateCombatFx({
    floatTexts: game.floatTexts,
    particles: game.particles,
  }, dt);
}

function updateWeather(dt) {
  updateWeatherState(game, { canvas }, dt);
}

function updateWaveSpawning(dt) {
  updateWaveSpawningState(game, {
    createEnemy,
    pathsLength: paths.length,
  }, dt);
}

function updateGame(dt) {
  updateSkillTimers(dt);
  updateWaveSpawning(dt);
  updateEnemies(dt);
  updateTowers(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  updateUltimateVfx(game, dt);
  updateTowerUpgradeVfx(game, dt);
  updateWeather(dt);
  finishWaveIfNeeded();
}

function drawBackground() {
  const biome = game.biome || BIOMES[0];
  if (!backgroundGradient) {
    backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, biome.bg[0]);
    backgroundGradient.addColorStop(0.55, biome.bg[1]);
    backgroundGradient.addColorStop(1, biome.bg[2]);
  }
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const floorTexture = BIOME_FLOOR_TEXTURES[biome.id];
  if (floorTexture?.complete && floorTexture.naturalWidth > 0) {
    ctx.globalAlpha = 0.62;
    drawCoverImage(ctx, floorTexture, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  } else if (grassPattern) {
    ctx.globalAlpha = 0.52;
    ctx.fillStyle = grassPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }

  drawBoardBackdropStyle(ctx, {
    canvas,
    biome,
    time: game.animT,
  });

  for (const leaf of game.decor.leaves) {
    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rot);
    ctx.fillStyle = leaf.color;
    ctx.globalAlpha = leaf.blade ? 0.2 : 0.3;
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.blade ? leaf.r * 2.8 : leaf.r * 1.9, leaf.r * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = leaf.blade ? 0.1 : 0.16;
    ctx.strokeStyle = leaf.vein || "rgba(220,255,160,0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-leaf.r * 1.35, 0);
    ctx.quadraticCurveTo(0, -leaf.r * 0.2, leaf.r * 1.35, 0);
    ctx.stroke();
    ctx.restore();
  }

  for (const stone of game.decor.stones) {
    ctx.fillStyle = stone.color;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.ellipse(stone.x, stone.y, stone.r * 1.25, stone.r, 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawPath() {
  drawBoardPaths(ctx, {
    dirtPattern,
    pathPebbles,
    paths,
  });
}

function drawPads() {
  const placing = game.screen === "playing" && Boolean(game.selectedTowerType);
  drawBoardPads(ctx, {
    pads,
    placing,
    touchUi: isTouchLayout(),
  });
}

function drawSetDressing() {
  drawSetDressingDecor(ctx, game.decor);
}

function drawFireflies() {
  drawFireflyDecor(ctx, game.decor.fireflies);
}

function drawLightingOverlay() {
  const biome = game.biome || BIOMES[0];
  drawLightingOverlayDecor(ctx, { biome, canvas });
}

function drawTower(tower) {
  drawTowerSprite(ctx, tower, {
    animT: game.animT,
    drawTowerLevelAura,
    drawTowerSelectionRange,
    game,
    getCreamsicleAuraRange,
    getTowerRange,
    getTowerUpgradePreviewRange,
    sprites,
    towerTypes,
  });
}

function drawEnemy(enemy) {
  drawEnemySprite(ctx, enemy, {
    animT: game.animT,
    enemyFacingX,
    sprites,
    worldPosOfEnemy,
  });
}

function drawProjectiles() {
  drawProjectileSprites(ctx, game.projectiles);
}

function drawWeather() {
  const biome = game.biome || BIOMES[0];
  drawWeatherOverlay(ctx, {
    biome,
    canvas,
    fogOffset: game.fogOffset,
    rainDrops: game.rainDrops,
  });
}

function drawFx() {
  drawCombatFx(ctx, {
    canvas,
    floatTexts: game.floatTexts,
    particles: game.particles,
    screen: game.screen,
  });
}

function drawBoard() {
  renderBoardFrame({
    ctx,
    canvas,
    game,
    drawBackground,
    drawSetDressing,
    drawPath,
    drawPads,
    drawRangePreviews: drawPlacementRangePreviews,
    drawTower,
    drawEnemy,
    drawProjectiles,
    drawWeather,
    drawFireflies,
    drawTowerUpgradeVfx,
    drawUltimateVfx,
    drawFx,
    drawLightingOverlay,
  });
}

function updateHud() {
  updateHudView({
    game,
    maxFloors: MAX_FLOORS,
    hudCache,
    hudElements: {
      livesEl,
      goldEl,
      waveEl,
      enemyCountEl,
      scoreEl,
      bestScoreEl,
    },
    updateTowerPanel,
    updateSkillsUI,
  });
}

// ─── TITLE SCREEN ────────────────────────────────────────────────────────────

const titleAnim = createTitleAnimState();

// ─── TITLE MUSIC ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────

function updateTitleScreen(dt) {
  updateTitleScreenAnim(titleAnim, dt);
}

function drawTitleScreen() {
  drawTitleScreenFrame(ctx, titleAnim);
}

function leaveTitleScreen() {
  if (game.screen !== "title") return;
  if (titleInputWrap) titleInputWrap.classList.add("hidden");
  titleDailyPanel?.classList.add("hidden");
  titleResumePanel?.classList.add("hidden");
  setScreen("menu");
  showOverlay(
    "Les Gloutonnes RDTD",
    "Choisis un Collectionneur, construis ton deck, puis traverse la carte Spire en tower defense.",
    "Choisir un Collectionneur"
  );
  showMessage("Lance une campagne et construis ton deck carnivore.", "normal");
}

function returnToTitleScreen() {
  clearRunSave();
  hideOverlay();
  hideLeaderboard();
  hideAllTransientOverlays();
  contextHints?.hide();
  onboarding?.hide?.();
  towerFloatHud?.classList.add("hidden");

  runMusic.stop();
  resetRunState();
  resetEncounterBoard();
  applySpireLayout(SPIRE_LAYOUTS[0]);
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.lives = game.maxLives;
  game.collector.selectedId = null;
  game.towerDeck = [];
  game.spire.map = [];
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.biome = BIOMES[0];
  backgroundGradient = null;
  initWorldArt();
  titleAnim.musicStarted = false;
  titleAnim.fadeIn = 0;
  titleAnim.titleY = -120;

  renderDeckList();
  renderRelicList();
  renderTowerShopButtons();
  renderCollectorPanel();
  updateHud();
  setScreen("title");
  renderTitleResumePanel();
  showMessage("Bienvenue, Chasseur. Entre ton nom pour repartir.", "normal");
}

// ─── GAME LOOP ───────────────────────────────────────────────────────────────

function gameLoop(ts) {
  if (!game.lastTs) game.lastTs = ts;
  const realDt = Math.min((ts - game.lastTs) / 1000, 0.06);
  game.lastTs = ts;

  game.animT += realDt;

  if (game.synergyFlash) {
    game.synergyFlash.t += realDt;
    if (game.synergyFlash.t > 2.2) {
      game.synergyFlash = null;
      renderSynergyList();
    }
  }

  if (game.screen === "title") {
    updateTitleScreen(realDt);
    drawTitleScreen();
    updateHud();
    requestAnimationFrame(gameLoop);
    return;
  }

  if (game.screen === "playing" && !game.wavePaused) {
    updateGame(realDt * game.speedMultiplier);
  }
  else {
    updateParticles(realDt * 0.5);
    updateWeather(realDt * 0.5);
    updateSkillTimers(realDt * 0.25);
  }

  drawBoard();
  updateHud();
  requestAnimationFrame(gameLoop);
}

function clearTowerSelection() {
  game.selectedTowerId = null;
  towerPanelCacheKey = "";
  updateMobileCombatZoom();
  updateTowerPanel();
}

function selectBuildTower(typeKey) {
  if (game.screen !== "playing") return;
  game.selectedTowerType = typeKey;
  clearTowerSelection();
  towerButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.tower === typeKey));
  updatePlacementUi();
}

function handleBuildOnPad(pad) {
  if (game.screen !== "playing") return false;
  if (!game.selectedTowerType || pad.occupiedBy !== null) return false;
  const type = towerTypes[game.selectedTowerType];
  if (game.gold < type.cost) {
    showMessage("Soleil insuffisant pour cette plante.", "warn");
    return true;
  }
  const tower = createTower(game.selectedTowerType, pad);
  game.gold -= type.cost;
  game.towers.push(tower);
  pad.occupiedBy = tower.id;
  game.selectedTowerId = tower.id;
  game.selectedTowerType = null;
  clearPlacementHover();
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  updatePlacementUi();
  gainScore(40);
  showMessage(`${tower.name} plantee avec succes.`, "normal");
  emitParticles(tower.x, tower.y, "#dfffb0", 12);
  sfx?.plant?.();
  towerPanelCacheKey = "";
  updateTowerPanel();
  return true;
}

function trySelectTowerAt(x, y) {
  const selectRadius = getTowerSelectRadius();
  for (const tower of game.towers) {
    if (distance({ x, y }, tower) <= selectRadius) {
      game.selectedTowerId = tower.id;
      showMessage(`${tower.name} selectionnee.`, "normal");
      towerPanelCacheKey = "";
      updateTowerPanel();
      return true;
    }
  }
  return false;
}

function getPadHitRadius() {
  if (isPhoneViewport()) return 46;
  if (isTabletViewport()) return 36;
  return 24;
}

function getTowerSelectRadius() {
  if (isPhoneViewport()) return 30;
  if (isTabletViewport()) return 22;
  return 18;
}

function updatePlacementUi() {
  const placing = game.screen === "playing" && Boolean(game.selectedTowerType);
  cancelPlacementBtn?.classList.toggle("hidden", !placing);
  document.body.classList.toggle("is-placing-tower", placing);
  updateMobileCombatZoom();
}

function updateMobileCombatZoom() {
  if (!isPhoneViewport()) {
    document.body.removeAttribute("data-mobile-zoom");
    return;
  }
  const zoom = game.selectedTowerType && game.screen === "playing";
  if (zoom) document.body.setAttribute("data-mobile-zoom", "1");
  else document.body.removeAttribute("data-mobile-zoom");
}

function updatePlacementHoverFromEvent(event) {
  game.placementHoverPad = null;
  if (game.screen !== "playing" || !game.selectedTowerType) return;
  const coords = getBoardCoords(event);
  if (!coords) return;
  const padRadius = getPadHitRadius();
  let best = null;
  let bestDist = Infinity;
  for (const pad of pads) {
    if (pad.occupiedBy !== null) continue;
    const dist = distance(coords, pad);
    if (dist <= padRadius && dist < bestDist) {
      bestDist = dist;
      best = pad;
    }
  }
  game.placementHoverPad = best;
}

function clearPlacementHover() {
  game.placementHoverPad = null;
}

function cancelTowerPlacement() {
  game.selectedTowerType = null;
  clearPlacementHover();
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  updatePlacementUi();
  showMessage("Placement annulé.", "normal");
}

function getBoardCoords(event) {
  const rect = canvas.getBoundingClientRect();
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  const clientX = event.clientX ?? touch?.clientX;
  const clientY = event.clientY ?? touch?.clientY;
  if (clientX == null || clientY == null) return null;
  return {
    x: ((clientX - rect.left) / rect.width) * canvas.width,
    y: ((clientY - rect.top) / rect.height) * canvas.height,
  };
}

function onBoardPointer(event) {
  if (game.screen !== "playing") return;
  const coords = getBoardCoords(event);
  if (!coords) return;
  const { x, y } = coords;

  const selectedTower = getTowerById(game.selectedTowerId);
  if (selectedTower && distance({ x, y }, selectedTower) > 30) clearTowerSelection();

  const padRadius = getPadHitRadius();
  for (const pad of pads) {
    if (distance({ x, y }, pad) > padRadius) continue;
    if (pad.occupiedBy !== null) {
      game.selectedTowerId = pad.occupiedBy;
      showMessage("Tour selectionnee pour gestion.", "normal");
      sfx?.select?.();
      towerPanelCacheKey = "";
      updateTowerPanel();
      return;
    }
    if (handleBuildOnPad(pad)) return;
  }

  if (trySelectTowerAt(x, y)) return;
  showMessage("Selectionne une plante puis une zone de plantation.", "normal");
}

function onBoardPointerMove(event) {
  if (game.screen !== "playing") return;
  updatePlacementHoverFromEvent(event);
}

function onBoardClick(event) {
  onBoardPointer(event);
}

function canManageSelectedTower() {
  return game.screen === "playing" || game.screen === "paused";
}

function upgradeSelectedTower() {
  if (!canManageSelectedTower()) return;
  const tower = getTowerById(game.selectedTowerId);
  if (!tower) return;
  if (!canUpgradeTower(tower)) {
    showMessage("Cette tour est deja au niveau maximum.", "warn");
    return;
  }
  const cost = getUpgradeCost(tower);
  if (game.gold < cost) {
    showMessage("Pas assez de soleil pour ameliorer.", "warn");
    return;
  }
  game.gold -= cost;
  applyTowerUpgrade(tower, cost);
  gainScore(80 * tower.level);
  triggerTowerUpgradeVfx(game, tower, tower.level, emitParticles);
  towerPanelCacheKey = "";
  if (tower.level === 2) {
    createFloatText("Niv 2!", tower.x - 18, tower.y - 28, "#b8ffcc");
    sfx?.upgrade?.(tower.level);
  } else {
    createFloatText("MAX!", tower.x - 16, tower.y - 30, "#ffe87a");
    sfx?.upgrade?.(tower.level);
  }
  showMessage(`${tower.name} amelioree au niveau ${tower.level}.`, "normal");
  updateTowerPanel();
}

function hideSellConfirmOverlay() {
  sellConfirmOverlay?.classList.add("hidden");
  pendingSellTowerId = null;
}

function buildSellConfirmMessage(tower) {
  const refund = getTowerSellRefund(tower);
  const invested = tower.investedGold;
  const levelLine = tower.level > 1
    ? `Cette tour est au niveau ${tower.level} — tu perds les améliorations.`
    : "";
  return [
    levelLine,
    `Investissement : ${invested} soleil.`,
    `Remboursement : ${refund} soleil (70 %).`,
    "Confirmer la vente ?",
  ].filter(Boolean).join("\n");
}

function executeSellTower(tower) {
  const refund = getTowerSellRefund(tower);
  game.gold += refund;
  const index = game.towers.findIndex((item) => item.id === tower.id);
  if (index >= 0) game.towers.splice(index, 1);
  if (tower.padRef) tower.padRef.occupiedBy = null;
  emitParticles(tower.x, tower.y, "#ffe9ac", 14);
  createFloatText(`+${refund}`, tower.x - 12, tower.y - 20, "#fdf5b7");
  clearTowerSelection();
  showMessage(`Tour vendue : +${refund} soleil récupérés.`, "normal");
  sfx?.sell?.();
}

function confirmSellSelectedTower() {
  const tower = getTowerById(pendingSellTowerId ?? game.selectedTowerId);
  hideSellConfirmOverlay();
  if (!tower || !canManageSelectedTower()) return;
  executeSellTower(tower);
}

function requestSellSelectedTower() {
  if (!canManageSelectedTower()) return;
  const tower = getTowerById(game.selectedTowerId);
  if (!tower) return;
  if (!needsSellConfirmation(tower)) {
    executeSellTower(tower);
    return;
  }
  pendingSellTowerId = tower.id;
  if (sellConfirmTextEl) sellConfirmTextEl.textContent = buildSellConfirmMessage(tower);
  sellConfirmOverlay?.classList.remove("hidden");
}

function sellSelectedTower() {
  requestSellSelectedTower();
}

function activateBoostSkill() {
  if (game.screen !== "playing") return;
  const skill = game.skills.boost;
  if (!canActivateSkill(skill)) return;
  skill.usesLeft -= 1;
  skill.timer = 0;
  skill.active = skill.duration + game.modifiers.boostDurationBonus;
  gainScore(60);
  showMessage(`Engrais Boost actif (${skill.usesLeft}/${skill.usesMax} restantes).`, "normal");
  sfx?.skill?.("boost");
  updateSkillsUI();
}

function activateSnareSkill() {
  if (game.screen !== "playing") return;
  const skill = game.skills.snare;
  if (!canActivateSkill(skill)) return;
  skill.usesLeft -= 1;
  skill.timer = 0;
  skill.active = skill.duration + game.modifiers.snareDurationBonus;
  gainScore(60);
  emitParticles(canvas.width * 0.5, canvas.height * 0.5, "#8fe275", 40);
  showMessage(`Racines Piege actives (${skill.usesLeft}/${skill.usesMax} restantes).`, "normal");
  sfx?.skill?.("snare");
  updateSkillsUI();
}

function togglePause() {
  if (game.screen === "playing") {
    setScreen("paused");
    pauseBtn.textContent = "Reprendre";
    showMessage("Jeu en pause.", "warn");
    sfx?.pause?.(true);
    return;
  }
  if (game.screen === "paused") {
    setScreen("playing");
    pauseBtn.textContent = "Pause";
    showMessage("Reprise du combat.", "normal");
    sfx?.pause?.(false);
  }
}

function loadAudioPreferences() {
  const enabledRaw = localStorage.getItem(AUDIO_ENABLED_KEY);
  const musicRaw = localStorage.getItem(MUSIC_VOLUME_KEY);
  const sfxRaw = localStorage.getItem(SFX_VOLUME_KEY);
  if (enabledRaw !== null) {
    audio.enabled = enabledRaw !== "0";
  }
  if (musicRaw !== null) {
    const v = Number(musicRaw);
    if (Number.isFinite(v)) audio.musicVolume = Math.max(0, Math.min(1, v));
  }
  if (sfxRaw !== null) {
    const v = Number(sfxRaw);
    if (Number.isFinite(v)) audio.sfxVolume = Math.max(0, Math.min(1, v));
  }
  if (audioBtn) audioBtn.textContent = audio.enabled ? "Son ON" : "Son OFF";
  toggleAudioSettingsPopover(false);
  if (musicVolumeInput) musicVolumeInput.value = String(Math.round(audio.musicVolume * 100));
  if (sfxVolumeInput) sfxVolumeInput.value = String(Math.round(audio.sfxVolume * 100));
  runMusic.setMusicVolume(audio.musicVolume);
}

function saveAudioPreferences() {
  localStorage.setItem(AUDIO_ENABLED_KEY, audio.enabled ? "1" : "0");
  localStorage.setItem(MUSIC_VOLUME_KEY, String(audio.musicVolume));
  localStorage.setItem(SFX_VOLUME_KEY, String(audio.sfxVolume));
}

function setMusicVolumeFromUi(percent) {
  audio.musicVolume = Math.max(0, Math.min(1, percent / 100));
  runMusic.setMusicVolume(audio.musicVolume);
  saveAudioPreferences();
}

function setSfxVolumeFromUi(percent) {
  audio.sfxVolume = Math.max(0, Math.min(1, percent / 100));
  saveAudioPreferences();
}

function toggleAudioSettingsPopover(forceOpen) {
  if (!audioSettingsPopover) return;
  const willOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : audioSettingsPopover.classList.contains("hidden");
  audioSettingsPopover.classList.toggle("hidden", !willOpen);
  audioSettingsBtn?.setAttribute("aria-expanded", willOpen ? "true" : "false");
}

function toggleAudio() {
  audio.enabled = !audio.enabled;
  audioBtn.textContent = audio.enabled ? "Son ON" : "Son OFF";
  saveAudioPreferences();
  if (audio.enabled) {
    ensureAudioContext();
    sfx?.uiToggle?.(true);
    if (game.screen === "title") {
      titleAnim.musicStarted = false;
      tryStartTitleMusic();
    } else {
      updateRunMusic();
    }
  } else {
    runMusic.stop();
    titleAnim.musicStarted = false;
    toggleAudioSettingsPopover(false);
  }
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

function updateFullscreenButton() {
  if (!fullscreenBtn) return;
  const active = isFullscreenActive();
  fullscreenBtn.textContent = active ? "↙" : "⛶";
  fullscreenBtn.classList.toggle("is-active", active);
  fullscreenBtn.setAttribute(
    "aria-label",
    active ? "Quitter le plein écran" : "Activer le plein écran"
  );
  fullscreenBtn.title = active ? "Quitter le plein écran" : "Plein écran";
}

async function toggleFullscreen() {
  if (!fullscreenBtn) return;
  if (!document.fullscreenEnabled && !document.fullscreenElement) {
    showMessage("Plein écran non disponible dans ce navigateur.", "warn");
    return;
  }

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      showMessage("Plein écran désactivé.", "normal");
    } else {
      await document.documentElement.requestFullscreen({ navigationUI: "hide" });
      showMessage("Plein écran activé.", "normal");
    }
  } catch {
    showMessage("Edge a refusé le plein écran. Essaie depuis la PWA installée.", "warn");
  } finally {
    updateFullscreenButton();
    requestAnimationFrame(() => updateViewport(game.screen));
  }
}

document.addEventListener("fullscreenchange", () => {
  updateFullscreenButton();
  requestAnimationFrame(() => updateViewport(game.screen));
});
updateFullscreenButton();

// Tente de démarrer la musique titre si elle ne l'est pas encore.
// Retourne true si la musique vient d'être lancée, false si elle tournait déjà.
function tryStartTitleMusic() {
  if (game.screen !== "title" || titleAnim.musicStarted || !audio.enabled) return false;
  ensureAudioContext();
  if (!audio.ctx) return false;
  titleAnim.musicStarted = true;
  runMusic.startTitle();
  return true;
}

function advancePastTitle() {
  leaveTitleScreen();
  runMusic.transitionToRun({
    biomeId: getBiomeForFloor(game.spire.floor)?.id || "greenhouse",
    spireNumber: game.spire.spireNumber || 1,
  });
}

const hudCollapse = initHudCollapse({
  collapseBtn: hudCollapseBtnEl,
});

const mobileShell = initMobileShell({
  runDrawer: runDrawerEl,
  runDrawerFab: runDrawerFabEl,
  runDrawerScrim: runDrawerScrimEl,
  runDrawerClose: runDrawerCloseEl,
  runDrawerTabs: document.querySelectorAll(".run-drawer-tab"),
  runTabPanels: document.querySelectorAll("[data-run-tab-panel]"),
  statsMoreBtn: statsMoreBtnEl,
  statsGrid: hudStatsEl,
});

initViewport({
  onChange: () => {
    updatePlacementUi();
    updateTowerPanel();
    hudCollapse?.refresh?.();
  },
});

initOrientationLock({
  overlayEl: document.getElementById("orientation-lock"),
});

bindUiEvents({
  game,
  towerTypes,
  towerButtons,
  elements: {
    startWaveBtn,
    speedBtn,
    pauseBtn,
    fullscreenBtn,
    audioBtn,
    audioSettingsBtn,
    audioSettingsPopover,
    musicVolumeInput,
    sfxVolumeInput,
    sellConfirmOkBtn,
    sellConfirmCancelBtn,
    skillBoostBtn,
    skillSnareBtn,
    skillUltimateBtn,
    mutationChoicesEl,
    crossroadsChoicesEl,
    waveSummaryContinueBtn,
    bossCardChoicesEl,
    nodeRetryAcceptBtn,
    nodeRetryDeclineBtn,
    upgradeBtn,
    sellBtn,
    overlayButton,
    overlayAscensionBtn,
    overlayLeaderboardBtn,
    collectorChoicesEl,
    towerDraftGridEl,
    towerDraftConfirmBtn,
    towerDraftCountEl,
    draftChoicesEl,
    mapChoicesEl,
    shopChoicesEl,
    shopSkipBtn,
    nodeResultContinueBtn,
    leaderboardBtn,
    leaderboardCloseBtn,
    canvas,
    playerNameInput,
    titlePlayBtn,
    eventChoicesEl,
  },
  actions: {
    ensureAudioContext,
    selectBuildTower,
    spawnWave,
    showMessage,
    playSound,
    sfx,
    togglePause,
    toggleFullscreen,
    toggleAudio,
    toggleAudioSettingsPopover,
    setMusicVolumeFromUi,
    setSfxVolumeFromUi,
    confirmSellSelectedTower,
    cancelSellSelectedTower: hideSellConfirmOverlay,
    activateBoostSkill,
    activateSnareSkill,
    activateCollectorUltimateSkill,
    openMutationOverlay,
    onMutationChosen,
    onEventChoiceChosen,
    onCrossroadsRewardChosen,
    continueAfterWaveSummary,
    onBossTempCardChosen,
    acceptNodeRetry,
    declineNodeRetry,
    isLaneReachable,
    saveSpeedPreference,
    upgradeSelectedTower,
    sellSelectedTower,
    requestSellSelectedTower,
    openCollectorSelection,
    returnToTitleScreen,
    continueCampaignAscension,
    openTowerDraftOverlay,
    hideTowerDraftOverlay,
    renderTowerShopButtons,
    startNewRun,
    applyCardById,
    onMapNodeChosen,
    buyShopOfferById,
    advanceAfterShop,
    advanceFromNodeResult,
    showLeaderboard,
    refreshLeaderboardLocal,
    hideLeaderboard,
    tryStartTitleMusic,
    advancePastTitle,
    onBoardClick,
    onBoardPointer,
    onBoardPointerMove,
    clearPlacementHover,
    cancelTowerPlacement,
    savePlayerName,
    resumeRunFromSave,
    persistRunSaveNow,
    renderTitleResumePanel,
  },
});

dailyBannerEl?.addEventListener("click", () => {
  showDailyChallengeDetails();
});

function replaceObjectContents(target, source) {
  for (const key of Object.keys(target)) delete target[key];
  Object.assign(target, source);
}

function wireGameModules() {
  initShared({
    game,
    MAX_FLOORS,
    pads,
    paths,
    SPIRE_LAYOUTS,
    MAP_LANE_CONFIG,
    MAP_NODE_POOL,
    TOOLTIPS_CONFIG,
    NODE_OBJECTIVE_LIBRARY,
    WAVE_MODIFIER_LIBRARY,
    ENCOUNTER_CONFIG,
    EVENT_LIBRARY,
    BIOMES,
    mapChoicesEl,
    mapFloorLabel,
    mapRouteHintEl,
    combatObjectiveBanner,
    showMessage,
    playSound,
    gainScore,
    setScreen,
    hideMapOverlay,
    showMapOverlay,
    hideShopOverlay,
    showShopOverlay,
    openCrossroadsReward,
    handleNonCombatNode,
    setEncounterForNode,
    resetEncounterState,
    renderTowerShopButtons,
    applyBiomeForCurrentFloor,
    getBiomeForFloor,
    getNodeTooltip,
    tryContextHint,
    touchRunProgress,
    getRunRng,
    pickNodeObjective,
    shouldRollObjective,
    pickWaveModifier,
    laneGuaranteesWaveModifier,
    getLaneAffinityHint,
    getMapLanePreview,
    generateSpireMap,
    pickRandomEvent,
    getEncounterMechanics,
    clearBossTempWave,
    onboarding,
    EVENT_GOLD,
  });
}

async function bootstrapGame() {
  try {
    const content = await loadGameContent(() => ({ game }));
    // Ne pas réassigner : bindUiEvents garde la référence initiale de towerTypes.
    replaceObjectContents(towerTypes, content.towerTypes);
    replaceObjectContents(enemyTypes, content.enemyTypes);
    CARD_LIBRARY = content.CARD_LIBRARY;
    RELIC_LIBRARY = content.RELIC_LIBRARY;
    BIOMES = content.BIOMES;
    COLLECTOR_LIBRARY = content.COLLECTOR_LIBRARY;
    ENCOUNTER_CONFIG = content.ENCOUNTER_CONFIG;
    ONBOARDING_CONFIG = content.ONBOARDING;
    TOOLTIPS_CONFIG = content.TOOLTIPS;
    MAP_NODE_POOL = content.MAP_NODE_POOL;
    MAP_LANE_CONFIG = content.MAP_LANE_CONFIG || {};
    MUTATION_LIBRARY = content.MUTATION_LIBRARY || [];
    WAVE_MODIFIER_LIBRARY = content.WAVE_MODIFIER_LIBRARY || [];
    NODE_OBJECTIVE_LIBRARY = content.NODE_OBJECTIVE_LIBRARY || [];
    BOSS_TEMP_CARD_LIBRARY = content.BOSS_TEMP_CARD_LIBRARY || [];
    DECK_SYNERGY_CONFIG = content.DECK_SYNERGY_CONFIG || { families: [] };
    DAILY_CHALLENGES = content.DAILY_CHALLENGES || [];
    EVENT_LIBRARY = content.EVENT_LIBRARY || [];
    META_CONFIG = content.META || {};
    BESTIARY_CONFIG = {
      ...DEFAULT_BESTIARY_CONFIG,
      ...(META_CONFIG.bestiary || {}),
    };
    applyDailyChallengeForRun();
    updateTitleVersionLabel();
    wireGameModules();
    loadAudioPreferences();
    loadSpeedPreference();
    onboarding = createOnboardingController({
      steps: content.ONBOARDING?.steps || [],
    });
    shared.onboarding = onboarding;
    contextHints = createContextHintsController({
      hints: content.ONBOARDING?.contextHints || [],
      isBlocked: () => {
        const el = document.getElementById("onboarding-overlay");
        return Boolean(el && !el.classList.contains("hidden"));
      },
    });
    const runTabBestiary = document.getElementById("run-tab-bestiary");
    runTabBestiary?.addEventListener("click", () => {
      tryContextHint("bestiary_first");
    });
    if (content.errors?.length) {
      console.warn("[content]", content.errors);
    }
  } catch (err) {
    console.error(err);
    showMessage("Impossible de charger le contenu du jeu. Regénère standalone.js puis relance index.html.", "warn");
    return;
  }

  initWeather();
  game.biome = BIOMES[0];
  initWorldArt();
  resetModifiers();
  renderDeckList();
  renderRelicList();
  renderTowerShopButtons();
  renderBestiaryList();
  setScreen("title");
  renderTitleResumePanel();
  updateViewport("title");
  updateHud();
  requestAnimationFrame(() => onboarding?.startIfNeeded("title"));
  requestAnimationFrame(gameLoop);
}

bootstrapGame();

if (typeof window !== "undefined") {
  window.__RDTD__ = {
    jumpToSpire,
    markCampaignVictory,
    hasCampaignVictory,
    resetOnboarding: () => onboarding?.resetForDev?.(),
    resetContextHints: () => contextHints?.resetForDev?.(),
  };
}
