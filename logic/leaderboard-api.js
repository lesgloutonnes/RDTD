export const LEADERBOARD_MAX = 8;

const LEADERBOARD_STORAGE_KEY = "rdtd.leaderboard.v1";
const LEADERBOARD_API_URL = "./api/leaderboard.php";
const MAX_SCORE = 99_999_999;

function sanitizeText(value, fallback, maxLength) {
  const clean = String(value ?? fallback)
    .replace(/[<>"'&]/g, "")
    .trim()
    .slice(0, maxLength);
  return clean || fallback;
}

function sanitizeEntry(incoming) {
  if (!incoming || typeof incoming !== "object") return null;
  const score = Math.floor(Number(incoming.score));
  if (!Number.isFinite(score) || score < 1 || score > MAX_SCORE) return null;

  const dailyKey = String(incoming.dailyKey ?? "").trim();
  const entry = {
    name: sanitizeText(incoming.name, "Anonyme", 18),
    score,
    floor: Math.max(1, Math.min(99, Math.floor(Number(incoming.floor) || 1))),
    wave: Math.max(0, Math.min(999, Math.floor(Number(incoming.wave) || 0))),
    collector: sanitizeText(incoming.collector, "Aucun", 32),
    date: sanitizeText(incoming.date, new Date().toLocaleDateString("fr-BE", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }), 16),
  };

  if (/^\d{8}$/.test(dailyKey)) entry.dailyKey = dailyKey;

  const spire = Math.max(0, Math.min(9, Math.floor(Number(incoming.spire) || 0)));
  if (spire > 0) entry.spire = spire;
  if (Number(incoming.victory) === 1) entry.victory = 1;

  const mutation = sanitizeText(incoming.mutation, "", 32);
  if (mutation) entry.mutation = mutation;

  const deck = sanitizeText(incoming.deck, "", 64);
  if (deck) entry.deck = deck;

  return entry;
}

function todayKey() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function sortBoard(board) {
  return [...board]
    .sort((a, b) => Number(b.score || 0) - Number(a.score || 0))
    .slice(0, LEADERBOARD_MAX);
}

function readLocalBoard() {
  if (typeof localStorage === "undefined") return [];
  const raw = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
  if (!raw) return [];
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) return [];
  return data.map(sanitizeEntry).filter(Boolean);
}

function writeLocalBoard(board) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(sortBoard(board)));
}

function buildPayload(board) {
  const key = todayKey();
  return {
    ok: true,
    source: "local",
    entries: sortBoard(board),
    dailyEntries: sortBoard(board.filter((entry) => entry.dailyKey === key)),
    dailyKey: key,
  };
}

function canUseRemoteLeaderboard() {
  return typeof fetch === "function" && location.protocol !== "file:";
}

function normalizeRemotePayload(payload) {
  if (!payload || payload.ok !== true || !Array.isArray(payload.entries)) {
    return null;
  }
  const dailyKey = /^\d{8}$/.test(String(payload.dailyKey || ""))
    ? String(payload.dailyKey)
    : todayKey();
  const entries = payload.entries.map(sanitizeEntry).filter(Boolean);
  const dailyEntries = Array.isArray(payload.dailyEntries)
    ? payload.dailyEntries.map(sanitizeEntry).filter(Boolean)
    : entries.filter((entry) => entry.dailyKey === dailyKey);
  return {
    ok: true,
    source: "remote",
    entries: sortBoard(entries),
    dailyEntries: sortBoard(dailyEntries),
    dailyKey,
  };
}

async function requestRemoteLeaderboard(options = {}) {
  if (!canUseRemoteLeaderboard()) return null;
  const response = await fetch(LEADERBOARD_API_URL, {
    cache: "no-store",
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    return {
      ok: false,
      error: payload?.error || "network",
      detail: payload?.detail || `HTTP ${response.status}`,
    };
  }
  return normalizeRemotePayload(payload) || { ok: false, error: "invalid_response" };
}

/**
 * Charge le classement partage si l'API PHP est disponible, sinon le classement local.
 * @returns {Promise<{ ok: true, entries: object[], dailyEntries: object[], dailyKey: string } | { ok: false, error: string }>}
 */
export async function fetchLeaderboard() {
  try {
    const remote = await requestRemoteLeaderboard();
    if (remote?.ok) return remote;
  } catch {
    /* fallback local */
  }

  try {
    return buildPayload(readLocalBoard());
  } catch {
    return { ok: false, error: "storage_unavailable" };
  }
}

/**
 * Enregistre une run dans le classement partage, avec fallback local.
 */
export async function submitLeaderboardEntry(entry) {
  const clean = sanitizeEntry(entry);
  if (!clean) return { ok: false, error: "invalid_entry" };

  try {
    const remote = await requestRemoteLeaderboard({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clean),
    });
    if (remote?.ok) return remote;
  } catch {
    /* fallback local */
  }

  try {
    const board = readLocalBoard();
    board.push(clean);
    writeLocalBoard(board);
    return buildPayload(readLocalBoard());
  } catch {
    return { ok: false, error: "storage_unavailable" };
  }
}
