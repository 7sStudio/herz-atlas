// Herz-Atlas 3D: Service Worker für den Offline-Betrieb als Home-Bildschirm-App.
// Strategie: sofort aus dem Cache starten, im Hintergrund aktualisieren; bei neuer Version Hinweis an die Seite.
const VERSION = 'herz-atlas-v5.0';
const PAGE = 'index.html';
const SHELL = [PAGE, 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('herz-atlas-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const stamp = (r) => (r ? (r.headers.get('etag') || r.headers.get('last-modified') || r.headers.get('content-length') || '') : '');
async function notify() { const cs = await self.clients.matchAll({ type: 'window' }); cs.forEach((c) => c.postMessage({ type: 'herz-update' })); }

self.addEventListener('fetch', (e) => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isFont = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== self.location.origin && !isFont) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/' + PAGE);
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const key = isPage ? PAGE : req;
    const cached = await cache.match(key, { ignoreSearch: isPage });
    const refresh = fetch(isPage ? new Request(PAGE, { cache: 'no-cache' }) : req).then(async (res) => {
      if (res && (res.ok || res.type === 'opaque')) {
        const changed = isPage && cached && stamp(cached) && stamp(res) && stamp(cached) !== stamp(res);
        await cache.put(key, res.clone());
        if (changed) notify();
      }
      return res;
    }).catch(() => null);
    if (cached) { e.waitUntil(refresh); return cached; }
    const res = await refresh;
    return res || new Response('Offline: Bitte einmal mit Internetverbindung öffnen.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
