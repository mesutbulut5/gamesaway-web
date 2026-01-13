const CACHE_NAME = 'gamesaway-v1';
const ASSETS = [
    '/',
    '/Home/Index',
    '/Dashboard/Index',
    '/css/style.css',
    '/js/main.js',
    '/assets/logo-pwa.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetching resources
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
