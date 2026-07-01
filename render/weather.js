export function updateWeatherState(weatherState, {
  canvas,
}, dt) {
  for (const drop of weatherState.rainDrops) {
    drop.y += drop.speed * dt;
    drop.x += drop.speed * 0.18 * dt;
    if (drop.y > canvas.height + 20) {
      drop.y = -20;
      drop.x = Math.random() * canvas.width;
    }
    if (drop.x > canvas.width + 20) drop.x = -20;
  }
  weatherState.fogOffset += dt * 22;
}

export function drawWeatherOverlay(ctx, {
  biome,
  canvas,
  fogOffset,
  rainDrops,
}) {
  ctx.strokeStyle = `rgba(190,220,255,${biome.rain})`;
  ctx.lineWidth = 1.1;
  for (const drop of rainDrops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x + drop.len * 0.3, drop.y + drop.len);
    ctx.stroke();
  }

  ctx.fillStyle = `rgba(233,245,240,${biome.fog})`;
  const fogY = Math.sin(fogOffset * 0.02) * 14;
  ctx.fillRect(-40, 65 + fogY, canvas.width + 80, 48);
  ctx.fillRect(-30, 260 - fogY * 0.6, canvas.width + 70, 56);
}
