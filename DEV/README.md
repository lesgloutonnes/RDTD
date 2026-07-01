# Les Gloutonnes RDTD - outils de développement

Le jeu se lance en standalone par double-clic sur **`index.html`**.

`index.html` charge `standalone.js`, un bundle autonome qui embarque les modules JS et `content/*.json`. Aucun serveur local, npm ou Vite n'est requis.
Le classement partage utilise `api/leaderboard.php` quand le jeu est publie sur un hebergement PHP ; en local, il retombe sur `localStorage`.

## Modifier le jeu

Après une modification JS ou JSON, régénère le bundle :

```powershell
powershell -ExecutionPolicy Bypass -File DEV\scripts\build-standalone.ps1
```

Après une modification CSS (`style.css` ou `theme-gloutonnes.css`), un simple rechargement de `index.html` suffit.

Le classement multi-joueur est stocke dans `data/leaderboard.json` via `api/leaderboard.php`. En local ou sans PHP, le fallback reste `localStorage`.

## Déploiement statique

Voir **`DEPLOY-FTP.txt`** à la racine du projet pour la liste des fichiers à copier si tu veux publier le jeu.

## Fichiers dans DEV/

| Fichier | Rôle |
|---------|------|
| `scripts/build-standalone.ps1` | Génère `standalone.js` pour le mode `index.html` standalone |
| `scripts/optimize-images.ps1` | Optimise les images quand nécessaire |
| `sync_config.jsonc` | Config de synchronisation perso (gitignored) |
