export function pickWaveModifier(modifiers, rng = Math.random) {
  if (!modifiers?.length) return null;
  return modifiers[Math.floor(rng() * modifiers.length)];
}

export function applyWaveModifierToEnemy(enemy, modifier, nodeType) {
  if (!modifier) return;
  if (modifier.spawnPoisonDps) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, modifier.spawnPoisonDps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, modifier.spawnPoisonTime || 3);
  }
  if (modifier.eliteOnly && modifier.eliteArmorMult) {
    if (nodeType === "elite" || enemy.typeKey === "boss") {
      enemy.damageReduction = Math.min(
        enemy.damageReduction ?? 1,
        modifier.eliteArmorMult
      );
    }
  }
}

export function scaleEncounterQueue(queue, modifier) {
  if (!modifier?.countMult || modifier.countMult === 1) return queue.slice();
  const target = Math.max(1, Math.round(queue.length * modifier.countMult));
  const out = queue.slice();
  while (out.length < target) {
    out.push(out[Math.floor(Math.random() * out.length)] || "beetle");
  }
  return out.slice(0, target);
}

export function getWaveModifierHpMult(modifier) {
  return modifier?.hpMult ?? 1;
}

export function applyWaveModifierToEncounter(encounter, modifier) {
  if (!modifier || !encounter) return;
  if (modifier.towerFireRateMult) {
    encounter.towerFireRateMult = (encounter.towerFireRateMult || 1) * modifier.towerFireRateMult;
  }
}
