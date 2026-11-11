// ============================================================
// Kanji Master — Service Worker (v10)
// ============================================================
// v10 changes:
//   - Added home.html as the new launcher
//   - Added K12-Kana-Hub.html
//   - Added K9K, K10K, K11K (Katakana drill variants)
//   - Bumped version so all clients pick up the new routing

const CACHE_VERSION = "kanji-master-v20";
const ASSETS_TO_CACHE = [
  "./",
  "./home.html",
  "./index.html",
  "./K7-Katakana.html",
  "./K8-Katakana-Match.html",
  "./K9-Kana-Listening.html",
  "./K9K-Kana-Listening-Katakana.html",
  "./K10-Kana-Reading.html",
  "./K10K-Kana-Reading-Katakana.html",
  "./K11-Kana-Mixed.html",
  "./K11K-Kana-Mixed-Katakana.html",
  "./K12-Kana-Hub.html",
  "./katakanaWords.js",
  "./kanaData.js",
  "./kanaMasterData.js",
  "./kanaState.js",
  "./n5-matching-data.js",
  "./manifest.json",
  "./icons/Antonio.png",
  "./icons/icon-144x144.png",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

// Install: pre-cache all assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_VERSION)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first with network fallback for same-origin requests
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const resClone = res.clone();
            caches.open(CACHE_VERSION).then((cache) => {
              cache.put(req, resClone);
            });
          }
          return res;
        })
        .catch(() => {
          if (req.mode === "navigate") {
            return caches.match("./home.html");
          }
          return new Response("Offline", {
            status: 503,
            statusText: "Offline",
          });
        });
    })
  );
});