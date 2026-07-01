export function pickNodeObjective(objectives, rng = Math.random) {
  if (!objectives?.length) return null;
  return objectives[Math.floor(rng() * objectives.length)];
}

export function shouldRollObjective(nodeType) {
  return nodeType === "combat" || nodeType === "elite" || nodeType === "boss";
}

/** Aperçu carte / intro — objectif typique sans figer le tirage final. */
export function formatObjectivePreview(objective) {
  if (!objective) return "";
  const reward = objective.rewardGold ? ` (+${objective.rewardGold} ☀)` : "";
  return `Objectif possible : ${objective.name}${reward}`;
}

/**
 * @returns {{ success: boolean, messages: string[] }}
 */
export function evaluateNodeObjective(objective, waveStats) {
  if (!objective) return { success: false, messages: [] };
  const messages = [];

  if (objective.id === "no_leak") {
    const ok = (waveStats.leaks || 0) === 0;
    if (ok) messages.push(`Objectif reussi : ${objective.name} (+${objective.rewardGold} soleil)`);
    else messages.push(`Objectif manque : ${objective.name}`);
    return { success: ok, messages };
  }

  if (objective.id === "fast_clear") {
    const limit = objective.timeLimitSec ?? 45;
    const ok = (waveStats.durationSec || 999) < limit;
    if (ok) {
      messages.push(`Objectif reussi : ${objective.name} (< ${limit}s)`);
    } else {
      messages.push(`Objectif manque : ${objective.name} (${waveStats.durationSec?.toFixed(1)}s)`);
    }
    return { success: ok, messages };
  }

  if (objective.id === "max_one_leak" || objective.maxLeaks != null) {
    const max = objective.maxLeaks ?? 1;
    const ok = (waveStats.leaks || 0) <= max;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${waveStats.leaks || 0} fuite(s))`
      : `Objectif manque : ${objective.name} (${waveStats.leaks || 0} fuites)`);
    return { success: ok, messages };
  }

  if (objective.minKills != null) {
    const ok = (waveStats.kills || 0) >= objective.minKills;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${waveStats.kills} kills)`
      : `Objectif manque : ${objective.name} (${waveStats.kills || 0}/${objective.minKills} kills)`);
    return { success: ok, messages };
  }

  if (objective.familyId && objective.damageShare != null) {
    const byFamily = waveStats.damageByFamily || {};
    const total = Object.values(byFamily).reduce((s, v) => s + v, 0);
    const share = total > 0 ? (byFamily[objective.familyId] || 0) / total : 0;
    const ok = share >= objective.damageShare;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${Math.round(share * 100)}%)`
      : `Objectif manque : ${objective.name} (${Math.round(share * 100)}% / ${Math.round(objective.damageShare * 100)}%)`);
    return { success: ok, messages };
  }

  if (objective.minGoldEarned != null) {
    const earned = Math.max(0, waveStats.goldEarned || 0);
    const ok = earned >= objective.minGoldEarned;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (+${earned} soleil)`
      : `Objectif manque : ${objective.name} (+${earned} soleil)`);
    return { success: ok, messages };
  }

  return { success: false, messages };
}

export function grantObjectiveRewards(game, objective, success, helpers) {
  if (!success || !objective) return;
  if (objective.rewardGold) {
    game.gold += objective.rewardGold;
  }
  if (objective.rewardCard && helpers.grantRandomCard) {
    const card = helpers.grantRandomCard();
    if (card) {
      helpers.showMessage?.(`Bonus objectif : carte "${card.name}".`, "normal");
    }
  }
}
