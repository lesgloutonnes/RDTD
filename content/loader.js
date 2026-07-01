import { hydrateCards, hydrateRelics } from "./effects.js";
import { validateGameContent } from "./validator.js";

function rawContentFromParts(version, parts) {
  return {
    version,
    towers: parts["towers.json"],
    enemies: parts["enemies.json"],
    cards: parts["cards.json"],
    relics: parts["relics.json"],
    biomes: parts["biomes.json"],
    collectors: parts["collectors.json"],
    encounters: parts["encounters.json"],
    onboarding: parts["onboarding.json"],
    tooltips: parts["tooltips.json"],
    mapNodePool: parts["map.json"].pool,
    mapLanes: parts["map-lanes.json"],
    mutations: parts["mutations.json"],
    waveModifiers: parts["wave-modifiers.json"],
    nodeObjectives: parts["node-objectives.json"],
    bossTempCards: parts["boss-temp-cards.json"],
    deckSynergies: parts["deck-synergies.json"],
    dailyChallenges: parts["daily-challenge.json"],
    events: parts["events.json"],
    meta: parts["meta.json"],
  };
}

export async function fetchRawContent() {
  const embedded = globalThis.__RDTD_STANDALONE_CONTENT__;
  if (embedded?.files) {
    return rawContentFromParts(embedded.version, embedded.files);
  }

  throw new Error("Contenu standalone manquant. Regénère standalone.js.");
}

export function buildGameContent(raw, getContext) {
  const errors = validateGameContent(raw);
  if (errors.length > 0) {
    console.warn("[content] validation:", errors);
  }

  const towerTypes = {};
  for (const [key, tower] of Object.entries(raw.towers)) {
    towerTypes[key] = { ...tower };
  }

  return {
    version: raw.version,
    errors,
    towerTypes,
    enemyTypes: raw.enemies,
    CARD_LIBRARY: hydrateCards(raw.cards, getContext),
    RELIC_LIBRARY: hydrateRelics(raw.relics, getContext),
    BIOMES: raw.biomes,
    COLLECTOR_LIBRARY: raw.collectors,
    ENCOUNTER_CONFIG: raw.encounters,
    ONBOARDING: raw.onboarding,
    TOOLTIPS: raw.tooltips,
    MAP_NODE_POOL: raw.mapNodePool,
    MAP_LANE_CONFIG: raw.mapLanes,
    MUTATION_LIBRARY: raw.mutations,
    WAVE_MODIFIER_LIBRARY: raw.waveModifiers,
    NODE_OBJECTIVE_LIBRARY: raw.nodeObjectives,
    BOSS_TEMP_CARD_LIBRARY: raw.bossTempCards,
    DECK_SYNERGY_CONFIG: raw.deckSynergies,
    DAILY_CHALLENGES: raw.dailyChallenges,
    EVENT_LIBRARY: raw.events || [],
    META: raw.meta,
  };
}

export async function loadGameContent(getContext) {
  const raw = await fetchRawContent();
  return buildGameContent(raw, getContext);
}
