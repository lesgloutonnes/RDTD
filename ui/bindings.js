export function bindUiEvents({
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
