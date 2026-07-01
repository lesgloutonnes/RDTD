export function updateCombatFx({
  floatTexts,
  particles,
}, dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.life -= dt;
    if (particle.life <= 0) {
      particles.splice(i, 1);
      continue;
    }
    particle.vy += 140 * dt;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
  }

  for (let i = floatTexts.length - 1; i >= 0; i -= 1) {
    const text = floatTexts[i];
    text.life -= dt;
    if (text.life <= 0) {
      floatTexts.splice(i, 1);
      continue;
    }
    text.y += text.vy * dt;
  }
}

export function drawCombatFx(ctx, {
  canvas,
  floatTexts,
  particles,
  screen,
}) {
  particles.forEach((particle) => {
    ctx.globalAlpha = Math.max(0, particle.life * 1.4);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  floatTexts.forEach((text) => {
    ctx.globalAlpha = Math.max(0, text.life * 1.2);
    ctx.fillStyle = text.color;
    ctx.font = "bold 14px Segoe UI";
    ctx.fillText(text.text, text.x, text.y);
  });
  ctx.globalAlpha = 1;

  if (screen === "paused") {
    ctx.fillStyle = "rgba(5, 10, 6, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f1ffd5";
    ctx.font = "bold 42px Segoe UI";
    ctx.fillText("PAUSE", canvas.width / 2 - 78, canvas.height / 2 + 14);
  }
}
