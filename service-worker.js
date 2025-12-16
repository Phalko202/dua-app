const CACHE_NAME = 'dua-book-v1';
const urlsToCache = ['./index.html', './manifest.json', './icons/icon-72.png', './icons/icon-96.png', './icons/icon-128.png', './icons/icon-144.png', './icons/icon-152.png', './icons/icon-192.png', './icons/icon-384.png', './icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(urlsToCache))); });
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { return caches.open(CACHE_NAME).then((c) => { c.put(e.request, res.clone()); return res; }); }))); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((names) => Promise.all(names.map((n) => { if (n !== CACHE_NAME) return caches.delete(n); })))); });
