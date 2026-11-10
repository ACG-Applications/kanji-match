// ============================================================
// kanaData.js
// Shared data for K7 (chart) and K8 (game).
// ============================================================

const BASIC_KANA = [
  { kata: "ア", hira: "あ" }, { kata: "イ", hira: "い" }, { kata: "ウ", hira: "う" },
  { kata: "エ", hira: "え" }, { kata: "オ", hira: "お" },
  { kata: "カ", hira: "か" }, { kata: "キ", hira: "き" }, { kata: "ク", hira: "く" },
  { kata: "ケ", hira: "け" }, { kata: "コ", hira: "こ" },
  { kata: "サ", hira: "さ" }, { kata: "シ", hira: "し" }, { kata: "ス", hira: "す" },
  { kata: "セ", hira: "せ" }, { kata: "ソ", hira: "そ" },
  { kata: "タ", hira: "た" }, { kata: "チ", hira: "ち" }, { kata: "ツ", hira: "つ" },
  { kata: "テ", hira: "て" }, { kata: "ト", hira: "と" },
  { kata: "ナ", hira: "な" }, { kata: "ニ", hira: "に" }, { kata: "ヌ", hira: "ぬ" },
  { kata: "ネ", hira: "ね" }, { kata: "ノ", hira: "の" },
  { kata: "ハ", hira: "は" }, { kata: "ヒ", hira: "ひ" }, { kata: "フ", hira: "ふ" },
  { kata: "ヘ", hira: "へ" }, { kata: "ホ", hira: "ほ" },
  { kata: "マ", hira: "ま" }, { kata: "ミ", hira: "み" }, { kata: "ム", hira: "む" },
  { kata: "メ", hira: "め" }, { kata: "モ", hira: "も" },
  { kata: "ヤ", hira: "や" }, { kata: "", hira: "" }, { kata: "ユ", hira: "ゆ" }, { kata: "", hira: "" }, { kata: "ヨ", hira: "よ" },
  { kata: "ラ", hira: "ら" }, { kata: "リ", hira: "り" }, { kata: "ル", hira: "る" },
  { kata: "レ", hira: "れ" }, { kata: "ロ", hira: "ろ" },
  { kata: "ワ", hira: "わ" }, { kata: "", hira: "" }, { kata: "", hira: "" }, { kata: "", hira: "" }, { kata: "ヲ", hira: "を" },
  { kata: "ン", hira: "ん" },
];

const DAKUTEN_KANA = [
  { kata: "ガ", hira: "が" }, { kata: "ギ", hira: "ぎ" }, { kata: "グ", hira: "ぐ" },
  { kata: "ゲ", hira: "げ" }, { kata: "ゴ", hira: "ご" },
  { kata: "ザ", hira: "ざ" }, { kata: "ジ", hira: "じ" }, { kata: "ズ", hira: "ず" },
  { kata: "ゼ", hira: "ぜ" }, { kata: "ゾ", hira: "ぞ" },
  { kata: "ダ", hira: "だ" }, { kata: "ヂ", hira: "ぢ" }, { kata: "ヅ", hira: "づ" },
  { kata: "デ", hira: "で" }, { kata: "ド", hira: "ど" },
  { kata: "バ", hira: "ば" }, { kata: "ビ", hira: "び" }, { kata: "ブ", hira: "ぶ" },
  { kata: "ベ", hira: "べ" }, { kata: "ボ", hira: "ぼ" },
];

const HANDAKUTEN_KANA = [
  { kata: "パ", hira: "ぱ" }, { kata: "ピ", hira: "ぴ" }, { kata: "プ", hira: "ぷ" },
  { kata: "ペ", hira: "ぺ" }, { kata: "ポ", hira: "ぽ" },
];

const YOON_DIGRAPHS = [
  { kata: "キャ", hira: "きゃ" }, { kata: "キュ", hira: "きゅ" }, { kata: "キョ", hira: "きょ" },
  { kata: "シャ", hira: "しゃ" }, { kata: "シュ", hira: "しゅ" }, { kata: "ショ", hira: "しょ" },
  { kata: "チャ", hira: "ちゃ" }, { kata: "チュ", hira: "ちゅ" }, { kata: "チョ", hira: "ちょ" },
  { kata: "ニャ", hira: "にゃ" }, { kata: "ニュ", hira: "にゅ" }, { kata: "ニョ", hira: "にょ" },
  { kata: "ヒャ", hira: "ひゃ" }, { kata: "ヒュ", hira: "ひゅ" }, { kata: "ヒョ", hira: "ひょ" },
  { kata: "ミャ", hira: "みゃ" }, { kata: "ミュ", hira: "みゅ" }, { kata: "ミョ", hira: "みょ" },
  { kata: "リャ", hira: "りゃ" }, { kata: "リュ", hira: "りゅ" }, { kata: "リョ", hira: "りょ" },
  { kata: "ギャ", hira: "ぎゃ" }, { kata: "ギュ", hira: "ぎゅ" }, { kata: "ギョ", hira: "ぎょ" },
  { kata: "ジャ", hira: "じゃ" }, { kata: "ジュ", hira: "じゅ" }, { kata: "ジョ", hira: "じょ" },
  { kata: "ビャ", hira: "びゃ" }, { kata: "ビュ", hira: "びゅ" }, { kata: "ビョ", hira: "びょ" },
  { kata: "ピャ", hira: "ぴゃ" }, { kata: "ピュ", hira: "ぴゅ" }, { kata: "ピョ", hira: "ぴょ" },
];

const FOREIGN_DIGRAPHS = [
  { kata: "ファ", hira: "ふぁ" }, { kata: "フィ", hira: "ふぃ" },
  { kata: "フェ", hira: "ふぇ" }, { kata: "フォ", hira: "ふぉ" },
  { kata: "ウィ", hira: "うぃ" }, { kata: "ウェ", hira: "うぇ" }, { kata: "ウォ", hira: "うぉ" },
  { kata: "ティ", hira: "てぃ" },
  { kata: "ヴァ", hira: "ゔぁ" }, { kata: "ヴィ", hira: "ゔぃ" },
  { kata: "ヴェ", hira: "ゔぇ" }, { kata: "ヴォ", hira: "ゔぉ" },
];

// Game pools (K8 only)
const POOL_BASIC = BASIC_KANA.filter(item => item.kata !== "");
const POOL_VOICED = [...DAKUTEN_KANA, ...HANDAKUTEN_KANA];
const POOL_YOON = [...YOON_DIGRAPHS];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    BASIC_KANA, DAKUTEN_KANA, HANDAKUTEN_KANA, YOON_DIGRAPHS, FOREIGN_DIGRAPHS,
    POOL_BASIC, POOL_VOICED, POOL_YOON,
  };
}