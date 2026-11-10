// ============================================================
// kanaState.js
// Per-kana runtime state, mastery engine, and Mixed-mode
// direction picker. Consumes kanaMasterData.js.
//
// Persisted to localStorage. No romaji. No raw wrong-counts
// ever surfaced to the UI — only progress labels.
// ============================================================

// ------------------------------------------------------------
// TUNING CONSTANTS  (single place to adjust feel)
// ------------------------------------------------------------
const MASTERY = {
  STEP_UP:        0.08,   // correct  → mastery += this
  STEP_DOWN:      0.12,   // wrong    → mastery -= this  (asymmetric: wrong hurts more)
  MIN:            0.0,
  MAX:            1.0,
  LISTEN_UNLOCK:  0.5,    // readingMastery needed to introduce Listening
  SOLID:          0.85,   // both skills ≥ this → "mastered", used for group unlock
};

const ERROR_WEIGHT = {
  ADD:     1.0,     // per wrong answer
  DECAY:   0.5,     // per correct answer (slowly fades old mistakes)
  MAX:     10.0,    // clamp so it can't grow forever
};

const GROUP_UNLOCK = {
  BASIC_START:      true,   // basic always available
  VOICED_THRESHOLD: 0.8,    // fraction of basic kana at SOLID (both skills) to unlock voiced
  YOON_THRESHOLD:   0.8,    // same, for voiced → yoon
};

const MIXED = {
  MAX_SAME_DIRECTION_RUN: 3,  // cap consecutive same-direction cards
  EPSILON: 0.05,              // |read−listen| below this = "roughly equal" → randomize
};

// ------------------------------------------------------------
// STATE STORE
// Keyed by script+":"+char. One record per kana, per script.
//
// Record:
//   readingMastery   : 0..1
//   listeningMastery : 0..1
//   errorWeight      : 0..10
//   seenReading      : bool
//   seenListening    : bool
// ------------------------------------------------------------
const STATE_KEY = "kanaState_v1";

let stateStore = {};           // { "hiragana:し": {…}, … }
let mixedRunDirection = null;  // "reading" | "listening" | null
let mixedRunCount = 0;

// ------------------------------------------------------------
// INIT / SEED
// ------------------------------------------------------------
function defaultRecord() {
  return {
    readingMastery:   0.0,
    listeningMastery: 0.0,
    errorWeight:      0.0,
    seenReading:      false,
    seenListening:    false,
  };
}

function ensureRecord(script, char) {
  const key = script + ":" + char;
  if (!stateStore[key]) stateStore[key] = defaultRecord();
  return stateStore[key];
}

function initState() {
  // Seed a record for every kana so lookups never miss.
  ALL_KANA.forEach(k => ensureRecord(k.script, k.char));
  // Then overlay persisted state.
  loadState();
}

// ------------------------------------------------------------
// PERSISTENCE
// ------------------------------------------------------------
function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      // Merge persisted over the seeded defaults (so new kana get defaults)
      Object.keys(parsed).forEach(key => {
        if (stateStore[key]) {
          stateStore[key] = { ...defaultRecord(), ...parsed[key] };
        }
      });
    }
  } catch (e) {
    console.warn("[kanaState] load failed:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(stateStore));
  } catch (e) {
    console.warn("[kanaState] save failed:", e);
  }
}

function resetAllState() {
  stateStore = {};
  ALL_KANA.forEach(k => ensureRecord(k.script, k.char));
  mixedRunDirection = null;
  mixedRunCount = 0;
  saveState();
}

// ------------------------------------------------------------
// MASTERY UPDATES
// ------------------------------------------------------------
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// Called when a Reading card is answered.
function recordReadingAnswer(script, char, correct) {
  const r = ensureRecord(script, char);
  r.seenReading = true;
  if (correct) {
    r.readingMastery = clamp(r.readingMastery + MASTERY.STEP_UP, MASTERY.MIN, MASTERY.MAX);
    r.errorWeight    = clamp(r.errorWeight - ERROR_WEIGHT.DECAY, 0, ERROR_WEIGHT.MAX);
  } else {
    r.readingMastery = clamp(r.readingMastery - MASTERY.STEP_DOWN, MASTERY.MIN, MASTERY.MAX);
    r.errorWeight    = clamp(r.errorWeight + ERROR_WEIGHT.ADD, 0, ERROR_WEIGHT.MAX);
  }
  saveState();
}

// Called when a Listening card is answered.
function recordListeningAnswer(script, char, correct) {
  const r = ensureRecord(script, char);
  r.seenListening = true;
  if (correct) {
    r.listeningMastery = clamp(r.listeningMastery + MASTERY.STEP_UP, MASTERY.MIN, MASTERY.MAX);
    r.errorWeight      = clamp(r.errorWeight - ERROR_WEIGHT.DECAY, 0, ERROR_WEIGHT.MAX);
  } else {
    r.listeningMastery = clamp(r.listeningMastery - MASTERY.STEP_DOWN, MASTERY.MIN, MASTERY.MAX);
    r.errorWeight      = clamp(r.errorWeight + ERROR_WEIGHT.ADD, 0, ERROR_WEIGHT.MAX);
  }
  saveState();
}

// ------------------------------------------------------------
// GATES & STATUS
// ------------------------------------------------------------
function isListeningUnlocked(script, char) {
  const r = ensureRecord(script, char);
  return r.readingMastery >= MASTERY.LISTEN_UNLOCK;
}

function isMastered(script, char) {
  const r = ensureRecord(script, char);
  return r.readingMastery   >= MASTERY.SOLID
      && r.listeningMastery >= MASTERY.SOLID;
}

function needsReview(script, char) {
  const r = ensureRecord(script, char);
  return r.errorWeight >= 3.0 || (r.seenReading && r.readingMastery < 0.4);
}

// Progress label for the UI — progress framing, never a raw count.
function getProgressLabel(script, char) {
  const r = ensureRecord(script, char);
  const avg = (r.readingMastery + r.listeningMastery) / 2;
  if (avg >= 0.85) return "Solid";
  if (avg >= 0.6)  return "Getting stronger";
  if (avg >= 0.3)  return "Getting there";
  if (r.seenReading || r.seenListening) return "Just started";
  return "New";
}

// 0..1 bar value for the UI
function getProgressValue(script, char) {
  const r = ensureRecord(script, char);
  return (r.readingMastery + r.listeningMastery) / 2;
}

// ------------------------------------------------------------
// GROUP UNLOCKING  (Basic → Voiced → Yōon, per script)
// ------------------------------------------------------------
function groupUnlocked(script, group) {
  if (group === "basic") return GROUP_UNLOCK.BASIC_START;
  if (group === "voiced") {
    return fractionSolid(script, "basic") >= GROUP_UNLOCK.VOICED_THRESHOLD;
  }
  if (group === "yoon") {
    return fractionSolid(script, "voiced") >= GROUP_UNLOCK.YOON_THRESHOLD;
  }
  return false;
}

// Fraction of a group whose kana are "mastered" (both skills solid).
function fractionSolid(script, group) {
  const pool = getGroupPool(script, group);
  if (pool.length === 0) return 0;
  const solid = pool.filter(k => isMastered(script, k.char)).length;
  return solid / pool.length;
}

// Convenience: list of unlocked groups for a script.
function unlockedGroups(script) {
  return ["basic", "voiced", "yoon"].filter(g => groupUnlocked(script, g));
}

// ------------------------------------------------------------
// SCHEDULING — which kana comes up next
// Weighted-random: low mastery + high errorWeight + not-recently-seen
// get priority. (Simple scheduler; real SRS can layer on later.)
// ------------------------------------------------------------
function pickNextKana(script, group) {
  const pool = getGroupPool(script, group).map(k => k.char);
  if (pool.length === 0) return null;

  const weights = pool.map(char => {
    const r = ensureRecord(script, char);
    const avgMastery = (r.readingMastery + r.listeningMastery) / 2;
    let w = 1.0 + (1.0 - avgMastery) * 3.0;      // unknown/low mastery = high weight
    w += r.errorWeight * 0.8;                     // boost kana with mistakes
    if (!r.seenReading && !r.seenListening) w += 2.0;  // never-seen enters rotation
    return w;
  });

  const total = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

// ------------------------------------------------------------
// MIXED MODE — direction picker
// For a given kana, decide whether to show Reading or Listening,
// biased toward whichever skill is weaker, with a cap on runs.
// ------------------------------------------------------------
function pickDirection(script, char) {
  const r = ensureRecord(script, char);
  const listeningUnlocked = isListeningUnlocked(script, char);

  // If listening isn't unlocked, must be reading.
  if (!listeningUnlocked) return enforceRunCap("reading", false);

  const diff = r.readingMastery - r.listeningMastery;

  let dir;
  if (Math.abs(diff) < MIXED.EPSILON) {
    dir = Math.random() < 0.5 ? "reading" : "listening";
  } else {
    dir = diff > 0 ? "listening" : "reading"; // weaker side
  }
  return enforceRunCap(dir, listeningUnlocked);
}

// Cap consecutive same-direction cards so weighting doesn't feel like a grind.
// `listeningUnlocked` for the CURRENT kana must be passed in, so we never
// flip into a direction this kana can't use.
function enforceRunCap(dir, listeningUnlocked) {
  if (dir === mixedRunDirection && mixedRunCount >= MIXED.MAX_SAME_DIRECTION_RUN) {
    const flipped = dir === "reading" ? "listening" : "reading";
    // Only flip if the flipped direction is actually available for this kana.
    // Reading is always available; listening only when unlocked.
    if (flipped === "reading" || listeningUnlocked) {
      dir = flipped;
    }
    // else: stay on the same direction rather than flipping into a locked one.
    // (Slightly exceeds the run cap, but correctness > cap. Cap is a comfort
    // heuristic, not a hard rule.)
  }

  if (dir === mixedRunDirection) {
    mixedRunCount++;
  } else {
    mixedRunDirection = dir;
    mixedRunCount = 1;
  }
  return dir;
}

function resetMixedRun() {
  mixedRunDirection = null;
  mixedRunCount = 0;
}

// ------------------------------------------------------------
// EXPORT (Node-style, matches existing files)
// ------------------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    MASTERY, ERROR_WEIGHT, GROUP_UNLOCK, MIXED,
    initState, saveState, loadState, resetAllState,
    recordReadingAnswer, recordListeningAnswer,
    isListeningUnlocked, isMastered, needsReview,
    getProgressLabel, getProgressValue,
    groupUnlocked, fractionSolid, unlockedGroups,
    pickNextKana, pickDirection, resetMixedRun,
  };
}