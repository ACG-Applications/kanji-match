// ============================================================
// Kanji Master — Service Worker (v5)
// ============================================================
// v5 changes:
//   - Restored file after accidental overwrite
//   - Ensures K8-Katakana-Match.html is cached for offline use

const CACHE_VERSION = "kanji-master-v5";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./K7-Katakana.html",
  "./K8-Katakana-Match.html",
  "./katakanaWords.js",
   "./kanaData.js",   
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
            return caches.match("./index.html");
          }
          return new Response("Offline", {
            status: 503,
            statusText: "Offline",
          });
        });
    })
  );
});