function getEnemySpriteSize(enemy) {
  if (enemy.typeKey === "boss") return 66;
  if (enemy.typeKey === "beetle" || enemy.typeKey === "snail") return 42;
  if (enemy.typeKey === "slug") return 40;
  if (enemy.typeKey === "hornet") return 38;
  if (enemy.typeKey === "wasp") return 34;
  return 36;
}

const ENEMY_NATIVE_FACING_X = {
  crawler: 1,
  beetle: -1,
  wasp: -1,
  slug: -1,
  snail: -1,
  hornet: -1,
  boss: -1,
};

export function drawEnemySprite(ctx, enemy, {
  animT,
  enemyFacingX,
  sprites,
  worldPosOfEnemy,
}) {
  const pos = worldPosOfEnemy(enemy);
  const sprite = sprites.enemies[enemy.typeKey];
  const size = getEnemySpriteSize(enemy);

  ctx.fillStyle = "rgba(10, 10, 6, 0.28)";
  ctx.beginPath();
  ctx.ellipse(pos.x, pos.y + enemy.radius + 4, enemy.radius * 1.3, enemy.radius * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();

  if (sprite && sprite.complete) {
    const nativeFacingX = ENEMY_NATIVE_FACING_X[enemy.typeKey] ?? 1;
    const facingX = enemyFacingX?.(enemy) ?? nativeFacingX;
    const shouldFlip = nativeFacingX !== Math.sign(facingX || nativeFacingX);
    ctx.save();
    ctx.translate(pos.x, pos.y - 2);
    if (shouldFlip) ctx.scale(-1, 1);
    ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
    ctx.restore();
  }
  else {
    ctx.fillStyle = enemy.color;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const ratio = Math.max(enemy.hp, 0) / enemy.maxHp;
  const width = enemy.typeKey === "boss" ? 56 : 36;
  ctx.fillStyle = "#25190f";
  ctx.fillRect(pos.x - width / 2, pos.y - enemy.radius - 13, width, 6);
  ctx.fillStyle = enemy.typeKey === "boss" ? "#f08f2f" : "#de4c35";
  ctx.fillRect(pos.x - width / 2, pos.y - enemy.radius - 13, width * ratio, 6);

  if (enemy.bossShield > 0) {
    ctx.strokeStyle = "rgba(120, 200, 255, 0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius + 6, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (enemy.damageReduction && enemy.damageReduction < 1) {
    ctx.fillStyle = "rgba(180, 160, 255, 0.35)";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius + 3, 0, Math.PI * 2);
    ctx.fill();
  }

  if (enemy.hitShield > 0) {
    ctx.strokeStyle = "rgba(200, 220, 255, 0.75)";
    ctx.lineWidth = 1.5;
    for (let s = 0; s < Math.min(enemy.hitShield, 4); s += 1) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, enemy.radius + 4 + s * 2, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  if (enemy.poisonTime > 0 && enemy.poisonDps > 0) {
    ctx.save();
    ctx.globalAlpha = 0.55 + Math.sin(animT * 4 + enemy.id) * 0.2;
    ctx.fillStyle = "rgba(80, 255, 90, 0.35)";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius + 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "bold 7px monospace";
    ctx.fillStyle = "#8fff70";
    ctx.textAlign = "center";
    ctx.fillText("☠", pos.x, pos.y - enemy.radius - 6);
    ctx.restore();
  }

  if (enemy.burnTime > 0 && enemy.burnDps > 0) {
    ctx.save();
    ctx.globalAlpha = 0.5 + Math.sin(animT * 5 + enemy.id * 0.5) * 0.25;
    const bg = ctx.createRadialGradient(pos.x, pos.y - 4, 0, pos.x, pos.y, enemy.radius + 8);
    bg.addColorStop(0, "rgba(255, 120, 40, 0.55)");
    bg.addColorStop(1, "rgba(255, 60, 0, 0)");
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius + 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "bold 7px monospace";
    ctx.fillStyle = "#ff9040";
    ctx.textAlign = "center";
    ctx.fillText("🔥", pos.x + 10, pos.y - enemy.radius - 5);
    ctx.restore();
  }

  if (enemy.slowTime > 0 && enemy.slowMult < 1) {
    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = "rgba(140, 210, 255, 0.8)";
    ctx.lineWidth = 1.2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, enemy.radius + 7, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = "bold 7px monospace";
    ctx.fillStyle = "#a8e8ff";
    ctx.textAlign = "center";
    ctx.fillText("❄", pos.x - 10, pos.y - enemy.radius - 5);
    ctx.restore();
  }

  if (enemy.dashBoostSec > 0) {
    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "rgba(255, 220, 120, 0.85)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pos.x - 8, pos.y);
    ctx.lineTo(pos.x - 16, pos.y - 3);
    ctx.stroke();
    ctx.restore();
  }
}
