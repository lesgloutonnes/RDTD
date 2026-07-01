function strokeRoute(ctx, route) {
  ctx.beginPath();
  ctx.moveTo(route[0].x, route[0].y);
  for (let i = 1; i < route.length; i += 1) ctx.lineTo(route[i].x, route[i].y);
  ctx.stroke();
}

const BIOME_TINTS = {
  greenhouse: { glow: "rgba(255, 145, 0, 0.13)", haze: "rgba(94, 31, 168, 0.2)", leaf: "rgba(102, 187, 106, 0.16)" },
  swamp: { glow: "rgba(102, 187, 106, 0.14)", haze: "rgba(94, 31, 168, 0.22)", leaf: "rgba(67, 160, 71, 0.18)" },
  hive: { glow: "rgba(255, 193, 7, 0.18)", haze: "rgba(94, 31, 168, 0.18)", leaf: "rgba(255, 213, 79, 0.14)" },
  night: { glow: "rgba(66, 165, 245, 0.12)", haze: "rgba(123, 44, 191, 0.26)", leaf: "rgba(129, 212, 250, 0.12)" },
  heart: { glow: "rgba(255, 112, 67, 0.16)", haze: "rgba(123, 44, 191, 0.26)", leaf: "rgba(236, 64, 122, 0.12)" },
};

export function drawBoardBackdropStyle(ctx, {
  canvas,
  biome,
  time = 0,
}) {
  const tint = BIOME_TINTS[biome?.id] || BIOME_TINTS.greenhouse;
  const width = canvas.width;
  const height = canvas.height;

  ctx.save();
  const wash = ctx.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, tint.haze);
  wash.addColorStop(0.5, "rgba(18, 8, 32, 0.18)");
  wash.addColorStop(1, tint.glow);
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.48;
  for (let i = 0; i < 18; i += 1) {
    const x = (i * 137 + 41) % width;
    const y = (i * 83 + 29) % height;
    const r = 24 + (i % 5) * 9;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((i * 0.47) + Math.sin(time * 0.18 + i) * 0.03);
    ctx.fillStyle = i % 3 === 0 ? tint.glow : tint.leaf;
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 1.8, r * 0.52, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "rgba(255, 213, 79, 0.32)";
  ctx.lineWidth = 1.4;
  for (let i = -2; i < 11; i += 1) {
    const x = i * 110 + Math.sin(time * 0.12 + i) * 4;
    ctx.beginPath();
    ctx.moveTo(x, height + 24);
    ctx.bezierCurveTo(x + 42, height * 0.72, x - 28, height * 0.38, x + 30, -28);
    ctx.stroke();
  }

  const vignette = ctx.createRadialGradient(width * 0.5, height * 0.48, width * 0.2, width * 0.5, height * 0.5, width * 0.78);
  vignette.addColorStop(0, "rgba(255, 255, 220, 0.03)");
  vignette.addColorStop(0.58, "rgba(18, 8, 32, 0.06)");
  vignette.addColorStop(1, "rgba(4, 2, 10, 0.42)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

export function drawBoardPaths(ctx, {
  dirtPattern,
  pathPebbles,
  paths,
}) {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const route of paths) {
    const pathGradient = ctx.createLinearGradient(0, 0, 0, 540);
    pathGradient.addColorStop(0, "#f1dfaf");
    pathGradient.addColorStop(0.52, "#d3b278");
    pathGradient.addColorStop(1, "#a16b38");

    ctx.lineWidth = 100;
    ctx.strokeStyle = "rgba(18, 8, 32, 0.58)";
    strokeRoute(ctx, route);

    ctx.lineWidth = 92;
    ctx.strokeStyle = "rgba(255, 145, 0, 0.62)";
    strokeRoute(ctx, route);

    ctx.lineWidth = 84;
    ctx.strokeStyle = "rgba(94, 31, 168, 0.58)";
    strokeRoute(ctx, route);

    ctx.lineWidth = 74;
    ctx.strokeStyle = pathGradient;
    strokeRoute(ctx, route);

    ctx.save();
    ctx.globalAlpha = 0.34;
    ctx.lineWidth = 68;
    ctx.strokeStyle = dirtPattern || "#dec898";
    strokeRoute(ctx, route);
    ctx.restore();

    ctx.lineWidth = 7;
    ctx.strokeStyle = "rgba(255, 245, 196, 0.34)";
    strokeRoute(ctx, route);

    ctx.save();
    ctx.setLineDash([18, 22]);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(61, 21, 120, 0.2)";
    strokeRoute(ctx, route);
    ctx.restore();
  }

  for (const pebble of pathPebbles) {
    ctx.fillStyle = pebble.color || "#f7d79c";
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.ellipse(pebble.x, pebble.y, pebble.r * 1.35, pebble.r * 0.82, 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function drawBoardPads(ctx, {
  pads,
  placing,
  touchUi,
}) {
  const padRadius = touchUi ? 28 : 23;

  pads.forEach((pad) => {
    const occupied = pad.occupiedBy !== null;
    const highlight = placing && !occupied;

    if (highlight) {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 213, 79, 0.9)";
      ctx.lineWidth = touchUi ? 5 : 3.5;
      ctx.setLineDash([8, 5]);
      ctx.beginPath();
      ctx.arc(pad.x, pad.y, padRadius + 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    ctx.fillStyle = "rgba(18, 8, 32, 0.42)";
    ctx.beginPath();
    ctx.ellipse(pad.x, pad.y + 7, padRadius + 8, 13, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(pad.x, pad.y, padRadius + 4, 0, Math.PI * 2);
    ctx.fillStyle = occupied
      ? "rgba(255, 145, 0, 0.72)"
      : highlight
        ? "rgba(255, 213, 79, 0.72)"
        : "rgba(94, 31, 168, 0.72)";
    ctx.fill();

    const padGradient = ctx.createRadialGradient(pad.x - 8, pad.y - 9, 2, pad.x, pad.y, padRadius);
    padGradient.addColorStop(0, occupied ? "#d3ff9a" : highlight ? "#fff59d" : "#b9ff6d");
    padGradient.addColorStop(0.48, occupied ? "#66bb6a" : highlight ? "#8bd95b" : "#66bb6a");
    padGradient.addColorStop(1, occupied ? "#2e7d32" : highlight ? "#3d8f32" : "#295f2f");
    ctx.fillStyle = padGradient;
    ctx.beginPath();
    ctx.arc(pad.x, pad.y, padRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = occupied ? "#ffd54f" : highlight ? "#fff59d" : "#2d1154";
    ctx.lineWidth = highlight ? 3.5 : 2.5;
    ctx.stroke();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(pad.x - 4, pad.y - 4, padRadius * 0.58, Math.PI * 1.1, Math.PI * 1.78);
    ctx.stroke();

    if (highlight && touchUi) {
      ctx.fillStyle = "rgba(255, 255, 240, 0.92)";
      ctx.font = "bold 11px Nunito, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("+", pad.x, pad.y + 4);
    }
  });
}
