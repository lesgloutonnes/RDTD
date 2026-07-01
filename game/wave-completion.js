import { SPIRE_SURPLUS_GOLD_SCORE_RATE } from "../config/balance.js";
import { formatSpireThreatLine, MAX_SPIRES } from "../config/campaign.js";
import { getWaveClearGold } from "../logic/economy.js";
import {
  evaluateNodeObjective,
  grantObjectiveRewards,
} from "../logic/node-objectives.js";
import { getEffectiveMaxSpires } from "../logic/run-modes.js";
import { recordRunWaveCleared, touchRunProgress } from "../logic/run-stats.js";
import { finalizeWaveStats } from "../logic/wave-report.js";
import {
  clearBossTempWave,
  consumeBossTempGoldBonus,
} from "../logic/boss-temp-cards.js";
import { MAX_FLOORS } from "./state.js";

export function finishWaveIfReady(game, {
  gainScore,
  getLayoutRoutes,
  getStartingGoldForSpire,
  grantRandomCardSilently,
  grantRandomRelic,
  hideMapOverlay,
  openVictory,
  setScreen,
  setStartWaveLabel,
  showMessage,
  showNodeResult,
  showWaveSummaryOverlay,
  sfx,
  spireLayouts,
  startDraftPhase,
  tryContextHint,
}) {
  if (!game.waveActive) return false;
  if (game.spawnQueue.length > 0 || game.enemies.length > 0) return false;

  game.waveActive = false;
  recordRunWaveCleared(game);
  touchRunProgress(game);

  const nodeType = game.spire.currentNodeType || "combat";
  const bonus = nodeType === "boss" ? 420 : nodeType === "elite" ? 240 : 140;
  gainScore(bonus + game.spire.floor * 18);

  const waveGold = Math.round(getWaveClearGold(nodeType) * (game.run.dailyWaveClearMult || 1));
  game.gold += waveGold;

  const stats = finalizeWaveStats(game);
  const leaks = stats?.leaks ?? 0;
  const hadLeaks = leaks > 0;
  consumeBossTempGoldBonus(game, { skipHeal: hadLeaks });
  clearBossTempWave(game);

  if (nodeType === "elite" || nodeType === "boss") {
    grantRandomRelic({ skipInstantHeal: hadLeaks });
  }

  setStartWaveLabel("Lancer la vague");
  sfx?.waveClear();

  if (game.modifiers.waveClearHeal) {
    if (!hadLeaks) {
      game.lives = Math.min(game.maxLives, game.lives + game.modifiers.waveClearHeal);
    } else {
      showMessage(
        `Vague terminée avec ${leaks} fuite${leaks > 1 ? "s" : ""} — pas de soin de fin de vague (+${game.modifiers.waveClearHeal}).`,
        "warn",
      );
    }
  }

  const objectiveResult = evaluateNodeObjective(game.nodeObjective, stats);
  if (objectiveResult.success) sfx?.objective();
  grantObjectiveRewards(game, game.nodeObjective, objectiveResult.success, {
    grantRandomCard: () => grantRandomCardSilently(),
    showMessage,
  });
  game.nodeObjective = null;

  showWaveSummaryOverlay(stats, objectiveResult.messages, () => {
    if (nodeType === "boss" && game.spire.floor >= MAX_FLOORS - 1) {
      const maxSpires = getEffectiveMaxSpires(game);
      if (game.spire.spireNumber >= maxSpires) {
        openVictory();
      } else {
        game.spire.pendingSpireTransition = true;
        const nextSpire = game.spire.spireNumber + 1;
        const nextLayout = spireLayouts[Math.min(nextSpire - 1, spireLayouts.length - 1)];
        const nextGold = getStartingGoldForSpire(nextSpire);
        const nextRoutes = getLayoutRoutes(nextLayout).length;
        setScreen("nodeResult");
        hideMapOverlay();
        showNodeResult(
          `⚔ Spire ${game.spire.spireNumber}/${MAX_SPIRES} Terminée !`,
          `Tu as survécu à "${spireLayouts[game.spire.spireNumber - 1].name}".\n` +
          `Deck et reliques conserves.\n\n` +
          `Prochaine Spire : "${nextLayout.name}" — ${nextRoutes} voie(s).\n` +
          `Budget reinitialise : ${nextGold} soleil (x${nextRoutes} voies).\n` +
          `Le soleil au-dela de ce budget sera converti en score (x${SPIRE_SURPLUS_GOLD_SCORE_RATE} par soleil).\n` +
          `⚠ ${formatSpireThreatLine(nextSpire)}`,
        );
        tryContextHint("spire_transition_first");
      }
      return;
    }
    game.spire.pendingAdvanceAfterDraft = true;
    startDraftPhase();
  });

  return true;
}
