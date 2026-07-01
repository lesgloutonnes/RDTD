import { applyTormentToLaneConfig, shouldForceTormentWaveModifier } from "../logic/ascension-mechanics.js";
import { formatRunModeLine } from "../logic/run-modes.js";
import { shared } from "./shared.js";
import { formatObjectivePreview } from "../logic/node-objectives.js";

export function getNodeLabel(type) {
  if (type === "combat") return "Combat";
  if (type === "elite") return "Elite";
  if (type === "event") return "Event";
  if (type === "rest") return "Repos";
  if (type === "shop") return "Boutique";
  if (type === "crossroads") return "Carrefour";
  return "Boss";
}

export function getNodeDescription(type) {
  if (type === "combat") return "Risque normal. Recompense: draft d'une carte apres victoire.";
  if (type === "elite") return "Combat plus dur. Recompense: carte + relique garantie.";
  if (type === "event") return "Pas de combat. Choisis ton option parmi deux issues.";
  if (type === "rest") return "Pas de combat. Soigne une partie de tes vies max.";
  if (type === "shop") return "Pas de combat. Depense ton soleil pour carte, relique ou soin.";
  if (type === "crossroads") return "Fusion des couloirs. Bonus : soleil ou carte garantie.";
  return "Combat final tres dur. Recompense: victoire si tu survis.";
}

export function isLaneReachable(lane) {
  const { game } = shared;
  if (game.spire.floor === 0) return true;
  if (game.spire.lanesMerged) return true;
  return Math.abs(lane - game.spire.lane) <= 1;
}

export function getLaneBlockReason(lane) {
  if (isLaneReachable(lane)) return null;
  if (shared.game.spire.lanesMerged) return null;
  return `Couloir trop éloigné — tu es en couloir ${shared.game.spire.lane + 1}`;
}

export function renderMapRouteHint() {
  const { game, mapRouteHintEl } = shared;
  if (!mapRouteHintEl) return;
  const trail = game.spire.pathTrail || [];
  const parts = trail.map((step) => `E${step.floor + 1}c${step.lane + 1}`);
  let text = `Position : couloir ${game.spire.lane + 1}`;
  if (parts.length) text += ` · Parcours : ${parts.join(" → ")}`;
  if (game.spire.lanesMerged) {
    text += " · Carrefour franchi : tous les couloirs ouverts";
    mapRouteHintEl.className = "map-route-hint map-route-hint--merged";
  } else {
    mapRouteHintEl.className = "map-route-hint";
  }
  mapRouteHintEl.textContent = text;
}

export function rollNodeObjectiveForType(type) {
  const { game, NODE_OBJECTIVE_LIBRARY, shouldRollObjective, pickNodeObjective, getRunRng } = shared;
  if (!shouldRollObjective(type)) return null;
  return pickNodeObjective(NODE_OBJECTIVE_LIBRARY, getRunRng(game));
}

function ensureFloorObjectivePreviews(floorNodes) {
  const { game } = shared;
  const key = `${game.spire.spireNumber}-${game.spire.floor}`;
  if (game.spire._objectivePreviewKey === key && game.spire.objectiveByLane?.length) return;
  game.spire._objectivePreviewKey = key;
  game.spire.objectiveByLane = floorNodes.map((type) => rollNodeObjectiveForType(type));
}

export function renderMapChoices() {
  const {
    game,
    MAX_FLOORS,
    MAP_LANE_CONFIG,
    TOOLTIPS_CONFIG,
    mapChoicesEl,
    mapFloorLabel,
    getBiomeForFloor,
    getLaneAffinityHint,
    getMapLanePreview,
    getNodeTooltip,
    laneGuaranteesWaveModifier,
  } = shared;
  const biome = getBiomeForFloor(game.spire.floor);
  const floorNodes = game.spire.map[game.spire.floor] || ["combat", "combat", "combat"];
  const isCrossroads = floorNodes[0] === "crossroads";
  const tormentLine = game.run?.mode === "ascension"
    ? ` · ${formatRunModeLine(game)}`
    : "";
  mapFloorLabel.textContent = `Spire ${game.spire.spireNumber}/${shared.game.run?.maxSpires ?? 5} · Etage ${game.spire.floor + 1}/${MAX_FLOORS} — ${biome.name}${tormentLine}`;
  renderMapRouteHint();
  if (!isCrossroads) ensureFloorObjectivePreviews(floorNodes);

  if (isCrossroads) {
    mapChoicesEl.className = "draft-choices map-choices--solo";
    mapChoicesEl.innerHTML = `
      <button class="draft-choice node-crossroads" data-node-type="crossroads" data-lane="1">
        <h3>Carrefour des lianes</h3>
        <p>Les trois couloirs se rejoignent</p>
        <span class="detail">${getNodeDescription("crossroads")}</span>
        <span class="tag">Accessible</span>
      </button>`;
    return;
  }

  mapChoicesEl.className = "draft-choices";
  mapChoicesEl.innerHTML = floorNodes
    .map((type, lane) => {
      const reachable = isLaneReachable(lane);
      const isCurrentLane = lane === game.spire.lane;
      const blockReason = getLaneBlockReason(lane);
      const previewSteps = getMapLanePreview(game.spire.map, game.spire.floor, lane, MAX_FLOORS);
      const previewTrail = previewSteps.length
        ? previewSteps
            .map((s) => {
              const label = getNodeLabel(s.type);
              const bossClass = s.type === "boss" ? " map-preview-boss" : "";
              return `<span class="${bossClass.trim()}">E${s.floor}: ${label}</span>`;
            })
            .join(" → ")
        : "";
      const affinity = getLaneAffinityHint(lane, MAP_LANE_CONFIG);
      const isCombat = type === "combat" || type === "elite" || type === "boss";
      const objectivePreview = isCombat && reachable
        ? formatObjectivePreview(game.spire.objectiveByLane?.[lane])
        : "";
      const laneModifierHint = isCombat && laneGuaranteesWaveModifier(lane, MAP_LANE_CONFIG)
        ? '<span class="map-lane-modifier-hint">Modificateur de vague garanti (couloir Chasse)</span>'
        : "";
      const laneClasses = [
        "draft-choice",
        `node-${type}`,
        reachable ? "" : "disabled map-lane-blocked",
        isCurrentLane ? "map-lane-current" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `
      <button class="${laneClasses}" data-node-type="${type}" data-lane="${lane}">
        <h3>${getNodeLabel(type)}</h3>
        <p>Couloir ${lane + 1}${isCurrentLane ? " · tu es ici" : ""}</p>
        <span class="lane-affinity">${affinity}</span>
        <span class="detail">${getNodeDescription(type)}${getNodeTooltip(type, TOOLTIPS_CONFIG) ? ` — ${getNodeTooltip(type, TOOLTIPS_CONFIG)}` : ""}</span>
        ${objectivePreview ? `<span class="map-objective-preview">${objectivePreview}</span>` : ""}
        ${laneModifierHint}
        ${previewTrail ? `<span class="map-preview-trail">Vision : ${previewTrail}</span>` : ""}
        ${blockReason ? `<span class="map-block-reason">${blockReason}</span>` : ""}
        <span class="tag">${reachable ? "Accessible" : "Bloqué"}</span>
      </button>
    `;
    })
    .join("");
}

export function updateCombatObjectiveBanner() {
  const { game, combatObjectiveBanner } = shared;
  if (!combatObjectiveBanner) return;
  if (!game.nodeObjective || game.screen !== "playing") {
    combatObjectiveBanner.classList.add("hidden");
    combatObjectiveBanner.textContent = "";
    return;
  }
  combatObjectiveBanner.classList.remove("hidden");
  combatObjectiveBanner.innerHTML =
    `<strong>Objectif</strong> · ${game.nodeObjective.name} — ${game.nodeObjective.desc || ""}`;
}

export function startEncounterFromNode(type, lane = shared.game.spire.lane) {
  const {
    game,
    setEncounterForNode,
    resetEncounterState,
    renderTowerShopButtons,
    applyBiomeForCurrentFloor,
    setScreen,
    hideMapOverlay,
    hideShopOverlay,
    showMessage,
    ENCOUNTER_CONFIG,
    onboarding,
    tryContextHint,
    pickWaveModifier,
    WAVE_MODIFIER_LIBRARY,
    laneGuaranteesWaveModifier,
    getRunRng,
  } = shared;
  const { getEncounterMechanics } = shared;

  game.spire.currentNodeType = type;
  game.bossCardPhaseDone = false;
  shared.clearBossTempWave?.(game);
  game.wavePaused = false;
  applyBiomeForCurrentFloor();
  setEncounterForNode(type);
  resetEncounterState();

  game.nodeObjective = game.spire.objectiveByLane?.[lane] ?? rollNodeObjectiveForType(type);
  game.pendingWaveModifier = null;
  if (
    shouldForceTormentWaveModifier(game, type)
    || laneGuaranteesWaveModifier(game.spire.lane, shared.MAP_LANE_CONFIG)
  ) {
    game.pendingWaveModifier = pickWaveModifier(WAVE_MODIFIER_LIBRARY, getRunRng(game));
  }

  renderTowerShopButtons();
  setScreen("playing");
  hideMapOverlay();
  hideShopOverlay();
  updateCombatObjectiveBanner();

  const label = getNodeLabel(type);
  const mechanics = getEncounterMechanics(ENCOUNTER_CONFIG, type, game.biome?.id);
  let intro = `${label} — ${game.biome.name} : prepare ta defense puis lance la vague.`;
  if (type === "elite" && mechanics?.title) {
    intro = `ELITE · ${mechanics.title} — ${mechanics.intro || intro}`;
  }
  if (type === "boss" && mechanics?.title) {
    intro = `BOSS · ${mechanics.title} — ${mechanics.intro || intro}`;
  }
  if (game.nodeObjective) {
    intro += ` Objectif : ${game.nodeObjective.name} (+${game.nodeObjective.rewardGold || 0} soleil si reussi).`;
  }
  if (game.pendingWaveModifier) {
    intro += ` Modificateur annonce : ${game.pendingWaveModifier.name}.`;
  }
  showMessage(intro, type === "elite" || type === "boss" ? "warn" : "normal");
  requestAnimationFrame(() => {
    onboarding?.startIfNeeded("playing");
    if (type === "elite") tryContextHint("elite_first");
    if (type === "boss") tryContextHint("boss_first");
  });
}

export function onMapNodeChosen(type, lane) {
  const { game, openCrossroadsReward, handleNonCombatNode, touchRunProgress } = shared;
  if (type !== "crossroads" && !isLaneReachable(lane)) return;
  game.spire.lane = lane;
  if (type !== "crossroads") {
    game.spire.lanesMerged = false;
    game.spire.pathTrail.push({ floor: game.spire.floor, lane, type });
    touchRunProgress(game);
  }
  if (type === "crossroads") {
    openCrossroadsReward();
    return;
  }
  if (type === "combat" || type === "elite" || type === "boss") {
    startEncounterFromNode(type, lane);
    return;
  }
  handleNonCombatNode(type);
}

export function buildSpireMap() {
  const { MAX_FLOORS, MAP_NODE_POOL, MAP_LANE_CONFIG, generateSpireMap, game, getRunRng } = shared;
  const eliteWeightMult = game.run?.mode === "ascension"
    ? (game.run.tormentMapEliteWeightMult ?? 1)
    : 1;
  const laneConfig = applyTormentToLaneConfig(MAP_LANE_CONFIG, eliteWeightMult);
  const { map } = generateSpireMap({
    maxFloors: MAX_FLOORS,
    mapNodePool: MAP_NODE_POOL,
    laneConfig,
    rng: getRunRng(game),
  });
  return map;
}
