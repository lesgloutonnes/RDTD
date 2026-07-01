export function pickRandomEvent(events, rng = Math.random, options = {}) {
  if (!events?.length) return null;
  const { laneTag = null, uniqueBias = 0 } = options;
  let pool = events;
  if (laneTag) {
    const tagged = events.filter((e) => Array.isArray(e.laneTags) && e.laneTags.includes(laneTag));
    if (tagged.length && (uniqueBias <= 0 || rng() < uniqueBias)) {
      pool = tagged;
    }
  }
  return pool[Math.floor(rng() * pool.length)];
}

export function applyEventChoiceEffect(choice, helpers) {
  if (!choice) return { title: "Event", text: "Rien ne se passe." };
  const { game } = helpers;

  switch (choice.effect) {
    case "gold": {
      const amount = choice.amount ?? 50;
      game.gold += amount;
      if (choice.hurt) {
        game.lives = Math.max(1, game.lives - choice.hurt);
      }
      helpers.showMessage?.(`Event: +${amount} soleil.`, "normal");
      return {
        title: choice.label || "Event",
        text:
          choice.desc ||
          `+${amount} soleil.${choice.hurt ? ` Tu perds ${choice.hurt} vie(s).` : ""}`,
      };
    }
    case "heal_gold": {
      const gold = choice.gold ?? 35;
      const heal = choice.heal ?? 2;
      game.gold += gold;
      game.lives = Math.min(game.maxLives, game.lives + heal);
      helpers.showMessage?.(`Event: +${gold} soleil, +${heal} vies.`, "normal");
      return {
        title: choice.label || "Event",
        text: `+${gold} soleil et ${heal} vies recuperees.`,
      };
    }
    case "score": {
      const amount = choice.amount ?? 150;
      helpers.gainScore?.(amount);
      helpers.showMessage?.(`Event: +${amount} score.`, "normal");
      return { title: choice.label || "Event", text: choice.desc || `+${amount} score.` };
    }
    case "heal": {
      const amount = choice.amount ?? 4;
      game.lives = Math.min(game.maxLives, game.lives + amount);
      helpers.showMessage?.(`Event: +${amount} vies.`, "normal");
      return { title: choice.label || "Event", text: `Tu recuperes ${amount} vies.` };
    }
    case "random_card": {
      const card = helpers.pickRandomCardForReward?.();
      if (card) {
        helpers.grantCard?.(card);
        helpers.renderDeckList?.();
        return {
          title: choice.label || "Mutation spontanee",
          text: `Carte obtenue : "${card.name}".`,
        };
      }
      game.gold += choice.fallbackGold ?? 40;
      return { title: "Nectar de secours", text: "Aucune carte compatible — soleil de secours." };
    }
    case "random_relic": {
      helpers.grantRandomRelic?.();
      return { title: choice.label || "Relique", text: choice.desc || "Une relique rejoint ta run." };
    }
    default:
      return { title: "Event", text: choice.desc || "Effet inconnu." };
  }
}
