export function drawRangeRing(ctx, x, y, range, {
  fill = null,
  stroke = null,
  lineWidth = 2,
  dashed = false,
  dashPattern = [7, 5],
} = {}) {
  ctx.save();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, range, 0, Math.PI * 2);
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    if (dashed) ctx.setLineDash(dashPattern);
    ctx.beginPath();
    ctx.arc(x, y, range, 0, Math.PI * 2);
    ctx.stroke();
    if (dashed) ctx.setLineDash([]);
  }
  ctx.restore();
}

export function drawPlacementRangePreview(ctx, {
  game,
  getTowerTypePreviewRange,
  isTouchLayout,
}) {
  if (game.screen !== "playing" || !game.selectedTowerType) return;
  const pad = game.placementHoverPad;
  if (!pad || pad.occupiedBy !== null) return;
  const range = getTowerTypePreviewRange(game.selectedTowerType);
  const touchUi = isTouchLayout();
  drawRangeRing(ctx, pad.x, pad.y, range, {
    fill: "rgba(255, 232, 122, 0.035)",
    stroke: "rgba(255, 232, 122, 0.34)",
    lineWidth: touchUi ? 1.8 : 1.4,
    dashed: true,
    dashPattern: [6, 7],
  });
}

export function drawTowerSelectionRange(ctx, tower, {
  game,
  getTowerRange,
  getTowerUpgradePreviewRange,
}) {
  const canShowRange = tower.id === game.selectedTowerId
    && (game.screen === "playing" || game.screen === "paused");
  if (!canShowRange) return;

  const currentRange = getTowerRange(tower);
  drawRangeRing(ctx, tower.x, tower.y, currentRange, {
    fill: "rgba(226, 249, 167, 0.03)",
    stroke: "rgba(226, 249, 167, 0.3)",
    lineWidth: 1.4,
  });

  const upgradeRange = getTowerUpgradePreviewRange(tower);
  if (upgradeRange && upgradeRange > currentRange + 0.5) {
    drawRangeRing(ctx, tower.x, tower.y, upgradeRange, {
      stroke: "rgba(140, 210, 255, 0.36)",
      lineWidth: 1.4,
      dashed: true,
      dashPattern: [5, 6],
    });
  }
}
