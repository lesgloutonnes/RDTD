/** RNG déterministe (Mulberry32) — usage interne run (carte, events, etc.). */
export function hashSeedString(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0) || 1;
}

export function createSeededRng(seed) {
  let state = typeof seed === "number" ? seed >>> 0 : hashSeedString(String(seed || "RDTD"));
  function rng() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  rng.getState = () => state >>> 0;
  rng.setState = (next) => {
    state = (Number(next) >>> 0) || 1;
  };
  return rng;
}

export function generateShareableSeed() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${part()}${part()}`;
}

export function normalizeSeedInput(raw) {
  const clean = String(raw || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
  return clean || generateShareableSeed();
}
