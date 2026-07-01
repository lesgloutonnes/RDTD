import { CARD_EFFECT_IDS, RELIC_EFFECT_IDS } from "./effects.js";

const RARITIES = new Set(["Commune", "Rare", "Epique"]);
const NODE_TYPES = new Set(["combat", "elite", "event", "rest", "shop", "boss", "crossroads"]);

function isNum(v) {
  return typeof v === "number" && Number.isFinite(v);
}

function push(errors, path, msg) {
  errors.push(`${path}: ${msg}`);
}

export function validateGameContent(data) {
  const errors = [];
  if (!data || typeof data !== "object") {
    return ["content: racine invalide"];
  }

  const towerIds = new Set();
  for (const [id, tower] of Object.entries(data.towers || {})) {
    if (id !== tower.id) push(errors, `towers.${id}`, "id doit correspondre à la clé");
    towerIds.add(id);
    if (!tower.name) push(errors, `towers.${id}`, "name requis");
    if (!isNum(tower.cost) || tower.cost <= 0) push(errors, `towers.${id}`, "cost > 0");
    if (!isNum(tower.damage)) push(errors, `towers.${id}`, "damage requis");
  }

  for (const [id, enemy] of Object.entries(data.enemies || {})) {
    if (!isNum(enemy.hpMult) || enemy.hpMult <= 0) push(errors, `enemies.${id}`, "hpMult invalide");
  }

  const cardIds = new Set();
  for (const card of data.cards || []) {
    if (cardIds.has(card.id)) push(errors, `cards.${card.id}`, "id dupliqué");
    cardIds.add(card.id);
    if (!CARD_EFFECT_IDS.has(card.effectId)) push(errors, `cards.${card.id}`, `effectId inconnu: ${card.effectId}`);
    if (!RARITIES.has(card.rarity)) push(errors, `cards.${card.id}`, `rarity invalide`);
    if (card.towerCard && !towerIds.has(card.towerCard)) {
      push(errors, `cards.${card.id}`, `towerCard inconnu: ${card.towerCard}`);
    }
    if (card.stackable && card.maxStack != null && card.maxStack > 0) {
      if (!isNum(card.maxStack)) push(errors, `cards.${card.id}`, "maxStack invalide");
    }
  }

  const relicIds = new Set();
  for (const relic of data.relics || []) {
    if (relicIds.has(relic.id)) push(errors, `relics.${relic.id}`, "id dupliqué");
    relicIds.add(relic.id);
    if (!RELIC_EFFECT_IDS.has(relic.effectId)) push(errors, `relics.${relic.id}`, `effectId inconnu`);
  }

  for (const biome of data.biomes || []) {
    if (!biome.id) push(errors, "biomes", "id requis");
    if (!Array.isArray(biome.bg) || biome.bg.length !== 3) push(errors, `biomes.${biome.id}`, "bg[3] requis");
  }

  for (const c of data.collectors || []) {
    if (!c.id) push(errors, "collectors", "id requis");
    if (!c.ultimateId) push(errors, `collectors.${c.id}`, "ultimateId requis");
    if (!c.ultimateName) push(errors, `collectors.${c.id}`, "ultimateName requis");
    if (!c.ultimateDesc) push(errors, `collectors.${c.id}`, "ultimateDesc requis");
  }

  if (!data.encounters?.elite || !data.encounters?.boss) {
    push(errors, "encounters", "elite et boss requis");
  }

  for (const step of data.onboarding?.steps || []) {
    if (!step.id || !step.title) push(errors, "onboarding", "step id/title requis");
  }

  if (!Array.isArray(data.mapNodePool)) {
    push(errors, "mapNodePool", "liste requise");
  } else {
    data.mapNodePool.forEach((t, i) => {
      if (!NODE_TYPES.has(t)) push(errors, `mapNodePool[${i}]`, `type invalide: ${t}`);
    });
  }

  return errors;
}
