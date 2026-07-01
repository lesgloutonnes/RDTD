const ERROR_HINTS = {
  storage_unavailable:
    "Le classement partage est indisponible pour le moment. Le jeu utilise le classement local si possible.",
  invalid_entry:
    "Impossible d'enregistrer ce score.",
  network:
    "Impossible de joindre le classement partage. Verifie que l'API PHP est bien envoyee sur le FTP.",
  invalid_response:
    "Le serveur de classement a repondu dans un format inattendu.",
  method_not_allowed:
    "Methode non autorisee par le serveur de classement.",
};

export function formatLeaderboardError(error, detail, esc = escapeHtml) {
  const hint = ERROR_HINTS[error] || ERROR_HINTS.storage_unavailable;
  const detailLine = detail
    ? `<p class="leaderboard-error-detail"><code>${esc(String(detail))}</code></p>`
    : "";
  return `<p class="leaderboard-empty leaderboard-empty--error">${hint}</p>${detailLine}
    <button type="button" class="overlay-btn alt leaderboard-retry-btn" id="leaderboard-retry-btn">Réessayer</button>`;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderLeaderboardTable(board, { escapeHtml: esc = escapeHtml }) {
  if (!board.length) {
    return "<p class='leaderboard-empty'>Aucune run pour l'instant.</p>";
  }
  const medals = ["🥇", "🥈", "🥉"];
  const rows = board.map((entry, i) => {
    const medal = medals[i] || `${i + 1}.`;
    const name = entry.name || "Anonyme";
    const subtitle = formatLeaderboardSubtitle(entry);
    return `<tr>
      <td>${medal}</td>
      <td><strong style="color:#ffe87a">${esc(name)}</strong>${subtitle ? `<br><span class="lb-subtitle">${esc(subtitle)}</span>` : ""}</td>
      <td><strong>${entry.score.toLocaleString()}</strong></td>
      <td>Sol. ${entry.floor}</td>
      <td>V.${entry.wave ?? "—"}</td>
      <td>${esc(entry.collector || "Aucun")}</td>
      <td style="opacity:0.55;font-size:0.72rem">${esc(entry.date || "")}</td>
    </tr>`;
  }).join("");
  return `<table>
    <thead><tr>
      <th>#</th><th>Joueur</th><th>Score</th><th>Etage</th><th>Vague</th><th>Collectionneur</th><th>Date</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

export function formatLeaderboardSubtitle(entry) {
  const parts = [];
  if (entry.victory === 1 || entry.victory === true) {
    parts.push(`Victoire S${entry.spire || "?"}`);
  } else if (entry.spire) {
    parts.push(`Spire ${entry.spire}`);
  }
  if (entry.deck) parts.push(entry.deck);
  if (entry.mutation && entry.mutation !== "Aucune") parts.push(entry.mutation);
  return parts.join(" · ");
}

export function renderLeaderboardPanel({
  loadState,
  globalEntries,
  dailyEntries,
  dailyKey,
  errorCode,
  errorDetail,
  escapeHtml: esc,
}) {
  if (loadState === "loading") {
    return "<p class='leaderboard-empty'>Chargement du classement...</p>";
  }
  if (loadState === "error") {
    return formatLeaderboardError(errorCode, errorDetail, esc || escapeHtml);
  }
  const dailyLabel = dailyKey
    ? `Défi du ${dailyKey.slice(6, 8)}/${dailyKey.slice(4, 6)}`
    : "Défi du jour";
  const tableOpts = { escapeHtml: esc || escapeHtml };
  return `
    <section class="leaderboard-section">
      <h3>Top joueurs</h3>
      <div class="leaderboard-table">${renderLeaderboardTable(globalEntries, tableOpts)}</div>
    </section>
    <section class="leaderboard-section">
      <h3>${dailyLabel}</h3>
      <p class="leaderboard-section-note">Runs partagees jouees avec le defi actif aujourd'hui.</p>
      <div class="leaderboard-table">${renderLeaderboardTable(dailyEntries, tableOpts)}</div>
    </section>`;
}
