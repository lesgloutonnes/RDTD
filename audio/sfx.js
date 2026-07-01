/** Palette FX centralisee — garde le combat propre et donne du poids a l'UI/reward. */
const CATEGORY_GAIN = {
  combat: 0.72,
  status: 0.52,
  ui: 1.12,
  reward: 1.22,
  danger: 1.08,
};

const FAMILY_GAIN = {
  snapper: 0.96,
  spitter: 0.9,
  thorn: 0.88,
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function familyOf(tower) {
  return tower?.family || tower?.typeKey || "tower";
}

export function createSfxPlayer(playSound) {
  const lastPlayed = new Map();

  function canPlay(id, cooldownMs = 0) {
    if (!cooldownMs) return true;
    const now = performance.now();
    const last = lastPlayed.get(id) || 0;
    if (now - last < cooldownMs) return false;
    lastPlayed.set(id, now);
    return true;
  }

  function trigger(id, {
    category = "combat",
    cooldownMs = 0,
    gainScale = 1,
    pitchJitter = 0.025,
    durationScale = 1,
    layers = [],
  }) {
    if (!canPlay(id, cooldownMs)) return false;
    const categoryGain = CATEGORY_GAIN[category] ?? 1;
    layers.forEach((layer) => {
      const pitch = layer.pitch ?? 1;
      const jitter = layer.pitchJitter ?? pitchJitter;
      const freq = Math.max(20, layer.freq * pitch * randomBetween(1 - jitter, 1 + jitter));
      const gain = (layer.gain ?? 0.02) * categoryGain * gainScale * randomBetween(0.92, 1.06);
      const duration = clamp((layer.duration ?? 0.05) * durationScale, 0.015, 0.45);
      playSound(freq, duration, layer.type || "sine", gain);
    });
    return true;
  }

  return {
    uiClick() {
      trigger("ui:click", {
        category: "ui",
        cooldownMs: 28,
        pitchJitter: 0.018,
        layers: [
          { freq: 360, duration: 0.035, type: "triangle", gain: 0.016 },
          { freq: 680, duration: 0.028, type: "sine", gain: 0.011 },
        ],
      });
    },
    uiToggle(on = true) {
      trigger(`ui:toggle:${on ? "on" : "off"}`, {
        category: "ui",
        cooldownMs: 60,
        layers: [
          { freq: on ? 520 : 260, duration: 0.045, type: "triangle", gain: 0.018 },
          { freq: on ? 780 : 180, duration: 0.055, type: on ? "sine" : "square", gain: 0.012 },
        ],
      });
    },
    uiDeny() {
      trigger("ui:deny", {
        category: "ui",
        cooldownMs: 90,
        layers: [
          { freq: 180, duration: 0.055, type: "square", gain: 0.017 },
          { freq: 130, duration: 0.075, type: "triangle", gain: 0.012 },
        ],
      });
    },
    towerShot(tower) {
      const family = familyOf(tower);
      const base = tower?.soundFreq || 360;
      const familyGain = FAMILY_GAIN[family] ?? 0.88;
      const presets = {
        snapper: [
          { freq: base * 0.72, duration: 0.032, type: "square", gain: 0.0075 },
          { freq: base * 1.18, duration: 0.026, type: "triangle", gain: 0.0055 },
        ],
        spitter: [
          { freq: base * 0.9, duration: 0.045, type: "sine", gain: 0.007 },
          { freq: base * 1.38, duration: 0.032, type: "triangle", gain: 0.005 },
        ],
        thorn: [
          { freq: base * 1.05, duration: 0.03, type: "triangle", gain: 0.007 },
          { freq: base * 1.75, duration: 0.02, type: "sine", gain: 0.0042 },
        ],
      };
      trigger(`combat:tower-shot:${family}`, {
        category: "combat",
        cooldownMs: 22,
        gainScale: familyGain,
        pitchJitter: 0.045,
        layers: presets[family] || presets.thorn,
      });
    },
    impact() {
      trigger("combat:impact", {
        category: "combat",
        cooldownMs: 26,
        pitchJitter: 0.05,
        layers: [
          { freq: 205, duration: 0.026, type: "square", gain: 0.010 },
          { freq: 310, duration: 0.034, type: "triangle", gain: 0.006 },
        ],
      });
    },
    crit() {
      trigger("combat:crit", {
        category: "reward",
        cooldownMs: 80,
        pitchJitter: 0.02,
        layers: [
          { freq: 740, duration: 0.045, type: "square", gain: 0.022 },
          { freq: 1040, duration: 0.055, type: "sine", gain: 0.018 },
          { freq: 1480, duration: 0.035, type: "triangle", gain: 0.010 },
        ],
      });
    },
    poison() {
      trigger("status:poison", {
        category: "status",
        cooldownMs: 145,
        pitchJitter: 0.06,
        layers: [
          { freq: 260, duration: 0.055, type: "sine", gain: 0.014 },
          { freq: 390, duration: 0.035, type: "triangle", gain: 0.006 },
        ],
      });
    },
    burn() {
      trigger("status:burn", {
        category: "status",
        cooldownMs: 170,
        pitchJitter: 0.045,
        layers: [
          { freq: 145, duration: 0.08, type: "sawtooth", gain: 0.018 },
          { freq: 235, duration: 0.045, type: "triangle", gain: 0.008 },
        ],
      });
    },
    slow() {
      trigger("status:slow", {
        category: "status",
        cooldownMs: 140,
        pitchJitter: 0.025,
        layers: [
          { freq: 430, duration: 0.065, type: "sine", gain: 0.012 },
          { freq: 215, duration: 0.09, type: "triangle", gain: 0.007 },
        ],
      });
    },
    bossPhase() {
      trigger("danger:boss-phase", {
        category: "danger",
        cooldownMs: 850,
        pitchJitter: 0.015,
        layers: [
          { freq: 190, duration: 0.14, type: "sawtooth", gain: 0.042 },
          { freq: 118, duration: 0.2, type: "square", gain: 0.026 },
          { freq: 380, duration: 0.09, type: "triangle", gain: 0.013 },
        ],
      });
    },
    bossDefeat() {
      trigger("reward:boss-defeat", {
        category: "reward",
        cooldownMs: 700,
        pitchJitter: 0.012,
        layers: [
          { freq: 220, duration: 0.16, type: "triangle", gain: 0.032 },
          { freq: 440, duration: 0.13, type: "triangle", gain: 0.028 },
          { freq: 660, duration: 0.11, type: "sine", gain: 0.018 },
        ],
      });
    },
    synergy() {
      trigger("reward:synergy", {
        category: "reward",
        cooldownMs: 260,
        pitchJitter: 0.01,
        layers: [
          { freq: 523, duration: 0.07, type: "triangle", gain: 0.026 },
          { freq: 659, duration: 0.09, type: "triangle", gain: 0.024 },
          { freq: 784, duration: 0.11, type: "sine", gain: 0.020 },
        ],
      });
    },
    shieldHit() {
      trigger("combat:shield-hit", {
        category: "combat",
        cooldownMs: 80,
        pitchJitter: 0.025,
        layers: [
          { freq: 540, duration: 0.035, type: "square", gain: 0.013 },
          { freq: 270, duration: 0.04, type: "triangle", gain: 0.008 },
        ],
      });
    },
    dash() {
      trigger("combat:dash", {
        category: "combat",
        cooldownMs: 180,
        pitchJitter: 0.035,
        layers: [
          { freq: 760, duration: 0.045, type: "sine", gain: 0.011 },
          { freq: 520, duration: 0.032, type: "triangle", gain: 0.007 },
        ],
      });
    },
    split() {
      trigger("combat:split", {
        category: "combat",
        cooldownMs: 130,
        pitchJitter: 0.04,
        layers: [
          { freq: 330, duration: 0.055, type: "triangle", gain: 0.014 },
          { freq: 180, duration: 0.045, type: "square", gain: 0.008 },
        ],
      });
    },
    waveStart() {
      trigger("danger:wave-start", {
        category: "danger",
        cooldownMs: 300,
        layers: [
          { freq: 250, duration: 0.08, type: "square", gain: 0.026 },
          { freq: 375, duration: 0.07, type: "triangle", gain: 0.018 },
        ],
      });
    },
    waveClear() {
      trigger("reward:wave-clear", {
        category: "reward",
        cooldownMs: 420,
        layers: [
          { freq: 430, duration: 0.08, type: "triangle", gain: 0.030 },
          { freq: 645, duration: 0.09, type: "sine", gain: 0.018 },
        ],
      });
    },
    objective() {
      trigger("reward:objective", {
        category: "reward",
        cooldownMs: 260,
        layers: [
          { freq: 550, duration: 0.08, type: "triangle", gain: 0.026 },
          { freq: 700, duration: 0.1, type: "sine", gain: 0.022 },
        ],
      });
    },
    relic() {
      trigger("reward:relic", {
        category: "reward",
        cooldownMs: 360,
        layers: [
          { freq: 520, duration: 0.07, type: "triangle", gain: 0.024 },
          { freq: 690, duration: 0.11, type: "triangle", gain: 0.028 },
          { freq: 1035, duration: 0.08, type: "sine", gain: 0.014 },
        ],
      });
    },
    cardPick() {
      trigger("reward:card-pick", {
        category: "reward",
        cooldownMs: 140,
        layers: [
          { freq: 500, duration: 0.055, type: "triangle", gain: 0.021 },
          { freq: 760, duration: 0.08, type: "sine", gain: 0.015 },
        ],
      });
    },
    shopBuy() {
      trigger("reward:shop-buy", {
        category: "reward",
        cooldownMs: 120,
        layers: [
          { freq: 410, duration: 0.045, type: "triangle", gain: 0.018 },
          { freq: 620, duration: 0.065, type: "sine", gain: 0.014 },
        ],
      });
    },
    plant() {
      trigger("ui:plant", {
        category: "ui",
        cooldownMs: 70,
        layers: [
          { freq: 300, duration: 0.045, type: "triangle", gain: 0.017 },
          { freq: 610, duration: 0.04, type: "sine", gain: 0.012 },
        ],
      });
    },
    select() {
      trigger("ui:select", {
        category: "ui",
        cooldownMs: 55,
        layers: [
          { freq: 340, duration: 0.03, type: "triangle", gain: 0.014 },
          { freq: 520, duration: 0.032, type: "sine", gain: 0.010 },
        ],
      });
    },
    upgrade(level = 2) {
      trigger(`reward:upgrade:${level >= 3 ? "max" : "lv2"}`, {
        category: "reward",
        cooldownMs: 180,
        layers: level >= 3
          ? [
              { freq: 520, duration: 0.055, type: "triangle", gain: 0.022 },
              { freq: 780, duration: 0.08, type: "triangle", gain: 0.022 },
              { freq: 1040, duration: 0.09, type: "sine", gain: 0.017 },
            ]
          : [
              { freq: 380, duration: 0.055, type: "triangle", gain: 0.020 },
              { freq: 760, duration: 0.08, type: "sine", gain: 0.018 },
            ],
      });
    },
    sell() {
      trigger("ui:sell", {
        category: "ui",
        cooldownMs: 80,
        layers: [
          { freq: 220, duration: 0.075, type: "sine", gain: 0.016 },
          { freq: 330, duration: 0.045, type: "triangle", gain: 0.010 },
        ],
      });
    },
    skill(kind = "boost") {
      trigger(`reward:skill:${kind}`, {
        category: "reward",
        cooldownMs: 220,
        layers: kind === "snare"
          ? [
              { freq: 210, duration: 0.12, type: "sawtooth", gain: 0.024 },
              { freq: 360, duration: 0.08, type: "triangle", gain: 0.014 },
            ]
          : [
              { freq: 520, duration: 0.07, type: "triangle", gain: 0.020 },
              { freq: 780, duration: 0.1, type: "sine", gain: 0.018 },
            ],
      });
    },
    ultimate(ultimateId) {
      const layersById = {
        herbier_burst: [
          { freq: 520, duration: 0.12, type: "triangle", gain: 0.026 },
          { freq: 640, duration: 0.1, type: "sine", gain: 0.023 },
          { freq: 960, duration: 0.08, type: "triangle", gain: 0.014 },
        ],
        distiller_burst: [
          { freq: 280, duration: 0.13, type: "sawtooth", gain: 0.025 },
          { freq: 420, duration: 0.11, type: "triangle", gain: 0.018 },
          { freq: 560, duration: 0.08, type: "sine", gain: 0.012 },
        ],
        gardien_burst: [
          { freq: 160, duration: 0.2, type: "triangle", gain: 0.024 },
          { freq: 320, duration: 0.14, type: "sine", gain: 0.017 },
          { freq: 480, duration: 0.09, type: "triangle", gain: 0.012 },
        ],
      };
      trigger(`reward:ultimate:${ultimateId || "generic"}`, {
        category: "reward",
        cooldownMs: 450,
        layers: layersById[ultimateId] || [
          { freq: 640, duration: 0.12, type: "triangle", gain: 0.026 },
          { freq: 840, duration: 0.09, type: "sine", gain: 0.016 },
        ],
      });
    },
    runStart() {
      trigger("reward:run-start", {
        category: "reward",
        cooldownMs: 500,
        layers: [
          { freq: 392, duration: 0.12, type: "triangle", gain: 0.030 },
          { freq: 588, duration: 0.1, type: "sine", gain: 0.016 },
        ],
      });
    },
    spireStart() {
      trigger("reward:spire-start", {
        category: "reward",
        cooldownMs: 500,
        layers: [
          { freq: 330, duration: 0.14, type: "triangle", gain: 0.026 },
          { freq: 440, duration: 0.17, type: "sine", gain: 0.020 },
          { freq: 660, duration: 0.09, type: "triangle", gain: 0.012 },
        ],
      });
    },
    victory() {
      trigger("reward:victory", {
        category: "reward",
        cooldownMs: 1000,
        layers: [
          { freq: 392, duration: 0.16, type: "triangle", gain: 0.026 },
          { freq: 523, duration: 0.2, type: "triangle", gain: 0.032 },
          { freq: 784, duration: 0.18, type: "sine", gain: 0.020 },
        ],
      });
    },
    leak(boss = false) {
      trigger(`danger:leak:${boss ? "boss" : "normal"}`, {
        category: "danger",
        cooldownMs: boss ? 900 : 220,
        layers: boss
          ? [
              { freq: 105, duration: 0.24, type: "sawtooth", gain: 0.052 },
              { freq: 160, duration: 0.16, type: "square", gain: 0.030 },
            ]
          : [
              { freq: 150, duration: 0.12, type: "sawtooth", gain: 0.036 },
              { freq: 230, duration: 0.07, type: "square", gain: 0.016 },
            ],
      });
    },
    retry() {
      trigger("reward:retry", {
        category: "reward",
        cooldownMs: 400,
        layers: [
          { freq: 360, duration: 0.12, type: "triangle", gain: 0.026 },
          { freq: 540, duration: 0.09, type: "sine", gain: 0.016 },
        ],
      });
    },
    pause(paused = true) {
      trigger(`ui:pause:${paused ? "on" : "off"}`, {
        category: "ui",
        cooldownMs: 80,
        layers: [
          { freq: paused ? 220 : 360, duration: paused ? 0.07 : 0.05, type: paused ? "square" : "triangle", gain: 0.016 },
          { freq: paused ? 150 : 540, duration: 0.05, type: "sine", gain: 0.008 },
        ],
      });
    },
  };
}
