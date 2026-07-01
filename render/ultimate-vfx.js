import { GARDIEN_ULTIMATE_MAP_SNARE } from "../config/balance.js";

function easeOut(t) {
  return 1 - (1 - t) ** 2;
}

function burstAlpha(fx) {
  const p = fx.t / fx.duration;
  if (p >= 1) return 0;
  return (1 - p) * (0.35 + Math.sin(p * Math.PI) * 0.45);
}

/** Lance l'effet carte + gerbe de particules. */
export function triggerUltimateVfx(game, ultimateId, canvas, emitParticles) {
  if (!game.ultimateVfxList) game.ultimateVfxList = [];
  const cx = canvas.width * 0.5;
  const cy = canvas.height * 0.46;

  if (ultimateId === "herbier_burst") {
    emitParticles?.(cx, cy, "#ffe87a", 48);
    emitParticles?.(cx, cy, "#ffb84a", 28);
    game.ultimateVfxList.push({ kind: "sun", t: 0, duration: 1.15, cx, cy });
    return;
  }

  if (ultimateId === "distiller_burst") {
    emitParticles?.(cx, cy, "#8fe275", 40);
    emitParticles?.(cx * 0.35, cy * 1.05, "#b88cff", 22);
    emitParticles?.(cx * 1.35, cy * 0.95, "#6ce8a8", 22);
    game.ultimateVfxList.push({ kind: "distill", t: 0, duration: 1.35, cx, cy });
    return;
  }

  if (ultimateId === "gardien_burst") {
    emitParticles?.(cx, cy, "#d4f4ff", 36);
    emitParticles?.(cx, cy, "#a8e8ff", 24);
    game.ultimateVfxList.push({
      kind: "frost",
      t: 0,
      duration: GARDIEN_ULTIMATE_MAP_SNARE.duration,
      cx,
      cy,
    });
  }
}

export function updateUltimateVfx(game, dt) {
  if (!game.ultimateVfxList?.length) return;
  for (const fx of game.ultimateVfxList) fx.t += dt;
  game.ultimateVfxList = game.ultimateVfxList.filter((fx) => fx.t < fx.duration);
}

function drawSunBurst(ctx, canvas, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;

  const maxR = Math.max(canvas.width, canvas.height) * (0.25 + p * 0.55);
  const g = ctx.createRadialGradient(fx.cx, fx.cy, 0, fx.cx, fx.cy, maxR);
  g.addColorStop(0, `rgba(255, 248, 180, ${alpha * 0.95})`);
  g.addColorStop(0.35, `rgba(255, 210, 80, ${alpha * 0.45})`);
  g.addColorStop(0.7, `rgba(255, 160, 40, ${alpha * 0.12})`);
  g.addColorStop(1, "rgba(255, 140, 20, 0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 0.5;
  ctx.strokeStyle = "#fff6c8";
  ctx.lineWidth = 2;
  const rays = 10;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 0.8;
    const r0 = 20 + p * 30;
    const r1 = maxR * 0.85;
    ctx.beginPath();
    ctx.moveTo(fx.cx + Math.cos(a) * r0, fx.cy + Math.sin(a) * r0);
    ctx.lineTo(fx.cx + Math.cos(a) * r1, fx.cy + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawDistillBurst(ctx, canvas, fx) {
  const p = Math.min(1, fx.t / fx.duration);
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;
  const pulse = 0.5 + Math.sin(fx.t * 9) * 0.5;
  const r = Math.max(canvas.width, canvas.height) * (0.3 + p * 0.4);

  const g1 = ctx.createRadialGradient(fx.cx, fx.cy, 0, fx.cx, fx.cy, r);
  g1.addColorStop(0, `rgba(120, 255, 150, ${alpha * (0.35 + pulse * 0.25)})`);
  g1.addColorStop(0.5, `rgba(60, 180, 90, ${alpha * 0.15})`);
  g1.addColorStop(1, "rgba(40, 120, 60, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const g2 = ctx.createRadialGradient(
    fx.cx * 0.7,
    fx.cy * 1.1,
    0,
    fx.cx,
    fx.cy,
    r * 0.9
  );
  g2.addColorStop(0, `rgba(180, 120, 255, ${alpha * 0.28})`);
  g2.addColorStop(0.55, `rgba(100, 60, 160, ${alpha * 0.08})`);
  g2.addColorStop(1, "rgba(60, 30, 90, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 0.4;
  ctx.strokeStyle = "#c8ffb0";
  ctx.lineWidth = 3;
  for (let ring = 0; ring < 3; ring += 1) {
    const rr = r * (0.35 + ring * 0.22) * (0.85 + pulse * 0.15);
    ctx.beginPath();
    ctx.arc(fx.cx, fx.cy, rr, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawFrostOverlay(ctx, canvas, fx) {
  const p = fx.t / fx.duration;
  const fadeIn = Math.min(1, fx.t / 0.35);
  const fadeOut = p > 0.82 ? (1 - p) / 0.18 : 1;
  const alpha = fadeIn * fadeOut * (0.14 + Math.sin(fx.t * 4) * 0.04);

  ctx.fillStyle = `rgba(170, 220, 255, ${alpha})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const edge = ctx.createRadialGradient(
    canvas.width * 0.5,
    canvas.height * 0.48,
    canvas.width * 0.18,
    canvas.width * 0.5,
    canvas.height * 0.48,
    canvas.width * 0.72
  );
  edge.addColorStop(0, "rgba(220, 245, 255, 0)");
  edge.addColorStop(0.65, `rgba(140, 200, 240, ${alpha * 0.35})`);
  edge.addColorStop(1, `rgba(80, 140, 200, ${alpha * 0.55})`);
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 1.8;
  ctx.strokeStyle = "rgba(230, 250, 255, 0.55)";
  ctx.lineWidth = 1.5;
  const crystals = 14;
  for (let i = 0; i < crystals; i += 1) {
    const seed = i * 1.73 + fx.t * 0.5;
    const x = ((Math.sin(seed) * 0.5 + 0.5) * 0.85 + 0.075) * canvas.width;
    const y = ((Math.cos(seed * 1.3) * 0.5 + 0.5) * 0.75 + 0.12) * canvas.height;
    const s = 4 + (i % 3) * 2;
    ctx.beginPath();
    ctx.moveTo(x, y - s);
    ctx.lineTo(x + s * 0.6, y);
    ctx.lineTo(x, y + s);
    ctx.lineTo(x - s * 0.6, y);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

export function drawUltimateVfx(ctx, canvas, game) {
  if (!game.ultimateVfxList?.length) return;
  ctx.save();
  for (const fx of game.ultimateVfxList) {
    if (fx.kind === "sun") drawSunBurst(ctx, canvas, fx);
    else if (fx.kind === "distill") drawDistillBurst(ctx, canvas, fx);
    else if (fx.kind === "frost") drawFrostOverlay(ctx, canvas, fx);
  }
  ctx.restore();
}
