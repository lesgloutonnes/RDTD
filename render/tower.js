import { FUREUR_DEFAULT_MAX_STACKS } from "../config/balance.js";

const TOWER_SPRITE_DRAW_PX = {
  snapper: 58,
  dionaea_b52: 70,
  dionaea_akai_ryu: 62,
  dionaea_white_tiger: 60,
  spitter: 56,
  sarracenia_atlas5: 68,
  sarracenia_scarlet_belle: 56,
  sarracenia_fureur: 56,
  thorn: 60,
  drosera_creamsicle: 60,
  drosera_regia: 70,
  drosera_scorpioides: 64,
};

function drawTowerPassiveAura(ctx, tower, {
  animT,
  game,
  getCreamsicleAuraRange,
  towerTypes,
}) {
  ctx.save();

  if (tower.typeKey === "drosera_creamsicle") {
    const pulse = 0.18 + 0.08 * Math.sin(animT * 1.8);
    const auraRange = getCreamsicleAuraRange(game, tower, towerTypes);
    ctx.globalAlpha = pulse;
    const g = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, auraRange);
    g.addColorStop(0, "rgba(255,190,100,0.22)");
    g.addColorStop(1, "rgba(255,190,100,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, auraRange, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }

  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    const maxStacks = game.modifiers.fureurMaxStacks || FUREUR_DEFAULT_MAX_STACKS;
    const intensity = tower.rageStacks / maxStacks;
    ctx.globalAlpha = intensity * 0.7;
    const gr = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, 22);
    gr.addColorStop(0, `rgba(255,180,0,${intensity * 0.6})`);
    gr.addColorStop(1, "rgba(255,80,0,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, 22, 0, Math.PI * 2);
    ctx.fillStyle = gr;
    ctx.fill();
  }

  if (tower.typeKey === "drosera_scorpioides") {
    const pulse = 0.12 + 0.08 * Math.sin(animT * 2.2 + tower.id);
    ctx.globalAlpha = pulse;
    const gs = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, 20);
    gs.addColorStop(0, "rgba(100,255,60,0.35)");
    gs.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = gs;
    ctx.fill();
  }

  ctx.restore();
}

export function drawTowerSprite(ctx, tower, {
  animT,
  drawTowerLevelAura,
  drawTowerSelectionRange,
  game,
  getCreamsicleAuraRange,
  getTowerRange,
  getTowerUpgradePreviewRange,
  sprites,
  towerTypes,
}) {
  const sprite = sprites.towers[tower.typeKey];
  const spritePx = TOWER_SPRITE_DRAW_PX[tower.typeKey] ?? 50;
  const bodyR = spritePx > 50 ? 21 : 17;

  ctx.fillStyle = "rgba(10, 18, 8, 0.32)";
  ctx.beginPath();
  ctx.ellipse(tower.x, tower.y + 18, spritePx * 0.4, 7 + (spritePx - 50) * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  drawTowerPassiveAura(ctx, tower, {
    animT,
    game,
    getCreamsicleAuraRange,
    towerTypes,
  });
  drawTowerLevelAura(ctx, tower, animT, "back", bodyR);

  if (towerTypes[tower.typeKey]?.rarity) {
    const rarity = towerTypes[tower.typeKey].rarity;
    ctx.save();
    ctx.shadowColor = tower.color;
    ctx.shadowBlur = rarity === "Epique" ? 14 : rarity === "Rare" ? 10 : 6;
    ctx.globalAlpha = 0.7;
    ctx.strokeStyle = tower.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, bodyR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (sprite && sprite.complete && sprite.naturalWidth > 0) {
    const drawY = tower.y - spritePx * 0.58;
    ctx.drawImage(sprite, tower.x - spritePx / 2, drawY, spritePx, spritePx);
  } else {
    ctx.fillStyle = tower.color;
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, bodyR * 0.82, 0, Math.PI * 2);
    ctx.fill();
  }

  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    ctx.save();
    ctx.globalAlpha = 0.85;
    ctx.font = "bold 8px monospace";
    ctx.fillStyle = "#ffcc44";
    ctx.textAlign = "center";
    ctx.fillText(`×${tower.rageStacks}`, tower.x, tower.y - 22);
    ctx.restore();
  }

  drawTowerLevelAura(ctx, tower, animT, "front", bodyR);

  drawTowerSelectionRange(ctx, tower, {
    game,
    getTowerRange,
    getTowerUpgradePreviewRange,
  });
}
