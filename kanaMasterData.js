// ============================================================
// kanaMasterData.js
// Master kana list for Reading / Listening / Mixed modes.
//
// Shape:
//   { script, char, group, confusables: [chars] }
//
// group: "basic" | "voiced" | "yoon"
// confusables: same-script shape-similar kana only.
//   Empty array = no strong confusable; grid uses random fill.
// No romaji anywhere — kana is the identity.
// ============================================================

// ------------------------------------------------------------
// HIRAGANA — BASIC (46)
// ------------------------------------------------------------
const HIRAGANA_BASIC = [
  // あ行
  { script: "hiragana", char: "あ", group: "basic", confusables: ["お", "め", "ぬ"] },
  { script: "hiragana", char: "い", group: "basic", confusables: ["り", "こ"] },
  { script: "hiragana", char: "う", group: "basic", confusables: ["ら", "ろ", "つ"] },
  { script: "hiragana", char: "え", group: "basic", confusables: ["ん", "そ"] },
  { script: "hiragana", char: "お", group: "basic", confusables: ["あ", "む"] },
  // か行
  { script: "hiragana", char: "か", group: "basic", confusables: ["が", "こ"] },
  { script: "hiragana", char: "き", group: "basic", confusables: ["さ", "ち", "ぎ"] },
  { script: "hiragana", char: "く", group: "basic", confusables: ["へ"] },
  { script: "hiragana", char: "け", group: "basic", confusables: ["は", "ほ", "げ"] },
  { script: "hiragana", char: "こ", group: "basic", confusables: ["に", "い", "ご"] },
  // さ行
  { script: "hiragana", char: "さ", group: "basic", confusables: ["き", "ち", "ざ"] },
  { script: "hiragana", char: "し", group: "basic", confusables: ["つ", "ん", "そ", "の"] },
  { script: "hiragana", char: "す", group: "basic", confusables: ["む"] },
  { script: "hiragana", char: "せ", group: "basic", confusables: ["ち", "て"] },
  { script: "hiragana", char: "そ", group: "basic", confusables: ["し", "つ", "ん", "の", "ろ"] },
  // た行
  { script: "hiragana", char: "た", group: "basic", confusables: ["な", "に"] },
  { script: "hiragana", char: "ち", group: "basic", confusables: ["き", "さ", "せ"] },
  { script: "hiragana", char: "つ", group: "basic", confusables: ["し", "ん", "そ", "の", "う"] },
  { script: "hiragana", char: "て", group: "basic", confusables: ["と", "せ"] },
  { script: "hiragana", char: "と", group: "basic", confusables: ["て"] },
  // な行
  { script: "hiragana", char: "な", group: "basic", confusables: ["た"] },
  { script: "hiragana", char: "に", group: "basic", confusables: ["こ"] },
  { script: "hiragana", char: "ぬ", group: "basic", confusables: ["め", "あ"] },
  { script: "hiragana", char: "ね", group: "basic", confusables: ["れ", "わ", "ぬ"] },
  { script: "hiragana", char: "の", group: "basic", confusables: ["し", "つ", "ん", "そ"] },
  // は行
  { script: "hiragana", char: "は", group: "basic", confusables: ["ほ", "ま", "け"] },
  { script: "hiragana", char: "ひ", group: "basic", confusables: [] },
  { script: "hiragana", char: "ふ", group: "basic", confusables: [] },
  { script: "hiragana", char: "へ", group: "basic", confusables: ["く", "け"] },
  { script: "hiragana", char: "ほ", group: "basic", confusables: ["は", "ま", "け"] },
  // ま行
  { script: "hiragana", char: "ま", group: "basic", confusables: ["は", "ほ"] },
  { script: "hiragana", char: "み", group: "basic", confusables: [] },
  { script: "hiragana", char: "む", group: "basic", confusables: ["す", "お"] },
  { script: "hiragana", char: "め", group: "basic", confusables: ["ぬ", "あ"] },
  { script: "hiragana", char: "も", group: "basic", confusables: [] },
  // や行
  { script: "hiragana", char: "や", group: "basic", confusables: ["ゆ", "よ"] },
  { script: "hiragana", char: "ゆ", group: "basic", confusables: ["や", "よ"] },
  { script: "hiragana", char: "よ", group: "basic", confusables: ["や", "ゆ"] },
  // ら行
  { script: "hiragana", char: "ら", group: "basic", confusables: ["う", "ろ"] },
  { script: "hiragana", char: "り", group: "basic", confusables: ["い"] },
  { script: "hiragana", char: "る", group: "basic", confusables: ["ろ"] },
  { script: "hiragana", char: "れ", group: "basic", confusables: ["ね", "わ"] },
  { script: "hiragana", char: "ろ", group: "basic", confusables: ["る", "そ", "ら"] },
  // わ行 + ん
  { script: "hiragana", char: "わ", group: "basic", confusables: ["ね", "れ"] },
  { script: "hiragana", char: "を", group: "basic", confusables: [] },
  { script: "hiragana", char: "ん", group: "basic", confusables: ["し", "つ", "そ", "の", "え"] },
];

// ------------------------------------------------------------
// HIRAGANA — VOICED (25)
// ------------------------------------------------------------
const HIRAGANA_VOICED = [
  // が行
  { script: "hiragana", char: "が", group: "voiced", confusables: ["か", "ぎ"] },
  { script: "hiragana", char: "ぎ", group: "voiced", confusables: ["き", "ざ"] },
  { script: "hiragana", char: "ぐ", group: "voiced", confusables: ["く"] },
  { script: "hiragana", char: "げ", group: "voiced", confusables: ["け", "ぜ"] },
  { script: "hiragana", char: "ご", group: "voiced", confusables: ["こ", "ぞ"] },
  // ざ行
  { script: "hiragana", char: "ざ", group: "voiced", confusables: ["さ", "ぎ"] },
  { script: "hiragana", char: "じ", group: "voiced", confusables: ["し", "ぢ"] },
  { script: "hiragana", char: "ず", group: "voiced", confusables: ["す", "づ"] },
  { script: "hiragana", char: "ぜ", group: "voiced", confusables: ["せ", "げ", "で"] },
  { script: "hiragana", char: "ぞ", group: "voiced", confusables: ["そ", "ご", "ど"] },
  // だ行
  { script: "hiragana", char: "だ", group: "voiced", confusables: ["た", "ざ"] },
  { script: "hiragana", char: "ぢ", group: "voiced", confusables: ["ち", "じ"] },
  { script: "hiragana", char: "づ", group: "voiced", confusables: ["つ", "ず"] },
  { script: "hiragana", char: "で", group: "voiced", confusables: ["て", "ぜ"] },
  { script: "hiragana", char: "ど", group: "voiced", confusables: ["と", "ぞ"] },
  // ば行
  { script: "hiragana", char: "ば", group: "voiced", confusables: ["は", "ぱ", "ぼ"] },
  { script: "hiragana", char: "び", group: "voiced", confusables: ["ひ", "ぴ"] },
  { script: "hiragana", char: "ぶ", group: "voiced", confusables: ["ふ", "ぷ"] },
  { script: "hiragana", char: "べ", group: "voiced", confusables: ["へ", "ぺ"] },
  { script: "hiragana", char: "ぼ", group: "voiced", confusables: ["ほ", "ぽ", "ば"] },
  // ぱ行
  { script: "hiragana", char: "ぱ", group: "voiced", confusables: ["は", "ば", "ぽ"] },
  { script: "hiragana", char: "ぴ", group: "voiced", confusables: ["ひ", "び"] },
  { script: "hiragana", char: "ぷ", group: "voiced", confusables: ["ふ", "ぶ"] },
  { script: "hiragana", char: "ぺ", group: "voiced", confusables: ["へ", "べ"] },
  { script: "hiragana", char: "ぽ", group: "voiced", confusables: ["ほ", "ぼ", "ぱ"] },
];

// ------------------------------------------------------------
// HIRAGANA — YŌON (33)
// ------------------------------------------------------------
const HIRAGANA_YOON = [
  { script: "hiragana", char: "きゃ", group: "yoon", confusables: ["きゅ", "きょ", "や"] },
  { script: "hiragana", char: "きゅ", group: "yoon", confusables: ["きゃ", "きょ", "ゆ"] },
  { script: "hiragana", char: "きょ", group: "yoon", confusables: ["きゃ", "きゅ", "よ"] },

  { script: "hiragana", char: "しゃ", group: "yoon", confusables: ["しゅ", "しょ", "や"] },
  { script: "hiragana", char: "しゅ", group: "yoon", confusables: ["しゃ", "しょ", "ゆ"] },
  { script: "hiragana", char: "しょ", group: "yoon", confusables: ["しゃ", "しゅ", "よ"] },

  { script: "hiragana", char: "ちゃ", group: "yoon", confusables: ["ちゅ", "ちょ", "や"] },
  { script: "hiragana", char: "ちゅ", group: "yoon", confusables: ["ちゃ", "ちょ", "ゆ"] },
  { script: "hiragana", char: "ちょ", group: "yoon", confusables: ["ちゃ", "ちゅ", "よ"] },

  { script: "hiragana", char: "にゃ", group: "yoon", confusables: ["にゅ", "にょ", "や"] },
  { script: "hiragana", char: "にゅ", group: "yoon", confusables: ["にゃ", "にょ", "ゆ"] },
  { script: "hiragana", char: "にょ", group: "yoon", confusables: ["にゃ", "にゅ", "よ"] },

  { script: "hiragana", char: "ひゃ", group: "yoon", confusables: ["ひゅ", "ひょ", "や"] },
  { script: "hiragana", char: "ひゅ", group: "yoon", confusables: ["ひゃ", "ひょ", "ゆ"] },
  { script: "hiragana", char: "ひょ", group: "yoon", confusables: ["ひゃ", "ひゅ", "よ"] },

  { script: "hiragana", char: "みゃ", group: "yoon", confusables: ["みゅ", "みょ", "や"] },
  { script: "hiragana", char: "みゅ", group: "yoon", confusables: ["みゃ", "みょ", "ゆ"] },
  { script: "hiragana", char: "みょ", group: "yoon", confusables: ["みゃ", "みゅ", "よ"] },

  { script: "hiragana", char: "りゃ", group: "yoon", confusables: ["りゅ", "りょ", "や"] },
  { script: "hiragana", char: "りゅ", group: "yoon", confusables: ["りゃ", "りょ", "ゆ"] },
  { script: "hiragana", char: "りょ", group: "yoon", confusables: ["りゃ", "りゅ", "よ"] },

  { script: "hiragana", char: "ぎゃ", group: "yoon", confusables: ["ぎゅ", "ぎょ", "や"] },
  { script: "hiragana", char: "ぎゅ", group: "yoon", confusables: ["ぎゃ", "ぎょ", "ゆ"] },
  { script: "hiragana", char: "ぎょ", group: "yoon", confusables: ["ぎゃ", "ぎゅ", "よ"] },

  { script: "hiragana", char: "じゃ", group: "yoon", confusables: ["じゅ", "じょ", "や"] },
  { script: "hiragana", char: "じゅ", group: "yoon", confusables: ["じゃ", "じょ", "ゆ"] },
  { script: "hiragana", char: "じょ", group: "yoon", confusables: ["じゃ", "じゅ", "よ"] },

  { script: "hiragana", char: "びゃ", group: "yoon", confusables: ["びゅ", "びょ", "や"] },
  { script: "hiragana", char: "びゅ", group: "yoon", confusables: ["びゃ", "びょ", "ゆ"] },
  { script: "hiragana", char: "びょ", group: "yoon", confusables: ["びゃ", "びゅ", "よ"] },

  { script: "hiragana", char: "ぴゃ", group: "yoon", confusables: ["ぴゅ", "ぴょ", "や"] },
  { script: "hiragana", char: "ぴゅ", group: "yoon", confusables: ["ぴゃ", "ぴょ", "ゆ"] },
  { script: "hiragana", char: "ぴょ", group: "yoon", confusables: ["ぴゃ", "ぴゅ", "よ"] },
];

// ------------------------------------------------------------
// KATAKANA — BASIC (46)
// ------------------------------------------------------------
const KATAKANA_BASIC = [
  // ア行
  { script: "katakana", char: "ア", group: "basic", confusables: ["オ", "マ", "ヌ"] },
  { script: "katakana", char: "イ", group: "basic", confusables: ["リ", "コ"] },
  { script: "katakana", char: "ウ", group: "basic", confusables: ["ラ", "ロ", "ワ"] },
  { script: "katakana", char: "エ", group: "basic", confusables: ["ン", "ソ", "ユ"] },
  { script: "katakana", char: "オ", group: "basic", confusables: ["ア", "ム"] },
  // カ行
  { script: "katakana", char: "カ", group: "basic", confusables: ["ガ", "コ", "ク"] },
  { script: "katakana", char: "キ", group: "basic", confusables: ["サ", "チ", "ギ"] },
  { script: "katakana", char: "ク", group: "basic", confusables: ["タ", "ワ", "ケ"] },
  { script: "katakana", char: "ケ", group: "basic", confusables: ["ク", "タ", "ワ"] },
  { script: "katakana", char: "コ", group: "basic", confusables: ["ニ", "イ", "ゴ"] },
  // サ行
  { script: "katakana", char: "サ", group: "basic", confusables: ["キ", "チ", "ザ"] },
  { script: "katakana", char: "シ", group: "basic", confusables: ["ツ", "ン", "ソ", "ノ"] },
  { script: "katakana", char: "ス", group: "basic", confusables: ["ヌ"] },
  { script: "katakana", char: "セ", group: "basic", confusables: ["チ", "テ"] },
  { script: "katakana", char: "ソ", group: "basic", confusables: ["シ", "ツ", "ン", "ノ"] },
  // タ行
  { script: "katakana", char: "タ", group: "basic", confusables: ["ク", "ナ", "ケ"] },
  { script: "katakana", char: "チ", group: "basic", confusables: ["キ", "サ", "セ"] },
  { script: "katakana", char: "ツ", group: "basic", confusables: ["シ", "ン", "ソ", "ノ", "ウ"] },
  { script: "katakana", char: "テ", group: "basic", confusables: ["ト", "セ"] },
  { script: "katakana", char: "ト", group: "basic", confusables: ["テ"] },
  // ナ行
  { script: "katakana", char: "ナ", group: "basic", confusables: ["タ"] },
  { script: "katakana", char: "ニ", group: "basic", confusables: ["コ"] },
  { script: "katakana", char: "ヌ", group: "basic", confusables: ["ス", "ア"] },
  { script: "katakana", char: "ネ", group: "basic", confusables: ["レ", "ワ", "ヌ"] },
  { script: "katakana", char: "ノ", group: "basic", confusables: ["シ", "ツ", "ン", "ソ"] },
  // ハ行
  { script: "katakana", char: "ハ", group: "basic", confusables: ["ホ", "マ", "ケ"] },
  { script: "katakana", char: "ヒ", group: "basic", confusables: [] },
  { script: "katakana", char: "フ", group: "basic", confusables: [] },
  { script: "katakana", char: "ヘ", group: "basic", confusables: ["ク", "ケ"] },
  { script: "katakana", char: "ホ", group: "basic", confusables: ["ハ", "マ", "ケ"] },
  // マ行
  { script: "katakana", char: "マ", group: "basic", confusables: ["ハ", "ホ", "ア"] },
  { script: "katakana", char: "ミ", group: "basic", confusables: [] },
  { script: "katakana", char: "ム", group: "basic", confusables: ["ス", "オ"] },
  { script: "katakana", char: "メ", group: "basic", confusables: ["ヌ", "ア"] },
  { script: "katakana", char: "モ", group: "basic", confusables: [] },
  // ヤ行
  { script: "katakana", char: "ヤ", group: "basic", confusables: ["ユ", "ヨ"] },
  { script: "katakana", char: "ユ", group: "basic", confusables: ["ヤ", "ヨ"] },
  { script: "katakana", char: "ヨ", group: "basic", confusables: ["ヤ", "ユ"] },
  // ラ行
  { script: "katakana", char: "ラ", group: "basic", confusables: ["ウ", "ロ"] },
  { script: "katakana", char: "リ", group: "basic", confusables: ["イ"] },
  { script: "katakana", char: "ル", group: "basic", confusables: ["ロ"] },
  { script: "katakana", char: "レ", group: "basic", confusables: ["ネ", "ワ"] },
  { script: "katakana", char: "ロ", group: "basic", confusables: ["ル", "ソ", "ラ"] },
  // ワ行 + ン
  { script: "katakana", char: "ワ", group: "basic", confusables: ["ネ", "レ", "ク", "タ"] },
  { script: "katakana", char: "ヲ", group: "basic", confusables: [] },
  { script: "katakana", char: "ン", group: "basic", confusables: ["シ", "ツ", "ソ", "ノ", "エ"] },
];

// ------------------------------------------------------------
// KATAKANA — VOICED (25)
// ------------------------------------------------------------
const KATAKANA_VOICED = [
  { script: "katakana", char: "ガ", group: "voiced", confusables: ["カ", "ギ"] },
  { script: "katakana", char: "ギ", group: "voiced", confusables: ["キ", "ザ"] },
  { script: "katakana", char: "グ", group: "voiced", confusables: ["ク"] },
  { script: "katakana", char: "ゲ", group: "voiced", confusables: ["ケ", "ゼ"] },
  { script: "katakana", char: "ゴ", group: "voiced", confusables: ["コ", "ゾ"] },

  { script: "katakana", char: "ザ", group: "voiced", confusables: ["サ", "ギ"] },
  { script: "katakana", char: "ジ", group: "voiced", confusables: ["シ", "ヂ"] },
  { script: "katakana", char: "ズ", group: "voiced", confusables: ["ス", "ヅ"] },
  { script: "katakana", char: "ゼ", group: "voiced", confusables: ["セ", "ゲ", "デ"] },
  { script: "katakana", char: "ゾ", group: "voiced", confusables: ["ソ", "ゴ", "ド"] },

  { script: "katakana", char: "ダ", group: "voiced", confusables: ["タ", "ザ"] },
  { script: "katakana", char: "ヂ", group: "voiced", confusables: ["チ", "ジ"] },
  { script: "katakana", char: "ヅ", group: "voiced", confusables: ["ツ", "ズ"] },
  { script: "katakana", char: "デ", group: "voiced", confusables: ["テ", "ゼ"] },
  { script: "katakana", char: "ド", group: "voiced", confusables: ["ト", "ゾ"] },

  { script: "katakana", char: "バ", group: "voiced", confusables: ["ハ", "パ", "ボ"] },
  { script: "katakana", char: "ビ", group: "voiced", confusables: ["ヒ", "ピ"] },
  { script: "katakana", char: "ブ", group: "voiced", confusables: ["フ", "プ"] },
  { script: "katakana", char: "ベ", group: "voiced", confusables: ["ヘ", "ペ"] },
  { script: "katakana", char: "ボ", group: "voiced", confusables: ["ホ", "ポ", "バ"] },

  { script: "katakana", char: "パ", group: "voiced", confusables: ["ハ", "バ", "ポ"] },
  { script: "katakana", char: "ピ", group: "voiced", confusables: ["ヒ", "ビ"] },
  { script: "katakana", char: "プ", group: "voiced", confusables: ["フ", "ブ"] },
  { script: "katakana", char: "ペ", group: "voiced", confusables: ["ヘ", "ベ"] },
  { script: "katakana", char: "ポ", group: "voiced", confusables: ["ホ", "ボ", "パ"] },
];

// ------------------------------------------------------------
// KATAKANA — YŌON (33)
// ------------------------------------------------------------
const KATAKANA_YOON = [
  { script: "katakana", char: "キャ", group: "yoon", confusables: ["キュ", "キョ", "ヤ"] },
  { script: "katakana", char: "キュ", group: "yoon", confusables: ["キャ", "キョ", "ユ"] },
  { script: "katakana", char: "キョ", group: "yoon", confusables: ["キャ", "キュ", "ヨ"] },

  { script: "katakana", char: "シャ", group: "yoon", confusables: ["シュ", "ショ", "ヤ"] },
  { script: "katakana", char: "シュ", group: "yoon", confusables: ["シャ", "ショ", "ユ"] },
  { script: "katakana", char: "ショ", group: "yoon", confusables: ["シャ", "シュ", "ヨ"] },

  { script: "katakana", char: "チャ", group: "yoon", confusables: ["チュ", "チョ", "ヤ"] },
  { script: "katakana", char: "チュ", group: "yoon", confusables: ["チャ", "チョ", "ユ"] },
  { script: "katakana", char: "チョ", group: "yoon", confusables: ["チャ", "チュ", "ヨ"] },

  { script: "katakana", char: "ニャ", group: "yoon", confusables: ["ニュ", "ニョ", "ヤ"] },
  { script: "katakana", char: "ニュ", group: "yoon", confusables: ["ニャ", "ニョ", "ユ"] },
  { script: "katakana", char: "ニョ", group: "yoon", confusables: ["ニャ", "ニュ", "ヨ"] },

  { script: "katakana", char: "ヒャ", group: "yoon", confusables: ["ヒュ", "ヒョ", "ヤ"] },
  { script: "katakana", char: "ヒュ", group: "yoon", confusables: ["ヒャ", "ヒョ", "ユ"] },
  { script: "katakana", char: "ヒョ", group: "yoon", confusables: ["ヒャ", "ヒュ", "ヨ"] },

  { script: "katakana", char: "ミャ", group: "yoon", confusables: ["ミュ", "ミョ", "ヤ"] },
  { script: "katakana", char: "ミュ", group: "yoon", confusables: ["ミャ", "ミョ", "ユ"] },
  { script: "katakana", char: "ミョ", group: "yoon", confusables: ["ミャ", "ミュ", "ヨ"] },

  { script: "katakana", char: "リャ", group: "yoon", confusables: ["リュ", "リョ", "ヤ"] },
  { script: "katakana", char: "リュ", group: "yoon", confusables: ["リャ", "リョ", "ユ"] },
  { script: "katakana", char: "リョ", group: "yoon", confusables: ["リャ", "リュ", "ヨ"] },

  { script: "katakana", char: "ギャ", group: "yoon", confusables: ["ギュ", "ギョ", "ヤ"] },
  { script: "katakana", char: "ギュ", group: "yoon", confusables: ["ギャ", "ギョ", "ユ"] },
  { script: "katakana", char: "ギョ", group: "yoon", confusables: ["ギャ", "ギュ", "ヨ"] },

  { script: "katakana", char: "ジャ", group: "yoon", confusables: ["ジュ", "ジョ", "ヤ"] },
  { script: "katakana", char: "ジュ", group: "yoon", confusables: ["ジャ", "ジョ", "ユ"] },
  { script: "katakana", char: "ジョ", group: "yoon", confusables: ["ジャ", "ジュ", "ヨ"] },

  { script: "katakana", char: "ビャ", group: "yoon", confusables: ["ビュ", "ビョ", "ヤ"] },
  { script: "katakana", char: "ビュ", group: "yoon", confusables: ["ビャ", "ビョ", "ユ"] },
  { script: "katakana", char: "ビョ", group: "yoon", confusables: ["ビャ", "ビュ", "ヨ"] },

  { script: "katakana", char: "ピャ", group: "yoon", confusables: ["ピュ", "ピョ", "ヤ"] },
  { script: "katakana", char: "ピュ", group: "yoon", confusables: ["ピャ", "ピョ", "ユ"] },
  { script: "katakana", char: "ピョ", group: "yoon", confusables: ["ピャ", "ピュ", "ヨ"] },
];

// ============================================================
// AGGREGATE + LOOKUP HELPERS
// ============================================================

const ALL_KANA = [
  ...HIRAGANA_BASIC, ...HIRAGANA_VOICED, ...HIRAGANA_YOON,
  ...KATAKANA_BASIC, ...KATAKANA_VOICED, ...KATAKANA_YOON,
];

// script -> group -> array of entries
const KANA_BY_SCRIPT_GROUP = {
  hiragana: { basic: HIRAGANA_BASIC, voiced: HIRAGANA_VOICED, yoon: HIRAGANA_YOON },
  katakana: { basic: KATAKANA_BASIC, voiced: KATAKANA_VOICED, yoon: KATAKANA_YOON },
};

// script + char -> entry  (fast lookup)
const KANA_INDEX = new Map();
ALL_KANA.forEach(k => KANA_INDEX.set(k.script + ":" + k.char, k));

function getKana(script, char) {
  return KANA_INDEX.get(script + ":" + char) || null;
}

function getGroupPool(script, group) {
  return KANA_BY_SCRIPT_GROUP[script]?.[group] || [];
}

// Same-script confusables, filtered to those that actually exist in this
// script+group (safety net — keeps grid honest if a table drifts).
function getConfusables(script, char) {
  const entry = getKana(script, char);
  if (!entry || entry.confusables.length === 0) return [];
  return entry.confusables.filter(c => {
    const other = getKana(script, c);
    return other && other.char !== char;
  });
}

// Build a 16-cell grid pool for a given answer:
//   [answer] + confusables + random same-group fill, deduped, exactly 16.
// Returns an array of chars (shuffled).
function buildGridPool(script, group, answerChar, gridSize = 16) {
  const pool = getGroupPool(script, group);
  const answerEntry = getKana(script, answerChar);
  if (!answerEntry) return [];

  const selected = new Set([answerChar]);

  // 1) confusables first
  const confs = getConfusables(script, answerChar);
  const shuffledConfs = shuffleCopy(confs);
  for (const c of shuffledConfs) {
    if (selected.size >= gridSize) break;
    // confusable must be in the same group's pool to be a valid grid cell
    if (pool.some(p => p.char === c)) selected.add(c);
  }

  // 2) random fill from same group
  const remaining = shuffleCopy(pool.filter(p => !selected.has(p.char)));
  for (const p of remaining) {
    if (selected.size >= gridSize) break;
    selected.add(p.char);
  }

  return shuffleCopy(Array.from(selected));
}

function shuffleCopy(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Export for Node (matches kanaData.js pattern)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    HIRAGANA_BASIC, HIRAGANA_VOICED, HIRAGANA_YOON,
    KATAKANA_BASIC, KATAKANA_VOICED, KATAKANA_YOON,
    ALL_KANA, KANA_BY_SCRIPT_GROUP, KANA_INDEX,
    getKana, getGroupPool, getConfusables, buildGridPool,
  };
}