import { getAscensionTorment } from "../config/ascension.js";
import { RUN_MODE_ASCENSION } from "./run-modes.js";

export const RUN_SAVE_KEY = "gloutonnes_run_save_v2";
export const RUN_SAVE_VERSION = 2;

const PERSIST_SCREENS = new Set([
  "map",
  "playing",
  "paused",
  "draft",
  "shop",
  "event",
  "nodeResult",
  "crossroads",
  "victory",
  "towerDraft",
  "mutation",
]);

export function shouldPersistRunScreen(screen) {
  return PERSIST_SCREENS.has(screen);
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function findPadIndex(pads, pad) {
  if (!pad) return -1;
  return pads.findIndex((p) => p.x === pad.x && p.y === pad.y);
}

function serializeTower(tower, pads) {
  return {
    typeKey: tower.typeKey,
    padIndex: findPadIndex(pads, tower.padRef),
    level: tower.level,
    investedGold: tower.investedGold,
    rageStacks: tower.rageStacks || 0,
    damage: tower.damage,
    range: tower.range,
    fireRate: tower.fireRate,
    projectileSpeed: tower.projectileSpeed,
    cooldown: tower.cooldown ?? 0.15,
  };
}

function serializeEnemy(enemy) {
  const copy = { ...enemy };
  delete copy.padRef;
  return copy;
}

/**
 * @param {object} game
 * @param {{ pads: object[], ui?: object }} ctx
 */
export function serializeRunState(game, ctx = {}) {
  const pads = ctx.pads || [];
  const rng = game.run?._rng;

  return {
    version: RUN_SAVE_VERSION,
    savedAt: Date.now(),
    screen: game.screen,
    ui: cloneJson(ctx.ui || {}),
    lives: game.lives,
    maxLives: game.maxLives,
    gold: game.gold,
    score: game.score,
    speedMultiplier: game.speedMultiplier,
    waveActive: game.waveActive,
    waveCount: game.waveCount,
    wavePaused: game.wavePaused,
    spawnTimer: game.spawnTimer,
    spawnQueue: [...(game.spawnQueue || [])],
    enemyIdInc: game.enemyIdInc,
    spawnPathInc: game.spawnPathInc,
    towerIdInc: game.towerIdInc,
    selectedTowerType: game.selectedTowerType,
    selectedTowerId: game.selectedTowerId,
    spire: cloneJson(game.spire),
    run: {
      ...cloneJson(game.run),
      _rng: undefined,
      _rngState: typeof rng?.getState === "function" ? rng.getState() : null,
    },
    deck: { picked: [...(game.deck?.picked || [])] },
    relics: { picked: [...(game.relics?.picked || [])] },
    towerDeck: [...(game.towerDeck || [])],
    collector: cloneJson(game.collector),
    modifiers: cloneJson(game.modifiers),
    deckSynergy: cloneJson(game.deckSynergy),
    encounter: cloneJson(game.encounter),
    skills: cloneJson(game.skills),
    collectorUltimate: cloneJson(game.collectorUltimate),
    bossCardPhaseDone: game.bossCardPhaseDone,
    bossTempWave: game.bossTempWave ? cloneJson(game.bossTempWave) : null,
    waveModifier: game.waveModifier ? cloneJson(game.waveModifier) : null,
    pendingWaveModifier: game.pendingWaveModifier ? cloneJson(game.pendingWaveModifier) : null,
    nodeObjective: game.nodeObjective ? cloneJson(game.nodeObjective) : null,
    waveStats: game.waveStats ? cloneJson(game.waveStats) : null,
    runStats: game.runStats ? cloneJson(game.runStats) : null,
    dailyId: game.daily?.id ?? null,
    draftCardIds: (game.draft?.activeChoices || []).map((c) => c.id),
    shopOffers: cloneJson(game.shop?.offers || []),
    pendingEventId: game.pendingEvent?.id ?? null,
    towers: game.towers.map((t) => serializeTower(t, pads)),
    enemies: game.enemies.map((e) => serializeEnemy(e)),
    biomeId: game.biome?.id ?? null,
    persistedEndRun: game._persistedEndRunScreen
      ? cloneJson(game._persistedEndRunScreen)
      : null,
    persistedNodeResult: game._persistedNodeResult
      ? cloneJson(game._persistedNodeResult)
      : null,
  };
}

export function saveRunState(payload) {
  if (typeof localStorage === "undefined") return false;
  try {
    localStorage.setItem(RUN_SAVE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

export function loadRunState() {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(RUN_SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || data.version !== RUN_SAVE_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

export function clearRunSave() {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(RUN_SAVE_KEY);
  } catch {
    /* ignore */
  }
}

export function hasRunSave() {
  return Boolean(loadRunState());
}

export function formatRunSaveSummary(data = loadRunState()) {
  if (!data) return "";
  const cards = data.deck?.picked?.length ?? 0;
  const spire = data.spire?.spireNumber ?? 1;
  const floor = (data.spire?.floor ?? 0) + 1;
  let mode = "Campagne";
  if (data.run?.mode === RUN_MODE_ASCENSION) {
    mode = getAscensionTorment(data.run.ascensionLevel || 1).name;
  }
  return `${mode} · Spire ${spire} · Étage ${floor} · ${cards} cartes · ${Number(data.score || 0).toLocaleString()} pts`;
}
