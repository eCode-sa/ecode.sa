self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("ecode-cache").then((cache) => {
      return cache.addAll([
        "/offline.html",
        "/assets/css/base.css",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match("/offline.html"))
  );
});