/* Auto-genere par DEV/scripts/build-standalone.ps1. Ne pas modifier a la main. */
(function () {
const modules = Object.create(null);
const cache = Object.create(null);
function define(id, factory) { modules[id] = factory; }
function require(id) {
  if (cache[id]) return cache[id].exports;
  if (!modules[id]) throw new Error('Module introuvable: ' + id);
  const module = cache[id] = { exports: {} };
  modules[id](module.exports, require, module);
  return module.exports;
}
globalThis.__RDTD_STANDALONE_CONTENT__ = {
  version: "1.2.1",
  files: {
    "towers.json": {
  "snapper": {
    "id": "snapper",
    "name": "Dionaea muscipula",
    "family": "snapper",
    "rarity": "Commune",
    "cost": 88,
    "range": 130,
    "fireRate": 1.25,
    "damage": 26,
    "projectileSpeed": 380,
    "color": "#3a8c32",
    "projectileColor": "#9ef08a",
    "soundFreq": 320,
    "portrait": "./assets/towers/snapper.png",
    "desc": "Piège rapide, portée courte. Tour de base.",
    "passive": null,
    "passiveDesc": "Tour de base — aucun passif"
  },
  "spitter": {
    "id": "spitter",
    "name": "Sarracenia flava",
    "family": "spitter",
    "rarity": "Commune",
    "cost": 88,
    "range": 185,
    "fireRate": 2.1,
    "damage": 19,
    "projectileSpeed": 525,
    "color": "#2d7a28",
    "projectileColor": "#b5ff9a",
    "soundFreq": 480,
    "portrait": "./assets/towers/spitter.png",
    "desc": "Tir de sève, cadence élevée, applique poison.",
    "passive": null,
    "passiveDesc": "Poison : 4 DPS (3 s)"
  },
  "thorn": {
    "id": "thorn",
    "name": "Drosera capensis",
    "family": "thorn",
    "rarity": "Commune",
    "cost": 88,
    "range": 200,
    "fireRate": 1.0,
    "damage": 30,
    "projectileSpeed": 420,
    "color": "#3a8c38",
    "projectileColor": "#b8ff90",
    "soundFreq": 355,
    "portrait": "./assets/towers/thorn.png",
    "desc": "Rosette compacte, peu coûteuse. Ses gouttes éclaboussent les proies voisines.",
    "passive": "splash",
    "passiveDesc": "Impact AoE : 50% dégâts dans 55 px"
  },
  "dionaea_b52": {
    "id": "dionaea_b52",
    "name": "Dionaea B-52",
    "family": "snapper",
    "rarity": "Commune",
    "cost": 106,
    "range": 118,
    "fireRate": 0.72,
    "damage": 62,
    "projectileSpeed": 330,
    "color": "#1e4d18",
    "projectileColor": "#7cff6a",
    "soundFreq": 185,
    "portrait": "./assets/towers/dionaea_b52.png",
    "desc": "Piège géant à fermeture brutale. Chaque morsure écrase l'armure.",
    "flavor": "Trop grand pour être discret, trop mortel pour être ignoré.",
    "passive": "armor_shred",
    "passiveDesc": "Morsure : +25% dégâts subis par la cible (3 s)"
  },
  "dionaea_akai_ryu": {
    "id": "dionaea_akai_ryu",
    "name": "Dionaea Akai Ryu",
    "family": "snapper",
    "rarity": "Rare",
    "cost": 130,
    "range": 132,
    "fireRate": 1.1,
    "damage": 32,
    "projectileSpeed": 370,
    "color": "#CC3300",
    "projectileColor": "#FF8C42",
    "soundFreq": 280,
    "portrait": "./assets/towers/dionaea_akai_ryu.png",
    "desc": "Dragon rouge. Ses sucs digestifs brûlent comme de la braise.",
    "flavor": "Seule une brûlure intérieure peut sauver la serre.",
    "passive": "burn",
    "passiveDesc": "Combustion : 10 DPS, cumulable jusqu'à 6 s"
  },
  "dionaea_white_tiger": {
    "id": "dionaea_white_tiger",
    "name": "Dionaea White Tiger",
    "family": "snapper",
    "rarity": "Epique",
    "cost": 168,
    "range": 135,
    "fireRate": 1.78,
    "damage": 21,
    "projectileSpeed": 530,
    "color": "#E8F5D8",
    "projectileColor": "#FFFFFF",
    "soundFreq": 445,
    "portrait": "./assets/towers/dionaea_white_tiger.png",
    "desc": "Albinos variegata. Ses crocs traversent deux cibles d'un coup.",
    "flavor": "Crème et vert en rayures — la blancheur de ses dents n'a d'égal que sa vitesse.",
    "passive": "pierce",
    "passiveDesc": "Projectile traversant : touche 2 ennemis"
  },
  "sarracenia_atlas5": {
    "id": "sarracenia_atlas5",
    "name": "Sarracenia Atlas 5",
    "family": "spitter",
    "rarity": "Rare",
    "cost": 130,
    "range": 232,
    "fireRate": 0.92,
    "damage": 13,
    "projectileSpeed": 490,
    "color": "#3d8c38",
    "projectileColor": "#f4fff8",
    "soundFreq": 525,
    "portrait": "./assets/towers/sarracenia_atlas5.png",
    "desc": "Urne géante au poison concentré. Longue portée, dévastatrice.",
    "flavor": "Certaines plantes n'attaquent pas. Elles empoisonnent le temps.",
    "passive": "heavy_poison",
    "passiveDesc": "Poison lourd : 17 DPS, s'accumule"
  },
  "sarracenia_scarlet_belle": {
    "id": "sarracenia_scarlet_belle",
    "name": "Sarracenia Scarlet Belle",
    "family": "spitter",
    "rarity": "Commune",
    "cost": 106,
    "range": 178,
    "fireRate": 1.65,
    "damage": 17,
    "projectileSpeed": 455,
    "color": "#C42B2B",
    "projectileColor": "#FF9999",
    "soundFreq": 455,
    "portrait": "./assets/towers/sarracenia_scarlet_belle.png",
    "desc": "Nectar rouge qui ralentit considérablement les proies.",
    "flavor": "Sa beauté est un piège. Sa lenteur, une condamnation.",
    "passive": "slow",
    "passiveDesc": "Nectar : ennemis à 68% de vitesse pendant 2,5 s"
  },
  "sarracenia_fureur": {
    "id": "sarracenia_fureur",
    "name": "Sarracenia Fureur Vertueuse",
    "family": "spitter",
    "rarity": "Epique",
    "cost": 168,
    "range": 182,
    "fireRate": 1.4,
    "damage": 19,
    "projectileSpeed": 505,
    "color": "#d4a800",
    "projectileColor": "#ffe566",
    "soundFreq": 475,
    "portrait": "./assets/towers/sarracenia_fureur.png",
    "desc": "Chaque ennemi éliminé attise sa rage. Dévastatrice en fin de vague.",
    "flavor": "Elle comptait les morts depuis le premier jour.",
    "passive": "rage",
    "passiveDesc": "Rage : +7% dégâts/kill, 10 stacks max"
  },
  "drosera_creamsicle": {
    "id": "drosera_creamsicle",
    "name": "Drosera Creamsicle",
    "family": "thorn",
    "rarity": "Rare",
    "cost": 130,
    "range": 205,
    "fireRate": 0.94,
    "damage": 46,
    "projectileSpeed": 395,
    "color": "#E8895E",
    "projectileColor": "#FFD4A0",
    "soundFreq": 315,
    "portrait": "./assets/towers/drosera_creamsicle.png",
    "desc": "Rosette douce-amère. Ses filaments régénèrent les tours voisines.",
    "flavor": "Un soutien inattendu dans une serre en guerre.",
    "passive": "aura_haste",
    "passiveDesc": "Aura : +38% cadence aux tours proches (rayon suit les upgrades de portée)"
  },
  "drosera_regia": {
    "id": "drosera_regia",
    "name": "Drosera regia",
    "family": "thorn",
    "rarity": "Commune",
    "cost": 106,
    "range": 220,
    "fireRate": 0.75,
    "damage": 51,
    "projectileSpeed": 435,
    "color": "#2d6b24",
    "projectileColor": "#afff7a",
    "soundFreq": 250,
    "portrait": "./assets/towers/drosera_regia.png",
    "desc": "Majestueuse et lourde. Gros dégâts, tir lent, longue portée.",
    "flavor": "La reine des rosettes ne négocie pas avec les proies.",
    "passive": null,
    "passiveDesc": "Aucun passif — puissance brute"
  },
  "drosera_scorpioides": {
    "id": "drosera_scorpioides",
    "name": "Drosera scorpioides",
    "family": "thorn",
    "rarity": "Epique",
    "cost": 168,
    "range": 218,
    "fireRate": 0.7,
    "damage": 55,
    "projectileSpeed": 405,
    "color": "#2D5A27",
    "projectileColor": "#7FFF44",
    "soundFreq": 218,
    "portrait": "./assets/towers/drosera_scorpioides.png",
    "desc": "Queue de scorpion. Son poison se propage de proie en proie à la mort.",
    "flavor": "Un seul contact. Une contamination entière.",
    "passive": "chain_poison",
    "passiveDesc": "Poison 14 DPS — mort par poison = propagation à 2 proches"
  }
}
,
    "enemies.json": {
  "crawler": {
    "name": "Chenille vorace",
    "bestiaryDesc": "Larve mutante qui se scinde en deux morceaux encore affamés.",
    "hpMult": 1,
    "speedMult": 1,
    "rewardMult": 1,
    "radius": 12,
    "color": "#5f3120",
    "abilities": ["split_on_death"],
    "spawnMinFloor": 0,
    "spawnWeight": 1
  },
  "beetle": {
    "name": "Scarabée blindé",
    "bestiaryDesc": "Carapace épaisse : les premiers impacts sont presque absorbés.",
    "hpMult": 1.7,
    "speedMult": 0.76,
    "rewardMult": 1.6,
    "radius": 14,
    "color": "#46352a",
    "abilities": ["spawn_shield"],
    "spawnMinFloor": 2,
    "spawnWeight": 0.3
  },
  "wasp": {
    "name": "Guêpe de serre",
    "bestiaryDesc": "Rapide et nerveuse : alterne phases de vol et ruées soudaines.",
    "hpMult": 0.7,
    "speedMult": 1.34,
    "rewardMult": 1.15,
    "radius": 10,
    "color": "#7a2f1a",
    "abilities": ["dash"],
    "spawnMinFloor": 1,
    "spawnWeight": 0.24
  },
  "slug": {
    "name": "Limace géante",
    "bestiaryDesc": "Lente mais visqueuse : sa mucus réduit les dégâts reçus.",
    "hpMult": 1.45,
    "speedMult": 0.55,
    "rewardMult": 1.35,
    "radius": 13,
    "color": "#5a7a48",
    "abilities": ["mucus"],
    "spawnMinFloor": 2,
    "spawnWeight": 0.32
  },
  "snail": {
    "name": "Escargot cuirassé",
    "bestiaryDesc": "Avance péniblement mais régénère sa coquille au fil du temps.",
    "hpMult": 2.1,
    "speedMult": 0.48,
    "rewardMult": 1.75,
    "radius": 15,
    "color": "#6a5a4a",
    "abilities": ["regen"],
    "spawnMinFloor": 3,
    "spawnWeight": 0.28
  },
  "hornet": {
    "name": "Frelon asiatique",
    "bestiaryDesc": "Prédateur apex des Spires hautes : ruées dévastatrices et récompense élevée.",
    "hpMult": 0.95,
    "speedMult": 1.48,
    "rewardMult": 1.85,
    "radius": 11,
    "color": "#c47820",
    "abilities": ["dash", "sting"],
    "spawnMinFloor": 5,
    "spawnMinSpire": 2,
    "spawnWeight": 0.18
  },
  "boss": {
    "name": "Colosse ravageur",
    "bestiaryDesc": "Boss d'étage : phases multiples, renforts et bouclier tactique.",
    "hpMult": 6.1,
    "speedMult": 0.65,
    "rewardMult": 7.5,
    "radius": 22,
    "color": "#2f1f19",
    "spawnMinFloor": 99
  }
}
,
    "cards.json": [
  {
    "id": "fertile_winds",
    "name": "Vents Fertiles",
    "desc": "+10% cadence globale par exemplaire.",
    "rarity": "Commune",
    "stackable": true,
    "maxStack": 3,
    "effectId": "fertile_winds"
  },
  {
    "id": "acid_sap",
    "name": "Urne Corrosive",
    "desc": "Ligne Sarracenia : +6 DPS poison.",
    "rarity": "Rare",
    "towerFamily": "spitter",
    "effectId": "acid_sap"
  },
  {
    "id": "apex_jaws",
    "name": "Piège Apex",
    "desc": "Ligne Dionaea : +26% dégâts.",
    "rarity": "Rare",
    "towerFamily": "snapper",
    "effectId": "apex_jaws"
  },
  {
    "id": "thorn_lord",
    "name": "Rosette Royale",
    "desc": "Ligne Drosera : +18% dégâts, +16 portée.",
    "rarity": "Rare",
    "towerFamily": "thorn",
    "effectId": "thorn_lord"
  },
  {
    "id": "long_tendrils",
    "name": "Longs Tentacules",
    "desc": "+14 de portée pour toutes les tours.",
    "rarity": "Commune",
    "effectId": "long_tendrils"
  },
  {
    "id": "sun_contract",
    "name": "Contrat Solaire",
    "desc": "+75 soleil instantané, +7% prime.",
    "rarity": "Rare",
    "effectId": "sun_contract"
  },
  {
    "id": "spore_reactor",
    "name": "Réacteur de Spores",
    "desc": "+10% dégâts globaux.",
    "rarity": "Commune",
    "effectId": "spore_reactor"
  },
  {
    "id": "hyper_resin",
    "name": "Hyper Résine",
    "desc": "+15% vitesse projectile.",
    "rarity": "Commune",
    "effectId": "hyper_resin"
  },
  {
    "id": "temporal_moss",
    "name": "Mousse Temporelle",
    "desc": "+1 utilisation Engrais / Racines par vague.",
    "rarity": "Rare",
    "effectId": "temporal_moss"
  },
  {
    "id": "overgrowth",
    "name": "Surcharge Verte",
    "desc": "Engrais Boost dure +1,8 s.",
    "rarity": "Rare",
    "effectId": "overgrowth"
  },
  {
    "id": "deep_roots",
    "name": "Racines Profondes",
    "desc": "Racines Piège dure +1,5 s.",
    "rarity": "Commune",
    "effectId": "deep_roots"
  },
  {
    "id": "critical_nectar",
    "name": "Nectar Critique",
    "desc": "+7% chance critique par exemplaire.",
    "rarity": "Epique",
    "stackable": true,
    "maxStack": 3,
    "effectId": "critical_nectar"
  },
  {
    "id": "predator_instinct",
    "name": "Instinct Prédateur",
    "desc": "+5% dégâts et +3% cadence.",
    "rarity": "Epique",
    "stackable": true,
    "maxStack": 3,
    "effectId": "predator_instinct"
  },
  {
    "id": "b52_mastication",
    "name": "B-52 : Mastication",
    "desc": "B-52 : marque fragile +2 s, +18% dégâts B-52.",
    "rarity": "Rare",
    "towerCard": "dionaea_b52",
    "effectId": "b52_mastication"
  },
  {
    "id": "ryu_embrase",
    "name": "Ryu : Combustion",
    "desc": "Akai Ryu : brûlure +3 DPS et se propage à 1 ennemi adjacent.",
    "rarity": "Rare",
    "towerCard": "dionaea_akai_ryu",
    "effectId": "ryu_embrase"
  },
  {
    "id": "tiger_fangs",
    "name": "White Tiger : Crocs Triples",
    "desc": "White Tiger traverse 3 cibles au lieu de 2.",
    "rarity": "Epique",
    "towerCard": "dionaea_white_tiger",
    "effectId": "tiger_fangs"
  },
  {
    "id": "atlas_corrosif",
    "name": "Atlas : Poison Corrosif",
    "desc": "Atlas 5 : +8 DPS poison supplémentaire.",
    "rarity": "Rare",
    "towerCard": "sarracenia_atlas5",
    "effectId": "atlas_corrosif"
  },
  {
    "id": "belle_entrave",
    "name": "Belle : Entrave Profonde",
    "desc": "Scarlet Belle : ennemis à 56% de vitesse.",
    "rarity": "Commune",
    "towerCard": "sarracenia_scarlet_belle",
    "effectId": "belle_entrave"
  },
  {
    "id": "fureur_ardente",
    "name": "Fureur : Ardeur Infernale",
    "desc": "Fureur Vertueuse : +3 stacks de rage max (13 total).",
    "rarity": "Epique",
    "towerCard": "sarracenia_fureur",
    "effectId": "fureur_ardente"
  },
  {
    "id": "creamsicle_nectar",
    "name": "Creamsicle : Nectar Vital",
    "desc": "Creamsicle : aura +14 px de rayon (hâte voisins).",
    "rarity": "Rare",
    "towerCard": "drosera_creamsicle",
    "effectId": "creamsicle_nectar"
  },
  {
    "id": "capensis_explosion",
    "name": "Capensis : Éclaboussure",
    "desc": "Capensis : AoE splash +20 px de rayon.",
    "rarity": "Commune",
    "towerCard": "thorn",
    "effectId": "capensis_explosion"
  },
  {
    "id": "scorpioides_chaine",
    "name": "Scorpioides : Chaîne",
    "desc": "Scorpioides : poison se propage à 3 ennemis au lieu de 2.",
    "rarity": "Epique",
    "towerCard": "drosera_scorpioides",
    "effectId": "scorpioides_chaine"
  },
  {
    "id": "gale_folie",
    "name": "Sève Acérée",
    "desc": "+8% dégâts des coups critiques par exemplaire.",
    "rarity": "Commune",
    "stackable": true,
    "maxStack": 3,
    "effectId": "gale_folie"
  },
  {
    "id": "resin_trap",
    "name": "Résine Collante",
    "desc": "Racines Piège dure +1 s.",
    "rarity": "Commune",
    "effectId": "resin_trap"
  },
  {
    "id": "solar_lens",
    "name": "Lentille Solaire",
    "desc": "+10 de portée globale.",
    "rarity": "Rare",
    "effectId": "solar_lens"
  },
  {
    "id": "beast_hunter",
    "name": "Chasseur de Ravageurs",
    "desc": "+8% prime sur les kills.",
    "rarity": "Rare",
    "effectId": "beast_hunter"
  },
  {
    "id": "venom_spread",
    "name": "Spores Venimeuses",
    "desc": "Ligne Sarracenia : +3 DPS poison.",
    "rarity": "Commune",
    "towerFamily": "spitter",
    "effectId": "venom_spread"
  },
  {
    "id": "thorn_wall",
    "name": "Mur d'Épines",
    "desc": "Ligne Drosera : +12% dégâts.",
    "rarity": "Commune",
    "towerFamily": "thorn",
    "effectId": "thorn_wall"
  },
  {
    "id": "snapper_bite",
    "name": "Morsure Apex",
    "desc": "Ligne Dionaea : +12% dégâts.",
    "rarity": "Commune",
    "towerFamily": "snapper",
    "effectId": "snapper_bite"
  },
  {
    "id": "moss_armor",
    "name": "Mousse Protectrice",
    "desc": "+2 vies max.",
    "rarity": "Rare",
    "effectId": "moss_armor"
  },
  {
    "id": "flare_bloom",
    "name": "Floraison Éclatante",
    "desc": "+4% dégâts et +4% cadence.",
    "rarity": "Epique",
    "stackable": true,
    "maxStack": 3,
    "effectId": "flare_bloom"
  }
]
,
    "relics.json": [
  {
    "id": "sun_idol",
    "name": "Idole Solaire",
    "desc": "+12% prime sur tous les ennemis.",
    "effectId": "sun_idol"
  },
  {
    "id": "venom_gland",
    "name": "Glande Venimeuse",
    "desc": "Ligne Sarracenia : +4 DPS poison.",
    "effectId": "venom_gland"
  },
  {
    "id": "titan_bark",
    "name": "Écorce Titan",
    "desc": "+3 vies max et soigne 50% des vies max.",
    "effectId": "titan_bark"
  },
  {
    "id": "pulse_root",
    "name": "Racine Pulsante",
    "desc": "+1 utilisation Engrais / Racines par vague.",
    "effectId": "pulse_root"
  },
  {
    "id": "thorn_crown",
    "name": "Couronne d'Épines",
    "desc": "Ligne Drosera : +18% dégâts.",
    "effectId": "thorn_crown"
  },
  {
    "id": "amber_seed",
    "name": "Graine d'Ambre",
    "desc": "+8% cadence globale.",
    "effectId": "amber_seed"
  },
  {
    "id": "moss_cloak",
    "name": "Cape de Mousse",
    "desc": "Ennemis -6% vitesse à l'apparition.",
    "effectId": "moss_cloak"
  },
  {
    "id": "fang_relic",
    "name": "Croc Fossile",
    "desc": "Ligne Dionaea : +12% dégâts.",
    "effectId": "fang_relic"
  },
  {
    "id": "bloom_chalice",
    "name": "Calice Florissant",
    "desc": "+1 vie à chaque vague terminée.",
    "effectId": "bloom_chalice"
  },
  {
    "id": "spore_satchel",
    "name": "Sacoche de Spores",
    "desc": "+8% dégâts globaux.",
    "effectId": "spore_satchel"
  },
  {
    "id": "honey_lens",
    "name": "Lentille de Miel",
    "desc": "+10 de portée globale.",
    "effectId": "honey_lens"
  },
  {
    "id": "night_bell",
    "name": "Cloche Nocturne",
    "desc": "+5% chance critique.",
    "effectId": "night_bell"
  },
  {
    "id": "cursed_amber",
    "name": "Ambre maudit",
    "desc": "+15% prime soleil, mais -1 vie max.",
    "effectId": "cursed_amber"
  },
  {
    "id": "frenzied_spores",
    "name": "Spores frénétiques",
    "desc": "+8% cadence globale, ennemis +4% vitesse.",
    "effectId": "frenzied_spores"
  },
  {
    "id": "hollow_nectar",
    "name": "Nectar creux",
    "desc": "+60 soleil immédiat, -2 vies actuelles.",
    "effectId": "hollow_nectar"
  }
]
,
    "biomes.json": [
  {
    "id": "greenhouse",
    "name": "Serre Moussue",
    "bg": [
      "#a7d784",
      "#78b75b",
      "#4f8d40"
    ],
    "grass": [
      "#80bd5c",
      "#3f7b37",
      "#d2ef93"
    ],
    "dirt": [
      "#ddc493",
      "#9e7d52",
      "#f2dfb2"
    ],
    "fog": 0.1,
    "rain": 0.26,
    "hp": 1,
    "speed": 1,
    "reward": 1,
    "towerRange": 0,
    "towerFireRate": 1
  },
  {
    "id": "swamp",
    "name": "Marais Acide",
    "bg": [
      "#88b96d",
      "#4f8a55",
      "#335b38"
    ],
    "grass": [
      "#5f9856",
      "#2f6237",
      "#b8d077"
    ],
    "dirt": [
      "#9c8154",
      "#5f543b",
      "#d2b36f"
    ],
    "fog": 0.22,
    "rain": 0.42,
    "hp": 1.08,
    "speed": 0.95,
    "reward": 1.12,
    "towerRange": -6,
    "towerFireRate": 1
  },
  {
    "id": "hive",
    "name": "Ruche Florale",
    "bg": [
      "#c7b85e",
      "#8fa94f",
      "#5c7035"
    ],
    "grass": [
      "#a4ae4d",
      "#676f2f",
      "#f1d875"
    ],
    "dirt": [
      "#d0a65d",
      "#9a693d",
      "#ffd487"
    ],
    "fog": 0.08,
    "rain": 0.16,
    "hp": 0.96,
    "speed": 1.14,
    "reward": 1.08,
    "towerRange": 4,
    "towerFireRate": 1.04
  },
  {
    "id": "night",
    "name": "Sous-bois Nocturne",
    "bg": [
      "#6f93a0",
      "#41636e",
      "#263b48"
    ],
    "grass": [
      "#527b76",
      "#244e4c",
      "#a9d2cf"
    ],
    "dirt": [
      "#89745e",
      "#50443a",
      "#cdb49a"
    ],
    "fog": 0.28,
    "rain": 0.22,
    "hp": 1.18,
    "speed": 1,
    "reward": 1.2,
    "towerRange": 10,
    "towerFireRate": 0.96
  },
  {
    "id": "heart",
    "name": "Coeur Carnivore",
    "bg": [
      "#a76574",
      "#68425a",
      "#2b2132"
    ],
    "grass": [
      "#7b4d67",
      "#38283f",
      "#d49cb0"
    ],
    "dirt": [
      "#9c6a58",
      "#5f3940",
      "#d49b83"
    ],
    "fog": 0.34,
    "rain": 0.1,
    "hp": 1.28,
    "speed": 1.08,
    "reward": 1.35,
    "towerRange": 0,
    "towerFireRate": 1.06
  }
],
    "collectors.json": [
  {
    "id": "herbier",
    "name": "Charles",
    "portrait": "./assets/collectors/charles-herbier.png?v=collectors-png-v2",
    "title": "Chasseur d'Insectes",
    "power": "Ligne Dionaea : +8% dégâts. Soleil des kills +8%.",
    "flavor": "Un style agressif, économie forte et pièges léthaux.",
    "ultimateId": "herbier_burst",
    "ultimateName": "Chasse au nectar",
    "ultimateDesc": "1× par Spire : +120 soleil immédiatement."
  },
  {
    "id": "distiller",
    "name": "Mayeu",
    "portrait": "./assets/collectors/mayeu-distiller.png?v=collectors-png-v2",
    "title": "Distillateur de Nectar",
    "power": "Ligne Sarracenia : +8% dégâts. +1 Engrais/Racines par vague.",
    "flavor": "Contrôle, poison et pouvoirs actifs.",
    "ultimateId": "distiller_burst",
    "ultimateName": "Distillation d'urgence",
    "ultimateDesc": "1× par Spire : Engrais et Racines actifs."
  },
  {
    "id": "gardien",
    "name": "Chris",
    "portrait": "./assets/collectors/chris-gardien.png?v=collectors-png-v2",
    "title": "Gardien de l'Herbier",
    "power": "Ligne Drosera : +8% dégâts. Ralentissements +10%.",
    "flavor": "Drosera lourde, ennemis ralentis.",
    "ultimateId": "gardien_burst",
    "ultimateName": "Sève vitale",
    "ultimateDesc": "1× par Spire : +45% vies, gel carte 4,5 s."
  }
]


,
    "encounters.json": {
  "elite": {
    "title": "Ravageur Elite",
    "intro": "Carapace renforcee et escorte de scarabees.",
    "armorMult": 0.92,
    "regenPerSec": 1.8,
    "extraBeetles": 2
  },
  "boss": {
    "title": "Alpha de la Serre",
    "intro": "Le chef mutant approche. Surveille ses phases.",
    "phases": [
      { "hpRatio": 1, "speedMult": 1, "label": "Phase 1" },
      {
        "hpRatio": 0.55,
        "speedMult": 1.12,
        "shieldSeconds": 2,
        "spawnAdds": ["crawler", "crawler"],
        "label": "Phase 2"
      },
      { "hpRatio": 0.25, "speedMult": 1.22, "label": "Phase 3 — Enrage" }
    ]
  },
  "bossByBiome": {
    "greenhouse": {
      "title": "Alpha de la Serre",
      "intro": "Le tyran des serres moussues deploie ses racines.",
      "phases": [
        { "hpRatio": 1, "speedMult": 1, "label": "Phase 1 — Racines" },
        {
          "hpRatio": 0.55,
          "speedMult": 1.1,
          "shieldSeconds": 2,
          "spawnAdds": ["crawler", "crawler"],
          "label": "Phase 2 — Germination"
        },
        { "hpRatio": 0.25, "speedMult": 1.2, "label": "Phase 3 — Surpuissance" }
      ]
    },
    "swamp": {
      "title": "Seigneur des Marais",
      "intro": "Un colosse visqueux emerge de l'eau acide.",
      "phases": [
        { "hpRatio": 1, "speedMult": 0.92, "label": "Phase 1 — Vase" },
        {
          "hpRatio": 0.58,
          "speedMult": 1.05,
          "shieldSeconds": 2.4,
          "spawnAdds": ["beetle", "crawler"],
          "label": "Phase 2 — Maree toxique"
        },
        { "hpRatio": 0.28, "speedMult": 1.15, "label": "Phase 3 — Corrosion" }
      ]
    },
    "hive": {
      "title": "Reine des Essaims",
      "intro": "Le bourdonnement devient assourdissant.",
      "phases": [
        { "hpRatio": 1, "speedMult": 1.08, "label": "Phase 1 — Essaim" },
        {
          "hpRatio": 0.56,
          "speedMult": 1.18,
          "spawnAdds": ["wasp", "wasp"],
          "label": "Phase 2 — Nuée"
        },
        { "hpRatio": 0.26, "speedMult": 1.28, "label": "Phase 3 — Frénésie" }
      ]
    },
    "night": {
      "title": "Ombre du Sous-bois",
      "intro": "Une silhouette nocturne rôde entre les fougeres.",
      "phases": [
        { "hpRatio": 1, "speedMult": 1.05, "label": "Phase 1 — Veille" },
        {
          "hpRatio": 0.54,
          "speedMult": 1.14,
          "shieldSeconds": 1.8,
          "spawnAdds": ["wasp", "crawler"],
          "label": "Phase 2 — Chasse"
        },
        { "hpRatio": 0.24, "speedMult": 1.3, "label": "Phase 3 — Predation" }
      ]
    },
    "heart": {
      "title": "Coeur Carnivore",
      "intro": "Le noyau pulsant de la serre bat une derniere fois.",
      "phases": [
        { "hpRatio": 1, "speedMult": 0.98, "label": "Phase 1 — Pulsation" },
        {
          "hpRatio": 0.52,
          "speedMult": 1.1,
          "shieldSeconds": 2.6,
          "spawnAdds": ["beetle", "beetle", "crawler"],
          "label": "Phase 2 — Hemorragie"
        },
        { "hpRatio": 0.22, "speedMult": 1.25, "label": "Phase 3 — Extinction" }
      ]
    }
  }
}
,
    "onboarding.json": {
  "version": 2,
  "steps": [
    {
      "id": "welcome",
      "screen": "title",
      "title": "Bienvenue",
      "text": "Choisis ton pseudo puis entre dans la serre.",
      "target": "#title-input-wrap"
    },
    {
      "id": "collector",
      "screen": "collector",
      "title": "Collectionneur",
      "text": "Chaque Collectionneur modifie toute la run et possede un ultime (1× par Spire), affiche sur sa carte.",
      "target": "#collector-overlay"
    },
    {
      "id": "tower-draft",
      "screen": "towerDraft",
      "title": "Deck de tours",
      "text": "Selectionne 3 varietes complementaires.",
      "target": "#tower-draft-overlay"
    },
    {
      "id": "mutation",
      "screen": "mutation",
      "title": "Mutation de run",
      "text": "Un seul modificateur pour toute la campagne — ou une serre standard sans malus.",
      "target": "#mutation-overlay"
    },
    {
      "id": "map",
      "screen": "map",
      "title": "Carte",
      "text": "Choisis un couloir adjacent. Apres un carrefour, tous les couloirs se rouvrent.",
      "target": "#map-overlay"
    },
    {
      "id": "place",
      "screen": "playing",
      "title": "Plantation",
      "text": "Clique une plante puis un emplacement vert.",
      "target": "#action-towers"
    },
    {
      "id": "wave",
      "screen": "wave",
      "title": "Vague",
      "text": "Lance la vague quand ta defense est prete (Espace).",
      "target": "#start-wave"
    }
  ],
  "contextHints": [
    {
      "id": "elite_first",
      "kicker": "Combat spécial",
      "title": "Nœud Élite",
      "text": "Vague renforcée et mécanique unique. Victoire : carte au choix + relique garantie.",
      "target": "#start-wave"
    },
    {
      "id": "boss_first",
      "kicker": "Combat spécial",
      "title": "Boss d'étage",
      "text": "Le boss a des phases, appelle des renforts et peut activer un bouclier. Prépare ta défense avant de lancer.",
      "target": "#start-wave"
    },
    {
      "id": "crossroads_first",
      "kicker": "Carte",
      "title": "Carrefour des lianes",
      "text": "Les trois couloirs fusionnent : choisis soleil ou carte. À l'étage suivant, tous les couloirs redeviennent accessibles.",
      "target": "#crossroads-overlay"
    },
    {
      "id": "spire_transition_first",
      "kicker": "Campagne",
      "title": "Spire terminée",
      "text": "Tu gardes deck, reliques et bestiaire. Le plateau et le soleil repartent au budget de la nouvelle Spire ; l'excédent devient du score.",
      "target": "#node-result-overlay"
    },
    {
      "id": "boss_half_hp",
      "kicker": "Boss",
      "title": "Phase d'urgence",
      "text": "Le boss passe sous 50 % PV : choisis une carte d'urgence. Son effet dure le reste de la vague.",
      "target": "#boss-card-overlay"
    },
    {
      "id": "draft_first",
      "kicker": "Progression",
      "title": "Draft de carte",
      "text": "Après un combat, ajoute une amélioration à ton deck. Les synergies se débloquent par familles de cartes.",
      "target": "#draft-overlay"
    },
    {
      "id": "shop_first",
      "kicker": "Carte",
      "title": "Boutique",
      "text": "Dépense ton soleil pour carte, relique ou soin. Tu peux quitter sans acheter.",
      "target": "#shop-overlay"
    },
    {
      "id": "rest_first",
      "kicker": "Carte",
      "title": "Repos",
      "text": "Pas de combat : récupère une partie de tes vies max pour stabiliser la run.",
      "target": "#node-result-overlay"
    },
    {
      "id": "event_first",
      "kicker": "Carte",
      "title": "Événement",
      "text": "Pas de combat : deux (ou quatre) choix narratifs avec des récompenses différentes.",
      "target": "#event-overlay"
    },
    {
      "id": "bestiary_first",
      "kicker": "Run",
      "title": "Bestiaire",
      "text": "Chaque nouveau type de proie abattu une première fois donne +2 % dégâts (max 5 types par run).",
      "target": "#run-tab-bestiary"
    },
    {
      "id": "spire_2_intro",
      "kicker": "Spire 2",
      "title": "Nouvelle Spire",
      "text": "Nouveau terrain à plusieurs voies. Les limaces et frelons peuvent apparaître.",
      "target": "#map-overlay",
      "when": { "spireNumber": 2, "floor": 0 }
    },
    {
      "id": "spire_3_intro",
      "kicker": "Spire 3",
      "title": "Nouvelle Spire",
      "text": "Trois couloirs indépendants : surveille chaque entrée.",
      "target": "#map-overlay",
      "when": { "spireNumber": 3, "floor": 0 }
    },
    {
      "id": "spire_4_intro",
      "kicker": "Spire 4",
      "title": "Nouvelle Spire",
      "text": "Quatre voies en même temps : couvre toute la largeur de la serre.",
      "target": "#map-overlay",
      "when": { "spireNumber": 4, "floor": 0 }
    },
    {
      "id": "spire_5_intro",
      "kicker": "Spire 5 — finale",
      "title": "Dernière Spire",
      "text": "Cinq voies en dents de scie. Vaincs le boss final pour remporter la campagne.",
      "target": "#map-overlay",
      "when": { "spireNumber": 5, "floor": 0 }
    }
  ]
}
,
    "tooltips.json": {
  "tags": {
    "poison": "Empile des dégâts sur la durée",
    "burn": "Dégâts de feu",
    "slow": "Réduit la vitesse",
    "pierce": "Traverse plusieurs cibles"
  },
  "nodes": {
    "elite": "Combat difficile — relique garantie",
    "boss": "Boss final de l'étage",
    "rest": "Récupère des vies",
    "shop": "Dépense ton soleil",
    "crossroads": "Fusion des couloirs — soleil ou carte garantie"
  }
}
,
    "map.json": {
  "pool": [
    "combat",
    "combat",
    "event",
    "rest",
    "shop",
    "elite"
  ]
},
    "map-lanes.json": {
  "lanes": [
    {
      "id": 0,
      "label": "Couloir 1 — Serenite",
      "hint": "Events uniques et repos frequents.",
      "weights": { "rest": 4, "event": 5, "combat": 1, "shop": 1 },
      "eventLaneTag": "serenity",
      "eventUniqueBias": 0.55
    },
    {
      "id": 1,
      "label": "Couloir 2 — Equilibre",
      "hint": "Combat et boutique equilibres.",
      "weights": { "combat": 4, "shop": 3, "elite": 1, "event": 1, "rest": 1 }
    },
    {
      "id": 2,
      "label": "Couloir 3 — Chasse",
      "hint": "Elites, ennemis robustes, modificateur de vague garanti.",
      "weights": { "elite": 3, "combat": 3, "shop": 1 },
      "encounterHpMult": 1.08,
      "guaranteedWaveModifier": true
    }
  ],
  "crossroads": {
    "minFloor": 2,
    "maxFloorOffset": 3,
    "goldReward": 85
  }
}
,
    "mutations.json": [
  {
    "id": "predator_rush",
    "name": "Ruée des proies",
    "desc": "Ennemis +10% vitesse. Cartes en boutique -15 soleil.",
    "enemySpeedMult": 1.1,
    "shopCardDiscount": 15
  },
  {
    "id": "glass_spires",
    "name": "Serres fragiles",
    "desc": "-2 vies max. Tours +12% dégâts.",
    "maxLivesBonus": -2,
    "towerDamageMult": 1.12
  },
  {
    "id": "nectar_flow",
    "name": "Flux de nectar",
    "desc": "+18% soleil (kills et fin de vague). Ennemis +8% PV.",
    "rewardMult": 1.18,
    "enemyHpMult": 1.08
  }
]
,
    "wave-modifiers.json": [
  {
    "id": "acid_rain",
    "name": "Pluie acide",
    "desc": "Tous les ennemis arrivent empoisonnés (2,5 DPS).",
    "spawnPoisonDps": 2.5,
    "spawnPoisonTime": 4
  },
  {
    "id": "swarm",
    "name": "Essaim",
    "desc": "+25% d'ennemis, -12% PV par ennemi.",
    "countMult": 1.25,
    "hpMult": 0.88
  },
  {
    "id": "armor_plating",
    "name": "Blindage",
    "desc": "Élites et boss : armure renforcée (-25% dégâts subis).",
    "eliteArmorMult": 0.75,
    "eliteOnly": true
  },
  {
    "id": "spore_mist",
    "name": "Brume de spores",
    "desc": "Tours -6% cadence. Ennemis -8% PV.",
    "towerFireRateMult": 0.94,
    "hpMult": 0.92
  }
]
,
    "node-objectives.json": [
  {
    "id": "no_leak",
    "name": "Aucune fuite",
    "desc": "Aucun ennemi ne traverse la ligne.",
    "rewardGold": 40,
    "rewardCard": false
  },
  {
    "id": "fast_clear",
    "name": "Assaut rapide",
    "desc": "Terminer la vague en moins de 45 secondes.",
    "timeLimitSec": 45,
    "rewardGold": 28,
    "rewardCard": true
  },
  {
    "id": "max_one_leak",
    "name": "Defense serree",
    "desc": "Maximum 1 fuite autorisee.",
    "maxLeaks": 1,
    "rewardGold": 32,
    "rewardCard": false
  },
  {
    "id": "kill_rush",
    "name": "Chasse efficace",
    "desc": "Eliminer au moins 15 ennemis.",
    "minKills": 15,
    "rewardGold": 35,
    "rewardCard": true
  },
  {
    "id": "family_snapper",
    "name": "Mâchoires dominantes",
    "desc": "60% des degats infliges par la ligne Dionaea.",
    "familyId": "snapper",
    "damageShare": 0.6,
    "rewardGold": 38,
    "rewardCard": true
  },
  {
    "id": "family_spitter",
    "name": "Sève decisive",
    "desc": "60% des degats infliges par la ligne Sarracenia.",
    "familyId": "spitter",
    "damageShare": 0.6,
    "rewardGold": 38,
    "rewardCard": false
  },
  {
    "id": "gold_rush",
    "name": "Moisson solaire",
    "desc": "Gagner au moins 45 soleil pendant la vague (kills).",
    "minGoldEarned": 45,
    "rewardGold": 25,
    "rewardCard": false
  }
]
,
    "boss-temp-cards.json": [
  {
    "id": "overcharge_sap",
    "name": "Sève surchargée",
    "desc": "Cette vague : +28% dégâts globaux.",
    "effectId": "boss_temp_damage"
  },
  {
    "id": "root_lash",
    "name": "Fouet racinaire",
    "desc": "Cette vague : ennemis ralentis de 42% pendant 6,5 s au choix.",
    "effectId": "boss_temp_snare"
  },
  {
    "id": "solar_flare",
    "name": "Éruption solaire",
    "desc": "Cette vague : +45 soleil si victoire.",
    "effectId": "boss_temp_gold"
  },
  {
    "id": "venom_burst",
    "name": "Rafale venimeuse",
    "desc": "Cette vague : poison global +4 DPS.",
    "effectId": "boss_temp_poison"
  },
  {
    "id": "photosynth_surge",
    "name": "Photosynthèse forcée",
    "desc": "Cette vague : +18% cadence de tir.",
    "effectId": "boss_temp_fire_rate"
  },
  {
    "id": "nectar_focus",
    "name": "Focus de nectar",
    "desc": "Cette vague : +12% chance de critique.",
    "effectId": "boss_temp_crit"
  },
  {
    "id": "tendril_reach",
    "name": "Tentacules étendus",
    "desc": "Cette vague : +14% portée des tours.",
    "effectId": "boss_temp_range"
  },
  {
    "id": "sap_balm",
    "name": "Baume de sève",
    "desc": "Cette vague : +2 vies si victoire.",
    "effectId": "boss_temp_heal"
  },
  {
    "id": "thorn_storm",
    "name": "Tempête d'épines",
    "desc": "Cette vague : ligne Drosera +30% dégâts.",
    "effectId": "boss_temp_thorn"
  },
  {
    "id": "jaws_unleashed",
    "name": "Mâchoires déchaînées",
    "desc": "Cette vague : ligne Dionaea +30% dégâts.",
    "effectId": "boss_temp_snapper"
  }
]
,
    "deck-synergies.json": {
  "families": [
    {
      "id": "snapper",
      "label": "Mâchoires",
      "tiers": [
        { "minCards": 2, "snapperDamage": 1.06, "desc": "2+ cartes Mâchoires : Dionaea +6% dégâts" },
        { "minCards": 4, "snapperDamage": 1.12, "globalFireRate": 1.04, "desc": "4+ cartes : +12% Dionaea, +4% cadence globale" }
      ]
    },
    {
      "id": "spitter",
      "label": "Sève acide",
      "tiers": [
        { "minCards": 2, "spitterPoison": 3, "desc": "2+ cartes Sève : +3 DPS poison" },
        { "minCards": 4, "spitterPoison": 6, "globalDamage": 1.05, "desc": "4+ cartes : +6 poison, +5% dégâts" }
      ]
    },
    {
      "id": "thorn",
      "label": "Seigneur épines",
      "tiers": [
        { "minCards": 2, "thornDamage": 1.08, "thornRange": 8, "desc": "2+ cartes Épines : Drosera +8% dmg, +8 portée" },
        { "minCards": 4, "thornDamage": 1.15, "thornRange": 15, "critChance": 0.03, "desc": "4+ cartes : +15% dmg, +3% crit" }
      ]
    }
  ]
}
,
    "daily-challenge.json": [
  {
    "id": "daily_swift",
    "name": "Essaim du jour",
    "desc": "Ennemis +6% vitesse. +12% soleil en fin de vague.",
    "enemySpeedMult": 1.06,
    "waveClearGoldMult": 1.12
  },
  {
    "id": "daily_armored",
    "name": "Carapaces du jour",
    "desc": "Ennemis +10% PV. +8% dégâts tours.",
    "enemyHpMult": 1.1,
    "towerDamageMult": 1.08
  },
  {
    "id": "daily_venom",
    "name": "Brume toxique",
    "desc": "Tous les ennemis : +1,5 DPS poison au spawn.",
    "spawnPoisonDps": 1.5,
    "spawnPoisonTime": 3.5
  },
  {
    "id": "daily_greed",
    "name": "Moisson solaire",
    "desc": "+15% or des kills. Boutique −10 soleil sur les cartes.",
    "rewardMult": 1.15,
    "shopCardDiscount": -10
  },
  {
    "id": "daily_dense",
    "name": "Spores denses",
    "desc": "Ennemis +5% vitesse et +6% PV. +10% prime des kills.",
    "enemySpeedMult": 1.05,
    "enemyHpMult": 1.06,
    "rewardMult": 1.1
  },
  {
    "id": "daily_dew",
    "name": "Rosée abondante",
    "desc": "+18% soleil en fin de vague. Cartes boutique +8 soleil.",
    "waveClearGoldMult": 1.18,
    "shopCardDiscount": 8
  },
  {
    "id": "daily_focus",
    "name": "Précision du jour",
    "desc": "Ennemis +6% vitesse. +10% dégâts des tours.",
    "enemySpeedMult": 1.06,
    "towerDamageMult": 1.1
  }
]
,
    "events.json": [
  {
    "id": "nectar_fork",
    "title": "Carrefour de nectar",
    "desc": "Quatre chemins de nectar se croisent dans la serre.",
    "layout": "cross",
    "choices": [
      {
        "id": "sun",
        "slot": "north",
        "label": "Réserve de nectar",
        "desc": "+55 soleil immédiatement.",
        "effect": "gold",
        "amount": 55
      },
      {
        "id": "seed",
        "slot": "east",
        "label": "Graine mutante",
        "desc": "Une carte aléatoire pour ton deck.",
        "effect": "random_card",
        "fallbackGold": 45
      },
      {
        "id": "sap",
        "slot": "south",
        "label": "Bulle de sève",
        "desc": "+3 vies.",
        "effect": "heal",
        "amount": 3
      },
      {
        "id": "gleam",
        "slot": "west",
        "label": "Éclat capté",
        "desc": "+40 soleil.",
        "effect": "gold",
        "amount": 40
      }
    ]
  },
  {
    "id": "ancient_vine",
    "title": "Liane ancienne",
    "desc": "Une liane murmure des tactiques oubliées.",
    "laneTags": ["serenity"],
    "choices": [
      {
        "id": "vision",
        "label": "Vision tactique",
        "desc": "+50 soleil — aucun risque.",
        "effect": "gold",
        "amount": 50
      },
      {
        "id": "rest",
        "label": "Sève curative",
        "desc": "+5 vies.",
        "effect": "heal",
        "amount": 5
      }
    ]
  },
  {
    "id": "mystic_shrine",
    "title": "Autel mycoflore",
    "desc": "Des spores dorés tapissent un autel abandonné.",
    "laneTags": ["serenity"],
    "choices": [
      {
        "id": "relic",
        "label": "Relique enfouie",
        "desc": "Une relique gratuite rejoint ta run.",
        "effect": "random_relic"
      },
      {
        "id": "gold",
        "label": "Pollen concentré",
        "desc": "+70 soleil.",
        "effect": "gold",
        "amount": 70
      }
    ]
  },
  {
    "id": "dew_trade",
    "title": "Marchand de rosée",
    "desc": "Un esprit végétal propose un échange.",
    "laneTags": ["serenity"],
    "choices": [
      {
        "id": "card",
        "label": "Échange de spores",
        "desc": "Carte aléatoire.",
        "effect": "random_card",
        "fallbackGold": 50
      },
      {
        "id": "dew_sun",
        "label": "Flacon de rosée",
        "desc": "+52 soleil immédiatement.",
        "effect": "gold",
        "amount": 52
      }
    ]
  },
  {
    "id": "hornet_nest",
    "title": "Nid de frelons",
    "desc": "Un essaim dort sous une feuille géante. Le nid vibre…",
    "choices": [
      {
        "id": "smoke",
        "label": "Fumée apaisante",
        "desc": "+45 soleil sans réveiller l'essaim.",
        "effect": "gold",
        "amount": 45
      },
      {
        "id": "steal",
        "label": "Vol de gelée royale",
        "desc": "+90 soleil, mais -2 vies (piqûres).",
        "effect": "gold",
        "amount": 90,
        "hurt": 2
      }
    ]
  },
  {
    "id": "serenity_pond",
    "title": "Bassin de sérénité",
    "desc": "Eau dormante au fond du couloir 1 — rare et apaisante.",
    "laneTags": ["serenity"],
    "choices": [
      {
        "id": "meditate",
        "label": "Méditation",
        "desc": "+4 vies et +35 soleil.",
        "effect": "heal_gold",
        "heal": 4,
        "gold": 35
      },
      {
        "id": "lotus",
        "label": "Lotus doré",
        "desc": "Carte aléatoire.",
        "effect": "random_card",
        "fallbackGold": 40
      }
    ]
  },
  {
    "id": "slug_trail",
    "title": "Trace de limace",
    "desc": "Une traînée visqueuse traverse le couloir.",
    "choices": [
      {
        "id": "study",
        "label": "Étudier la trace",
        "desc": "+120 score — note bestiaire.",
        "effect": "score",
        "amount": 120
      },
      {
        "id": "clean",
        "label": "Nettoyer la serre",
        "desc": "+4 vies.",
        "effect": "heal",
        "amount": 4
      }
    ]
  },
  {
    "id": "carnivore_whisper",
    "title": "Murmure carnivore",
    "desc": "Tes plantes semblent te conseiller.",
    "choices": [
      {
        "id": "grow",
        "label": "Laisser pousser",
        "desc": "Carte aléatoire.",
        "effect": "random_card",
        "fallbackGold": 40
      },
      {
        "id": "prune",
        "label": "Tailler les excès",
        "desc": "Relique aléatoire.",
        "effect": "random_relic"
      }
    ]
  },
  {
    "id": "fungal_gamble",
    "title": "Champignon double",
    "desc": "Deux champignons luminescents : l'un ment.",
    "choices": [
      {
        "id": "left",
        "label": "Gauche — nectar doré",
        "desc": "+65 soleil.",
        "effect": "gold",
        "amount": 65
      },
      {
        "id": "right",
        "label": "Droite — sève amère",
        "desc": "+35 soleil et +2 vies.",
        "effect": "heal_gold",
        "gold": 35,
        "heal": 2
      }
    ]
  }
]
,
    "meta.json": {
  "gameVersion": "beta-0.4",
  "contentVersion": "1.2.1",
  "bestiary": {
    "firstKillDamageBonus": 0.02,
    "maxFirstKillBonusTypes": 5
  }
},
  }
};
define("config/balance.js", function (exports, require, module) {
const FLOOR_SCALING = [
  { hp: 1, speed: 1, reward: 1, count: 0 },
  { hp: 1.04, speed: 1.01, reward: 1.05, count: 0 },
  { hp: 1.11, speed: 1.025, reward: 1.1, count: 0 },
  { hp: 1.2, speed: 1.04, reward: 1.15, count: 1 },
  { hp: 1.31, speed: 1.055, reward: 1.21, count: 1 },
  { hp: 1.45, speed: 1.075, reward: 1.28, count: 2 },
  { hp: 1.63, speed: 1.095, reward: 1.36, count: 2 },
  { hp: 1.86, speed: 1.12, reward: 1.46, count: 3 },
];

const CARD_RARITY_WEIGHTS = {
  Commune: [72, 68, 64, 58, 54, 50, 46, 40],
  Rare: [24, 27, 30, 34, 36, 38, 40, 42],
  Epique: [4, 5, 6, 8, 10, 12, 14, 18],
};

const CRIT_CHANCE_CAP = 0.24;

/** Multiplicateur de dégâts sur un coup critique (1,5 = +50 %). */
const CRIT_DAMAGE_MULT = 1.5;

const BASE_SPIRE_STARTING_GOLD = 176;

/** Soleil au-dela du budget de la prochaine Spire → score (fin de Spire). */
const SPIRE_SURPLUS_GOLD_SCORE_RATE = 2;

const COLLECTOR_BONUSES = {
  herbier: { snapperDamage: 1.08, rewardMult: 1.08 },
  distiller: { spitterDamage: 1.08, skillExtraUsesPerWave: 1 },
  /** Chris (gardien) : dégâts Drosera, ralentissements renforcés, Racines un peu plus forte. */
  gardien: { thornDamage: 1.08, slowPotency: 1.1, snareSlowFactorMult: 0.94 },
};

/** Ultime Chris : gel court toute la carte (en plus du soin). */
const GARDIEN_ULTIMATE_MAP_SNARE = {
  duration: 4.5,
  slowMult: 0.6,
};

const FUREUR_RAGE_PER_STACK = 0.07;
const FUREUR_DEFAULT_MAX_STACKS = 10;

const BELLE_SLOW_PASSIVE = 0.68;
const BELLE_SLOW_CARD = 0.56;

/** Poison de base appliqué par toute la famille Sarracenia (spitter). */
const SPITTER_BASE_POISON = 4;
const ATLAS_BASE_POISON = 17;
const SCORPIO_BASE_POISON = 14;
const RYU_BASE_BURN_DPS = 10;
const CAPENSIS_BASE_AOE = 55;
const B52_BASE_ARMOR_DUR = 3;
const B52_BASE_ARMOR_MULT = 1.25;
const WHITE_TIGER_BASE_PIERCE = 2;

/** Multiplicateurs par niveau d'amélioration de tour (niv. 1 → 2 → 3). */
const TOWER_UPGRADE_DAMAGE_MULT = 1.28;
const TOWER_UPGRADE_RANGE_MULT = 1.08;
const TOWER_UPGRADE_FIRE_RATE_MULT = 1.12;
const TOWER_UPGRADE_PROJECTILE_SPEED_MULT = 1.04;

/** Rayon d'aura de base ; multiplié par tower.range / range de base après upgrades. */
const CREAMSICLE_AURA_BASE_RANGE = 150;
/** Réduction de cooldown voisins : +N × dt par frame (= +N % cadence, ex. 0,5 → +50 %). */
const CREAMSICLE_AURA_COOLDOWN_ACCEL = 0.38;

const BOSS_SHIELD_DAMAGE_MULT = 0.42;
const BOSS_ENRAGE_DAMAGE_MULT = 0.88;

/** Or par kill (avant mult ennemi / reliques / Charles). */
const KILL_REWARD_BASE = 9;
const KILL_REWARD_PER_FLOOR = 2;

/** Bonus soleil fin de vague. */
const WAVE_CLEAR_GOLD = {
  combat: 40,
  elite: 60,
  boss: 88,
};

/** Events non-combat. */
const EVENT_GOLD = {
  nectar: 50,
  cardFallback: 58,
};

/** Utilisations max d'Engrais / Racines par vague (timer remis a 0 entre les vagues). */
const SKILL_USES_PER_WAVE = 1;

/** Compétences actives (valeurs de base). */
const SKILLS = {
  boost: {
    cooldown: 28,
    duration: 7,
    fireRateMult: 1.58,
    damageMult: 1.24,
  },
  snare: {
    cooldown: 24,
    duration: 5,
    slowFactor: 0.48,
  },
};

/**
 * Pression biome par Spire (s'applique en plus du biome d'étage).
 * Spire 2+ : un peu plus de PV/vitesse, or légèrement réduit sur Spire 2.
 */
const SPIRE_BIOME_PRESSURE = {
  1: { hp: 1, speed: 1, reward: 1 },
  2: { hp: 1.03, speed: 1.025, reward: 0.98 },
  3: { hp: 1.07, speed: 1.04, reward: 0.99 },
  4: { hp: 1.1, speed: 1.055, reward: 0.98 },
  5: { hp: 1.13, speed: 1.07, reward: 0.98 },
};

/** Décalage d'index biome selon la Spire (étages plus hostiles plus tôt). */
const SPIRE_BIOME_FLOOR_OFFSET = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 3,
};

exports["FLOOR_SCALING"] = FLOOR_SCALING;
exports["CARD_RARITY_WEIGHTS"] = CARD_RARITY_WEIGHTS;
exports["CRIT_CHANCE_CAP"] = CRIT_CHANCE_CAP;
exports["CRIT_DAMAGE_MULT"] = CRIT_DAMAGE_MULT;
exports["BASE_SPIRE_STARTING_GOLD"] = BASE_SPIRE_STARTING_GOLD;
exports["SPIRE_SURPLUS_GOLD_SCORE_RATE"] = SPIRE_SURPLUS_GOLD_SCORE_RATE;
exports["COLLECTOR_BONUSES"] = COLLECTOR_BONUSES;
exports["GARDIEN_ULTIMATE_MAP_SNARE"] = GARDIEN_ULTIMATE_MAP_SNARE;
exports["FUREUR_RAGE_PER_STACK"] = FUREUR_RAGE_PER_STACK;
exports["FUREUR_DEFAULT_MAX_STACKS"] = FUREUR_DEFAULT_MAX_STACKS;
exports["BELLE_SLOW_PASSIVE"] = BELLE_SLOW_PASSIVE;
exports["BELLE_SLOW_CARD"] = BELLE_SLOW_CARD;
exports["SPITTER_BASE_POISON"] = SPITTER_BASE_POISON;
exports["ATLAS_BASE_POISON"] = ATLAS_BASE_POISON;
exports["SCORPIO_BASE_POISON"] = SCORPIO_BASE_POISON;
exports["RYU_BASE_BURN_DPS"] = RYU_BASE_BURN_DPS;
exports["CAPENSIS_BASE_AOE"] = CAPENSIS_BASE_AOE;
exports["B52_BASE_ARMOR_DUR"] = B52_BASE_ARMOR_DUR;
exports["B52_BASE_ARMOR_MULT"] = B52_BASE_ARMOR_MULT;
exports["WHITE_TIGER_BASE_PIERCE"] = WHITE_TIGER_BASE_PIERCE;
exports["TOWER_UPGRADE_DAMAGE_MULT"] = TOWER_UPGRADE_DAMAGE_MULT;
exports["TOWER_UPGRADE_RANGE_MULT"] = TOWER_UPGRADE_RANGE_MULT;
exports["TOWER_UPGRADE_FIRE_RATE_MULT"] = TOWER_UPGRADE_FIRE_RATE_MULT;
exports["TOWER_UPGRADE_PROJECTILE_SPEED_MULT"] = TOWER_UPGRADE_PROJECTILE_SPEED_MULT;
exports["CREAMSICLE_AURA_BASE_RANGE"] = CREAMSICLE_AURA_BASE_RANGE;
exports["CREAMSICLE_AURA_COOLDOWN_ACCEL"] = CREAMSICLE_AURA_COOLDOWN_ACCEL;
exports["BOSS_SHIELD_DAMAGE_MULT"] = BOSS_SHIELD_DAMAGE_MULT;
exports["BOSS_ENRAGE_DAMAGE_MULT"] = BOSS_ENRAGE_DAMAGE_MULT;
exports["KILL_REWARD_BASE"] = KILL_REWARD_BASE;
exports["KILL_REWARD_PER_FLOOR"] = KILL_REWARD_PER_FLOOR;
exports["WAVE_CLEAR_GOLD"] = WAVE_CLEAR_GOLD;
exports["EVENT_GOLD"] = EVENT_GOLD;
exports["SKILL_USES_PER_WAVE"] = SKILL_USES_PER_WAVE;
exports["SKILLS"] = SKILLS;
exports["SPIRE_BIOME_PRESSURE"] = SPIRE_BIOME_PRESSURE;
exports["SPIRE_BIOME_FLOOR_OFFSET"] = SPIRE_BIOME_FLOOR_OFFSET;

});
define("config/campaign.js", function (exports, require, module) {
/** Campagne Spire : 5 paliers, fin tres difficile mais beatable si maitrise. */
const MAX_SPIRES = 5;

function getSpireEnemyHpMult(spireNumber) {
  if (spireNumber <= 1) return 1;
  if (spireNumber <= 3) return 1 + (spireNumber - 1) * 0.26;
  return 1.52 + (spireNumber - 3) * 0.24;
}

function getSpireEnemySpeedMult(spireNumber) {
  if (spireNumber <= 1) return 1;
  if (spireNumber <= 3) return 1 + (spireNumber - 1) * 0.06;
  return 1.12 + (spireNumber - 3) * 0.06;
}

/** Ligne UI (prochaine Spire ou pression actuelle). */
function formatSpireThreatLine(spireNumber) {
  const hp = Math.round((getSpireEnemyHpMult(spireNumber) - 1) * 100);
  const spd = Math.round((getSpireEnemySpeedMult(spireNumber) - 1) * 100);
  return `Ennemis +${hp}% PV · +${spd}% vitesse`;
}

exports["MAX_SPIRES"] = MAX_SPIRES;
exports["getSpireEnemyHpMult"] = getSpireEnemyHpMult;
exports["getSpireEnemySpeedMult"] = getSpireEnemySpeedMult;
exports["formatSpireThreatLine"] = formatSpireThreatLine;

});
define("logic/economy.js", function (exports, require, module) {
const { KILL_REWARD_BASE, KILL_REWARD_PER_FLOOR, WAVE_CLEAR_GOLD, SPIRE_BIOME_PRESSURE, SPIRE_SURPLUS_GOLD_SCORE_RATE } = require("config/balance.js");
function getKillRewardBase(floorIndex) {
  return KILL_REWARD_BASE + (floorIndex + 1) * KILL_REWARD_PER_FLOOR;
}

function getWaveClearGold(nodeType) {
  return WAVE_CLEAR_GOLD[nodeType] ?? WAVE_CLEAR_GOLD.combat;
}

function getSpireBiomePressure(spireNumber) {
  return SPIRE_BIOME_PRESSURE[spireNumber] || SPIRE_BIOME_PRESSURE[3];
}

/** Fusionne biome JSON + pression Spire pour computeEncounterStats. */
function mergeBiomeWithSpirePressure(biome, spireNumber) {
  const p = getSpireBiomePressure(spireNumber);
  return {
    ...biome,
    hp: biome.hp * p.hp,
    speed: biome.speed * p.speed,
    reward: biome.reward * p.reward,
  };
}

/**
 * Fin de Spire : budget remis au depart de la suivante, excedant converti en score.
 * @returns {{ newGold: number, excessGold: number, scoreGain: number }}
 */
function settleSpireGoldForNextSpire(currentGold, nextSpireStartingGold, rate = SPIRE_SURPLUS_GOLD_SCORE_RATE) {
  const excessGold = Math.max(0, currentGold - nextSpireStartingGold);
  const scoreGain = Math.round(excessGold * rate);
  return {
    newGold: nextSpireStartingGold,
    excessGold,
    scoreGain,
  };
}

exports["getKillRewardBase"] = getKillRewardBase;
exports["getWaveClearGold"] = getWaveClearGold;
exports["getSpireBiomePressure"] = getSpireBiomePressure;
exports["mergeBiomeWithSpirePressure"] = mergeBiomeWithSpirePressure;
exports["settleSpireGoldForNextSpire"] = settleSpireGoldForNextSpire;

});
define("logic/biomes.js", function (exports, require, module) {
const { SPIRE_BIOME_FLOOR_OFFSET } = require("config/balance.js");
/**
 * Sélection de biome par étage et Spire.
 * @param {number} floor — index 0..max-1
 * @param {number} spireNumber — 1..3
 * @param {Array} biomes — liste BIOMES
 * @param {number} bossFloorIndex — étage boss (ex. 7)
 */
function pickBiomeForFloor(floor, spireNumber, biomes, bossFloorIndex) {
  if (!biomes?.length) return null;
  if (floor >= bossFloorIndex) {
    return biomes[biomes.length - 1];
  }
  const offset = SPIRE_BIOME_FLOOR_OFFSET[spireNumber] ?? SPIRE_BIOME_FLOOR_OFFSET[3];
  const idx = Math.min(Math.floor(floor / 2) + offset, biomes.length - 2);
  return biomes[idx];
}

exports["pickBiomeForFloor"] = pickBiomeForFloor;

});
define("logic/encounter.js", function (exports, require, module) {
function computeEncounterStats({ nodeType, floor, floorScaling, biome }) {
  const floorScale = floorScaling[Math.min(floor, floorScaling.length - 1)];
  if (nodeType === "elite") {
    return {
      hpMult: floorScale.hp * biome.hp * 1.42,
      speedMult: floorScale.speed * biome.speed,
      rewardMult: floorScale.reward * biome.reward * 1.55,
      countBonus: floorScale.count + 2,
      towerRangeBonus: biome.towerRange,
      towerFireRateMult: biome.towerFireRate,
    };
  }
  if (nodeType === "boss") {
    return {
      hpMult: floorScale.hp * biome.hp * 2.08,
      speedMult: floorScale.speed * biome.speed * 0.94,
      rewardMult: floorScale.reward * biome.reward * 2.35,
      countBonus: floorScale.count + 2,
      towerRangeBonus: biome.towerRange,
      towerFireRateMult: biome.towerFireRate,
    };
  }
  return {
    hpMult: floorScale.hp * biome.hp,
    speedMult: floorScale.speed * biome.speed,
    rewardMult: floorScale.reward * biome.reward,
    countBonus: floorScale.count,
    towerRangeBonus: biome.towerRange,
    towerFireRateMult: biome.towerFireRate,
  };
}

function pickEncounterEnemy(floor, spireNumber = 1, enemyDefs = {}, rng = Math.random) {
  const entries = Object.entries(enemyDefs)
    .filter(([id, def]) => id !== "boss" && floor >= (def.spawnMinFloor ?? 0))
    .filter(([, def]) => (def.spawnMinSpire ?? 1) <= spireNumber)
    .map(([id, def]) => ({
      id,
      weight: (def.spawnWeight ?? 0.1) * (1 + floor * 0.04),
    }));

  if (!entries.length) return "crawler";

  let total = 0;
  for (const e of entries) total += e.weight;
  let roll = rng() * total;
  for (const e of entries) {
    roll -= e.weight;
    if (roll <= 0) return e.id;
  }
  return entries[entries.length - 1].id;
}

function generateEncounterQueueByFloor({
  floor,
  nodeType,
  countBonus,
  floorScaling,
  spireNumber = 1,
  enemyDefs = {},
  rng = Math.random,
}) {
  const floorScale = floorScaling[Math.min(floor, floorScaling.length - 1)];
  const count = 9 + (floor + 1) * 2 + countBonus;
  const queue = [];
  for (let i = 0; i < count; i += 1) {
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
  }
  if (nodeType === "elite") {
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
    queue.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng));
  }
  if (nodeType === "boss") queue.push("boss");
  return queue;
}

exports["computeEncounterStats"] = computeEncounterStats;
exports["pickEncounterEnemy"] = pickEncounterEnemy;
exports["generateEncounterQueueByFloor"] = generateEncounterQueueByFloor;

});
define("logic/game-rules.js", function (exports, require, module) {
function computeRestHeal(maxLives, _collectorId) {
  return Math.max(4, Math.round(maxLives * 0.35));
}

function getNodeResultAdvanceAction(isSpireTransitionPending) {
  return isSpireTransitionPending ? "nextSpire" : "nextFloor";
}

exports["computeRestHeal"] = computeRestHeal;
exports["getNodeResultAdvanceAction"] = getNodeResultAdvanceAction;

});
define("logic/skills.js", function (exports, require, module) {
const { SKILL_USES_PER_WAVE } = require("config/balance.js");
/** Charges par vague (cartes / collectionneur peuvent ajouter des utilisations). */
function getSkillUsesPerWave(game) {
  const base = SKILL_USES_PER_WAVE;
  const bonus = game.modifiers.skillExtraUsesPerWave || 0;
  return Math.min(3, base + bonus);
}

function resetSkillsForNewWave(game) {
  const max = getSkillUsesPerWave(game);
  for (const key of ["boost", "snare"]) {
    const skill = game.skills[key];
    if (!skill) continue;
    skill.timer = 0;
    skill.active = 0;
    skill.usesMax = max;
    skill.usesLeft = max;
  }
}

function tickSkillTimers(game, dt) {
  for (const key of ["boost", "snare"]) {
    const skill = game.skills[key];
    if (!skill) continue;
    skill.timer = Math.max(0, skill.timer - dt);
    skill.active = Math.max(0, skill.active - dt);
  }
}

function canActivateSkill(skill) {
  if (!skill) return false;
  if (skill.active > 0) return false;
  return (skill.usesLeft ?? 0) > 0;
}

function formatSkillChargeLabel(skill) {
  const max = skill.usesMax ?? SKILL_USES_PER_WAVE;
  const left = skill.usesLeft ?? 0;
  return `${left}/${max} cette vague`;
}

exports["getSkillUsesPerWave"] = getSkillUsesPerWave;
exports["resetSkillsForNewWave"] = resetSkillsForNewWave;
exports["tickSkillTimers"] = tickSkillTimers;
exports["canActivateSkill"] = canActivateSkill;
exports["formatSkillChargeLabel"] = formatSkillChargeLabel;

});
define("logic/hunter-slow.js", function (exports, require, module) {
const { GARDIEN_ULTIMATE_MAP_SNARE } = require("config/balance.js");
/** Ralentissement plus fort : mult vitesse plus bas (ex. 0,68 → ~0,64 avec +12 %). */
function strengthenSlowMult(slowMult, potency = 1) {
  if (!potency || potency <= 1 || slowMult >= 1) return slowMult;
  return 1 - (1 - slowMult) * potency;
}

function getSnareSlowFactor(baseFactor, snareSlowFactorMult = 1) {
  return baseFactor * snareSlowFactorMult;
}

function triggerHunterUltimateMapSnare(game) {
  game.run.collectorMapSnareRemaining = GARDIEN_ULTIMATE_MAP_SNARE.duration;
}

function tickCollectorMapSnare(game, dt) {
  if (!(game.run.collectorMapSnareRemaining > 0)) return;
  game.run.collectorMapSnareRemaining = Math.max(0, game.run.collectorMapSnareRemaining - dt);
}

function applyCollectorMapSnareToEnemy(enemy, game) {
  if (!(game.run.collectorMapSnareRemaining > 0)) return;
  const mult = strengthenSlowMult(
    GARDIEN_ULTIMATE_MAP_SNARE.slowMult,
    game.modifiers.slowPotency || 1
  );
  enemy.slowTime = Math.max(enemy.slowTime || 0, game.run.collectorMapSnareRemaining);
  enemy.slowMult = Math.min(enemy.slowMult ?? 1, mult);
}

function applySlowToEnemy(enemy, slowMult, duration, game) {
  const mult = strengthenSlowMult(slowMult, game.modifiers.slowPotency || 1);
  enemy.slowMult = Math.min(enemy.slowMult ?? 1, mult);
  enemy.slowTime = Math.max(enemy.slowTime || 0, duration);
}

exports["strengthenSlowMult"] = strengthenSlowMult;
exports["getSnareSlowFactor"] = getSnareSlowFactor;
exports["triggerHunterUltimateMapSnare"] = triggerHunterUltimateMapSnare;
exports["tickCollectorMapSnare"] = tickCollectorMapSnare;
exports["applyCollectorMapSnareToEnemy"] = applyCollectorMapSnareToEnemy;
exports["applySlowToEnemy"] = applySlowToEnemy;

});
define("render/frame.js", function (exports, require, module) {
function renderBoardFrame({
  ctx,
  canvas,
  game,
  drawBackground,
  drawSetDressing,
  drawPath,
  drawPads,
  drawRangePreviews,
  drawTower,
  drawEnemy,
  drawProjectiles,
  drawWeather,
  drawFireflies,
  drawTowerUpgradeVfx,
  drawUltimateVfx,
  drawFx,
  drawLightingOverlay,
}) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawSetDressing();
  drawPath();
  drawPads();
  if (drawRangePreviews) drawRangePreviews();
  game.towers.forEach(drawTower);
  if (drawTowerUpgradeVfx) drawTowerUpgradeVfx(ctx, game);
  game.enemies.forEach(drawEnemy);
  drawProjectiles();
  drawWeather();
  drawFireflies();
  if (drawUltimateVfx) drawUltimateVfx(ctx, canvas, game);
  drawFx();
  drawLightingOverlay();
}

function updateHudView({ game, maxFloors, hudCache, hudElements, updateTowerPanel, updateSkillsUI }) {
  const values = {
    lives: game.lives,
    gold: game.gold,
    wave: `${Math.min(game.spire.floor + 1, maxFloors)}/${maxFloors}`,
    enemyCount: game.enemies.length + game.spawnQueue.length,
    score: game.score,
    bestScore: game.bestScore,
  };

  if (hudCache.lives !== values.lives) {
    hudCache.lives = values.lives;
    hudElements.livesEl.textContent = String(values.lives);
  }
  if (hudCache.gold !== values.gold) {
    hudCache.gold = values.gold;
    hudElements.goldEl.textContent = String(values.gold);
  }
  if (hudCache.wave !== values.wave) {
    hudCache.wave = values.wave;
    hudElements.waveEl.textContent = values.wave;
  }
  if (hudCache.enemyCount !== values.enemyCount) {
    hudCache.enemyCount = values.enemyCount;
    hudElements.enemyCountEl.textContent = String(values.enemyCount);
  }
  if (hudCache.score !== values.score) {
    hudCache.score = values.score;
    hudElements.scoreEl.textContent = String(values.score);
  }
  if (hudCache.bestScore !== values.bestScore) {
    hudCache.bestScore = values.bestScore;
    hudElements.bestScoreEl.textContent = String(values.bestScore);
  }

  updateTowerPanel();
  updateSkillsUI();
}

exports["renderBoardFrame"] = renderBoardFrame;
exports["updateHudView"] = updateHudView;

});
define("render/ultimate-vfx.js", function (exports, require, module) {
const { GARDIEN_ULTIMATE_MAP_SNARE } = require("config/balance.js");
function easeOut(t) {
  return 1 - (1 - t) ** 2;
}

function burstAlpha(fx) {
  const p = fx.t / fx.duration;
  if (p >= 1) return 0;
  return (1 - p) * (0.35 + Math.sin(p * Math.PI) * 0.45);
}

/** Lance l'effet carte + gerbe de particules. */
function triggerUltimateVfx(game, ultimateId, canvas, emitParticles) {
  if (!game.ultimateVfxList) game.ultimateVfxList = [];
  const cx = canvas.width * 0.5;
  const cy = canvas.height * 0.46;

  if (ultimateId === "herbier_burst") {
    emitParticles?.(cx, cy, "#ffe87a", 48);
    emitParticles?.(cx, cy, "#ffb84a", 28);
    game.ultimateVfxList.push({ kind: "sun", t: 0, duration: 1.15, cx, cy });
    return;
  }

  if (ultimateId === "distiller_burst") {
    emitParticles?.(cx, cy, "#8fe275", 40);
    emitParticles?.(cx * 0.35, cy * 1.05, "#b88cff", 22);
    emitParticles?.(cx * 1.35, cy * 0.95, "#6ce8a8", 22);
    game.ultimateVfxList.push({ kind: "distill", t: 0, duration: 1.35, cx, cy });
    return;
  }

  if (ultimateId === "gardien_burst") {
    emitParticles?.(cx, cy, "#d4f4ff", 36);
    emitParticles?.(cx, cy, "#a8e8ff", 24);
    game.ultimateVfxList.push({
      kind: "frost",
      t: 0,
      duration: GARDIEN_ULTIMATE_MAP_SNARE.duration,
      cx,
      cy,
    });
  }
}

function updateUltimateVfx(game, dt) {
  if (!game.ultimateVfxList?.length) return;
  for (const fx of game.ultimateVfxList) fx.t += dt;
  game.ultimateVfxList = game.ultimateVfxList.filter((fx) => fx.t < fx.duration);
}

function drawSunBurst(ctx, canvas, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;

  const maxR = Math.max(canvas.width, canvas.height) * (0.25 + p * 0.55);
  const g = ctx.createRadialGradient(fx.cx, fx.cy, 0, fx.cx, fx.cy, maxR);
  g.addColorStop(0, `rgba(255, 248, 180, ${alpha * 0.95})`);
  g.addColorStop(0.35, `rgba(255, 210, 80, ${alpha * 0.45})`);
  g.addColorStop(0.7, `rgba(255, 160, 40, ${alpha * 0.12})`);
  g.addColorStop(1, "rgba(255, 140, 20, 0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 0.5;
  ctx.strokeStyle = "#fff6c8";
  ctx.lineWidth = 2;
  const rays = 10;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 0.8;
    const r0 = 20 + p * 30;
    const r1 = maxR * 0.85;
    ctx.beginPath();
    ctx.moveTo(fx.cx + Math.cos(a) * r0, fx.cy + Math.sin(a) * r0);
    ctx.lineTo(fx.cx + Math.cos(a) * r1, fx.cy + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawDistillBurst(ctx, canvas, fx) {
  const p = Math.min(1, fx.t / fx.duration);
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;
  const pulse = 0.5 + Math.sin(fx.t * 9) * 0.5;
  const r = Math.max(canvas.width, canvas.height) * (0.3 + p * 0.4);

  const g1 = ctx.createRadialGradient(fx.cx, fx.cy, 0, fx.cx, fx.cy, r);
  g1.addColorStop(0, `rgba(120, 255, 150, ${alpha * (0.35 + pulse * 0.25)})`);
  g1.addColorStop(0.5, `rgba(60, 180, 90, ${alpha * 0.15})`);
  g1.addColorStop(1, "rgba(40, 120, 60, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const g2 = ctx.createRadialGradient(
    fx.cx * 0.7,
    fx.cy * 1.1,
    0,
    fx.cx,
    fx.cy,
    r * 0.9
  );
  g2.addColorStop(0, `rgba(180, 120, 255, ${alpha * 0.28})`);
  g2.addColorStop(0.55, `rgba(100, 60, 160, ${alpha * 0.08})`);
  g2.addColorStop(1, "rgba(60, 30, 90, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 0.4;
  ctx.strokeStyle = "#c8ffb0";
  ctx.lineWidth = 3;
  for (let ring = 0; ring < 3; ring += 1) {
    const rr = r * (0.35 + ring * 0.22) * (0.85 + pulse * 0.15);
    ctx.beginPath();
    ctx.arc(fx.cx, fx.cy, rr, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawFrostOverlay(ctx, canvas, fx) {
  const p = fx.t / fx.duration;
  const fadeIn = Math.min(1, fx.t / 0.35);
  const fadeOut = p > 0.82 ? (1 - p) / 0.18 : 1;
  const alpha = fadeIn * fadeOut * (0.14 + Math.sin(fx.t * 4) * 0.04);

  ctx.fillStyle = `rgba(170, 220, 255, ${alpha})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const edge = ctx.createRadialGradient(
    canvas.width * 0.5,
    canvas.height * 0.48,
    canvas.width * 0.18,
    canvas.width * 0.5,
    canvas.height * 0.48,
    canvas.width * 0.72
  );
  edge.addColorStop(0, "rgba(220, 245, 255, 0)");
  edge.addColorStop(0.65, `rgba(140, 200, 240, ${alpha * 0.35})`);
  edge.addColorStop(1, `rgba(80, 140, 200, ${alpha * 0.55})`);
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = alpha * 1.8;
  ctx.strokeStyle = "rgba(230, 250, 255, 0.55)";
  ctx.lineWidth = 1.5;
  const crystals = 14;
  for (let i = 0; i < crystals; i += 1) {
    const seed = i * 1.73 + fx.t * 0.5;
    const x = ((Math.sin(seed) * 0.5 + 0.5) * 0.85 + 0.075) * canvas.width;
    const y = ((Math.cos(seed * 1.3) * 0.5 + 0.5) * 0.75 + 0.12) * canvas.height;
    const s = 4 + (i % 3) * 2;
    ctx.beginPath();
    ctx.moveTo(x, y - s);
    ctx.lineTo(x + s * 0.6, y);
    ctx.lineTo(x, y + s);
    ctx.lineTo(x - s * 0.6, y);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

function drawUltimateVfx(ctx, canvas, game) {
  if (!game.ultimateVfxList?.length) return;
  ctx.save();
  for (const fx of game.ultimateVfxList) {
    if (fx.kind === "sun") drawSunBurst(ctx, canvas, fx);
    else if (fx.kind === "distill") drawDistillBurst(ctx, canvas, fx);
    else if (fx.kind === "frost") drawFrostOverlay(ctx, canvas, fx);
  }
  ctx.restore();
}

exports["triggerUltimateVfx"] = triggerUltimateVfx;
exports["updateUltimateVfx"] = updateUltimateVfx;
exports["drawUltimateVfx"] = drawUltimateVfx;

});
define("render/range-previews.js", function (exports, require, module) {
function drawRangeRing(ctx, x, y, range, {
  fill = null,
  stroke = null,
  lineWidth = 2,
  dashed = false,
  dashPattern = [7, 5],
} = {}) {
  ctx.save();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, range, 0, Math.PI * 2);
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    if (dashed) ctx.setLineDash(dashPattern);
    ctx.beginPath();
    ctx.arc(x, y, range, 0, Math.PI * 2);
    ctx.stroke();
    if (dashed) ctx.setLineDash([]);
  }
  ctx.restore();
}

function drawPlacementRangePreview(ctx, {
  game,
  getTowerTypePreviewRange,
  isTouchLayout,
}) {
  if (game.screen !== "playing" || !game.selectedTowerType) return;
  const pad = game.placementHoverPad;
  if (!pad || pad.occupiedBy !== null) return;
  const range = getTowerTypePreviewRange(game.selectedTowerType);
  const touchUi = isTouchLayout();
  drawRangeRing(ctx, pad.x, pad.y, range, {
    fill: "rgba(255, 232, 122, 0.035)",
    stroke: "rgba(255, 232, 122, 0.34)",
    lineWidth: touchUi ? 1.8 : 1.4,
    dashed: true,
    dashPattern: [6, 7],
  });
}

function drawTowerSelectionRange(ctx, tower, {
  game,
  getTowerRange,
  getTowerUpgradePreviewRange,
}) {
  const canShowRange = tower.id === game.selectedTowerId
    && (game.screen === "playing" || game.screen === "paused");
  if (!canShowRange) return;

  const currentRange = getTowerRange(tower);
  drawRangeRing(ctx, tower.x, tower.y, currentRange, {
    fill: "rgba(226, 249, 167, 0.03)",
    stroke: "rgba(226, 249, 167, 0.3)",
    lineWidth: 1.4,
  });

  const upgradeRange = getTowerUpgradePreviewRange(tower);
  if (upgradeRange && upgradeRange > currentRange + 0.5) {
    drawRangeRing(ctx, tower.x, tower.y, upgradeRange, {
      stroke: "rgba(140, 210, 255, 0.36)",
      lineWidth: 1.4,
      dashed: true,
      dashPattern: [5, 6],
    });
  }
}

exports["drawRangeRing"] = drawRangeRing;
exports["drawPlacementRangePreview"] = drawPlacementRangePreview;
exports["drawTowerSelectionRange"] = drawTowerSelectionRange;

});
define("render/enemy.js", function (exports, require, module) {
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

function drawEnemySprite(ctx, enemy, {
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

exports["drawEnemySprite"] = drawEnemySprite;

});
define("render/projectiles.js", function (exports, require, module) {
function drawProjectileSprites(ctx, projectiles) {
  projectiles.forEach((projectile) => {
    const glow = ctx.createRadialGradient(projectile.x, projectile.y, 0, projectile.x, projectile.y, 12);
    glow.addColorStop(0, projectile.color);
    glow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.fillStyle = projectile.color;
    ctx.beginPath();
    ctx.arc(projectile.x, projectile.y, 4.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = projectile.trailColor;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(projectile.x - 6, projectile.y - 1);
    ctx.lineTo(projectile.x + 2, projectile.y + 3);
    ctx.stroke();
  });
}

exports["drawProjectileSprites"] = drawProjectileSprites;

});
define("render/weather.js", function (exports, require, module) {
function updateWeatherState(weatherState, {
  canvas,
}, dt) {
  for (const drop of weatherState.rainDrops) {
    drop.y += drop.speed * dt;
    drop.x += drop.speed * 0.18 * dt;
    if (drop.y > canvas.height + 20) {
      drop.y = -20;
      drop.x = Math.random() * canvas.width;
    }
    if (drop.x > canvas.width + 20) drop.x = -20;
  }
  weatherState.fogOffset += dt * 22;
}

function drawWeatherOverlay(ctx, {
  biome,
  canvas,
  fogOffset,
  rainDrops,
}) {
  ctx.strokeStyle = `rgba(190,220,255,${biome.rain})`;
  ctx.lineWidth = 1.1;
  for (const drop of rainDrops) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x + drop.len * 0.3, drop.y + drop.len);
    ctx.stroke();
  }

  ctx.fillStyle = `rgba(233,245,240,${biome.fog})`;
  const fogY = Math.sin(fogOffset * 0.02) * 14;
  ctx.fillRect(-40, 65 + fogY, canvas.width + 80, 48);
  ctx.fillRect(-30, 260 - fogY * 0.6, canvas.width + 70, 56);
}

exports["updateWeatherState"] = updateWeatherState;
exports["drawWeatherOverlay"] = drawWeatherOverlay;

});
define("render/fx.js", function (exports, require, module) {
function updateCombatFx({
  floatTexts,
  particles,
}, dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.life -= dt;
    if (particle.life <= 0) {
      particles.splice(i, 1);
      continue;
    }
    particle.vy += 140 * dt;
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
  }

  for (let i = floatTexts.length - 1; i >= 0; i -= 1) {
    const text = floatTexts[i];
    text.life -= dt;
    if (text.life <= 0) {
      floatTexts.splice(i, 1);
      continue;
    }
    text.y += text.vy * dt;
  }
}

function drawCombatFx(ctx, {
  canvas,
  floatTexts,
  particles,
  screen,
}) {
  particles.forEach((particle) => {
    ctx.globalAlpha = Math.max(0, particle.life * 1.4);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  floatTexts.forEach((text) => {
    ctx.globalAlpha = Math.max(0, text.life * 1.2);
    ctx.fillStyle = text.color;
    ctx.font = "bold 14px Segoe UI";
    ctx.fillText(text.text, text.x, text.y);
  });
  ctx.globalAlpha = 1;

  if (screen === "paused") {
    ctx.fillStyle = "rgba(5, 10, 6, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f1ffd5";
    ctx.font = "bold 42px Segoe UI";
    ctx.fillText("PAUSE", canvas.width / 2 - 78, canvas.height / 2 + 14);
  }
}

exports["updateCombatFx"] = updateCombatFx;
exports["drawCombatFx"] = drawCombatFx;

});
define("render/tower.js", function (exports, require, module) {
const { FUREUR_DEFAULT_MAX_STACKS } = require("config/balance.js");
const TOWER_SPRITE_DRAW_PX = {
  snapper: 58,
  dionaea_b52: 70,
  dionaea_akai_ryu: 62,
  dionaea_white_tiger: 60,
  spitter: 56,
  sarracenia_atlas5: 68,
  sarracenia_scarlet_belle: 56,
  sarracenia_fureur: 56,
  thorn: 60,
  drosera_creamsicle: 60,
  drosera_regia: 70,
  drosera_scorpioides: 64,
};

function drawTowerPassiveAura(ctx, tower, {
  animT,
  game,
  getCreamsicleAuraRange,
  towerTypes,
}) {
  ctx.save();

  if (tower.typeKey === "drosera_creamsicle") {
    const pulse = 0.18 + 0.08 * Math.sin(animT * 1.8);
    const auraRange = getCreamsicleAuraRange(game, tower, towerTypes);
    ctx.globalAlpha = pulse;
    const g = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, auraRange);
    g.addColorStop(0, "rgba(255,190,100,0.22)");
    g.addColorStop(1, "rgba(255,190,100,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, auraRange, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }

  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    const maxStacks = game.modifiers.fureurMaxStacks || FUREUR_DEFAULT_MAX_STACKS;
    const intensity = tower.rageStacks / maxStacks;
    ctx.globalAlpha = intensity * 0.7;
    const gr = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, 22);
    gr.addColorStop(0, `rgba(255,180,0,${intensity * 0.6})`);
    gr.addColorStop(1, "rgba(255,80,0,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, 22, 0, Math.PI * 2);
    ctx.fillStyle = gr;
    ctx.fill();
  }

  if (tower.typeKey === "drosera_scorpioides") {
    const pulse = 0.12 + 0.08 * Math.sin(animT * 2.2 + tower.id);
    ctx.globalAlpha = pulse;
    const gs = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, 20);
    gs.addColorStop(0, "rgba(100,255,60,0.35)");
    gs.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = gs;
    ctx.fill();
  }

  ctx.restore();
}

function drawTowerSprite(ctx, tower, {
  animT,
  drawTowerLevelAura,
  drawTowerSelectionRange,
  game,
  getCreamsicleAuraRange,
  getTowerRange,
  getTowerUpgradePreviewRange,
  sprites,
  towerTypes,
}) {
  const sprite = sprites.towers[tower.typeKey];
  const spritePx = TOWER_SPRITE_DRAW_PX[tower.typeKey] ?? 50;
  const bodyR = spritePx > 50 ? 21 : 17;

  ctx.fillStyle = "rgba(10, 18, 8, 0.32)";
  ctx.beginPath();
  ctx.ellipse(tower.x, tower.y + 18, spritePx * 0.4, 7 + (spritePx - 50) * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();

  drawTowerPassiveAura(ctx, tower, {
    animT,
    game,
    getCreamsicleAuraRange,
    towerTypes,
  });
  drawTowerLevelAura(ctx, tower, animT, "back", bodyR);

  if (towerTypes[tower.typeKey]?.rarity) {
    const rarity = towerTypes[tower.typeKey].rarity;
    ctx.save();
    ctx.shadowColor = tower.color;
    ctx.shadowBlur = rarity === "Epique" ? 14 : rarity === "Rare" ? 10 : 6;
    ctx.globalAlpha = 0.7;
    ctx.strokeStyle = tower.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, bodyR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (sprite && sprite.complete && sprite.naturalWidth > 0) {
    const drawY = tower.y - spritePx * 0.58;
    ctx.drawImage(sprite, tower.x - spritePx / 2, drawY, spritePx, spritePx);
  } else {
    ctx.fillStyle = tower.color;
    ctx.beginPath();
    ctx.arc(tower.x, tower.y, bodyR * 0.82, 0, Math.PI * 2);
    ctx.fill();
  }

  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    ctx.save();
    ctx.globalAlpha = 0.85;
    ctx.font = "bold 8px monospace";
    ctx.fillStyle = "#ffcc44";
    ctx.textAlign = "center";
    ctx.fillText(`×${tower.rageStacks}`, tower.x, tower.y - 22);
    ctx.restore();
  }

  drawTowerLevelAura(ctx, tower, animT, "front", bodyR);

  drawTowerSelectionRange(ctx, tower, {
    game,
    getTowerRange,
    getTowerUpgradePreviewRange,
  });
}

exports["drawTowerSprite"] = drawTowerSprite;

});
define("render/board.js", function (exports, require, module) {
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

function drawBoardBackdropStyle(ctx, {
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

function drawBoardPaths(ctx, {
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

function drawBoardPads(ctx, {
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

exports["drawBoardBackdropStyle"] = drawBoardBackdropStyle;
exports["drawBoardPaths"] = drawBoardPaths;
exports["drawBoardPads"] = drawBoardPads;

});
define("render/decor.js", function (exports, require, module) {
function drawSetDressingDecor(ctx, decor) {
  for (const mushroom of decor.mushrooms) {
    ctx.save();
    ctx.translate(mushroom.x, mushroom.y);
    ctx.scale(mushroom.s, mushroom.s);
    ctx.fillStyle = "rgba(28, 20, 12, 0.24)";
    ctx.beginPath();
    ctx.ellipse(0, 12, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#f4dcc0";
    ctx.fillRect(-3, 0, 6, 13);
    ctx.fillStyle = mushroom.cap;
    ctx.beginPath();
    ctx.arc(0, 0, 10, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.beginPath();
    ctx.arc(-4, -4, 2, 0, Math.PI * 2);
    ctx.arc(3, -6, 1.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawFireflyDecor(ctx, fireflies, nowSec = performance.now() * 0.001) {
  for (const firefly of fireflies) {
    const glow = (Math.sin(nowSec * firefly.speed + firefly.phase) + 1) * 0.5;
    const x = firefly.x + Math.sin(nowSec + firefly.phase) * 10;
    const y = firefly.y + Math.cos(nowSec * 0.7 + firefly.phase) * 8;
    ctx.globalAlpha = 0.18 + glow * 0.4;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
    gradient.addColorStop(0, "#faffb8");
    gradient.addColorStop(1, "rgba(250,255,184,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawLightingOverlayDecor(ctx, {
  biome,
  canvas,
  nowMs = performance.now(),
}) {
  const vignette = ctx.createRadialGradient(
    canvas.width * 0.52,
    canvas.height * 0.45,
    canvas.width * 0.1,
    canvas.width * 0.52,
    canvas.height * 0.45,
    canvas.width * 0.72,
  );
  vignette.addColorStop(0, "rgba(255, 213, 79, 0.06)");
  vignette.addColorStop(0.58, "rgba(94, 31, 168, 0.04)");
  vignette.addColorStop(1, "rgba(18, 8, 32, 0.38)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const rim = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  rim.addColorStop(0, "rgba(123, 44, 191, 0.08)");
  rim.addColorStop(0.52, "rgba(0, 0, 0, 0)");
  rim.addColorStop(1, "rgba(255, 145, 0, 0.08)");
  ctx.fillStyle = rim;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (biome.id === "heart") {
    ctx.globalAlpha = 0.08 + Math.sin(nowMs * 0.003) * 0.025;
    ctx.fillStyle = "#ff5c88";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }
}

exports["drawSetDressingDecor"] = drawSetDressingDecor;
exports["drawFireflyDecor"] = drawFireflyDecor;
exports["drawLightingOverlayDecor"] = drawLightingOverlayDecor;

});
define("render/tower-upgrade-vfx.js", function (exports, require, module) {
function easeOut(t) {
  return 1 - (1 - t) ** 2;
}

function burstAlpha(fx) {
  const p = fx.t / fx.duration;
  if (p >= 1) return 0;
  return (1 - p) * (0.4 + Math.sin(p * Math.PI) * 0.5);
}

/** Halo persistant selon le niveau de la plante (couches back / front). */
function drawTowerLevelAura(ctx, tower, animT, layer, bodyR) {
  if (tower.level < 2) return;
  const pulse = 0.5 + 0.5 * Math.sin(animT * 2.4 + tower.id * 0.7);

  if (layer === "back") {
    ctx.save();
    if (tower.level === 2) {
      const r = bodyR + 5 + pulse * 2;
      ctx.globalAlpha = 0.22 + pulse * 0.14;
      const g = ctx.createRadialGradient(tower.x, tower.y, r * 0.35, tower.x, tower.y, r + 10);
      g.addColorStop(0, "rgba(140, 255, 170, 0.45)");
      g.addColorStop(0.6, "rgba(80, 200, 120, 0.18)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, r + 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(170, 255, 200, ${0.35 + pulse * 0.25})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, r, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      const rInner = bodyR + 4 + pulse * 1.5;
      const rOuter = bodyR + 11 + pulse * 3;
      ctx.globalAlpha = 0.28 + pulse * 0.18;
      const g = ctx.createRadialGradient(tower.x, tower.y, 0, tower.x, tower.y, rOuter + 14);
      g.addColorStop(0, "rgba(255, 230, 140, 0.5)");
      g.addColorStop(0.45, "rgba(200, 140, 255, 0.22)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rOuter + 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(255, 220, 120, ${0.45 + pulse * 0.3})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rOuter, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 0.35 + pulse * 0.2;
      ctx.strokeStyle = `rgba(140, 255, 180, ${0.4 + pulse * 0.25})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(tower.x, tower.y, rInner, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  if (layer !== "front") return;

  ctx.save();
  const orbitR = bodyR + 9;
  const orbitCount = tower.level === 2 ? 1 : 3;
  const colors = tower.level === 2
    ? ["#b8ffcc"]
    : ["#ffe87a", "#c8a0ff", "#8fe275"];

  for (let i = 0; i < orbitCount; i += 1) {
    const angle = animT * (tower.level === 2 ? 1.6 : 2.1) + (i / orbitCount) * Math.PI * 2;
    const ox = tower.x + Math.cos(angle) * orbitR;
    const oy = tower.y - 6 + Math.sin(angle) * (orbitR * 0.55);
    const sparkR = tower.level === 2 ? 2.2 : 2.6;
    ctx.globalAlpha = 0.65 + pulse * 0.3;
    const sg = ctx.createRadialGradient(ox, oy, 0, ox, oy, sparkR * 2.5);
    sg.addColorStop(0, colors[i % colors.length]);
    sg.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(ox, oy, sparkR * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = sg;
    ctx.fill();
  }

  if (tower.level >= 3) {
    ctx.globalAlpha = 0.75 + pulse * 0.2;
    ctx.font = "bold 7px monospace";
    ctx.fillStyle = "#ffe87a";
    ctx.textAlign = "center";
    ctx.fillText("★", tower.x, tower.y - bodyR - 10);
  }

  ctx.restore();
}

/** Gerbe locale lors d'une amelioration (niv. 2 ou 3). */
function triggerTowerUpgradeVfx(game, tower, newLevel, emitParticles) {
  if (!game.towerUpgradeVfxList) game.towerUpgradeVfxList = [];

  if (newLevel === 2) {
    emitParticles?.(tower.x, tower.y - 6, "#8fe275", 24);
    emitParticles?.(tower.x, tower.y, "#c3f5ff", 12);
    game.towerUpgradeVfxList.push({
      kind: "lv2",
      t: 0,
      duration: 0.9,
      x: tower.x,
      y: tower.y,
      towerId: tower.id,
    });
    return;
  }

  if (newLevel === 3) {
    emitParticles?.(tower.x, tower.y - 10, "#ffe87a", 36);
    emitParticles?.(tower.x, tower.y, "#ffb84a", 22);
    emitParticles?.(tower.x, tower.y - 4, "#d4b0ff", 14);
    game.towerUpgradeVfxList.push({
      kind: "lv3",
      t: 0,
      duration: 1.15,
      x: tower.x,
      y: tower.y,
      towerId: tower.id,
    });
  }
}

function updateTowerUpgradeVfx(game, dt) {
  if (!game.towerUpgradeVfxList?.length) return;
  for (const fx of game.towerUpgradeVfxList) fx.t += dt;
  game.towerUpgradeVfxList = game.towerUpgradeVfxList.filter((fx) => fx.t < fx.duration);
}

function drawLv2Burst(ctx, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;

  const maxR = 18 + p * 42;
  const g = ctx.createRadialGradient(fx.x, fx.y - 8, 0, fx.x, fx.y - 8, maxR);
  g.addColorStop(0, `rgba(180, 255, 200, ${alpha * 0.7})`);
  g.addColorStop(0.5, `rgba(100, 220, 140, ${alpha * 0.25})`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 8, maxR, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.globalAlpha = alpha * 0.55;
  ctx.strokeStyle = "#d4ffe0";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 4, 10 + p * 28, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha * 0.7;
  ctx.strokeStyle = "#a8ffcc";
  ctx.lineWidth = 1.5;
  const rays = 6;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 2.5;
    const r0 = 6 + p * 8;
    const r1 = maxR * 0.75;
    ctx.beginPath();
    ctx.moveTo(fx.x + Math.cos(a) * r0, fx.y - 10 + Math.sin(a) * r0);
    ctx.lineTo(fx.x + Math.cos(a) * r1, fx.y - 10 + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawLv3Burst(ctx, fx) {
  const p = easeOut(Math.min(1, fx.t / fx.duration));
  const alpha = burstAlpha(fx);
  if (alpha <= 0) return;
  const pulse = 0.5 + Math.sin(fx.t * 10) * 0.5;

  const maxR = 22 + p * 52;
  const g = ctx.createRadialGradient(fx.x, fx.y - 12, 0, fx.x, fx.y - 12, maxR);
  g.addColorStop(0, `rgba(255, 248, 180, ${alpha * 0.85})`);
  g.addColorStop(0.35, `rgba(255, 200, 80, ${alpha * 0.4})`);
  g.addColorStop(0.7, `rgba(180, 120, 255, ${alpha * 0.15})`);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(fx.x, fx.y - 12, maxR, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.globalAlpha = alpha * (0.5 + pulse * 0.35);
  ctx.strokeStyle = "#fff6c8";
  ctx.lineWidth = 2.2;
  for (let ring = 0; ring < 3; ring += 1) {
    const rr = (14 + ring * 10) * (0.7 + p * 0.55) * (0.9 + pulse * 0.1);
    ctx.beginPath();
    ctx.arc(fx.x, fx.y - 8, rr, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = alpha * 0.75;
  ctx.strokeStyle = "#ffe87a";
  ctx.lineWidth = 1.8;
  const rays = 8;
  for (let i = 0; i < rays; i += 1) {
    const a = (i / rays) * Math.PI * 2 + fx.t * 1.4;
    const r0 = 8 + p * 12;
    const r1 = maxR * 0.9;
    ctx.beginPath();
    ctx.moveTo(fx.x + Math.cos(a) * r0, fx.y - 14 + Math.sin(a) * r0);
    ctx.lineTo(fx.x + Math.cos(a) * r1, fx.y - 14 + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.restore();
}

function drawTowerUpgradeVfx(ctx, game) {
  if (!game.towerUpgradeVfxList?.length) return;
  ctx.save();
  for (const fx of game.towerUpgradeVfxList) {
    if (fx.kind === "lv2") drawLv2Burst(ctx, fx);
    else if (fx.kind === "lv3") drawLv3Burst(ctx, fx);
  }
  ctx.restore();
}

exports["drawTowerLevelAura"] = drawTowerLevelAura;
exports["triggerTowerUpgradeVfx"] = triggerTowerUpgradeVfx;
exports["updateTowerUpgradeVfx"] = updateTowerUpgradeVfx;
exports["drawTowerUpgradeVfx"] = drawTowerUpgradeVfx;

});
define("ui/bindings.js", function (exports, require, module) {
function bindUiEvents({
  game,
  towerTypes,
  towerButtons,
  elements,
  actions,
}) {
  const {
    startWaveBtn,
    speedBtn,
    pauseBtn,
    fullscreenBtn,
    audioBtn,
    audioSettingsBtn,
    audioSettingsPopover,
    musicVolumeInput,
    sfxVolumeInput,
    sellConfirmOkBtn,
    sellConfirmCancelBtn,
    skillBoostBtn,
    skillSnareBtn,
    skillUltimateBtn,
    mutationChoicesEl,
    crossroadsChoicesEl,
    waveSummaryContinueBtn,
    bossCardChoicesEl,
    nodeRetryAcceptBtn,
    nodeRetryDeclineBtn,
    upgradeBtn,
    sellBtn,
    overlayButton,
    overlayAscensionBtn,
    overlayLeaderboardBtn,
    collectorChoicesEl,
    towerDraftGridEl,
    towerDraftConfirmBtn,
    towerDraftCountEl,
    draftChoicesEl,
    mapChoicesEl,
    shopChoicesEl,
    shopSkipBtn,
    nodeResultContinueBtn,
    leaderboardBtn,
    leaderboardCloseBtn,
    canvas,
    playerNameInput,
    titlePlayBtn,
    eventChoicesEl,
  } = elements;

  towerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.selectBuildTower(button.dataset.tower);
    });
  });

  startWaveBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.spawnWave();
  });

  speedBtn.addEventListener("click", () => {
    if (game.screen !== "playing") return;
    game.speedMultiplier = game.speedMultiplier === 1 ? 2 : 1;
    speedBtn.textContent = game.speedMultiplier === 1 ? "x1" : "x2";
    actions.saveSpeedPreference?.();
    actions.showMessage(`Vitesse de jeu: ${speedBtn.textContent}`, "normal");
    actions.sfx?.uiToggle?.(game.speedMultiplier !== 1);
  });

  pauseBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.togglePause();
  });

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.toggleFullscreen?.();
    });
  }

  audioBtn.addEventListener("click", () => {
    actions.toggleAudio();
  });

  if (audioSettingsBtn) {
    audioSettingsBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      actions.toggleAudioSettingsPopover();
    });
  }

  if (musicVolumeInput) {
    musicVolumeInput.addEventListener("input", () => {
      actions.setMusicVolumeFromUi(Number(musicVolumeInput.value));
    });
  }

  if (sfxVolumeInput) {
    sfxVolumeInput.addEventListener("input", () => {
      actions.setSfxVolumeFromUi(Number(sfxVolumeInput.value));
      actions.sfx?.uiClick?.();
    });
  }

  document.addEventListener("click", (event) => {
    if (!audioSettingsPopover || audioSettingsPopover.classList.contains("hidden")) return;
    if (event.target.closest(".audio-controls")) return;
    actions.toggleAudioSettingsPopover(false);
  });

  if (sellConfirmOkBtn) {
    sellConfirmOkBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.confirmSellSelectedTower();
    });
  }

  if (sellConfirmCancelBtn) {
    sellConfirmCancelBtn.addEventListener("click", () => {
      actions.cancelSellSelectedTower();
    });
  }

  skillBoostBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.activateBoostSkill();
  });

  skillSnareBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.activateSnareSkill();
  });

  if (skillUltimateBtn) {
    skillUltimateBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.activateCollectorUltimateSkill();
    });
  }

  if (mutationChoicesEl) {
    mutationChoicesEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-mutation-id]");
      if (!button) return;
      actions.ensureAudioContext();
      actions.onMutationChosen(button.dataset.mutationId);
    });
  }

  if (eventChoicesEl) {
    eventChoicesEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-event-choice-id]");
      if (!button) return;
      actions.ensureAudioContext();
      actions.onEventChoiceChosen(button.dataset.eventChoiceId);
    });
  }

  if (crossroadsChoicesEl) {
    crossroadsChoicesEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-crossroads-reward]");
      if (!button) return;
      actions.ensureAudioContext();
      actions.onCrossroadsRewardChosen(button.dataset.crossroadsReward);
    });
  }

  if (waveSummaryContinueBtn) {
    waveSummaryContinueBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.continueAfterWaveSummary();
    });
  }

  if (bossCardChoicesEl) {
    bossCardChoicesEl.addEventListener("click", (event) => {
      const button = event.target.closest("[data-effect-id]");
      if (!button) return;
      actions.ensureAudioContext();
      actions.onBossTempCardChosen(button.dataset.effectId);
    });
  }

  upgradeBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.upgradeSelectedTower();
  });

  sellBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.sellSelectedTower();
  });

  overlayButton.addEventListener("click", () => {
    actions.ensureAudioContext();
    if (game.screen === "gameover" || game.screen === "victory") {
      actions.returnToTitleScreen();
      return;
    }
    actions.openCollectorSelection();
  });

  if (overlayLeaderboardBtn) {
    overlayLeaderboardBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.showLeaderboard();
    });
  }

  if (overlayAscensionBtn) {
    overlayAscensionBtn.addEventListener("click", () => {
      if (game.screen !== "victory") return;
      actions.ensureAudioContext();
      actions.continueCampaignAscension();
    });
  }

  collectorChoicesEl.addEventListener("click", (event) => {
    const button = event.target.closest(".collector-choice");
    if (!button) return;
    actions.ensureAudioContext();
    game.collector.selectedId = button.dataset.collectorId;
    actions.openTowerDraftOverlay();
  });

  towerDraftGridEl.addEventListener("click", (event) => {
    const btn = event.target.closest(".tower-variant-card");
    if (!btn) return;
    const variantId = btn.dataset.variantId;
    const types = towerTypes;
    if (!variantId || !types[variantId]) return;
    const variant = types[variantId];
    const family = variant.family;

    const alreadyIdx = game.towerDeck.findIndex((id) => types[id] && types[id].family === family);
    if (alreadyIdx !== -1) {
      const oldId = game.towerDeck[alreadyIdx];
      game.towerDeck.splice(alreadyIdx, 1);
      towerDraftGridEl.querySelector(`[data-variant-id="${oldId}"]`)?.classList.remove("tvc-selected");
    }

    if (btn.classList.contains("tvc-selected")) {
      btn.classList.remove("tvc-selected");
      game.towerDeck = game.towerDeck.filter((id) => id !== variantId);
    } else {
      if (game.towerDeck.length >= 3) return;
      game.towerDeck.push(variantId);
      btn.classList.add("tvc-selected");
    }

    const count = game.towerDeck.length;
    towerDraftCountEl.textContent = `${count} / 3 sélectionnées`;
    towerDraftConfirmBtn.disabled = count < 3;
    actions.renderTowerShopButtons();
    actions.sfx?.select?.();
  });

    towerDraftConfirmBtn.addEventListener("click", () => {
    if (game.towerDeck.length < 3) return;
    actions.ensureAudioContext();
    actions.renderTowerShopButtons();
    actions.hideTowerDraftOverlay();
    actions.openMutationOverlay();
  });

  draftChoicesEl.addEventListener("click", (event) => {
    const button = event.target.closest(".draft-choice");
    if (!button) return;
    button.classList.add("is-picking");
    actions.ensureAudioContext();
    actions.applyCardById(button.dataset.cardId);
  });

  mapChoicesEl.addEventListener("click", (event) => {
    const button = event.target.closest(".draft-choice");
    if (!button || button.classList.contains("disabled")) return;
    actions.ensureAudioContext();
    const type = button.dataset.nodeType;
    const lane = Number(button.dataset.lane);
    actions.onMapNodeChosen(type, lane);
  });

  shopChoicesEl.addEventListener("click", (event) => {
    const button = event.target.closest(".shop-choice");
    if (!button || button.classList.contains("disabled")) return;
    actions.ensureAudioContext();
    button.classList.add("is-buying");
    window.setTimeout(() => button.classList.remove("is-buying"), 360);
    actions.buyShopOfferById(button.dataset.offerId);
  });

  shopSkipBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.advanceAfterShop();
  });

  if (elements.nodeRetryAcceptBtn) {
    elements.nodeRetryAcceptBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.acceptNodeRetry();
    });
  }
  if (elements.nodeRetryDeclineBtn) {
    elements.nodeRetryDeclineBtn.addEventListener("click", () => {
      actions.ensureAudioContext();
      actions.declineNodeRetry();
    });
  }

  nodeResultContinueBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.advanceFromNodeResult();
  });

  leaderboardBtn.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.showLeaderboard();
  });

  leaderboardCloseBtn.addEventListener("click", () => {
    actions.hideLeaderboard();
  });

  document.getElementById("leaderboard-overlay")?.addEventListener("click", (event) => {
    if (event.target.closest("#leaderboard-retry-btn")) {
      actions.ensureAudioContext();
      void actions.refreshLeaderboardLocal();
    }
  });

  let suppressBoardClickUntil = 0;

  const syncTitlePlayState = () => {
    if (!titlePlayBtn) return;
    titlePlayBtn.disabled = !(playerNameInput?.value || "").trim();
  };

  const submitPlayerName = () => {
    const name = (playerNameInput?.value || "").trim();
    if (!name) {
      playerNameInput?.focus();
      actions.showMessage?.("Entre ton pseudo pour commencer.", "warn");
      syncTitlePlayState();
      return;
    }
    actions.savePlayerName(name);
    actions.tryStartTitleMusic();
    actions.advancePastTitle();
  };

  syncTitlePlayState();

  canvas.addEventListener(
    "touchend",
    (event) => {
      if (game.screen === "title") {
        event.preventDefault();
        suppressBoardClickUntil = Date.now() + 450;
        actions.tryStartTitleMusic();
        return;
      }
      if (game.screen !== "playing") return;
      event.preventDefault();
      suppressBoardClickUntil = Date.now() + 450;
      actions.onBoardPointer(event);
    },
    { passive: false }
  );

  canvas.addEventListener("click", (event) => {
    if (Date.now() < suppressBoardClickUntil) return;
    if (game.screen === "title") {
      actions.tryStartTitleMusic();
      return;
    }
    actions.onBoardClick(event);
  });

  canvas.addEventListener("mousemove", (event) => {
    if (game.screen !== "playing") return;
    actions.onBoardPointerMove?.(event);
  });

  canvas.addEventListener("mouseleave", () => {
    actions.clearPlacementHover?.();
  });

  canvas.addEventListener(
    "touchmove",
    (event) => {
      if (game.screen !== "playing") return;
      actions.onBoardPointerMove?.(event);
    },
    { passive: true }
  );

  const cancelPlacementBtn = document.getElementById("cancel-placement-btn");
  cancelPlacementBtn?.addEventListener("click", () => {
    actions.cancelTowerPlacement();
  });

  const titleResumeBtn = document.getElementById("title-resume-btn");
  titleResumeBtn?.addEventListener("click", () => {
    actions.ensureAudioContext();
    actions.resumeRunFromSave();
  });

  window.addEventListener("beforeunload", () => {
    actions.persistRunSaveNow?.();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      actions.persistRunSaveNow?.();
    }
  });

  document.addEventListener("click", (event) => {
    if (game.screen !== "title") return;
    if (event.target.closest("#board")) return;
    if (event.target.closest("#title-input-wrap")) return;
    if (event.target.closest("#title-resume-panel")) return;
    if (event.target.closest("#title-daily-panel")) return;
    actions.tryStartTitleMusic();
  });

  if (playerNameInput) {
    playerNameInput.addEventListener("focus", () => { actions.tryStartTitleMusic(); });
    playerNameInput.addEventListener("input", () => {
      actions.tryStartTitleMusic();
      syncTitlePlayState();
    });
    playerNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); submitPlayerName(); }
    });
  }

  if (titlePlayBtn) {
    titlePlayBtn.addEventListener("click", () => { submitPlayerName(); });
  }

  window.addEventListener("keydown", (event) => {
    if (game.screen === "title") {
      if (event.target === playerNameInput) return;
      actions.tryStartTitleMusic();
      return;
    }
    const key = event.key.toLowerCase();
    if (["1", "2", "3"].includes(key) && game.screen === "playing") {
      const index = Number(key) - 1;
      const btn = towerButtons[index];
      if (btn) {
        actions.selectBuildTower(btn.dataset.tower);
        btn.focus();
      }
      return;
    }
    if (key === " " && game.screen === "playing") {
      event.preventDefault();
      actions.spawnWave();
      return;
    }
    if (key === "b") {
      actions.ensureAudioContext();
      actions.activateBoostSkill();
      return;
    }
    if (key === "n") {
      actions.ensureAudioContext();
      actions.activateSnareSkill();
      return;
    }
    if (key === "u") {
      actions.ensureAudioContext();
      actions.activateCollectorUltimateSkill?.();
      return;
    }
    if (key === "p") {
      actions.ensureAudioContext();
      actions.togglePause();
      return;
    }
    if (game.screen === "map" && ["1", "2", "3"].includes(key)) {
      const lane = Number(key) - 1;
      if (actions.isLaneReachable && !actions.isLaneReachable(lane)) return;
      const floorNodes = game.spire.map[game.spire.floor] || [];
      const type = floorNodes[lane];
      if (type) actions.onMapNodeChosen(type, lane);
      return;
    }
    if (game.screen === "shop" && key === "q") {
      actions.ensureAudioContext();
      actions.advanceAfterShop();
      return;
    }
    if (game.screen === "nodeResult" && (key === "enter" || key === " ")) {
      event.preventDefault();
      actions.ensureAudioContext();
      actions.advanceFromNodeResult();
    }
  });
}

exports["bindUiEvents"] = bindUiEvents;

});
define("ui/viewport.js", function (exports, require, module) {
/** Détection phone / tablette / desktop + variables layout dynamiques. */

function getFormFactor(width = window.innerWidth) {
  if (width <= 860) return "phone";
  if (width <= 1200) return "tablet";
  return "desktop";
}

function isPhoneViewport() {
  return getFormFactor() === "phone";
}

function isTabletViewport() {
  return getFormFactor() === "tablet";
}

function isTouchLayout() {
  return getFormFactor() !== "desktop";
}

function isLandscapeViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(orientation: landscape)").matches;
}

function fallbackDockHeight(factor, screen) {
  const gameplay = screen === "playing" || screen === "paused";
  if (factor === "phone" && gameplay) {
    return isLandscapeViewport() ? 108 : 148;
  }
  return 0;
}

function measureDockHeight(factor, screen) {
  const gameplay = screen === "playing" || screen === "paused";
  if (!gameplay || factor === "desktop") return 0;

  const dock = document.querySelector(".combat-dock");
  if (!dock || getComputedStyle(dock).display === "none") return 0;

  const position = getComputedStyle(dock).position;
  const height = Math.ceil(dock.getBoundingClientRect().height) || 0;
  if (!height) return fallbackDockHeight(factor, screen);

  if (factor === "phone") {
    return position === "fixed" ? height : 0;
  }

  if (factor === "tablet") return height;
  return 0;
}

function updateViewport(screen = document.body?.dataset?.screen || "title") {
  const factor = getFormFactor();
  const phonePortrait = factor === "phone" && !isLandscapeViewport();
  if (typeof document !== "undefined") {
    document.body.dataset.formFactor = factor;
    document.body.classList.toggle(
      "is-touch-landscape",
      factor !== "desktop" && isLandscapeViewport()
    );
    document.body.classList.toggle("is-phone-portrait", phonePortrait);
    document.documentElement.style.setProperty(
      "--dock-height",
      `${measureDockHeight(factor, screen)}px`
    );
  }
  return factor;
}

function initViewport({ onChange } = {}) {
  const refresh = () => {
    const screen = document.body?.dataset?.screen || "title";
    const factor = updateViewport(screen);
    onChange?.(factor, screen);
  };
  refresh();
  window.addEventListener("resize", refresh, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(refresh, 120);
  });
  return { refresh, getFormFactor, isPhoneViewport, isTabletViewport, isTouchLayout };
}

exports["getFormFactor"] = getFormFactor;
exports["isPhoneViewport"] = isPhoneViewport;
exports["isTabletViewport"] = isTabletViewport;
exports["isTouchLayout"] = isTouchLayout;
exports["updateViewport"] = updateViewport;
exports["initViewport"] = initViewport;

});
define("ui/mobile-shell.js", function (exports, require, module) {
const { getFormFactor, isPhoneViewport, isTabletViewport, isTouchLayout } = require("ui/viewport.js");
/** Tiroir deck / onglets run et panneau stats repliable (mobile / tablette). */
/** Tiroir deck / onglets run et panneau stats repliable (mobile). */
function initMobileShell({
  runDrawer,
  runDrawerFab,
  runDrawerScrim,
  runDrawerClose,
  runDrawerTabs,
  runTabPanels,
  statsMoreBtn,
  statsGrid,
  onDrawerChange,
}) {
  let activeTab = "deck";

  function isMobileShell() {
    return isPhoneViewport();
  }

  function isTabletShell() {
    return isTabletViewport();
  }

  function isTouchShell() {
    return isTouchLayout();
  }

  function setTab(tabId) {
    activeTab = tabId;
    runDrawerTabs?.forEach((tab) => {
      const on = tab.dataset.runTab === tabId;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    runTabPanels?.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.runTabPanel === tabId);
    });
  }

  function openRunDrawer(tabId) {
    if (!isTouchShell() || !runDrawer) return;
    if (tabId) setTab(tabId);
    runDrawer.classList.add("is-open");
    runDrawerScrim?.classList.remove("hidden");
    runDrawerFab?.setAttribute("aria-expanded", "true");
    document.body.classList.add("run-drawer-open");
    onDrawerChange?.(true);
  }

  function closeRunDrawer() {
    if (!runDrawer) return;
    runDrawer.classList.remove("is-open");
    runDrawerScrim?.classList.add("hidden");
    runDrawerFab?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("run-drawer-open");
    onDrawerChange?.(false);
  }

  function toggleRunDrawer() {
    if (runDrawer?.classList.contains("is-open")) closeRunDrawer();
    else openRunDrawer(activeTab);
  }

  function toggleStatsExpanded() {
    if (!statsGrid || !statsMoreBtn) return;
    const expanded = statsGrid.classList.toggle("is-expanded");
    statsMoreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    statsMoreBtn.classList.toggle("is-expanded", expanded);
  }

  runDrawerFab?.addEventListener("click", toggleRunDrawer);
  runDrawerScrim?.addEventListener("click", closeRunDrawer);
  runDrawerClose?.addEventListener("click", closeRunDrawer);

  runDrawerTabs?.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.runTab));
  });

  statsMoreBtn?.addEventListener("click", toggleStatsExpanded);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && runDrawer?.classList.contains("is-open")) {
      closeRunDrawer();
    }
  });

  return {
    openRunDrawer,
    closeRunDrawer,
    setTab,
    isMobileShell,
    isTabletShell,
    isTouchShell,
  };
}

function updateRunDrawerBadge(badgeEl, deckCount, relicCount) {
  if (!badgeEl) return;
  const total = deckCount + relicCount;
  if (total <= 0) {
    badgeEl.classList.add("hidden");
    badgeEl.textContent = "0";
    return;
  }
  badgeEl.classList.remove("hidden");
  badgeEl.textContent = String(total);
}

exports["initMobileShell"] = initMobileShell;
exports["updateRunDrawerBadge"] = updateRunDrawerBadge;
exports["getFormFactor"] = getFormFactor;
exports["isPhoneViewport"] = isPhoneViewport;
exports["isTabletViewport"] = isTabletViewport;
exports["isTouchLayout"] = isTouchLayout;

});
define("ui/orientation-lock.js", function (exports, require, module) {
const { updateViewport } = require("ui/viewport.js");
/** Indique l'orientation téléphone sans bloquer l'UI mobile/PWA. */
function isPortraitPhone() {
  if (typeof window === "undefined") return false;
  if (window.innerWidth > 860) return false;
  return window.matchMedia("(orientation: portrait)").matches;
}

function initOrientationLock({ overlayEl } = {}) {
  const update = () => {
    const portrait = isPortraitPhone();
    const orientation = portrait ? "portrait" : "landscape";
    document.body.dataset.orientation = orientation;
    document.body.classList.remove("orientation-blocked");
    overlayEl?.classList.add("hidden");
    overlayEl?.setAttribute("aria-hidden", "true");
    updateViewport(document.body?.dataset?.screen || "title");
    return portrait;
  };

  update();
  window.addEventListener("resize", update, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(update, 150);
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) update();
  });

  return { update, isPortraitPhone };
}

exports["isPortraitPhone"] = isPortraitPhone;
exports["initOrientationLock"] = initOrientationLock;

});
define("ui/hud-collapse.js", function (exports, require, module) {
const { isTouchLayout } = require("ui/viewport.js");
const STORAGE_KEY = "rtdtd-hud-collapsed";

function isTouchLandscape() {
  return (
    isTouchLayout()
    && typeof window !== "undefined"
    && window.matchMedia("(orientation: landscape)").matches
  );
}

function initHudCollapse({ collapseBtn, onChange } = {}) {
  let collapsed = readPreference();

  function apply(next) {
    collapsed = next;
    document.body.classList.toggle("hud-collapsed", collapsed);
    collapseBtn?.setAttribute("aria-expanded", collapsed ? "false" : "true");
    collapseBtn?.classList.toggle("is-collapsed", collapsed);
    collapseBtn?.setAttribute(
      "aria-label",
      collapsed ? "Agrandir le panneau latéral" : "Réduire le panneau latéral"
    );
    onChange?.(collapsed);
  }

  function readPreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "0") return false;
    if (stored === "1") return true;
    return isTouchLandscape();
  }

  function refreshChrome() {
    const touchLandscape = isTouchLandscape();
    document.body.classList.toggle("is-touch-landscape", touchLandscape);
    collapseBtn?.classList.toggle("hidden", !touchLandscape);
    if (!touchLandscape) {
      document.body.classList.remove("hud-collapsed");
      return;
    }
    apply(collapsed);
  }

  collapseBtn?.addEventListener("click", () => {
    apply(!collapsed);
    localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
  });

  refreshChrome();
  window.addEventListener("resize", refreshChrome, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(refreshChrome, 150);
  });

  return {
    refresh: refreshChrome,
    setCollapsed: (value, { persist = false } = {}) => {
      if (persist) localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
      apply(value);
    },
    isCollapsed: () => collapsed,
  };
}

function collapseHudForCombat(hudCollapse) {
  if (!isTouchLandscape()) return;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "0") return;
  hudCollapse?.setCollapsed?.(true);
}

exports["isTouchLandscape"] = isTouchLandscape;
exports["initHudCollapse"] = initHudCollapse;
exports["collapseHudForCombat"] = collapseHudForCombat;

});
define("audio/run-music.js", function (exports, require, module) {
/** Theme principal + ambiance run — motif discret, mixe comme fond d'app moderne. */

const TITLE_BEAT = 0.78;

const TITLE_MELODY = [
  [659.25, 2], [587.33, 1], [523.25, 1], [440, 3], [0, 1],
  [523.25, 0.5], [587.33, 1], [659.25, 1.5], [783.99, 1], [659.25, 2], [0, 2],
  [587.33, 1.5], [523.25, 0.5], [440, 1], [523.25, 1], [587.33, 1], [440, 1], [329.63, 1], [0, 1],
  [440, 1], [523.25, 0.5], [587.33, 0.5], [659.25, 2], [523.25, 1], [440, 3],
];

const TITLE_ARPEGGIO = [
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

function createRunMusicController({ audio, ensureAudioContext }) {
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
function createTitleMusicController(deps) {
  const ctrl = createRunMusicController(deps);
  return {
    start: () => ctrl.startTitle(),
    stop: () => ctrl.stop(),
  };
}

exports["TITLE_BEAT"] = TITLE_BEAT;
exports["TITLE_MELODY"] = TITLE_MELODY;
exports["TITLE_ARPEGGIO"] = TITLE_ARPEGGIO;
exports["createRunMusicController"] = createRunMusicController;
exports["createTitleMusicController"] = createTitleMusicController;

});
define("content/effects.js", function (exports, require, module) {
/** Registre des effets cartes/reliques (logique non sérialisable). */

const CARD_EFFECT_IDS = new Set([
  "fertile_winds", "acid_sap", "apex_jaws", "thorn_lord", "long_tendrils",
  "sun_contract", "spore_reactor", "hyper_resin", "temporal_moss", "overgrowth",
  "deep_roots", "critical_nectar", "predator_instinct",
  "b52_mastication", "ryu_embrase", "tiger_fangs", "atlas_corrosif", "belle_entrave",
  "fureur_ardente", "creamsicle_nectar", "capensis_explosion", "scorpioides_chaine",
  "gale_folie", "resin_trap", "solar_lens", "beast_hunter", "venom_spread",
  "thorn_wall", "snapper_bite", "moss_armor", "flare_bloom",
]);

const RELIC_EFFECT_IDS = new Set([
  "sun_idol", "venom_gland", "titan_bark", "pulse_root", "thorn_crown",
  "amber_seed", "moss_cloak", "fang_relic", "bloom_chalice", "spore_satchel",
  "honey_lens", "night_bell", "cursed_amber", "frenzied_spores", "hollow_nectar",
]);

function applyCardEffect(effectId, ctx) {
  const { game } = ctx;
  const m = game.modifiers;
  switch (effectId) {
    case "fertile_winds": m.globalFireRate *= 1.1; break;
    case "acid_sap": m.spitterPoison += 6; break;
    case "apex_jaws": m.snapperDamage *= 1.26; break;
    case "thorn_lord": m.thornDamage *= 1.18; m.thornRange += 16; break;
    case "long_tendrils": m.globalRange += 14; break;
    case "sun_contract": game.gold += 75; m.rewardMult *= 1.07; break;
    case "spore_reactor": m.globalDamage *= 1.1; break;
    case "hyper_resin": m.projectileSpeedMult *= 1.15; break;
    case "temporal_moss": m.skillExtraUsesPerWave = (m.skillExtraUsesPerWave || 0) + 1; break;
    case "overgrowth": m.boostDurationBonus += 1.8; break;
    case "deep_roots": m.snareDurationBonus += 1.5; break;
    case "critical_nectar": m.critChance += 0.07; break;
    case "predator_instinct": m.globalDamage *= 1.05; m.globalFireRate *= 1.03; break;
    case "b52_mastication":
      m.b52ArmorDur = (m.b52ArmorDur || 3) + 2;
      m.b52DamageBonus = (m.b52DamageBonus || 1) * 1.18;
      break;
    case "ryu_embrase":
      m.ryuBurnDps = (m.ryuBurnDps || 10) + 3;
      m.ryuBurnSpread = true;
      break;
    case "tiger_fangs": m.tigerPierceCount = 3; break;
    case "atlas_corrosif": m.atlasExtraPoison = (m.atlasExtraPoison || 0) + 8; break;
    case "belle_entrave": m.belleSlow = 0.52; break;
    case "fureur_ardente": m.fureurMaxStacks = (m.fureurMaxStacks || 10) + 3; break;
    case "creamsicle_nectar": m.creamsicleAuraBonus = (m.creamsicleAuraBonus || 0) + 14; break;
    case "capensis_explosion": m.capensisAoe = (m.capensisAoe || 55) + 20; break;
    case "scorpioides_chaine": m.scorpioChain = 3; break;
    case "gale_folie": m.critMult *= 1.08; break;
    case "resin_trap": m.snareDurationBonus += 1; break;
    case "solar_lens": m.globalRange += 10; break;
    case "beast_hunter": m.rewardMult *= 1.08; break;
    case "venom_spread": m.spitterPoison += 3; break;
    case "thorn_wall": m.thornDamage *= 1.12; break;
    case "snapper_bite": m.snapperDamage *= 1.12; break;
    case "moss_armor": game.maxLives += 2; game.lives = Math.min(game.maxLives, game.lives + 2); break;
    case "flare_bloom": m.globalDamage *= 1.04; m.globalFireRate *= 1.04; break;
    default:
      throw new Error(`Effet carte inconnu: ${effectId}`);
  }
}

function applyRelicEffect(effectId, ctx) {
  const { game } = ctx;
  const m = game.modifiers;
  switch (effectId) {
    case "sun_idol": m.rewardMult *= 1.12; break;
    case "venom_gland": m.spitterPoison += 4; break;
    case "titan_bark": {
      game.maxLives += 3;
      if (!ctx.skipInstantHeal) {
        const heal = Math.round(game.maxLives * 0.5);
        game.lives = Math.min(game.maxLives, game.lives + heal);
      }
      break;
    }
    case "pulse_root": m.skillExtraUsesPerWave = (m.skillExtraUsesPerWave || 0) + 1; break;
    case "thorn_crown": m.thornDamage *= 1.18; break;
    case "amber_seed": m.globalFireRate *= 1.08; break;
    case "moss_cloak": m.enemySpawnSpeedMult = (m.enemySpawnSpeedMult || 1) * 0.94; break;
    case "fang_relic": m.snapperDamage *= 1.12; break;
    case "bloom_chalice": m.waveClearHeal = (m.waveClearHeal || 0) + 1; break;
    case "spore_satchel": m.globalDamage *= 1.08; break;
    case "honey_lens": m.globalRange += 10; break;
    case "night_bell": m.critChance += 0.05; break;
    case "cursed_amber":
      m.rewardMult *= 1.15;
      game.maxLives = Math.max(4, game.maxLives - 1);
      game.lives = Math.min(game.lives, game.maxLives);
      break;
    case "frenzied_spores":
      m.globalFireRate *= 1.08;
      m.enemySpawnSpeedMult = (m.enemySpawnSpeedMult || 1) * 1.04;
      break;
    case "hollow_nectar":
      game.gold += 60;
      game.lives = Math.max(1, game.lives - 2);
      break;
    default:
      throw new Error(`Effet relique inconnu: ${effectId}`);
  }
}

function hydrateCards(rawCards, getContext) {
  return rawCards.map((card) => ({
    ...card,
    effect: () => applyCardEffect(card.effectId, getContext()),
  }));
}

function hydrateRelics(rawRelics, getContext) {
  return rawRelics.map((relic) => ({
    ...relic,
    effect: (opts = {}) => applyRelicEffect(relic.effectId, { ...getContext(), ...opts }),
  }));
}

exports["CARD_EFFECT_IDS"] = CARD_EFFECT_IDS;
exports["RELIC_EFFECT_IDS"] = RELIC_EFFECT_IDS;
exports["applyCardEffect"] = applyCardEffect;
exports["applyRelicEffect"] = applyRelicEffect;
exports["hydrateCards"] = hydrateCards;
exports["hydrateRelics"] = hydrateRelics;

});
define("content/validator.js", function (exports, require, module) {
const { CARD_EFFECT_IDS, RELIC_EFFECT_IDS } = require("content/effects.js");
const RARITIES = new Set(["Commune", "Rare", "Epique"]);
const NODE_TYPES = new Set(["combat", "elite", "event", "rest", "shop", "boss", "crossroads"]);

function isNum(v) {
  return typeof v === "number" && Number.isFinite(v);
}

function push(errors, path, msg) {
  errors.push(`${path}: ${msg}`);
}

function validateGameContent(data) {
  const errors = [];
  if (!data || typeof data !== "object") {
    return ["content: racine invalide"];
  }

  const towerIds = new Set();
  for (const [id, tower] of Object.entries(data.towers || {})) {
    if (id !== tower.id) push(errors, `towers.${id}`, "id doit correspondre à la clé");
    towerIds.add(id);
    if (!tower.name) push(errors, `towers.${id}`, "name requis");
    if (!isNum(tower.cost) || tower.cost <= 0) push(errors, `towers.${id}`, "cost > 0");
    if (!isNum(tower.damage)) push(errors, `towers.${id}`, "damage requis");
  }

  for (const [id, enemy] of Object.entries(data.enemies || {})) {
    if (!isNum(enemy.hpMult) || enemy.hpMult <= 0) push(errors, `enemies.${id}`, "hpMult invalide");
  }

  const cardIds = new Set();
  for (const card of data.cards || []) {
    if (cardIds.has(card.id)) push(errors, `cards.${card.id}`, "id dupliqué");
    cardIds.add(card.id);
    if (!CARD_EFFECT_IDS.has(card.effectId)) push(errors, `cards.${card.id}`, `effectId inconnu: ${card.effectId}`);
    if (!RARITIES.has(card.rarity)) push(errors, `cards.${card.id}`, `rarity invalide`);
    if (card.towerCard && !towerIds.has(card.towerCard)) {
      push(errors, `cards.${card.id}`, `towerCard inconnu: ${card.towerCard}`);
    }
    if (card.stackable && card.maxStack != null && card.maxStack > 0) {
      if (!isNum(card.maxStack)) push(errors, `cards.${card.id}`, "maxStack invalide");
    }
  }

  const relicIds = new Set();
  for (const relic of data.relics || []) {
    if (relicIds.has(relic.id)) push(errors, `relics.${relic.id}`, "id dupliqué");
    relicIds.add(relic.id);
    if (!RELIC_EFFECT_IDS.has(relic.effectId)) push(errors, `relics.${relic.id}`, `effectId inconnu`);
  }

  for (const biome of data.biomes || []) {
    if (!biome.id) push(errors, "biomes", "id requis");
    if (!Array.isArray(biome.bg) || biome.bg.length !== 3) push(errors, `biomes.${biome.id}`, "bg[3] requis");
  }

  for (const c of data.collectors || []) {
    if (!c.id) push(errors, "collectors", "id requis");
    if (!c.ultimateId) push(errors, `collectors.${c.id}`, "ultimateId requis");
    if (!c.ultimateName) push(errors, `collectors.${c.id}`, "ultimateName requis");
    if (!c.ultimateDesc) push(errors, `collectors.${c.id}`, "ultimateDesc requis");
  }

  if (!data.encounters?.elite || !data.encounters?.boss) {
    push(errors, "encounters", "elite et boss requis");
  }

  for (const step of data.onboarding?.steps || []) {
    if (!step.id || !step.title) push(errors, "onboarding", "step id/title requis");
  }

  if (!Array.isArray(data.mapNodePool)) {
    push(errors, "mapNodePool", "liste requise");
  } else {
    data.mapNodePool.forEach((t, i) => {
      if (!NODE_TYPES.has(t)) push(errors, `mapNodePool[${i}]`, `type invalide: ${t}`);
    });
  }

  return errors;
}

exports["validateGameContent"] = validateGameContent;

});
define("content/loader.js", function (exports, require, module) {
const { hydrateCards, hydrateRelics } = require("content/effects.js");
const { validateGameContent } = require("content/validator.js");
function rawContentFromParts(version, parts) {
  return {
    version,
    towers: parts["towers.json"],
    enemies: parts["enemies.json"],
    cards: parts["cards.json"],
    relics: parts["relics.json"],
    biomes: parts["biomes.json"],
    collectors: parts["collectors.json"],
    encounters: parts["encounters.json"],
    onboarding: parts["onboarding.json"],
    tooltips: parts["tooltips.json"],
    mapNodePool: parts["map.json"].pool,
    mapLanes: parts["map-lanes.json"],
    mutations: parts["mutations.json"],
    waveModifiers: parts["wave-modifiers.json"],
    nodeObjectives: parts["node-objectives.json"],
    bossTempCards: parts["boss-temp-cards.json"],
    deckSynergies: parts["deck-synergies.json"],
    dailyChallenges: parts["daily-challenge.json"],
    events: parts["events.json"],
    meta: parts["meta.json"],
  };
}

async function fetchRawContent() {
  const embedded = globalThis.__RDTD_STANDALONE_CONTENT__;
  if (embedded?.files) {
    return rawContentFromParts(embedded.version, embedded.files);
  }

  throw new Error("Contenu standalone manquant. Regénère standalone.js.");
}

function buildGameContent(raw, getContext) {
  const errors = validateGameContent(raw);
  if (errors.length > 0) {
    console.warn("[content] validation:", errors);
  }

  const towerTypes = {};
  for (const [key, tower] of Object.entries(raw.towers)) {
    towerTypes[key] = { ...tower };
  }

  return {
    version: raw.version,
    errors,
    towerTypes,
    enemyTypes: raw.enemies,
    CARD_LIBRARY: hydrateCards(raw.cards, getContext),
    RELIC_LIBRARY: hydrateRelics(raw.relics, getContext),
    BIOMES: raw.biomes,
    COLLECTOR_LIBRARY: raw.collectors,
    ENCOUNTER_CONFIG: raw.encounters,
    ONBOARDING: raw.onboarding,
    TOOLTIPS: raw.tooltips,
    MAP_NODE_POOL: raw.mapNodePool,
    MAP_LANE_CONFIG: raw.mapLanes,
    MUTATION_LIBRARY: raw.mutations,
    WAVE_MODIFIER_LIBRARY: raw.waveModifiers,
    NODE_OBJECTIVE_LIBRARY: raw.nodeObjectives,
    BOSS_TEMP_CARD_LIBRARY: raw.bossTempCards,
    DECK_SYNERGY_CONFIG: raw.deckSynergies,
    DAILY_CHALLENGES: raw.dailyChallenges,
    EVENT_LIBRARY: raw.events || [],
    META: raw.meta,
  };
}

async function loadGameContent(getContext) {
  const raw = await fetchRawContent();
  return buildGameContent(raw, getContext);
}

exports["fetchRawContent"] = fetchRawContent;
exports["buildGameContent"] = buildGameContent;
exports["loadGameContent"] = loadGameContent;

});
define("logic/leaderboard-api.js", function (exports, require, module) {
const LEADERBOARD_MAX = 8;

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
async function fetchLeaderboard() {
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
async function submitLeaderboardEntry(entry) {
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

exports["LEADERBOARD_MAX"] = LEADERBOARD_MAX;
exports["fetchLeaderboard"] = fetchLeaderboard;
exports["submitLeaderboardEntry"] = submitLeaderboardEntry;

});
define("logic/map-generation.js", function (exports, require, module) {
function pickWeighted(weights, fallbackPool, rng = Math.random) {
  const entries = Object.entries(weights || {}).filter(([, w]) => w > 0);
  if (!entries.length) {
    return fallbackPool[Math.floor(rng() * fallbackPool.length)] || "combat";
  }
  let total = 0;
  for (const [, w] of entries) total += w;
  let roll = rng() * total;
  for (const [type, w] of entries) {
    roll -= w;
    if (roll <= 0) return type;
  }
  return entries[entries.length - 1][0];
}

function rollCrossroadsFloor(maxFloors, laneConfig, rng = Math.random) {
  const cfg = laneConfig?.crossroads || {};
  const min = cfg.minFloor ?? 2;
  const max = maxFloors - (cfg.maxFloorOffset ?? 3);
  if (max <= min) return min;
  return min + Math.floor(rng() * (max - min + 1));
}

/**
 * @returns {{ map: string[][], crossroadsFloor: number|null }}
 */
function generateSpireMap({
  maxFloors,
  mapNodePool,
  laneConfig,
  rng = Math.random,
}) {
  const pool = mapNodePool?.length
    ? mapNodePool
    : ["combat", "combat", "event", "rest", "shop", "elite"];
  const lanes = laneConfig?.lanes || [];
  const crossroadsFloor = rollCrossroadsFloor(maxFloors, laneConfig, rng);
  const map = [];

  for (let floor = 0; floor < maxFloors; floor += 1) {
    if (floor === 0) {
      map.push(["combat", "combat", "combat"]);
      continue;
    }
    if (floor === maxFloors - 1) {
      map.push(["boss", "boss", "boss"]);
      continue;
    }
    if (floor === crossroadsFloor) {
      map.push(["crossroads", "crossroads", "crossroads"]);
      continue;
    }
    const row = [];
    for (let lane = 0; lane < 3; lane += 1) {
      const laneDef = lanes[lane];
      const type = pickWeighted(laneDef?.weights, pool, rng);
      row.push(type);
    }
    map.push(row);
  }

  return { map, crossroadsFloor };
}

function getLaneAffinityHint(lane, laneConfig) {
  return laneConfig?.lanes?.[lane]?.hint || "";
}

function getLaneEncounterHpMult(lane, laneConfig) {
  return laneConfig?.lanes?.[lane]?.encounterHpMult ?? 1;
}

function getLaneDef(lane, laneConfig) {
  return laneConfig?.lanes?.[lane] ?? null;
}

function getLaneEventLaneTag(lane, laneConfig) {
  return getLaneDef(lane, laneConfig)?.eventLaneTag || null;
}

function getLaneEventUniqueBias(lane, laneConfig) {
  return getLaneDef(lane, laneConfig)?.eventUniqueBias ?? 0;
}

function laneGuaranteesWaveModifier(lane, laneConfig) {
  return Boolean(getLaneDef(lane, laneConfig)?.guaranteedWaveModifier);
}

/** Type de nœud à l'étage floor+offset sur le couloir lane. */
function getPreviewNodeType(map, floor, lane, maxFloors, offset = 2) {
  const target = floor + offset;
  if (target >= maxFloors - 1) return "boss";
  if (target < 0 || !map[target]) return null;
  return map[target][lane] ?? null;
}

/** Aperçu multi-etages pour la carte (etages +1, +2, +3). */
function getMapLanePreview(map, floor, lane, maxFloors) {
  const steps = [];
  for (const offset of [1, 2, 3]) {
    const type = getPreviewNodeType(map, floor, lane, maxFloors, offset);
    if (!type) continue;
    steps.push({ floor: floor + offset + 1, type });
  }
  return steps;
}

exports["rollCrossroadsFloor"] = rollCrossroadsFloor;
exports["generateSpireMap"] = generateSpireMap;
exports["getLaneAffinityHint"] = getLaneAffinityHint;
exports["getLaneEncounterHpMult"] = getLaneEncounterHpMult;
exports["getLaneDef"] = getLaneDef;
exports["getLaneEventLaneTag"] = getLaneEventLaneTag;
exports["getLaneEventUniqueBias"] = getLaneEventUniqueBias;
exports["laneGuaranteesWaveModifier"] = laneGuaranteesWaveModifier;
exports["getPreviewNodeType"] = getPreviewNodeType;
exports["getMapLanePreview"] = getMapLanePreview;

});
define("config/ascension.js", function (exports, require, module) {
/** Niveaux Tourment (Ascension) — difficulté cumulative, style Diablo. */
const MAX_ASCENSION_LEVEL = 5;

/**
 * Valeurs cumulatives par niveau (1 = premier Tourment après campagne).
 * Le joueur conserve deck / reliques ; la pression monte par afflictions variées.
 */
const ASCENSION_TORMENT_BY_LEVEL = {
  1: {
    level: 1,
    name: "Tourment I",
    subtitle: "Ravage implacable",
    hpMult: 1.22,
    speedMult: 1.07,
    rewardMult: 1.1,
    forcedCombatWaveModifier: true,
    shopPriceMult: 1.12,
    rules: [
      "Modificateur de vague aléatoire sur chaque combat",
      "Boutique +12 % de soleil",
    ],
  },
  2: {
    level: 2,
    name: "Tourment II",
    subtitle: "Horde dense",
    hpMult: 1.38,
    speedMult: 1.12,
    rewardMult: 1.2,
    enemyCountMult: 1.12,
    restHealMult: 0.78,
    eliteDamageReduction: 0.94,
    rules: [
      "+12 % d'ennemis par vague",
      "Repos soigne −22 %",
      "Élites : −6 % dégâts subis",
    ],
  },
  3: {
    level: 3,
    name: "Tourment III",
    subtitle: "Brume étouffante",
    hpMult: 1.55,
    speedMult: 1.17,
    rewardMult: 1.3,
    enemyCountMult: 1.14,
    restHealMult: 0.76,
    eliteDamageReduction: 0.93,
    towerRangeBonus: -10,
    towerFireRateMult: 0.96,
    spawnIntervalMult: 0.88,
    mapEliteWeightMult: 1.35,
    rules: [
      "Portée des tours −10 px",
      "Cadence des tours −4 %",
      "Vagues +12 % rapides · plus d'élites sur la carte",
    ],
  },
  4: {
    level: 4,
    name: "Tourment IV",
    subtitle: "Serre impitoyable",
    hpMult: 1.74,
    speedMult: 1.23,
    rewardMult: 1.42,
    enemyCountMult: 1.2,
    restHealMult: 0.68,
    eliteDamageReduction: 0.9,
    towerRangeBonus: -15,
    towerFireRateMult: 0.94,
    spawnIntervalMult: 0.82,
    mapEliteWeightMult: 1.55,
    enemyDamageReduction: 0.95,
    extraLeakLivesElite: 1,
    rules: [
      "Ravageurs ordinaires : −5 % dégâts subis",
      "Fuite sur élite / boss : −2 vies au lieu de −1",
      "Repos affaibli · carte plus hostile",
    ],
  },
  5: {
    level: 5,
    name: "Tourment V",
    subtitle: "Carnage final",
    hpMult: 1.96,
    speedMult: 1.3,
    rewardMult: 1.56,
    enemyCountMult: 1.26,
    restHealMult: 0.62,
    eliteDamageReduction: 0.87,
    towerRangeBonus: -18,
    towerFireRateMult: 0.9,
    spawnIntervalMult: 0.76,
    mapEliteWeightMult: 1.75,
    enemyDamageReduction: 0.92,
    extraLeakLivesElite: 1,
    extraLeakLivesBoss: 2,
    maxLivesPenalty: -2,
    eliteExtraSpawn: 1,
    rules: [
      "−2 vies max · cadence −10 % · portée −18 px",
      "Élites renforcées (+1 vague d'ennemis)",
      "Fuite boss : −3 vies · récompenses +62 %",
    ],
  },
};

function getAscensionTorment(level = 1) {
  const lv = Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level) || 1));
  return ASCENSION_TORMENT_BY_LEVEL[lv] || ASCENSION_TORMENT_BY_LEVEL[1];
}

function formatTormentAfflictions(level = 1) {
  const torment = getAscensionTorment(level);
  return torment.rules.map((rule) => `• ${rule}`).join("\n");
}

function formatTormentThreatLine(level = 1) {
  const t = getAscensionTorment(level);
  const hp = Math.round((t.hpMult - 1) * 100);
  const spd = Math.round((t.speedMult - 1) * 100);
  return `${t.name} — Ennemis +${hp}% PV · +${spd}% vitesse`;
}

function canOfferNextTorment(game) {
  const mode = game?.run?.mode;
  const current = mode === "ascension" ? Number(game.run.ascensionLevel || 1) : 0;
  const next = current + 1;
  if (next > MAX_ASCENSION_LEVEL) return null;
  return next;
}

exports["MAX_ASCENSION_LEVEL"] = MAX_ASCENSION_LEVEL;
exports["ASCENSION_TORMENT_BY_LEVEL"] = ASCENSION_TORMENT_BY_LEVEL;
exports["getAscensionTorment"] = getAscensionTorment;
exports["formatTormentAfflictions"] = formatTormentAfflictions;
exports["formatTormentThreatLine"] = formatTormentThreatLine;
exports["canOfferNextTorment"] = canOfferNextTorment;

});
define("logic/ascension-mechanics.js", function (exports, require, module) {
const { getAscensionTorment } = require("config/ascension.js");
/** Applique les afflictions Tourment sur game.run (mode Ascension). */
function applyTormentToRun(game, level = 1) {
  const torment = getAscensionTorment(level);
  game.run.tormentLevel = torment.level;
  game.run.tormentForcedWaveModifier = Boolean(torment.forcedCombatWaveModifier);
  game.run.tormentShopPriceMult = torment.shopPriceMult ?? 1;
  game.run.tormentRestHealMult = torment.restHealMult ?? 1;
  game.run.tormentEnemyCountMult = torment.enemyCountMult ?? 1;
  game.run.tormentEliteDamageReduction = torment.eliteDamageReduction ?? 1;
  game.run.tormentEnemyDamageReduction = torment.enemyDamageReduction ?? 1;
  game.run.tormentTowerRangeBonus = torment.towerRangeBonus ?? 0;
  game.run.tormentTowerFireRateMult = torment.towerFireRateMult ?? 1;
  game.run.tormentSpawnIntervalMult = torment.spawnIntervalMult ?? 1;
  game.run.tormentMapEliteWeightMult = torment.mapEliteWeightMult ?? 1;
  game.run.tormentExtraLeakElite = torment.extraLeakLivesElite ?? 0;
  game.run.tormentExtraLeakBoss = torment.extraLeakLivesBoss ?? 0;
  game.run.tormentMaxLivesPenalty = torment.maxLivesPenalty ?? 0;
  game.run.tormentEliteExtraSpawn = torment.eliteExtraSpawn ?? 0;
}

function applyTormentMaxLivesPenalty(game) {
  const penalty = game.run?.tormentMaxLivesPenalty || 0;
  if (!penalty) return;
  game.maxLives = Math.max(6, game.maxLives + penalty);
  game.lives = Math.min(game.lives, game.maxLives);
}

function applyTormentEncounterPenalties(encounter, game) {
  if (game.run?.mode !== "ascension") return;
  const rangeBonus = game.run.tormentTowerRangeBonus ?? 0;
  const fireMult = game.run.tormentTowerFireRateMult ?? 1;
  if (rangeBonus) {
    encounter.towerRangeBonus = (encounter.towerRangeBonus || 0) + rangeBonus;
  }
  if (fireMult !== 1) {
    encounter.towerFireRateMult = (encounter.towerFireRateMult || 1) * fireMult;
  }
}

function shouldForceTormentWaveModifier(game, nodeType) {
  if (game.run?.mode !== "ascension") return false;
  if (!game.run.tormentForcedWaveModifier) return false;
  return nodeType === "combat" || nodeType === "elite" || nodeType === "boss";
}

function getTormentShopPriceMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentShopPriceMult ?? 1;
}

function getTormentRestHealMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentRestHealMult ?? 1;
}

function getTormentSpawnIntervalMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentSpawnIntervalMult ?? 1;
}

function getTormentEnemyCountMult(game) {
  if (game.run?.mode !== "ascension") return 1;
  return game.run.tormentEnemyCountMult ?? 1;
}

/** Vies perdues en plus lors d'une fuite (0 = comportement normal). */
function getTormentExtraLeakLives(game, { nodeType, bossBreach = false } = {}) {
  if (game.run?.mode !== "ascension" || bossBreach) return 0;
  if (nodeType === "boss") return game.run.tormentExtraLeakBoss ?? 0;
  if (nodeType === "elite") return game.run.tormentExtraLeakElite ?? 0;
  return 0;
}

function applyTormentEnemyTraits(enemy, game) {
  if (game.run?.mode !== "ascension" || enemy.typeKey === "boss") return;
  const nodeType = game.spire?.currentNodeType;
  let reduction = game.run.tormentEnemyDamageReduction ?? 1;
  if (nodeType === "elite") {
    reduction = Math.min(reduction, game.run.tormentEliteDamageReduction ?? 1);
  }
  if (reduction < 1) {
    enemy.damageReduction = Math.min(enemy.damageReduction ?? 1, reduction);
  }
}

function applyTormentToLaneConfig(laneConfig, eliteWeightMult = 1) {
  if (!eliteWeightMult || eliteWeightMult === 1) return laneConfig;
  const lanes = (laneConfig.lanes || []).map((lane) => {
    if (!lane.weights?.elite) return lane;
    return {
      ...lane,
      weights: {
        ...lane.weights,
        elite: Math.max(1, Math.round(lane.weights.elite * eliteWeightMult)),
      },
    };
  });
  return { ...laneConfig, lanes };
}

function extendQueueForTorment(queue, game, {
  nodeType,
  pickEncounterEnemy,
  floor,
  spireNumber,
  enemyDefs,
  rng,
}) {
  if (game.run?.mode !== "ascension") return queue;
  const countMult = game.run.tormentEnemyCountMult ?? 1;
  let out = queue.slice();
  if (countMult > 1) {
    const target = Math.max(out.length, Math.round(out.length * countMult));
    while (out.length < target) {
      out.push(
        pickEncounterEnemy(floor, spireNumber, enemyDefs, rng)
        || out[Math.floor(rng() * out.length)]
        || "beetle",
      );
    }
  }
  const extraElite = game.run.tormentEliteExtraSpawn ?? 0;
  if (extraElite > 0 && nodeType === "elite") {
    for (let i = 0; i < extraElite; i += 1) {
      out.push(pickEncounterEnemy(floor, spireNumber, enemyDefs, rng) || "beetle");
    }
  }
  return out;
}

exports["applyTormentToRun"] = applyTormentToRun;
exports["applyTormentMaxLivesPenalty"] = applyTormentMaxLivesPenalty;
exports["applyTormentEncounterPenalties"] = applyTormentEncounterPenalties;
exports["shouldForceTormentWaveModifier"] = shouldForceTormentWaveModifier;
exports["getTormentShopPriceMult"] = getTormentShopPriceMult;
exports["getTormentRestHealMult"] = getTormentRestHealMult;
exports["getTormentSpawnIntervalMult"] = getTormentSpawnIntervalMult;
exports["getTormentEnemyCountMult"] = getTormentEnemyCountMult;
exports["getTormentExtraLeakLives"] = getTormentExtraLeakLives;
exports["applyTormentEnemyTraits"] = applyTormentEnemyTraits;
exports["applyTormentToLaneConfig"] = applyTormentToLaneConfig;
exports["extendQueueForTorment"] = extendQueueForTorment;

});
define("logic/seeded-rng.js", function (exports, require, module) {
/** RNG déterministe (Mulberry32) — usage interne run (carte, events, etc.). */
function hashSeedString(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0) || 1;
}

function createSeededRng(seed) {
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

function generateShareableSeed() {
  const part = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${part()}${part()}`;
}

function normalizeSeedInput(raw) {
  const clean = String(raw || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
  return clean || generateShareableSeed();
}

exports["hashSeedString"] = hashSeedString;
exports["createSeededRng"] = createSeededRng;
exports["generateShareableSeed"] = generateShareableSeed;
exports["normalizeSeedInput"] = normalizeSeedInput;

});
define("logic/run-modes.js", function (exports, require, module) {
const { MAX_ASCENSION_LEVEL, getAscensionTorment, formatTormentAfflictions, formatTormentThreatLine, canOfferNextTorment } = require("config/ascension.js");
const { applyTormentMaxLivesPenalty, applyTormentToRun } = require("logic/ascension-mechanics.js");
const { MAX_SPIRES } = require("config/campaign.js");
const { createSeededRng, generateShareableSeed, normalizeSeedInput } = require("logic/seeded-rng.js");
const RUN_MODE_STANDARD = "standard";
const RUN_MODE_ASCENSION = "ascension";

const CAMPAIGN_WON_KEY = "gloutonnes_campaign_won_v1";
const MAX_ASCENSION_BEATEN_KEY = "gloutonnes_max_ascension_beaten_v1";
const RUN_MODE_PREF_KEY = "gloutonnes_run_mode_pref";
const ASCENSION_LEVEL_KEY = "gloutonnes_ascension_level";

const RUN_MODE_LABELS = {
  [RUN_MODE_STANDARD]: "Campagne",
  [RUN_MODE_ASCENSION]: "Tourment",
};
function hasCampaignVictory() {
  try {
    return localStorage.getItem(CAMPAIGN_WON_KEY) === "1";
  } catch {
    return false;
  }
}

function markCampaignVictory() {
  try {
    localStorage.setItem(CAMPAIGN_WON_KEY, "1");
  } catch {
    /* ignore */
  }
}

function loadMaxAscensionBeaten() {
  try {
    const n = Number(localStorage.getItem(MAX_ASCENSION_BEATEN_KEY));
    if (Number.isFinite(n)) return Math.max(0, Math.min(MAX_ASCENSION_LEVEL, Math.floor(n)));
  } catch {
    /* ignore */
  }
  return 0;
}

function markAscensionBeaten(level) {
  const lv = Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level) || 1));
  const prev = loadMaxAscensionBeaten();
  if (lv <= prev) return;
  try {
    localStorage.setItem(MAX_ASCENSION_BEATEN_KEY, String(lv));
  } catch {
    /* ignore */
  }
}

function loadRunModePreference() {
  try {
    const mode = localStorage.getItem(RUN_MODE_PREF_KEY);
    if (mode === RUN_MODE_ASCENSION || mode === RUN_MODE_STANDARD) {
      return mode;
    }
  } catch {
    /* ignore */
  }
  return RUN_MODE_STANDARD;
}

function saveRunModePreference(mode) {
  try {
    localStorage.setItem(RUN_MODE_PREF_KEY, mode);
  } catch {
    /* ignore */
  }
}

function loadAscensionLevel() {
  try {
    const n = Number(localStorage.getItem(ASCENSION_LEVEL_KEY));
    if (Number.isFinite(n)) return Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(n)));
  } catch {
    /* ignore */
  }
  return 1;
}

function saveAscensionLevel(level) {
  try {
    localStorage.setItem(ASCENSION_LEVEL_KEY, String(Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(level)))));
  } catch {
    /* ignore */
  }
}


function loadSeedPreference() {
  return "";
}

function saveSeedPreference(_seed) {
  /* seed utilisateur retiré — seed interne par run */
}

function isRunModeUnlocked(mode) {
  if (mode === RUN_MODE_STANDARD) return true;
  return hasCampaignVictory();
}

/** @deprecated Préférer getAscensionTorment — conservé pour compat bundle. */
function getAscensionModifiers(level = 1) {
  const torment = getAscensionTorment(level);
  return {
    level: torment.level,
    hpMult: torment.hpMult,
    speedMult: torment.speedMult,
    rewardMult: torment.rewardMult,
    label: torment.name,
  };
}

/**
 * Configure game.run pour le mode choisi (avant startNewRun).
 * @returns {() => number} RNG de la run
 */
function configureRunMode(game, {
  mode = RUN_MODE_STANDARD,
  ascensionLevel = 1,
  seedInput = "",
} = {}) {
  const safeMode = isRunModeUnlocked(mode) ? mode : RUN_MODE_STANDARD;
  const seed = normalizeSeedInput(seedInput || game.run?.seed || generateShareableSeed());
  const rng = createSeededRng(seed);

  game.run.mode = safeMode;
  game.run.seed = seed;
  game.run.ascensionLevel = safeMode === RUN_MODE_ASCENSION
    ? Math.max(1, Math.min(MAX_ASCENSION_LEVEL, Math.floor(ascensionLevel) || 1))
    : 1;
  game.run.maxSpires = MAX_SPIRES;
  game.run._rng = rng;

  if (safeMode === RUN_MODE_ASCENSION) {
    const torment = getAscensionTorment(game.run.ascensionLevel);
    applyTormentToRun(game, torment.level);
    game.run.encounterHpMult = (game.run.encounterHpMult || 1) * torment.hpMult;
    game.run.encounterSpeedMult = (game.run.encounterSpeedMult || 1) * torment.speedMult;
    game.encounter.rewardMult = (game.encounter?.rewardMult || 1) * torment.rewardMult;
    game.modifiers.rewardMult = (game.modifiers?.rewardMult || 1) * torment.rewardMult;
  }

  return rng;
}

function getRunRng(game) {
  if (!game.run._rng) {
    game.run._rng = createSeededRng(game.run?.seed || "RDTD");
  }
  return game.run._rng;
}

function getEffectiveMaxSpires(game) {
  return game.run?.maxSpires ?? MAX_SPIRES;
}

function formatRunModeLine(game) {
  const mode = game.run?.mode || RUN_MODE_STANDARD;
  const parts = [RUN_MODE_LABELS[mode] || mode];
  if (mode === RUN_MODE_ASCENSION) {
    const torment = getAscensionTorment(game.run.ascensionLevel || 1);
    parts.push(torment.name);
  }
  return parts.join(" · ");
}

function buildVictoryScreenCopy(game, { score, bestScore, dailyBonus = 0 } = {}) {
  const bonusLine = dailyBonus > 0 ? `\n\nBonus défi du jour : +${dailyBonus.toLocaleString()} score.` : "";
  const scoreLine = `Score final : ${score.toLocaleString()} · Record : ${bestScore.toLocaleString()}${bonusLine}`;
  const nextTorment = canOfferNextTorment(game);
  const isAscension = game.run?.mode === RUN_MODE_ASCENSION;
  const currentLevel = isAscension ? Number(game.run.ascensionLevel || 1) : 0;

  if (isAscension && currentLevel >= MAX_ASCENSION_LEVEL) {
    return {
      title: "Victoire — Maître du Tourment",
      text:
        `Tu as conquis les ${MAX_SPIRES} Spires au ${getAscensionTorment(MAX_ASCENSION_LEVEL).name}.\n\n` +
        "La serre n'a plus de secret pour toi.\n\n" +
        scoreLine,
      buttonText: "Terminer la run",
      ascensionButtonText: "",
    };
  }

  if (nextTorment) {
    const next = getAscensionTorment(nextTorment);
    const intro = isAscension
      ? `Tu as survécu aux ${MAX_SPIRES} Spires en ${getAscensionTorment(currentLevel).name}.\n\n`
      : `Tu as conquis les ${MAX_SPIRES} Spires. La campagne est validée pour le classement.\n\n`;
    const choice = isAscension
      ? `Tu peux clôturer cette run victorieuse ou tenter ${next.name} avec le même deck et les mêmes reliques.\n\n`
      : `Termine ici ou tente ${next.name} : même deck et reliques, mais la serre devient bien plus punitif.\n\n`;
    return {
      title: isAscension ? `Victoire — ${getAscensionTorment(currentLevel).name}` : "Victoire — Maître de la Serre",
      text:
        intro +
        choice +
        `Afflictions de ${next.name} :\n${formatTormentAfflictions(nextTorment)}\n\n` +
        scoreLine,
      buttonText: isAscension ? "Terminer la run" : "Terminer la campagne",
      ascensionButtonText: `Tenter ${next.name}`,
    };
  }

  return {
    title: "Victoire — Maître de la Serre",
    text: `Tu as conquis les ${MAX_SPIRES} Spires.\n\n${scoreLine}`,
    buttonText: "Terminer la campagne",
    ascensionButtonText: "",
  };
}

exports["RUN_MODE_STANDARD"] = RUN_MODE_STANDARD;
exports["RUN_MODE_ASCENSION"] = RUN_MODE_ASCENSION;
exports["CAMPAIGN_WON_KEY"] = CAMPAIGN_WON_KEY;
exports["MAX_ASCENSION_BEATEN_KEY"] = MAX_ASCENSION_BEATEN_KEY;
exports["RUN_MODE_PREF_KEY"] = RUN_MODE_PREF_KEY;
exports["ASCENSION_LEVEL_KEY"] = ASCENSION_LEVEL_KEY;
exports["RUN_MODE_LABELS"] = RUN_MODE_LABELS;
exports["hasCampaignVictory"] = hasCampaignVictory;
exports["markCampaignVictory"] = markCampaignVictory;
exports["loadMaxAscensionBeaten"] = loadMaxAscensionBeaten;
exports["markAscensionBeaten"] = markAscensionBeaten;
exports["loadRunModePreference"] = loadRunModePreference;
exports["saveRunModePreference"] = saveRunModePreference;
exports["loadAscensionLevel"] = loadAscensionLevel;
exports["saveAscensionLevel"] = saveAscensionLevel;
exports["loadSeedPreference"] = loadSeedPreference;
exports["saveSeedPreference"] = saveSeedPreference;
exports["isRunModeUnlocked"] = isRunModeUnlocked;
exports["getAscensionModifiers"] = getAscensionModifiers;
exports["configureRunMode"] = configureRunMode;
exports["getRunRng"] = getRunRng;
exports["getEffectiveMaxSpires"] = getEffectiveMaxSpires;
exports["formatRunModeLine"] = formatRunModeLine;
exports["buildVictoryScreenCopy"] = buildVictoryScreenCopy;
exports["MAX_ASCENSION_LEVEL"] = MAX_ASCENSION_LEVEL;
exports["getAscensionTorment"] = getAscensionTorment;
exports["formatTormentAfflictions"] = formatTormentAfflictions;
exports["formatTormentThreatLine"] = formatTormentThreatLine;
exports["canOfferNextTorment"] = canOfferNextTorment;

});
define("logic/run-save.js", function (exports, require, module) {
const { getAscensionTorment } = require("config/ascension.js");
const { RUN_MODE_ASCENSION } = require("logic/run-modes.js");
const RUN_SAVE_KEY = "gloutonnes_run_save_v2";
const RUN_SAVE_VERSION = 2;

const PERSIST_SCREENS = new Set([
  "map",
  "playing",
  "paused",
  "draft",
  "shop",
  "event",
  "nodeResult",
  "crossroads",
  "victory",
  "towerDraft",
  "mutation",
]);

function shouldPersistRunScreen(screen) {
  return PERSIST_SCREENS.has(screen);
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function findPadIndex(pads, pad) {
  if (!pad) return -1;
  return pads.findIndex((p) => p.x === pad.x && p.y === pad.y);
}

function serializeTower(tower, pads) {
  return {
    typeKey: tower.typeKey,
    padIndex: findPadIndex(pads, tower.padRef),
    level: tower.level,
    investedGold: tower.investedGold,
    rageStacks: tower.rageStacks || 0,
    damage: tower.damage,
    range: tower.range,
    fireRate: tower.fireRate,
    projectileSpeed: tower.projectileSpeed,
    cooldown: tower.cooldown ?? 0.15,
  };
}

function serializeEnemy(enemy) {
  const copy = { ...enemy };
  delete copy.padRef;
  return copy;
}

/**
 * @param {object} game
 * @param {{ pads: object[], ui?: object }} ctx
 */
function serializeRunState(game, ctx = {}) {
  const pads = ctx.pads || [];
  const rng = game.run?._rng;

  return {
    version: RUN_SAVE_VERSION,
    savedAt: Date.now(),
    screen: game.screen,
    ui: cloneJson(ctx.ui || {}),
    lives: game.lives,
    maxLives: game.maxLives,
    gold: game.gold,
    score: game.score,
    speedMultiplier: game.speedMultiplier,
    waveActive: game.waveActive,
    waveCount: game.waveCount,
    wavePaused: game.wavePaused,
    spawnTimer: game.spawnTimer,
    spawnQueue: [...(game.spawnQueue || [])],
    enemyIdInc: game.enemyIdInc,
    spawnPathInc: game.spawnPathInc,
    towerIdInc: game.towerIdInc,
    selectedTowerType: game.selectedTowerType,
    selectedTowerId: game.selectedTowerId,
    spire: cloneJson(game.spire),
    run: {
      ...cloneJson(game.run),
      _rng: undefined,
      _rngState: typeof rng?.getState === "function" ? rng.getState() : null,
    },
    deck: { picked: [...(game.deck?.picked || [])] },
    relics: { picked: [...(game.relics?.picked || [])] },
    towerDeck: [...(game.towerDeck || [])],
    collector: cloneJson(game.collector),
    modifiers: cloneJson(game.modifiers),
    deckSynergy: cloneJson(game.deckSynergy),
    encounter: cloneJson(game.encounter),
    skills: cloneJson(game.skills),
    collectorUltimate: cloneJson(game.collectorUltimate),
    bossCardPhaseDone: game.bossCardPhaseDone,
    bossTempWave: game.bossTempWave ? cloneJson(game.bossTempWave) : null,
    waveModifier: game.waveModifier ? cloneJson(game.waveModifier) : null,
    pendingWaveModifier: game.pendingWaveModifier ? cloneJson(game.pendingWaveModifier) : null,
    nodeObjective: game.nodeObjective ? cloneJson(game.nodeObjective) : null,
    waveStats: game.waveStats ? cloneJson(game.waveStats) : null,
    runStats: game.runStats ? cloneJson(game.runStats) : null,
    dailyId: game.daily?.id ?? null,
    draftCardIds: (game.draft?.activeChoices || []).map((c) => c.id),
    shopOffers: cloneJson(game.shop?.offers || []),
    pendingEventId: game.pendingEvent?.id ?? null,
    towers: game.towers.map((t) => serializeTower(t, pads)),
    enemies: game.enemies.map((e) => serializeEnemy(e)),
    biomeId: game.biome?.id ?? null,
    persistedEndRun: game._persistedEndRunScreen
      ? cloneJson(game._persistedEndRunScreen)
      : null,
    persistedNodeResult: game._persistedNodeResult
      ? cloneJson(game._persistedNodeResult)
      : null,
  };
}

function saveRunState(payload) {
  if (typeof localStorage === "undefined") return false;
  try {
    localStorage.setItem(RUN_SAVE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

function loadRunState() {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(RUN_SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || data.version !== RUN_SAVE_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

function clearRunSave() {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(RUN_SAVE_KEY);
  } catch {
    /* ignore */
  }
}

function hasRunSave() {
  return Boolean(loadRunState());
}

function formatRunSaveSummary(data = loadRunState()) {
  if (!data) return "";
  const cards = data.deck?.picked?.length ?? 0;
  const spire = data.spire?.spireNumber ?? 1;
  const floor = (data.spire?.floor ?? 0) + 1;
  let mode = "Campagne";
  if (data.run?.mode === RUN_MODE_ASCENSION) {
    mode = getAscensionTorment(data.run.ascensionLevel || 1).name;
  }
  return `${mode} · Spire ${spire} · Étage ${floor} · ${cards} cartes · ${Number(data.score || 0).toLocaleString()} pts`;
}

exports["RUN_SAVE_KEY"] = RUN_SAVE_KEY;
exports["RUN_SAVE_VERSION"] = RUN_SAVE_VERSION;
exports["shouldPersistRunScreen"] = shouldPersistRunScreen;
exports["serializeRunState"] = serializeRunState;
exports["saveRunState"] = saveRunState;
exports["loadRunState"] = loadRunState;
exports["clearRunSave"] = clearRunSave;
exports["hasRunSave"] = hasRunSave;
exports["formatRunSaveSummary"] = formatRunSaveSummary;

});
define("game/shared.js", function (exports, require, module) {
/** Contexte partagé entre modules game/* (initialisé par game.js). */
const shared = {
  game: null,
  MAX_FLOORS: 8,
  pads: [],
  paths: [],
  SPIRE_LAYOUTS: [],
  MAP_LANE_CONFIG: null,
  MAP_NODE_POOL: [],
  TOOLTIPS_CONFIG: null,
  NODE_OBJECTIVE_LIBRARY: [],
  WAVE_MODIFIER_LIBRARY: [],
  ENCOUNTER_CONFIG: null,
  EVENT_LIBRARY: [],
  BIOMES: [],
  CARD_LIBRARY: [],
  MUTATION_LIBRARY: [],
  towerTypes: {},
  enemyTypes: {},
  onboarding: null,
  mobileShell: null,
  runMusic: null,
  sfx: null,
  canvas: null,
  ctx: null,
  mapChoicesEl: null,
  mapFloorLabel: null,
  mapRouteHintEl: null,
  startWaveBtn: null,
  combatObjectiveBanner: null,
  titleModePanel: null,
  titleVersionEl: null,
  cancelPlacementBtn: null,
  showMessage: () => {},
  playSound: () => {},
  gainScore: () => {},
  setScreen: () => {},
  hideMapOverlay: () => {},
  showMapOverlay: () => {},
  hideShopOverlay: () => {},
  showShopOverlay: () => {},
  openCrossroadsReward: () => {},
  handleNonCombatNode: () => {},
  setEncounterForNode: () => {},
  resetEncounterState: () => {},
  renderTowerShopButtons: () => {},
  applyBiomeForCurrentFloor: () => {},
  getBiomeForFloor: () => ({}),
  getNodeTooltip: () => "",
  tryContextHint: () => {},
  touchRunProgress: () => {},
  getRunRng: () => Math.random,
  pickNodeObjective: () => null,
  shouldRollObjective: () => false,
  pickWaveModifier: () => null,
  laneGuaranteesWaveModifier: () => false,
  getLaneAffinityHint: () => "",
  getMapLanePreview: () => [],
  generateSpireMap: () => ({ map: [] }),
  pickRandomEvent: () => null,
  EVENT_GOLD: { nectar: 40 },
};

function initShared(partial) {
  Object.assign(shared, partial);
}

exports["shared"] = shared;
exports["initShared"] = initShared;

});
define("game/state.js", function (exports, require, module) {
/** Constantes et clés de persistance (état mutable principal dans game.js). */
const MAX_FLOORS = 8;

const STORAGE_KEYS = {
  bestScore: "plantes_td_best_score_v5",
  playerName: "gloutonnes_player_name",
  speedPref: "gloutonnes_speed_pref",
  musicVolume: "gloutonnes_music_vol",
  sfxVolume: "gloutonnes_sfx_vol",
};

exports["MAX_FLOORS"] = MAX_FLOORS;
exports["STORAGE_KEYS"] = STORAGE_KEYS;

});
define("logic/node-objectives.js", function (exports, require, module) {
function pickNodeObjective(objectives, rng = Math.random) {
  if (!objectives?.length) return null;
  return objectives[Math.floor(rng() * objectives.length)];
}

function shouldRollObjective(nodeType) {
  return nodeType === "combat" || nodeType === "elite" || nodeType === "boss";
}

/** Aperçu carte / intro — objectif typique sans figer le tirage final. */
function formatObjectivePreview(objective) {
  if (!objective) return "";
  const reward = objective.rewardGold ? ` (+${objective.rewardGold} ☀)` : "";
  return `Objectif possible : ${objective.name}${reward}`;
}

/**
 * @returns {{ success: boolean, messages: string[] }}
 */
function evaluateNodeObjective(objective, waveStats) {
  if (!objective) return { success: false, messages: [] };
  const messages = [];

  if (objective.id === "no_leak") {
    const ok = (waveStats.leaks || 0) === 0;
    if (ok) messages.push(`Objectif reussi : ${objective.name} (+${objective.rewardGold} soleil)`);
    else messages.push(`Objectif manque : ${objective.name}`);
    return { success: ok, messages };
  }

  if (objective.id === "fast_clear") {
    const limit = objective.timeLimitSec ?? 45;
    const ok = (waveStats.durationSec || 999) < limit;
    if (ok) {
      messages.push(`Objectif reussi : ${objective.name} (< ${limit}s)`);
    } else {
      messages.push(`Objectif manque : ${objective.name} (${waveStats.durationSec?.toFixed(1)}s)`);
    }
    return { success: ok, messages };
  }

  if (objective.id === "max_one_leak" || objective.maxLeaks != null) {
    const max = objective.maxLeaks ?? 1;
    const ok = (waveStats.leaks || 0) <= max;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${waveStats.leaks || 0} fuite(s))`
      : `Objectif manque : ${objective.name} (${waveStats.leaks || 0} fuites)`);
    return { success: ok, messages };
  }

  if (objective.minKills != null) {
    const ok = (waveStats.kills || 0) >= objective.minKills;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${waveStats.kills} kills)`
      : `Objectif manque : ${objective.name} (${waveStats.kills || 0}/${objective.minKills} kills)`);
    return { success: ok, messages };
  }

  if (objective.familyId && objective.damageShare != null) {
    const byFamily = waveStats.damageByFamily || {};
    const total = Object.values(byFamily).reduce((s, v) => s + v, 0);
    const share = total > 0 ? (byFamily[objective.familyId] || 0) / total : 0;
    const ok = share >= objective.damageShare;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (${Math.round(share * 100)}%)`
      : `Objectif manque : ${objective.name} (${Math.round(share * 100)}% / ${Math.round(objective.damageShare * 100)}%)`);
    return { success: ok, messages };
  }

  if (objective.minGoldEarned != null) {
    const earned = Math.max(0, waveStats.goldEarned || 0);
    const ok = earned >= objective.minGoldEarned;
    messages.push(ok
      ? `Objectif reussi : ${objective.name} (+${earned} soleil)`
      : `Objectif manque : ${objective.name} (+${earned} soleil)`);
    return { success: ok, messages };
  }

  return { success: false, messages };
}

function grantObjectiveRewards(game, objective, success, helpers) {
  if (!success || !objective) return;
  if (objective.rewardGold) {
    game.gold += objective.rewardGold;
  }
  if (objective.rewardCard && helpers.grantRandomCard) {
    const card = helpers.grantRandomCard();
    if (card) {
      helpers.showMessage?.(`Bonus objectif : carte "${card.name}".`, "normal");
    }
  }
}

exports["pickNodeObjective"] = pickNodeObjective;
exports["shouldRollObjective"] = shouldRollObjective;
exports["formatObjectivePreview"] = formatObjectivePreview;
exports["evaluateNodeObjective"] = evaluateNodeObjective;
exports["grantObjectiveRewards"] = grantObjectiveRewards;

});
define("game/map-flow.js", function (exports, require, module) {
const { applyTormentToLaneConfig, shouldForceTormentWaveModifier } = require("logic/ascension-mechanics.js");
const { formatRunModeLine } = require("logic/run-modes.js");
const { shared } = require("game/shared.js");
const { formatObjectivePreview } = require("logic/node-objectives.js");
function getNodeLabel(type) {
  if (type === "combat") return "Combat";
  if (type === "elite") return "Elite";
  if (type === "event") return "Event";
  if (type === "rest") return "Repos";
  if (type === "shop") return "Boutique";
  if (type === "crossroads") return "Carrefour";
  return "Boss";
}

function getNodeDescription(type) {
  if (type === "combat") return "Risque normal. Recompense: draft d'une carte apres victoire.";
  if (type === "elite") return "Combat plus dur. Recompense: carte + relique garantie.";
  if (type === "event") return "Pas de combat. Choisis ton option parmi deux issues.";
  if (type === "rest") return "Pas de combat. Soigne une partie de tes vies max.";
  if (type === "shop") return "Pas de combat. Depense ton soleil pour carte, relique ou soin.";
  if (type === "crossroads") return "Fusion des couloirs. Bonus : soleil ou carte garantie.";
  return "Combat final tres dur. Recompense: victoire si tu survis.";
}

function isLaneReachable(lane) {
  const { game } = shared;
  if (game.spire.floor === 0) return true;
  if (game.spire.lanesMerged) return true;
  return Math.abs(lane - game.spire.lane) <= 1;
}

function getLaneBlockReason(lane) {
  if (isLaneReachable(lane)) return null;
  if (shared.game.spire.lanesMerged) return null;
  return `Couloir trop éloigné — tu es en couloir ${shared.game.spire.lane + 1}`;
}

function renderMapRouteHint() {
  const { game, mapRouteHintEl } = shared;
  if (!mapRouteHintEl) return;
  const trail = game.spire.pathTrail || [];
  const parts = trail.map((step) => `E${step.floor + 1}c${step.lane + 1}`);
  let text = `Position : couloir ${game.spire.lane + 1}`;
  if (parts.length) text += ` · Parcours : ${parts.join(" → ")}`;
  if (game.spire.lanesMerged) {
    text += " · Carrefour franchi : tous les couloirs ouverts";
    mapRouteHintEl.className = "map-route-hint map-route-hint--merged";
  } else {
    mapRouteHintEl.className = "map-route-hint";
  }
  mapRouteHintEl.textContent = text;
}

function rollNodeObjectiveForType(type) {
  const { game, NODE_OBJECTIVE_LIBRARY, shouldRollObjective, pickNodeObjective, getRunRng } = shared;
  if (!shouldRollObjective(type)) return null;
  return pickNodeObjective(NODE_OBJECTIVE_LIBRARY, getRunRng(game));
}

function ensureFloorObjectivePreviews(floorNodes) {
  const { game } = shared;
  const key = `${game.spire.spireNumber}-${game.spire.floor}`;
  if (game.spire._objectivePreviewKey === key && game.spire.objectiveByLane?.length) return;
  game.spire._objectivePreviewKey = key;
  game.spire.objectiveByLane = floorNodes.map((type) => rollNodeObjectiveForType(type));
}

function renderMapChoices() {
  const {
    game,
    MAX_FLOORS,
    MAP_LANE_CONFIG,
    TOOLTIPS_CONFIG,
    mapChoicesEl,
    mapFloorLabel,
    getBiomeForFloor,
    getLaneAffinityHint,
    getMapLanePreview,
    getNodeTooltip,
    laneGuaranteesWaveModifier,
  } = shared;
  const biome = getBiomeForFloor(game.spire.floor);
  const floorNodes = game.spire.map[game.spire.floor] || ["combat", "combat", "combat"];
  const isCrossroads = floorNodes[0] === "crossroads";
  const tormentLine = game.run?.mode === "ascension"
    ? ` · ${formatRunModeLine(game)}`
    : "";
  mapFloorLabel.textContent = `Spire ${game.spire.spireNumber}/${shared.game.run?.maxSpires ?? 5} · Etage ${game.spire.floor + 1}/${MAX_FLOORS} — ${biome.name}${tormentLine}`;
  renderMapRouteHint();
  if (!isCrossroads) ensureFloorObjectivePreviews(floorNodes);

  if (isCrossroads) {
    mapChoicesEl.className = "draft-choices map-choices--solo";
    mapChoicesEl.innerHTML = `
      <button class="draft-choice node-crossroads" data-node-type="crossroads" data-lane="1">
        <h3>Carrefour des lianes</h3>
        <p>Les trois couloirs se rejoignent</p>
        <span class="detail">${getNodeDescription("crossroads")}</span>
        <span class="tag">Accessible</span>
      </button>`;
    return;
  }

  mapChoicesEl.className = "draft-choices";
  mapChoicesEl.innerHTML = floorNodes
    .map((type, lane) => {
      const reachable = isLaneReachable(lane);
      const isCurrentLane = lane === game.spire.lane;
      const blockReason = getLaneBlockReason(lane);
      const previewSteps = getMapLanePreview(game.spire.map, game.spire.floor, lane, MAX_FLOORS);
      const previewTrail = previewSteps.length
        ? previewSteps
            .map((s) => {
              const label = getNodeLabel(s.type);
              const bossClass = s.type === "boss" ? " map-preview-boss" : "";
              return `<span class="${bossClass.trim()}">E${s.floor}: ${label}</span>`;
            })
            .join(" → ")
        : "";
      const affinity = getLaneAffinityHint(lane, MAP_LANE_CONFIG);
      const isCombat = type === "combat" || type === "elite" || type === "boss";
      const objectivePreview = isCombat && reachable
        ? formatObjectivePreview(game.spire.objectiveByLane?.[lane])
        : "";
      const laneModifierHint = isCombat && laneGuaranteesWaveModifier(lane, MAP_LANE_CONFIG)
        ? '<span class="map-lane-modifier-hint">Modificateur de vague garanti (couloir Chasse)</span>'
        : "";
      const laneClasses = [
        "draft-choice",
        `node-${type}`,
        reachable ? "" : "disabled map-lane-blocked",
        isCurrentLane ? "map-lane-current" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `
      <button class="${laneClasses}" data-node-type="${type}" data-lane="${lane}">
        <h3>${getNodeLabel(type)}</h3>
        <p>Couloir ${lane + 1}${isCurrentLane ? " · tu es ici" : ""}</p>
        <span class="lane-affinity">${affinity}</span>
        <span class="detail">${getNodeDescription(type)}${getNodeTooltip(type, TOOLTIPS_CONFIG) ? ` — ${getNodeTooltip(type, TOOLTIPS_CONFIG)}` : ""}</span>
        ${objectivePreview ? `<span class="map-objective-preview">${objectivePreview}</span>` : ""}
        ${laneModifierHint}
        ${previewTrail ? `<span class="map-preview-trail">Vision : ${previewTrail}</span>` : ""}
        ${blockReason ? `<span class="map-block-reason">${blockReason}</span>` : ""}
        <span class="tag">${reachable ? "Accessible" : "Bloqué"}</span>
      </button>
    `;
    })
    .join("");
}

function updateCombatObjectiveBanner() {
  const { game, combatObjectiveBanner } = shared;
  if (!combatObjectiveBanner) return;
  if (!game.nodeObjective || game.screen !== "playing") {
    combatObjectiveBanner.classList.add("hidden");
    combatObjectiveBanner.textContent = "";
    return;
  }
  combatObjectiveBanner.classList.remove("hidden");
  combatObjectiveBanner.innerHTML =
    `<strong>Objectif</strong> · ${game.nodeObjective.name} — ${game.nodeObjective.desc || ""}`;
}

function startEncounterFromNode(type, lane = shared.game.spire.lane) {
  const {
    game,
    setEncounterForNode,
    resetEncounterState,
    renderTowerShopButtons,
    applyBiomeForCurrentFloor,
    setScreen,
    hideMapOverlay,
    hideShopOverlay,
    showMessage,
    ENCOUNTER_CONFIG,
    onboarding,
    tryContextHint,
    pickWaveModifier,
    WAVE_MODIFIER_LIBRARY,
    laneGuaranteesWaveModifier,
    getRunRng,
  } = shared;
  const { getEncounterMechanics } = shared;

  game.spire.currentNodeType = type;
  game.bossCardPhaseDone = false;
  shared.clearBossTempWave?.(game);
  game.wavePaused = false;
  applyBiomeForCurrentFloor();
  setEncounterForNode(type);
  resetEncounterState();

  game.nodeObjective = game.spire.objectiveByLane?.[lane] ?? rollNodeObjectiveForType(type);
  game.pendingWaveModifier = null;
  if (
    shouldForceTormentWaveModifier(game, type)
    || laneGuaranteesWaveModifier(game.spire.lane, shared.MAP_LANE_CONFIG)
  ) {
    game.pendingWaveModifier = pickWaveModifier(WAVE_MODIFIER_LIBRARY, getRunRng(game));
  }

  renderTowerShopButtons();
  setScreen("playing");
  hideMapOverlay();
  hideShopOverlay();
  updateCombatObjectiveBanner();

  const label = getNodeLabel(type);
  const mechanics = getEncounterMechanics(ENCOUNTER_CONFIG, type, game.biome?.id);
  let intro = `${label} — ${game.biome.name} : prepare ta defense puis lance la vague.`;
  if (type === "elite" && mechanics?.title) {
    intro = `ELITE · ${mechanics.title} — ${mechanics.intro || intro}`;
  }
  if (type === "boss" && mechanics?.title) {
    intro = `BOSS · ${mechanics.title} — ${mechanics.intro || intro}`;
  }
  if (game.nodeObjective) {
    intro += ` Objectif : ${game.nodeObjective.name} (+${game.nodeObjective.rewardGold || 0} soleil si reussi).`;
  }
  if (game.pendingWaveModifier) {
    intro += ` Modificateur annonce : ${game.pendingWaveModifier.name}.`;
  }
  showMessage(intro, type === "elite" || type === "boss" ? "warn" : "normal");
  requestAnimationFrame(() => {
    onboarding?.startIfNeeded("playing");
    if (type === "elite") tryContextHint("elite_first");
    if (type === "boss") tryContextHint("boss_first");
  });
}

function onMapNodeChosen(type, lane) {
  const { game, openCrossroadsReward, handleNonCombatNode, touchRunProgress } = shared;
  if (type !== "crossroads" && !isLaneReachable(lane)) return;
  game.spire.lane = lane;
  if (type !== "crossroads") {
    game.spire.lanesMerged = false;
    game.spire.pathTrail.push({ floor: game.spire.floor, lane, type });
    touchRunProgress(game);
  }
  if (type === "crossroads") {
    openCrossroadsReward();
    return;
  }
  if (type === "combat" || type === "elite" || type === "boss") {
    startEncounterFromNode(type, lane);
    return;
  }
  handleNonCombatNode(type);
}

function buildSpireMap() {
  const { MAX_FLOORS, MAP_NODE_POOL, MAP_LANE_CONFIG, generateSpireMap, game, getRunRng } = shared;
  const eliteWeightMult = game.run?.mode === "ascension"
    ? (game.run.tormentMapEliteWeightMult ?? 1)
    : 1;
  const laneConfig = applyTormentToLaneConfig(MAP_LANE_CONFIG, eliteWeightMult);
  const { map } = generateSpireMap({
    maxFloors: MAX_FLOORS,
    mapNodePool: MAP_NODE_POOL,
    laneConfig,
    rng: getRunRng(game),
  });
  return map;
}

exports["getNodeLabel"] = getNodeLabel;
exports["getNodeDescription"] = getNodeDescription;
exports["isLaneReachable"] = isLaneReachable;
exports["getLaneBlockReason"] = getLaneBlockReason;
exports["renderMapRouteHint"] = renderMapRouteHint;
exports["rollNodeObjectiveForType"] = rollNodeObjectiveForType;
exports["renderMapChoices"] = renderMapChoices;
exports["updateCombatObjectiveBanner"] = updateCombatObjectiveBanner;
exports["startEncounterFromNode"] = startEncounterFromNode;
exports["onMapNodeChosen"] = onMapNodeChosen;
exports["buildSpireMap"] = buildSpireMap;

});
define("logic/bestiary.js", function (exports, require, module) {
const STORAGE_KEY = "gloutonnes_bestiary_v1";

const DEFAULT_BESTIARY_CONFIG = {
  firstKillDamageBonus: 0.02,
  maxFirstKillBonusTypes: 5,
};

function loadBestiaryProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveBestiaryProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* ignore */
  }
}

function initRunBestiary(game) {
  game.run.bestiaryDiscovered = [];
  game.run.bestiaryDamageBonus = 0;
}

function recordBestiaryKill(typeKey) {
  if (!typeKey) return;
  const progress = loadBestiaryProgress();
  const entry = progress[typeKey] || { kills: 0, firstSeen: null };
  entry.kills += 1;
  if (!entry.firstSeen) {
    entry.firstSeen = new Date().toLocaleDateString("fr-BE", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }
  progress[typeKey] = entry;
  saveBestiaryProgress(progress);
}

/**
 * Premier kill d'un type pendant la run → bonus dégâts cumulé.
 * @returns {{ name: string, bonusPct: number } | null}
 */
function applyFirstKillBonus(game, typeKey, enemyTypes, config = DEFAULT_BESTIARY_CONFIG) {
  if (!typeKey || typeKey === "boss") return null;
  if (!game.run) return null;
  if (game.run.bestiaryDiscovered.includes(typeKey)) return null;

  const maxTypes = config.maxFirstKillBonusTypes ?? 5;
  if (game.run.bestiaryDiscovered.length >= maxTypes) return null;

  const bonus = config.firstKillDamageBonus ?? 0.02;
  game.run.bestiaryDiscovered.push(typeKey);
  game.run.bestiaryDamageBonus = (game.run.bestiaryDamageBonus || 0) + bonus;
  game.modifiers.globalDamage = (game.modifiers.globalDamage || 1) * (1 + bonus);

  const name = enemyTypes[typeKey]?.name || typeKey;
  return { name, bonusPct: Math.round(bonus * 100) };
}

function renderBestiaryListHtml(enemyTypes, progress, runDiscovered = []) {
  const runSet = new Set(runDiscovered);
  const entries = Object.entries(enemyTypes || {})
    .filter(([key]) => key !== "boss")
    .map(([key, def]) => {
      const saved = progress[key];
      const discovered = Boolean(saved?.kills) || runSet.has(key);
      const name = def.name || key;
      const desc = def.bestiaryDesc || def.desc || "Ravageur de la serre.";
      const kills = saved?.kills || 0;
      const status = discovered
        ? `<span class="bestiary-status bestiary-status--known">Connu</span>`
        : `<span class="bestiary-status bestiary-status--unknown">???</span>`;
      const meta = discovered
        ? `<span class="bestiary-meta">${kills} abattu(s)${saved?.firstSeen ? ` · vu le ${saved.firstSeen}` : ""}</span>`
        : `<span class="bestiary-meta">Tue-le une fois pour le révéler.</span>`;
      const runTag = runSet.has(key) ? ` <span class="bestiary-run-tag">Nouveau cette run</span>` : "";
      return `
        <article class="bestiary-entry ${discovered ? "is-known" : "is-unknown"}">
          <header class="bestiary-entry-head">
            <strong>${discovered ? name : "Proie inconnue"}</strong>
            ${status}${runTag}
          </header>
          <p>${discovered ? desc : "Trace de mucus ou de carapace…"}</p>
          ${meta}
        </article>`;
    });

  const boss = enemyTypes?.boss;
  if (boss) {
    const saved = progress.boss;
    const discovered = Boolean(saved?.kills);
    entries.push(`
      <article class="bestiary-entry bestiary-entry--boss ${discovered ? "is-known" : "is-unknown"}">
        <header class="bestiary-entry-head">
          <strong>${discovered ? boss.name || "Colosse de la serre" : "Boss"}</strong>
          <span class="bestiary-status ${discovered ? "bestiary-status--known" : "bestiary-status--unknown"}">${discovered ? "Vaincu" : "???"}</span>
        </header>
        <p>${discovered ? boss.bestiaryDesc || boss.desc : "Le gardien des étages finaux."}</p>
        ${discovered ? `<span class="bestiary-meta">${saved.kills} victoire(s)</span>` : ""}
      </article>`);
  }

  return entries.join("");
}

exports["DEFAULT_BESTIARY_CONFIG"] = DEFAULT_BESTIARY_CONFIG;
exports["loadBestiaryProgress"] = loadBestiaryProgress;
exports["saveBestiaryProgress"] = saveBestiaryProgress;
exports["initRunBestiary"] = initRunBestiary;
exports["recordBestiaryKill"] = recordBestiaryKill;
exports["applyFirstKillBonus"] = applyFirstKillBonus;
exports["renderBestiaryListHtml"] = renderBestiaryListHtml;

});
define("logic/enemy-abilities.js", function (exports, require, module) {
/** Capacites ennemies definies dans content/enemies.json (champ abilities). */

function applyEnemyAbilities(enemy, enemyType) {
  const abilities = enemyType?.abilities || [];
  enemy.abilities = abilities;
  if (abilities.includes("spawn_shield")) {
    enemy.hitShield = enemy.hitShield ?? 4;
  }
  if (abilities.includes("dash")) {
    enemy.dashInterval = 2.4;
    enemy.dashTimer = 1.2;
    enemy.dashBoostSec = 0;
  }
  if (abilities.includes("split_on_death")) {
    enemy.canSplit = !enemy._isSplitChild;
  }
  if (abilities.includes("regen")) {
    enemy.regenPerSec = 0.012;
  }
  if (abilities.includes("sting")) {
    enemy.stingRewardBonus = 1.12;
  }
}

/** Réduction de dégâts passive (mucus, etc.). */
function applyEnemyDamageReduction(enemy, rawDamage) {
  let dmg = rawDamage;
  if (enemy.abilities?.includes("mucus")) dmg *= 0.9;
  if (enemy.damageReduction) dmg *= enemy.damageReduction;
  return dmg;
}

/** Régénération passive (escargot). */
function tickEnemyRegen(enemy, dt) {
  if (!enemy.regenPerSec || enemy.hp <= 0) return;
  if (enemy.hp >= enemy.maxHp) return;
  enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.maxHp * enemy.regenPerSec * dt);
}

/** Multiplicateur de vitesse temporaire (dash). */
function tickEnemyAbilityMovement(enemy, dt) {
  if (!enemy.abilities?.includes("dash")) return 1;
  enemy.dashTimer -= dt;
  if (enemy.dashTimer <= 0) {
    enemy.dashTimer = enemy.dashInterval ?? 2.4;
    enemy.dashBoostSec = 0.65;
  }
  if (enemy.dashBoostSec > 0) {
    enemy.dashBoostSec = Math.max(0, enemy.dashBoostSec - dt);
    return 1.75;
  }
  return 1;
}

/** Reduit les degats si bouclier de hits actif. */
function applyHitShieldDamage(enemy, rawDamage) {
  if (!enemy.hitShield || enemy.hitShield <= 0) return rawDamage;
  enemy.hitShield -= 1;
  return rawDamage * 0.12;
}

function spawnSplitChildren(enemy, helpers) {
  if (!enemy.canSplit || enemy._splitDone) return;
  enemy._splitDone = true;
  const pos = helpers.worldPosOfEnemy(enemy);
  for (let i = 0; i < 2; i += 1) {
    const child = helpers.createEnemy("crawler", enemy.pathId);
    child._isSplitChild = true;
    child.canSplit = false;
    child.hp = Math.max(12, Math.round(enemy.maxHp * 0.22));
    child.maxHp = child.hp;
    child.speed *= 1.35;
    child.reward = Math.max(4, Math.round(enemy.reward * 0.35));
    child.radius = 8;
    child.segment = enemy.segment;
    child.t = Math.max(0, enemy.t - 0.04 * (i + 1));
    helpers.pushEnemy(child);
    helpers.emitParticles?.(pos.x + (i ? 6 : -6), pos.y, "#8a5040", 5);
  }
}

exports["applyEnemyAbilities"] = applyEnemyAbilities;
exports["applyEnemyDamageReduction"] = applyEnemyDamageReduction;
exports["tickEnemyRegen"] = tickEnemyRegen;
exports["tickEnemyAbilityMovement"] = tickEnemyAbilityMovement;
exports["applyHitShieldDamage"] = applyHitShieldDamage;
exports["spawnSplitChildren"] = spawnSplitChildren;

});
define("logic/run-stats.js", function (exports, require, module) {
function beginRunStats(game) {
  game.runStats = {
    startedAt: performance.now() / 1000,
    totalKills: 0,
    totalLeaks: 0,
    wavesCleared: 0,
    goldAtStart: game.gold,
    damageByTower: {},
    damageByFamily: {},
    killsByType: {},
    highestSpire: game.spire?.spireNumber || 1,
    highestFloor: game.spire?.floor || 0,
  };
}

function recordRunKill(game, typeKey) {
  if (!game.runStats) return;
  game.runStats.totalKills += 1;
  if (typeKey) {
    game.runStats.killsByType[typeKey] = (game.runStats.killsByType[typeKey] || 0) + 1;
  }
}

function recordRunLeak(game) {
  if (!game.runStats) return;
  game.runStats.totalLeaks += 1;
}

function recordRunTowerDamage(game, towerId, amount, familyId = null) {
  if (!game.runStats || !towerId) return;
  const key = String(towerId);
  game.runStats.damageByTower[key] = (game.runStats.damageByTower[key] || 0) + amount;
  if (familyId) {
    game.runStats.damageByFamily[familyId] = (game.runStats.damageByFamily[familyId] || 0) + amount;
  }
}

function recordRunWaveCleared(game) {
  if (game.runStats) game.runStats.wavesCleared += 1;
}

function touchRunProgress(game) {
  if (!game.runStats || !game.spire) return;
  game.runStats.highestSpire = Math.max(game.runStats.highestSpire, game.spire.spireNumber);
  game.runStats.highestFloor = Math.max(game.runStats.highestFloor, game.spire.floor);
}

function finalizeRunStats(game) {
  if (!game.runStats) return null;
  const now = performance.now() / 1000;
  return {
    ...game.runStats,
    durationSec: Math.max(0, now - game.runStats.startedAt),
    goldEarned: game.gold - game.runStats.goldAtStart,
    cardCount: game.deck?.picked?.length || 0,
    relicCount: game.relics?.picked?.length || 0,
    bestiaryBonus: game.run?.bestiaryDamageBonus || 0,
    bestiaryDiscovered: [...(game.run?.bestiaryDiscovered || [])],
    outcome: game.screen,
  };
}

function formatRunEndReportHtml(stats, helpers) {
  if (!stats) return "";

  const towerRows = Object.entries(stats.damageByTower || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, dmg]) => {
      const name = helpers.towerNameById(id) || `Tour #${id}`;
      return `<tr><td>${helpers.escape(name)}</td><td><strong>${Math.round(dmg).toLocaleString()}</strong></td></tr>`;
    })
    .join("");

  const killRows = Object.entries(stats.killsByType || {})
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => {
      const label = helpers.enemyNameByType(type) || type;
      return `<li>${helpers.escape(label)} : <strong>${count}</strong></li>`;
    })
    .join("");

  const dmgTable = towerRows
    ? `<table class="wave-report-table run-end-table"><thead><tr><th>Tour</th><th>Dégâts</th></tr></thead><tbody>${towerRows}</tbody></table>`
    : "";

  const bestiaryLine = stats.bestiaryDiscovered?.length
    ? `<li><strong>Bestiaire :</strong> ${stats.bestiaryDiscovered.length} type(s) découvert(s) (+${Math.round((stats.bestiaryBonus || 0) * 100)} % dégâts)</li>`
    : "";

  const mins = Math.floor(stats.durationSec / 60);
  const secs = Math.round(stats.durationSec % 60);

  return `
    <div class="run-end-report">
      <ul class="wave-report-summary run-end-summary">
        <li><strong>Kills :</strong> ${stats.totalKills}</li>
        <li><strong>Fuites :</strong> ${stats.totalLeaks}</li>
        <li><strong>Vagues :</strong> ${stats.wavesCleared}</li>
        <li><strong>Soleil gagné :</strong> +${Math.max(0, stats.goldEarned)}</li>
        <li><strong>Deck :</strong> ${stats.cardCount} cartes · ${stats.relicCount} reliques</li>
        <li><strong>Durée :</strong> ${mins > 0 ? `${mins} min ` : ""}${secs} s</li>
        ${bestiaryLine}
      </ul>
      ${dmgTable ? `<h3 class="run-end-subtitle">Top tours</h3>${dmgTable}` : ""}
      ${killRows ? `<h3 class="run-end-subtitle">Proies abattues</h3><ul class="run-end-kills">${killRows}</ul>` : ""}
    </div>`;
}

exports["beginRunStats"] = beginRunStats;
exports["recordRunKill"] = recordRunKill;
exports["recordRunLeak"] = recordRunLeak;
exports["recordRunTowerDamage"] = recordRunTowerDamage;
exports["recordRunWaveCleared"] = recordRunWaveCleared;
exports["touchRunProgress"] = touchRunProgress;
exports["finalizeRunStats"] = finalizeRunStats;
exports["formatRunEndReportHtml"] = formatRunEndReportHtml;

});
define("logic/wave-report.js", function (exports, require, module) {
function beginWaveStats(game) {
  game.waveStats = {
    startedAt: performance.now() / 1000,
    leaks: 0,
    kills: 0,
    goldAtStart: game.gold,
    damageByTower: {},
    damageByFamily: {},
  };
}

function recordTowerDamage(game, towerId, amount, familyId = null) {
  if (!game.waveStats || !towerId) return;
  const key = String(towerId);
  game.waveStats.damageByTower[key] = (game.waveStats.damageByTower[key] || 0) + amount;
  if (familyId) {
    game.waveStats.damageByFamily[familyId] = (game.waveStats.damageByFamily[familyId] || 0) + amount;
  }
}

function recordWaveLeak(game) {
  if (game.waveStats) game.waveStats.leaks += 1;
}

function recordWaveKill(game) {
  if (game.waveStats) game.waveStats.kills += 1;
}

function finalizeWaveStats(game) {
  if (!game.waveStats) return null;
  const now = performance.now() / 1000;
  return {
    ...game.waveStats,
    durationSec: now - game.waveStats.startedAt,
    goldEarned: game.gold - game.waveStats.goldAtStart,
  };
}

function formatWaveReportHtml(stats, towerNameById) {
  if (!stats) return "<p>Aucune statistique.</p>";
  const rows = Object.entries(stats.damageByTower || {})
    .sort((a, b) => b[1] - a[1])
    .map(([id, dmg]) => {
      const name = towerNameById(id) || `Tour #${id}`;
      return `<tr><td>${name}</td><td><strong>${Math.round(dmg).toLocaleString()}</strong></td></tr>`;
    })
    .join("");

  const dmgTable = rows
    ? `<table class="wave-report-table"><thead><tr><th>Tour</th><th>Degats</th></tr></thead><tbody>${rows}</tbody></table>`
    : "<p class='leaderboard-empty'>Aucun degat enregistre.</p>";

  return `
    <ul class="wave-report-summary">
      <li><strong>Kills :</strong> ${stats.kills}</li>
      <li><strong>Fuites :</strong> ${stats.leaks}</li>
      <li><strong>Soleil gagne :</strong> +${Math.max(0, stats.goldEarned)}</li>
      <li><strong>Duree :</strong> ${stats.durationSec.toFixed(1)} s</li>
    </ul>
    <h3 style="margin:12px 0 6px;font-size:0.95rem">Degats par tour</h3>
    ${dmgTable}
  `;
}

exports["beginWaveStats"] = beginWaveStats;
exports["recordTowerDamage"] = recordTowerDamage;
exports["recordWaveLeak"] = recordWaveLeak;
exports["recordWaveKill"] = recordWaveKill;
exports["finalizeWaveStats"] = finalizeWaveStats;
exports["formatWaveReportHtml"] = formatWaveReportHtml;

});
define("game/enemy-lifecycle.js", function (exports, require, module) {
const { FUREUR_DEFAULT_MAX_STACKS } = require("config/balance.js");
const { applyFirstKillBonus, recordBestiaryKill } = require("logic/bestiary.js");
const { spawnSplitChildren } = require("logic/enemy-abilities.js");
const { recordRunKill } = require("logic/run-stats.js");
const { recordWaveKill } = require("logic/wave-report.js");
function removeEnemy(game, enemy) {
  const idx = game.enemies.indexOf(enemy);
  if (idx < 0) return false;
  game.enemies.splice(idx, 1);
  game.enemyById.delete(enemy.id);
  return true;
}

function spreadScorpioPoison(enemy, position, {
  distance,
  emitParticles,
  game,
  worldPosOfEnemy,
}) {
  if (!enemy._poisonedByScorpio || enemy.poisonDps <= 0) return;
  const chainCount = game.modifiers.scorpioChain || 2;
  const sorted = game.enemies
    .map((e) => ({ e, d: distance(worldPosOfEnemy(e), position) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, chainCount);
  sorted.forEach(({ e }) => {
    e.poisonDps = Math.max(e.poisonDps || 0, enemy.poisonDps);
    e.poisonTime = Math.max(e.poisonTime || 0, enemy.poisonTime || 3.5);
    e._poisonedByScorpio = true;
    const ePos = worldPosOfEnemy(e);
    emitParticles(ePos.x, ePos.y, "#7fff44", 6);
  });
}

function grantFureurRage(position, {
  createFloatText,
  distance,
  game,
  getTowerRange,
}) {
  game.towers.forEach((tower) => {
    if (tower.typeKey !== "sarracenia_fureur") return;
    if (distance(tower, position) > getTowerRange(tower) * 1.5) return;
    const maxStacks = game.modifiers.fureurMaxStacks || FUREUR_DEFAULT_MAX_STACKS;
    if (tower.rageStacks < maxStacks) {
      tower.rageStacks = Math.min(maxStacks, tower.rageStacks + 1);
      if (tower.rageStacks % 3 === 0) {
        createFloatText(`RAGE ${tower.rageStacks}!`, tower.x - 18, tower.y - 30, "#ffcc44");
      }
    }
  });
}

function defeatEnemyLifecycle(enemy, position, {
  bestiaryConfig,
  canvas,
  createEnemy,
  createFloatText,
  distance,
  emitParticles,
  enemyTypes,
  gainScore,
  game,
  getTowerRange,
  playSound,
  renderBestiaryList,
  sfx,
  showMessage,
  worldPosOfEnemy,
}) {
  spawnSplitChildren(enemy, {
    createEnemy,
    worldPosOfEnemy,
    pushEnemy: (e) => {
      game.enemies.push(e);
      game.enemyById.set(e.id, e);
    },
    emitParticles,
  });
  if (enemy._splitDone && enemy.canSplit) sfx?.split();

  if (!removeEnemy(game, enemy)) return false;

  recordWaveKill(game);
  recordRunKill(game, enemy.typeKey);
  recordBestiaryKill(enemy.typeKey);

  const bestiaryBonus = applyFirstKillBonus(game, enemy.typeKey, enemyTypes, bestiaryConfig);
  if (bestiaryBonus) {
    showMessage(`Bestiaire : premier ${bestiaryBonus.name} — +${bestiaryBonus.bonusPct} % dégâts.`, "normal");
    createFloatText(`+${bestiaryBonus.bonusPct}% DMG`, canvas.width / 2 - 42, 118, "#b8ff9a");
    renderBestiaryList();
  }

  const gain = Math.round(enemy.reward * game.modifiers.rewardMult);
  game.gold += gain;
  gainScore(24 + gain * 3 + (game.spire.floor + 1));
  createFloatText(`+${gain}`, position.x, position.y - 12, "#f2f7bd");
  emitParticles(position.x, position.y, "#ffd48f", enemy.typeKey === "boss" ? 22 : 12);
  if (enemy.typeKey === "boss") {
    if (sfx?.bossDefeat) sfx.bossDefeat();
    else playSound(560, 0.12, "sawtooth", 0.03);
  }

  spreadScorpioPoison(enemy, position, {
    distance,
    emitParticles,
    game,
    worldPosOfEnemy,
  });

  grantFureurRage(position, {
    createFloatText,
    distance,
    game,
    getTowerRange,
  });

  return true;
}

exports["defeatEnemyLifecycle"] = defeatEnemyLifecycle;

});
define("game/wave-spawning.js", function (exports, require, module) {
const { getTormentSpawnIntervalMult } = require("logic/ascension-mechanics.js");
const BASE_SPAWN_INTERVAL = 0.56;
const SPAWN_INTERVAL_FLOOR_REDUCTION = 0.012;
const MIN_SPAWN_INTERVAL = 0.2;

function updateWaveSpawningState(game, {
  createEnemy,
  pathsLength,
}, dt) {
  if (game.wavePaused) return;
  if (!game.waveActive || game.spawnQueue.length === 0) return;
  game.spawnTimer -= dt;
  if (game.spawnTimer > 0) return;

  const typeKey = game.spawnQueue.shift();
  const pathId = game.spawnPathInc % pathsLength;
  game.spawnPathInc += 1;

  const enemy = createEnemy(typeKey, pathId);
  game.enemies.push(enemy);
  game.enemyById.set(enemy.id, enemy);
  const tormentMult = getTormentSpawnIntervalMult(game);
  game.spawnTimer = Math.max(
    (BASE_SPAWN_INTERVAL - game.spire.floor * SPAWN_INTERVAL_FLOOR_REDUCTION) * tormentMult,
    MIN_SPAWN_INTERVAL * tormentMult,
  );
}

exports["updateWaveSpawningState"] = updateWaveSpawningState;

});
define("logic/boss-temp-cards.js", function (exports, require, module) {
function pickBossTempCardPair(library, rng = Math.random) {
  if (!library?.length) return [];
  const a = library[Math.floor(rng() * library.length)];
  let b = library[Math.floor(rng() * library.length)];
  let guard = 0;
  while (b.id === a.id && guard < 8) {
    b = library[Math.floor(rng() * library.length)];
    guard += 1;
  }
  return [a, b];
}

function applyBossTempCardEffect(game, effectId) {
  const wave = game.bossTempWave;
  if (!wave) return;

  switch (effectId) {
    case "boss_temp_damage":
      wave.damageMult = 1.28;
      break;
    case "boss_temp_snare":
      wave.snareAllSec = 6.5;
      wave.snareMult = 0.58;
      break;
    case "boss_temp_gold":
      wave.bonusGoldOnWin = 45;
      break;
    case "boss_temp_poison":
      wave.spawnPoisonDps = 4;
      wave.spawnPoisonTime = 5;
      break;
    case "boss_temp_fire_rate":
      wave.towerFireRateMult = 1.18;
      break;
    case "boss_temp_crit":
      wave.critBonus = 0.12;
      break;
    case "boss_temp_range":
      wave.towerRangeBonus = 0.14;
      break;
    case "boss_temp_heal":
      wave.healOnWin = 2;
      break;
    case "boss_temp_thorn":
      wave.thornDamageMult = 1.3;
      break;
    case "boss_temp_snapper":
      wave.snapperDamageMult = 1.3;
      break;
    default:
      break;
  }
}

function applyBossTempWaveToEnemy(enemy, game) {
  const wave = game.bossTempWave;
  if (!wave) return;
  if (wave.spawnPoisonDps) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, wave.spawnPoisonDps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, wave.spawnPoisonTime || 4);
  }
  if (wave.snareAllSec && !enemy._bossTempSnared) {
    enemy.slowTime = Math.max(enemy.slowTime || 0, wave.snareAllSec);
    enemy.slowMult = Math.min(enemy.slowMult ?? 1, wave.snareMult ?? 0.55);
    enemy._bossTempSnared = true;
  }
}

function getBossTempDamageMult(game) {
  return game.bossTempWave?.damageMult ?? 1;
}

function consumeBossTempGoldBonus(game, { skipHeal = false } = {}) {
  const wave = game.bossTempWave;
  if (!wave) return 0;
  const bonus = wave.bonusGoldOnWin || 0;
  if (bonus) game.gold += bonus;
  if (wave.healOnWin && !skipHeal) {
    game.lives = Math.min(game.maxLives, game.lives + wave.healOnWin);
  }
  return bonus;
}

function getBossTempTowerMods(game) {
  const wave = game.bossTempWave;
  if (!wave) {
    return { fireRateMult: 1, critBonus: 0, rangeBonus: 0, thornMult: 1, snapperMult: 1 };
  }
  return {
    fireRateMult: wave.towerFireRateMult ?? 1,
    critBonus: wave.critBonus ?? 0,
    rangeBonus: wave.towerRangeBonus ?? 0,
    thornMult: wave.thornDamageMult ?? 1,
    snapperMult: wave.snapperDamageMult ?? 1,
  };
}

function clearBossTempWave(game) {
  game.bossTempWave = null;
  game.bossCardPhaseDone = false;
}

exports["pickBossTempCardPair"] = pickBossTempCardPair;
exports["applyBossTempCardEffect"] = applyBossTempCardEffect;
exports["applyBossTempWaveToEnemy"] = applyBossTempWaveToEnemy;
exports["getBossTempDamageMult"] = getBossTempDamageMult;
exports["consumeBossTempGoldBonus"] = consumeBossTempGoldBonus;
exports["getBossTempTowerMods"] = getBossTempTowerMods;
exports["clearBossTempWave"] = clearBossTempWave;

});
define("game/wave-completion.js", function (exports, require, module) {
const { SPIRE_SURPLUS_GOLD_SCORE_RATE } = require("config/balance.js");
const { formatSpireThreatLine, MAX_SPIRES } = require("config/campaign.js");
const { getWaveClearGold } = require("logic/economy.js");
const { evaluateNodeObjective, grantObjectiveRewards } = require("logic/node-objectives.js");
const { getEffectiveMaxSpires } = require("logic/run-modes.js");
const { recordRunWaveCleared, touchRunProgress } = require("logic/run-stats.js");
const { finalizeWaveStats } = require("logic/wave-report.js");
const { clearBossTempWave, consumeBossTempGoldBonus } = require("logic/boss-temp-cards.js");
const { MAX_FLOORS } = require("game/state.js");
function finishWaveIfReady(game, {
  gainScore,
  getLayoutRoutes,
  getStartingGoldForSpire,
  grantRandomCardSilently,
  grantRandomRelic,
  hideMapOverlay,
  openVictory,
  setScreen,
  setStartWaveLabel,
  showMessage,
  showNodeResult,
  showWaveSummaryOverlay,
  sfx,
  spireLayouts,
  startDraftPhase,
  tryContextHint,
}) {
  if (!game.waveActive) return false;
  if (game.spawnQueue.length > 0 || game.enemies.length > 0) return false;

  game.waveActive = false;
  recordRunWaveCleared(game);
  touchRunProgress(game);

  const nodeType = game.spire.currentNodeType || "combat";
  const bonus = nodeType === "boss" ? 420 : nodeType === "elite" ? 240 : 140;
  gainScore(bonus + game.spire.floor * 18);

  const waveGold = Math.round(getWaveClearGold(nodeType) * (game.run.dailyWaveClearMult || 1));
  game.gold += waveGold;

  const stats = finalizeWaveStats(game);
  const leaks = stats?.leaks ?? 0;
  const hadLeaks = leaks > 0;
  consumeBossTempGoldBonus(game, { skipHeal: hadLeaks });
  clearBossTempWave(game);

  if (nodeType === "elite" || nodeType === "boss") {
    grantRandomRelic({ skipInstantHeal: hadLeaks });
  }

  setStartWaveLabel("Lancer la vague");
  sfx?.waveClear();

  if (game.modifiers.waveClearHeal) {
    if (!hadLeaks) {
      game.lives = Math.min(game.maxLives, game.lives + game.modifiers.waveClearHeal);
    } else {
      showMessage(
        `Vague terminée avec ${leaks} fuite${leaks > 1 ? "s" : ""} — pas de soin de fin de vague (+${game.modifiers.waveClearHeal}).`,
        "warn",
      );
    }
  }

  const objectiveResult = evaluateNodeObjective(game.nodeObjective, stats);
  if (objectiveResult.success) sfx?.objective();
  grantObjectiveRewards(game, game.nodeObjective, objectiveResult.success, {
    grantRandomCard: () => grantRandomCardSilently(),
    showMessage,
  });
  game.nodeObjective = null;

  showWaveSummaryOverlay(stats, objectiveResult.messages, () => {
    if (nodeType === "boss" && game.spire.floor >= MAX_FLOORS - 1) {
      const maxSpires = getEffectiveMaxSpires(game);
      if (game.spire.spireNumber >= maxSpires) {
        openVictory();
      } else {
        game.spire.pendingSpireTransition = true;
        const nextSpire = game.spire.spireNumber + 1;
        const nextLayout = spireLayouts[Math.min(nextSpire - 1, spireLayouts.length - 1)];
        const nextGold = getStartingGoldForSpire(nextSpire);
        const nextRoutes = getLayoutRoutes(nextLayout).length;
        setScreen("nodeResult");
        hideMapOverlay();
        showNodeResult(
          `⚔ Spire ${game.spire.spireNumber}/${MAX_SPIRES} Terminée !`,
          `Tu as survécu à "${spireLayouts[game.spire.spireNumber - 1].name}".\n` +
          `Deck et reliques conserves.\n\n` +
          `Prochaine Spire : "${nextLayout.name}" — ${nextRoutes} voie(s).\n` +
          `Budget reinitialise : ${nextGold} soleil (x${nextRoutes} voies).\n` +
          `Le soleil au-dela de ce budget sera converti en score (x${SPIRE_SURPLUS_GOLD_SCORE_RATE} par soleil).\n` +
          `⚠ ${formatSpireThreatLine(nextSpire)}`,
        );
        tryContextHint("spire_transition_first");
      }
      return;
    }
    game.spire.pendingAdvanceAfterDraft = true;
    startDraftPhase();
  });

  return true;
}

exports["finishWaveIfReady"] = finishWaveIfReady;

});
define("game/projectile-combat.js", function (exports, require, module) {
function updateProjectileCombat(game, {
  applyHitShieldDamage,
  applySlowToEnemy,
  computeDamageToEnemy,
  createFloatText,
  defeatEnemy,
  distance,
  emitParticles,
  getBossTempDamageMult,
  getEnemyById,
  getTowerArmorShredDuration,
  getTowerArmorShredMult,
  getTowerBurnDps,
  getTowerById,
  getTowerSlowPotency,
  getTowerSplashRadius,
  maybeTriggerBossCardPhase,
  playSound,
  recordRunTowerDamage,
  recordTowerDamage,
  scaleTowerPassiveDuration,
  sfx,
  towerTypes,
  worldPosOfEnemy,
}, dt) {
  for (let i = game.projectiles.length - 1; i >= 0; i -= 1) {
    const projectile = game.projectiles[i];
    projectile.life -= dt;
    if (projectile.life <= 0) {
      game.projectiles.splice(i, 1);
      continue;
    }
    const target = getEnemyById(projectile.targetId);
    if (!target) {
      game.projectiles.splice(i, 1);
      continue;
    }

    const targetPos = worldPosOfEnemy(target);
    const dx = targetPos.x - projectile.x;
    const dy = targetPos.y - projectile.y;
    const dist = Math.hypot(dx, dy) || 0.0001;
    const step = projectile.speed * dt;

    if (dist <= step) {
      let rawDmg = projectile.damage * getBossTempDamageMult(game);
      if (target.hitShield > 0) {
        rawDmg = applyHitShieldDamage(target, rawDmg);
        sfx?.shieldHit();
      }
      const dmg = computeDamageToEnemy(target, rawDmg);
      target.hp -= dmg;
      const towerRef = projectile.towerId ? getTowerById(projectile.towerId) : null;
      if (towerRef) {
        const fam = towerRef.family || towerRef.typeKey;
        recordTowerDamage(game, projectile.towerId, dmg, fam);
        recordRunTowerDamage(game, projectile.towerId, dmg, fam);
      }
      maybeTriggerBossCardPhase(target);

      if (projectile.poisonDps > 0) {
        const durBase = projectile.passive === "heavy_poison"
          ? 4
          : projectile.passive === "chain_poison"
            ? 3.5
            : 3;
        const poisonDur = towerRef
          ? scaleTowerPassiveDuration(durBase, towerRef, towerTypes)
          : durBase;
        if (projectile.passive === "heavy_poison") {
          target.poisonDps = (target.poisonDps || 0) + projectile.poisonDps;
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
        } else if (projectile.passive === "chain_poison") {
          target.poisonDps = Math.max(target.poisonDps || 0, projectile.poisonDps);
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
          target._poisonedByScorpio = true;
        } else {
          target.poisonDps = Math.max(target.poisonDps || 0, projectile.poisonDps);
          target.poisonTime = Math.max(target.poisonTime || 0, poisonDur);
        }
      }

      if (projectile.passive === "burn") {
        const burnDps = towerRef
          ? getTowerBurnDps(towerRef, game, towerTypes)
          : (game.modifiers.ryuBurnDps || 10);
        const burnTick = towerRef ? scaleTowerPassiveDuration(2, towerRef, towerTypes) : 2;
        const burnMax = towerRef ? scaleTowerPassiveDuration(6, towerRef, towerTypes) : 6;
        target.burnDps = Math.max(target.burnDps || 0, burnDps);
        target.burnTime = Math.min((target.burnTime || 0) + burnTick, burnMax);
        emitParticles(targetPos.x, targetPos.y, "#ff6020", 6);
        if (game.modifiers.ryuBurnSpread) {
          let closestOther = null;
          let closestD = Infinity;
          game.enemies.forEach((e) => {
            if (e.id === target.id) return;
            const d = distance(worldPosOfEnemy(e), targetPos);
            if (d < 70 && d < closestD) {
              closestD = d;
              closestOther = e;
            }
          });
          if (closestOther) {
            closestOther.burnDps = Math.max(closestOther.burnDps || 0, burnDps * 0.6);
            closestOther.burnTime = Math.min((closestOther.burnTime || 0) + 1.5, 5);
            const otherPos = worldPosOfEnemy(closestOther);
            emitParticles(otherPos.x, otherPos.y, "#ff8040", 4);
          }
        }
      }

      if (projectile.passive === "armor_shred") {
        target.armorShredMult = towerRef
          ? getTowerArmorShredMult(towerRef, towerTypes)
          : 1.25;
        target.armorShredTime = towerRef
          ? getTowerArmorShredDuration(towerRef, game, towerTypes)
          : (game.modifiers.b52ArmorDur || 3);
        createFloatText("BRISE!", targetPos.x - 14, targetPos.y - 18, "#ff8080");
      }

      if (projectile.passive === "slow") {
        const slowAmount = towerRef
          ? getTowerSlowPotency(towerRef, game, towerTypes)
          : (game.modifiers.belleSlow || 0.68);
        const slowDur = towerRef
          ? scaleTowerPassiveDuration(2.5, towerRef, towerTypes)
          : 2.5;
        applySlowToEnemy(target, slowAmount, slowDur, game);
      }

      if (projectile.passive === "splash") {
        const radius = towerRef
          ? getTowerSplashRadius(towerRef, game, towerTypes)
          : (game.modifiers.capensisAoe || 55);
        const splashDmg = projectile.damage * 0.5;
        const splashKill = [];
        game.enemies.slice().forEach((e) => {
          if (e.id === target.id) return;
          if (distance(worldPosOfEnemy(e), targetPos) <= radius) {
            e.hp -= splashDmg;
            const ePos = worldPosOfEnemy(e);
            emitParticles(ePos.x, ePos.y, "#b8ff90", 4);
            if (e.hp <= 0) splashKill.push(e);
          }
        });
        splashKill.forEach((e) => defeatEnemy(e, worldPosOfEnemy(e)));
      }

      emitParticles(targetPos.x, targetPos.y, projectile.color, 8);
      if (projectile.crit) {
        createFloatText("CRIT!", targetPos.x - 10, targetPos.y - 16, "#ffe5b8");
        sfx?.crit();
      } else {
        if (sfx?.impact) sfx.impact(projectile);
        else playSound(220, 0.03, "square", 0.018);
      }
      if (projectile.poisonDps > 0) sfx?.poison();
      if (projectile.passive === "burn") sfx?.burn();
      if (projectile.passive === "slow") sfx?.slow();
      if (target.hp <= 0) {
        maybeTriggerBossCardPhase(target);
        defeatEnemy(target, targetPos);
      }

      if (projectile.pierceLeft > 0) {
        projectile.pierceLeft -= 1;
        let nextTarget = null;
        let minDist = Infinity;
        game.enemies.forEach((e) => {
          if (e.id === target.id) return;
          const d = distance(worldPosOfEnemy(e), { x: projectile.x, y: projectile.y });
          if (d < minDist) {
            minDist = d;
            nextTarget = e;
          }
        });
        if (nextTarget) {
          projectile.targetId = nextTarget.id;
          continue;
        }
      }

      game.projectiles.splice(i, 1);
      continue;
    }

    projectile.x += (dx / dist) * step;
    projectile.y += (dy / dist) * step;
  }
}

exports["updateProjectileCombat"] = updateProjectileCombat;

});
define("game/tower-combat.js", function (exports, require, module) {
const { CREAMSICLE_AURA_COOLDOWN_ACCEL, CRIT_CHANCE_CAP, FUREUR_RAGE_PER_STACK, SKILLS } = require("config/balance.js");
function updateTowerCombat(game, {
  biome,
  distance,
  distanceSq,
  getBossTempTowerMods,
  getCreamsicleAuraRange,
  getTowerFireRateRatio,
  getTowerPierceCount,
  getTowerPoisonDps,
  getTowerRange,
  playSound,
  sfx,
  towerTypes,
  worldPosOfEnemy,
}, dt) {
  const boostFireRate = game.skills.boost.active > 0 ? SKILLS.boost.fireRateMult : 1;
  const boostDmg = game.skills.boost.active > 0 ? SKILLS.boost.damageMult : 1;

  game.towers.forEach((tower) => {
    tower.cooldown -= dt;
    if (tower.cooldown > 0) return;

    let target = null;
    let bestProgress = -1;
    const range = getTowerRange(tower);
    const rangeSq = range * range;
    for (const enemy of game.enemies) {
      const pos = worldPosOfEnemy(enemy);
      if (distanceSq(pos, tower) > rangeSq) continue;
      const progress = enemy.segment + enemy.t;
      if (progress > bestProgress) {
        bestProgress = progress;
        target = enemy;
      }
    }
    if (!target) return;

    const syn = game.deckSynergy?.mods || {};
    const bossMods = getBossTempTowerMods(game);
    const fireRate =
      tower.fireRate
      * game.modifiers.globalFireRate
      * boostFireRate
      * (game.encounter.towerFireRateMult || 1)
      * (syn.globalFireRate || 1)
      * bossMods.fireRateMult;
    tower.cooldown = 1 / fireRate;

    let damage = tower.damage * game.modifiers.globalDamage * boostDmg;
    if (syn.globalDamage) damage *= syn.globalDamage;
    const family = tower.family || tower.typeKey;
    if (family === "snapper") {
      damage *= game.modifiers.snapperDamage * (syn.snapperDamage || 1) * bossMods.snapperMult;
    }
    if (family === "spitter") damage *= game.modifiers.spitterDamage;
    if (family === "thorn") {
      damage *= game.modifiers.thornDamage * (syn.thornDamage || 1) * bossMods.thornMult;
    }
    if (biome.id === "heart" && family === "snapper") damage *= 1.12;
    if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
      damage *= 1 + tower.rageStacks * FUREUR_RAGE_PER_STACK;
    }
    if (tower.typeKey === "dionaea_b52" && game.modifiers.b52DamageBonus) {
      damage *= game.modifiers.b52DamageBonus;
    }

    const critChance = game.modifiers.critChance + (syn.critChance || 0) + bossMods.critBonus;
    const crit = Math.random() < Math.min(critChance, CRIT_CHANCE_CAP);
    if (crit) damage *= game.modifiers.critMult;

    if (target.armorShredTime > 0 && target.armorShredMult) {
      damage *= target.armorShredMult;
    }

    const poisonDps = getTowerPoisonDps(tower, game, syn, towerTypes);

    let pierceLeft = 0;
    if (tower.typeKey === "dionaea_white_tiger") {
      pierceLeft = getTowerPierceCount(tower, game, towerTypes) - 1;
    }

    game.projectiles.push({
      x: tower.x,
      y: tower.y,
      towerRef: tower,
      towerId: tower.id,
      targetId: target.id,
      speed: tower.projectileSpeed * game.modifiers.projectileSpeedMult,
      damage,
      color: tower.projectileColor,
      trailColor: tower.color,
      life: 1.8,
      poisonDps,
      crit,
      passive: tower.passive,
      pierceLeft,
    });
    if (sfx?.towerShot) sfx.towerShot(tower);
    else playSound(tower.soundFreq, 0.04, "triangle", 0.012);
  });

  game.towers.forEach((tower) => {
    if (tower.typeKey !== "drosera_creamsicle") return;
    const auraRange = getCreamsicleAuraRange(game, tower, towerTypes);
    game.towers.forEach((other) => {
      if (other.id === tower.id) return;
      if (distance(tower, other) <= auraRange) {
        const hasteAccel = CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(tower, towerTypes);
        other.cooldown = Math.max(0, other.cooldown - dt * hasteAccel);
      }
    });
  });
}

exports["updateTowerCombat"] = updateTowerCombat;

});
define("game/enemy-combat.js", function (exports, require, module) {
const { SKILLS } = require("config/balance.js");
const { applyCollectorMapSnareToEnemy, getSnareSlowFactor, tickCollectorMapSnare } = require("logic/hunter-slow.js");
const { tickEnemyAbilityMovement, tickEnemyRegen } = require("logic/enemy-abilities.js");
function updateEnemyCombat(game, {
  biome,
  createEnemy,
  createFloatText,
  defeatEnemy,
  distance,
  emitParticles,
  encounterConfig,
  enemyRoute,
  getEncounterMechanics,
  loseLifeAndCheck,
  maybeTriggerBossCardPhase,
  sfx,
  showMessage,
  updateBossPhases,
  worldPosOfEnemy,
}, dt) {
  tickCollectorMapSnare(game, dt);

  let slowFactor = 1;
  if (game.skills.snare.active > 0) {
    slowFactor = getSnareSlowFactor(
      SKILLS.snare.slowFactor,
      game.modifiers.snareSlowFactorMult || 1,
    );
  }

  for (let i = game.enemies.length - 1; i >= 0; i -= 1) {
    const enemy = game.enemies[i];
    applyCollectorMapSnareToEnemy(enemy, game);
    tickEnemyRegen(enemy, dt);

    if (enemy.poisonTime > 0 && enemy.poisonDps > 0) {
      enemy.poisonTime = Math.max(0, enemy.poisonTime - dt);
      if (enemy.poisonTime > 0 && Math.random() < dt * 2.5) sfx?.poison();
      enemy.hp -= enemy.poisonDps * dt;
      if (enemy.hp <= 0) {
        maybeTriggerBossCardPhase(enemy);
        defeatEnemy(enemy, worldPosOfEnemy(enemy));
        continue;
      }
    }

    if (enemy.burnTime > 0 && enemy.burnDps > 0) {
      enemy.burnTime = Math.max(0, enemy.burnTime - dt);
      if (enemy.burnTime > 0 && Math.random() < dt * 2.2) sfx?.burn();
      enemy.hp -= enemy.burnDps * dt;
      if (enemy.hp <= 0) {
        maybeTriggerBossCardPhase(enemy);
        defeatEnemy(enemy, worldPosOfEnemy(enemy));
        continue;
      }
    }

    if (enemy.armorShredTime > 0) {
      enemy.armorShredTime = Math.max(0, enemy.armorShredTime - dt);
      if (enemy.armorShredTime <= 0) enemy.armorShredMult = 1;
    }

    if (enemy.slowTime > 0) {
      enemy.slowTime = Math.max(0, enemy.slowTime - dt);
    }

    if (enemy.flatRegenPerSec > 0 && enemy.hp < enemy.maxHp) {
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.flatRegenPerSec * dt);
    }

    if (enemy.isBoss) {
      const bossMech = getEncounterMechanics(encounterConfig, "boss", biome.id);
      updateBossPhases(enemy, bossMech, {
        dt,
        spawnAdds: (types) => {
          types.forEach((addKey, addIndex) => {
            const add = createEnemy(addKey, enemy.pathId);
            add.segment = enemy.segment;
            add.t = Math.max(0, enemy.t - 0.06 * (addIndex + 1));
            game.enemies.push(add);
            game.enemyById.set(add.id, add);
          });
          showMessage("Le boss appelle des renforts !", "warn");
          sfx?.bossPhase();
        },
        onPhaseChange: (phase) => {
          const label = phase.label || "Nouvelle phase";
          showMessage(label, "warn");
          const pos = worldPosOfEnemy(enemy);
          createFloatText(pos.x, pos.y - 20, label, "#f5c842");
          sfx?.bossPhase();
        },
      });
    }

    const dashMult = tickEnemyAbilityMovement(enemy, dt);
    if (dashMult > 1.2 && enemy.dashBoostSec > 0.5) sfx?.dash();

    const enemySlowMult = (enemy.slowTime > 0 && enemy.slowMult) ? enemy.slowMult : 1;
    let remaining = enemy.speed * dt * slowFactor * enemySlowMult * dashMult;
    if (biome.id === "night" && enemy.typeKey === "wasp") remaining *= 1.12;
    const route = enemyRoute(enemy);

    while (remaining > 0 && enemy.segment < route.length - 1) {
      const from = route[enemy.segment];
      const to = route[enemy.segment + 1];
      const segmentLength = distance(from, to);
      const leftOnSegment = (1 - enemy.t) * segmentLength;
      if (remaining < leftOnSegment) {
        enemy.t += remaining / segmentLength;
        remaining = 0;
      } else {
        remaining -= leftOnSegment;
        enemy.segment += 1;
        enemy.t = 0;
      }
    }

    if (enemy.segment >= route.length - 1) {
      game.enemies.splice(i, 1);
      game.enemyById.delete(enemy.id);
      const end = route[route.length - 1];
      emitParticles(end.x - 8, end.y, "#d85f4e", 12);
      if (enemy.typeKey === "boss") {
        createFloatText("BOSS!", end.x - 22, end.y - 24, "#ff6a4a");
        loseLifeAndCheck({ bossBreach: true });
        return;
      }
      loseLifeAndCheck();
    }
  }
}

exports["updateEnemyCombat"] = updateEnemyCombat;

});
define("game/leaderboard-ui.js", function (exports, require, module) {
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

function formatLeaderboardError(error, detail, esc = escapeHtml) {
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

function renderLeaderboardTable(board, { escapeHtml: esc = escapeHtml }) {
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

function formatLeaderboardSubtitle(entry) {
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

function renderLeaderboardPanel({
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

exports["formatLeaderboardError"] = formatLeaderboardError;
exports["renderLeaderboardTable"] = renderLeaderboardTable;
exports["formatLeaderboardSubtitle"] = formatLeaderboardSubtitle;
exports["renderLeaderboardPanel"] = renderLeaderboardPanel;

});
define("logic/run-mutations.js", function (exports, require, module) {
/** Applique la mutation de run choisie (début de campagne). */
function applyRunMutation(game, mutation) {
  if (!mutation) return;
  const m = game.modifiers;

  if (mutation.enemySpeedMult) {
    game.run.encounterSpeedMult = mutation.enemySpeedMult;
  }
  if (mutation.enemyHpMult) {
    game.run.encounterHpMult = mutation.enemyHpMult;
  }
  if (mutation.towerDamageMult) {
    m.globalDamage *= mutation.towerDamageMult;
  }
  if (mutation.rewardMult) {
    m.rewardMult *= mutation.rewardMult;
  }
  if (mutation.maxLivesBonus) {
    game.maxLives = Math.max(8, game.maxLives + mutation.maxLivesBonus);
    game.lives = Math.min(game.lives, game.maxLives);
  }
  if (mutation.shopCardDiscount) {
    game.run.shopCardDiscount = mutation.shopCardDiscount;
  }
}

function getMutationShopDiscount(game) {
  return game.run?.shopCardDiscount || 0;
}

exports["applyRunMutation"] = applyRunMutation;
exports["getMutationShopDiscount"] = getMutationShopDiscount;

});
define("logic/wave-modifiers.js", function (exports, require, module) {
function pickWaveModifier(modifiers, rng = Math.random) {
  if (!modifiers?.length) return null;
  return modifiers[Math.floor(rng() * modifiers.length)];
}

function applyWaveModifierToEnemy(enemy, modifier, nodeType) {
  if (!modifier) return;
  if (modifier.spawnPoisonDps) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, modifier.spawnPoisonDps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, modifier.spawnPoisonTime || 3);
  }
  if (modifier.eliteOnly && modifier.eliteArmorMult) {
    if (nodeType === "elite" || enemy.typeKey === "boss") {
      enemy.damageReduction = Math.min(
        enemy.damageReduction ?? 1,
        modifier.eliteArmorMult
      );
    }
  }
}

function scaleEncounterQueue(queue, modifier) {
  if (!modifier?.countMult || modifier.countMult === 1) return queue.slice();
  const target = Math.max(1, Math.round(queue.length * modifier.countMult));
  const out = queue.slice();
  while (out.length < target) {
    out.push(out[Math.floor(Math.random() * out.length)] || "beetle");
  }
  return out.slice(0, target);
}

function getWaveModifierHpMult(modifier) {
  return modifier?.hpMult ?? 1;
}

function applyWaveModifierToEncounter(encounter, modifier) {
  if (!modifier || !encounter) return;
  if (modifier.towerFireRateMult) {
    encounter.towerFireRateMult = (encounter.towerFireRateMult || 1) * modifier.towerFireRateMult;
  }
}

exports["pickWaveModifier"] = pickWaveModifier;
exports["applyWaveModifierToEnemy"] = applyWaveModifierToEnemy;
exports["scaleEncounterQueue"] = scaleEncounterQueue;
exports["getWaveModifierHpMult"] = getWaveModifierHpMult;
exports["applyWaveModifierToEncounter"] = applyWaveModifierToEncounter;

});
define("logic/encounter-mechanics.js", function (exports, require, module) {
const { BOSS_ENRAGE_DAMAGE_MULT, BOSS_SHIELD_DAMAGE_MULT } = require("config/balance.js");
/** Mécaniques elite/boss pilotées par content/encounters.json */

function getEncounterMechanics(encounterConfig, nodeType, biomeId = null) {
  if (nodeType === "elite") return encounterConfig.elite;
  if (nodeType === "boss") {
    return encounterConfig.bossByBiome?.[biomeId] || encounterConfig.boss;
  }
  return null;
}

function applyEliteTraits(enemy, mechanics) {
  if (!mechanics || enemy.typeKey === "boss") return;
  if (mechanics.armorMult) {
    enemy.armorShredMult = 1;
    enemy.damageReduction = mechanics.armorMult;
  }
  // Régénération plate (PV/s), distincte de regenPerSec (% max PV/s sur escargot).
  if (mechanics.regenPerSec) enemy.flatRegenPerSec = mechanics.regenPerSec;
}

function applyBossTraits(enemy, mechanics) {
  if (!mechanics?.phases?.length) return;
  enemy.bossPhaseIndex = 0;
  enemy.bossPhases = mechanics.phases;
  enemy.bossShield = 0;
  enemy.bossEnraged = false;
  enemy.isBoss = true;
}

function updateBossPhases(enemy, mechanics, helpers) {
  if (!enemy.isBoss || !enemy.bossPhases) return;
  const hpRatio = enemy.hp / enemy.maxHp;
  let phaseIndex = enemy.bossPhaseIndex;
  while (
    phaseIndex < enemy.bossPhases.length - 1
    && hpRatio <= enemy.bossPhases[phaseIndex + 1].hpRatio
  ) {
    phaseIndex += 1;
  }
  if (phaseIndex !== enemy.bossPhaseIndex) {
    const phase = enemy.bossPhases[phaseIndex];
    enemy.bossPhaseIndex = phaseIndex;
    enemy.speed *= phase.speedMult || 1;
    if (phase.shieldSeconds) enemy.bossShield = phase.shieldSeconds;
    if (phase.spawnAdds?.length) helpers.spawnAdds(phase.spawnAdds, enemy);
    if (phaseIndex >= enemy.bossPhases.length - 1) enemy.bossEnraged = true;
    helpers.onPhaseChange(phase, enemy);
  }
  if (enemy.bossShield > 0) {
    enemy.bossShield = Math.max(0, enemy.bossShield - helpers.dt);
  }
}

function computeDamageToEnemy(enemy, rawDamage) {
  let dmg = rawDamage;
  if (enemy.abilities?.includes("mucus")) dmg *= 0.9;
  if (enemy.damageReduction) dmg *= enemy.damageReduction;
  if (enemy.bossShield > 0) dmg *= BOSS_SHIELD_DAMAGE_MULT;
  if (enemy.bossEnraged && enemy.bossPhaseIndex >= 2) dmg *= BOSS_ENRAGE_DAMAGE_MULT;
  return dmg;
}

function extendEncounterQueue(queue, nodeType, mechanics) {
  if (nodeType === "elite" && mechanics?.extraBeetles) {
    for (let i = 0; i < mechanics.extraBeetles; i += 1) queue.push("beetle");
  }
  return queue;
}

exports["getEncounterMechanics"] = getEncounterMechanics;
exports["applyEliteTraits"] = applyEliteTraits;
exports["applyBossTraits"] = applyBossTraits;
exports["updateBossPhases"] = updateBossPhases;
exports["computeDamageToEnemy"] = computeDamageToEnemy;
exports["extendEncounterQueue"] = extendEncounterQueue;

});
define("logic/enemy-model.js", function (exports, require, module) {
const { getSpireEnemyHpMult, getSpireEnemySpeedMult } = require("config/campaign.js");
const { getKillRewardBase } = require("logic/economy.js");
const { applyEnemyAbilities } = require("logic/enemy-abilities.js");
const { applyBossTraits, applyEliteTraits, getEncounterMechanics } = require("logic/encounter-mechanics.js");
const { applyTormentEnemyTraits } = require("logic/ascension-mechanics.js");
const { applyWaveModifierToEnemy, getWaveModifierHpMult } = require("logic/wave-modifiers.js");
const BASE_ENEMY_HP = 56;
const ENEMY_HP_PER_FLOOR = 18;
const BASE_ENEMY_SPEED = 43;
const ENEMY_SPEED_PER_FLOOR = 2.1;
const SWAMP_SPAWN_POISON_DPS = 2.5;
const SWAMP_SPAWN_POISON_TIME = 1.8;

function createEnemyFromType(typeKey, {
  id,
  pathId = 0,
  enemyType,
  pathsLength,
  game,
  biomes,
  encounterConfig,
  getBiomeForFloor,
  applyBossTempWaveToEnemy,
  applyCollectorMapSnareToEnemy,
}) {
  const spireMult = getSpireEnemyHpMult(game.spire.spireNumber);
  const spireSpeedMult = getSpireEnemySpeedMult(game.spire.spireNumber);
  const floor = game.spire.floor;
  const baseHp = (BASE_ENEMY_HP + (floor + 1) * ENEMY_HP_PER_FLOOR) * spireMult;
  const baseSpeed = (BASE_ENEMY_SPEED + (floor + 1) * ENEMY_SPEED_PER_FLOOR) * spireSpeedMult;
  const baseReward = getKillRewardBase(floor);
  const encounter = game.encounter;
  let hp = Math.round(baseHp * enemyType.hpMult * encounter.hpMult);
  hp = Math.round(hp * getWaveModifierHpMult(game.waveModifier));
  const biome = game.biome || biomes[0];
  const enemy = {
    id,
    typeKey,
    pathId: pathId % pathsLength,
    segment: 0,
    t: 0,
    speed: baseSpeed * enemyType.speedMult * encounter.speedMult,
    hp,
    maxHp: hp,
    reward: Math.round(baseReward * enemyType.rewardMult * encounter.rewardMult),
    radius: enemyType.radius,
    color: enemyType.color,
    poisonTime: biome.id === "swamp" ? SWAMP_SPAWN_POISON_TIME : 0,
    poisonDps: biome.id === "swamp" ? SWAMP_SPAWN_POISON_DPS : 0,
  };

  const nodeType = game.spire.currentNodeType;
  const biomeId = game.biome?.id || getBiomeForFloor(floor)?.id;
  const mechanics = getEncounterMechanics(encounterConfig, nodeType, biomeId);
  if (nodeType === "elite" && typeKey !== "boss") applyEliteTraits(enemy, mechanics);
  if (typeKey === "boss") applyBossTraits(enemy, mechanics);
  applyWaveModifierToEnemy(enemy, game.waveModifier, nodeType);
  applyTormentEnemyTraits(enemy, game);

  if (game.run.dailySpawnPoison) {
    enemy.poisonDps = Math.max(enemy.poisonDps || 0, game.run.dailySpawnPoison.dps);
    enemy.poisonTime = Math.max(enemy.poisonTime || 0, game.run.dailySpawnPoison.time);
  }

  applyBossTempWaveToEnemy(enemy, game);
  applyCollectorMapSnareToEnemy(enemy, game);
  applyEnemyAbilities(enemy, enemyType);

  if (enemy.abilities?.includes("sting")) {
    enemy.reward = Math.round(enemy.reward * (enemy.stingRewardBonus || 1.12));
  }
  if (game.modifiers.enemySpawnSpeedMult) {
    enemy.speed *= game.modifiers.enemySpawnSpeedMult;
  }

  return enemy;
}

exports["createEnemyFromType"] = createEnemyFromType;

});
define("logic/collector-ultimate.js", function (exports, require, module) {
const { GARDIEN_ULTIMATE_MAP_SNARE } = require("config/balance.js");
const { applyCollectorMapSnareToEnemy, triggerHunterUltimateMapSnare } = require("logic/hunter-slow.js");
function canUseCollectorUltimate(game) {
  return !game.collectorUltimate?.usedThisSpire;
}

function resetCollectorUltimateForSpire(game) {
  game.collectorUltimate = { usedThisSpire: false };
}

/**
 * Active l'ultime du collectionneur (1× par Spire).
 * @returns {{ ok: boolean, message: string }}
 */
function activateCollectorUltimate(game, collector, helpers) {
  if (!collector?.ultimateId) {
    return { ok: false, message: "Ce collectionneur n'a pas d'ultime." };
  }
  if (game.collectorUltimate?.usedThisSpire) {
    return { ok: false, message: "Ultime deja utilise sur cette Spire." };
  }
  if (game.screen !== "playing") {
    return { ok: false, message: "Utilisable en combat seulement." };
  }

  const id = collector.ultimateId;
  game.collectorUltimate.usedThisSpire = true;

  if (id === "herbier_burst") {
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("ULTIME +120 soleil!", game.canvas?.width / 2 - 60 || 400, 120, "#ffe87a");
    return { ok: true, message: "Charles : +120 soleil immediatement." };
  }

  if (id === "distiller_burst") {
    game.skills.boost.timer = 0;
    game.skills.boost.active = game.skills.boost.duration + (game.modifiers.boostDurationBonus || 0);
    game.skills.snare.timer = 0;
    game.skills.snare.active = game.skills.snare.duration + (game.modifiers.snareDurationBonus || 0);
    game.modifiers.spitterPoison += 8;
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("ULTIME DISTILL!", game.canvas?.width / 2 - 50 || 400, 120, "#8fe275");
    return { ok: true, message: "Mayeu : competences activees + poison renforce." };
  }

  if (id === "gardien_burst") {
    const heal = Math.round(game.maxLives * 0.45);
    game.lives = Math.min(game.maxLives, game.lives + heal);
    triggerHunterUltimateMapSnare(game);
    for (const enemy of game.enemies) {
      applyCollectorMapSnareToEnemy(enemy, game);
    }
    helpers.triggerUltimateVfx?.(id);
    helpers.createFloatText?.("GEL DE SERRE!", game.canvas?.width / 2 - 55 || 400, 100, "#a8e8ff");
    helpers.createFloatText?.(`+${heal} PV`, game.canvas?.width / 2 - 20 || 400, 120, "#d7ffd4");
    return {
      ok: true,
      message: `Chris : +${heal} vies et ralentissement global (${GARDIEN_ULTIMATE_MAP_SNARE.duration} s).`,
    };
  }

  return { ok: false, message: "Ultime inconnu." };
}

exports["canUseCollectorUltimate"] = canUseCollectorUltimate;
exports["resetCollectorUltimateForSpire"] = resetCollectorUltimateForSpire;
exports["activateCollectorUltimate"] = activateCollectorUltimate;

});
define("logic/deck-synergies.js", function (exports, require, module) {
/** Famille de tour (snapper / spitter / thorn) pour une carte de run. */
function getCardTowerLine(card, towerTypes = {}) {
  if (!card) return null;
  if (card.towerFamily) return card.towerFamily;
  if (card.towerCard && towerTypes[card.towerCard]?.family) {
    return towerTypes[card.towerCard].family;
  }
  return null;
}

/**
 * Compte les cartes de run par ligne de tour (Dionaea / Sarracenia / Drosera).
 * Les variantes (towerCard) comptent pour la ligne de la tour choisie au draft.
 */
function countCardsByFamily(pickedIds, cardLibrary, towerTypes = {}) {
  const counts = {};
  for (const id of pickedIds) {
    const card = cardLibrary.find((c) => c.id === id);
    const line = getCardTowerLine(card, towerTypes);
    if (!line) continue;
    counts[line] = (counts[line] || 0) + 1;
  }
  return counts;
}

/**
 * Calcule les bonus de synergie actifs (tiers cumulatifs : palier le plus haut atteint).
 * @returns {{ active: Array, mods: object }}
 */
function computeDeckSynergyState(pickedIds, cardLibrary, synergyConfig, towerTypes = {}) {
  const counts = countCardsByFamily(pickedIds, cardLibrary, towerTypes);
  const mods = {
    snapperDamage: 1,
    spitterPoison: 0,
    thornDamage: 1,
    thornRange: 0,
    globalDamage: 1,
    globalFireRate: 1,
    critChance: 0,
  };
  const active = [];

  for (const family of synergyConfig?.families || []) {
    const count = counts[family.id] || 0;
    if (count < 1) continue;
    const tiers = [...(family.tiers || [])].sort((a, b) => b.minCards - a.minCards);
    const tier = tiers.find((t) => count >= t.minCards);
    if (!tier) continue;
    active.push({ familyId: family.id, label: family.label, count, tier });
    if (tier.snapperDamage) mods.snapperDamage *= tier.snapperDamage;
    if (tier.spitterPoison) mods.spitterPoison += tier.spitterPoison;
    if (tier.thornDamage) mods.thornDamage *= tier.thornDamage;
    if (tier.thornRange) mods.thornRange += tier.thornRange;
    if (tier.globalDamage) mods.globalDamage *= tier.globalDamage;
    if (tier.globalFireRate) mods.globalFireRate *= tier.globalFireRate;
    if (tier.critChance) mods.critChance += tier.critChance;
  }

  return { active, mods };
}

exports["getCardTowerLine"] = getCardTowerLine;
exports["countCardsByFamily"] = countCardsByFamily;
exports["computeDeckSynergyState"] = computeDeckSynergyState;

});
define("logic/cards.js", function (exports, require, module) {
/** Utilitaires deck — cartes stackables et plafonds. */

function countCardInDeck(pickedIds, cardId) {
  return pickedIds.filter((id) => id === cardId).length;
}

function getCardMaxStack(card) {
  if (!card?.stackable) return 1;
  if (card.maxStack != null && card.maxStack > 0) return card.maxStack;
  return Infinity;
}

function isCardAtMaxStack(card, count) {
  if (!card?.stackable) return false;
  const max = getCardMaxStack(card);
  return Number.isFinite(max) && count >= max;
}

function canAddCardToDeck(card, pickedIds) {
  const count = countCardInDeck(pickedIds, card.id);
  if (card.stackable) return count < getCardMaxStack(card);
  return count === 0;
}

exports["countCardInDeck"] = countCardInDeck;
exports["getCardMaxStack"] = getCardMaxStack;
exports["isCardAtMaxStack"] = isCardAtMaxStack;
exports["canAddCardToDeck"] = canAddCardToDeck;

});
define("logic/tower-model.js", function (exports, require, module) {
const { TOWER_UPGRADE_DAMAGE_MULT, TOWER_UPGRADE_FIRE_RATE_MULT, TOWER_UPGRADE_PROJECTILE_SPEED_MULT, TOWER_UPGRADE_RANGE_MULT } = require("config/balance.js");
const TOWER_MAX_LEVEL = 3;
const TOWER_UPGRADE_COST_RATE = 0.82;
const TOWER_SELL_REFUND_RATE = 0.7;

function createTowerFromType(typeKey, type, pad, id) {
  return {
    id,
    typeKey,
    name: type.name,
    family: type.family || typeKey,
    passive: type.passive || null,
    x: pad.x,
    y: pad.y,
    level: 1,
    baseCost: type.cost,
    investedGold: type.cost,
    range: type.range,
    fireRate: type.fireRate,
    damage: type.damage,
    projectileSpeed: type.projectileSpeed,
    color: type.color,
    projectileColor: type.projectileColor,
    soundFreq: type.soundFreq,
    cooldown: 0.15,
    padRef: pad,
    rageStacks: 0,
  };
}

function getUpgradeCost(tower) {
  return Math.round(tower.baseCost * TOWER_UPGRADE_COST_RATE * tower.level);
}

function getTowerSellRefund(tower) {
  return Math.round(tower.investedGold * TOWER_SELL_REFUND_RATE);
}

function needsSellConfirmation(tower) {
  return tower.level > 1 || tower.investedGold > tower.baseCost * 1.05;
}

function canUpgradeTower(tower) {
  return Boolean(tower) && tower.level < TOWER_MAX_LEVEL;
}

function applyTowerUpgrade(tower, cost) {
  tower.investedGold += cost;
  tower.level += 1;
  tower.damage *= TOWER_UPGRADE_DAMAGE_MULT;
  tower.range *= TOWER_UPGRADE_RANGE_MULT;
  tower.fireRate *= TOWER_UPGRADE_FIRE_RATE_MULT;
  tower.projectileSpeed *= TOWER_UPGRADE_PROJECTILE_SPEED_MULT;
  return tower;
}

exports["TOWER_MAX_LEVEL"] = TOWER_MAX_LEVEL;
exports["TOWER_UPGRADE_COST_RATE"] = TOWER_UPGRADE_COST_RATE;
exports["TOWER_SELL_REFUND_RATE"] = TOWER_SELL_REFUND_RATE;
exports["createTowerFromType"] = createTowerFromType;
exports["getUpgradeCost"] = getUpgradeCost;
exports["getTowerSellRefund"] = getTowerSellRefund;
exports["needsSellConfirmation"] = needsSellConfirmation;
exports["canUpgradeTower"] = canUpgradeTower;
exports["applyTowerUpgrade"] = applyTowerUpgrade;

});
define("logic/tower-range.js", function (exports, require, module) {
const { TOWER_UPGRADE_RANGE_MULT } = require("config/balance.js");
const { getBossTempTowerMods } = require("logic/boss-temp-cards.js");
const { TOWER_MAX_LEVEL } = require("logic/tower-model.js");
const TOWER_MIN_RANGE = 70;

function getEffectiveTowerRange(tower, {
  game,
  rangeOverride,
}) {
  const family = tower.family || tower.typeKey;
  const bossMods = getBossTempTowerMods(game);
  let range = (rangeOverride ?? tower.range)
    + game.modifiers.globalRange
    + (game.encounter.towerRangeBonus || 0);
  range *= 1 + (bossMods.rangeBonus || 0);
  if (family === "thorn") {
    range += game.modifiers.thornRange + (game.deckSynergy?.mods?.thornRange || 0);
  }
  return Math.max(TOWER_MIN_RANGE, range);
}

function getTowerTypePreviewRange(typeKey, {
  game,
  towerTypes,
}) {
  const type = towerTypes[typeKey];
  if (!type) return TOWER_MIN_RANGE;
  return getEffectiveTowerRange({
    typeKey,
    family: type.family || typeKey,
    range: type.range,
  }, { game });
}

function getTowerUpgradePreviewRange(tower, {
  game,
}) {
  if (!tower || tower.level >= TOWER_MAX_LEVEL) return null;
  return getEffectiveTowerRange(tower, {
    game,
    rangeOverride: tower.range * TOWER_UPGRADE_RANGE_MULT,
  });
}

exports["TOWER_MIN_RANGE"] = TOWER_MIN_RANGE;
exports["getEffectiveTowerRange"] = getEffectiveTowerRange;
exports["getTowerTypePreviewRange"] = getTowerTypePreviewRange;
exports["getTowerUpgradePreviewRange"] = getTowerUpgradePreviewRange;

});
define("logic/tower-stats.js", function (exports, require, module) {
const { ATLAS_BASE_POISON, B52_BASE_ARMOR_DUR, B52_BASE_ARMOR_MULT, BELLE_SLOW_PASSIVE, CAPENSIS_BASE_AOE, CREAMSICLE_AURA_BASE_RANGE, CREAMSICLE_AURA_COOLDOWN_ACCEL, CRIT_CHANCE_CAP, FUREUR_RAGE_PER_STACK, RYU_BASE_BURN_DPS, SCORPIO_BASE_POISON, SKILLS, SPITTER_BASE_POISON, WHITE_TIGER_BASE_PIERCE } = require("config/balance.js");
const { getBossTempDamageMult, getBossTempTowerMods } = require("logic/boss-temp-cards.js");
/** Ratio stat actuelle / stat de base du type (reflète les upgrades de niveau). */
function getTowerStatRatio(tower, towerTypes, stat) {
  if (!tower?.typeKey) return 1;
  const base = towerTypes[tower.typeKey]?.[stat];
  const current = tower?.[stat];
  if (!base || base <= 0 || !current) return 1;
  return current / base;
}

function getTowerDamageRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "damage");
}

function getTowerRangeRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "range");
}

function getTowerFireRateRatio(tower, towerTypes) {
  return getTowerStatRatio(tower, towerTypes, "fireRate");
}

/** Durées de passifs (slow, poison, brûlure…) suivent la cadence améliorée. */
function scaleTowerPassiveDuration(baseSec, tower, towerTypes) {
  return baseSec * getTowerFireRateRatio(tower, towerTypes);
}

function getCreamsicleAuraRange(game, creamsicleTower = null, towerTypes = {}) {
  const cardBonus = game.modifiers.creamsicleAuraBonus || 0;
  const upgradeMult = creamsicleTower
    ? getTowerRangeRatio(creamsicleTower, towerTypes)
    : 1;
  return Math.round((CREAMSICLE_AURA_BASE_RANGE + cardBonus) * upgradeMult);
}

/** Multiplicateur de cadence équivalent à l'accélération de cooldown Creamsicle. */
function getCreamsicleHasteMult(tower, game, towers, distanceFn, towerTypes = {}) {
  let accel = 0;
  for (const src of towers) {
    if (src.typeKey !== "drosera_creamsicle") continue;
    if (src.id === tower.id) continue;
    const auraRange = getCreamsicleAuraRange(game, src, towerTypes);
    if (distanceFn(src, tower) <= auraRange) {
      accel += CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(src, towerTypes);
    }
  }
  return 1 + accel;
}

function getTowerPoisonDps(tower, game, syn = {}, towerTypes = {}) {
  const dmgMult = getTowerDamageRatio(tower, towerTypes);
  const family = tower.family || tower.typeKey;
  let poison = 0;
  if (family === "spitter") {
    poison = SPITTER_BASE_POISON + game.modifiers.spitterPoison + (syn.spitterPoison || 0);
  }
  if (tower.typeKey === "sarracenia_atlas5") {
    poison = ATLAS_BASE_POISON + (game.modifiers.atlasExtraPoison || 0);
  }
  if (tower.typeKey === "drosera_scorpioides") {
    poison = SCORPIO_BASE_POISON;
  }
  return poison * dmgMult;
}

function getTowerBurnDps(tower, game, towerTypes = {}) {
  return (game.modifiers.ryuBurnDps || RYU_BASE_BURN_DPS) * getTowerDamageRatio(tower, towerTypes);
}

function getTowerSplashRadius(tower, game, towerTypes = {}) {
  return (game.modifiers.capensisAoe || CAPENSIS_BASE_AOE) * getTowerRangeRatio(tower, towerTypes);
}

function getTowerArmorShredMult(tower, towerTypes = {}) {
  const dmgRatio = getTowerDamageRatio(tower, towerTypes);
  return B52_BASE_ARMOR_MULT + (dmgRatio - 1) * 0.15;
}

function getTowerArmorShredDuration(tower, game, towerTypes = {}) {
  return scaleTowerPassiveDuration(game.modifiers.b52ArmorDur || B52_BASE_ARMOR_DUR, tower, towerTypes);
}

function getTowerSlowPotency(tower, game, towerTypes = {}) {
  const base = game.modifiers.belleSlow || BELLE_SLOW_PASSIVE;
  const fr = getTowerFireRateRatio(tower, towerTypes);
  return Math.max(0.38, base / fr);
}

function getTowerPierceCount(tower, game, towerTypes = {}) {
  const base = game.modifiers.tigerPierceCount || WHITE_TIGER_BASE_PIERCE;
  return Math.max(base, Math.round(base * getTowerDamageRatio(tower, towerTypes)));
}

/** Texte passif avec valeurs effectives (upgrades + cartes). */
function getTowerPassiveDescription(tower, game, towerTypes = {}) {
  const syn = game.deckSynergy?.mods || {};
  const type = towerTypes[tower.typeKey];
  if (!type) return null;

  if (tower.typeKey === "drosera_creamsicle") {
    const auraPx = getCreamsicleAuraRange(game, tower, towerTypes);
    const hastePct = Math.round(
      CREAMSICLE_AURA_COOLDOWN_ACCEL * getTowerFireRateRatio(tower, towerTypes) * 100,
    );
    return `Aura : +${hastePct}% cadence aux tours proches (${auraPx} px)`;
  }

  const family = tower.family || tower.typeKey;
  if (family === "spitter" && !type.passive) {
    const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
    const dur = scaleTowerPassiveDuration(3, tower, towerTypes).toFixed(1);
    return `Poison : ${dps} DPS (${dur} s)`;
  }

  switch (type.passive) {
    case "splash": {
      const r = Math.round(getTowerSplashRadius(tower, game, towerTypes));
      return `Impact AoE : 50% dégâts dans ${r} px`;
    }
    case "armor_shred": {
      const mult = getTowerArmorShredMult(tower, towerTypes);
      const dur = getTowerArmorShredDuration(tower, game, towerTypes).toFixed(1);
      return `Morsure : +${Math.round((mult - 1) * 100)}% dégâts subis par la cible (${dur} s)`;
    }
    case "burn": {
      const dps = Math.round(getTowerBurnDps(tower, game, towerTypes) * 10) / 10;
      const maxDur = scaleTowerPassiveDuration(6, tower, towerTypes).toFixed(0);
      return `Combustion : ${dps} DPS, cumulable jusqu'à ${maxDur} s`;
    }
    case "pierce": {
      const n = getTowerPierceCount(tower, game, towerTypes);
      return `Projectile traversant : touche ${n} ennemis`;
    }
    case "heavy_poison": {
      const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
      return `Poison lourd : ${dps} DPS, s'accumule`;
    }
    case "slow": {
      const slow = getTowerSlowPotency(tower, game, towerTypes);
      const dur = scaleTowerPassiveDuration(2.5, tower, towerTypes).toFixed(1);
      return `Nectar : ennemis à ${Math.round(slow * 100)}% de vitesse pendant ${dur} s`;
    }
    case "chain_poison": {
      const dps = Math.round(getTowerPoisonDps(tower, game, syn, towerTypes) * 10) / 10;
      return `Poison ${dps} DPS — mort par poison = propagation à ${game.modifiers.scorpioChain || 2} proches`;
    }
  }

  return type.passiveDesc || null;
}

/** Empreinte pour rafraîchir le tooltip flottant (niveau, passifs, aura Creamsicle…). */
function getTowerTooltipFingerprint(tower, game, {
  eff,
  passiveText,
  range,
  nextRange,
  gold,
}) {
  const creamsicleSig = game.towers
    .filter((t) => t.typeKey === "drosera_creamsicle")
    .map((t) => `${t.id}:${t.level}:${t.range}:${t.fireRate}:${t.x}:${t.y}`)
    .join(";");
  return [
    tower.id,
    tower.level,
    tower.damage,
    tower.range,
    tower.fireRate,
    gold,
    Math.round(eff.damage * 100),
    eff.fireRate.toFixed(3),
    eff.creamsicleMult.toFixed(4),
    eff.boostActive ? 1 : 0,
    range,
    nextRange ?? "",
    passiveText ?? "",
    creamsicleSig,
  ].join("|");
}

/** Stats effectives affichées dans le panneau tour (miroir de updateTowers). */
function computeTowerEffectiveStats(tower, { game, towers, biome, distanceFn, towerTypes = {} }) {
  const syn = game.deckSynergy?.mods || {};
  const bossMods = getBossTempTowerMods(game);
  const boostFireRate = game.skills.boost.active > 0 ? SKILLS.boost.fireRateMult : 1;
  const boostDmg = game.skills.boost.active > 0 ? SKILLS.boost.damageMult : 1;
  const creamsicleMult = getCreamsicleHasteMult(tower, game, towers, distanceFn, towerTypes);

  const fireRate =
    tower.fireRate
    * game.modifiers.globalFireRate
    * boostFireRate
    * (game.encounter.towerFireRateMult || 1)
    * (syn.globalFireRate || 1)
    * bossMods.fireRateMult
    * creamsicleMult;

  let damage = tower.damage * game.modifiers.globalDamage * boostDmg * getBossTempDamageMult(game);
  if (syn.globalDamage) damage *= syn.globalDamage;
  const family = tower.family || tower.typeKey;
  if (family === "snapper") {
    damage *= game.modifiers.snapperDamage * (syn.snapperDamage || 1) * bossMods.snapperMult;
  }
  if (family === "spitter") damage *= game.modifiers.spitterDamage;
  if (family === "thorn") {
    damage *= game.modifiers.thornDamage * (syn.thornDamage || 1) * bossMods.thornMult;
  }
  if (biome?.id === "heart" && family === "snapper") damage *= 1.12;
  if (tower.typeKey === "sarracenia_fureur" && tower.rageStacks > 0) {
    damage *= 1 + tower.rageStacks * FUREUR_RAGE_PER_STACK;
  }
  if (tower.typeKey === "dionaea_b52" && game.modifiers.b52DamageBonus) {
    damage *= game.modifiers.b52DamageBonus;
  }

  const critChance = Math.min(
    game.modifiers.critChance + (syn.critChance || 0) + bossMods.critBonus,
    CRIT_CHANCE_CAP,
  );
  const avgDamage = damage * (1 + critChance * (game.modifiers.critMult - 1));

  return {
    damage,
    avgDamage,
    critChance,
    fireRate,
    creamsicleMult,
    boostActive: boostFireRate > 1 || boostDmg > 1,
  };
}

exports["getTowerStatRatio"] = getTowerStatRatio;
exports["getTowerDamageRatio"] = getTowerDamageRatio;
exports["getTowerRangeRatio"] = getTowerRangeRatio;
exports["getTowerFireRateRatio"] = getTowerFireRateRatio;
exports["scaleTowerPassiveDuration"] = scaleTowerPassiveDuration;
exports["getCreamsicleAuraRange"] = getCreamsicleAuraRange;
exports["getCreamsicleHasteMult"] = getCreamsicleHasteMult;
exports["getTowerPoisonDps"] = getTowerPoisonDps;
exports["getTowerBurnDps"] = getTowerBurnDps;
exports["getTowerSplashRadius"] = getTowerSplashRadius;
exports["getTowerArmorShredMult"] = getTowerArmorShredMult;
exports["getTowerArmorShredDuration"] = getTowerArmorShredDuration;
exports["getTowerSlowPotency"] = getTowerSlowPotency;
exports["getTowerPierceCount"] = getTowerPierceCount;
exports["getTowerPassiveDescription"] = getTowerPassiveDescription;
exports["getTowerTooltipFingerprint"] = getTowerTooltipFingerprint;
exports["computeTowerEffectiveStats"] = computeTowerEffectiveStats;

});
define("logic/daily-challenge.js", function (exports, require, module) {
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function getDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function pickDailyChallenge(challenges, date = new Date()) {
  if (!challenges?.length) return null;
  const key = getDateKey(date);
  const idx = hashString(key) % challenges.length;
  return { ...challenges[idx], dateKey: key };
}

const DAILY_COMPLETION_KEY_PREFIX = "gloutonnes_daily_done_";
const DAILY_BONUS_SCORE = 400;

function isDailyCompletedToday(date = new Date()) {
  const key = getDateKey(date);
  try {
    return localStorage.getItem(`${DAILY_COMPLETION_KEY_PREFIX}${key}`) === "1";
  } catch {
    return false;
  }
}

function markDailyCompletedToday(date = new Date()) {
  const key = getDateKey(date);
  try {
    localStorage.setItem(`${DAILY_COMPLETION_KEY_PREFIX}${key}`, "1");
  } catch {
    /* ignore */
  }
}

/** Run « valide » pour le bonus quotidien : progression réelle, pas une mort instantanée. */
function qualifiesForDailyCompletion(game) {
  if (!game.daily?.id) return false;
  const spire = game.spire?.spireNumber || 1;
  const floor = (game.spire?.floor ?? 0) + 1;
  return game.screen === "victory" || spire >= 2 || floor >= 5;
}

/** Premier succès du jour → bonus fixe ; 0 si déjà fait ou run trop courte. */
function tryApplyDailyCompletionBonus(game, date = new Date()) {
  if (!game.daily?.id || isDailyCompletedToday(date)) return 0;
  if (!qualifiesForDailyCompletion(game)) return 0;
  markDailyCompletedToday(date);
  return DAILY_BONUS_SCORE;
}

function applyDailyChallenge(game, challenge) {
  if (!challenge) return;
  game.daily = {
    id: challenge.id,
    name: challenge.name,
    desc: challenge.desc,
    dateKey: challenge.dateKey,
  };
  if (challenge.enemySpeedMult) game.run.dailySpeedMult = challenge.enemySpeedMult;
  if (challenge.enemyHpMult) game.run.dailyHpMult = challenge.enemyHpMult;
  if (challenge.towerDamageMult) game.modifiers.globalDamage *= challenge.towerDamageMult;
  if (challenge.rewardMult) game.modifiers.rewardMult *= challenge.rewardMult;
  if (challenge.waveClearGoldMult) game.run.dailyWaveClearMult = challenge.waveClearGoldMult;
  if (challenge.shopCardDiscount) {
    game.run.shopCardDiscount = (game.run.shopCardDiscount || 0) - challenge.shopCardDiscount;
  }
  if (challenge.spawnPoisonDps) {
    game.run.dailySpawnPoison = {
      dps: challenge.spawnPoisonDps,
      time: challenge.spawnPoisonTime || 3.5,
    };
  }
}

exports["DAILY_COMPLETION_KEY_PREFIX"] = DAILY_COMPLETION_KEY_PREFIX;
exports["DAILY_BONUS_SCORE"] = DAILY_BONUS_SCORE;
exports["getDateKey"] = getDateKey;
exports["pickDailyChallenge"] = pickDailyChallenge;
exports["isDailyCompletedToday"] = isDailyCompletedToday;
exports["markDailyCompletedToday"] = markDailyCompletedToday;
exports["qualifiesForDailyCompletion"] = qualifiesForDailyCompletion;
exports["tryApplyDailyCompletionBonus"] = tryApplyDailyCompletionBonus;
exports["applyDailyChallenge"] = applyDailyChallenge;

});
define("logic/event-choices.js", function (exports, require, module) {
function pickRandomEvent(events, rng = Math.random, options = {}) {
  if (!events?.length) return null;
  const { laneTag = null, uniqueBias = 0 } = options;
  let pool = events;
  if (laneTag) {
    const tagged = events.filter((e) => Array.isArray(e.laneTags) && e.laneTags.includes(laneTag));
    if (tagged.length && (uniqueBias <= 0 || rng() < uniqueBias)) {
      pool = tagged;
    }
  }
  return pool[Math.floor(rng() * pool.length)];
}

function applyEventChoiceEffect(choice, helpers) {
  if (!choice) return { title: "Event", text: "Rien ne se passe." };
  const { game } = helpers;

  switch (choice.effect) {
    case "gold": {
      const amount = choice.amount ?? 50;
      game.gold += amount;
      if (choice.hurt) {
        game.lives = Math.max(1, game.lives - choice.hurt);
      }
      helpers.showMessage?.(`Event: +${amount} soleil.`, "normal");
      return {
        title: choice.label || "Event",
        text:
          choice.desc ||
          `+${amount} soleil.${choice.hurt ? ` Tu perds ${choice.hurt} vie(s).` : ""}`,
      };
    }
    case "heal_gold": {
      const gold = choice.gold ?? 35;
      const heal = choice.heal ?? 2;
      game.gold += gold;
      game.lives = Math.min(game.maxLives, game.lives + heal);
      helpers.showMessage?.(`Event: +${gold} soleil, +${heal} vies.`, "normal");
      return {
        title: choice.label || "Event",
        text: `+${gold} soleil et ${heal} vies recuperees.`,
      };
    }
    case "score": {
      const amount = choice.amount ?? 150;
      helpers.gainScore?.(amount);
      helpers.showMessage?.(`Event: +${amount} score.`, "normal");
      return { title: choice.label || "Event", text: choice.desc || `+${amount} score.` };
    }
    case "heal": {
      const amount = choice.amount ?? 4;
      game.lives = Math.min(game.maxLives, game.lives + amount);
      helpers.showMessage?.(`Event: +${amount} vies.`, "normal");
      return { title: choice.label || "Event", text: `Tu recuperes ${amount} vies.` };
    }
    case "random_card": {
      const card = helpers.pickRandomCardForReward?.();
      if (card) {
        helpers.grantCard?.(card);
        helpers.renderDeckList?.();
        return {
          title: choice.label || "Mutation spontanee",
          text: `Carte obtenue : "${card.name}".`,
        };
      }
      game.gold += choice.fallbackGold ?? 40;
      return { title: "Nectar de secours", text: "Aucune carte compatible — soleil de secours." };
    }
    case "random_relic": {
      helpers.grantRandomRelic?.();
      return { title: choice.label || "Relique", text: choice.desc || "Une relique rejoint ta run." };
    }
    default:
      return { title: "Event", text: choice.desc || "Effet inconnu." };
  }
}

exports["pickRandomEvent"] = pickRandomEvent;
exports["applyEventChoiceEffect"] = applyEventChoiceEffect;

});
define("audio/sfx.js", function (exports, require, module) {
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

function createSfxPlayer(playSound) {
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

exports["createSfxPlayer"] = createSfxPlayer;

});
define("ui/onboarding.js", function (exports, require, module) {
const STORAGE_KEY = "gloutonnes_onboarding_v1";

function getBottomInset() {
  const dockHeight = Number.parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--dock-height"),
    10,
  );
  return Number.isFinite(dockHeight) ? Math.max(0, dockHeight) : 0;
}

function placeCardNearTarget(cardEl, target) {
  const margin = 12;
  const gap = 12;
  const rect = target.getBoundingClientRect();
  const cardRect = cardEl.getBoundingClientRect();
  const cardWidth = cardRect.width || 320;
  const cardHeight = cardRect.height || 180;
  const viewportBottom = window.innerHeight - margin - getBottomInset();
  const spaceBelow = viewportBottom - rect.bottom - gap;
  const spaceAbove = rect.top - margin - gap;

  let top = rect.bottom + gap;
  if (spaceBelow < cardHeight && spaceAbove > spaceBelow) {
    top = rect.top - cardHeight - gap;
  }

  const left = Math.max(
    margin,
    Math.min(rect.left, window.innerWidth - cardWidth - margin),
  );

  cardEl.style.position = "fixed";
  cardEl.style.left = `${Math.round(left)}px`;
  cardEl.style.top = `${Math.round(Math.max(margin, Math.min(top, viewportBottom - cardHeight)))}px`;
}

function createOnboardingController({ steps, onStepChange }) {
  let stepIndex = 0;
  let overlayEl = null;
  let cardEl = null;

  function isDone() {
    return localStorage.getItem(STORAGE_KEY) === "done";
  }

  function markDone() {
    localStorage.setItem(STORAGE_KEY, "done");
    hide();
  }

  function ensureDom() {
    if (overlayEl) return;
    overlayEl = document.createElement("div");
    overlayEl.id = "onboarding-overlay";
    overlayEl.className = "onboarding-overlay hidden";
    overlayEl.innerHTML = `
      <div class="onboarding-card">
        <p class="onboarding-kicker">Guide</p>
        <h2 id="onboarding-title"></h2>
        <p id="onboarding-text"></p>
        <div class="onboarding-actions">
          <button type="button" id="onboarding-skip" class="overlay-btn alt">Passer</button>
          <button type="button" id="onboarding-next" class="overlay-btn">Suivant</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlayEl);
    cardEl = overlayEl.querySelector(".onboarding-card");

    overlayEl.querySelector("#onboarding-skip").addEventListener("click", markDone);
    overlayEl.querySelector("#onboarding-next").addEventListener("click", () => {
      if (stepIndex >= steps.length - 1) markDone();
      else showStep(stepIndex + 1);
    });
  }

  function highlightTarget(selector) {
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
      el.classList.remove("onboarding-highlight--positioned");
    });
    if (!selector) return;
    const target = document.querySelector(selector);
    if (!target) return;
    target.classList.add("onboarding-highlight");
    if (getComputedStyle(target).position === "static") {
      target.classList.add("onboarding-highlight--positioned");
    }
    placeCardNearTarget(cardEl, target);
  }

  function showStep(index) {
    ensureDom();
    stepIndex = index;
    const step = steps[index];
    overlayEl.classList.remove("hidden");
    overlayEl.querySelector("#onboarding-title").textContent = step.title;
    overlayEl.querySelector("#onboarding-text").textContent = step.text;
    overlayEl.querySelector("#onboarding-next").textContent = index >= steps.length - 1 ? "C'est parti" : "Suivant";
    highlightTarget(step.target);
    onStepChange?.(step, index);
  }

  function hide() {
    overlayEl?.classList.add("hidden");
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
      el.classList.remove("onboarding-highlight--positioned");
    });
    if (cardEl) {
      cardEl.style.top = "";
      cardEl.style.left = "";
      cardEl.style.position = "";
    }
  }

  function startIfNeeded(screen) {
    if (isDone() || !steps?.length) return;
    const idx = steps.findIndex((s) => s.screen === screen);
    if (idx < 0) return;
    showStep(idx);
  }

  function resetForDev() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { startIfNeeded, showStep, hide, markDone, isDone, resetForDev };
}

exports["createOnboardingController"] = createOnboardingController;

});
define("ui/context-hints.js", function (exports, require, module) {
const STORAGE_KEY = "gloutonnes_context_hints_v1";

function loadSeen() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveSeen(seen) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...seen]));
  } catch {
    /* ignore */
  }
}

function matchesWhen(hint, ctx) {
  const when = hint.when;
  if (!when) return true;
  if (when.spireNumber != null && ctx.spireNumber !== when.spireNumber) return false;
  if (when.floor != null && ctx.floor !== when.floor) return false;
  return true;
}

function getBottomInset() {
  const dockHeight = Number.parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--dock-height"),
    10,
  );
  return Number.isFinite(dockHeight) ? Math.max(0, dockHeight) : 0;
}

function placeCardNearTarget(cardEl, target) {
  const margin = 12;
  const gap = 12;
  const rect = target.getBoundingClientRect();
  const cardRect = cardEl.getBoundingClientRect();
  const cardWidth = cardRect.width || 320;
  const cardHeight = cardRect.height || 180;
  const viewportBottom = window.innerHeight - margin - getBottomInset();
  const spaceBelow = viewportBottom - rect.bottom - gap;
  const spaceAbove = rect.top - margin - gap;

  let top = rect.bottom + gap;
  if (spaceBelow < cardHeight && spaceAbove > spaceBelow) {
    top = rect.top - cardHeight - gap;
  }

  const left = Math.max(
    margin,
    Math.min(rect.left, window.innerWidth - cardWidth - margin),
  );

  cardEl.style.position = "fixed";
  cardEl.style.left = `${Math.round(left)}px`;
  cardEl.style.top = `${Math.round(Math.max(margin, Math.min(top, viewportBottom - cardHeight)))}px`;
}

/**
 * Indices contextuels (1× par mécanique / Spire), indépendants du guide linéaire.
 */
function createContextHintsController({ hints = [], isBlocked = () => false }) {
  let seen = loadSeen();
  let overlayEl = null;
  let cardEl = null;

  function ensureDom() {
    if (overlayEl) return;
    overlayEl = document.createElement("div");
    overlayEl.id = "context-hints-overlay";
    overlayEl.className = "onboarding-overlay context-hints-overlay hidden";
    overlayEl.innerHTML = `
      <div class="onboarding-card context-hints-card">
        <p class="onboarding-kicker" id="context-hints-kicker">Astuce</p>
        <h2 id="context-hints-title"></h2>
        <p id="context-hints-text"></p>
        <div class="onboarding-actions">
          <button type="button" id="context-hints-dismiss" class="overlay-btn">Compris</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlayEl);
    cardEl = overlayEl.querySelector(".context-hints-card");
    overlayEl.querySelector("#context-hints-dismiss").addEventListener("click", hide);
  }

  function clearHighlight() {
    document.querySelectorAll(".onboarding-highlight").forEach((el) => {
      el.classList.remove("onboarding-highlight");
    });
    if (cardEl) {
      cardEl.style.top = "";
      cardEl.style.left = "";
      cardEl.style.position = "";
    }
  }

  function highlightTarget(selector) {
    clearHighlight();
    if (!selector) return;
    const target = document.querySelector(selector);
    if (!target) return;
    target.classList.add("onboarding-highlight");
    placeCardNearTarget(cardEl, target);
  }

  function hide() {
    overlayEl?.classList.add("hidden");
    clearHighlight();
  }

  function show(hint, ctx = {}) {
    if (isBlocked()) return false;
    ensureDom();
    overlayEl.classList.remove("hidden");
    const kicker = hint.kicker || "Première fois";
    overlayEl.querySelector("#context-hints-kicker").textContent = kicker;
    overlayEl.querySelector("#context-hints-title").textContent =
      ctx.titleOverride || hint.title || "Astuce";
    overlayEl.querySelector("#context-hints-text").textContent =
      ctx.textOverride || hint.text || "";
    highlightTarget(hint.target);
    return true;
  }

  function tryShow(hintId, ctx = {}) {
    if (!hintId || seen.has(hintId)) return false;
    const hint = hints.find((h) => h.id === hintId);
    if (!hint || !matchesWhen(hint, ctx)) return false;
    if (!show(hint, ctx)) return false;
    seen.add(hintId);
    saveSeen(seen);
    return true;
  }

  function resetForDev() {
    seen = new Set();
    localStorage.removeItem(STORAGE_KEY);
    hide();
  }

  function isSeen(hintId) {
    return seen.has(hintId);
  }

  return { tryShow, hide, resetForDev, isSeen };
}

exports["createContextHintsController"] = createContextHintsController;

});
define("ui/tooltips.js", function (exports, require, module) {
/** Tooltips contextuels (deck, noeuds, tours). */

let deckFloatTooltipEl = null;

function getDeckFloatTooltipEl() {
  if (!deckFloatTooltipEl) {
    deckFloatTooltipEl = document.createElement("div");
    deckFloatTooltipEl.id = "deck-float-tooltip";
    deckFloatTooltipEl.className = "deck-float-tooltip hidden";
    deckFloatTooltipEl.setAttribute("role", "tooltip");
    document.body.appendChild(deckFloatTooltipEl);
  }
  return deckFloatTooltipEl;
}

function hideDeckFloatTooltip() {
  deckFloatTooltipEl?.classList.add("hidden");
}

function showDeckFloatTooltip(text, anchor) {
  const tip = getDeckFloatTooltipEl();
  tip.textContent = text;
  tip.classList.remove("hidden");
  tip.style.left = "-9999px";
  tip.style.top = "0";
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();

  let left = r.left - tw - 12;
  let top = r.top + (r.height - th) / 2;

  if (left < 8) {
    left = Math.min(r.right, window.innerWidth - 8) - tw;
    top = r.top - th - 10;
  }
  if (top < 8) top = r.bottom + 10;

  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  top = Math.max(8, Math.min(top, window.innerHeight - th - 8));

  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

/** Panneau run : tooltips fixes (evite le clipping du scroll). */
function bindFloatingDeckTooltips(containerEl) {
  if (!containerEl?.closest(".run-panel")) return;
  if (containerEl.dataset.floatTipBound === "1") return;
  containerEl.dataset.floatTipBound = "1";

  containerEl.addEventListener("pointerover", (event) => {
    const chip = event.target.closest(".deck-chip[data-tooltip]");
    if (!chip || !containerEl.contains(chip)) return;
    showDeckFloatTooltip(chip.dataset.tooltip, chip);
  });

  containerEl.addEventListener("pointerout", (event) => {
    const chip = event.target.closest(".deck-chip[data-tooltip]");
    if (!chip) return;
    const next = event.relatedTarget;
    if (next && chip.contains(next)) return;
    hideDeckFloatTooltip();
  });

  containerEl.addEventListener("scroll", hideDeckFloatTooltip, { passive: true });
}

function enhanceDeckTooltips(deckListEl, cardLibrary, formatDesc) {
  if (!deckListEl) return;
  deckListEl.querySelectorAll(".deck-chip").forEach((chip) => {
    const card = cardLibrary.find((c) => c.id === chip.dataset.cardId);
    if (!card) return;
    const tag = card.towerCard ? `Synergie tour · ${card.rarity}` : card.rarity;
    const text = formatDesc ? formatDesc(card) : card.desc;
    chip.dataset.tooltip = `${tag} — ${text}`;
  });
  bindFloatingDeckTooltips(deckListEl);
}

function getNodeTooltip(nodeType, tooltipsConfig) {
  return tooltipsConfig?.nodes?.[nodeType] || "";
}

function getPassiveTooltip(passive, tooltipsConfig) {
  if (!passive) return "";
  return tooltipsConfig?.tags?.[passive] || "";
}

function bindSmartTowerTooltips(towerButtons, towerTypes, tooltipsConfig) {
  towerButtons.forEach((btn) => {
    const type = towerTypes[btn.dataset.tower];
    if (!type) return;
    const passiveTip = type.passive ? getPassiveTooltip(type.passive, tooltipsConfig) : "";
    const tip = passiveTip
      ? `${type.name} (${type.cost}☀) — ${type.desc} · ${passiveTip}`
      : `${type.name} (${type.cost}☀) — ${type.desc}`;
    btn.setAttribute("data-tooltip", tip);
    btn.classList.add("has-tooltip");
  });
}

let towerDockFloatTooltipEl = null;

function getTowerDockFloatTooltipEl() {
  if (!towerDockFloatTooltipEl) {
    towerDockFloatTooltipEl = document.createElement("div");
    towerDockFloatTooltipEl.id = "tower-dock-float-tooltip";
    towerDockFloatTooltipEl.className = "tower-dock-float-tooltip hidden";
    towerDockFloatTooltipEl.setAttribute("role", "tooltip");
    document.body.appendChild(towerDockFloatTooltipEl);
  }
  return towerDockFloatTooltipEl;
}

function hideTowerDockFloatTooltip() {
  towerDockFloatTooltipEl?.classList.add("hidden");
}

function placeTowerDockTooltipBeside(tip, anchor, side, margin, dockTop, dockBottom) {
  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();
  const left = side === "right" ? r.right + margin : r.left - tw - margin;
  const top = Math.max(
    dockTop + margin,
    Math.min(r.top + (r.height - th) / 2, dockBottom - th - margin),
  );
  return { left, top, placement: side };
}

function showTowerDockFloatTooltip(text, anchor) {
  const tip = getTowerDockFloatTooltipEl();
  tip.textContent = text;
  tip.classList.remove("hidden");
  tip.style.left = "-9999px";
  tip.style.top = "0";

  const tw = tip.offsetWidth;
  const th = tip.offsetHeight;
  const r = anchor.getBoundingClientRect();
  const dock = anchor.closest(".combat-dock");
  const dockRect = dock?.getBoundingClientRect();
  const dockTop = dockRect?.top ?? r.top;
  const dockBottom = dockRect?.bottom ?? r.bottom;
  const margin = 8;
  const canFitRight = r.right + margin + tw <= window.innerWidth - margin;
  const canFitLeft = r.left - margin - tw >= margin;

  let left = r.left + (r.width - tw) / 2;
  let top = r.top - th - margin;
  let placement = "above";

  const towerRow = anchor.closest(".action-towers");
  if (towerRow) {
    const buttons = [...towerRow.querySelectorAll(".tower-btn[data-tooltip]")];
    const idx = buttons.indexOf(anchor);
    const sideOrder = idx <= 0
      ? ["right", "left"]
      : idx >= buttons.length - 1
        ? ["left", "right"]
        : ["right", "left"];

    for (const side of sideOrder) {
      if (side === "right" && canFitRight) {
        ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "right", margin, dockTop, dockBottom));
        break;
      }
      if (side === "left" && canFitLeft) {
        ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "left", margin, dockTop, dockBottom));
        break;
      }
    }
  } else if (canFitRight) {
    ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "right", margin, dockTop, dockBottom));
  } else if (canFitLeft) {
    ({ left, top, placement } = placeTowerDockTooltipBeside(tip, anchor, "left", margin, dockTop, dockBottom));
  } else if (top < margin) {
    top = Math.max(margin, dockTop + margin);
    placement = "above-clamped";
  }

  if (top < dockTop) {
    top = Math.max(dockTop + margin, Math.min(r.top + 4, dockBottom - th - margin));
    left = r.left + (r.width - tw) / 2;
    placement = "in-dock";
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
  top = Math.max(margin, Math.min(top, window.innerHeight - th - margin));

  tip.dataset.placement = placement;
  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

/** Infobulle flottante (hors flux) pour les tours du dock — ne déforme pas la carte. */
function bindTowerDockHints(containerEl) {
  if (!containerEl) return;
  if (containerEl.dataset.dockHintBound === "1") return;
  containerEl.dataset.dockHintBound = "1";

  containerEl.addEventListener("pointerover", (event) => {
    const btn = event.target.closest(".tower-btn[data-tooltip]");
    if (!btn || !containerEl.contains(btn)) return;
    showTowerDockFloatTooltip(btn.dataset.tooltip, btn);
  });

  containerEl.addEventListener("pointerout", (event) => {
    const btn = event.target.closest(".tower-btn[data-tooltip]");
    if (!btn) return;
    const next = event.relatedTarget;
    if (next && btn.contains(next)) return;
    hideTowerDockFloatTooltip();
  });

  containerEl.addEventListener("scroll", hideTowerDockFloatTooltip, { passive: true });
  window.addEventListener("resize", hideTowerDockFloatTooltip, { passive: true });
}

exports["hideDeckFloatTooltip"] = hideDeckFloatTooltip;
exports["bindFloatingDeckTooltips"] = bindFloatingDeckTooltips;
exports["enhanceDeckTooltips"] = enhanceDeckTooltips;
exports["getNodeTooltip"] = getNodeTooltip;
exports["getPassiveTooltip"] = getPassiveTooltip;
exports["bindSmartTowerTooltips"] = bindSmartTowerTooltips;
exports["hideTowerDockFloatTooltip"] = hideTowerDockFloatTooltip;
exports["bindTowerDockHints"] = bindTowerDockHints;

});
define("render/title-screen.js", function (exports, require, module) {
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

function createTitleAnimState() {
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

function updateTitleScreenAnim(titleAnim, dt) {
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

function drawTitleScreenFrame(ctx, titleAnim) {
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

exports["createTitleAnimState"] = createTitleAnimState;
exports["updateTitleScreenAnim"] = updateTitleScreenAnim;
exports["drawTitleScreenFrame"] = drawTitleScreenFrame;

});
define("game.js", function (exports, require, module) {
const { FLOOR_SCALING, CARD_RARITY_WEIGHTS, CRIT_DAMAGE_MULT, BASE_SPIRE_STARTING_GOLD, SPIRE_SURPLUS_GOLD_SCORE_RATE, COLLECTOR_BONUSES, BELLE_SLOW_CARD, SKILLS, SKILL_USES_PER_WAVE, EVENT_GOLD } = require("config/balance.js");
const { MAX_SPIRES, formatSpireThreatLine } = require("config/campaign.js");
const { mergeBiomeWithSpirePressure, settleSpireGoldForNextSpire } = require("logic/economy.js");
const { pickBiomeForFloor } = require("logic/biomes.js");
const { computeEncounterStats, generateEncounterQueueByFloor, pickEncounterEnemy } = require("logic/encounter.js");
const { computeRestHeal, getNodeResultAdvanceAction } = require("logic/game-rules.js");
const { canActivateSkill, formatSkillChargeLabel, resetSkillsForNewWave, tickSkillTimers } = require("logic/skills.js");
const { applyCollectorMapSnareToEnemy, applySlowToEnemy } = require("logic/hunter-slow.js");
const { renderBoardFrame, updateHudView } = require("render/frame.js");
const { drawUltimateVfx, triggerUltimateVfx, updateUltimateVfx } = require("render/ultimate-vfx.js");
const { drawPlacementRangePreview, drawTowerSelectionRange } = require("render/range-previews.js");
const { drawEnemySprite } = require("render/enemy.js");
const { drawProjectileSprites } = require("render/projectiles.js");
const { drawWeatherOverlay, updateWeatherState } = require("render/weather.js");
const { drawCombatFx, updateCombatFx } = require("render/fx.js");
const { drawTowerSprite } = require("render/tower.js");
const { drawBoardBackdropStyle, drawBoardPads, drawBoardPaths } = require("render/board.js");
const { drawFireflyDecor, drawLightingOverlayDecor, drawSetDressingDecor } = require("render/decor.js");
const { drawTowerLevelAura, drawTowerUpgradeVfx, triggerTowerUpgradeVfx, updateTowerUpgradeVfx } = require("render/tower-upgrade-vfx.js");
const { bindUiEvents } = require("ui/bindings.js");
const { initMobileShell, updateRunDrawerBadge } = require("ui/mobile-shell.js");
const { initViewport, updateViewport, isTouchLayout, isPhoneViewport, isTabletViewport } = require("ui/viewport.js");
const { initOrientationLock } = require("ui/orientation-lock.js");
const { collapseHudForCombat, initHudCollapse } = require("ui/hud-collapse.js");
const { createRunMusicController } = require("audio/run-music.js");
const { loadGameContent } = require("content/loader.js");
const { fetchLeaderboard, submitLeaderboardEntry, LEADERBOARD_MAX } = require("logic/leaderboard-api.js");
const { generateSpireMap, getLaneAffinityHint, getLaneEncounterHpMult, getLaneEventLaneTag, getLaneEventUniqueBias, getMapLanePreview, laneGuaranteesWaveModifier } = require("logic/map-generation.js");
const { applyTormentEncounterPenalties, applyTormentMaxLivesPenalty, extendQueueForTorment, getTormentExtraLeakLives, getTormentRestHealMult, getTormentShopPriceMult } = require("logic/ascension-mechanics.js");
const { buildVictoryScreenCopy, configureRunMode, formatRunModeLine, getAscensionTorment, getRunRng, hasCampaignVictory, loadAscensionLevel, markAscensionBeaten, markCampaignVictory, RUN_MODE_ASCENSION, RUN_MODE_STANDARD, saveAscensionLevel, saveRunModePreference } = require("logic/run-modes.js");
const { createSeededRng, generateShareableSeed } = require("logic/seeded-rng.js");
const { clearRunSave, formatRunSaveSummary, hasRunSave, loadRunState, saveRunState, serializeRunState, shouldPersistRunScreen } = require("logic/run-save.js");
const { initShared, shared } = require("game/shared.js");
const { MAX_FLOORS } = require("game/state.js");
const mapFlow = require("game/map-flow.js");
const { defeatEnemyLifecycle } = require("game/enemy-lifecycle.js");
const { updateWaveSpawningState } = require("game/wave-spawning.js");
const { finishWaveIfReady } = require("game/wave-completion.js");
const { updateProjectileCombat } = require("game/projectile-combat.js");
const { updateTowerCombat } = require("game/tower-combat.js");
const { updateEnemyCombat } = require("game/enemy-combat.js");
const { renderLeaderboardPanel } = require("game/leaderboard-ui.js");
const { applyRunMutation, getMutationShopDiscount } = require("logic/run-mutations.js");
const { pickWaveModifier, scaleEncounterQueue, applyWaveModifierToEncounter } = require("logic/wave-modifiers.js");
const { pickNodeObjective, shouldRollObjective } = require("logic/node-objectives.js");
const { beginWaveStats, recordTowerDamage, recordWaveLeak, formatWaveReportHtml } = require("logic/wave-report.js");
const { beginRunStats, recordRunLeak, recordRunTowerDamage, touchRunProgress, finalizeRunStats, formatRunEndReportHtml } = require("logic/run-stats.js");
const { createEnemyFromType } = require("logic/enemy-model.js");
const { DEFAULT_BESTIARY_CONFIG, initRunBestiary, renderBestiaryListHtml, loadBestiaryProgress } = require("logic/bestiary.js");
const { canUseCollectorUltimate, resetCollectorUltimateForSpire, activateCollectorUltimate } = require("logic/collector-ultimate.js");
const { pickBossTempCardPair, applyBossTempCardEffect, applyBossTempWaveToEnemy, getBossTempDamageMult, getBossTempTowerMods, clearBossTempWave } = require("logic/boss-temp-cards.js");
const { computeDeckSynergyState } = require("logic/deck-synergies.js");
const { canAddCardToDeck, isCardAtMaxStack } = require("logic/cards.js");
const { applyTowerUpgrade, canUpgradeTower, createTowerFromType, getTowerSellRefund, getUpgradeCost, needsSellConfirmation } = require("logic/tower-model.js");
const { getEffectiveTowerRange, getTowerTypePreviewRange: getTowerTypePreviewRangeModel, getTowerUpgradePreviewRange: getTowerUpgradePreviewRangeModel } = require("logic/tower-range.js");
const { computeTowerEffectiveStats, getCreamsicleAuraRange, getTowerArmorShredDuration, getTowerArmorShredMult, getTowerBurnDps, getTowerPassiveDescription, getTowerTooltipFingerprint, getTowerPierceCount, getTowerPoisonDps, getTowerSlowPotency, getTowerSplashRadius, getTowerFireRateRatio, scaleTowerPassiveDuration } = require("logic/tower-stats.js");
const { pickDailyChallenge, applyDailyChallenge, DAILY_BONUS_SCORE, isDailyCompletedToday, tryApplyDailyCompletionBonus } = require("logic/daily-challenge.js");
const { applyHitShieldDamage } = require("logic/enemy-abilities.js");
const { pickRandomEvent, applyEventChoiceEffect } = require("logic/event-choices.js");
const { createSfxPlayer } = require("audio/sfx.js");
const { updateBossPhases, computeDamageToEnemy, extendEncounterQueue, getEncounterMechanics } = require("logic/encounter-mechanics.js");
const { createOnboardingController } = require("ui/onboarding.js");
const { createContextHintsController } = require("ui/context-hints.js");
const { enhanceDeckTooltips, bindFloatingDeckTooltips, bindSmartTowerTooltips, bindTowerDockHints, getNodeTooltip } = require("ui/tooltips.js");
const { createTitleAnimState, updateTitleScreenAnim, drawTitleScreenFrame } = require("render/title-screen.js");
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const livesEl = document.getElementById("lives");
const goldEl = document.getElementById("gold");
const waveEl = document.getElementById("wave");
const enemyCountEl = document.getElementById("enemy-count");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const messageEl = document.getElementById("message");
const deckListEl = document.getElementById("deck-list");
const relicListEl = document.getElementById("relic-list");
const collectorPanel = document.getElementById("collector-panel");
const collectorNameEl = document.getElementById("collector-name");
const collectorPowerEl = document.getElementById("collector-power");
const collectorUltimateBlockEl = document.getElementById("collector-ultimate-block");
const collectorUltimateNameEl = document.getElementById("collector-ultimate-name");
const collectorUltimateDescEl = document.getElementById("collector-ultimate-desc");
const skillUltimateLabelEl = document.getElementById("skill-ultimate-label");

const startWaveBtn = document.getElementById("start-wave");
const speedBtn = document.getElementById("speed-toggle");
const pauseBtn = document.getElementById("pause-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const audioBtn = document.getElementById("audio-btn");
const audioSettingsBtn = document.getElementById("audio-settings-btn");
const audioSettingsPopover = document.getElementById("audio-settings-popover");
const musicVolumeInput = document.getElementById("music-volume");
const sfxVolumeInput = document.getElementById("sfx-volume");

const skillBoostBtn = document.getElementById("skill-boost");
const skillSnareBtn = document.getElementById("skill-snare");
const skillUltimateBtn = document.getElementById("skill-ultimate");
const skillUltimateCdEl = document.getElementById("skill-ultimate-cd");
const mutationOverlay = document.getElementById("mutation-overlay");
const mutationChoicesEl = document.getElementById("mutation-choices");
const crossroadsOverlay = document.getElementById("crossroads-overlay");
const crossroadsChoicesEl = document.getElementById("crossroads-choices");
const waveSummaryOverlay = document.getElementById("wave-summary-overlay");
const waveSummaryBodyEl = document.getElementById("wave-summary-body");
const waveSummaryContinueBtn = document.getElementById("wave-summary-continue");
const bossCardOverlay = document.getElementById("boss-card-overlay");
const bossCardChoicesEl = document.getElementById("boss-card-choices");
const deckSynergyListEl = document.getElementById("synergy-list");
const eventOverlay = document.getElementById("event-overlay");
const eventOverlayTitle = document.getElementById("event-overlay-title");
const eventOverlayDesc = document.getElementById("event-overlay-desc");
const eventChoicesEl = document.getElementById("event-choices");
const dailyBannerEl = document.getElementById("daily-challenge-banner");
const titleDailyPanel = document.getElementById("title-daily-panel");
const titleDailyNameEl = document.getElementById("title-daily-name");
const titleDailyDescEl = document.getElementById("title-daily-desc");
const titleDailyRewardEl = document.getElementById("title-daily-reward");
const titleDailyStatusEl = document.getElementById("title-daily-status");
const sellConfirmOverlay = document.getElementById("sell-confirm-overlay");
const sellConfirmTextEl = document.getElementById("sell-confirm-text");
const sellConfirmOkBtn = document.getElementById("sell-confirm-ok");
const sellConfirmCancelBtn = document.getElementById("sell-confirm-cancel");
const nodeRetryOverlay = document.getElementById("node-retry-overlay");
const nodeRetryAcceptBtn = document.getElementById("node-retry-accept");
const nodeRetryDeclineBtn = document.getElementById("node-retry-decline");
const skillBoostCdEl = document.getElementById("skill-boost-cd");
const skillSnareCdEl = document.getElementById("skill-snare-cd");

const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayText = document.getElementById("overlay-text");
const overlayButton = document.getElementById("overlay-button");
const overlayAscensionBtn = document.getElementById("overlay-ascension-btn");
const overlayLeaderboardBtn = document.getElementById("overlay-leaderboard-btn");
const overlayStatsEl = document.getElementById("overlay-stats");
const overlayCard = document.getElementById("overlay-card");

const draftOverlay = document.getElementById("draft-overlay");
const draftChoicesEl = document.getElementById("draft-choices");
const collectorOverlay = document.getElementById("collector-overlay");
const collectorChoicesEl = document.getElementById("collector-choices");

const mapOverlay = document.getElementById("map-overlay");
const mapFloorLabel = document.getElementById("map-floor-label");
const mapRouteHintEl = document.getElementById("map-route-hint");
const bestiaryListEl = document.getElementById("bestiary-list");
const mapChoicesEl = document.getElementById("map-choices");
const shopOverlay = document.getElementById("shop-overlay");
const shopGoldLabel = document.getElementById("shop-gold-label");
const shopChoicesEl = document.getElementById("shop-choices");
const shopSkipBtn = document.getElementById("shop-skip");
const towerDraftOverlayEl = document.getElementById("tower-draft-overlay");
const towerDraftGridEl = document.getElementById("tower-draft-grid");
const towerDraftConfirmBtn = document.getElementById("tower-draft-confirm");
const towerDraftCountEl = document.getElementById("tower-draft-count");
const leaderboardOverlay = document.getElementById("leaderboard-overlay");
const leaderboardTableEl = document.getElementById("leaderboard-table");
const leaderboardCloseBtn = document.getElementById("leaderboard-close");
const leaderboardBtn = document.getElementById("leaderboard-btn");
const nodeResultOverlay = document.getElementById("node-result-overlay");
const nodeResultTitle = document.getElementById("node-result-title");
const nodeResultText = document.getElementById("node-result-text");
const nodeResultContinueBtn = document.getElementById("node-result-continue");

const runDrawerEl = document.getElementById("run-drawer");
const runDrawerFabEl = document.getElementById("run-drawer-fab");
const runDrawerScrimEl = document.getElementById("run-drawer-scrim");
const runDrawerCloseEl = document.getElementById("run-drawer-close");
const runDrawerBadgeEl = document.getElementById("run-drawer-badge");
const hudStatsEl = document.getElementById("hud-stats");
const statsMoreBtnEl = document.getElementById("stats-more-btn");
const hudCollapseBtnEl = document.getElementById("hud-collapse-btn");

const towerFloatHud = document.getElementById("tower-float-hud");
const towerFloatPanel = document.getElementById("tower-float-panel");
const towerFloatTooltip = document.getElementById("tower-float-tooltip");
const upgradeBtn = document.getElementById("upgrade-btn");
const sellBtn = document.getElementById("sell-btn");
const actionTowersEl = document.getElementById("action-towers");
const canvasZoneEl = document.querySelector(".canvas-zone");
const towerButtons = [...document.querySelectorAll(".tower-btn")];
const titleInputWrap  = document.getElementById("title-input-wrap");
const playerNameInput = document.getElementById("player-name-input");
const titlePlayBtn    = document.getElementById("title-play-btn");
const titleVersionEl = document.getElementById("title-version");
const titleResumePanel = document.getElementById("title-resume-panel");
const titleResumeSummary = document.getElementById("title-resume-summary");
const titleResumeBtn = document.getElementById("title-resume-btn");
const combatObjectiveBanner = document.getElementById("combat-objective-banner");
const cancelPlacementBtn = document.getElementById("cancel-placement-btn");
const mobileToastEl = document.getElementById("mobile-toast");
let mobileToastTimer = null;

const BEST_SCORE_KEY = "plantes_td_best_score_v5";
const PLAYER_NAME_KEY = "gloutonnes_player_name";
const SPEED_PREF_KEY = "gloutonnes_speed_pref";
const AUDIO_ENABLED_KEY = "gloutonnes_audio_enabled";
const MUSIC_VOLUME_KEY = "gloutonnes_music_vol";
const SFX_VOLUME_KEY = "gloutonnes_sfx_vol";

/** Classement local conserve dans le navigateur. */
let leaderboardEntries = [];
let leaderboardDailyEntries = [];
let leaderboardDailyKey = null;
let leaderboardLoadState = "idle";
let leaderboardErrorCode = null;
let leaderboardErrorDetail = null;
let pendingSellTowerId = null;

/** ?spire=5 ou ?devSpire=5 — saute a cette Spire apres le debut de run (test layout). */
function parseDevSpireFromUrl() {
  const params = new URLSearchParams(location.search);
  const raw = params.get("spire") ?? params.get("devSpire");
  if (!raw) return null;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1 || n > MAX_SPIRES) return null;
  return Math.floor(n);
}

let _devJumpSpire = parseDevSpireFromUrl();

// ── Layouts des Spires (chemin + emplacements) ────────────────────────────
const SPIRE_LAYOUTS = [
  {
    name: "La Serre",
    desc: "Le terrain familier de la serre. Maitrise les bases.",
    path: [
      { x: 0,   y: 88  }, { x: 214, y: 88  }, { x: 214, y: 220 },
      { x: 650, y: 220 }, { x: 650, y: 358 }, { x: 228, y: 358 },
      { x: 228, y: 500 }, { x: 960, y: 500 },
    ],
    pads: [
      { x: 117, y: 196 }, { x: 330, y: 112 }, { x: 494, y: 294 },
      { x: 760, y: 164 }, { x: 756, y: 438 }, { x: 517, y: 456 },
      { x: 338, y: 279 }, { x: 122, y: 432 }, { x: 609, y: 95  },
      { x: 598, y: 438 },
    ],
  },
  {
    name: "La Ravine",
    desc: "Deux entrees (nord et sud) avec couloirs plus espaces, puis convergence vers la sortie.",
    paths: [
      [
        { x: 0, y: 55 }, { x: 200, y: 55 }, { x: 200, y: 165 },
        { x: 430, y: 165 }, { x: 650, y: 165 }, { x: 650, y: 285 },
        { x: 880, y: 285 }, { x: 960, y: 285 },
      ],
      [
        { x: 0, y: 485 }, { x: 200, y: 485 }, { x: 200, y: 375 },
        { x: 430, y: 375 }, { x: 650, y: 375 }, { x: 650, y: 285 },
        { x: 880, y: 285 }, { x: 960, y: 285 },
      ],
    ],
    pads: [
      { x: 105, y: 120 }, { x: 105, y: 420 }, { x: 310, y: 270 },
      { x: 520, y: 120 }, { x: 520, y: 420 }, { x: 520, y: 270 },
      { x: 740, y: 200 }, { x: 740, y: 370 }, { x: 785, y: 220 },
      { x: 380, y: 270 },
    ],
  },
  {
    name: "Le Maelstrom",
    desc: "Trois entrees independantes : un couloir en U par ligne d'attaque.",
    paths: [
      [
        { x: 0, y: 90 }, { x: 280, y: 90 }, { x: 280, y: 420 },
        { x: 560, y: 420 }, { x: 560, y: 90 }, { x: 960, y: 90 },
      ],
      [
        { x: 0, y: 270 }, { x: 280, y: 270 }, { x: 280, y: 450 },
        { x: 560, y: 450 }, { x: 560, y: 270 }, { x: 960, y: 270 },
      ],
      [
        { x: 0, y: 450 }, { x: 280, y: 450 }, { x: 280, y: 120 },
        { x: 560, y: 120 }, { x: 560, y: 450 }, { x: 960, y: 450 },
      ],
    ],
    pads: [
      { x: 200, y: 90 }, { x: 200, y: 255 }, { x: 200, y: 420 },
      { x: 480, y: 90 }, { x: 480, y: 255 }, { x: 480, y: 420 },
      { x: 700, y: 90 }, { x: 700, y: 270 }, { x: 700, y: 450 },
      { x: 820, y: 270 },
    ],
  },
  {
    name: "Les Quatre Vents",
    desc: "Quatre entrees : pression constante sur toute la largeur de la serre.",
    paths: [
      [
        { x: 0, y: 58 }, { x: 170, y: 58 }, { x: 300, y: 175 },
        { x: 500, y: 200 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 175 }, { x: 170, y: 175 }, { x: 300, y: 255 },
        { x: 500, y: 265 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 355 }, { x: 170, y: 355 }, { x: 300, y: 310 },
        { x: 500, y: 280 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
      [
        { x: 0, y: 482 }, { x: 170, y: 482 }, { x: 300, y: 400 },
        { x: 500, y: 320 }, { x: 700, y: 265 }, { x: 960, y: 265 },
      ],
    ],
    pads: [
      { x: 95, y: 115 }, { x: 95, y: 400 }, { x: 235, y: 128 },
      { x: 400, y: 130 }, { x: 400, y: 390 }, { x: 400, y: 265 },
      { x: 600, y: 200 }, { x: 600, y: 330 }, { x: 780, y: 265 },
      { x: 640, y: 198 }, { x: 200, y: 265 }, { x: 860, y: 200 },
    ],
  },
  {
    name: "Le Pentacle",
    desc: "Cinq couloirs en dents de scie — chaque voie serpente et sort a un niveau different.",
    paths: [
      [
        { x: 0, y: 52 }, { x: 155, y: 52 }, { x: 155, y: 128 },
        { x: 355, y: 128 }, { x: 355, y: 52 }, { x: 555, y: 52 },
        { x: 555, y: 105 }, { x: 775, y: 105 }, { x: 960, y: 88 },
      ],
      [
        { x: 0, y: 168 }, { x: 205, y: 168 }, { x: 205, y: 248 },
        { x: 405, y: 248 }, { x: 405, y: 168 }, { x: 605, y: 168 },
        { x: 605, y: 225 }, { x: 825, y: 225 }, { x: 960, y: 178 },
      ],
      [
        { x: 0, y: 268 }, { x: 245, y: 268 }, { x: 245, y: 405 },
        { x: 485, y: 405 }, { x: 485, y: 155 }, { x: 725, y: 155 },
        { x: 725, y: 268 }, { x: 960, y: 268 },
      ],
      [
        { x: 0, y: 368 }, { x: 205, y: 368 }, { x: 205, y: 288 },
        { x: 405, y: 288 }, { x: 405, y: 368 }, { x: 605, y: 368 },
        { x: 605, y: 312 }, { x: 825, y: 312 }, { x: 960, y: 358 },
      ],
      [
        { x: 0, y: 488 }, { x: 155, y: 488 }, { x: 155, y: 412 },
        { x: 355, y: 412 }, { x: 355, y: 488 }, { x: 555, y: 488 },
        { x: 555, y: 435 }, { x: 775, y: 435 }, { x: 960, y: 468 },
      ],
    ],
    pads: [
      { x: 88, y: 90 }, { x: 258, y: 90 }, { x: 452, y: 62 },
      { x: 655, y: 78 }, { x: 860, y: 50 },
      { x: 108, y: 208 }, { x: 308, y: 208 }, { x: 506, y: 254 },
      { x: 750, y: 506 },
      { x: 320, y: 326 }, { x: 330, y: 314 }, { x: 704, y: 368 },
      { x: 68, y: 428 }, { x: 254, y: 506 }, { x: 506, y: 326 },
      { x: 655, y: 458 }, { x: 878, y: 418 },
    ],
  },
];

// ── Chemins et emplacements actifs (mutables selon la Spire) ──────────────
let paths = [SPIRE_LAYOUTS[0].path.map((p) => ({ ...p }))];
let path = paths[0];
let pads = SPIRE_LAYOUTS[0].pads.map((p) => ({ ...p, occupiedBy: null }));

function getLayoutRoutes(layout) {
  if (layout.paths?.length) return layout.paths;
  return [layout.path];
}

/** Budget de départ par Spire = base × nombre de voies ennemies */
function getStartingGoldForSpire(spireNumber) {
  const layout = SPIRE_LAYOUTS[Math.min(spireNumber - 1, SPIRE_LAYOUTS.length - 1)];
  const routeCount = getLayoutRoutes(layout).length;
  return BASE_SPIRE_STARTING_GOLD * routeCount;
}

function applySpireLayout(layout) {
  paths = getLayoutRoutes(layout).map((route) => route.map((p) => ({ ...p })));
  path = paths[0];
  pads.length = 0;
  layout.pads.forEach((p) => pads.push({ ...p, occupiedBy: null }));
  game.spawnPathInc = 0;
}

function enemyRoute(enemy) {
  return paths[enemy.pathId ?? 0] ?? paths[0];
}

let towerTypes = {};
let enemyTypes = {};
let CARD_LIBRARY = [];
let RELIC_LIBRARY = [];
let BIOMES = [];
let COLLECTOR_LIBRARY = [];
let ENCOUNTER_CONFIG = { elite: {}, boss: {} };
let ONBOARDING_CONFIG = { steps: [] };
let TOOLTIPS_CONFIG = {};
let MAP_NODE_POOL = [];
let MAP_LANE_CONFIG = {};
let MUTATION_LIBRARY = [];
let WAVE_MODIFIER_LIBRARY = [];
let NODE_OBJECTIVE_LIBRARY = [];
let BOSS_TEMP_CARD_LIBRARY = [];
let DECK_SYNERGY_CONFIG = { families: [] };
let DAILY_CHALLENGES = [];
let EVENT_LIBRARY = [];
let META_CONFIG = {};
let BESTIARY_CONFIG = DEFAULT_BESTIARY_CONFIG;
let onboarding = null;
let contextHints = null;
let _afterWaveSummaryCallback = null;

const game = {
  lives: 20,
  maxLives: 20,
  gold: 150,
  score: 0,
  bestScore: Number(localStorage.getItem(BEST_SCORE_KEY) || 0),
  selectedTowerType: null,
  selectedTowerId: null,
  placementHoverPad: null,
  speedMultiplier: 1,
  waveActive: false,
  waveCount: 0,
  animT: 0,
  spawnTimer: 0,
  spawnQueue: [],
  enemies: [],
  enemyById: new Map(),
  towers: [],
  projectiles: [],
  particles: [],
  floatTexts: [],
  rainDrops: [],
  decor: {
    leaves: [],
    stones: [],
    mushrooms: [],
    fireflies: [],
  },
  biome: null,
  fogOffset: 0,
  enemyIdInc: 1,
  spawnPathInc: 0,
  towerIdInc: 1,
  lastTs: 0,
  screen: "menu",
  collector: {
    selectedId: null,
  },
  towerDeck: [],
  draft: { activeChoices: [] },
  shop: { offers: [] },
  deck: { picked: [] },
  relics: { picked: [] },
  spire: {
    map: [],
    floor: 0,
    lane: 1,
    crossroadsOfferCardId: null,
    lanesMerged: false,
    pathTrail: [],
    currentNodeType: null,
    pendingAdvanceAfterDraft: false,
    spireNumber: 1,
    pendingSpireTransition: false,
  },
  run: {
    mutationId: null,
    shopCardDiscount: 0,
    encounterSpeedMult: 1,
    encounterHpMult: 1,
    dailySpeedMult: 1,
    dailyHpMult: 1,
    dailyWaveClearMult: 1,
    nodeRetryAvailable: true,
  },
  deckSynergy: { active: [], mods: {} },
  daily: null,
  waveModifier: null,
  nodeObjective: null,
  waveStats: null,
  wavePaused: false,
  collectorUltimate: { usedThisSpire: false },
  bossCardPhaseDone: false,
  bossTempWave: null,
  ultimateVfxList: [],
  towerUpgradeVfxList: [],
  synergyFlash: null,
  pendingEvent: null,
  modifiers: {},
  encounter: {
    hpMult: 1,
    speedMult: 1,
    rewardMult: 1,
    countBonus: 0,
    towerRangeBonus: 0,
    towerFireRateMult: 1,
  },
  skills: {
    boost: {
      cooldown: SKILLS.boost.cooldown,
      timer: 0,
      duration: SKILLS.boost.duration,
      active: 0,
      usesMax: SKILL_USES_PER_WAVE,
      usesLeft: SKILL_USES_PER_WAVE,
    },
    snare: {
      cooldown: SKILLS.snare.cooldown,
      timer: 0,
      duration: SKILLS.snare.duration,
      active: 0,
      usesMax: SKILL_USES_PER_WAVE,
      usesLeft: SKILL_USES_PER_WAVE,
    },
  },
};

const hudCache = {
  lives: null,
  gold: null,
  wave: null,
  enemyCount: null,
  score: null,
  bestScore: null,
};

let backgroundGradient = null;
let grassPattern = null;
let dirtPattern = null;
let pathPebbles = [];

const BIOME_DECOR_PALETTES = {
  greenhouse: {
    leaves: ["#6fb44d", "#477f38", "#9bcf66"],
    stones: ["#7e876f", "#5e6f58"],
    pebbles: ["#b89d70", "#f0d9a7"],
  },
  swamp: {
    leaves: ["#5e8f52", "#2f6338", "#9bb965"],
    stones: ["#62715a", "#4c5a44"],
    pebbles: ["#8d7652", "#c7a86a"],
  },
  hive: {
    leaves: ["#aaa14a", "#6f7132", "#d2bd55"],
    stones: ["#8f7a49", "#6a5635"],
    pebbles: ["#c88d45", "#ffd37a"],
  },
  night: {
    leaves: ["#557d78", "#2c5552", "#8fc6c2"],
    stones: ["#66747a", "#43545c"],
    pebbles: ["#7a6c5f", "#c7b09a"],
  },
  heart: {
    leaves: ["#874c6b", "#4d2f4a", "#c06a86"],
    stones: ["#76505c", "#4c3440"],
    pebbles: ["#9c6a58", "#d49b83"],
  },
};

const audio = {
  enabled: true,
  ctx: null,
  musicVolume: 0.45,
  sfxVolume: 1,
};

function makeSprite(svgMarkup) {
  const img = new Image();
  img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`;
  return img;
}

const isLocalDevHost = location.protocol === "file:" || location.hostname === "127.0.0.1" || location.hostname === "localhost";
const localAssetCacheBust = isLocalDevHost ? String(Date.now()) : "";

function withLocalAssetCacheBust(src) {
  if (!localAssetCacheBust) return src;
  const url = new URL(src, location.href);
  url.searchParams.set("dev-cache-bust", localAssetCacheBust);
  return url.href;
}

function makeImageSprite(src) {
  const img = new Image();
  img.src = withLocalAssetCacheBust(src);
  return img;
}

function makeFallbackImageSprite(src, fallbackSprite) {
  const img = makeImageSprite(src);
  img.onerror = () => {
    img.onerror = null;
    if (fallbackSprite?.src) img.src = fallbackSprite.src;
  };
  return img;
}

const BIOME_FLOOR_TEXTURES = {
  greenhouse: makeImageSprite("./assets/textures/biome-greenhouse-floor.png?v=biome-floor-v1"),
  swamp: makeImageSprite("./assets/textures/biome-swamp-floor.png?v=biome-floor-v1"),
  hive: makeImageSprite("./assets/textures/biome-hive-floor.png?v=biome-floor-v1"),
  night: makeImageSprite("./assets/textures/biome-night-floor.png?v=biome-floor-v1"),
  heart: makeImageSprite("./assets/textures/biome-heart-floor.png?v=biome-floor-v1"),
};

function drawCoverImage(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawW = image.naturalWidth * scale;
  const drawH = image.naturalHeight * scale;
  ctx.drawImage(image, x + (width - drawW) / 2, y + (height - drawH) / 2, drawW, drawH);
}

function isTowerPhotoPortrait(path) {
  return /\.(png|webp|jpe?g)$/i.test(path || "");
}

function getTowerPortraitPath(towerId) {
  const type = towerTypes[towerId];
  if (type?.portrait) return type.portrait;
  return `./assets/towers/${towerId}.svg`;
}

/** Focal vertical des miniatures deck (lisibilite a petite taille). */
const DECK_PORTRAIT_FOCUS = {
  snapper: "center 34%",
  dionaea_b52: "center 38%",
  dionaea_akai_ryu: "center 36%",
  dionaea_white_tiger: "center 32%",
  spitter: "center 30%",
  sarracenia_atlas5: "center 28%",
  sarracenia_scarlet_belle: "center 32%",
  sarracenia_fureur: "center 36%",
  thorn: "center 42%",
  drosera_creamsicle: "center 38%",
  drosera_regia: "center 44%",
  drosera_scorpioides: "center 40%",
};

function getDeckPortraitPath(towerId) {
  return getTowerPortraitPath(towerId);
}

function getTowerFallbackPortraitPath(towerId) {
  return `./assets/towers/${towerId}.svg`;
}

function makeLayeredPortrait(primary, fallback) {
  return fallback && primary !== fallback
    ? `url('${primary}'), url('${fallback}')`
    : `url('${primary}')`;
}

function getTowerPortraitLayers(towerId) {
  return makeLayeredPortrait(getTowerPortraitPath(towerId), getTowerFallbackPortraitPath(towerId));
}

function getCollectorFallbackPortraitPath(collectorId) {
  const byId = {
    herbier: "./assets/collectors/charles-herbier.svg",
    distiller: "./assets/collectors/mayeu-distiller.svg",
    gardien: "./assets/collectors/chris-gardien.svg",
  };
  return byId[collectorId] || "";
}

function getCollectorPortraitLayers(collector) {
  return makeLayeredPortrait(collector.portrait, getCollectorFallbackPortraitPath(collector.id));
}

const sprites = {
  towers: {
    snapper: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='35%' cy='22%'><stop offset='0' stop-color='#c8f7b0'/><stop offset='.45' stop-color='#4a9e3a'/><stop offset='1' stop-color='#1a4d18'/></radialGradient></defs><ellipse cx='32' cy='44' rx='17' ry='8' fill='#142a12' opacity='.55'/><path d='M19 35c-7-12 1-25 14-26 14-1 23 13 16 27-5 11-24 12-30-1z' fill='url(#g)'/><path d='M19 29c8 7 22 7 31 0-3 11-25 15-31 0z' fill='#0f2a0c'/><path d='M24 30l4 7 4-7 4 7 4-7' stroke='#eaffd4' stroke-width='2' fill='none'/><circle cx='39' cy='20' r='5' fill='#e8ffd8'/><circle cx='41' cy='20' r='2' fill='#1a3a14'/><path d='M22 48c9-9 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    spitter: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#c8f884'/><stop offset='.45' stop-color='#55a93a'/><stop offset='1' stop-color='#16441b'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#edffad'/><stop offset='1' stop-color='#5fb044'/></linearGradient></defs><ellipse cx='32' cy='53' rx='16' ry='6' fill='#10220e' opacity='.45'/><path d='M21 53c3-10 4-24 3-34 3-3 7-5 12-5 6 0 10 3 13 7-3 11-4 24-2 32-7 4-19 4-26 0z' fill='url(#tube)'/><path d='M36 17c7 10 7 25 5 36' stroke='#184c1c' stroke-width='2' fill='none' opacity='.45'/><path d='M28 19c-1 10 0 23 2 34' stroke='#dfff9c' stroke-width='2' fill='none' opacity='.55'/><path d='M17 19c4-12 21-18 36-7-8 1-14 6-17 13-5-4-11-6-19-6z' fill='url(#hood)'/><ellipse cx='34' cy='21' rx='13' ry='8' fill='#e8ff9b'/><ellipse cx='34' cy='22' rx='9' ry='5' fill='#102414' opacity='.88'/><path d='M25 19c6-4 14-4 20 0' stroke='#f4ffc8' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M21 56c8-6 17-6 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    thorn: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#d0ffa0'/><stop offset='.5' stop-color='#3a8c38'/><stop offset='1' stop-color='#173614'/></radialGradient></defs><ellipse cx='32' cy='46' rx='16' ry='7' fill='#0e1e0a' opacity='.5'/><circle cx='32' cy='30' r='13' fill='url(#g)'/><path d='M32 17l2 8 7-4-4 8 8 2-8 3 4 7-7-4-2 8-2-8-7 4 4-7-8-3 8-2-4-8 7 4z' fill='#c0f890' opacity='.9'/><circle cx='32' cy='30' r='5' fill='#227022'/><path d='M20 49c9-8 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_regia: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='45%'><stop offset='0' stop-color='#b8f7a0'/><stop offset='.5' stop-color='#3d8f32'/><stop offset='1' stop-color='#1a4a18'/></radialGradient></defs><ellipse cx='32' cy='48' rx='22' ry='9' fill='#142a12' opacity='.55'/><circle cx='32' cy='30' r='20' fill='url(#g)'/><path d='M32 4l6 17 17-7-9 16 15 9-17 3 3 18-14-13-14 13 3-18-17-3 15-9-9-16-17 7z' fill='#9ef078' opacity='.92'/><path d='M32 12l4 12 11-5-6 12 12 5-12 4 4 12-11-5-4 12-4-12-11 5 6-12-12-5z' fill='#d8ffb8' opacity='.75'/><circle cx='32' cy='30' r='9' fill='#2a6b22'/><path d='M18 52c11-9 22-9 32 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    // ── Variantes ────────────────────────────────────────────────────────
    dionaea_b52: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='38%' cy='20%'><stop offset='0' stop-color='#8ee86a'/><stop offset='.45' stop-color='#2d6b22'/><stop offset='1' stop-color='#0a1208'/></radialGradient></defs><ellipse cx='32' cy='50' rx='24' ry='10' fill='#080e08' opacity='.6'/><path d='M6 34c-4-18 6-32 26-34 22-2 32 16 22 32-8 16-38 18-48-2z' fill='url(#g)'/><path d='M8 28c12 10 36 11 48 0-8 14-40 16-48 0z' fill='#050a06'/><path d='M12 24l7 11 7-11 7 11 7-11 6 11 6-11' stroke='#1a1a1a' stroke-width='2.5' fill='none' stroke-linecap='round'/><path d='M12 24l7 11 7-11 7 11 7-11 6 11' stroke='#7cff5a' stroke-width='1.5' fill='none' stroke-linecap='round'/><circle cx='44' cy='14' r='8' fill='#6ecf50'/><circle cx='46' cy='14' r='3.5' fill='#0a0a0a'/><path d='M14 54c12-9 24-9 36 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    dionaea_akai_ryu: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='35%' cy='25%'><stop offset='0' stop-color='#ffa060'/><stop offset='.5' stop-color='#CC3300'/><stop offset='1' stop-color='#600f00'/></radialGradient></defs><ellipse cx='32' cy='46' rx='19' ry='8' fill='#1a0600' opacity='.55'/><path d='M14 33c-5-13 3-25 18-26 14-1 23 13 17 27-5 11-28 12-35-1z' fill='url(#g)'/><path d='M15 29c8 8 26 8 35 0-3 10-28 14-35 0z' fill='#3d0e00'/><path d='M18 27l5 8 5-8 5 8 5-8 4 8' stroke='#ffa060' stroke-width='2.5' fill='none' stroke-linecap='round'/><circle cx='40' cy='18' r='6' fill='#ffd0a0'/><circle cx='42' cy='18' r='2.5' fill='#200800'/><path d='M40 12l4-5 2 6' stroke='#ff7020' stroke-width='1.5' fill='none'/><path d='M18 50c10-8 20-8 30 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    dionaea_white_tiger: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='36%' cy='22%'><stop offset='0' stop-color='#f8fff0'/><stop offset='.42' stop-color='#c8e8b0'/><stop offset='1' stop-color='#4a6a42'/></radialGradient></defs><ellipse cx='32' cy='46' rx='18' ry='8' fill='#1a2218' opacity='.5'/><path d='M16 32c-4-12 4-24 18-26 16-2 24 12 18 26-4 12-28 14-36 0z' fill='url(#g)'/><path d='M17 28c8 8 24 8 34 0-4 10-30 12-34 0z' fill='#2a4a28'/><path d='M20 26l4 7 4-7 4 7 4-7 4 7' stroke='#e8ffe0' stroke-width='2' fill='none' stroke-linecap='round'/><path d='M18 24l3 5M26 22l2 4M34 22l2 4M42 24l3 5' stroke='#88aa70' stroke-width='1.5' fill='none' opacity='.85'/><circle cx='40' cy='18' r='5.5' fill='#f0ffe8'/><circle cx='41.5' cy='18' r='2' fill='#2a4a20'/><path d='M18 50c10-8 20-8 30 0' stroke='#3a6a30' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_atlas5: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f7fff0'/><stop offset='.4' stop-color='#84c96b'/><stop offset='1' stop-color='#174a25'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffffff'/><stop offset='1' stop-color='#86c86d'/></linearGradient></defs><ellipse cx='32' cy='54' rx='18' ry='6.5' fill='#10220e' opacity='.45'/><path d='M19 54c3-12 4-28 2-39 4-4 9-6 15-6 7 0 13 4 16 9-4 13-5 27-2 36-8 5-23 5-31 0z' fill='url(#tube)'/><path d='M37 14c8 12 8 28 5 40' stroke='#184c1c' stroke-width='2.2' fill='none' opacity='.42'/><path d='M28 16c-1 12 0 27 2 38' stroke='#fbfff0' stroke-width='2.2' fill='none' opacity='.65'/><path d='M13 16c5-14 25-21 43-8-10 1-16 7-20 16-6-5-13-8-23-8z' fill='url(#hood)'/><ellipse cx='35' cy='18' rx='15' ry='8.5' fill='#fbfff0'/><ellipse cx='35' cy='19' rx='10' ry='5.3' fill='#102414' opacity='.88'/><path d='M24 16c7-5 16-5 23 0' stroke='#ffffff' stroke-width='2.7' stroke-linecap='round' fill='none'/><path d='M20 57c9-7 19-7 29 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_scarlet_belle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffb29d'/><stop offset='.43' stop-color='#c8322d'/><stop offset='1' stop-color='#5b1010'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#ffd5c8'/><stop offset='1' stop-color='#b82327'/></linearGradient></defs><ellipse cx='32' cy='53' rx='17' ry='6' fill='#190504' opacity='.46'/><path d='M20 53c3-11 4-25 2-35 4-4 8-6 14-6 7 0 12 4 15 8-4 12-5 24-2 33-8 5-21 5-29 0z' fill='url(#tube)'/><path d='M36 17c7 11 7 25 5 36' stroke='#5e0e0e' stroke-width='2' fill='none' opacity='.5'/><path d='M28 18c-1 11 0 25 2 35' stroke='#ffc2b6' stroke-width='2' fill='none' opacity='.58'/><path d='M15 18c5-13 23-20 39-8-9 1-15 7-18 15-6-5-12-7-21-7z' fill='url(#hood)'/><ellipse cx='34' cy='20' rx='14' ry='8' fill='#ffb5a8'/><ellipse cx='34' cy='21' rx='9.5' ry='5' fill='#200808' opacity='.88'/><path d='M24 18c6-5 15-5 22 0' stroke='#ffd8d0' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M29 24c1 8 1 18 0 27M40 24c1 8 0 18-1 27' stroke='#ff7770' stroke-width='1.6' fill='none' opacity='.55'/><path d='M20 56c8-7 18-7 28 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    sarracenia_fureur: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><defs><linearGradient id='tube' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#fff6a4'/><stop offset='.43' stop-color='#d4a800'/><stop offset='1' stop-color='#654800'/></linearGradient><linearGradient id='hood' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#fffbd0'/><stop offset='1' stop-color='#c28b00'/></linearGradient></defs><ellipse cx='32' cy='53' rx='17' ry='6' fill='#211b06' opacity='.46'/><path d='M20 53c3-11 4-26 2-36 4-4 8-6 14-6 7 0 12 4 15 8-4 13-5 25-2 34-8 5-21 5-29 0z' fill='url(#tube)'/><path d='M36 16c7 12 7 26 5 37' stroke='#6f5200' stroke-width='2' fill='none' opacity='.5'/><path d='M28 18c-1 11 0 25 2 35' stroke='#fff2a0' stroke-width='2' fill='none' opacity='.62'/><path d='M15 17c5-13 23-20 39-8-9 1-15 7-18 15-6-5-12-7-21-7z' fill='url(#hood)'/><ellipse cx='34' cy='19' rx='14' ry='8' fill='#fff3a0'/><ellipse cx='34' cy='20' rx='9.5' ry='5' fill='#211807' opacity='.88'/><path d='M24 17c6-5 15-5 22 0' stroke='#fffbd0' stroke-width='2.5' stroke-linecap='round' fill='none'/><path d='M29 23c1 8 1 19 0 28M40 23c1 8 0 19-1 28' stroke='#fff0a0' stroke-width='1.6' fill='none' opacity='.6'/><path d='M17 28l-7-6M50 28l8-6M17 40l-8-2M50 40l8-2' stroke='#ffe566' stroke-width='2.5' stroke-linecap='round' fill='none' opacity='.75'/><path d='M20 56c8-7 18-7 28 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_creamsicle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#ffe0c0'/><stop offset='.5' stop-color='#E8895E'/><stop offset='1' stop-color='#7a3820'/></radialGradient></defs><ellipse cx='32' cy='46' rx='17' ry='8' fill='#1e0e06' opacity='.5'/><circle cx='32' cy='30' r='14' fill='url(#g)'/><path d='M32 16l3 11 9-6-5 9 11 4-11 4 5 9-9-6-3 11-3-11-9 6 5-9-11-4 11-4-5-9 9 6z' fill='#ffe0b0' opacity='.85'/><circle cx='32' cy='30' r='6' fill='#b86040'/><path d='M22 50c8-8 16-8 24 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
    drosera_scorpioides: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><radialGradient id='g' cx='50%' cy='50%'><stop offset='0' stop-color='#90ff60'/><stop offset='.5' stop-color='#2D5A27'/><stop offset='1' stop-color='#0d200a'/></radialGradient></defs><ellipse cx='32' cy='46' rx='16' ry='8' fill='#080f06' opacity='.55'/><circle cx='32' cy='30' r='13' fill='url(#g)'/><path d='M32 17l2 8 6-5-3 9 9 1-9 4 5 7-8-3 1 9-3-9-6 5 3-8-8-2 9-3-3-8 6 5z' fill='#80ff40' opacity='.9'/><circle cx='32' cy='30' r='5' fill='#1a4016'/><path d='M42 24 Q50 18 52 26 Q54 34 46 36' stroke='#70ff30' stroke-width='2' fill='none' stroke-linecap='round'/><circle cx='47' cy='36' r='2.5' fill='#7fff44'/><path d='M20 49c9-8 17-8 26 0' stroke='#2f7b37' stroke-width='5' stroke-linecap='round'/></svg>"
    ),
  },
  enemies: {
    crawler: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><defs><radialGradient id='g'><stop offset='0' stop-color='#9b6140'/><stop offset='1' stop-color='#3f2116'/></radialGradient></defs><ellipse cx='24' cy='34' rx='14' ry='6' fill='#1b120d' opacity='.35'/><ellipse cx='24' cy='26' rx='15' ry='11' fill='url(#g)'/><path d='M11 29c8 4 17 4 26 0' stroke='#2d170f' stroke-width='2' opacity='.45'/><circle cx='20' cy='23' r='2.2' fill='#f0dcc9'/><circle cx='29' cy='23' r='2.2' fill='#f0dcc9'/></svg>"
    ),
    beetle: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='52' height='52'><defs><radialGradient id='g'><stop offset='0' stop-color='#8a7058'/><stop offset='1' stop-color='#30231c'/></radialGradient></defs><ellipse cx='26' cy='38' rx='16' ry='6' fill='#17100c' opacity='.35'/><ellipse cx='26' cy='29' rx='16' ry='12' fill='url(#g)'/><path d='M26 17v23' stroke='#211610' stroke-width='2'/><rect x='20' y='15' width='12' height='12' rx='4' fill='#6c5442'/><path d='M12 29h-7M40 29h7M15 35l-6 5M37 35l6 5' stroke='#211610' stroke-width='2' stroke-linecap='round'/></svg>"
    ),
    wasp: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'><ellipse cx='21' cy='31' rx='10' ry='4' fill='#180d09' opacity='.3'/><ellipse cx='21' cy='24' rx='11' ry='8' fill='#8d3a1f'/><path d='M14 23h14M13 27h16' stroke='#ffc766' stroke-width='2'/><ellipse cx='14' cy='17' rx='8' ry='4' fill='#d6e9f7' opacity='.75'/><ellipse cx='28' cy='17' rx='8' ry='4' fill='#d6e9f7' opacity='.75'/><path d='M31 24l7 2-7 3' fill='#3b190e'/></svg>"
    ),
    slug: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='46' height='30'><ellipse cx='23' cy='22' rx='18' ry='6' fill='#2a3a20' opacity='.35'/><ellipse cx='23' cy='16' rx='19' ry='9' fill='#6a8a58'/><ellipse cx='10' cy='15' rx='4' ry='3' fill='#8ab070'/><circle cx='8' cy='14' r='1.2' fill='#1a2810'/></svg>"
    ),
    snail: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='40'><ellipse cx='24' cy='30' rx='16' ry='5' fill='#1a140f' opacity='.35'/><ellipse cx='30' cy='18' rx='12' ry='10' fill='#8a7a68'/><path d='M22 24h14' stroke='#5a4a38' stroke-width='2'/><ellipse cx='14' cy='26' rx='8' ry='5' fill='#9ab088'/><circle cx='11' cy='25' r='1.3' fill='#203018'/></svg>"
    ),
    hornet: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><ellipse cx='22' cy='32' rx='11' ry='4' fill='#180d09' opacity='.3'/><ellipse cx='22' cy='24' rx='12' ry='9' fill='#1a1410'/><path d='M12 23h20M11 27h22M11 31h22' stroke='#f0b030' stroke-width='2.2'/><ellipse cx='14' cy='16' rx='9' ry='4' fill='#e8f4ff' opacity='.8'/><ellipse cx='30' cy='16' rx='9' ry='4' fill='#e8f4ff' opacity='.8'/><path d='M33 25l8 3-8 4' fill='#5a3010'/></svg>"
    ),
    boss: makeSprite(
      "<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72'><defs><radialGradient id='g'><stop offset='0' stop-color='#7b5e50'/><stop offset='1' stop-color='#21130f'/></radialGradient></defs><ellipse cx='36' cy='58' rx='25' ry='8' fill='#130b09' opacity='.38'/><circle cx='36' cy='40' r='24' fill='url(#g)'/><circle cx='36' cy='28' r='11' fill='#6d5047'/><path d='M18 31l-8-9M54 31l8-9M18 45l-11 5M54 45l11 5' stroke='#23140f' stroke-width='4' stroke-linecap='round'/><circle cx='31' cy='28' r='2.5' fill='#f4dbc6'/><circle cx='42' cy='28' r='2.5' fill='#f4dbc6'/><path d='M26 43c7 5 14 5 21 0' stroke='#f08f2f' stroke-width='3' fill='none'/></svg>"
    ),
  },
};

Object.keys(sprites.towers).forEach((id) => {
  sprites.towers[id] = makeFallbackImageSprite(`./assets/towers/${id}.png?v=towers-png-v2`, sprites.towers[id]);
});

Object.keys(sprites.enemies).forEach((id) => {
  sprites.enemies[id] = makeFallbackImageSprite(`./assets/enemies/${id}.png?v=enemies-png-v1`, sprites.enemies[id]);
});

const runMusic = createRunMusicController({ audio, ensureAudioContext });
let sfx = null;

const MAX_PARTICLES = 260;

function ensureAudioContext() {
  if (audio.ctx) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  audio.ctx = new AudioCtx();
}

function playSound(freq, duration, type = "sine", gainValue = 0.035) {
  if (!audio.enabled) return;
  const scaledGain = gainValue * (audio.sfxVolume ?? 1);
  if (scaledGain <= 0.0001) return;
  ensureAudioContext();
  if (!audio.ctx) return;
  if (audio.ctx.state === "suspended") audio.ctx.resume();
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  const now = audio.ctx.currentTime;
  const attack = Math.min(0.006, duration * 0.25);
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(scaledGain, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(audio.ctx.destination);
  osc.start();
  osc.stop(now + duration);
}

if (!sfx) sfx = createSfxPlayer(playSound);

function getSynergyTierKeys(state) {
  return (state?.active || []).map((a) => `${a.familyId}:${a.tier?.minCards}`);
}

function updateRunMusic() {
  if (!audio.enabled) {
    runMusic.stop();
    return;
  }
  if (game.screen === "title") return;

  const biomeId = game.biome?.id || getBiomeForFloor(game.spire.floor)?.id || "greenhouse";
  const spireNumber = game.spire.spireNumber || 1;

  const runScreens = new Set(["map", "playing", "paused", "menu", "collector", "mutation", "nodeResult", "event", "crossroads"]);
  if (runScreens.has(game.screen)) {
    if (runMusic.getMode() !== "run") {
      runMusic.transitionToRun({ biomeId, spireNumber });
    } else {
      runMusic.setBiomeContext({ biomeId, spireNumber });
    }
  }
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceSq(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function worldPosOfEnemy(enemy) {
  const route = enemyRoute(enemy);
  return lerp(route[enemy.segment], route[enemy.segment + 1], enemy.t);
}

function findRouteFacingX(route, startSegment, step) {
  for (let segment = startSegment; segment >= 0 && segment < route.length - 1; segment += step) {
    const dx = route[segment + 1].x - route[segment].x;
    if (Math.abs(dx) > 0.5) return Math.sign(dx);
  }
  return 0;
}

function enemyFacingX(enemy) {
  const route = enemyRoute(enemy);
  const currentFacing = findRouteFacingX(route, enemy.segment, 1);
  if (currentFacing) return currentFacing;
  const previousFacing = findRouteFacingX(route, enemy.segment - 1, -1);
  return previousFacing || 1;
}

function resetModifiers() {
  game.modifiers = {
    globalDamage: 1,
    globalFireRate: 1,
    globalRange: 0,
    rewardMult: 1,
    projectileSpeedMult: 1,
    critChance: 0,
    critMult: CRIT_DAMAGE_MULT,
    snapperDamage: 1,
    spitterDamage: 1,
    thornDamage: 1,
    thornRange: 0,
    spitterPoison: 0,
    skillCooldownMult: 1,
    skillExtraUsesPerWave: 0,
    boostDurationBonus: 0,
    snareDurationBonus: 0,
    slowPotency: 1,
    snareSlowFactorMult: 1,
  };
}

function getBiomeForFloor(floor) {
  return pickBiomeForFloor(floor, game.spire.spireNumber, BIOMES, MAX_FLOORS - 1);
}

function updateBiomeUiTheme() {
  if (typeof document === "undefined") return;
  const biomeId = game.biome?.id || getBiomeForFloor(game.spire.floor)?.id || "greenhouse";
  document.body.dataset.biome = biomeId;
}

function applyBiomeForCurrentFloor() {
  const nextBiome = getBiomeForFloor(game.spire.floor);
  if (game.biome && game.biome.id === nextBiome.id && grassPattern && dirtPattern) {
    updateBiomeUiTheme();
    updateRunMusic();
    return;
  }
  game.biome = nextBiome;
  backgroundGradient = null;
  initWorldArt();
  updateBiomeUiTheme();
  updateRunMusic();
}

function setEncounterForNode(type) {
  const biome = mergeBiomeWithSpirePressure(
    getBiomeForFloor(game.spire.floor),
    game.spire.spireNumber
  );
  game.encounter = computeEncounterStats({
    nodeType: type,
    floor: game.spire.floor,
    floorScaling: FLOOR_SCALING,
    biome,
  });
  const laneHp = getLaneEncounterHpMult(game.spire.lane, MAP_LANE_CONFIG);
  if (laneHp !== 1) game.encounter.hpMult *= laneHp;
  if (game.run.encounterHpMult !== 1) game.encounter.hpMult *= game.run.encounterHpMult;
  if (game.run.encounterSpeedMult !== 1) game.encounter.speedMult *= game.run.encounterSpeedMult;
  if (game.run.dailySpeedMult !== 1) game.encounter.speedMult *= game.run.dailySpeedMult;
  if (game.run.dailyHpMult !== 1) game.encounter.hpMult *= game.run.dailyHpMult;
  applyTormentEncounterPenalties(game.encounter, game);
}

function showMobileToast(text, mode = "normal") {
  if (!mobileToastEl || !isTouchLayout()) return;
  mobileToastEl.textContent = text;
  mobileToastEl.classList.remove("hidden", "mobile-toast--warn", "mobile-toast--danger");
  if (mode === "warn") mobileToastEl.classList.add("mobile-toast--warn");
  if (mode === "danger") mobileToastEl.classList.add("mobile-toast--danger");
  if (mobileToastTimer) clearTimeout(mobileToastTimer);
  mobileToastTimer = setTimeout(() => {
    mobileToastEl.classList.add("hidden");
  }, 3800);
}

function showMessage(text, mode = "normal") {
  messageEl.textContent = text;
  messageEl.classList.remove("message--warn", "message--danger");
  if (mode === "warn") messageEl.classList.add("message--warn");
  if (mode === "danger") messageEl.classList.add("message--danger");
  messageEl.style.border = "";
  messageEl.style.background = "";
  showMobileToast(text, mode);
}

function showOverlay(title, text, buttonText, statsHtml = "") {
  overlayTitle.textContent = title;
  overlayText.textContent = text;
  overlayButton.textContent = buttonText;
  overlayAscensionBtn?.classList.add("hidden");
  overlayLeaderboardBtn?.classList.add("hidden");
  if (overlayStatsEl) {
    overlayStatsEl.innerHTML = statsHtml || "";
    overlayStatsEl.classList.toggle("hidden", !statsHtml);
  }
  overlay.classList.remove("hidden");
}

function buildRunEndStatsHtml() {
  const stats = finalizeRunStats(game);
  if (!stats) return "";
  return formatRunEndReportHtml(stats, {
    escape: escapeHtml,
    towerNameById: (id) => {
      const t = getTowerById(Number(id));
      return t ? `${t.name} (niv.${t.level})` : null;
    },
    enemyNameByType: (type) => enemyTypes[type]?.name || type,
  });
}

/** Fin de run : ecran victoire (5 Spires) ou defaite (vies a 0). */
function showEndRunScreen({ outcome, title, text, buttonText, statsHtml, ascensionButtonText = "" }) {
  game._persistedEndRunScreen = { outcome, title, text, buttonText, ascensionButtonText };
  if (overlayCard) {
    overlayCard.classList.remove("run-end-victory", "run-end-defeat");
    if (outcome === "victory") overlayCard.classList.add("run-end-victory");
    if (outcome === "defeat") overlayCard.classList.add("run-end-defeat");
  }
  showOverlay(title, text, buttonText, statsHtml ?? buildRunEndStatsHtml());
  if (ascensionButtonText && overlayAscensionBtn) {
    overlayAscensionBtn.textContent = ascensionButtonText;
    overlayAscensionBtn.classList.remove("hidden");
  }
  overlayLeaderboardBtn?.classList.remove("hidden");
  scheduleRunSave();
}

function hideOverlay() {
  overlay.classList.add("hidden");
  overlayCard?.classList.remove("run-end-victory", "run-end-defeat");
  overlayAscensionBtn?.classList.add("hidden");
  overlayLeaderboardBtn?.classList.add("hidden");
  if (overlayStatsEl) {
    overlayStatsEl.innerHTML = "";
    overlayStatsEl.classList.add("hidden");
  }
}

function hideAllTransientOverlays() {
  hideDraftOverlay();
  hideCollectorOverlay();
  hideMapOverlay();
  hideShopOverlay();
  hideNodeResult();
  hideEventOverlay();
  hideCrossroadsOverlay();
  hideMutationOverlay();
  hideWaveSummaryOverlay();
  hideBossCardOverlay();
  hideSellConfirmOverlay();
  nodeRetryOverlay?.classList.add("hidden");
}

function showDraftOverlay() {
  draftOverlay.classList.remove("hidden");
}

function hideDraftOverlay() {
  draftOverlay.classList.add("hidden");
}

function showCollectorOverlay() {
  collectorOverlay.classList.remove("hidden");
}

function hideCollectorOverlay() {
  collectorOverlay.classList.add("hidden");
}

function showMapOverlay() {
  mapOverlay.classList.remove("hidden");
}

function hideMapOverlay() {
  mapOverlay.classList.add("hidden");
}

function showShopOverlay() {
  shopOverlay.classList.remove("hidden");
}

function hideShopOverlay() {
  shopOverlay.classList.add("hidden");
}

function showNodeResult(title, text) {
  game._persistedNodeResult = { title, text };
  nodeResultTitle.textContent = title;
  nodeResultText.textContent = text;
  nodeResultOverlay.classList.remove("hidden");
  scheduleRunSave();
}

function hideNodeResult() {
  nodeResultOverlay.classList.add("hidden");
}

function createFloatText(text, x, y, color = "#f6ffd8") {
  game.floatTexts.push({ text, x, y, vy: -30, life: 0.9, color });
}

function emitParticles(x, y, color, count) {
  if (game.particles.length > MAX_PARTICLES) {
    game.particles.splice(0, game.particles.length - MAX_PARTICLES);
  }
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 35 + Math.random() * 150;
    game.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.45 + Math.random() * 0.35,
      color,
      radius: 1.5 + Math.random() * 2.6,
    });
  }
}

function initWeather() {
  game.rainDrops = [];
  for (let i = 0; i < 120; i += 1) {
    game.rainDrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 180 + Math.random() * 260,
      len: 9 + Math.random() * 8,
    });
  }
}

function createNoisePattern(baseColor, speckColor, lineColor) {
  const texture = document.createElement("canvas");
  texture.width = 96;
  texture.height = 96;
  const t = texture.getContext("2d");
  t.fillStyle = baseColor;
  t.fillRect(0, 0, texture.width, texture.height);

  for (let i = 0; i < 220; i += 1) {
    t.globalAlpha = 0.1 + Math.random() * 0.18;
    t.fillStyle = speckColor;
    t.fillRect(Math.random() * 96, Math.random() * 96, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }

  t.strokeStyle = lineColor;
  t.lineWidth = 1;
  for (let i = 0; i < 36; i += 1) {
    const x = Math.random() * 96;
    const y = Math.random() * 96;
    t.globalAlpha = 0.08 + Math.random() * 0.12;
    t.beginPath();
    t.moveTo(x, y);
    t.quadraticCurveTo(x + 5, y + 3, x + 12, y + 1);
    t.stroke();
  }
  t.globalAlpha = 1;
  return ctx.createPattern(texture, "repeat");
}

function initWorldArt() {
  const biome = game.biome || BIOMES[0];
  const decorPalette = getBiomeDecorPalette(biome);
  grassPattern = createNoisePattern(biome.grass[0], biome.grass[1], biome.grass[2]);
  dirtPattern = createNoisePattern(biome.dirt[0], biome.dirt[1], biome.dirt[2]);
  game.decor.leaves = [];
  game.decor.stones = [];
  game.decor.mushrooms = [];
  game.decor.fireflies = [];
  pathPebbles = [];

  for (let i = 0; i < 90; i += 1) {
    game.decor.leaves.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 3 + Math.random() * 9,
      rot: Math.random() * Math.PI,
      color: pickFrom(decorPalette.leaves, "#5f9e3f"),
      vein: biome.grass[2],
      blade: Math.random() > 0.72,
    });
  }

  for (let i = 0; i < 24; i += 1) {
    game.decor.stones.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 5 + Math.random() * 10,
      color: pickFrom(decorPalette.stones, "#7e876f"),
    });
  }

  const mushroomCount = biome.id === "night" || biome.id === "heart" ? 30 : 18;
  for (let i = 0; i < mushroomCount; i += 1) {
    game.decor.mushrooms.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: 0.6 + Math.random() * 0.7,
      cap: biome.id === "heart" ? "#c74771" : Math.random() > 0.5 ? "#d96657" : "#f0a64a",
    });
  }

  const fireflyCount = biome.id === "night" ? 46 : 24;
  for (let i = 0; i < fireflyCount; i += 1) {
    game.decor.fireflies.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    });
  }

  for (const route of paths) {
    for (let i = 0; i < Math.ceil(70 / paths.length); i += 1) {
      const segIdx = Math.floor(Math.random() * (route.length - 1));
      const t = Math.random();
      const p = lerp(route[segIdx], route[segIdx + 1], t);
      pathPebbles.push({
        x: p.x + (Math.random() - 0.5) * 58,
        y: p.y + (Math.random() - 0.5) * 58,
        r: 1.2 + Math.random() * 2.6,
        color: pickFrom(decorPalette.pebbles, "#b89d70"),
      });
    }
  }
}

function updateBestScore() {
  if (game.score <= game.bestScore) return;
  game.bestScore = game.score;
  localStorage.setItem(BEST_SCORE_KEY, String(game.bestScore));
}

function getPlayerName() {
  return localStorage.getItem(PLAYER_NAME_KEY) || "Anonyme";
}
function savePlayerName(raw) {
  const clean = (raw || "").trim().slice(0, 18);
  localStorage.setItem(PLAYER_NAME_KEY, clean || "Anonyme");
}

function buildLeaderboardEntry() {
  const collector = getSelectedCollector();
  const mutation = MUTATION_LIBRARY.find((m) => m.id === game.run.mutationId);
  const deckLine = (game.towerDeck || [])
    .map((key) => towerTypes[key]?.name?.split(" ").pop() || key)
    .join(" / ");
  const entry = {
    name: getPlayerName(),
    score: game.score,
    floor: game.spire.floor + 1,
    wave: game.waveCount || 0,
    collector: collector ? collector.name : "Aucun",
    date: new Date().toLocaleDateString("fr-BE", { day: "2-digit", month: "2-digit", year: "2-digit" }),
    spire: game.spire.spireNumber,
    victory: game.screen === "victory" ? 1 : 0,
    mutation: mutation?.name || "Aucune",
    deck: deckLine || "—",
  };
  if (game.daily?.dateKey) entry.dailyKey = game.daily.dateKey;
  return entry;
}

async function refreshLeaderboardLocal() {
  leaderboardLoadState = "loading";
  renderLeaderboard();
  const result = await fetchLeaderboard();
  if (result.ok) {
    leaderboardEntries = result.entries;
    leaderboardDailyEntries = result.dailyEntries || [];
    leaderboardDailyKey = result.dailyKey || null;
    leaderboardLoadState = "ready";
    leaderboardErrorCode = null;
    leaderboardErrorDetail = null;
  } else {
    leaderboardEntries = [];
    leaderboardDailyEntries = [];
    leaderboardDailyKey = null;
    leaderboardLoadState = "error";
    leaderboardErrorCode = result.error || "network";
    leaderboardErrorDetail = result.detail || null;
  }
  renderLeaderboard();
}

function saveRunToLeaderboard() {
  if (game.score <= 0) return;
  const entry = buildLeaderboardEntry();
  void submitLeaderboardEntry(entry).then((result) => {
    if (result.ok) {
      leaderboardEntries = result.entries;
      leaderboardDailyEntries = result.dailyEntries || [];
      leaderboardDailyKey = result.dailyKey || leaderboardDailyKey;
      leaderboardLoadState = "ready";
      if (!leaderboardOverlay.classList.contains("hidden")) {
        renderLeaderboard();
      }
    }
  });
}

function renderLeaderboard() {
  if (!leaderboardTableEl) return;
  leaderboardTableEl.innerHTML = renderLeaderboardPanel({
    loadState: leaderboardLoadState,
    globalEntries: leaderboardEntries,
    dailyEntries: leaderboardDailyEntries,
    dailyKey: leaderboardDailyKey,
    errorCode: leaderboardErrorCode,
    errorDetail: leaderboardErrorDetail,
    escapeHtml,
  });
}

async function showLeaderboard() {
  leaderboardOverlay.classList.remove("hidden");
  await refreshLeaderboardLocal();
}

function hideLeaderboard() {
  leaderboardOverlay.classList.add("hidden");
}

function gainScore(amount) {
  game.score += amount;
  updateBestScore();
}

function renderDeckList() {
  if (game.deck.picked.length === 0) {
    deckListEl.innerHTML = "<span class='deck-empty'>Aucune carte pour l'instant.</span>";
    renderSynergyList();
    updateRunDrawerBadge(runDrawerBadgeEl, 0, game.relics.picked.length);
    return;
  }
  const counts = new Map();
  game.deck.picked.forEach((id) => counts.set(id, (counts.get(id) || 0) + 1));
  const items = [...counts.entries()].map(([id, count]) => {
    const card = CARD_LIBRARY.find((c) => c.id === id);
    const label = `${card ? card.name : id}${count > 1 ? ` x${count}` : ""}`;
    const tooltip = card ? `${card.rarity} - ${formatCardDesc(card)}` : "Effet inconnu";
    const maxBadge = card?.stackable && isCardAtMaxStack(card, count)
      ? '<span class="deck-chip-max" aria-label="Stack maximum atteint">MAX</span>'
      : "";
    const towerType = card?.towerCard ? towerTypes[card.towerCard] : null;
    if (towerType) {
      const portrait = getDeckPortraitPath(card.towerCard);
      const portraitLayers = getTowerPortraitLayers(card.towerCard);
      const portraitPos = DECK_PORTRAIT_FOCUS[card.towerCard] || "center 38%";
      const rarityClass = getTowerRarityClass(towerType.rarity);
      const photoClass = isTowerPhotoPortrait(portrait) ? " deck-chip--photo" : "";
      const countSuffix = count > 1 ? ` ×${count}` : "";
      return `<span class="deck-chip deck-chip--portrait deck-chip--${rarityClass}${photoClass}" data-card-id="${id}" data-tooltip="${escapeHtml(tooltip)}" style="--deck-portrait: ${portraitLayers}; --deck-portrait-pos: ${portraitPos}">${escapeHtml(card.name)}${countSuffix}${maxBadge}</span>`;
    }
    return `<span class="deck-chip deck-chip--card ${getCardTextureClass(card)}" data-card-id="${id}" data-tooltip="${escapeHtml(tooltip)}">${label}${maxBadge}</span>`;
  });
  deckListEl.innerHTML = items.join("");
  enhanceDeckTooltips(deckListEl, CARD_LIBRARY, formatCardDesc);
  renderSynergyList();
  updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, game.relics.picked.length);
}

function recalcDeckSynergies() {
  const state = computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  );
  game.deckSynergy = state;
}

function renderSynergyList() {
  if (!deckSynergyListEl) return;
  recalcDeckSynergies();
  const families = DECK_SYNERGY_CONFIG?.families || [];
  if (!families.length) {
    deckSynergyListEl.innerHTML = "<span class='synergy-chip inactive'>Aucune synergie configuree.</span>";
    return;
  }
  const flashSet = new Set(game.synergyFlash?.families || []);
  const activeById = new Map(game.deckSynergy.active.map((a) => [a.familyId, a]));
  deckSynergyListEl.innerHTML = families
    .map((fam) => {
      const active = activeById.get(fam.id);
      const flashClass = flashSet.has(fam.id) ? " flash" : "";
      if (!active) {
        return `<span class="synergy-chip inactive">${fam.label} : 0 carte</span>`;
      }
      return `<span class="synergy-chip${flashClass}" title="${escapeHtml(active.tier.desc)}">${fam.label} · ${active.count} carte(s) — ${active.tier.desc}</span>`;
    })
    .join("");
}

function updateDailyChallengeBanner() {
  if (!dailyBannerEl) return;
  if (!game.daily?.name) {
    dailyBannerEl.classList.add("hidden");
    dailyBannerEl.textContent = "";
    dailyBannerEl.removeAttribute("title");
    return;
  }
  dailyBannerEl.classList.remove("hidden");
  const done = isDailyCompletedToday();
  dailyBannerEl.classList.toggle("is-complete", done);
  dailyBannerEl.textContent = done
    ? `Défi du jour : ${game.daily.name} ✓`
    : `Défi du jour : ${game.daily.name} (+${DAILY_BONUS_SCORE})`;
  dailyBannerEl.title = `${game.daily.desc} ${
    done ? "Déjà complété aujourd'hui." : `+${DAILY_BONUS_SCORE} score si validé.`
  }`;
}

function showDailyChallengeDetails() {
  if (!game.daily?.name) return;
  const done = isDailyCompletedToday();
  showMessage(
    `Défi du jour : ${game.daily.name} — ${game.daily.desc} ${
      done ? "Déjà complété aujourd'hui." : `+${DAILY_BONUS_SCORE} score si validé.`
    }`,
    done ? "normal" : "warn"
  );
}

function renderTitleResumePanel() {
  if (!titleResumePanel) return;
  const show = game.screen === "title" && hasRunSave();
  titleResumePanel.classList.toggle("hidden", !show);
  if (titleResumeSummary && show) {
    titleResumeSummary.textContent = formatRunSaveSummary();
  }
}

function collectRunSaveUiState() {
  return {
    mapOpen: mapOverlay && !mapOverlay.classList.contains("hidden"),
    shopOpen: shopOverlay && !shopOverlay.classList.contains("hidden"),
    draftOpen: draftOverlay && !draftOverlay.classList.contains("hidden"),
    eventOpen: eventOverlay && !eventOverlay.classList.contains("hidden"),
    nodeResultOpen: nodeResultOverlay && !nodeResultOverlay.classList.contains("hidden"),
    crossroadsOpen: crossroadsOverlay && !crossroadsOverlay.classList.contains("hidden"),
    collectorOpen: collectorOverlay && !collectorOverlay.classList.contains("hidden"),
    towerDraftOpen: towerDraftOverlayEl && !towerDraftOverlayEl.classList.contains("hidden"),
    mutationOpen: mutationOverlay && !mutationOverlay.classList.contains("hidden"),
    overlayOpen: overlay && !overlay.classList.contains("hidden"),
  };
}

function persistRunSaveNow() {
  if (!shouldPersistRunScreen(game.screen)) return;
  const payload = serializeRunState(game, {
    pads,
    ui: collectRunSaveUiState(),
  });
  saveRunState(payload);
}

let _runSaveTimer = null;
function scheduleRunSave() {
  if (_runSaveTimer) clearTimeout(_runSaveTimer);
  _runSaveTimer = setTimeout(() => {
    _runSaveTimer = null;
    persistRunSaveNow();
  }, 350);
}

function restoreRunUiState(data) {
  hideAllTransientOverlays();
  hideOverlay();

  if (data.screen === "victory" && data.persistedEndRun) {
    setScreen("victory");
    showEndRunScreen(data.persistedEndRun);
    return;
  }

  setScreen(data.screen);

  if (data.screen === "map" || data.ui?.mapOpen) {
    renderMapChoices();
    showMapOverlay();
    return;
  }

  if (data.screen === "shop" || data.ui?.shopOpen) {
    renderShopOffers();
    showShopOverlay();
    return;
  }

  if (data.screen === "draft" || data.ui?.draftOpen) {
    if (data.draftCardIds?.length) {
      game.draft.activeChoices = data.draftCardIds
        .map((id) => CARD_LIBRARY.find((c) => c.id === id))
        .filter(Boolean);
      renderDraftChoices();
    }
    showDraftOverlay();
    return;
  }

  if (data.screen === "event" || data.ui?.eventOpen) {
    if (game.pendingEvent && renderPendingEventOverlay()) return;
  }

  if (data.screen === "nodeResult" || data.ui?.nodeResultOpen) {
    if (data.persistedNodeResult) {
      showNodeResult(data.persistedNodeResult.title, data.persistedNodeResult.text);
    }
    return;
  }

  if (data.screen === "crossroads" || data.ui?.crossroadsOpen) {
    showCrossroadsOverlayFromState();
    return;
  }

  if (data.screen === "collector" || data.ui?.collectorOpen) {
    renderCollectorChoices();
    showCollectorOverlay();
    return;
  }

  if (data.screen === "towerDraft" || data.ui?.towerDraftOpen) {
    openTowerDraftOverlay();
    return;
  }

  if (data.screen === "mutation" || data.ui?.mutationOpen) {
    openMutationOverlay();
    return;
  }

  if (data.screen === "playing" || data.screen === "paused") {
    renderTowerShopButtons();
    mapFlow.updateCombatObjectiveBanner();
    if (data.screen === "paused") {
      pauseBtn.textContent = "Reprendre";
    }
  }
}

function restoreRunFromSave() {
  const data = loadRunState();
  if (!data) {
    showMessage("Aucune sauvegarde trouvée.", "warn");
    renderTitleResumePanel();
    return false;
  }

  const layoutIdx = Math.min((data.spire?.spireNumber || 1) - 1, SPIRE_LAYOUTS.length - 1);
  applySpireLayout(SPIRE_LAYOUTS[layoutIdx]);

  game.lives = data.lives;
  game.maxLives = data.maxLives;
  game.gold = data.gold;
  game.score = data.score;
  game.speedMultiplier = data.speedMultiplier ?? 1;
  game.waveActive = data.waveActive;
  game.waveCount = data.waveCount ?? 0;
  game.wavePaused = data.wavePaused ?? false;
  game.spawnTimer = data.spawnTimer ?? 0;
  game.spawnQueue = [...(data.spawnQueue || [])];
  game.enemyIdInc = data.enemyIdInc ?? 1;
  game.spawnPathInc = data.spawnPathInc ?? 0;
  game.towerIdInc = data.towerIdInc ?? 1;
  game.selectedTowerType = data.selectedTowerType ?? null;
  game.selectedTowerId = data.selectedTowerId ?? null;
  game.spire = { ...game.spire, ...data.spire };
  game.run = { ...data.run };
  game.run._rng = createSeededRng(data.run.seed || generateShareableSeed());
  if (data.run._rngState != null) game.run._rng.setState(data.run._rngState);
  game.deck = { picked: [...(data.deck?.picked || [])] };
  game.relics = { picked: [...(data.relics?.picked || [])] };
  game.towerDeck = [...(data.towerDeck || [])];
  game.collector = { ...game.collector, ...data.collector };
  game.modifiers = { ...data.modifiers };
  game.deckSynergy = data.deckSynergy || { active: [], mods: {} };
  game.encounter = { ...game.encounter, ...data.encounter };
  game.skills = data.skills;
  game.collectorUltimate = data.collectorUltimate || { usedThisSpire: false };
  game.bossCardPhaseDone = data.bossCardPhaseDone ?? false;
  game.bossTempWave = data.bossTempWave;
  game.waveModifier = data.waveModifier;
  game.pendingWaveModifier = data.pendingWaveModifier;
  game.nodeObjective = data.nodeObjective;
  game.waveStats = data.waveStats;
  game.runStats = data.runStats;
  game.draft.activeChoices = (data.draftCardIds || [])
    .map((id) => CARD_LIBRARY.find((c) => c.id === id))
    .filter(Boolean);
  game.shop.offers = data.shopOffers || [];
  game.pendingEvent = data.pendingEventId
    ? EVENT_LIBRARY.find((e) => e.id === data.pendingEventId) || null
    : null;
  game._persistedEndRunScreen = data.persistedEndRun || null;
  game._persistedNodeResult = data.persistedNodeResult || null;
  game.projectiles = [];
  game.particles = [];
  game.floatTexts = [];

  if (data.dailyId && DAILY_CHALLENGES.length) {
    game.daily = DAILY_CHALLENGES.find((d) => d.id === data.dailyId) || game.daily;
  }

  game.towers = [];
  pads.forEach((pad) => { pad.occupiedBy = null; });
  for (const saved of data.towers || []) {
    const pad = pads[saved.padIndex];
    const type = towerTypes[saved.typeKey];
    if (!pad || !type) continue;
    const tower = createTowerFromType(saved.typeKey, type, pad, game.towerIdInc++);
    tower.level = saved.level;
    tower.investedGold = saved.investedGold;
    tower.rageStacks = saved.rageStacks || 0;
    tower.damage = saved.damage;
    tower.range = saved.range;
    tower.fireRate = saved.fireRate;
    tower.projectileSpeed = saved.projectileSpeed;
    tower.cooldown = saved.cooldown ?? tower.cooldown;
    pad.occupiedBy = tower.id;
    game.towers.push(tower);
  }

  game.enemies = (data.enemies || []).map((e) => ({ ...e }));
  game.enemyById = new Map(game.enemies.map((e) => [e.id, e]));

  const biome = BIOMES.find((b) => b.id === data.biomeId) || getBiomeForFloor(game.spire.floor);
  game.biome = biome;
  backgroundGradient = null;
  initWorldArt();
  updateBiomeUiTheme();

  loadSpeedPreference();
  renderDeckList();
  renderRelicList();
  renderSynergyList();
  renderBestiaryList();
  renderCollectorPanel();
  updateSkillsUI();
  updateHud();
  restoreRunUiState(data);
  updateRunMusic();
  showMessage("Run reprise la ou tu t'etais arrete.", "normal");
  scheduleRunSave();
  return true;
}

function resumeRunFromSave() {
  if (game.screen !== "title") return;
  ensureAudioContext();
  leaveTitleScreenForResume();
  if (!restoreRunFromSave()) {
    setScreen("title");
  }
}

function leaveTitleScreenForResume() {
  if (game.screen !== "title") return;
  titleInputWrap?.classList.add("hidden");
  titleDailyPanel?.classList.add("hidden");
  titleResumePanel?.classList.add("hidden");
  setScreen("menu");
}

function confirmAbandonRunSave() {
  if (!hasRunSave()) return true;
  return window.confirm(
    "Une run est deja sauvegardee. L'abandonner et en commencer une nouvelle ?",
  );
}

function abandonRunSaveAndStartFresh() {
  clearRunSave();
  renderTitleResumePanel();
}

function updateTitleVersionLabel() {
  if (!titleVersionEl) return;
  const version = META_CONFIG?.gameVersion || "beta";
  const content = META_CONFIG?.contentVersion ? ` · contenu ${META_CONFIG.contentVersion}` : "";
  titleVersionEl.textContent = `Build ${version}${content}`;
}

function updateTitleDailyPanel() {
  if (!titleDailyPanel) return;
  const showCenterDaily = game.screen === "title" && game.daily?.name && isPhoneViewport();
  if (!showCenterDaily) {
    titleDailyPanel.classList.add("hidden");
    return;
  }
  titleDailyPanel.classList.remove("hidden");
  titleDailyPanel.classList.toggle("is-complete", isDailyCompletedToday());
  if (titleDailyNameEl) titleDailyNameEl.textContent = game.daily.name;
  if (titleDailyDescEl) titleDailyDescEl.textContent = game.daily.desc;
  if (titleDailyRewardEl) {
    titleDailyRewardEl.textContent =
      `Bonus : +${DAILY_BONUS_SCORE} score à la première run validée (étage 5+, Spire 2+ ou victoire).`;
  }
  if (titleDailyStatusEl) {
    const done = isDailyCompletedToday();
    titleDailyStatusEl.textContent = done
      ? "✓ Défi complété aujourd'hui — bonus déjà obtenu."
      : "À toi de jouer — le défi s'applique dès ta prochaine run.";
    titleDailyStatusEl.classList.toggle("is-pending", !done);
  }
}

function applyDailyChallengeForRun() {
  const challenge = pickDailyChallenge(DAILY_CHALLENGES);
  applyDailyChallenge(game, challenge);
  updateDailyChallengeBanner();
  updateTitleDailyPanel();
}

function applyRunEndDailyBonus() {
  const bonus = tryApplyDailyCompletionBonus(game);
  if (bonus > 0) {
    gainScore(bonus);
    updateDailyChallengeBanner();
    updateTitleDailyPanel();
    return bonus;
  }
  return 0;
}

function loadSpeedPreference() {
  const saved = localStorage.getItem(SPEED_PREF_KEY);
  if (saved === "2") {
    game.speedMultiplier = 2;
    if (speedBtn) speedBtn.textContent = "x2";
  }
}

function saveSpeedPreference() {
  localStorage.setItem(SPEED_PREF_KEY, String(game.speedMultiplier));
}

function renderRelicList() {
  if (game.relics.picked.length === 0) {
    relicListEl.innerHTML = "<span class='deck-empty'>Aucune relique pour l'instant.</span>";
    updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, 0);
    return;
  }
  const items = game.relics.picked.map((id) => {
    const relic = RELIC_LIBRARY.find((r) => r.id === id);
    const label = relic ? relic.name : id;
    const tooltip = relic ? `Relique - ${relic.desc}` : "Relique inconnue";
    return `<span class="deck-chip relic ${getRelicTextureClass(id)}" data-relic-id="${escapeHtml(id)}" data-tooltip="${escapeHtml(tooltip)}"><span class="relic-glyph" aria-hidden="true"></span>${label}</span>`;
  });
  relicListEl.innerHTML = items.join("");
  updateRunDrawerBadge(runDrawerBadgeEl, game.deck.picked.length, game.relics.picked.length);
  bindFloatingDeckTooltips(relicListEl);
}

function getSelectedCollector() {
  return COLLECTOR_LIBRARY.find((collector) => collector.id === game.collector.selectedId) || null;
}

function getCollectorUltimateInfo(collector) {
  if (!collector?.ultimateId && !collector?.ultimateName && !collector?.ultimateDesc) return null;
  const name = collector.ultimateName || "Ultime";
  const desc = collector.ultimateDesc || "1× par Spire.";
  return { name, desc };
}

/** Sous-titre du bouton ultime (barre d'action) — aligne avec le panneau Collectionneur. */
function formatUltimateSkillHint(ult, ready) {
  if (!ready) return "1× / Spire · Utilise";
  if (!ult?.desc) return "1× / Spire · Pret";
  return ult.desc.replace(/^1×\s*par\s*Spire\s*:\s*/i, "").trim() || ult.desc;
}

function applyCollectorUltimateToUi(collector) {
  const ult = collector ? getCollectorUltimateInfo(collector) : null;
  if (collectorUltimateBlockEl) {
    collectorUltimateBlockEl.classList.toggle("hidden", !ult);
  }
  if (ult) {
    if (collectorUltimateNameEl) collectorUltimateNameEl.textContent = ult.name;
    if (collectorUltimateDescEl) collectorUltimateDescEl.textContent = ult.desc;
  }
  if (skillUltimateLabelEl) {
    skillUltimateLabelEl.textContent = ult?.name || "Ultime";
  }
  if (skillUltimateBtn) {
    skillUltimateBtn.title = ult
      ? `${ult.name} — ${ult.desc} (touche U)`
      : "Ultime du collectionneur (1× par Spire, touche U)";
  }
}

function renderCollectorPanel() {
  const collector = getSelectedCollector();
  if (!collector) {
    collectorPanel.classList.add("hidden");
    applyCollectorUltimateToUi(null);
    return;
  }
  collectorPanel.classList.remove("hidden");
  collectorNameEl.textContent = `${collector.name} - ${collector.title}`;
  collectorPowerEl.textContent = collector.power;
  applyCollectorUltimateToUi(collector);
}

function renderCollectorPowerLines(power) {
  const splitAt = power.indexOf(". ");
  if (splitAt === -1) {
    return `<span class="collector-power-line">${escapeHtml(power)}</span>`;
  }
  const first = power.slice(0, splitAt + 1);
  const second = power.slice(splitAt + 2);
  return `<span class="collector-power-line">${escapeHtml(first)}</span>`
    + `<span class="collector-power-line">${escapeHtml(second)}</span>`;
}

function renderCollectorChoices() {
  collectorChoicesEl.innerHTML = COLLECTOR_LIBRARY.map((collector) => {
    const ult = getCollectorUltimateInfo(collector);
    const ultimateBlock = ult
      ? `<span class="detail collector-ultimate-pick">
          <span class="collector-ultimate-pick-label">Ultime · ${escapeHtml(ult.name)}</span>
          <span class="collector-ultimate-pick-desc">${escapeHtml(ult.desc)}</span>
        </span>`
      : "";
    const portraitClass = collector.portrait ? " collector-choice--portrait" : "";
    const portraitStyle = collector.portrait
      ? ` style="--collector-portrait: ${getCollectorPortraitLayers(collector)}"`
      : "";
    return `
      <button class="draft-choice collector-choice${portraitClass}" data-collector-id="${collector.id}" type="button"
        title="${escapeHtml(ult ? `${ult.name} — ${ult.desc}` : collector.power)}"${portraitStyle}>
        <div class="collector-choice-body">
          <h3>${escapeHtml(collector.name)}</h3>
          <p class="collector-choice-title">${escapeHtml(collector.title)}</p>
          <span class="detail collector-power">${renderCollectorPowerLines(collector.power)}</span>
          ${ultimateBlock}
          <span class="tag collector-flavor">${escapeHtml(collector.flavor)}</span>
        </div>
      </button>
    `;
  }).join("");
}

function openCollectorSelection() {
  if (!confirmAbandonRunSave()) return;
  abandonRunSaveAndStartFresh();
  resetRunState();
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.lives = game.maxLives;
  game.run.mutationId = null;
  game.towerDeck = [];
  hideOverlay();
  renderCollectorChoices();
  renderTowerShopButtons();
  setScreen("collector");
  showCollectorOverlay();
  showMessage("Choisis ton Collectionneur pour cette run.", "normal");
  requestAnimationFrame(() => onboarding?.startIfNeeded("collector"));
}

// ─── TOWER DRAFT ─────────────────────────────────────────────────────────────

const TOWER_FAMILIES = [
  { key: "snapper", label: "Dionaea muscipula" },
  { key: "spitter", label: "Sarracenia" },
  { key: "thorn", label: "Drosera" },
];

const TOWER_RARITY_ORDER = { Commune: 0, Rare: 1, Epique: 2 };
const TOWER_FAMILY_BASE_ID = { snapper: "snapper", spitter: "spitter", thorn: "thorn" };

function sortTowerVariantsForDraft(a, b) {
  const rarityDiff = (TOWER_RARITY_ORDER[a.rarity] ?? 9) - (TOWER_RARITY_ORDER[b.rarity] ?? 9);
  if (rarityDiff !== 0) return rarityDiff;
  if (a.id === TOWER_FAMILY_BASE_ID[a.family]) return -1;
  if (b.id === TOWER_FAMILY_BASE_ID[b.family]) return 1;
  return a.name.localeCompare(b.name, "fr");
}

/** Libellés barre d'action avant draft des 3 variantes. */
const TOWER_FAMILY_BAR_SLOTS = [
  { family: "snapper", pickTitle: "Choisis ta Dionaea", shortLabel: "Dionaea" },
  { family: "spitter", pickTitle: "Choisis ton Sarracenia", shortLabel: "Sarracenia" },
  { family: "thorn", pickTitle: "Choisis ton Drosera", shortLabel: "Drosera" },
];

function isTowerDeckDrafted() {
  if (!game.towerDeck || game.towerDeck.length !== 3) return false;
  const families = new Set();
  for (const id of game.towerDeck) {
    const type = towerTypes[id];
    if (!type) return false;
    families.add(type.family);
  }
  return families.size === 3;
}

function getTowerDeckVariantForFamily(family) {
  return game.towerDeck.find((id) => towerTypes[id]?.family === family) || null;
}

function openTowerDraftOverlay() {
  game.towerDeck = [];
  renderTowerShopButtons();
  hideCollectorOverlay();
  renderTowerDraftGrid();
  towerDraftCountEl.textContent = "0 / 3 sélectionnées";
  towerDraftConfirmBtn.disabled = true;
  towerDraftOverlayEl.classList.remove("hidden");
  setScreen("towerDraft");
  showMessage("Compose ton deck : choisis 3 plantes pour cette run.", "normal");
  requestAnimationFrame(() => onboarding?.startIfNeeded("towerDraft"));
}

function hideTowerDraftOverlay() {
  towerDraftOverlayEl.classList.add("hidden");
}

const TOWER_RARITY_CLASS = { Commune: "commune", Rare: "rare", Epique: "epique" };

function getTowerRarityClass(rarity) {
  return TOWER_RARITY_CLASS[rarity] || "commune";
}

function getCardTextureClass(card) {
  const classes = [`card-rarity-${getTowerRarityClass(card?.rarity || "Commune")}`];
  if (card?.towerFamily) classes.push(`card-family-${card.towerFamily}`);
  if (card?.towerCard) {
    const tower = towerTypes[card.towerCard];
    if (tower?.family) classes.push(`card-family-${tower.family}`);
    classes.push("card-specific");
  }
  if (!card?.towerFamily && !card?.towerCard) classes.push("card-global");
  return classes.join(" ");
}

function getRelicTextureClass(relicId) {
  if (/sun|honey|amber/.test(relicId)) return "relic-solar";
  if (/venom|spore|moss/.test(relicId)) return "relic-botanical";
  if (/bark|root|thorn|fang/.test(relicId)) return "relic-organic";
  if (/night|cursed/.test(relicId)) return "relic-mystic";
  return "relic-ancient";
}

function setTowerBtnRarityBand(btn, rarity) {
  btn.classList.remove("tower-btn--commune", "tower-btn--rare", "tower-btn--epique");
  if (rarity) btn.classList.add(`tower-btn--${getTowerRarityClass(rarity)}`);
}

function setTowerBtnPortrait(btn, variantId) {
  btn.classList.remove("tower-btn--portrait", "tower-btn--photo");
  btn.style.removeProperty("--tower-portrait");
  if (!variantId) return;
  const portrait = getTowerPortraitPath(variantId);
  btn.classList.add("tower-btn--portrait");
  if (isTowerPhotoPortrait(portrait)) btn.classList.add("tower-btn--photo");
  btn.style.setProperty("--tower-portrait", getTowerPortraitLayers(variantId));
}

function renderTowerDraftGrid() {
  const RARITY_LABELS = { Commune: "Commune", Rare: "Rare", Epique: "Épique" };
  towerDraftGridEl.innerHTML = TOWER_FAMILIES.map(({ key, label }) => {
    // Object.entries pour avoir la clé réelle (ex: "dionaea_b52") comme data-variant-id
    const variants = Object.entries(towerTypes)
      .filter(([, v]) => v.family === key && v.rarity)
      .map(([id, v]) => ({ id, ...v }))
      .sort(sortTowerVariantsForDraft);
    const cards = variants.map((v) => {
      const rarityClass = v.rarity ? v.rarity.toLowerCase() : "commune";
      const portrait = getTowerPortraitPath(v.id);
      const photoClass = isTowerPhotoPortrait(portrait) ? " tower-variant-card--photo" : "";
      return `<button class="tower-variant-card tower-variant-card--portrait${photoClass} rarity-${rarityClass}" data-variant-id="${v.id}"
        style="--tower-portrait: ${getTowerPortraitLayers(v.id)}">
        <div class="tower-variant-body">
          <span class="tvc-name">${v.name}</span>
          <span class="tvc-rarity">${RARITY_LABELS[v.rarity] || v.rarity}</span>
          <p class="tvc-desc">${v.desc}</p>
          <small class="tvc-passive">⚡ ${v.passiveDesc}</small>
          <div class="tvc-stats">
            <span>⚔ ${v.damage}</span>
            <span>🎯 ${v.range}</span>
            <span>⏱ ${v.fireRate.toFixed(1)}/s</span>
            <span>☀ ${v.cost}</span>
          </div>
        </div>
      </button>`;
    }).join("");
    return `<div class="tower-family-col"><h3>${label}</h3><div class="tower-family-cards">${cards}</div></div>`;
  }).join("");
}

function renderTowerShopButtons() {
  towerButtons.forEach((btn) => {
    const family = btn.dataset.family || btn.dataset.tower;
    const slot = TOWER_FAMILY_BAR_SLOTS.find((s) => s.family === family);
    if (!slot) {
      btn.style.display = "none";
      return;
    }
    btn.style.display = "";

    const variantId = getTowerDeckVariantForFamily(family);
    const type = variantId ? towerTypes[variantId] : null;
    if (!type) {
      btn.dataset.tower = family;
      setTowerBtnRarityBand(btn, null);
      setTowerBtnPortrait(btn, null);
      btn.classList.remove("has-tooltip", "active");
      btn.removeAttribute("data-tooltip");
      const span = btn.querySelector("span");
      const small = btn.querySelector("small");
      if (span) span.textContent = slot.pickTitle;
      btn.dataset.shortLabel = slot.shortLabel;
      if (small) small.textContent = "";
      return;
    }
    btn.dataset.tower = variantId;
    btn.dataset.shortLabel = slot.shortLabel;
    setTowerBtnRarityBand(btn, type.rarity);
    setTowerBtnPortrait(btn, variantId);
    const span = btn.querySelector("span");
    const small = btn.querySelector("small");
    if (span) {
      span.textContent = isTouchLayout()
        ? (type.name.split(/[\s(]/)[0] || slot.shortLabel)
        : type.name;
    }
    btn.dataset.shortLabel = slot.shortLabel;
    const passif = type.passiveDesc && !type.passiveDesc.startsWith("Tour de base") ? ` · ${type.passiveDesc}` : "";
    if (small) small.textContent = `${type.cost}☀  ${type.desc || ""}${passif}`;
  });
  const tooltipButtons = towerButtons.filter((btn) => {
    const family = btn.dataset.family || btn.dataset.tower;
    return Boolean(getTowerDeckVariantForFamily(family));
  });
  if (tooltipButtons.length) bindSmartTowerTooltips(tooltipButtons, towerTypes, TOOLTIPS_CONFIG);
  bindTowerDockHints(actionTowersEl);
  requestAnimationFrame(() => updateViewport(game.screen));
}

// ─────────────────────────────────────────────────────────────────────────────

function applyCollectorStartBonus() {
  const collector = getSelectedCollector();
  if (!collector) return;

  if (collector.id === "herbier") {
    const b = COLLECTOR_BONUSES.herbier;
    game.modifiers.snapperDamage *= b.snapperDamage;
    game.modifiers.rewardMult *= b.rewardMult;
    return;
  }

  if (collector.id === "distiller") {
    const b = COLLECTOR_BONUSES.distiller;
    game.modifiers.spitterDamage *= b.spitterDamage;
    if (b.skillExtraUsesPerWave) {
      game.modifiers.skillExtraUsesPerWave += b.skillExtraUsesPerWave;
    }
    return;
  }

  if (collector.id === "gardien") {
    const b = COLLECTOR_BONUSES.gardien;
    game.modifiers.thornDamage *= b.thornDamage;
    game.modifiers.slowPotency = b.slowPotency || 1;
    game.modifiers.snareSlowFactorMult = b.snareSlowFactorMult || 1;
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pickFrom(list, fallback) {
  if (!Array.isArray(list) || list.length === 0) return fallback;
  return list[Math.floor(Math.random() * list.length)];
}

function getBiomeDecorPalette(biome) {
  return BIOME_DECOR_PALETTES[biome?.id] || BIOME_DECOR_PALETTES.greenhouse;
}

function refreshEnemyLookup() {
  game.enemyById.clear();
  for (const enemy of game.enemies) {
    game.enemyById.set(enemy.id, enemy);
  }
}

function getEnemyById(id) {
  return game.enemyById.get(id) || null;
}

function getTowerById(id) {
  return game.towers.find((tower) => tower.id === id) || null;
}

function getTowerRange(tower, { rangeOverride } = {}) {
  return getEffectiveTowerRange(tower, { game, rangeOverride });
}

function getTowerTypePreviewRange(typeKey) {
  return getTowerTypePreviewRangeModel(typeKey, { game, towerTypes });
}

function getTowerUpgradePreviewRange(tower) {
  return getTowerUpgradePreviewRangeModel(tower, { game });
}

function drawPlacementRangePreviews() {
  drawPlacementRangePreview(ctx, {
    game,
    getTowerTypePreviewRange,
    isTouchLayout,
  });
}

function setScreen(screen) {
  game.screen = screen;
  if (typeof document !== "undefined") {
    document.body.dataset.screen = screen;
    updateViewport(screen);
    if (screen === "title") {
      document.body.dataset.biome = "greenhouse";
    } else {
      updateBiomeUiTheme();
    }
  }
  mobileShell?.closeRunDrawer();
  const gameplay = screen === "playing" || screen === "paused";
  if (gameplay) collapseHudForCombat(hudCollapse);
  else if (screen === "map" || screen === "title") hudCollapse?.refresh?.();
  startWaveBtn.disabled = !gameplay;
  speedBtn.disabled = !gameplay;
  pauseBtn.disabled = !gameplay;
  skillBoostBtn.disabled = !gameplay;
  skillSnareBtn.disabled = !gameplay;
  if (skillUltimateBtn) skillUltimateBtn.disabled = !gameplay;
  upgradeBtn.disabled = !gameplay;
  sellBtn.disabled = !gameplay;
  if (screen === "title") {
    hideOverlay();
    updateTitleDailyPanel();
    renderTitleResumePanel();
    updateTitleVersionLabel();

    // Affiche et prépare le champ pseudo
    if (titleInputWrap) {
      titleInputWrap.classList.remove("hidden");
      // Relance l'animation CSS à chaque passage sur l'écran titre
      titleInputWrap.style.animation = "none";
      void titleInputWrap.offsetHeight;
      titleInputWrap.style.animation = "";
    }
    if (playerNameInput) {
      const saved = localStorage.getItem(PLAYER_NAME_KEY);
      playerNameInput.value = saved || "";
      if (titlePlayBtn) titlePlayBtn.disabled = !playerNameInput.value.trim();
    }

    // Si l'AudioContext est déjà débloqué (retour depuis une partie),
    // démarre la musique automatiquement sans interaction.
    requestAnimationFrame(() => {
      if (game.screen === "title" && audio.ctx && audio.ctx.state === "running") {
        tryStartTitleMusic();
      }
    });
  } else {
    updateTitleDailyPanel();
    updateRunMusic();
    if (shouldPersistRunScreen(screen)) scheduleRunSave();
  }
}

function getTowerHudAnchor(tower) {
  if (!canvasZoneEl || !tower) return null;
  const canvasRect = canvas.getBoundingClientRect();
  const zoneRect = canvasZoneEl.getBoundingClientRect();
  if (!canvasRect.width || !canvasRect.height) return null;
  return {
    x: canvasRect.left - zoneRect.left + (tower.x / canvas.width) * canvasRect.width,
    y: canvasRect.top - zoneRect.top + (tower.y / canvas.height) * canvasRect.height,
    zoneW: zoneRect.width,
    zoneH: zoneRect.height,
  };
}

function placeTowerFloatPanel(anchor) {
  if (!towerFloatPanel) return;
  towerFloatPanel.style.visibility = "hidden";
  towerFloatPanel.style.left = "0";
  towerFloatPanel.style.top = "0";

  const pw = towerFloatPanel.offsetWidth;
  const ph = towerFloatPanel.offsetHeight;
  const combatDock = document.querySelector(".combat-dock");
  const dockFixed = combatDock && getComputedStyle(combatDock).position === "fixed";
  const dockReserve =
    dockFixed && isTouchLayout() && (game.screen === "playing" || game.screen === "paused")
      ? Number.parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--dock-height"),
          10
        ) || 0
      : 0;
  const x = Math.max(pw / 2 + 8, Math.min(anchor.zoneW - pw / 2 - 8, anchor.x));
  let y = anchor.y + (isTouchLayout() ? 14 : 22);
  if (y + ph > anchor.zoneH - 8 - dockReserve) {
    y = Math.max(8, anchor.zoneH - ph - 8 - dockReserve);
  }

  towerFloatPanel.style.left = `${Math.round(x)}px`;
  towerFloatPanel.style.top = `${Math.round(y)}px`;
  towerFloatPanel.style.visibility = "";
}

let towerPanelCacheKey = "";

function updateTowerPanel() {
  if (!towerFloatHud) return;
  const tower = getTowerById(game.selectedTowerId);
  const canManageTower = game.screen === "playing" || game.screen === "paused";
  if (!tower || !canManageTower) {
    towerPanelCacheKey = "";
    towerFloatHud.classList.add("hidden");
    towerFloatHud.setAttribute("aria-hidden", "true");
    return;
  }

  const anchor = getTowerHudAnchor(tower);
  if (!anchor) {
    towerFloatHud.classList.add("hidden");
    return;
  }

  const nextCost = getUpgradeCost(tower);
  const refund = getTowerSellRefund(tower);
  const range = getTowerRange(tower).toFixed(0);
  const nextRange = getTowerUpgradePreviewRange(tower);
  const biome = game.biome || BIOMES[0];
  const eff = computeTowerEffectiveStats(tower, {
    game,
    towers: game.towers,
    biome,
    distanceFn: distance,
    towerTypes,
  });
  const dmg = Math.round(eff.damage);
  const cadence = eff.fireRate.toFixed(2);
  const dmgTitle = eff.critChance > 0.005
    ? `Dégâts effectifs (~${Math.round(eff.avgDamage)} moy. avec ${Math.round(eff.critChance * 100)}% crit)`
    : "Dégâts effectifs";
  const cadenceTitle = eff.creamsicleMult > 1.001
    ? `Cadence effective (aura Creamsicle +${Math.round((eff.creamsicleMult - 1) * 100)}%)`
    : eff.boostActive
      ? "Cadence effective (Engrais actif)"
      : "Cadence effective";
  const dmgBuffClass = eff.boostActive ? " tfc-stat--buffed" : "";
  const cadenceBuffClass = (eff.creamsicleMult > 1.001 || eff.boostActive) ? " tfc-stat--buffed" : "";
  const canAffordUpgrade = game.gold >= nextCost;

  towerFloatHud.classList.remove("hidden");
  towerFloatHud.setAttribute("aria-hidden", "false");

  const passiveText = getTowerPassiveDescription(tower, game, towerTypes);
  const fingerprint = getTowerTooltipFingerprint(tower, game, {
    eff,
    passiveText,
    range,
    nextRange: nextRange?.toFixed(0) ?? "",
    gold: game.gold,
  });
  const contentChanged = fingerprint !== towerPanelCacheKey;
  towerPanelCacheKey = fingerprint;

  const passiveLine = passiveText
    && !passiveText.startsWith("Tour de base")
    && passiveText !== "Aucun passif — puissance brute"
    ? `<p class="tfc-passive">⚡ ${escapeHtml(passiveText)}</p>`
    : "";

  if (towerFloatTooltip && contentChanged) {
    towerFloatTooltip.innerHTML = `
      <div class="tfc-head">
        <strong class="tfc-title">${escapeHtml(tower.name)}</strong>
        <span class="tfc-level">Niv ${tower.level}</span>
      </div>
      <div class="tfc-stats">
        <span class="tfc-stat${dmgBuffClass}" title="${escapeHtml(dmgTitle)}">⚔ <b>${dmg}</b></span>
        <span class="tfc-stat" title="Portée effective">🎯 <b>${range}</b></span>
        <span class="tfc-stat${cadenceBuffClass}" title="${escapeHtml(cadenceTitle)}">⏱ <b>${cadence}/s</b></span>
      </div>
      ${passiveLine}
      <p class="tfc-upgrade-hint">${
        tower.level >= 3
          ? "Niveau maximum atteint."
          : `Amélioration → niv. ${tower.level + 1} : <b>${nextCost} ☀</b> · portée <b>${range}</b> → <b>${nextRange.toFixed(0)}</b>${canAffordUpgrade ? "" : " (fonds insuffisants)"}`
      }</p>
      <p class="tfc-sell-hint">Vente : <b>+${refund} ☀</b> (70 % de ${tower.investedGold} investis)</p>
    `;
  }

  placeTowerFloatPanel(anchor);
  updateMobileCombatZoom();

  upgradeBtn.textContent = tower.level >= 3 ? "Max" : `↑ ${nextCost}`;
  upgradeBtn.disabled = tower.level >= 3 || !canAffordUpgrade;
  upgradeBtn.title = tower.level >= 3
    ? "Niveau maximum"
    : `Améliorer au niv. ${tower.level + 1} (${nextCost} soleil)`;
  sellBtn.textContent = `Vendre +${refund}`;
  sellBtn.title = `Vendre : remboursement ${refund} soleil (70 % investi)`;
}

function updateSkillsUI() {
  const boost = game.skills.boost;
  const snare = game.skills.snare;
  const boostReady = canActivateSkill(boost);
  const snareReady = canActivateSkill(snare);
  skillBoostCdEl.textContent = boost.active > 0
    ? `Actif ${boost.active.toFixed(1)}s`
    : formatSkillChargeLabel(boost);
  skillSnareCdEl.textContent = snare.active > 0
    ? `Actif ${snare.active.toFixed(1)}s`
    : formatSkillChargeLabel(snare);
  skillBoostBtn.classList.toggle("cooldown", !boostReady && boost.active <= 0);
  skillSnareBtn.classList.toggle("cooldown", !snareReady && snare.active <= 0);
  if (game.screen === "playing") {
    skillBoostBtn.disabled = !boostReady;
    skillSnareBtn.disabled = !snareReady;
  }
  if (skillUltimateBtn && skillUltimateCdEl) {
    const ultReady = canUseCollectorUltimate(game);
    const ult = getCollectorUltimateInfo(getSelectedCollector());
    skillUltimateCdEl.textContent = formatUltimateSkillHint(ult, ultReady);
    skillUltimateBtn.classList.toggle("used", !ultReady);
    skillUltimateBtn.disabled = game.screen !== "playing";
    applyCollectorUltimateToUi(getSelectedCollector());
  }
}

function createTower(typeKey, pad) {
  const type = towerTypes[typeKey];
  return createTowerFromType(typeKey, type, pad, game.towerIdInc++);
}

function createEnemy(typeKey, pathId = 0) {
  const enemyType = enemyTypes[typeKey];
  return createEnemyFromType(typeKey, {
    id: game.enemyIdInc++,
    pathId,
    enemyType,
    pathsLength: paths.length,
    game,
    biomes: BIOMES,
    encounterConfig: ENCOUNTER_CONFIG,
    getBiomeForFloor,
    applyBossTempWaveToEnemy,
    applyCollectorMapSnareToEnemy,
  });
}

// Reset léger entre deux combats — conserve les tours et les emplacements.
function resetEncounterState() {
  game.waveActive = false;
  game.spawnTimer = 0;
  game.spawnQueue = [];
  game.spawnPathInc = 0;
  game.run.collectorMapSnareRemaining = 0;
  game.ultimateVfxList = [];
  game.towerUpgradeVfxList = [];
  game.enemies = [];
  game.projectiles = [];
  game.particles = [];
  game.floatTexts = [];
  game.selectedTowerId = null;
  game.enemyById.clear();
  towerFloatHud?.classList.add("hidden");
  mapFlow.updateCombatObjectiveBanner();
  startWaveBtn.textContent = "Lancer la vague";
}

// Reset complet (nouvelle run ou nouvelle Spire) — efface aussi tours et pads.
function resetEncounterBoard() {
  resetEncounterState();
  game.towers = [];
  game.selectedTowerType = null;
  pads.forEach((pad) => { pad.occupiedBy = null; });
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  renderTowerShopButtons();
}

function resetRunState() {
  // Remettre le chemin et les emplacements de la Spire 1
  applySpireLayout(SPIRE_LAYOUTS[0]);

  resetEncounterBoard();
  game.speedMultiplier = 1;
  game.enemyIdInc = 1;
  game.towerIdInc = 1;
  game.waveCount = 0;
  game.deck.picked = [];
  game.relics.picked = [];
  game.draft.activeChoices = [];
  game.shop.offers = [];
  game.spire.currentNodeType = null;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.spireNumber = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.crossroadsOfferCardId = null;
  game.spire.lanesMerged = false;
  game.spire.pathTrail = [];
  game.runStats = null;
  game.run = {
    mutationId: game.run?.mutationId ?? null,
    shopCardDiscount: 0,
    encounterSpeedMult: 1,
    encounterHpMult: 1,
    dailySpeedMult: 1,
    dailyHpMult: 1,
    dailyWaveClearMult: 1,
    nodeRetryAvailable: true,
  };
  game.deckSynergy = { active: [], mods: {} };
  game.waveModifier = null;
  game.nodeObjective = null;
  game.waveStats = null;
  game.wavePaused = false;
  game.bossCardPhaseDone = false;
  game.bossTempWave = null;
  resetCollectorUltimateForSpire(game);
  game.skills.boost.cooldown = SKILLS.boost.cooldown;
  game.skills.boost.duration = SKILLS.boost.duration;
  game.skills.snare.cooldown = SKILLS.snare.cooldown;
  game.skills.snare.duration = SKILLS.snare.duration;
  resetSkillsForNewWave(game);
  game.maxLives = 20;
  pauseBtn.textContent = "Pause";
  hideDraftOverlay();
  hideCollectorOverlay();
  hideMapOverlay();
  hideShopOverlay();
  resetModifiers();
  renderDeckList();
  renderRelicList();
  renderCollectorPanel();
}

function grantCard(card) {
  const before = getSynergyTierKeys(computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  ));
  card.effect();
  game.deck.picked.push(card.id);
  const afterState = computeDeckSynergyState(
    game.deck.picked,
    CARD_LIBRARY,
    DECK_SYNERGY_CONFIG,
    towerTypes
  );
  const newTiers = afterState.active.filter(
    (a) => !before.includes(`${a.familyId}:${a.tier?.minCards}`)
  );
  if (newTiers.length) {
    game.synergyFlash = { t: 0, families: newTiers.map((t) => t.familyId) };
    sfx?.synergy();
    showMessage(`Synergie active : ${newTiers.map((t) => t.label).join(", ")}!`, "normal");
  }
  renderDeckList();
}

function grantRelic(relic, opts = {}) {
  if (!relic) return;
  if (game.relics.picked.includes(relic.id)) return;
  relic.effect(opts);
  game.relics.picked.push(relic.id);
  renderRelicList();
  let msg = `Relique obtenue: ${relic.name}.`;
  if (opts.skipInstantHeal) {
    msg += " (Soin différé : des fuites ont été enregistrées sur cette vague.)";
  }
  showMessage(msg, "normal");
  createFloatText("RELIQUE!", canvas.width / 2 - 30, 86, "#ffe7b8");
  sfx?.relic?.();
}

function grantRandomRelic(opts = {}) {
  const available = RELIC_LIBRARY.filter((relic) => !game.relics.picked.includes(relic.id));
  if (available.length === 0) return;
  const relic = available[Math.floor(Math.random() * available.length)];
  grantRelic(relic, opts);
}

function pickRandomCardForReward() {
  const pool = getAvailableCardPool();
  if (pool.length > 0) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  const globals = CARD_LIBRARY.filter((card) => {
    if (card.towerCard || card.towerFamily) return false;
    return canAddCardToDeck(card, game.deck.picked);
  });
  if (globals.length > 0) {
    return globals[Math.floor(Math.random() * globals.length)];
  }
  return null;
}

function grantRandomCardSilently() {
  const card = pickRandomCardForReward();
  if (!card) return null;
  grantCard(card);
  return card;
}

function startNewRun() {
  clearRunSave();
  resetRunState();
  resetModifiers();
  configureRunMode(game, {
    mode: RUN_MODE_STANDARD,
    ascensionLevel: 1,
    seedInput: generateShareableSeed(),
  });
  initRunBestiary(game);
  beginRunStats(game);
  applyDailyChallengeForRun();
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.spire.map = buildSpireMap();
  game.spire.floor = 0;
  game.spire.lane = 1;
  resetCollectorUltimateForSpire(game);
  const mutation = MUTATION_LIBRARY.find((m) => m.id === game.run.mutationId);
  if (mutation) applyRunMutation(game, mutation);
  applyCollectorStartBonus();
  resetSkillsForNewWave(game);
  game.lives = game.maxLives;
  loadSpeedPreference();
  renderSynergyList();
  renderBestiaryList();
  const collector = getSelectedCollector();
  showMessage(
    `Run lancee (${formatRunModeLine(game)}) avec ${collector ? collector.name : "un Collectionneur"}: choisis ta route.`,
    "normal"
  );
  if (game.daily?.name && !isDailyCompletedToday()) {
    showMessage(`Défi actif : ${game.daily.name} — ${game.daily.desc}`, "warn");
  }

  hideOverlay();
  hideCollectorOverlay();
  hideTowerDraftOverlay();
  renderCollectorPanel();
  renderTowerShopButtons();
  sfx?.runStart?.();
  openMapForCurrentFloor();
  scheduleRunSave();

  if (_devJumpSpire && _devJumpSpire > 1) {
    const target = _devJumpSpire;
    _devJumpSpire = null;
    jumpToSpire(target);
  }
}

/** Saut direct vers une Spire (test / debug). */
function jumpToSpire(targetSpire) {
  const n = Math.max(1, Math.min(MAX_SPIRES, Math.floor(Number(targetSpire)) || 1));
  game.spire.spireNumber = n;
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.currentNodeType = null;

  const layoutIdx = Math.min(n - 1, SPIRE_LAYOUTS.length - 1);
  const layout = SPIRE_LAYOUTS[layoutIdx];
  applySpireLayout(layout);
  resetEncounterBoard();
  game.waveActive = false;
  game.spawnQueue = [];
  game.gold = getStartingGoldForSpire(n);
  game.biome = BIOMES[0];
  initWorldArt();
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  resetSkillsForNewWave(game);

  hideDraftOverlay();
  hideShopOverlay();
  hideNodeResult();
  nodeRetryOverlay?.classList.add("hidden");
  setScreen("playing");
  openMapForCurrentFloor();

  const routes = getLayoutRoutes(layout).length;
  showMessage(`[Test] Spire ${n}/${MAX_SPIRES} — ${layout.name} (${routes} voie(s)).`, "normal");
}

const getNodeLabel = mapFlow.getNodeLabel;
const getNodeDescription = mapFlow.getNodeDescription;
const isLaneReachable = mapFlow.isLaneReachable;
const renderMapChoices = () => mapFlow.renderMapChoices();
const onMapNodeChosen = (...args) => mapFlow.onMapNodeChosen(...args);
const buildSpireMap = () => mapFlow.buildSpireMap();

function renderBestiaryList() {
  if (!bestiaryListEl) return;
  const progress = loadBestiaryProgress();
  bestiaryListEl.innerHTML = renderBestiaryListHtml(
    enemyTypes,
    progress,
    game.run?.bestiaryDiscovered || []
  );
}

function openMutationOverlay() {
  const mutationChoices = MUTATION_LIBRARY.map(
    (m) => `
    <button class="draft-choice mutation-choice--mutation" data-mutation-id="${m.id}">
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <span class="tag">Mutation</span>
    </button>`
  ).join("");
  const noneChoice = `
    <button class="draft-choice mutation-choice--standard" data-mutation-id="none">
      <h3>Serre standard</h3>
      <p>Aucune mutation — run classique sans modificateur global.</p>
      <span class="tag">Classique</span>
    </button>`;
  mutationChoicesEl.innerHTML = mutationChoices + noneChoice;
  mutationOverlay.classList.remove("hidden");
  setScreen("mutation");
  requestAnimationFrame(() => onboarding?.startIfNeeded("mutation"));
}

function hideMutationOverlay() {
  mutationOverlay.classList.add("hidden");
}

function onMutationChosen(mutationId) {
  game.run.mutationId = mutationId === "none" ? null : mutationId;
  hideMutationOverlay();
  startNewRun();
}

function showCrossroadsOverlayFromState() {
  const gold = MAP_LANE_CONFIG?.crossroads?.goldReward ?? 85;
  const offerCard = game.spire.crossroadsOfferCardId
    ? CARD_LIBRARY.find((c) => c.id === game.spire.crossroadsOfferCardId)
    : null;

  const cardBody = offerCard
    ? `<p><strong>${escapeHtml(offerCard.name)}</strong> — ${escapeHtml(formatCardDesc(offerCard))}</p>`
    : `<p>Aucune carte compatible : +${gold} soleil a la place.</p>`;
  const cardTag = offerCard ? escapeHtml(offerCard.rarity) : "Secours";

  crossroadsChoicesEl.className = "draft-choices event-choices--pair";
  crossroadsChoicesEl.innerHTML = `
    <button class="draft-choice" data-crossroads-reward="gold">
      <h3>Reserve de nectar</h3>
      <p>+${gold} soleil immediatement.</p>
      <span class="tag">Soleil</span>
    </button>
    <button class="draft-choice" data-crossroads-reward="card">
      <h3>Mutation spontanee</h3>
      ${cardBody}
      <span class="tag">${cardTag}</span>
    </button>`;
  hideMapOverlay();
  crossroadsOverlay.classList.remove("hidden");
  setScreen("crossroads");
}

function openCrossroadsReward() {
  const offerCard = pickRandomCardForReward();
  game.spire.crossroadsOfferCardId = offerCard?.id ?? null;
  showCrossroadsOverlayFromState();
  tryContextHint("crossroads_first");
}

function hideCrossroadsOverlay() {
  crossroadsOverlay.classList.add("hidden");
}

function onCrossroadsRewardChosen(reward) {
  hideCrossroadsOverlay();
  const gold = MAP_LANE_CONFIG?.crossroads?.goldReward ?? 85;
  const offeredId = game.spire.crossroadsOfferCardId;
  game.spire.crossroadsOfferCardId = null;

  if (reward === "gold") {
    game.gold += gold;
    showMessage(`Carrefour : +${gold} soleil.`, "normal");
  } else {
    const card = offeredId ? CARD_LIBRARY.find((c) => c.id === offeredId) : null;
    if (card) {
      grantCard(card);
      renderDeckList();
      showMessage(`Carrefour : carte "${card.name}" ajoutee au deck.`, "normal");
    } else {
      game.gold += gold;
      showMessage(`Carrefour : pas de carte — +${gold} soleil.`, "normal");
    }
  }
  game.spire.lane = 1;
  game.spire.lanesMerged = true;
  advanceAfterCrossroads();
}

function advanceAfterCrossroads() {
  advanceToNextFloor();
}

function showWaveSummaryOverlay(stats, objectiveMessages, onContinue) {
  const towerNameById = (id) => {
    const t = getTowerById(Number(id));
    return t ? `${t.name} (niv.${t.level})` : null;
  };
  let html = formatWaveReportHtml(stats, towerNameById);
  if (game.waveModifier?.name) {
    html = `<p><strong>Modificateur :</strong> ${game.waveModifier.name} — ${game.waveModifier.desc}</p>${html}`;
  }
  if (objectiveMessages?.length) {
    html = `<ul class="wave-report-summary">${objectiveMessages.map((m) => `<li>${m}</li>`).join("")}</ul>${html}`;
  }
  waveSummaryBodyEl.innerHTML = html;
  _afterWaveSummaryCallback = onContinue;
  waveSummaryOverlay.classList.remove("hidden");
}

function hideWaveSummaryOverlay() {
  waveSummaryOverlay.classList.add("hidden");
  _afterWaveSummaryCallback = null;
}

function continueAfterWaveSummary() {
  const cb = _afterWaveSummaryCallback;
  hideWaveSummaryOverlay();
  if (cb) cb();
}

function openBossCardPick() {
  const pair = pickBossTempCardPair(BOSS_TEMP_CARD_LIBRARY);
  bossCardChoicesEl.innerHTML = pair
    .map(
      (c) => `
    <button class="draft-choice draft-choice--boss-card card-rarity-epique" data-boss-card-id="${c.id}" data-effect-id="${c.effectId}">
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="tag">1 vague</span>
    </button>`
    )
    .join("");
  game.wavePaused = true;
  bossCardOverlay.classList.remove("hidden");
  tryContextHint("boss_half_hp");
}

function hideBossCardOverlay() {
  bossCardOverlay.classList.add("hidden");
  game.wavePaused = false;
}

function onBossTempCardChosen(effectId) {
  game.bossTempWave = {};
  applyBossTempCardEffect(game, effectId);
  hideBossCardOverlay();
  game.enemies.forEach((e) => applyBossTempWaveToEnemy(e, game));
  showMessage("Carte d'urgence activee pour le reste de la vague.", "warn");
  sfx?.cardPick?.();
}

function maybeTriggerBossCardPhase(enemy) {
  if (enemy.typeKey !== "boss" || game.bossCardPhaseDone) return;
  if (enemy.hp / enemy.maxHp > 0.5) return;
  game.bossCardPhaseDone = true;
  openBossCardPick();
}

function activateCollectorUltimateSkill() {
  const collector = getSelectedCollector();
  const result = activateCollectorUltimate(game, collector, {
    createFloatText,
    canvas,
    emitParticles,
    triggerUltimateVfx: (ultimateId) =>
      triggerUltimateVfx(game, ultimateId, canvas, emitParticles),
  });
  if (result.ok && collector?.ultimateId === "herbier_burst") {
    game.gold += 120;
  }
  showMessage(result.message, result.ok ? "normal" : "warn");
  if (result.ok) {
    sfx?.ultimate?.(collector?.ultimateId);
  }
  updateSkillsUI();
}

/** Passe a l'etage suivant sur la carte (jamais victoire globale ici). */
function advanceToNextFloor() {
  if (game.spire.floor >= MAX_FLOORS - 1) return;
  game.spire.floor += 1;
  openMapForCurrentFloor();
}

function tryContextHint(hintId, ctx = {}) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => contextHints?.tryShow(hintId, ctx));
  });
}

function trySpireIntroHint() {
  const n = game.spire.spireNumber;
  if (game.spire.floor !== 0 || n < 2) return;
  const layout = SPIRE_LAYOUTS[Math.min(n - 1, SPIRE_LAYOUTS.length - 1)];
  const routes = getLayoutRoutes(layout).length;
  tryContextHint(`spire_${n}_intro`, {
    spireNumber: n,
    floor: 0,
    titleOverride: `Spire ${n}/${MAX_SPIRES} — ${layout.name}`,
    textOverride: `${layout.desc} · ${routes} voie(s). ${formatSpireThreatLine(n)}`,
  });
}

function openMapForCurrentFloor() {
  if (game.spire.floor >= MAX_FLOORS) return;
  applyBiomeForCurrentFloor();
  setScreen("map");
  hideDraftOverlay();
  hideCollectorOverlay();
  hideShopOverlay();
  hideNodeResult();
  renderMapChoices();
  showMapOverlay();
  requestAnimationFrame(() => {
    onboarding?.startIfNeeded("map");
    trySpireIntroHint();
  });
}

function openVictory() {
  runMusic.stop();
  hideAllTransientOverlays();
  touchRunProgress(game);
  markCampaignVictory();
  if (game.run.mode === RUN_MODE_ASCENSION) {
    markAscensionBeaten(game.run.ascensionLevel || 1);
  }
  setScreen("victory");
  const dailyBonus = applyRunEndDailyBonus();
  saveRunToLeaderboard();
  const copy = buildVictoryScreenCopy(game, {
    score: game.score,
    bestScore: game.bestScore,
    dailyBonus,
  });
  showEndRunScreen({
    outcome: "victory",
    title: copy.title,
    text: copy.text,
    buttonText: copy.buttonText,
    ascensionButtonText: copy.ascensionButtonText,
  });
  const endMsg = game.run.mode === RUN_MODE_ASCENSION
    ? `${getAscensionTorment(game.run.ascensionLevel || 1).name} termine.`
    : "Campagne terminee.";
  showMessage(endMsg, "normal");
  sfx?.victory?.();
}

function getNextAscensionLevel() {
  const current = game.run.mode === RUN_MODE_ASCENSION ? Number(game.run.ascensionLevel || 1) : 0;
  return Math.max(1, Math.min(5, Math.floor(current) + 1));
}

function continueCampaignAscension() {
  const nextLevel = getNextAscensionLevel();
  const startGold = getStartingGoldForSpire(1);
  const settlement = settleSpireGoldForNextSpire(game.gold, startGold, SPIRE_SURPLUS_GOLD_SCORE_RATE);

  hideOverlay();
  hideLeaderboard();
  hideAllTransientOverlays();
  contextHints?.hide();
  onboarding?.hide?.();
  towerFloatHud?.classList.add("hidden");

  saveRunModePreference(RUN_MODE_ASCENSION);
  saveAscensionLevel(nextLevel);

  game.run.encounterHpMult = 1;
  game.run.encounterSpeedMult = 1;
  configureRunMode(game, {
    mode: RUN_MODE_ASCENSION,
    ascensionLevel: nextLevel,
    seedInput: generateShareableSeed(),
  });
  applyTormentMaxLivesPenalty(game);

  game.spire.spireNumber = 1;
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;
  game.spire.currentNodeType = null;
  game.spire.crossroadsOfferCardId = null;
  game.spire.lanesMerged = false;
  game.spire.pathTrail = [];
  game.waveModifier = null;
  game.nodeObjective = null;
  game.waveStats = null;
  game.wavePaused = false;
  game.bossCardPhaseDone = false;
  game.bossTempWave = null;
  game.waveCount = 0;
  game.waveActive = false;
  game.spawnQueue = [];

  applySpireLayout(SPIRE_LAYOUTS[0]);
  resetEncounterBoard();
  game.gold = settlement.newGold;
  if (settlement.scoreGain > 0) gainScore(settlement.scoreGain);
  game.lives = game.maxLives;
  game.biome = BIOMES[0];
  backgroundGradient = null;
  initWorldArt();
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  resetSkillsForNewWave(game);
  beginRunStats(game);
  loadSpeedPreference();
  renderDeckList();
  renderRelicList();
  renderSynergyList();
  renderBestiaryList();
  renderCollectorPanel();
  renderTowerShopButtons();
  openMapForCurrentFloor();
  scheduleRunSave();
  runMusic.transitionToRun({
    biomeId: getBiomeForFloor(game.spire.floor)?.id || "greenhouse",
    spireNumber: game.spire.spireNumber,
  });

  const torment = getAscensionTorment(nextLevel);
  const goldNote = settlement.scoreGain > 0
    ? ` ${settlement.excessGold} soleil convertis en +${settlement.scoreGain} score.`
    : "";
  showMessage(
    `${torment.name} lance : Spire 1/${MAX_SPIRES}, deck conserve.${goldNote} ${torment.rules[0] || ""}`,
    "warn",
  );
  sfx?.spireStart?.();
}

function startNextSpire() {
  game.spire.spireNumber += 1;
  game.spire.floor = 0;
  game.spire.pendingSpireTransition = false;
  game.spire.pendingAdvanceAfterDraft = false;

  // Charger le layout de la nouvelle Spire
  const layoutIdx = Math.min(game.spire.spireNumber - 1, SPIRE_LAYOUTS.length - 1);
  const layout = SPIRE_LAYOUTS[layoutIdx];
  applySpireLayout(layout);

  // Reset complet du plateau (les tours repartent à zéro entre Spires)
  resetEncounterBoard();

  const startGold = getStartingGoldForSpire(game.spire.spireNumber);
  const priorGold = game.gold;
  const settlement = settleSpireGoldForNextSpire(priorGold, startGold, SPIRE_SURPLUS_GOLD_SCORE_RATE);
  game.gold = settlement.newGold;
  if (settlement.scoreGain > 0) {
    gainScore(settlement.scoreGain);
    createFloatText(
      `+${settlement.scoreGain} score`,
      canvas.width / 2 - 52,
      72,
      "#ffe7b8"
    );
  }

  // Régénérer le décor pour le nouveau terrain
  game.biome = BIOMES[0];
  initWorldArt();

  // Générer la carte de la nouvelle Spire
  game.spire.map = buildSpireMap();
  resetCollectorUltimateForSpire(game);
  // Ouvrir la carte
  openMapForCurrentFloor();

  const layout2 = SPIRE_LAYOUTS[layoutIdx];
  const routes = getLayoutRoutes(layout2).length;
  let economyNote = `Budget: ${startGold} soleil.`;
  if (settlement.excessGold > 0) {
    economyNote += ` ${settlement.excessGold} soleil convertis en +${settlement.scoreGain} score (x${SPIRE_SURPLUS_GOLD_SCORE_RATE}).`;
  } else if (priorGold < startGold) {
    economyNote += ` (tu avais ${priorGold} soleil, reinitialise au budget de depart).`;
  }
  showMessage(
    `Spire ${game.spire.spireNumber}/${MAX_SPIRES} : ${layout2.name} — ${routes} voie(s). ${economyNote}`,
    settlement.excessGold > 0 ? "normal" : "warn"
  );
  sfx?.spireStart?.();
}

function getDeckFamilies() {
  const families = new Set();
  for (const towerId of game.towerDeck) {
    const family = towerTypes[towerId]?.family;
    if (family) families.add(family);
  }
  return families;
}

function isCardRelevantForDeck(card) {
  if (card.towerCard && !game.towerDeck.includes(card.towerCard)) return false;
  if (card.towerFamily && !getDeckFamilies().has(card.towerFamily)) return false;
  return true;
}

function getAvailableCardPool() {
  return CARD_LIBRARY.filter((card) => {
    if (!isCardRelevantForDeck(card)) return false;
    return canAddCardToDeck(card, game.deck.picked);
  });
}

/** Texte carte : précise quelles tours du deck sont concernées (famille / variante). */
function formatCardDesc(card) {
  if (!card) return "";
  if (card.towerCard) {
    const tower = towerTypes[card.towerCard];
    if (tower) return `${card.desc} · ${tower.name}`;
    return card.desc;
  }
  if (card.towerFamily) {
    const inDeck = game.towerDeck
      .map((id) => towerTypes[id])
      .filter((t) => t && t.family === card.towerFamily);
    if (inDeck.length) {
      return `${card.desc} · ${inDeck.map((t) => t.name).join(", ")}`;
    }
  }
  return card.desc;
}

function pickCardsFromPool(pool, count) {
  const floorIdx = Math.min(game.spire.floor, MAX_FLOORS - 1);
  const picks = [];
  const available = pool.slice();

  const drawOne = (list) => {
    const weights = list.map((card) => {
      const table = CARD_RARITY_WEIGHTS[card.rarity] || CARD_RARITY_WEIGHTS.Commune;
      return table[floorIdx] || 1;
    });
    const total = weights.reduce((a, b) => a + b, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < list.length; i += 1) {
      roll -= weights[i];
      if (roll <= 0) return i;
    }
    return list.length - 1;
  };

  while (picks.length < count && available.length > 0) {
    const idx = drawOne(available);
    picks.push(available[idx]);
    available.splice(idx, 1);
  }
  return picks;
}

function getShopOffers() {
  const priceMult = getTormentShopPriceMult(game);
  const cardChoices = pickCardsFromPool(getAvailableCardPool(), 2);
  const offers = cardChoices.map((card, idx) => ({
    id: `card-${idx}-${card.id}`,
    type: "card",
    cardId: card.id,
    name: card.name,
    desc: formatCardDesc(card),
    price: Math.max(
      50,
      Math.round(
        ((card.rarity === "Epique" ? 165 : card.rarity === "Rare" ? 125 : 95)
          - getMutationShopDiscount(game))
        * priceMult,
      ),
    ),
    bought: false,
  }));

  const relicPool = RELIC_LIBRARY.filter((relic) => !game.relics.picked.includes(relic.id));
  if (relicPool.length > 0) {
    const relic = relicPool[Math.floor(Math.random() * relicPool.length)];
    offers.push({
      id: `relic-${relic.id}`,
      type: "relic",
      relicId: relic.id,
      name: relic.name,
      desc: relic.desc,
      price: Math.round(220 * priceMult),
      bought: false,
    });
  } else {
    offers.push({
      id: "heal-pack",
      type: "heal",
      name: "Pack de Nectar",
      desc: "Soigne 40% de la vie max.",
      price: Math.round(110 * priceMult),
      bought: false,
    });
  }

  return offers;
}

function renderShopOffers() {
  shopGoldLabel.textContent = `Soleil disponible: ${game.gold}`;
  shopChoicesEl.innerHTML = game.shop.offers
    .map((offer) => {
      const soldClass = offer.bought ? "sold disabled" : "";
      const affordClass = !offer.bought && game.gold < offer.price ? "unaffordable" : "";
      return `
      <button type="button" class="draft-choice shop-choice${soldClass ? ` ${soldClass}` : ""}${affordClass ? ` ${affordClass}` : ""}" data-offer-id="${offer.id}">
        <h3>${offer.name}</h3>
        <p>${offer.desc}</p>
        <span class="detail">${getShopOfferLabel(offer)}</span>
        <span class="price">${offer.bought ? "Achete" : `${offer.price} soleil`}</span>
      </button>
    `;
    })
    .join("");
}

function getShopOfferLabel(offer) {
  if (offer.type === "card") return "Carte ajoutee au deck";
  if (offer.type === "relic") return "Relique permanente";
  return "Soin immediat";
}

function openShopNode() {
  game.shop.offers = getShopOffers();
  setScreen("shop");
  showShopOverlay();
  renderShopOffers();
  showMessage("Boutique: choisis un achat ou quitte.", "normal");
  tryContextHint("shop_first");
}

function advanceAfterShop() {
  hideShopOverlay();
  advanceToNextFloor();
}

function buyShopOfferById(offerId) {
  const offer = game.shop.offers.find((item) => item.id === offerId);
  if (!offer || offer.bought) return;
  if (game.gold < offer.price) {
    showMessage("Pas assez de soleil pour cet achat.", "warn");
    return;
  }

  game.gold -= offer.price;
  offer.bought = true;

  if (offer.type === "card") {
    const card = CARD_LIBRARY.find((item) => item.id === offer.cardId);
    if (card) {
      grantCard(card);
      renderDeckList();
      showMessage(`Achat: carte ${card.name}.`, "normal");
    }
  } else if (offer.type === "relic") {
    const relic = RELIC_LIBRARY.find((item) => item.id === offer.relicId);
    grantRelic(relic);
  } else if (offer.type === "heal") {
    const heal = Math.round(game.maxLives * 0.4);
    game.lives = Math.min(game.maxLives, game.lives + heal);
    showMessage(`Achat: soin +${heal} vies.`, "normal");
  }

  sfx?.shopBuy?.();
  renderShopOffers();
}

function handleNonCombatNode(type) {
  let title = "";
  let text = "";

  if (type === "rest") {
    const collector = getSelectedCollector();
    const baseHeal = computeRestHeal(game.maxLives, collector ? collector.id : null);
    const finalHeal = Math.max(1, Math.round(baseHeal * getTormentRestHealMult(game)));
    game.lives = Math.min(game.maxLives, game.lives + finalHeal);
    title = "Repos";
    text = `Tu recuperes ${finalHeal} vies. Le repos ne donne pas de carte, mais permet de stabiliser une run difficile.`;
    showMessage(`Repos: +${finalHeal} vies.`, "normal");
    createFloatText(`+${finalHeal} PV`, canvas.width / 2 - 10, 90, "#d7ffd4");
    tryContextHint("rest_first");
  } else if (type === "shop") {
    openShopNode();
    return;
  } else if (type === "event") {
    openEventOverlay();
    return;
  }

  setScreen("nodeResult");
  hideMapOverlay();
  showNodeResult(title, text);
}

function renderPendingEventOverlay() {
  const event = game.pendingEvent;
  if (!event?.choices?.length) return false;
  eventOverlayTitle.textContent = event.title || "Evenement";
  eventOverlayDesc.textContent = event.desc || "";
  let eventChoicesClass = "draft-choices";
  if (event.layout === "cross") eventChoicesClass += " event-choices--cross";
  else if (event.choices.length === 2) eventChoicesClass += " event-choices--pair";
  eventChoicesEl.className = eventChoicesClass;
  eventChoicesEl.innerHTML = event.choices.map(
    (c) => {
      const slotClass = c.slot ? ` event-choice--${c.slot}` : "";
      return `
    <button class="draft-choice${slotClass}" data-event-choice-id="${c.id}">
      <h3>${escapeHtml(c.label)}</h3>
      <p>${escapeHtml(c.desc)}</p>
      <span class="tag">Choix</span>
    </button>`;
    }
  ).join("");
  hideMapOverlay();
  eventOverlay.classList.remove("hidden");
  setScreen("event");
  return true;
}

function openEventOverlay() {
  const laneTag = getLaneEventLaneTag(game.spire.lane, MAP_LANE_CONFIG);
  const uniqueBias = getLaneEventUniqueBias(game.spire.lane, MAP_LANE_CONFIG);
  const event = pickRandomEvent(EVENT_LIBRARY, getRunRng(game), {
    laneTag,
    uniqueBias,
  });
  if (!event?.choices?.length) {
    game.gold += EVENT_GOLD.nectar;
    hideMapOverlay();
    setScreen("nodeResult");
    showNodeResult("Event", `Reserve de nectar : +${EVENT_GOLD.nectar} soleil.`);
    return;
  }
  game.pendingEvent = event;
  renderPendingEventOverlay();
  tryContextHint("event_first");
}

function hideEventOverlay() {
  eventOverlay?.classList.add("hidden");
  game.pendingEvent = null;
}

function onEventChoiceChosen(choiceId) {
  const event = game.pendingEvent;
  const choice = event?.choices?.find((c) => c.id === choiceId);
  hideEventOverlay();
  hideMapOverlay();
  const result = applyEventChoiceEffect(choice, {
    game,
    gainScore,
    showMessage,
    grantCard,
    renderDeckList,
    pickRandomCardForReward,
    grantRandomRelic,
  });
  setScreen("nodeResult");
  showNodeResult(result.title, result.text);
}

function advanceAfterNodeResult() {
  hideNodeResult();
  advanceToNextFloor();
}

function advanceFromNodeResult() {
  if (getNodeResultAdvanceAction(game.spire.pendingSpireTransition) === "nextSpire") {
    startNextSpire();
    return;
  }
  advanceAfterNodeResult();
}

function getDraftChoices() {
  return pickCardsFromPool(getAvailableCardPool(), 3);
}

function renderDraftChoices() {
  draftChoicesEl.innerHTML = game.draft.activeChoices
    .map(
      (card) => `
      <button class="draft-choice draft-choice--card ${getCardTextureClass(card)}" data-card-id="${card.id}">
        <h3>${card.name}</h3>
        <p>${formatCardDesc(card)}</p>
        <span class="tag">${card.rarity}</span>
      </button>
    `
    )
    .join("");
}

function startDraftPhase() {
  game.draft.activeChoices = getDraftChoices();
  renderDraftChoices();
  setScreen("draft");
  showDraftOverlay();
  showMessage("Choisis une carte pour ton deck.", "normal");
  tryContextHint("draft_first");
}

function applyCardById(cardId) {
  const card = CARD_LIBRARY.find((c) => c.id === cardId);
  if (!card) return;
  grantCard(card);
  renderDeckList();
  hideDraftOverlay();
  game.draft.activeChoices = [];
  gainScore(90);
  sfx?.cardPick?.();
  showMessage(`Carte choisie: ${card.name}.`, "normal");

  if (game.spire.pendingAdvanceAfterDraft) {
    game.spire.pendingAdvanceAfterDraft = false;
    advanceToNextFloor();
    return;
  }

  setScreen("playing");
}

function generateEncounterQueue(type) {
  const queue = generateEncounterQueueByFloor({
    floor: game.spire.floor,
    nodeType: type,
    countBonus: game.encounter.countBonus,
    floorScaling: FLOOR_SCALING,
    spireNumber: game.spire.spireNumber,
    enemyDefs: enemyTypes,
    rng: getRunRng(game),
  });
  const mechanics = getEncounterMechanics(ENCOUNTER_CONFIG, type, game.biome?.id);
  const extended = extendEncounterQueue(queue, type, mechanics);
  return extendQueueForTorment(extended, game, {
    nodeType: type,
    pickEncounterEnemy,
    floor: game.spire.floor,
    spireNumber: game.spire.spireNumber,
    enemyDefs: enemyTypes,
    rng: getRunRng(game),
  });
}

function spawnWave() {
  if (game.screen !== "playing" || game.waveActive) return;
  if (!game.spire.currentNodeType) return;
  resetSkillsForNewWave(game);
  updateSkillsUI();
  game.waveActive = true;
  game.waveCount += 1;
  game.waveModifier = game.pendingWaveModifier
    || pickWaveModifier(WAVE_MODIFIER_LIBRARY, getRunRng(game));
  game.pendingWaveModifier = null;
  applyWaveModifierToEncounter(game.encounter, game.waveModifier);
  beginWaveStats(game);
  let queue = generateEncounterQueue(game.spire.currentNodeType);
  queue = scaleEncounterQueue(queue, game.waveModifier);
  game.spawnQueue = queue;
  game.spawnTimer = 0.1;
  startWaveBtn.textContent = "Combat en cours...";
  const modLabel = game.waveModifier ? ` · ${game.waveModifier.name}` : "";
  const objLabel = game.nodeObjective ? ` · Objectif: ${game.nodeObjective.name}` : "";
  mapFlow.updateCombatObjectiveBanner();
  showMessage(`${getNodeLabel(game.spire.currentNodeType)} lance${modLabel}${objLabel}.`, "normal");
  onboarding?.startIfNeeded("wave");
}

function loseLifeAndCheck({ bossBreach = false } = {}) {
  if (game.waveActive) {
    recordWaveLeak(game);
    recordRunLeak(game);
  }
  const nodeType = game.spire.currentNodeType || "combat";
  const extraLeak = getTormentExtraLeakLives(game, { nodeType, bossBreach });
  if (bossBreach) {
    sfx?.leak?.(true);
    const bossTormentExtra = game.run.mode === RUN_MODE_ASCENSION
      ? (game.run.tormentExtraLeakBoss ?? 0)
      : 0;
    if (bossTormentExtra > 0) {
      const totalLoss = 1 + bossTormentExtra;
      game.lives -= totalLoss;
      createFloatText(`-${totalLoss} vies`, canvas.width / 2 - 34, 96, "#ff6a72");
      showMessage(
        `Le boss franchit la ligne (${getAscensionTorment(game.run.ascensionLevel || 1).name}) ! −${totalLoss} vies.`,
        "danger",
      );
    } else {
      game.lives = 0;
    }
  } else {
    const totalLoss = 1 + extraLeak;
    game.lives -= totalLoss;
    sfx?.leak?.(false);
    createFloatText(`-${totalLoss} vie${totalLoss > 1 ? "s" : ""}`, canvas.width / 2 - 34, 96, "#ff8a72");
    const leakMsg = extraLeak > 0 && game.run.mode === RUN_MODE_ASCENSION
      ? `Ravageur en fuite (${getAscensionTorment(game.run.ascensionLevel || 1).name}) ! −${totalLoss} vies.`
      : `Ravageur en fuite ! ${game.lives} vie${game.lives > 1 ? "s" : ""} restante${game.lives > 1 ? "s" : ""}.`;
    showMessage(leakMsg, "warn");
  }
  if (game.lives > 0) {
    if (bossBreach) showMessage("Le boss a franchi la ligne !", "danger");
    return;
  }

  const inCombatNode = ["combat", "elite", "boss"].includes(game.spire.currentNodeType);
  if (
    game.run.nodeRetryAvailable &&
    inCombatNode &&
    game.screen === "playing"
  ) {
    nodeRetryOverlay?.classList.remove("hidden");
    game.wavePaused = true;
    showMessage(
      bossBreach
        ? "Le boss a franchi la ligne ! Derniere chance : reprendre ce noeud ?"
        : "Derniere chance : reprendre ce noeud ?",
      "warn"
    );
    return;
  }

  triggerGameOver({ bossLeak: bossBreach });
}

function triggerGameOver({ bossLeak = false } = {}) {
  clearRunSave();
  runMusic.stop();
  game.wavePaused = false;
  game.waveActive = false;
  game.spawnQueue = [];
  game.enemies = [];
  game.enemyById.clear();
  hideAllTransientOverlays();
  touchRunProgress(game);
  setScreen("gameover");
  const dailyBonus = applyRunEndDailyBonus();
  saveRunToLeaderboard();
  const spireReached = game.spire.spireNumber;
  const floorReached = game.spire.floor + 1;
  const defeatReason = bossLeak
    ? "Un boss a atteint la destination : la serre est perdue."
    : "Tes vies sont epuisees.";
  const bonusLine = dailyBonus > 0 ? `\n\nBonus défi du jour : +${dailyBonus.toLocaleString()} score.` : "";
  showEndRunScreen({
    outcome: "defeat",
    title: bossLeak ? "Defaite — Le boss a franchi la ligne" : "Defaite — La serre est tombee",
    text:
      `${defeatReason} (Spire ${spireReached}/${MAX_SPIRES}, etage ${floorReached}/${MAX_FLOORS}).\n\n` +
      `La mort met fin a la run — seule une victoire sur la Spire ${MAX_SPIRES} compte comme triomphe.\n\n` +
      `Score : ${game.score.toLocaleString()} · Record : ${game.bestScore.toLocaleString()}${bonusLine}`,
    buttonText: "Menu principal",
  });
  showMessage("Run terminee. Retour au menu principal.", "danger");
}

function acceptNodeRetry() {
  if (!game.run.nodeRetryAvailable) return;
  game.run.nodeRetryAvailable = false;
  game.maxLives = Math.max(6, game.maxLives - 2);
  game.lives = Math.max(1, Math.round(game.maxLives * 0.45));
  nodeRetryOverlay?.classList.add("hidden");
  game.wavePaused = false;
  resetEncounterState();
  showMessage(`Reprise du noeud (${game.lives} vies, -2 max).`, "warn");
  createFloatText("REPRISE!", canvas.width / 2 - 36, 100, "#ffe87a");
  sfx?.retry?.();
}

function declineNodeRetry() {
  nodeRetryOverlay?.classList.add("hidden");
  triggerGameOver();
}

function defeatEnemy(enemy, position) {
  defeatEnemyLifecycle(enemy, position, {
    bestiaryConfig: BESTIARY_CONFIG,
    canvas,
    createEnemy,
    createFloatText,
    distance,
    emitParticles,
    enemyTypes,
    gainScore,
    game,
    getTowerRange,
    playSound,
    renderBestiaryList,
    sfx,
    showMessage,
    worldPosOfEnemy,
  });
}

function finishWaveIfNeeded() {
  finishWaveIfReady(game, {
    gainScore,
    getLayoutRoutes,
    getStartingGoldForSpire,
    grantRandomCardSilently,
    grantRandomRelic,
    hideMapOverlay,
    openVictory,
    setScreen,
    setStartWaveLabel: (label) => {
      startWaveBtn.textContent = label;
    },
    showMessage,
    showNodeResult,
    showWaveSummaryOverlay,
    sfx,
    spireLayouts: SPIRE_LAYOUTS,
    startDraftPhase,
    tryContextHint,
  });
}

function updateSkillTimers(dt) {
  tickSkillTimers(game, dt);
}

function updateEnemies(dt) {
  const biome = game.biome || BIOMES[0];
  updateEnemyCombat(game, {
    biome,
    createEnemy,
    createFloatText,
    defeatEnemy,
    distance,
    emitParticles,
    encounterConfig: ENCOUNTER_CONFIG,
    enemyRoute,
    getEncounterMechanics,
    loseLifeAndCheck,
    maybeTriggerBossCardPhase,
    sfx,
    showMessage,
    updateBossPhases,
    worldPosOfEnemy,
  }, dt);
}

function updateTowers(dt) {
  const biome = game.biome || BIOMES[0];
  updateTowerCombat(game, {
    biome,
    distance,
    distanceSq,
    getBossTempTowerMods,
    getCreamsicleAuraRange,
    getTowerFireRateRatio,
    getTowerPierceCount,
    getTowerPoisonDps,
    getTowerRange,
    playSound,
    sfx,
    towerTypes,
    worldPosOfEnemy,
  }, dt);
}

function updateProjectiles(dt) {
  updateProjectileCombat(game, {
    applyHitShieldDamage,
    applySlowToEnemy,
    computeDamageToEnemy,
    createFloatText,
    defeatEnemy,
    distance,
    emitParticles,
    getBossTempDamageMult,
    getEnemyById,
    getTowerArmorShredDuration,
    getTowerArmorShredMult,
    getTowerBurnDps,
    getTowerById,
    getTowerSlowPotency,
    getTowerSplashRadius,
    maybeTriggerBossCardPhase,
    playSound,
    recordRunTowerDamage,
    recordTowerDamage,
    scaleTowerPassiveDuration,
    sfx,
    towerTypes,
    worldPosOfEnemy,
  }, dt);
}

function updateParticles(dt) {
  updateCombatFx({
    floatTexts: game.floatTexts,
    particles: game.particles,
  }, dt);
}

function updateWeather(dt) {
  updateWeatherState(game, { canvas }, dt);
}

function updateWaveSpawning(dt) {
  updateWaveSpawningState(game, {
    createEnemy,
    pathsLength: paths.length,
  }, dt);
}

function updateGame(dt) {
  updateSkillTimers(dt);
  updateWaveSpawning(dt);
  updateEnemies(dt);
  updateTowers(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  updateUltimateVfx(game, dt);
  updateTowerUpgradeVfx(game, dt);
  updateWeather(dt);
  finishWaveIfNeeded();
}

function drawBackground() {
  const biome = game.biome || BIOMES[0];
  if (!backgroundGradient) {
    backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    backgroundGradient.addColorStop(0, biome.bg[0]);
    backgroundGradient.addColorStop(0.55, biome.bg[1]);
    backgroundGradient.addColorStop(1, biome.bg[2]);
  }
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const floorTexture = BIOME_FLOOR_TEXTURES[biome.id];
  if (floorTexture?.complete && floorTexture.naturalWidth > 0) {
    ctx.globalAlpha = 0.62;
    drawCoverImage(ctx, floorTexture, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  } else if (grassPattern) {
    ctx.globalAlpha = 0.52;
    ctx.fillStyle = grassPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }

  drawBoardBackdropStyle(ctx, {
    canvas,
    biome,
    time: game.animT,
  });

  for (const leaf of game.decor.leaves) {
    ctx.save();
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(leaf.rot);
    ctx.fillStyle = leaf.color;
    ctx.globalAlpha = leaf.blade ? 0.2 : 0.3;
    ctx.beginPath();
    ctx.ellipse(0, 0, leaf.blade ? leaf.r * 2.8 : leaf.r * 1.9, leaf.r * 0.72, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = leaf.blade ? 0.1 : 0.16;
    ctx.strokeStyle = leaf.vein || "rgba(220,255,160,0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-leaf.r * 1.35, 0);
    ctx.quadraticCurveTo(0, -leaf.r * 0.2, leaf.r * 1.35, 0);
    ctx.stroke();
    ctx.restore();
  }

  for (const stone of game.decor.stones) {
    ctx.fillStyle = stone.color;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.ellipse(stone.x, stone.y, stone.r * 1.25, stone.r, 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawPath() {
  drawBoardPaths(ctx, {
    dirtPattern,
    pathPebbles,
    paths,
  });
}

function drawPads() {
  const placing = game.screen === "playing" && Boolean(game.selectedTowerType);
  drawBoardPads(ctx, {
    pads,
    placing,
    touchUi: isTouchLayout(),
  });
}

function drawSetDressing() {
  drawSetDressingDecor(ctx, game.decor);
}

function drawFireflies() {
  drawFireflyDecor(ctx, game.decor.fireflies);
}

function drawLightingOverlay() {
  const biome = game.biome || BIOMES[0];
  drawLightingOverlayDecor(ctx, { biome, canvas });
}

function drawTower(tower) {
  drawTowerSprite(ctx, tower, {
    animT: game.animT,
    drawTowerLevelAura,
    drawTowerSelectionRange,
    game,
    getCreamsicleAuraRange,
    getTowerRange,
    getTowerUpgradePreviewRange,
    sprites,
    towerTypes,
  });
}

function drawEnemy(enemy) {
  drawEnemySprite(ctx, enemy, {
    animT: game.animT,
    enemyFacingX,
    sprites,
    worldPosOfEnemy,
  });
}

function drawProjectiles() {
  drawProjectileSprites(ctx, game.projectiles);
}

function drawWeather() {
  const biome = game.biome || BIOMES[0];
  drawWeatherOverlay(ctx, {
    biome,
    canvas,
    fogOffset: game.fogOffset,
    rainDrops: game.rainDrops,
  });
}

function drawFx() {
  drawCombatFx(ctx, {
    canvas,
    floatTexts: game.floatTexts,
    particles: game.particles,
    screen: game.screen,
  });
}

function drawBoard() {
  renderBoardFrame({
    ctx,
    canvas,
    game,
    drawBackground,
    drawSetDressing,
    drawPath,
    drawPads,
    drawRangePreviews: drawPlacementRangePreviews,
    drawTower,
    drawEnemy,
    drawProjectiles,
    drawWeather,
    drawFireflies,
    drawTowerUpgradeVfx,
    drawUltimateVfx,
    drawFx,
    drawLightingOverlay,
  });
}

function updateHud() {
  updateHudView({
    game,
    maxFloors: MAX_FLOORS,
    hudCache,
    hudElements: {
      livesEl,
      goldEl,
      waveEl,
      enemyCountEl,
      scoreEl,
      bestScoreEl,
    },
    updateTowerPanel,
    updateSkillsUI,
  });
}

// ─── TITLE SCREEN ────────────────────────────────────────────────────────────

const titleAnim = createTitleAnimState();

// ─── TITLE MUSIC ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────

function updateTitleScreen(dt) {
  updateTitleScreenAnim(titleAnim, dt);
}

function drawTitleScreen() {
  drawTitleScreenFrame(ctx, titleAnim);
}

function leaveTitleScreen() {
  if (game.screen !== "title") return;
  if (titleInputWrap) titleInputWrap.classList.add("hidden");
  titleDailyPanel?.classList.add("hidden");
  titleResumePanel?.classList.add("hidden");
  setScreen("menu");
  showOverlay(
    "Les Gloutonnes RDTD",
    "Choisis un Collectionneur, construis ton deck, puis traverse la carte Spire en tower defense.",
    "Choisir un Collectionneur"
  );
  showMessage("Lance une campagne et construis ton deck carnivore.", "normal");
}

function returnToTitleScreen() {
  clearRunSave();
  hideOverlay();
  hideLeaderboard();
  hideAllTransientOverlays();
  contextHints?.hide();
  onboarding?.hide?.();
  towerFloatHud?.classList.add("hidden");

  runMusic.stop();
  resetRunState();
  resetEncounterBoard();
  applySpireLayout(SPIRE_LAYOUTS[0]);
  game.score = 0;
  game.gold = getStartingGoldForSpire(1);
  game.lives = game.maxLives;
  game.collector.selectedId = null;
  game.towerDeck = [];
  game.spire.map = [];
  game.spire.floor = 0;
  game.spire.lane = 1;
  game.biome = BIOMES[0];
  backgroundGradient = null;
  initWorldArt();
  titleAnim.musicStarted = false;
  titleAnim.fadeIn = 0;
  titleAnim.titleY = -120;

  renderDeckList();
  renderRelicList();
  renderTowerShopButtons();
  renderCollectorPanel();
  updateHud();
  setScreen("title");
  renderTitleResumePanel();
  showMessage("Bienvenue, Chasseur. Entre ton nom pour repartir.", "normal");
}

// ─── GAME LOOP ───────────────────────────────────────────────────────────────

function gameLoop(ts) {
  if (!game.lastTs) game.lastTs = ts;
  const realDt = Math.min((ts - game.lastTs) / 1000, 0.06);
  game.lastTs = ts;

  game.animT += realDt;

  if (game.synergyFlash) {
    game.synergyFlash.t += realDt;
    if (game.synergyFlash.t > 2.2) {
      game.synergyFlash = null;
      renderSynergyList();
    }
  }

  if (game.screen === "title") {
    updateTitleScreen(realDt);
    drawTitleScreen();
    updateHud();
    requestAnimationFrame(gameLoop);
    return;
  }

  if (game.screen === "playing" && !game.wavePaused) {
    updateGame(realDt * game.speedMultiplier);
  }
  else {
    updateParticles(realDt * 0.5);
    updateWeather(realDt * 0.5);
    updateSkillTimers(realDt * 0.25);
  }

  drawBoard();
  updateHud();
  requestAnimationFrame(gameLoop);
}

function clearTowerSelection() {
  game.selectedTowerId = null;
  towerPanelCacheKey = "";
  updateMobileCombatZoom();
  updateTowerPanel();
}

function selectBuildTower(typeKey) {
  if (game.screen !== "playing") return;
  game.selectedTowerType = typeKey;
  clearTowerSelection();
  towerButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.tower === typeKey));
  updatePlacementUi();
}

function handleBuildOnPad(pad) {
  if (game.screen !== "playing") return false;
  if (!game.selectedTowerType || pad.occupiedBy !== null) return false;
  const type = towerTypes[game.selectedTowerType];
  if (game.gold < type.cost) {
    showMessage("Soleil insuffisant pour cette plante.", "warn");
    return true;
  }
  const tower = createTower(game.selectedTowerType, pad);
  game.gold -= type.cost;
  game.towers.push(tower);
  pad.occupiedBy = tower.id;
  game.selectedTowerId = tower.id;
  game.selectedTowerType = null;
  clearPlacementHover();
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  updatePlacementUi();
  gainScore(40);
  showMessage(`${tower.name} plantee avec succes.`, "normal");
  emitParticles(tower.x, tower.y, "#dfffb0", 12);
  sfx?.plant?.();
  towerPanelCacheKey = "";
  updateTowerPanel();
  return true;
}

function trySelectTowerAt(x, y) {
  const selectRadius = getTowerSelectRadius();
  for (const tower of game.towers) {
    if (distance({ x, y }, tower) <= selectRadius) {
      game.selectedTowerId = tower.id;
      showMessage(`${tower.name} selectionnee.`, "normal");
      towerPanelCacheKey = "";
      updateTowerPanel();
      return true;
    }
  }
  return false;
}

function getPadHitRadius() {
  if (isPhoneViewport()) return 46;
  if (isTabletViewport()) return 36;
  return 24;
}

function getTowerSelectRadius() {
  if (isPhoneViewport()) return 30;
  if (isTabletViewport()) return 22;
  return 18;
}

function updatePlacementUi() {
  const placing = game.screen === "playing" && Boolean(game.selectedTowerType);
  cancelPlacementBtn?.classList.toggle("hidden", !placing);
  document.body.classList.toggle("is-placing-tower", placing);
  updateMobileCombatZoom();
}

function updateMobileCombatZoom() {
  if (!isPhoneViewport()) {
    document.body.removeAttribute("data-mobile-zoom");
    return;
  }
  const zoom = game.selectedTowerType && game.screen === "playing";
  if (zoom) document.body.setAttribute("data-mobile-zoom", "1");
  else document.body.removeAttribute("data-mobile-zoom");
}

function updatePlacementHoverFromEvent(event) {
  game.placementHoverPad = null;
  if (game.screen !== "playing" || !game.selectedTowerType) return;
  const coords = getBoardCoords(event);
  if (!coords) return;
  const padRadius = getPadHitRadius();
  let best = null;
  let bestDist = Infinity;
  for (const pad of pads) {
    if (pad.occupiedBy !== null) continue;
    const dist = distance(coords, pad);
    if (dist <= padRadius && dist < bestDist) {
      bestDist = dist;
      best = pad;
    }
  }
  game.placementHoverPad = best;
}

function clearPlacementHover() {
  game.placementHoverPad = null;
}

function cancelTowerPlacement() {
  game.selectedTowerType = null;
  clearPlacementHover();
  towerButtons.forEach((btn) => btn.classList.remove("active"));
  updatePlacementUi();
  showMessage("Placement annulé.", "normal");
}

function getBoardCoords(event) {
  const rect = canvas.getBoundingClientRect();
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  const clientX = event.clientX ?? touch?.clientX;
  const clientY = event.clientY ?? touch?.clientY;
  if (clientX == null || clientY == null) return null;
  return {
    x: ((clientX - rect.left) / rect.width) * canvas.width,
    y: ((clientY - rect.top) / rect.height) * canvas.height,
  };
}

function onBoardPointer(event) {
  if (game.screen !== "playing") return;
  const coords = getBoardCoords(event);
  if (!coords) return;
  const { x, y } = coords;

  const selectedTower = getTowerById(game.selectedTowerId);
  if (selectedTower && distance({ x, y }, selectedTower) > 30) clearTowerSelection();

  const padRadius = getPadHitRadius();
  for (const pad of pads) {
    if (distance({ x, y }, pad) > padRadius) continue;
    if (pad.occupiedBy !== null) {
      game.selectedTowerId = pad.occupiedBy;
      showMessage("Tour selectionnee pour gestion.", "normal");
      sfx?.select?.();
      towerPanelCacheKey = "";
      updateTowerPanel();
      return;
    }
    if (handleBuildOnPad(pad)) return;
  }

  if (trySelectTowerAt(x, y)) return;
  showMessage("Selectionne une plante puis une zone de plantation.", "normal");
}

function onBoardPointerMove(event) {
  if (game.screen !== "playing") return;
  updatePlacementHoverFromEvent(event);
}

function onBoardClick(event) {
  onBoardPointer(event);
}

function canManageSelectedTower() {
  return game.screen === "playing" || game.screen === "paused";
}

function upgradeSelectedTower() {
  if (!canManageSelectedTower()) return;
  const tower = getTowerById(game.selectedTowerId);
  if (!tower) return;
  if (!canUpgradeTower(tower)) {
    showMessage("Cette tour est deja au niveau maximum.", "warn");
    return;
  }
  const cost = getUpgradeCost(tower);
  if (game.gold < cost) {
    showMessage("Pas assez de soleil pour ameliorer.", "warn");
    return;
  }
  game.gold -= cost;
  applyTowerUpgrade(tower, cost);
  gainScore(80 * tower.level);
  triggerTowerUpgradeVfx(game, tower, tower.level, emitParticles);
  towerPanelCacheKey = "";
  if (tower.level === 2) {
    createFloatText("Niv 2!", tower.x - 18, tower.y - 28, "#b8ffcc");
    sfx?.upgrade?.(tower.level);
  } else {
    createFloatText("MAX!", tower.x - 16, tower.y - 30, "#ffe87a");
    sfx?.upgrade?.(tower.level);
  }
  showMessage(`${tower.name} amelioree au niveau ${tower.level}.`, "normal");
  updateTowerPanel();
}

function hideSellConfirmOverlay() {
  sellConfirmOverlay?.classList.add("hidden");
  pendingSellTowerId = null;
}

function buildSellConfirmMessage(tower) {
  const refund = getTowerSellRefund(tower);
  const invested = tower.investedGold;
  const levelLine = tower.level > 1
    ? `Cette tour est au niveau ${tower.level} — tu perds les améliorations.`
    : "";
  return [
    levelLine,
    `Investissement : ${invested} soleil.`,
    `Remboursement : ${refund} soleil (70 %).`,
    "Confirmer la vente ?",
  ].filter(Boolean).join("\n");
}

function executeSellTower(tower) {
  const refund = getTowerSellRefund(tower);
  game.gold += refund;
  const index = game.towers.findIndex((item) => item.id === tower.id);
  if (index >= 0) game.towers.splice(index, 1);
  if (tower.padRef) tower.padRef.occupiedBy = null;
  emitParticles(tower.x, tower.y, "#ffe9ac", 14);
  createFloatText(`+${refund}`, tower.x - 12, tower.y - 20, "#fdf5b7");
  clearTowerSelection();
  showMessage(`Tour vendue : +${refund} soleil récupérés.`, "normal");
  sfx?.sell?.();
}

function confirmSellSelectedTower() {
  const tower = getTowerById(pendingSellTowerId ?? game.selectedTowerId);
  hideSellConfirmOverlay();
  if (!tower || !canManageSelectedTower()) return;
  executeSellTower(tower);
}

function requestSellSelectedTower() {
  if (!canManageSelectedTower()) return;
  const tower = getTowerById(game.selectedTowerId);
  if (!tower) return;
  if (!needsSellConfirmation(tower)) {
    executeSellTower(tower);
    return;
  }
  pendingSellTowerId = tower.id;
  if (sellConfirmTextEl) sellConfirmTextEl.textContent = buildSellConfirmMessage(tower);
  sellConfirmOverlay?.classList.remove("hidden");
}

function sellSelectedTower() {
  requestSellSelectedTower();
}

function activateBoostSkill() {
  if (game.screen !== "playing") return;
  const skill = game.skills.boost;
  if (!canActivateSkill(skill)) return;
  skill.usesLeft -= 1;
  skill.timer = 0;
  skill.active = skill.duration + game.modifiers.boostDurationBonus;
  gainScore(60);
  showMessage(`Engrais Boost actif (${skill.usesLeft}/${skill.usesMax} restantes).`, "normal");
  sfx?.skill?.("boost");
  updateSkillsUI();
}

function activateSnareSkill() {
  if (game.screen !== "playing") return;
  const skill = game.skills.snare;
  if (!canActivateSkill(skill)) return;
  skill.usesLeft -= 1;
  skill.timer = 0;
  skill.active = skill.duration + game.modifiers.snareDurationBonus;
  gainScore(60);
  emitParticles(canvas.width * 0.5, canvas.height * 0.5, "#8fe275", 40);
  showMessage(`Racines Piege actives (${skill.usesLeft}/${skill.usesMax} restantes).`, "normal");
  sfx?.skill?.("snare");
  updateSkillsUI();
}

function togglePause() {
  if (game.screen === "playing") {
    setScreen("paused");
    pauseBtn.textContent = "Reprendre";
    showMessage("Jeu en pause.", "warn");
    sfx?.pause?.(true);
    return;
  }
  if (game.screen === "paused") {
    setScreen("playing");
    pauseBtn.textContent = "Pause";
    showMessage("Reprise du combat.", "normal");
    sfx?.pause?.(false);
  }
}

function loadAudioPreferences() {
  const enabledRaw = localStorage.getItem(AUDIO_ENABLED_KEY);
  const musicRaw = localStorage.getItem(MUSIC_VOLUME_KEY);
  const sfxRaw = localStorage.getItem(SFX_VOLUME_KEY);
  if (enabledRaw !== null) {
    audio.enabled = enabledRaw !== "0";
  }
  if (musicRaw !== null) {
    const v = Number(musicRaw);
    if (Number.isFinite(v)) audio.musicVolume = Math.max(0, Math.min(1, v));
  }
  if (sfxRaw !== null) {
    const v = Number(sfxRaw);
    if (Number.isFinite(v)) audio.sfxVolume = Math.max(0, Math.min(1, v));
  }
  if (audioBtn) audioBtn.textContent = audio.enabled ? "Son ON" : "Son OFF";
  toggleAudioSettingsPopover(false);
  if (musicVolumeInput) musicVolumeInput.value = String(Math.round(audio.musicVolume * 100));
  if (sfxVolumeInput) sfxVolumeInput.value = String(Math.round(audio.sfxVolume * 100));
  runMusic.setMusicVolume(audio.musicVolume);
}

function saveAudioPreferences() {
  localStorage.setItem(AUDIO_ENABLED_KEY, audio.enabled ? "1" : "0");
  localStorage.setItem(MUSIC_VOLUME_KEY, String(audio.musicVolume));
  localStorage.setItem(SFX_VOLUME_KEY, String(audio.sfxVolume));
}

function setMusicVolumeFromUi(percent) {
  audio.musicVolume = Math.max(0, Math.min(1, percent / 100));
  runMusic.setMusicVolume(audio.musicVolume);
  saveAudioPreferences();
}

function setSfxVolumeFromUi(percent) {
  audio.sfxVolume = Math.max(0, Math.min(1, percent / 100));
  saveAudioPreferences();
}

function toggleAudioSettingsPopover(forceOpen) {
  if (!audioSettingsPopover) return;
  const willOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : audioSettingsPopover.classList.contains("hidden");
  audioSettingsPopover.classList.toggle("hidden", !willOpen);
  audioSettingsBtn?.setAttribute("aria-expanded", willOpen ? "true" : "false");
}

function toggleAudio() {
  audio.enabled = !audio.enabled;
  audioBtn.textContent = audio.enabled ? "Son ON" : "Son OFF";
  saveAudioPreferences();
  if (audio.enabled) {
    ensureAudioContext();
    sfx?.uiToggle?.(true);
    if (game.screen === "title") {
      titleAnim.musicStarted = false;
      tryStartTitleMusic();
    } else {
      updateRunMusic();
    }
  } else {
    runMusic.stop();
    titleAnim.musicStarted = false;
    toggleAudioSettingsPopover(false);
  }
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

function updateFullscreenButton() {
  if (!fullscreenBtn) return;
  const active = isFullscreenActive();
  fullscreenBtn.textContent = active ? "↙" : "⛶";
  fullscreenBtn.classList.toggle("is-active", active);
  fullscreenBtn.setAttribute(
    "aria-label",
    active ? "Quitter le plein écran" : "Activer le plein écran"
  );
  fullscreenBtn.title = active ? "Quitter le plein écran" : "Plein écran";
}

async function toggleFullscreen() {
  if (!fullscreenBtn) return;
  if (!document.fullscreenEnabled && !document.fullscreenElement) {
    showMessage("Plein écran non disponible dans ce navigateur.", "warn");
    return;
  }

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      showMessage("Plein écran désactivé.", "normal");
    } else {
      await document.documentElement.requestFullscreen({ navigationUI: "hide" });
      showMessage("Plein écran activé.", "normal");
    }
  } catch {
    showMessage("Edge a refusé le plein écran. Essaie depuis la PWA installée.", "warn");
  } finally {
    updateFullscreenButton();
    requestAnimationFrame(() => updateViewport(game.screen));
  }
}

document.addEventListener("fullscreenchange", () => {
  updateFullscreenButton();
  requestAnimationFrame(() => updateViewport(game.screen));
});
updateFullscreenButton();

// Tente de démarrer la musique titre si elle ne l'est pas encore.
// Retourne true si la musique vient d'être lancée, false si elle tournait déjà.
function tryStartTitleMusic() {
  if (game.screen !== "title" || titleAnim.musicStarted || !audio.enabled) return false;
  ensureAudioContext();
  if (!audio.ctx) return false;
  titleAnim.musicStarted = true;
  runMusic.startTitle();
  return true;
}

function advancePastTitle() {
  leaveTitleScreen();
  runMusic.transitionToRun({
    biomeId: getBiomeForFloor(game.spire.floor)?.id || "greenhouse",
    spireNumber: game.spire.spireNumber || 1,
  });
}

const hudCollapse = initHudCollapse({
  collapseBtn: hudCollapseBtnEl,
});

const mobileShell = initMobileShell({
  runDrawer: runDrawerEl,
  runDrawerFab: runDrawerFabEl,
  runDrawerScrim: runDrawerScrimEl,
  runDrawerClose: runDrawerCloseEl,
  runDrawerTabs: document.querySelectorAll(".run-drawer-tab"),
  runTabPanels: document.querySelectorAll("[data-run-tab-panel]"),
  statsMoreBtn: statsMoreBtnEl,
  statsGrid: hudStatsEl,
});

initViewport({
  onChange: () => {
    updatePlacementUi();
    updateTowerPanel();
    hudCollapse?.refresh?.();
  },
});

initOrientationLock({
  overlayEl: document.getElementById("orientation-lock"),
});

bindUiEvents({
  game,
  towerTypes,
  towerButtons,
  elements: {
    startWaveBtn,
    speedBtn,
    pauseBtn,
    fullscreenBtn,
    audioBtn,
    audioSettingsBtn,
    audioSettingsPopover,
    musicVolumeInput,
    sfxVolumeInput,
    sellConfirmOkBtn,
    sellConfirmCancelBtn,
    skillBoostBtn,
    skillSnareBtn,
    skillUltimateBtn,
    mutationChoicesEl,
    crossroadsChoicesEl,
    waveSummaryContinueBtn,
    bossCardChoicesEl,
    nodeRetryAcceptBtn,
    nodeRetryDeclineBtn,
    upgradeBtn,
    sellBtn,
    overlayButton,
    overlayAscensionBtn,
    overlayLeaderboardBtn,
    collectorChoicesEl,
    towerDraftGridEl,
    towerDraftConfirmBtn,
    towerDraftCountEl,
    draftChoicesEl,
    mapChoicesEl,
    shopChoicesEl,
    shopSkipBtn,
    nodeResultContinueBtn,
    leaderboardBtn,
    leaderboardCloseBtn,
    canvas,
    playerNameInput,
    titlePlayBtn,
    eventChoicesEl,
  },
  actions: {
    ensureAudioContext,
    selectBuildTower,
    spawnWave,
    showMessage,
    playSound,
    sfx,
    togglePause,
    toggleFullscreen,
    toggleAudio,
    toggleAudioSettingsPopover,
    setMusicVolumeFromUi,
    setSfxVolumeFromUi,
    confirmSellSelectedTower,
    cancelSellSelectedTower: hideSellConfirmOverlay,
    activateBoostSkill,
    activateSnareSkill,
    activateCollectorUltimateSkill,
    openMutationOverlay,
    onMutationChosen,
    onEventChoiceChosen,
    onCrossroadsRewardChosen,
    continueAfterWaveSummary,
    onBossTempCardChosen,
    acceptNodeRetry,
    declineNodeRetry,
    isLaneReachable,
    saveSpeedPreference,
    upgradeSelectedTower,
    sellSelectedTower,
    requestSellSelectedTower,
    openCollectorSelection,
    returnToTitleScreen,
    continueCampaignAscension,
    openTowerDraftOverlay,
    hideTowerDraftOverlay,
    renderTowerShopButtons,
    startNewRun,
    applyCardById,
    onMapNodeChosen,
    buyShopOfferById,
    advanceAfterShop,
    advanceFromNodeResult,
    showLeaderboard,
    refreshLeaderboardLocal,
    hideLeaderboard,
    tryStartTitleMusic,
    advancePastTitle,
    onBoardClick,
    onBoardPointer,
    onBoardPointerMove,
    clearPlacementHover,
    cancelTowerPlacement,
    savePlayerName,
    resumeRunFromSave,
    persistRunSaveNow,
    renderTitleResumePanel,
  },
});

dailyBannerEl?.addEventListener("click", () => {
  showDailyChallengeDetails();
});

function replaceObjectContents(target, source) {
  for (const key of Object.keys(target)) delete target[key];
  Object.assign(target, source);
}

function wireGameModules() {
  initShared({
    game,
    MAX_FLOORS,
    pads,
    paths,
    SPIRE_LAYOUTS,
    MAP_LANE_CONFIG,
    MAP_NODE_POOL,
    TOOLTIPS_CONFIG,
    NODE_OBJECTIVE_LIBRARY,
    WAVE_MODIFIER_LIBRARY,
    ENCOUNTER_CONFIG,
    EVENT_LIBRARY,
    BIOMES,
    mapChoicesEl,
    mapFloorLabel,
    mapRouteHintEl,
    combatObjectiveBanner,
    showMessage,
    playSound,
    gainScore,
    setScreen,
    hideMapOverlay,
    showMapOverlay,
    hideShopOverlay,
    showShopOverlay,
    openCrossroadsReward,
    handleNonCombatNode,
    setEncounterForNode,
    resetEncounterState,
    renderTowerShopButtons,
    applyBiomeForCurrentFloor,
    getBiomeForFloor,
    getNodeTooltip,
    tryContextHint,
    touchRunProgress,
    getRunRng,
    pickNodeObjective,
    shouldRollObjective,
    pickWaveModifier,
    laneGuaranteesWaveModifier,
    getLaneAffinityHint,
    getMapLanePreview,
    generateSpireMap,
    pickRandomEvent,
    getEncounterMechanics,
    clearBossTempWave,
    onboarding,
    EVENT_GOLD,
  });
}

async function bootstrapGame() {
  try {
    const content = await loadGameContent(() => ({ game }));
    // Ne pas réassigner : bindUiEvents garde la référence initiale de towerTypes.
    replaceObjectContents(towerTypes, content.towerTypes);
    replaceObjectContents(enemyTypes, content.enemyTypes);
    CARD_LIBRARY = content.CARD_LIBRARY;
    RELIC_LIBRARY = content.RELIC_LIBRARY;
    BIOMES = content.BIOMES;
    COLLECTOR_LIBRARY = content.COLLECTOR_LIBRARY;
    ENCOUNTER_CONFIG = content.ENCOUNTER_CONFIG;
    ONBOARDING_CONFIG = content.ONBOARDING;
    TOOLTIPS_CONFIG = content.TOOLTIPS;
    MAP_NODE_POOL = content.MAP_NODE_POOL;
    MAP_LANE_CONFIG = content.MAP_LANE_CONFIG || {};
    MUTATION_LIBRARY = content.MUTATION_LIBRARY || [];
    WAVE_MODIFIER_LIBRARY = content.WAVE_MODIFIER_LIBRARY || [];
    NODE_OBJECTIVE_LIBRARY = content.NODE_OBJECTIVE_LIBRARY || [];
    BOSS_TEMP_CARD_LIBRARY = content.BOSS_TEMP_CARD_LIBRARY || [];
    DECK_SYNERGY_CONFIG = content.DECK_SYNERGY_CONFIG || { families: [] };
    DAILY_CHALLENGES = content.DAILY_CHALLENGES || [];
    EVENT_LIBRARY = content.EVENT_LIBRARY || [];
    META_CONFIG = content.META || {};
    BESTIARY_CONFIG = {
      ...DEFAULT_BESTIARY_CONFIG,
      ...(META_CONFIG.bestiary || {}),
    };
    applyDailyChallengeForRun();
    updateTitleVersionLabel();
    wireGameModules();
    loadAudioPreferences();
    loadSpeedPreference();
    onboarding = createOnboardingController({
      steps: content.ONBOARDING?.steps || [],
    });
    shared.onboarding = onboarding;
    contextHints = createContextHintsController({
      hints: content.ONBOARDING?.contextHints || [],
      isBlocked: () => {
        const el = document.getElementById("onboarding-overlay");
        return Boolean(el && !el.classList.contains("hidden"));
      },
    });
    const runTabBestiary = document.getElementById("run-tab-bestiary");
    runTabBestiary?.addEventListener("click", () => {
      tryContextHint("bestiary_first");
    });
    if (content.errors?.length) {
      console.warn("[content]", content.errors);
    }
  } catch (err) {
    console.error(err);
    showMessage("Impossible de charger le contenu du jeu. Regénère standalone.js puis relance index.html.", "warn");
    return;
  }

  initWeather();
  game.biome = BIOMES[0];
  initWorldArt();
  resetModifiers();
  renderDeckList();
  renderRelicList();
  renderTowerShopButtons();
  renderBestiaryList();
  setScreen("title");
  renderTitleResumePanel();
  updateViewport("title");
  updateHud();
  requestAnimationFrame(() => onboarding?.startIfNeeded("title"));
  requestAnimationFrame(gameLoop);
}

bootstrapGame();

if (typeof window !== "undefined") {
  window.__RDTD__ = {
    jumpToSpire,
    markCampaignVictory,
    hasCampaignVictory,
    resetOnboarding: () => onboarding?.resetForDev?.(),
    resetContextHints: () => contextHints?.resetForDev?.(),
  };
}

});
require("game.js");
})();
