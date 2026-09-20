/* CreatorHQ installable shell. Optional offline fallback for navigations only. */
const CACHE = "creatorhq-shell-v11";

function basePath() {
  const scope = self.registration.scope;
  return scope.endsWith("/") ? scope : `${scope}/`;
}

self.addEventListener("install", (event) => {
  const base = basePath();
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        cache.addAll([
          base,
          `${base}index.html`,
          `${base}manifest.json`,
          `${base}icons/icon-192.png`,
        ]).catch(() => undefined),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(`${basePath()}index.html`)),
    );
  }
});
