import { SKILL_USES_PER_WAVE } from "../config/balance.js";

/** Charges par vague (cartes / collectionneur peuvent ajouter des utilisations). */
export function getSkillUsesPerWave(game) {
  const base = SKILL_USES_PER_WAVE;
  const bonus = game.modifiers.skillExtraUsesPerWave || 0;
  return Math.min(3, base + bonus);
}

export function resetSkillsForNewWave(game) {
  const max = getSkillUsesPerWave(game);
  for (const key of ["boost", "snare"]) {
    const skill = game.skills[key];
    if (!skill) continue;
    skill.timer = 0;
    skill.active = 0;
    skill.usesMax = max;
    skill.usesLeft = max;
  }
}

export function tickSkillTimers(game, dt) {
  for (const key of ["boost", "snare"]) {
    const skill = game.skills[key];
    if (!skill) continue;
    skill.timer = Math.max(0, skill.timer - dt);
    skill.active = Math.max(0, skill.active - dt);
  }
}

export function canActivateSkill(skill) {
  if (!skill) return false;
  if (skill.active > 0) return false;
  return (skill.usesLeft ?? 0) > 0;
}

export function formatSkillChargeLabel(skill) {
  const max = skill.usesMax ?? SKILL_USES_PER_WAVE;
  const left = skill.usesLeft ?? 0;
  return `${left}/${max} cette vague`;
}
