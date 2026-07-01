/** Theme principal + ambiance run — motif discret, mixe comme fond d'app moderne. */

export const TITLE_BEAT = 0.78;

export const TITLE_MELODY = [
  [659.25, 2], [587.33, 1], [523.25, 1], [440, 3], [0, 1],
  [523.25, 0.5], [587.33, 1], [659.25, 1.5], [783.99, 1], [659.25, 2], [0, 2],
  [587.33, 1.5], [523.25, 0.5], [440, 1], [523.25, 1], [587.33, 1], [440, 1], [329.63, 1], [0, 1],
  [440, 1], [523.25, 0.5], [587.33, 0.5], [659.25, 2], [523.25, 1], [440, 3],
];

export const TITLE_ARPEGGIO = [
  [220, 0.5], [329.63, 0.5], [440, 0.5], [523.25, 0.5],
  [440, 0.5], [329.63, 0.5], [220, 0.5], [0, 0.5],
  [165, 0.5], [261.63, 0.5], [329.63, 0.5], [440, 0.5],
  [329.63, 0.5], [261.63, 0.5], [165, 0.5], [0, 0.5],
];

const BIOME_TWIST = {
  greenhouse: { pitch: 1, beatMult: 1, melodyMix: 0.075, arpMix: 0.11, padRoot: 110, master: 0.035 },
  swamp: { pitch: 0.94, beatMult: 1.06, melodyMix: 0.06, arpMix: 0.095, padRoot: 98, master: 0.031 },
  hive: { pitch: 1.06, beatMult: 0.94, melodyMix: 0.07, arpMix: 0.12, padRoot: 123, master: 0.033 },
  night: { pitch: 0.87, beatMult: 1.1, melodyMix: 0.045, arpMix: 0.08, padRoot: 87, master: 0.028 },
  heart: { pitch: 0.92, beatMult: 1.04, melodyMix: 0.055, arpMix: 0.09, padRoot: 103, master: 0.03 },
};

const TITLE_MASTER = 0.34;
const TITLE_ARP_MIX = 0.34;
const TITLE_FILTER_HZ = 4200;
const RUN_FILTER_HZ = 1850;
const RUN_MELODY_INDICES = new Set([0, 3, 9, 12, 18, 21, 24]);
const RUN_ARP_INDICES = new Set([0, 4, 8, 12]);
const FADE_SEC = 2.6;

function twistFor(biomeId, spireNumber = 1) {
  const base = BIOME_TWIST[biomeId] || BIOME_TWIST.greenhouse;
  const spirePitch = 1 + (Math.max(1, spireNumber) - 1) * 0.012;
  return { ...base, pitch: base.pitch * spirePitch };
}

function createReverb(ctx) {
  const convolver = ctx.createConvolver();
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * 3.8);
  const buf = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.4);
    }
  }
  convolver.buffer = buf;
  return convolver;
}

export function createRunMusicController({ audio, ensureAudioContext }) {
  let userMusicVolume = typeof audio.musicVolume === "number" ? audio.musicVolume : 1;
  const state = {
    running: false,
    mode: "off",
    biomeId: "greenhouse",
    spireNumber: 1,
    twist: twistFor("greenhouse", 1),
    masterGain: null,
    musicFilter: null,
    melodyGain: null,
    arpeggioGain: null,
    reverbSend: null,
    padOscs: [],
    nodes: [],
    melodyIndex: 0,
    melodyTime: 0,
    arpeggioIndex: 0,
    arpeggioTime: 0,
    schedulerTimer: null,
    beatMult: 1,
    pitchMult: 1,
    LOOKAHEAD: 0.18,
    SCHEDULE_INTERVAL: 30,
  };

  function beatDur(beats) {
    return beats * TITLE_BEAT * state.beatMult;
  }

  function playMelodyNote(ctx, freq, startTime, beats) {
    if (!state.running || freq === 0) return;
    const pitch = state.pitchMult;
    const dur = beatDur(beats);
    const peak = state.mode === "title" ? 0.24 : 0.14;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    const vibLfo = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibLfo.frequency.value = 5.8;
    vibGain.gain.value = freq * pitch * (state.mode === "title" ? 0.004 : 0.002);
    vibLfo.connect(vibGain);
    vibGain.connect(osc.frequency);
    vibLfo.start(startTime + 0.12);
    vibLfo.stop(startTime + dur);
    const atk = 0.09;
    const rel = Math.min(0.55, dur * 0.38);
    env.gain.setValueAtTime(0, startTime);
    env.gain.linearRampToValueAtTime(peak, startTime + atk);
    env.gain.setValueAtTime(peak, startTime + dur - rel);
    env.gain.linearRampToValueAtTime(0, startTime + dur);
    osc.type = "sine";
    osc.frequency.value = freq * pitch;
    osc.connect(env);
    env.connect(state.melodyGain);
    env.connect(state.reverbSend);
    osc.start(startTime);
    osc.stop(startTime + dur + 0.05);
  }

  function playArpNote(ctx, freq, startTime, beats) {
    if (!state.running || freq === 0) return;
    const pitch = state.pitchMult;
    const dur = beatDur(beats);
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq * pitch;
    env.gain.setValueAtTime(0, startTime);
    env.gain.linearRampToValueAtTime(state.mode === "title" ? 0.058 : 0.038, startTime + 0.02);
    env.gain.exponentialRampToValueAtTime(0.001, startTime + dur * 0.9);
    osc.connect(env);
    env.connect(state.arpeggioGain);
    env.connect(state.reverbSend);
    osc.start(startTime);
    osc.stop(startTime + dur);
  }

  function scheduleLoop() {
    if (!state.running || !audio.ctx) return;
    const ctx = audio.ctx;
    const horizon = ctx.currentTime + state.LOOKAHEAD;
    while (state.melodyTime < horizon) {
      const [freq, beats] = TITLE_MELODY[state.melodyIndex];
      if (state.mode === "title" || RUN_MELODY_INDICES.has(state.melodyIndex)) {
        playMelodyNote(ctx, freq, state.melodyTime, beats);
      }
      state.melodyTime += beatDur(beats);
      state.melodyIndex = (state.melodyIndex + 1) % TITLE_MELODY.length;
    }
    while (state.arpeggioTime < horizon) {
      const [freq, beats] = TITLE_ARPEGGIO[state.arpeggioIndex];
      if (state.mode === "title" || RUN_ARP_INDICES.has(state.arpeggioIndex)) {
        playArpNote(ctx, freq, state.arpeggioTime, beats);
      }
      state.arpeggioTime += beatDur(beats);
      state.arpeggioIndex = (state.arpeggioIndex + 1) % TITLE_ARPEGGIO.length;
    }
  }

  function buildPads(ctx, padRoot) {
    const ratios = [1, 1.5, 2, 2.37];
    const amps = [0.024, 0.014, 0.009, 0.006];
    ratios.forEach((ratio, i) => {
      for (let d = 0; d < 2; d += 1) {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = padRoot * ratio;
        osc.detune.value = d === 0 ? -4 : 4;
        const g = ctx.createGain();
        g.gain.value = amps[i];
        osc.connect(g);
        g.connect(state.masterGain);
        g.connect(state.reverbSend);
        osc.start();
        state.padOscs.push({ osc, gain: g, ratio });
        state.nodes.push(osc, g);
      }
    });
  }

  function morphPads(padRoot, fadeSec = FADE_SEC) {
    if (!audio.ctx) return;
    const t = audio.ctx.currentTime;
    state.padOscs.forEach(({ osc, ratio }) => {
      try {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, padRoot * ratio), t + fadeSec);
      } catch { /* ignore */ }
    });
  }

  function applyTwist(twist, fadeSec = FADE_SEC) {
    if (!audio.ctx || !state.masterGain) return;
    const t = audio.ctx.currentTime;
    state.twist = twist;
    state.beatMult = twist.beatMult;
    state.pitchMult = twist.pitch;

    const masterTarget = state.mode === "title" ? TITLE_MASTER : twist.master;
    state.masterGain.gain.linearRampToValueAtTime(masterTarget, t + fadeSec);
    state.melodyGain.gain.linearRampToValueAtTime(
      state.mode === "title" ? 1 : twist.melodyMix,
      t + fadeSec
    );
    state.arpeggioGain.gain.linearRampToValueAtTime(
      state.mode === "title" ? TITLE_ARP_MIX : twist.arpMix,
      t + fadeSec
    );
    if (state.musicFilter) {
      state.musicFilter.frequency.linearRampToValueAtTime(
        state.mode === "title" ? TITLE_FILTER_HZ : RUN_FILTER_HZ,
        t + fadeSec
      );
    }
    morphPads(twist.padRoot, fadeSec);
  }

  function ensureEngine() {
    if (state.running) return;
    ensureAudioContext();
    const ctx = audio.ctx;
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();

    state.running = true;
    state.nodes = [];
    state.padOscs = [];
    state.melodyIndex = 0;
    state.arpeggioIndex = 0;
    state.melodyTime = ctx.currentTime + 0.5;
    state.arpeggioTime = ctx.currentTime + 0.2;

    const userMusicGain = ctx.createGain();
    userMusicGain.gain.value = userMusicVolume;
    userMusicGain.connect(ctx.destination);
    state.userMusicGain = userMusicGain;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    state.masterGain = masterGain;

    const musicFilter = ctx.createBiquadFilter();
    musicFilter.type = "lowpass";
    musicFilter.frequency.value = TITLE_FILTER_HZ;
    musicFilter.Q.value = 0.45;
    masterGain.connect(musicFilter);
    musicFilter.connect(userMusicGain);
    state.musicFilter = musicFilter;

    const reverb = createReverb(ctx);
    reverb.connect(masterGain);
    const reverbSend = ctx.createGain();
    reverbSend.gain.value = 0.16;
    reverbSend.connect(reverb);
    state.reverbSend = reverbSend;

    const melodyGain = ctx.createGain();
    melodyGain.gain.value = 1;
    melodyGain.connect(masterGain);
    state.melodyGain = melodyGain;

    const arpeggioGain = ctx.createGain();
    arpeggioGain.gain.value = TITLE_ARP_MIX;
    arpeggioGain.connect(masterGain);
    state.arpeggioGain = arpeggioGain;

    buildPads(ctx, state.twist.padRoot);

    const lfo = ctx.createOscillator();
    const lfoG = ctx.createGain();
    lfo.frequency.value = 0.06;
    lfoG.gain.value = 0.014;
    lfo.connect(lfoG);
    lfoG.connect(masterGain.gain);
    lfo.start();
    state.nodes.push(lfo, lfoG);

    state.schedulerTimer = setInterval(scheduleLoop, state.SCHEDULE_INTERVAL);
    scheduleLoop();
  }

  return {
    /** Ecran titre — theme complet. */
    startTitle() {
      if (!audio.enabled) return;
      ensureEngine();
      state.mode = "title";
      state.biomeId = "greenhouse";
      state.spireNumber = 1;
      state.twist = twistFor("greenhouse", 1);
      if (audio.ctx) {
        const t = audio.ctx.currentTime;
        state.masterGain.gain.linearRampToValueAtTime(TITLE_MASTER, t + 4.2);
        state.melodyGain.gain.setValueAtTime(1, t);
        state.arpeggioGain.gain.setValueAtTime(TITLE_ARP_MIX, t);
        if (state.musicFilter) state.musicFilter.frequency.setValueAtTime(TITLE_FILTER_HZ, t);
      }
    },

    /** Quitte l'intro sans couper — fondu vers ambiance run. */
    transitionToRun({ biomeId = "greenhouse", spireNumber = 1 } = {}) {
      if (!audio.enabled) return;
      if (!state.running) {
        ensureEngine();
      }
      state.mode = "run";
      state.biomeId = biomeId;
      state.spireNumber = spireNumber;
      applyTwist(twistFor(biomeId, spireNumber), 3.2);
    },

    /** Evolue le theme selon biome / Spire (carte ou combat). */
    setBiomeContext({ biomeId, spireNumber } = {}) {
      if (!audio.enabled || state.mode !== "run" || !state.running) return;
      const nextBiome = biomeId || state.biomeId;
      const nextSpire = spireNumber ?? state.spireNumber;
      if (nextBiome === state.biomeId && nextSpire === state.spireNumber) return;
      state.biomeId = nextBiome;
      state.spireNumber = nextSpire;
      applyTwist(twistFor(nextBiome, nextSpire), 2.8);
    },

    /** Retour ecran titre. */
    transitionToTitle() {
      if (!state.running || !audio.ctx) return;
      state.mode = "title";
      applyTwist(twistFor("greenhouse", 1), 2.5);
      const t = audio.ctx.currentTime;
      state.masterGain.gain.linearRampToValueAtTime(TITLE_MASTER, t + 2.5);
      state.melodyGain.gain.linearRampToValueAtTime(1, t + 2.5);
      state.arpeggioGain.gain.linearRampToValueAtTime(TITLE_ARP_MIX, t + 2.5);
      if (state.musicFilter) state.musicFilter.frequency.linearRampToValueAtTime(TITLE_FILTER_HZ, t + 2.5);
    },

    /** Arret complet (defaite, victoire, son OFF). */
    stop() {
      if (!state.running) return;
      state.running = false;
      state.mode = "off";
      const nodesToStop = [...state.nodes];
      const nodesToDisconnect = [
        state.masterGain,
        state.musicFilter,
        state.reverbSend,
        state.melodyGain,
        state.arpeggioGain,
        state.userMusicGain,
      ];
      const masterGain = state.masterGain;
      const ctx = audio.ctx;
      if (state.schedulerTimer) {
        clearInterval(state.schedulerTimer);
        state.schedulerTimer = null;
      }
      if (masterGain && ctx) {
        const now = ctx.currentTime;
        try {
          masterGain.gain.cancelScheduledValues(now);
          masterGain.gain.setValueAtTime(masterGain.gain.value, now);
          masterGain.gain.linearRampToValueAtTime(0, now + 2);
        } catch { /* ignore */ }
      }
      state.nodes = [];
      state.padOscs = [];
      state.masterGain = null;
      state.musicFilter = null;
      state.reverbSend = null;
      state.melodyGain = null;
      state.arpeggioGain = null;
      state.userMusicGain = null;
      setTimeout(() => {
        nodesToStop.forEach((n) => {
          try { n.stop(); } catch { /* ignore */ }
          try { n.disconnect(); } catch { /* ignore */ }
        });
        nodesToDisconnect.forEach((n) => {
          try { n?.disconnect(); } catch { /* ignore */ }
        });
      }, 2100);
    },

    setMusicVolume(value) {
      userMusicVolume = Math.max(0, Math.min(1, Number(value) || 0));
      audio.musicVolume = userMusicVolume;
      if (state.userMusicGain && audio.ctx) {
        const t = audio.ctx.currentTime;
        state.userMusicGain.gain.cancelScheduledValues(t);
        state.userMusicGain.gain.setValueAtTime(userMusicVolume, t);
      }
    },

    isRunning: () => state.running,
    getMode: () => state.mode,
  };
}

/** Compat ancien import titre. */
export function createTitleMusicController(deps) {
  const ctrl = createRunMusicController(deps);
  return {
    start: () => ctrl.startTitle(),
    stop: () => ctrl.stop(),
  };
}
