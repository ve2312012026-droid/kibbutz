// Service Worker básico para KIBBUTZ PWA
const CACHE_NAME = "kibbutz-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Dejamos que la red maneje todo (Firebase necesita conexión)
  // Solo cacheamos recursos estáticos básicos si falla
});
