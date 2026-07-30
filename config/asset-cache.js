/** Version de bust cache navigateur (alignée sur content/meta.json → cacheVersion). */
export const EMBEDDED_CACHE_VERSION = "1.0.1";

const isLocalDevHost =
  typeof location !== "undefined" &&
  (location.protocol === "file:" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "localhost");

const localDevBust = isLocalDevHost ? String(Date.now()) : "";

export function getAssetCacheVersion() {
  if (typeof globalThis !== "undefined" && globalThis.__RDTD_CACHE_V__) {
    return String(globalThis.__RDTD_CACHE_V__);
  }
  return EMBEDDED_CACHE_VERSION;
}

/** Ajoute / remplace ?v=… pour invalider le cache navigateur à chaque release. */
export function withAssetCacheBust(src) {
  if (!src || String(src).startsWith("data:")) return src;
  const raw = String(src);
  const base = raw.split("#")[0].split("?")[0];
  const params = new URLSearchParams();
  params.set("v", getAssetCacheVersion());
  if (localDevBust) params.set("dev-cache-bust", localDevBust);
  return `${base}?${params.toString()}`;
}

const CSS_TEXTURE_VARS = [
  ["--tex-noise", "./assets/textures/noise-soft.svg"],
  ["--tex-botanical", "./assets/textures/panel-botanical.svg"],
  ["--tex-weave", "./assets/textures/btn-weave.svg"],
  ["--tex-parchment", "./assets/textures/parchment.svg"],
  ["--tex-wood", "./assets/textures/wood-frame.svg"],
  ["--tex-moss", "./assets/textures/moss-dense.svg"],
  ["--tex-soil", "./assets/textures/soil-path.svg"],
  ["--tex-honey", "./assets/textures/honeycomb.svg"],
  ["--tex-stone", "./assets/textures/stone-cool.svg"],
  ["--tex-ember", "./assets/textures/ember-glow.svg"],
  ["--tex-glass", "./assets/textures/glass-shine.svg"],
  ["--tex-vine", "./assets/textures/vine-trail.svg"],
  ["--tex-mystic", "./assets/textures/mystic-spark.svg"],
  ["--tex-coins", "./assets/textures/coin-scatter.svg"],
];

/** Réécrit les textures CSS avec la version courante (évite d’anciens SVG en cache). */
export function applyCssTextureCacheBust() {
  if (typeof document === "undefined") return;
  const v = getAssetCacheVersion();
  const root = document.documentElement;
  for (const [prop, path] of CSS_TEXTURE_VARS) {
    root.style.setProperty(prop, `url("${path}?v=${encodeURIComponent(v)}")`);
  }
}
