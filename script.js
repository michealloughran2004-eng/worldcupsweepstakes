
const BUILT_IN_TEAMS = [
  {
    "name": "France",
    "flag": "flags/France.png",
    "seedRank": 1
  },
  {
    "name": "Spain",
    "flag": "flags/Spain.png",
    "seedRank": 2
  },
  {
    "name": "Argentina",
    "flag": "flags/Argentina.png",
    "seedRank": 3
  },
  {
    "name": "England",
    "flag": "flags/England.png",
    "seedRank": 4
  },
  {
    "name": "Portugal",
    "flag": "flags/Portugal.png",
    "seedRank": 5
  },
  {
    "name": "Brazil",
    "flag": "flags/Brazil.png",
    "seedRank": 6
  },
  {
    "name": "Netherlands",
    "flag": "flags/Netherlands.png",
    "seedRank": 7
  },
  {
    "name": "Belgium",
    "flag": "flags/Belgium.png",
    "seedRank": 8
  },
  {
    "name": "Germany",
    "flag": "flags/Germany.png",
    "seedRank": 9
  },
  {
    "name": "Croatia",
    "flag": "flags/Croatia.png",
    "seedRank": 10
  },
  {
    "name": "Colombia",
    "flag": "flags/Colombia.png",
    "seedRank": 11
  },
  {
    "name": "Senegal",
    "flag": "flags/Senegal.png",
    "seedRank": 12
  },
  {
    "name": "Mexico",
    "flag": "flags/Mexico.png",
    "seedRank": 13
  },
  {
    "name": "United States",
    "flag": "flags/USA.png",
    "seedRank": 14
  },
  {
    "name": "Morocco",
    "flag": "flags/Morocco.png",
    "seedRank": 15
  },
  {
    "name": "Uruguay",
    "flag": "flags/Uruguay.png",
    "seedRank": 16
  },
  {
    "name": "Japan",
    "flag": "flags/Japan.png",
    "seedRank": 17
  },
  {
    "name": "Switzerland",
    "flag": "flags/Switzerland.png",
    "seedRank": 18
  },
  {
    "name": "Iran",
    "flag": "flags/Iran.png",
    "seedRank": 19
  },
  {
    "name": "South Korea",
    "flag": "flags/Korea.png",
    "seedRank": 20
  },
  {
    "name": "Austria",
    "flag": "flags/Austria.png",
    "seedRank": 21
  },
  {
    "name": "Ecuador",
    "flag": "flags/Ecuador.png",
    "seedRank": 22
  },
  {
    "name": "Algeria",
    "flag": "flags/Algeria.png",
    "seedRank": 23
  },
  {
    "name": "Egypt",
    "flag": "flags/Egypt.png",
    "seedRank": 24
  },
  {
    "name": "Tunisia",
    "flag": "flags/Tunisia.png",
    "seedRank": 25
  },
  {
    "name": "Canada",
    "flag": "flags/Canada.png",
    "seedRank": 26
  },
  {
    "name": "Australia",
    "flag": "flags/Australia.png",
    "seedRank": 27
  },
  {
    "name": "Paraguay",
    "flag": "flags/Paraguay.png",
    "seedRank": 28
  },
  {
    "name": "Sweden",
    "flag": "flags/Sweden.png",
    "seedRank": 29
  },
  {
    "name": "Turkey",
    "flag": "flags/Turkey.png",
    "seedRank": 30
  },
  {
    "name": "Scotland",
    "flag": "flags/Scotland.png",
    "seedRank": 31
  },
  {
    "name": "Czechia",
    "flag": "flags/Czechia.png",
    "seedRank": 32
  },
  {
    "name": "Ivory Coast",
    "flag": "flags/IvoryCoast.png",
    "seedRank": 33
  },
  {
    "name": "Ghana",
    "flag": "flags/Ghana.png",
    "seedRank": 34
  },
  {
    "name": "South Africa",
    "flag": "flags/SouthAfrica.png",
    "seedRank": 35
  },
  {
    "name": "Saudi Arabia",
    "flag": "flags/Saudi.png",
    "seedRank": 36
  },
  {
    "name": "Qatar",
    "flag": "flags/Qatar.png",
    "seedRank": 37
  },
  {
    "name": "Jordan",
    "flag": "flags/Jordan.png",
    "seedRank": 38
  },
  {
    "name": "Uzbekistan",
    "flag": "flags/Uzbekistan.png",
    "seedRank": 39
  },
  {
    "name": "Iraq",
    "flag": "flags/Iraq.png",
    "seedRank": 40
  },
  {
    "name": "New Zealand",
    "flag": "flags/NewZealand.png",
    "seedRank": 41
  },
  {
    "name": "Cape Verde",
    "flag": "flags/CapeVerde.png",
    "seedRank": 42
  },
  {
    "name": "Cura\u00e7ao",
    "flag": "flags/Curacao.png",
    "seedRank": 43
  },
  {
    "name": "Haiti",
    "flag": "flags/Haiti.png",
    "seedRank": 44
  },
  {
    "name": "Bosnia and Herzegovina",
    "flag": "flags/Bosnia.png",
    "seedRank": 45
  },
  {
    "name": "DR Congo",
    "flag": "flags/Congo.png",
    "seedRank": 46
  },
  {
    "name": "Panama",
    "flag": "flags/Panama.png",
    "seedRank": 47
  },
  {
    "name": "Norway",
    "flag": "flags/Norway.png",
    "seedRank": 48
  }
];
const FUN_FACTS = {
  "Algeria": "Riyad Mahrez helped define Algeria\u2019s modern golden era.",
  "Argentina": "Defending World Cup champions, led by Lionel Messi\u2019s legacy.",
  "Australia": "Known for being one of the World Cup\u2019s toughest underdog sides.",
  "Austria": "A technically strong European side with a growing modern core.",
  "Belgium": "Still carries elite talent from its famous golden generation.",
  "Bosnia and Herzegovina": "Edin D\u017eeko became one of Europe\u2019s great modern strikers.",
  "Brazil": "Five-time champions and always one of the tournament favorites.",
  "Canada": "Co-hosts in 2026, with Alphonso Davies as a game-changer.",
  "Cape Verde": "A tiny island nation making a massive football statement.",
  "Colombia": "James Rodr\u00edguez\u2019s 2014 World Cup run became iconic.",
  "Congo": "A physically powerful side with a passionate football culture.",
  "Croatia": "Reached the 2018 final and 2022 semifinal with elite midfield play.",
  "Curacao": "A small Caribbean nation with Dutch football influence.",
  "Czechia": "Home to a proud football history and strong European tradition.",
  "Ecuador": "A fast, athletic South American team that can surprise anyone.",
  "Egypt": "Mohamed Salah is one of Africa\u2019s greatest modern players.",
  "England": "One of the favorites, packed with elite attacking talent.",
  "France": "Recent finalists with one of the deepest squads in world football.",
  "Germany": "Four-time champions with a long history of tournament runs.",
  "Ghana": "Nearly became Africa\u2019s first World Cup semifinalist in 2010.",
  "Haiti": "A proud Caribbean football nation with a historic World Cup past.",
  "Iran": "One of Asia\u2019s most consistent World Cup qualifiers.",
  "Iraq": "A passionate football nation with one of Asia\u2019s loudest fanbases.",
  "Ivory Coast": "Home to legends like Didier Drogba and Yaya Tour\u00e9.",
  "Japan": "A disciplined, technical team that regularly upsets bigger nations.",
  "Jordan": "A rising Asian side with one of the region\u2019s loudest fanbases.",
  "South Korea": "Reached the 2002 semifinals and still produces elite stars.",
  "Mexico": "Three-time World Cup host with one of the tournament\u2019s best fanbases.",
  "Morocco": "First African nation to reach a World Cup semifinal.",
  "Netherlands": "Three-time finalists famous for beautiful attacking football.",
  "New Zealand": "Went unbeaten at the 2010 World Cup.",
  "Norway": "Erling Haaland gives Norway one of football\u2019s scariest weapons.",
  "Panama": "Reached its first World Cup in 2018 after a dramatic qualification.",
  "Paraguay": "A tough South American side known for defensive grit.",
  "Portugal": "Led by world-class talent and a deep attacking squad.",
  "Qatar": "Hosted the 2022 World Cup and continues building its football project.",
  "Saudi Arabia": "Beat eventual champions Argentina in a famous 2022 upset.",
  "Scotland": "A historic football nation with one of Europe\u2019s loudest supports.",
  "Senegal": "One of Africa\u2019s strongest sides and a recent AFCON champion.",
  "South Africa": "Hosted Africa\u2019s first World Cup in 2010.",
  "Spain": "Former champions with one of the world\u2019s best possession traditions.",
  "Sweden": "Reached the 1958 final and has a proud World Cup history.",
  "Switzerland": "A reliable tournament side known for being difficult to beat.",
  "Tunisia": "A regular World Cup side with a passionate North African fanbase.",
  "Turkey": "Finished third at the 2002 World Cup.",
  "Uruguay": "Two-time champions with a huge football legacy for its size.",
  "United States": "Co-hosts in 2026 with a young, athletic squad.",
  "Uzbekistan": "A rising Central Asian team making serious football progress.",
  "Bosnia": "Edin D\u017eeko became one of Europe\u2019s great modern strikers."
};
const EXAMPLE_NAMES = [
  "James Smith",
  "Michael Johnson",
  "John Williams",
  "David Brown",
  "Robert Jones",
  "William Miller",
  "Thomas Davis",
  "Daniel Garcia",
  "Matthew Rodriguez",
  "Christopher Wilson",
  "Andrew Martinez",
  "Joseph Anderson",
  "Ryan Taylor",
  "Nicholas Thomas",
  "Brandon Hernandez",
  "Kevin Moore",
  "Justin Martin",
  "Tyler Jackson",
  "Anthony Thompson",
  "Jonathan White",
  "Benjamin Lopez",
  "Samuel Lee",
  "Jacob Gonzalez",
  "Nathan Harris",
  "Alexander Clark",
  "Zachary Lewis",
  "Logan Robinson",
  "Noah Walker",
  "Ethan Hall",
  "Luke Allen",
  "Jack Young",
  "Owen King",
  "Henry Wright",
  "Mason Scott",
  "Lucas Green",
  "Elijah Baker",
  "Aiden Adams",
  "Carter Nelson",
  "Dylan Hill",
  "Wyatt Campbell",
  "Connor Mitchell",
  "Hunter Roberts",
  "Austin Carter",
  "Jordan Phillips",
  "Jason Evans",
  "Eric Turner",
  "Adam Parker",
  "Patrick Collins"
];

const STORAGE_KEY = "worldCupSweepstakesProductionReadyV1";

const PRIZE_DEFINITIONS = {
  winner: { label: "Champion", shortLabel: "Winner" },
  runnerUp: { label: "Runner-Up", shortLabel: "Runner-Up" },
  thirdPlace: { label: "Third Place", shortLabel: "Third" },
  worstTeam: { label: "Worst Team", shortLabel: "Worst Team" },
  goldenBoot: { label: "Golden Boot", shortLabel: "Golden Boot" },
  goldenGlove: { label: "Golden Glove", shortLabel: "Golden Glove" },
  mostGoalsTeam: { label: "Most Goals Scored", shortLabel: "Most Goals" },
  mostRedCards: { label: "Most Red Cards", shortLabel: "Red Cards" }
};

let config = null;
let playerPool = [];
let assignments = [];
let currentPlayer = null;
let currentTeamIndex = 0;
let isRevealing = false;

const setupScreen = document.getElementById("setupScreen");
const drawApp = document.getElementById("drawApp");
const playersInput = document.getElementById("playersInput");
const setupError = document.getElementById("setupError");
const requiredPlayersText = document.getElementById("requiredPlayersText");
const currentNamesCount = document.getElementById("currentNamesCount");
const startDrawBtn = document.getElementById("startDrawBtn");
const loadExampleBtn = document.getElementById("loadExampleBtn");
const standardPayoutsBtn = document.getElementById("standardPayoutsBtn");

const buyInInput = document.getElementById("buyInInput");

const remainingTeamsEl = document.getElementById("remainingTeams");
const assignmentsEl = document.getElementById("assignments");
const remainingCountEl = document.getElementById("remainingCount");
const assignedCountEl = document.getElementById("assignedCount");
const playerNameEl = document.getElementById("playerName");
const playerSubLabelEl = document.getElementById("playerSubLabel");
const revealCardEl = document.getElementById("revealCard");
const drawStatusEl = document.getElementById("drawStatus");
const progressTextEl = document.getElementById("progressText");
const finalModeTextEl = document.getElementById("finalModeText");
const progressFillEl = document.getElementById("progressFill");

const prizeStripEl = document.getElementById("prizeStrip");
const buyInLabelEl = document.getElementById("buyInLabel");
const totalPotLabelEl = document.getElementById("totalPotLabel");
const modeLabelEl = document.getElementById("modeLabel");

const drawPlayerBtn = document.getElementById("drawPlayerBtn");
const revealTeamBtn = document.getElementById("revealTeamBtn");
const autoCompleteBtn = document.getElementById("autoCompleteBtn");
const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");
const showcaseBtn = document.getElementById("showcaseBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

const endingScreenEl = document.getElementById("endingScreen");
const endingScrollTrackEl = document.getElementById("endingScrollTrack");
const closeEndingBtn = document.getElementById("closeEndingBtn");
const confettiLayerEl = document.getElementById("confettiLayer");
const drumrollSound = document.getElementById("drumrollSound");
const revealSound = document.getElementById("revealSound");

const REVEAL_DELAY_MS = 2300;

function init() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      const state = JSON.parse(saved);
      if (state.config && Array.isArray(state.playerPool) && Array.isArray(state.assignments)) {
        config = state.config;
        playerPool = state.playerPool;
        assignments = state.assignments;
        currentPlayer = state.currentPlayer || null;
        currentTeamIndex = state.currentTeamIndex || 0;
        isRevealing = false;

        showDrawApp();
        restoreDrawState();
        renderAll();
        return;
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  playersInput.value = EXAMPLE_NAMES.join("\n");
  updateSetupInfo();
}

function getSelectedMode() {
  const selected = document.querySelector('input[name="drawMode"]:checked');
  return Number(selected?.value || 1);
}

function requiredPlayersForMode(mode) {
  if (mode === 1) return 48;
  if (mode === 2) return 24;
  return 16;
}

function teamsPerPlayer(mode) {
  return mode;
}

function modeName(mode) {
  if (mode === 1) return "1 Team Each";
  if (mode === 2) return "2 Teams Each · FIFA Seeded";
  return "3 Teams Each · FIFA Seeded";
}

function parseNames(value) {
  return value
    .split(/\r?\n/)
    .map(name => name.trim())
    .filter(Boolean);
}

function updateSetupInfo() {
  const mode = getSelectedMode();
  requiredPlayersText.textContent = requiredPlayersForMode(mode);
  currentNamesCount.textContent = parseNames(playersInput.value).length;

  document.querySelectorAll(".mode-card").forEach(card => {
    const input = card.querySelector("input");
    card.classList.toggle("selected", input.checked);
  });
}

function collectPrizeConfig() {
  const prizes = [];

  document.querySelectorAll("[data-prize-key]").forEach(checkbox => {
    if (!checkbox.checked) return;

    const key = checkbox.dataset.prizeKey;
    const amountInput = document.querySelector(`[data-prize-amount="${key}"]`);
    const amount = amountInput?.value.trim() || "$0";
    const definition = PRIZE_DEFINITIONS[key];

    prizes.push({
      key,
      label: definition?.shortLabel || key,
      amount
    });
  });

  return prizes;
}

function loadStandardPayouts() {
  document.querySelectorAll("[data-prize-key]").forEach(checkbox => {
    checkbox.checked = ["winner", "runnerUp", "thirdPlace", "worstTeam"].includes(checkbox.dataset.prizeKey);
  });

  const defaults = {
    winner: "$750",
    runnerUp: "$250",
    thirdPlace: "$100",
    worstTeam: "$100",
    goldenBoot: "$50",
    goldenGlove: "$50",
    mostGoalsTeam: "$50",
    mostRedCards: "$25"
  };

  Object.entries(defaults).forEach(([key, value]) => {
    const input = document.querySelector(`[data-prize-amount="${key}"]`);
    if (input) input.value = value;
  });
}

function startDraw() {
  const mode = getSelectedMode();
  const players = parseNames(playersInput.value);
  const required = requiredPlayersForMode(mode);

  if (players.length !== required) {
    setupError.textContent = `This mode requires exactly ${required} players. You entered ${players.length}.`;
    return;
  }

  setupError.textContent = "";

  config = {
    mode,
    players,
    buyIn: buyInInput.value.trim() || "$25",
    prizes: collectPrizeConfig()
  };

  playerPool = buildPlayerPool(mode, players);
  assignments = [];
  currentPlayer = null;
  currentTeamIndex = 0;
  isRevealing = false;

  showDrawApp();
  resetRevealCard();
  setStatus("Ready to begin");
  saveState();
  renderAll();
}

function buildPlayerPool(mode, players) {
  // Shuffle player order AND later draw randomly from the remaining pool.
  const shuffledPlayers = [...players];
  shuffle(shuffledPlayers);

  const sortedTeams = [...BUILT_IN_TEAMS].sort((a, b) => a.seedRank - b.seedRank);

  if (mode === 1) {
    const allTeams = [...sortedTeams];
    shuffle(allTeams);

    return shuffledPlayers.map((player, index) => ({
      player,
      teams: [allTeams[index]]
    }));
  }

  if (mode === 2) {
    const potA = sortedTeams.slice(0, 24);
    const potB = sortedTeams.slice(24, 48);
    shuffle(potA);
    shuffle(potB);

    return shuffledPlayers.map((player, index) => ({
      player,
      teams: [potA[index], potB[index]]
    }));
  }

  const potA = sortedTeams.slice(0, 16);
  const potB = sortedTeams.slice(16, 32);
  const potC = sortedTeams.slice(32, 48);
  shuffle(potA);
  shuffle(potB);
  shuffle(potC);

  return shuffledPlayers.map((player, index) => ({
    player,
    teams: [potA[index], potB[index], potC[index]]
  }));
}

function drawPlayer() {
  if (isRevealing || currentPlayer || playerPool.length === 0) return;

  // Randomly choose from the hidden remaining player pool at click time.
  const randomIndex = Math.floor(Math.random() * playerPool.length);
  currentPlayer = playerPool.splice(randomIndex, 1)[0];
  currentTeamIndex = 0;

  assignments.push({
    player: currentPlayer.player,
    teams: []
  });

  playerNameEl.textContent = currentPlayer.player;
  playerSubLabelEl.textContent = getCurrentSlotLabel();

  resetRevealCard();

  drawPlayerBtn.disabled = true;
  revealTeamBtn.disabled = false;

  setStatus("Player drawn — reveal team");
  saveState();
  renderAll();
}

function revealTeam() {
  if (!currentPlayer || isRevealing) return;

  const team = currentPlayer.teams[currentTeamIndex];
  if (!team) return;

  isRevealing = true;
  drawPlayerBtn.disabled = true;
  revealTeamBtn.disabled = true;

  setStatus("Revealing team...");
  playSound(drumrollSound);

  revealCardEl.className = "reveal-card mystery card-shake";

  window.setTimeout(() => {
    revealCardEl.className = "reveal-card card-flip sweep";
    revealCardEl.innerHTML = `
      <div class="revealed-team">
        <img src="${team.flag}" alt="${escapeHtml(team.name)} flag" />
        <div class="reveal-namebar">
          <h2>${escapeHtml(team.name)}</h2>
          <p>${escapeHtml(getFunFact(team.name))}</p>
        </div>
      </div>
    `;

    assignments[assignments.length - 1].teams.push(team);
    currentTeamIndex += 1;

    playSound(revealSound);
    burstConfetti();

    isRevealing = false;

    renderAll();
    updateExportVisibility();

    const playerHasMoreTeams = currentTeamIndex < currentPlayer.teams.length;

    if (playerHasMoreTeams) {
      playerSubLabelEl.textContent = getCurrentSlotLabel();
      drawPlayerBtn.disabled = true;
      revealTeamBtn.disabled = false;
      setStatus("Same player — reveal next team");
      saveState();
      return;
    }

    currentPlayer = null;
    currentTeamIndex = 0;

    revealTeamBtn.disabled = true;
    drawPlayerBtn.disabled = playerPool.length === 0;

    if (playerPool.length === 0) {
      setStatus("Draw complete");
      saveState();
      showCompletionScreen();
    } else {
      setStatus("Player complete — draw next player");
      saveState();
    }
  }, REVEAL_DELAY_MS);
}

function getCurrentSlotLabel() {
  if (!currentPlayer) return "Current Player";

  const total = currentPlayer.teams.length;
  const current = currentTeamIndex + 1;

  if (total === 1) return "Team 1 of 1";
  return `Seeded Team ${current} of ${total}`;
}

function restoreDrawState() {
  if (currentPlayer) {
    playerNameEl.textContent = currentPlayer.player;
    playerSubLabelEl.textContent = getCurrentSlotLabel();
    drawPlayerBtn.disabled = true;
    revealTeamBtn.disabled = false;
    setStatus("Saved draw restored — reveal team");
  } else {
    playerNameEl.textContent = playerPool.length ? "Click “Draw Player”" : "All Teams Assigned";
    playerSubLabelEl.textContent = "Current Player";
    drawPlayerBtn.disabled = playerPool.length === 0;
    revealTeamBtn.disabled = true;
    setStatus(playerPool.length ? "Ready to continue" : "Draw complete");
  }

  updateExportVisibility();
}

function renderAll() {
  renderRemainingTeams();
  renderAssignments();
  renderPrizeLabels();
  updateProgress();
}

function renderRemainingTeams() {
  // IMPORTANT: remaining teams means teams already revealed are removed.
  // Future hidden allocations are NOT removed, so the column does not go blank.
  const revealedNames = new Set(assignments.flatMap(a => a.teams.map(t => t.name)));

  const remaining = BUILT_IN_TEAMS
    .filter(team => !revealedNames.has(team.name))
    .sort((a, b) => a.seedRank - b.seedRank);

  remainingCountEl.textContent = remaining.length;
  remainingTeamsEl.innerHTML = remaining.map(team => `
    <div class="team-item">
      <img class="flag-thumb" src="${team.flag}" alt="${escapeHtml(team.name)} flag" onerror="this.style.visibility='hidden'" />
      <span>${escapeHtml(team.name)}</span>
    </div>
  `).join("");
}

function renderAssignments() {
  assignmentsEl.innerHTML = assignments.map((assignment, index) => `
    <div class="assignment-item ${assignment.teams.length ? "has-team" : ""}">
      <div class="assignment-left multi-assignment">
        <div class="assignment-flags">
          ${assignment.teams.map(team => `<img class="flag-thumb" src="${team.flag}" alt="${escapeHtml(team.name)} flag" />`).join("")}
        </div>
        <div>
          <div class="assignment-entry">${index + 1}. ${escapeHtml(assignment.player)}</div>
          <div class="assignment-team">${assignment.teams.length ? assignment.teams.map(t => escapeHtml(t.name)).join(" · ") : "Awaiting reveal"}</div>
        </div>
      </div>
    </div>
  `).join("");

  assignedCountEl.textContent = assignments.filter(a => a.teams.length === teamsPerPlayer(config.mode)).length;
}

function renderPrizeLabels() {
  prizeStripEl.innerHTML = "";

  const prizes = config.prizes || [];
  prizes.forEach(prize => {
    const item = document.createElement("div");
    item.className = "prize-pill";
    item.innerHTML = `<strong>${escapeHtml(prize.amount)}</strong><span>${escapeHtml(prize.label)}</span>`;
    prizeStripEl.appendChild(item);
  });

  if (!prizes.length) {
    const item = document.createElement("div");
    item.className = "prize-pill";
    item.innerHTML = `<strong>Prize Pool</strong><span>Custom</span>`;
    prizeStripEl.appendChild(item);
  }

  buyInLabelEl.textContent = `${config.buyIn} Buy-In`;

  const numericBuyIn = Number(String(config.buyIn).replace(/[^0-9.]/g, ""));
  if (!Number.isNaN(numericBuyIn)) {
    totalPotLabelEl.textContent = `${formatMoney(numericBuyIn * config.players.length)} Total Pot`;
  }

  modeLabelEl.textContent = modeName(config.mode);
}

function updateProgress() {
  const assignedTeams = assignments.reduce((sum, a) => sum + a.teams.length, 0);
  const totalTeams = 48;
  const remaining = totalTeams - assignedTeams;

  progressTextEl.textContent = `${assignedTeams} of ${totalTeams} teams assigned`;
  progressFillEl.style.width = `${(assignedTeams / totalTeams) * 100}%`;
  finalModeTextEl.textContent = remaining <= 10 && remaining > 0 ? `Final ${remaining}` : "";
}

function updateExportVisibility() {
  const assignedTeams = assignments.reduce((sum, a) => sum + a.teams.length, 0);
  exportBtn.style.display = assignedTeams === 48 ? "inline-flex" : "none";
}

function autoCompleteDraw() {
  if (!config || isRevealing) return;

  const confirmed = confirm("Auto-complete the rest of the draw? This will instantly assign all remaining teams.");
  if (!confirmed) return;

  // Finish the currently drawn player first, if there is one.
  if (currentPlayer) {
    while (currentTeamIndex < currentPlayer.teams.length) {
      const team = currentPlayer.teams[currentTeamIndex];

      if (!assignments.length || assignments[assignments.length - 1].player !== currentPlayer.player) {
        assignments.push({
          player: currentPlayer.player,
          teams: []
        });
      }

      assignments[assignments.length - 1].teams.push(team);
      currentTeamIndex += 1;
    }

    currentPlayer = null;
    currentTeamIndex = 0;
  }

  // Randomly complete every remaining player without revealing future order beforehand.
  while (playerPool.length > 0) {
    const randomIndex = Math.floor(Math.random() * playerPool.length);
    const player = playerPool.splice(randomIndex, 1)[0];

    assignments.push({
      player: player.player,
      teams: [...player.teams]
    });
  }

  isRevealing = false;

  playerNameEl.textContent = "All Teams Assigned";
  playerSubLabelEl.textContent = "Draw Complete";

  revealCardEl.className = "reveal-card mystery pop-in";
  revealCardEl.innerHTML = `
    <div class="mystery-content">
      <span>✓</span>
      <p>Draw Complete</p>
    </div>
  `;

  drawPlayerBtn.disabled = true;
  revealTeamBtn.disabled = true;

  setStatus("Draw complete");
  renderAll();
  updateExportVisibility();
  saveState();

  burstConfetti();
  window.setTimeout(openEndingScreen, 700);
}

function resetRevealCard() {
  revealCardEl.className = "reveal-card mystery pop-in";
  revealCardEl.innerHTML = `
    <div class="mystery-content">
      <span>?</span>
      <p>Team Reveal</p>
    </div>
  `;
}

function showDrawApp() {
  setupScreen.classList.add("hidden");
  drawApp.classList.remove("hidden");
}

function showCompletionScreen() {
  playerNameEl.textContent = "All Teams Assigned";
  playerSubLabelEl.textContent = "Draw Complete";
  revealCardEl.className = "reveal-card mystery pop-in";
  revealCardEl.innerHTML = `<div class="mystery-content"><span>✓</span><p>Draw Complete</p></div>`;
  burstConfetti();
  burstConfetti();
  window.setTimeout(openEndingScreen, 1200);
}

function openEndingScreen() {
  renderEndingScreen();
  endingScreenEl.classList.add("active");
  endingScreenEl.setAttribute("aria-hidden", "false");
}

function closeEndingScreen() {
  endingScreenEl.classList.remove("active");
  endingScreenEl.setAttribute("aria-hidden", "true");
}

function renderEndingScreen() {
  const cards = assignments.map(item => `
    <div class="ending-card">
      <div class="ending-flags">
        ${item.teams.map(team => `<img src="${team.flag}" alt="${escapeHtml(team.name)} flag" />`).join("")}
      </div>
      <div class="ending-card-text">
        <div class="ending-player">${escapeHtml(item.player)}</div>
        <div class="ending-team">${item.teams.map(t => escapeHtml(t.name)).join(" · ")}</div>
      </div>
    </div>
  `).join("");

  endingScrollTrackEl.innerHTML = cards + cards;
}

async function exportResults() {
  const canvas = document.createElement("canvas");
  const width = 2400;
  const height = 3000;
  const cols = config.mode === 1 ? 4 : 3;
  const rows = Math.ceil(assignments.length / cols);
  const margin = 90;
  const gap = 28;
  const headerHeight = 230;
  const cardW = (width - margin * 2 - gap * (cols - 1)) / cols;
  const cardH = (height - margin * 2 - headerHeight - gap * (rows - 1)) / rows;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#061225");
  bg.addColorStop(0.55, "#071b38");
  bg.addColorStop(1, "#04101f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 76px Arial";
  ctx.textAlign = "center";
  ctx.fillText("World Cup Sweepstakes Results", width / 2, 105);

  ctx.fillStyle = "#d8b76c";
  ctx.font = "800 34px Arial";
  ctx.fillText(`${config.buyIn} Buy-In · ${modeName(config.mode)}`, width / 2, 150);

  ctx.fillStyle = "#d6deea";
  ctx.font = "700 24px Arial";
  const prizeSummary = (config.prizes || []).map(prize => `${prize.label}: ${prize.amount}`).join(" · ");
  wrapText(ctx, prizeSummary || "Custom Prize Pool", width / 2, 188, width - 240, 28, 2);

  const imageCache = {};
  for (const assignment of assignments) {
    for (const team of assignment.teams) {
      if (!imageCache[team.flag]) imageCache[team.flag] = await loadImage(team.flag);
    }
  }

  for (let i = 0; i < assignments.length; i += 1) {
    const item = assignments[i];
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = margin + col * (cardW + gap);
    const y = margin + headerHeight + row * (cardH + gap);

    roundRect(ctx, x, y, cardW, cardH, 24, "rgba(255,255,255,0.08)", "rgba(255,255,255,0.22)");

    const flagAreaH = Math.min(130, cardH * 0.44);
    const flagW = (cardW - 42 - 12 * (item.teams.length - 1)) / Math.max(1, item.teams.length);

    item.teams.forEach((team, teamIndex) => {
      const img = imageCache[team.flag];
      const fx = x + 21 + teamIndex * (flagW + 12);
      const fy = y + 18;
      roundRect(ctx, fx, fy, flagW, flagAreaH, 14, "rgba(255,255,255,0.06)", "rgba(255,255,255,0.10)");
      if (img) drawContainedImage(ctx, img, fx + 8, fy + 8, flagW - 16, flagAreaH - 16);
    });

    ctx.fillStyle = "#ffffff";
    ctx.font = "900 32px Arial";
    wrapText(ctx, item.player, x + cardW / 2, y + flagAreaH + 64, cardW - 34, 34, 2);

    ctx.fillStyle = "#d8b76c";
    ctx.font = "900 24px Arial";
    wrapText(ctx, item.teams.map(t => t.name).join(" · ").toUpperCase(), x + cardW / 2, y + cardH - 44, cardW - 34, 27, 2);
  }

  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "700 24px Arial";
  ctx.textAlign = "right";
  ctx.fillText("Created by Micheál Loughran", width - 70, height - 35);

  const link = document.createElement("a");
  link.download = "world-cup-sweepstakes-results.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    config,
    playerPool,
    assignments,
    currentPlayer,
    currentTeamIndex
  }));
}

function resetDraw() {
  const confirmed = confirm("Reset and return to setup? This clears the current draw.");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

function getFunFact(teamName) {
  return FUN_FACTS[teamName] || "A country with its own World Cup story to write.";
}

function setStatus(message) {
  drawStatusEl.textContent = message;
}

function playSound(audioElement) {
  if (!audioElement) return;

  audioElement.currentTime = 0;
  audioElement.play().catch(() => {});
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function burstConfetti() {
  const colors = ["#d8b76c", "#3b82f6", "#ffffff", "#22c55e", "#ef4444"];

  for (let i = 0; i < 55; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayerEl.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1900);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatMoney(value) {
  return "$" + value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawContainedImage(ctx, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  ctx.drawImage(img, x + (w - drawW) / 2, y + (h - drawH) / 2, drawW, drawH);
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();

  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }

  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = String(text).split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;

    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }

  if (line) lines.push(line);

  const visible = lines.slice(0, maxLines);
  if (lines.length > maxLines) visible[maxLines - 1] += "…";

  visible.forEach((l, idx) => ctx.fillText(l, x, y + idx * lineHeight));
}

document.querySelectorAll('input[name="drawMode"]').forEach(input => {
  input.addEventListener("change", updateSetupInfo);
});

playersInput.addEventListener("input", updateSetupInfo);

loadExampleBtn.addEventListener("click", () => {
  playersInput.value = EXAMPLE_NAMES.slice(0, requiredPlayersForMode(getSelectedMode())).join("\n");
  updateSetupInfo();
});

standardPayoutsBtn.addEventListener("click", loadStandardPayouts);
startDrawBtn.addEventListener("click", startDraw);

drawPlayerBtn.addEventListener("click", drawPlayer);
revealTeamBtn.addEventListener("click", revealTeam);
autoCompleteBtn.addEventListener("click", autoCompleteDraw);
resetBtn.addEventListener("click", resetDraw);
exportBtn.addEventListener("click", exportResults);
showcaseBtn.addEventListener("click", openEndingScreen);
fullscreenBtn.addEventListener("click", toggleFullscreen);
closeEndingBtn.addEventListener("click", closeEndingScreen);

document.addEventListener("keydown", event => {
  if (drawApp.classList.contains("hidden")) return;

  if (event.code === "Space") {
    event.preventDefault();
    drawPlayer();
  }

  if (event.code === "Enter") {
    event.preventDefault();
    revealTeam();
  }

  if (event.key.toLowerCase() === "f") toggleFullscreen();
  if (event.key.toLowerCase() === "e") openEndingScreen();
  if (event.key.toLowerCase() === "r") resetDraw();
  if (event.key.toLowerCase() === "a") autoCompleteDraw();
});

init();
