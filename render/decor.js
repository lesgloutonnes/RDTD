export function drawSetDressingDecor(ctx, decor) {
  for (const mushroom of decor.mushrooms) {
    ctx.save();
    ctx.translate(mushroom.x, mushroom.y);
    ctx.scale(mushroom.s, mushroom.s);
    ctx.fillStyle = "rgba(28, 20, 12, 0.24)";
    ctx.beginPath();
    ctx.ellipse(0, 12, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f4dcc0";
    ctx.fillRect(-3, 0, 6, 13);
    ctx.fillStyle = mushroom.cap;
    ctx.beginPath();
    ctx.arc(0, 0, 10, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.beginPath();
    ctx.arc(-4, -4, 2, 0, Math.PI * 2);
    ctx.arc(3, -6, 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export function drawFireflyDecor(ctx, fireflies, nowSec = performance.now() * 0.001) {
  for (const firefly of fireflies) {
    const glow = (Math.sin(nowSec * firefly.speed + firefly.phase) + 1) * 0.5;
    const x = firefly.x + Math.sin(nowSec + firefly.phase) * 10;
    const y = firefly.y + Math.cos(nowSec * 0.7 + firefly.phase) * 8;
    ctx.globalAlpha = 0.18 + glow * 0.4;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
    gradient.addColorStop(0, "#faffb8");
    gradient.addColorStop(1, "rgba(250,255,184,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function drawLightingOverlayDecor(ctx, {
  biome,
  canvas,
  nowMs = performance.now(),
}) {
  const vignette = ctx.createRadialGradient(
    canvas.width * 0.52,
    canvas.height * 0.45,
    canvas.width * 0.1,
    canvas.width * 0.52,
    canvas.height * 0.45,
    canvas.width * 0.72,
  );
  vignette.addColorStop(0, "rgba(255, 213, 79, 0.06)");
  vignette.addColorStop(0.58, "rgba(94, 31, 168, 0.04)");
  vignette.addColorStop(1, "rgba(18, 8, 32, 0.38)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const rim = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  rim.addColorStop(0, "rgba(123, 44, 191, 0.08)");
  rim.addColorStop(0.52, "rgba(0, 0, 0, 0)");
  rim.addColorStop(1, "rgba(255, 145, 0, 0.08)");
  ctx.fillStyle = rim;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (biome.id === "heart") {
    ctx.globalAlpha = 0.08 + Math.sin(nowMs * 0.003) * 0.025;
    ctx.fillStyle = "#ff5c88";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }
}
