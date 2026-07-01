export function drawProjectileSprites(ctx, projectiles) {
  projectiles.forEach((projectile) => {
    const glow = ctx.createRadialGradient(projectile.x, projectile.y, 0, projectile.x, projectile.y, 12);
    glow.addColorStop(0, projectile.color);
    glow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.fillStyle = projectile.color;
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 4.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = projectile.trailColor;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(projectile.x - 6, projectile.y - 1);
    ctx.lineTo(projectile.x + 2, projectile.y + 3);
    ctx.stroke();
  });
}
