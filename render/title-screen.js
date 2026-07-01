const TITLE_BACKDROP_SRC = "./assets/textures/title-rdtd-background.png?v=title-bg-v1";
const isLocalDevHost = location.protocol === "file:" || location.hostname === "127.0.0.1" || location.hostname === "localhost";
const localAssetCacheBust = isLocalDevHost ? String(Date.now()) : "";

function withLocalAssetCacheBust(src) {
  if (!localAssetCacheBust) return src;
  const url = new URL(src, location.href);
  url.searchParams.set("dev-cache-bust", localAssetCacheBust);
  return url.href;
}

const titleBackdrop = new Image();
titleBackdrop.src = withLocalAssetCacheBust(TITLE_BACKDROP_SRC);

export function createTitleAnimState() {
  return {
    t: 0,
    spores: Array.from({ length: 60 }, () => ({
      x: Math.random() * 960,
      y: Math.random() * 540,
      vy: -(0.18 + Math.random() * 0.55),
      vx: (Math.random() - 0.5) * 0.22,
      r: 1.2 + Math.random() * 2.8,
      alpha: 0.15 + Math.random() * 0.6,
      hue: 280 + Math.floor(Math.random() * 50),
    })),
    fireflies: Array.from({ length: 18 }, () => ({
      x: Math.random() * 960,
      y: 200 + Math.random() * 280,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.4,
      radius: 30 + Math.random() * 50,
      cx: 80 + Math.random() * 800,
      cy: 220 + Math.random() * 260,
    })),
    phase: 0,
    fadeIn: 0,
    titleY: -120,
    orbitAngle: 0,
    musicStarted: false,
  };
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawW = image.naturalWidth * scale;
  const drawH = image.naturalHeight * scale;
  ctx.drawImage(image, x + (width - drawW) / 2, y + (height - drawH) / 2, drawW, drawH);
}

export function updateTitleScreenAnim(titleAnim, dt) {
  const a = titleAnim;
  a.t += dt;
  a.orbitAngle += dt * 0.18;

  if (a.phase === 0) {
    a.fadeIn = Math.min(1, a.fadeIn + dt * 0.42);
    a.titleY = Math.max(0, a.titleY + (0 - a.titleY) * dt * 1.8 + dt * 80);
    if (a.fadeIn >= 1) a.phase = 1;
  }

  a.spores.forEach((s) => {
    s.x += s.vx + Math.sin(a.t * 0.6 + s.r) * 0.08;
    s.y += s.vy;
    if (s.y < -8) {
      s.y = 548;
      s.x = Math.random() * 960;
    }
  });

  a.fireflies.forEach((f) => {
    f.phase += dt * f.speed;
    f.x = f.cx + Math.cos(f.phase) * f.radius;
    f.y = f.cy + Math.sin(f.phase * 0.7) * f.radius * 0.55;
  });
}

function drawTitlePlant(ctx, x, yBase, scale, mirror) {
  ctx.save();
  ctx.translate(x, yBase);
  if (mirror) ctx.scale(-1, 1);
  ctx.scale(scale, scale);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-8, -80, 14, -160, -4, -220);
  ctx.lineWidth = 9;
  ctx.strokeStyle = "rgba(20,55,18,0.92)";
  ctx.stroke();

  ctx.save();
  ctx.translate(-4, -220);
  ctx.beginPath();
  ctx.ellipse(0, -22, 28, 18, Math.PI * 0.08, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(15,48,14,0.88)";
  ctx.fill();
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 8, -14);
    ctx.lineTo(i * 8 + 4, -24);
    ctx.lineTo(i * 8 + 8, -14);
    ctx.fillStyle = "rgba(8,35,8,0.9)";
    ctx.fill();
  }
  const grd = ctx.createRadialGradient(0, -22, 2, 0, -22, 22);
  grd.addColorStop(0, "rgba(60,180,40,0.28)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath();
  ctx.ellipse(0, -22, 22, 14, 0, 0, Math.PI * 2);
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(-6, -100);
  ctx.bezierCurveTo(-40, -120, -60, -80, -30, -70);
  ctx.bezierCurveTo(-14, -68, -6, -100, -6, -100);
  ctx.fillStyle = "rgba(18,52,16,0.8)";
  ctx.fill();

  ctx.restore();
}

function drawTitleVines(ctx, t) {
  ctx.save();
  ctx.strokeStyle = "rgba(18,54,16,0.55)";
  ctx.lineWidth = 3;
  const W = 960;
  const H = 540;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    const ox = -20 + i * 18;
    const oy = H + 10;
    const bend = 80 + i * 30 + Math.sin(t * 0.3 + i) * 8;
    ctx.moveTo(ox, oy);
    ctx.bezierCurveTo(ox + bend, oy - 180, ox + 40, oy - 320, ox + 20 + i * 12, oy - 460);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(ox + 30 + i * 8, oy - 200 - i * 30, 14, 7, -0.4 + Math.sin(t * 0.2 + i) * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(22,64,18,0.6)";
    ctx.fill();
  }
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    const ox = W + 15 - i * 20;
    const oy = H + 10;
    ctx.moveTo(ox, oy);
    ctx.bezierCurveTo(ox - 70 - i * 20, oy - 150, ox - 30, oy - 300, ox - 40 - i * 14, oy - 430);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(ox - 50 - i * 10, oy - 180 - i * 25, 12, 6, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(22,64,18,0.55)";
    ctx.fill();
  }
  ctx.restore();
}

function drawTitleTexturedBackdrop(ctx, t, fadeIn) {
  const W = 960;
  const H = 540;

  ctx.save();
  ctx.globalAlpha = 0.7 * fadeIn;
  for (let y = 0; y < H; y += 54) {
    for (let x = 0; x < W; x += 72) {
      const jitter = Math.sin(x * 0.017 + y * 0.031) * 5;
      const moss = ctx.createRadialGradient(x + 36 + jitter, y + 28, 0, x + 36 + jitter, y + 28, 54);
      moss.addColorStop(0, "rgba(56, 128, 42, 0.3)");
      moss.addColorStop(0.55, "rgba(22, 76, 28, 0.18)");
      moss.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = moss;
      ctx.fillRect(x - 20, y - 20, 112, 94);
    }
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.32 * fadeIn;
  for (let y = 26; y < H; y += 72) {
    for (let x = 18; x < W; x += 92) {
      const rot = ((x + y) % 9 - 4) * 0.035;
      ctx.save();
      ctx.translate(x + Math.sin(y * 0.07) * 8, y);
      ctx.rotate(rot);
      const patch = ctx.createLinearGradient(-34, -18, 34, 18);
      patch.addColorStop(0, "rgba(20, 70, 26, 0.34)");
      patch.addColorStop(0.5, "rgba(64, 124, 42, 0.24)");
      patch.addColorStop(1, "rgba(10, 36, 16, 0.32)");
      ctx.fillStyle = patch;
      ctx.beginPath();
      ctx.roundRect(-38, -18, 76, 36, 10);
      ctx.fill();
      ctx.strokeStyle = "rgba(150, 220, 110, 0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.68 * fadeIn;
  for (let i = 0; i < 210; i += 1) {
    const x = (i * 73.31 + 19) % W;
    const y = (i * 41.77 + 53) % H;
    const r = 1 + (i % 7) * 0.45;
    ctx.fillStyle = i % 4 === 0 ? "rgba(126, 182, 82, 0.26)" : "rgba(42, 82, 34, 0.24)";
    ctx.beginPath();
    ctx.ellipse(x, y, r * 1.8, r, (i * 0.37) % Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.26 * fadeIn;
  ctx.strokeStyle = "rgba(116, 176, 82, 0.22)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 12; i += 1) {
    const x = -60 + i * 92 + Math.sin(t * 0.12 + i) * 4;
    ctx.beginPath();
    ctx.moveTo(x, H + 20);
    ctx.bezierCurveTo(x + 32, H * 0.68, x - 22, H * 0.35, x + 18, -30);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.42 * fadeIn;
  for (let i = 0; i < 34; i += 1) {
    const x = (i * 149 + 35) % W;
    const y = H * (0.18 + ((i * 37) % 72) / 100);
    const rot = -0.35 + (i % 5) * 0.18 + Math.sin(t * 0.08 + i) * 0.03;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.fillStyle = i % 3 === 0 ? "rgba(46, 126, 46, 0.42)" : "rgba(22, 82, 32, 0.36)";
    ctx.beginPath();
    ctx.ellipse(0, 0, 42 + (i % 4) * 12, 14 + (i % 3) * 5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(150, 220, 100, 0.24)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-34, 0);
    ctx.quadraticCurveTo(0, -5, 38, 0);
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.34 * fadeIn;
  for (let y = 72; y < H; y += 58) {
    ctx.strokeStyle = "rgba(180, 230, 130, 0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(t * 0.1 + y) * 2);
    ctx.bezierCurveTo(W * 0.28, y - 16, W * 0.58, y + 18, W, y - 8);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.24 * fadeIn;
  ctx.strokeStyle = "rgba(168, 222, 132, 0.16)";
  ctx.lineWidth = 1;
  for (let x = -80; x < W + 80; x += 96) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 54, H);
    ctx.stroke();
  }
  for (let x = 40; x < W + 120; x += 112) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x - 48, H);
    ctx.stroke();
  }
  ctx.restore();
}

export function drawTitleScreenFrame(ctx, titleAnim) {
  const W = 960;
  const H = 540;
  const a = titleAnim;
  const t = a.t;

  ctx.clearRect(0, 0, W, H);
  const bgGrd = ctx.createLinearGradient(0, 0, 0, H);
  bgGrd.addColorStop(0, "#1e0f3a");
  bgGrd.addColorStop(0.38, "#2d1154");
  bgGrd.addColorStop(0.75, "#120820");
  bgGrd.addColorStop(1, "#0a0614");
  ctx.fillStyle = bgGrd;
  ctx.fillRect(0, 0, W, H);

  if (titleBackdrop.complete && titleBackdrop.naturalWidth > 0) {
    ctx.save();
    ctx.globalAlpha = Math.max(0.25, a.fadeIn);
    drawCoverImage(ctx, titleBackdrop, 0, 0, W, H);
    ctx.globalAlpha = 1;
    const backdropShade = ctx.createRadialGradient(W * 0.5, H * 0.52, W * 0.12, W * 0.5, H * 0.52, W * 0.66);
    backdropShade.addColorStop(0, "rgba(0, 0, 0, 0.03)");
    backdropShade.addColorStop(0.58, "rgba(0, 10, 4, 0.12)");
    backdropShade.addColorStop(1, "rgba(0, 0, 0, 0.48)");
    ctx.fillStyle = backdropShade;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  } else {
    drawTitleTexturedBackdrop(ctx, t, a.fadeIn);
  }

  ctx.save();
  for (let i = 0; i < 80; i++) {
    const sx = ((i * 137.508 + 42) % W);
    const sy = ((i * 97.3 + 17) % (H * 0.62));
    const flicker = 0.45 + 0.55 * Math.sin(t * 1.1 + i * 2.3);
    ctx.globalAlpha = flicker * 0.7 * a.fadeIn;
    ctx.fillStyle = "#ffe0b2";
    ctx.beginPath();
    ctx.arc(sx, sy, 0.8 + (i % 3) * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  const moonX = W * 0.5 + Math.sin(t * 0.15) * 6;
  const moonY = 148 + Math.sin(t * 0.11) * 5;
  const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 110);
  moonGlow.addColorStop(0, `rgba(255, 167, 38,${0.18 * a.fadeIn})`);
  moonGlow.addColorStop(0.4, `rgba(123, 44, 191,${0.12 * a.fadeIn})`);
  moonGlow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = moonGlow;
  ctx.beginPath();
  ctx.arc(moonX, moonY, 110, 0, Math.PI * 2);
  ctx.fill();
  const moonDisc = ctx.createRadialGradient(moonX - 10, moonY - 10, 0, moonX, moonY, 46);
  moonDisc.addColorStop(0, `rgba(255, 224, 178,${0.82 * a.fadeIn})`);
  moonDisc.addColorStop(0.5, `rgba(255, 167, 38,${0.62 * a.fadeIn})`);
  moonDisc.addColorStop(1, `rgba(94, 31, 168,${0.42 * a.fadeIn})`);
  ctx.beginPath();
  ctx.arc(moonX, moonY, 42, 0, Math.PI * 2);
  ctx.fillStyle = moonDisc;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(moonX + 14, moonY - 8, 34, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(18,8,32,${0.58 * a.fadeIn})`;
  ctx.fill();
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 5; i++) {
    const angle = a.orbitAngle + (i / 5) * Math.PI * 2;
    const ox = moonX + Math.cos(angle) * (62 + i * 6);
    const oy = moonY + Math.sin(angle) * (28 + i * 3);
    const orbitAlpha = (0.5 + 0.5 * Math.sin(t * 1.3 + i)) * a.fadeIn;
    ctx.globalAlpha = orbitAlpha;
    const og = ctx.createRadialGradient(ox, oy, 0, ox, oy, 5 + i);
    og.addColorStop(0, "#ffb74d");
    og.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(ox, oy, 5 + i * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = og;
    ctx.fill();
  }
  ctx.restore();

  ctx.save();
  const fogGrd = ctx.createLinearGradient(0, H - 90, 0, H);
  fogGrd.addColorStop(0, "rgba(0,0,0,0)");
  fogGrd.addColorStop(1, `rgba(18,8,32,${0.88 * a.fadeIn})`);
  ctx.fillStyle = fogGrd;
  ctx.fillRect(0, H - 90, W, 90);
  ctx.restore();

  ctx.save();
  a.spores.forEach((s) => {
    ctx.globalAlpha = s.alpha * a.fadeIn * (0.5 + 0.5 * Math.sin(t * 0.9 + s.r * 3));
    const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 2.2);
    sg.addColorStop(0, `hsl(${s.hue},80%,70%)`);
    sg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
    ctx.fillStyle = sg;
    ctx.fill();
  });
  ctx.restore();

  ctx.save();
  a.fireflies.forEach((f) => {
    const alpha = (0.55 + 0.45 * Math.sin(f.phase * 2.1)) * a.fadeIn;
    ctx.globalAlpha = alpha;
    const fg = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 7);
    fg.addColorStop(0, "#ffd54f");
    fg.addColorStop(0.4, "rgba(255, 167, 38, 0.4)");
    fg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(f.x, f.y, 7, 0, Math.PI * 2);
    ctx.fillStyle = fg;
    ctx.fill();
  });
  ctx.restore();

  /* Logo affiché via overlay HTML (#title-brand) */

  ctx.save();
  ctx.globalAlpha = 0.28 * a.fadeIn;
  ctx.font = "11px monospace";
  ctx.textAlign = "center";
  ctx.fillStyle = "#e1bee7";
  ctx.fillText("© Les Gloutonnes  —  lesgloutonnes.be", W * 0.5, 528);
  ctx.restore();
}
