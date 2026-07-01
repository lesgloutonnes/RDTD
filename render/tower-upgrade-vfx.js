function easeOut(t) {
  return 1 - (1 - t) ** 2;
}

function burstAlpha(fx) {
  const p = fx.t / fx.duration;
  if (p >= 1) return 0;
  return (1 - p) * (0.4 + Math.sin(p * Math.PI) * 0.5);
}

/** Halo persistant selon le niveau de la plante (couches back / front). */
export function drawTowerLevelAura(ctx, tower, animT, layer, bodyR) {
  if (tower.level < 2) return;
  const pulse = 0.5 + 0.5 * Math.sin(animT * 2.4 + tower.id * 0.7);

  if (layer === "back") {
    ctx.save();
    if (tower.level === 2) {
      const r = bodyR + 5 + pulse * 2;
      ctx.globalAlpha = 0.22 + pulse * 0.14;
      const g = ctx.createRadialGradient(tower.x, tower.y, r * 0.35, tower.x, tower.y, r + 10);
      g.addColorStop(0, "rgba(140, 255, 170, 0.45)");
      g.addColorStop(0.6, "rgba(80, 200, 120, 0.18)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, r + 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(170, 255, 200, ${0.35 + pulse * 0.25})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, r, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      const rInner = bodyR + 4 + pulse * 1.5;
      const rOuter = bodyR + 11 + pulse * 3;
      ctx.globalAlpha = 0.28 + pulse * 0.18;
      const g = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, rOuter + 14);
      g.addColorStop(0, "rgba(255, 230, 140, 0.5)");
      g.addColorStop(0.45, "rgba(200, 140, 255, 0.22)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rOuter + 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(255, 220, 120, ${0.45 + pulse * 0.3})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rOuter, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 0.35 + pulse * 0.2;
      ctx.strokeStyle = `rgba(140, 255, 180, ${0.4 + pulse * 0.25})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rInner, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (layer !== "front") return;

  ctx.save();
  const orbitR = bodyR + 9;
  const orbitCount = tower.level === 2 ? 1 : 3;
  const colors = tower.level === 2
    ? ["#b8ffcc"]
    : ["#ffe87a", "#c8a0ff", "#8fe275"];

  for (let i = 0; i < orbitCount; i += 1) {
    const angle = animT * (tower.level === 2 ? 1.6 : 2.1) + (i / orbitCount) * Math.PI * 2;
    const ox = tower.x + Math.cos(angle) * orbitR;
    const oy = tower.y - 6 + Math.sin(angle) * (orbitR * 0.55);
    const sparkR = tower.level === 2 ? 2.2 : 2.6;
    ctx.globalAlpha = 0.65 + pulse * 0.3;
    const sg = ctx.createRadialGradient(ox, oy, 0, ox, oy, sparkR * 2.5);
    sg.addColorStop(0, colors[i % colors.length]);
    sg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(ox, oy, sparkR * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = sg;
    ctx.fill();
  }

  if (tower.level >= 3) {
    ctx.globalAlpha = 0.75 + pulse * 0.2;
    ctx.font = "bold 7px monospace";
    ctx.fillStyle = "#ffe87a";
    ctx.textAlign = "center";
    ctx.fillText("★", tower.x, tower.y - bodyR - 10);
  }

  ctx.restore();
}

/** Gerbe locale lors d'une amelioration (niv. 2 ou 3). */
export function triggerTowerUpgradeVfx(game, tower, newLevel, emitParticles) {
  if (!game.towerUpgradeVfxList) game.towerUpgradeVfxList = [];

  if (newLevel === 2) {
    emitParticles?.(tower.x, tower.y - 6, "#8fe275", 24);
    emitParticles?.(tower.x, tower.y, "#c3f5ff", 12);
    game.towerUpgradeVfxList.push({
      kind: "lv2",
      t: 0,
      duration: 0.9,
      x: tower.x,
      y: tower.y,
      towerId: tower.id,
    });
    return;
  }

  if (newLevel === 3) {
    emitParticles?.(tower.x, tower.y - 10, "#ffe87a", 36);
    emitParticles?.(tower.x, tower.y, "#ffb84a", 22);
    emitParticles?.(tower.x, tower.y - 4, "#d4b0ff", 14);
    game.towerUpgradeVfxList.push({
      kind: "lv3",
      t: 0,
      duration: 1.15,
      x: tower.x,
      y: tower.y,
      towerId: tower.id,
    });
  }
}

export function updateTowerUpgradeVfx(game, dt) {
  if (!game.towerUpgradeVfxList?.length) return;
  for (const fx of game.towerUpgradeVfxList) fx.t += dt;
  game.towerUpgradeVfxList = game.towerUpgradeVfxList.filter((fx) => fx.t < fx.duration);
}

function drawLv2Burst(ctx, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;

  const maxR = 18 + p * 42;
  const g = ctx.createRadialGradient(fx.x, fx.y - 8, 0, fx.x, fx.y - 8, maxR);
  g.addColorStop(0, `rgba(180, 255, 200, ${alpha * 0.7})`);
  g.addColorStop(0.5, `rgba(100, 220, 140, ${alpha * 0.25})`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 8, maxR, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.globalAlpha = alpha * 0.55;
  ctx.strokeStyle = "#d4ffe0";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 4, 10 + p * 28, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha * 0.7;
  ctx.strokeStyle = "#a8ffcc";
  ctx.lineWidth = 1.5;
  const rays = 6;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 2.5;
    const r0 = 6 + p * 8;
    const r1 = maxR * 0.75;
    ctx.beginPath();
    ctx.moveTo(fx.x + Math.cos(a) * r0, fx.y - 10 + Math.sin(a) * r0);
    ctx.lineTo(fx.x + Math.cos(a) * r1, fx.y - 10 + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawLv3Burst(ctx, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;
  const pulse = 0.5 + Math.sin(fx.t * 10) * 0.5;

  const maxR = 22 + p * 52;
  const g = ctx.createRadialGradient(fx.x, fx.y - 12, 0, fx.x, fx.y - 12, maxR);
  g.addColorStop(0, `rgba(255, 248, 180, ${alpha * 0.85})`);
  g.addColorStop(0.35, `rgba(255, 200, 80, ${alpha * 0.4})`);
  g.addColorStop(0.7, `rgba(180, 120, 255, ${alpha * 0.15})`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 12, maxR, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.globalAlpha = alpha * (0.5 + pulse * 0.35);
  ctx.strokeStyle = "#fff6c8";
  ctx.lineWidth = 2.2;
  for (let ring = 0; ring < 3; ring += 1) {
    const rr = (14 + ring * 10) * (0.7 + p * 0.55) * (0.9 + pulse * 0.1);
    ctx.beginPath();
    ctx.arc(fx.x, fx.y - 8, rr, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha * 0.75;
  ctx.strokeStyle = "#ffe87a";
  ctx.lineWidth = 1.8;
  const rays = 8;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 1.4;
    const r0 = 8 + p * 12;
    const r1 = maxR * 0.9;
    ctx.beginPath();
    ctx.moveTo(fx.x + Math.cos(a) * r0, fx.y - 14 + Math.sin(a) * r0);
    ctx.lineTo(fx.x + Math.cos(a) * r1, fx.y - 14 + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawTowerUpgradeVfx(ctx, game) {
  if (!game.towerUpgradeVfxList?.length) return;
  ctx.save();
  for (const fx of game.towerUpgradeVfxList) {
    if (fx.kind === "lv2") drawLv2Burst(ctx, fx);
    else if (fx.kind === "lv3") drawLv3Burst(ctx, fx);
  }
  ctx.restore();
}
