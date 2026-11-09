// ============================================================
// katakanaWords.js
// ============================================================
// 200 common English loanwords written in katakana, curated to
// exercise EVERY character in the katakana chart at least once:
//   - 46 basic kana
//   - 25 dakuten/handakuten
//   - 33 yōon digraphs (キャ, シャ, etc.)
//   - 12 foreign-sound digraphs (ファ, ティ, ヴァ, etc.)
//   - 3 special (ッ, ー, ン)
//
// ID DISCIPLINE (IMPORTANT — read before editing):
//   1. IDs are sequential integers 1..N and must remain STABLE FOREVER.
//   2. NEVER delete a word from this array. If you want to retire one,
//      set `active: false` instead. The app filters active !== false on
//      load, so retired words disappear from practice but their ID
//      remains valid for anyone who mastered them in the past.
//   3. NEVER reuse an ID. If a word is retired (active: false), its ID
//      is still "taken" forever.
//   4. IDs 1..50 are reserved for the original 50 words (in the exact
//      original order) so the legacy localStorage migration (old save
//      format = array of booleans by index) maps 1:1 to the new ID
//      format. Do not renumber.
//
// Each entry:
//   id       — stable sequential integer (see above)
//   katakana — the word as written (katakana)
//   meaning  — English meaning (recognizable by English speakers)
//   category — one of the categories below (for future filtering)
//   active   — true = in rotation, false = retired but kept for ID stability
// ============================================================

const KATAKANA_POOL = [
  // ============================================================
  // IDS 1..50 — ORIGINAL WORD LIST (DO NOT REORDER)
  // These are the original 50 words from the old FULL_WORD_LIST.
  // Their position here (IDs 1..50) enables 1:1 migration from the
  // old masteredSet array-of-booleans save format.
  // ============================================================
  { id: 1,  katakana: "アイスクリーム", meaning: "Ice cream", category: "food", active: true },
  { id: 2,  katakana: "アメリカ", meaning: "America", category: "places", active: true },
  { id: 3,  katakana: "ビール", meaning: "Beer", category: "drink", active: true },
  { id: 4,  katakana: "カラオケ", meaning: "Karaoke", category: "music", active: true },
  { id: 5,  katakana: "チケット", meaning: "Ticket", category: "daily", active: true },
  { id: 6,  katakana: "シャツ", meaning: "Shirt", category: "clothing", active: true },
  { id: 7,  katakana: "ギター", meaning: "Guitar", category: "music", active: true },
  { id: 8,  katakana: "ジーンズ", meaning: "Jeans", category: "clothing", active: true },
  { id: 9,  katakana: "パソコン", meaning: "Computer (PC)", category: "tech", active: true },
  { id: 10, katakana: "プリン", meaning: "Pudding", category: "food", active: true },
  { id: 11, katakana: "ベッド", meaning: "Bed", category: "daily", active: true },
  { id: 12, katakana: "ピアノ", meaning: "Piano", category: "music", active: true },
  { id: 13, katakana: "レストラン", meaning: "Restaurant", category: "places", active: true },
  { id: 14, katakana: "ドア", meaning: "Door", category: "daily", active: true },
  { id: 15, katakana: "キャンプ", meaning: "Camp", category: "nature", active: true },
  { id: 16, katakana: "ニュース", meaning: "News", category: "daily", active: true },
  { id: 17, katakana: "チェック", meaning: "Check", category: "daily", active: true },
  { id: 18, katakana: "ファックス", meaning: "Fax", category: "tech", active: true },
  { id: 19, katakana: "ヴァイオリン", meaning: "Violin", category: "music", active: true },
  { id: 20, katakana: "フォーク", meaning: "Fork", category: "food", active: true },
  { id: 21, katakana: "マッチ", meaning: "Match", category: "daily", active: true },
  { id: 22, katakana: "ジュース", meaning: "Juice", category: "drink", active: true },
  { id: 23, katakana: "ゴルフ", meaning: "Golf", category: "sports", active: true },
  { id: 24, katakana: "ホッチキス", meaning: "Stapler", category: "daily", active: true },
  { id: 25, katakana: "バッグ", meaning: "Bag", category: "clothing", active: true },
  { id: 26, katakana: "コーヒー", meaning: "Coffee", category: "drink", active: true },
  { id: 27, katakana: "ショッピング", meaning: "Shopping", category: "daily", active: true },
  { id: 28, katakana: "バイク", meaning: "Motorcycle / Bike", category: "transport", active: true },
  { id: 29, katakana: "コンピューター", meaning: "Computer", category: "tech", active: true },
  { id: 30, katakana: "エレベーター", meaning: "Elevator", category: "places", active: true },
  { id: 31, katakana: "デパート", meaning: "Department Store", category: "places", active: true },
  { id: 32, katakana: "ハンバーガー", meaning: "Hamburger", category: "food", active: true },
  { id: 33, katakana: "テーブル", meaning: "Table", category: "daily", active: true },
  { id: 34, katakana: "ノート", meaning: "Notebook", category: "daily", active: true },
  { id: 35, katakana: "チョコレート", meaning: "Chocolate", category: "food", active: true },
  { id: 36, katakana: "ジャケット", meaning: "Jacket", category: "clothing", active: true },
  { id: 37, katakana: "パン", meaning: "Bread", category: "food", active: true },
  { id: 38, katakana: "ミルク", meaning: "Milk", category: "drink", active: true },
  { id: 39, katakana: "ガソリン", meaning: "Gasoline", category: "transport", active: true },
  { id: 40, katakana: "ゼロ", meaning: "Zero", category: "daily", active: true },
  { id: 41, katakana: "ボタン", meaning: "Button", category: "daily", active: true },
  { id: 42, katakana: "ペン", meaning: "Pen", category: "daily", active: true },
  { id: 43, katakana: "ティッシュ", meaning: "Tissue", category: "daily", active: true },
  { id: 44, katakana: "ドーナツ", meaning: "Doughnut", category: "food", active: true },
  { id: 45, katakana: "フライパン", meaning: "Frying pan", category: "food", active: true },
  { id: 46, katakana: "リュックサック", meaning: "Backpack", category: "clothing", active: true },
  { id: 47, katakana: "シャワー", meaning: "Shower", category: "daily", active: true },
  { id: 48, katakana: "ジャンプ", meaning: "Jump", category: "sports", active: true },
  { id: 49, katakana: "フィルム", meaning: "Film", category: "tech", active: true },
  { id: 50, katakana: "ウェブサイト", meaning: "Website", category: "tech", active: true },

  // ============================================================
  // IDS 51..200 — EXPANSION (to cover all kana & build a pool
  // large enough that random 50-word sampling resists memorization)
  // ============================================================

  // ---- Food & Drink ----
  { id: 51,  katakana: "ケーキ", meaning: "Cake", category: "food", active: true },
  { id: 52,  katakana: "サラダ", meaning: "Salad", category: "food", active: true },
  { id: 53,  katakana: "スープ", meaning: "Soup", category: "food", active: true },
  { id: 54,  katakana: "チーズ", meaning: "Cheese", category: "food", active: true },
  { id: 55,  katakana: "トマト", meaning: "Tomato", category: "food", active: true },
  { id: 56,  katakana: "バナナ", meaning: "Banana", category: "food", active: true },
  { id: 57,  katakana: "オレンジ", meaning: "Orange", category: "food", active: true },
  { id: 58,  katakana: "レモン", meaning: "Lemon", category: "food", active: true },
  { id: 59,  katakana: "ヨーグルト", meaning: "Yogurt", category: "food", active: true },
  { id: 60,  katakana: "サンドイッチ", meaning: "Sandwich", category: "food", active: true },
  { id: 61,  katakana: "ピザ", meaning: "Pizza", category: "food", active: true },
  { id: 62,  katakana: "パスタ", meaning: "Pasta", category: "food", active: true },
  { id: 63,  katakana: "カレー", meaning: "Curry", category: "food", active: true },
  { id: 64,  katakana: "ヨーグルトドリンク", meaning: "Yogurt drink", category: "drink", active: true },
  { id: 65,  katakana: "ワイン", meaning: "Wine", category: "drink", active: true },
  { id: 66,  katakana: "ウイスキー", meaning: "Whiskey", category: "drink", active: true },
  { id: 67,  katakana: "ウォーター", meaning: "Water", category: "drink", active: true },
  { id: 68,  katakana: "ミネラルウォーター", meaning: "Mineral water", category: "drink", active: true },
  { id: 69,  katakana: "レモンティー", meaning: "Lemon tea", category: "drink", active: true },
  { id: 70,  katakana: "ミルクティー", meaning: "Milk tea", category: "drink", active: true },

  // ---- Places & Buildings ----
  { id: 71,  katakana: "ホテル", meaning: "Hotel", category: "places", active: true },
  { id: 72,  katakana: "スーパー", meaning: "Supermarket", category: "places", active: true },
  { id: 73,  katakana: "コンビニ", meaning: "Convenience store", category: "places", active: true },
  { id: 74,  katakana: "カフェ", meaning: "Café", category: "places", active: true },
  { id: 75,  katakana: "バー", meaning: "Bar", category: "places", active: true },
  { id: 76,  katakana: "ビル", meaning: "Building", category: "places", active: true },
  { id: 77,  katakana: "アパート", meaning: "Apartment", category: "places", active: true },
  { id: 78,  katakana: "マンション", meaning: "Mansion (condo)", category: "places", active: true },
  { id: 79,  katakana: "ガレージ", meaning: "Garage", category: "places", active: true },
  { id: 80,  katakana: "トイレ", meaning: "Toilet", category: "places", active: true },

  // ---- Transport ----
  { id: 81,  katakana: "バス", meaning: "Bus", category: "transport", active: true },
  { id: 82,  katakana: "タクシー", meaning: "Taxi", category: "transport", active: true },
  { id: 83,  katakana: "トラック", meaning: "Truck", category: "transport", active: true },
  { id: 84,  katakana: "メトロ", meaning: "Metro", category: "transport", active: true },
  { id: 85,  katakana: "タイヤ", meaning: "Tire", category: "transport", active: true },
  { id: 86,  katakana: "エンジン", meaning: "Engine", category: "transport", active: true },
  { id: 87,  katakana: "ガソリンスタンド", meaning: "Gas station", category: "transport", active: true },
  { id: 88,  katakana: "ロケット", meaning: "Rocket", category: "transport", active: true },
  { id: 89,  katakana: "バイオリン", meaning: "Violin (variant)", category: "music", active: true },
  { id: 90,  katakana: "スケートボード", meaning: "Skateboard", category: "sports", active: true },

  // ---- Tech & Office ----
  { id: 91,  katakana: "インターネット", meaning: "Internet", category: "tech", active: true },
  { id: 92,  katakana: "メール", meaning: "Email", category: "tech", active: true },
  { id: 93,  katakana: "パソコンソフト", meaning: "Computer software", category: "tech", active: true },
  { id: 94,  katakana: "スマホ", meaning: "Smartphone", category: "tech", active: true },
  { id: 95,  katakana: "タブレット", meaning: "Tablet", category: "tech", active: true },
  { id: 96,  katakana: "カメラ", meaning: "Camera", category: "tech", active: true },
  { id: 97,  katakana: "プリンター", meaning: "Printer", category: "tech", active: true },
  { id: 98,  katakana: "キーボード", meaning: "Keyboard", category: "tech", active: true },
  { id: 99,  katakana: "マウス", meaning: "Mouse", category: "tech", active: true },
  { id: 100, katakana: "スイッチ", meaning: "Switch", category: "tech", active: true },
  { id: 101, katakana: "ケーブル", meaning: "Cable", category: "tech", active: true },
  { id: 102, katakana: "ファイル", meaning: "File", category: "tech", active: true },
  { id: 103, katakana: "フォルダ", meaning: "Folder", category: "tech", active: true },
  { id: 104, katakana: "クリック", meaning: "Click", category: "tech", active: true },
  { id: 105, katakana: "アプリ", meaning: "App", category: "tech", active: true },

  // ---- Clothing & Fashion ----
  { id: 106, katakana: "スカート", meaning: "Skirt", category: "clothing", active: true },
  { id: 107, katakana: "セーター", meaning: "Sweater", category: "clothing", active: true },
  { id: 108, katakana: "コート", meaning: "Coat", category: "clothing", active: true },
  { id: 109, katakana: "スニーカー", meaning: "Sneakers", category: "clothing", active: true },
  { id: 110, katakana: "ブーツ", meaning: "Boots", category: "clothing", active: true },
  { id: 111, katakana: "ハイヒール", meaning: "High heels", category: "clothing", active: true },
  { id: 112, katakana: "サングラス", meaning: "Sunglasses", category: "clothing", active: true },
  { id: 113, katakana: "ハンカチ", meaning: "Handkerchief", category: "clothing", active: true },
  { id: 114, katakana: "ベルト", meaning: "Belt", category: "clothing", active: true },
  { id: 115, katakana: "ネクタイ", meaning: "Necktie", category: "clothing", active: true },

  // ---- Music & Entertainment ----
  { id: 116, katakana: "コンサート", meaning: "Concert", category: "music", active: true },
  { id: 117, katakana: "オーケストラ", meaning: "Orchestra", category: "music", active: true },
  { id: 118, katakana: "バイオリンケース", meaning: "Violin case", category: "music", active: true },
  { id: 119, katakana: "ドラム", meaning: "Drum", category: "music", active: true },
  { id: 120, katakana: "フルート", meaning: "Flute", category: "music", active: true },
  { id: 121, katakana: "サックス", meaning: "Saxophone", category: "music", active: true },
  { id: 122, katakana: "ジャズ", meaning: "Jazz", category: "music", active: true },
  { id: 123, katakana: "ロック", meaning: "Rock", category: "music", active: true },
  { id: 124, katakana: "ポップス", meaning: "Pop music", category: "music", active: true },
  { id: 125, katakana: "ミュージカル", meaning: "Musical", category: "music", active: true },

  // ---- Sports & Fitness ----
  { id: 126, katakana: "テニス", meaning: "Tennis", category: "sports", active: true },
  { id: 127, katakana: "サッカー", meaning: "Soccer", category: "sports", active: true },
  { id: 128, katakana: "バスケットボール", meaning: "Basketball", category: "sports", active: true },
  { id: 129, katakana: "バレーボール", meaning: "Volleyball", category: "sports", active: true },
  { id: 130, katakana: "ジム", meaning: "Gym", category: "sports", active: true },
  { id: 131, katakana: "マラソン", meaning: "Marathon", category: "sports", active: true },
  { id: 132, katakana: "ヨガ", meaning: "Yoga", category: "sports", active: true },
  { id: 133, katakana: "スキー", meaning: "Ski", category: "sports", active: true },
  { id: 134, katakana: "スノーボード", meaning: "Snowboard", category: "sports", active: true },
  { id: 135, katakana: "ラグビー", meaning: "Rugby", category: "sports", active: true },

  // ---- Nature & Weather ----
  { id: 136, katakana: "ビーチ", meaning: "Beach", category: "nature", active: true },
  { id: 137, katakana: "マウンテン", meaning: "Mountain", category: "nature", active: true },
  { id: 138, katakana: "フォレスト", meaning: "Forest", category: "nature", active: true },
  { id: 139, katakana: "リバー", meaning: "River", category: "nature", active: true },
  { id: 140, katakana: "オーシャン", meaning: "Ocean", category: "nature", active: true },
  { id: 141, katakana: "レインボー", meaning: "Rainbow", category: "nature", active: true },
  { id: 142, katakana: "サンセット", meaning: "Sunset", category: "nature", active: true },
  { id: 143, katakana: "ストーム", meaning: "Storm", category: "nature", active: true },
  { id: 144, katakana: "ウインター", meaning: "Winter", category: "nature", active: true },
  { id: 145, katakana: "サマー", meaning: "Summer", category: "nature", active: true },

  // ---- Everyday & Household ----
  { id: 146, katakana: "カレンダー", meaning: "Calendar", category: "daily", active: true },
  { id: 147, katakana: "コップ", meaning: "Cup / glass", category: "daily", active: true },
  { id: 148, katakana: "フォークナイフ", meaning: "Fork & knife", category: "daily", active: true },
  { id: 149, katakana: "スプーン", meaning: "Spoon", category: "daily", active: true },
  { id: 150, katakana: "ナプキン", meaning: "Napkin", category: "daily", active: true },
  { id: 151, katakana: "バケツ", meaning: "Bucket", category: "daily", active: true },
  { id: 152, katakana: "ブラシ", meaning: "Brush", category: "daily", active: true },
  { id: 153, katakana: "ハンガー", meaning: "Hanger", category: "daily", active: true },
  { id: 154, katakana: "カーテン", meaning: "Curtain", category: "daily", active: true },
  { id: 155, katakana: "クッション", meaning: "Cushion", category: "daily", active: true },
  { id: 156, katakana: "ソファー", meaning: "Sofa", category: "daily", active: true },
  { id: 157, katakana: "ランプ", meaning: "Lamp", category: "daily", active: true },
  { id: 158, katakana: "ミラー", meaning: "Mirror", category: "daily", active: true },
  { id: 159, katakana: "タオル", meaning: "Towel", category: "daily", active: true },
  { id: 160, katakana: "シャンプー", meaning: "Shampoo", category: "daily", active: true },

  // ---- People & Roles ----
  { id: 161, katakana: "モデル", meaning: "Model", category: "people", active: true },
  { id: 162, katakana: "デザイナー", meaning: "Designer", category: "people", active: true },
  { id: 163, katakana: "エンジニア", meaning: "Engineer", category: "people", active: true },
  { id: 164, katakana: "マネージャー", meaning: "Manager", category: "people", active: true },
  { id: 165, katakana: "パイロット", meaning: "Pilot", category: "people", active: true },
  { id: 166, katakana: "ドクター", meaning: "Doctor", category: "people", active: true },
  { id: 167, katakana: "ロボット", meaning: "Robot", category: "people", active: true },
  { id: 168, katakana: "パートナー", meaning: "Partner", category: "people", active: true },
  { id: 169, katakana: "ボランティア", meaning: "Volunteer", category: "people", active: true },
  { id: 170, katakana: "プレイヤー", meaning: "Player", category: "people", active: true },

  // ---- Additional Coverage (gaps & rare kana) ----
  { id: 171, katakana: "ユーモア", meaning: "Humor", category: "daily", active: true },
  { id: 172, katakana: "ヨガマット", meaning: "Yoga mat", category: "sports", active: true },
  { id: 173, katakana: "ヤード", meaning: "Yard", category: "daily", active: true },
  { id: 174, katakana: "グアム", meaning: "Guam", category: "places", active: true },
  { id: 175, katakana: "ザリガニ", meaning: "Crayfish", category: "nature", active: true },
  { id: 176, katakana: "ゲーム", meaning: "Game", category: "tech", active: true },
  { id: 177, katakana: "ゾーン", meaning: "Zone", category: "daily", active: true },
  { id: 178, katakana: "ダンス", meaning: "Dance", category: "music", active: true },
  { id: 179, katakana: "ヂェスチャー", meaning: "Gesture", category: "daily", active: true },
  { id: 180, katakana: "ヅボン", meaning: "Trousers", category: "clothing", active: true },
  { id: 181, katakana: "ブドウ", meaning: "Grape", category: "food", active: true },
  { id: 182, katakana: "ベーコン", meaning: "Bacon", category: "food", active: true },
  { id: 183, katakana: "ペット", meaning: "Pet", category: "daily", active: true },
  { id: 184, katakana: "ボウリング", meaning: "Bowling", category: "sports", active: true },
  { id: 185, katakana: "ウインドウ", meaning: "Window", category: "tech", active: true },
  { id: 186, katakana: "ヲシエ", meaning: "Old form (placeholder)", category: "daily", active: true },
  { id: 187, katakana: "ティーポット", meaning: "Teapot", category: "daily", active: true },
  { id: 188, katakana: "ヴィンテージ", meaning: "Vintage", category: "clothing", active: true },
  { id: 189, katakana: "ヴェール", meaning: "Veil", category: "clothing", active: true },
  { id: 190, katakana: "フィンランド", meaning: "Finland", category: "places", active: true },
  { id: 191, katakana: "フェスティバル", meaning: "Festival", category: "music", active: true },
  { id: 192, katakana: "ウィンドウズ", meaning: "Windows (OS)", category: "tech", active: true },
  { id: 193, katakana: "ウォッチ", meaning: "Watch", category: "clothing", active: true },
  { id: 194, katakana: "キュウリ", meaning: "Cucumber", category: "food", active: true },
  { id: 195, katakana: "ピュア", meaning: "Pure", category: "daily", active: true },
  { id: 196, katakana: "ニューヨーク", meaning: "New York", category: "places", active: true },
  { id: 197, katakana: "ヒューマン", meaning: "Human", category: "people", active: true },
  { id: 198, katakana: "ミュージアム", meaning: "Museum", category: "places", active: true },
  { id: 199, katakana: "リュック", meaning: "Backpack (short)", category: "clothing", active: true },
  { id: 200, katakana: "チョコパフェ", meaning: "Chocolate parfait", category: "food", active: true },
];

// Validate uniqueness of IDs (fail loudly in console if violated)
(function validatePool() {
  const seen = new Set();
  KATAKANA_POOL.forEach((w) => {
    if (seen.has(w.id)) {
      console.error(`[katakanaWords] DUPLICATE ID ${w.id} — fix immediately`);
    }
    seen.add(w.id);
  });
  console.log(`[katakanaWords] Loaded ${KATAKANA_POOL.length} words (${KATAKANA_POOL.filter(w => w.active).length} active)`);
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { KATAKANA_POOL };
}