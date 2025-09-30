// Service Worker for Video Caching
const CACHE_NAME = 'paragon-video-cache-v1';
const VIDEO_URLS = [
  '/hero-video.mp4',
  '/hero-video.webm'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching video files...');
        return cache.addAll(VIDEO_URLS);
      })
      .catch((error) => {
        console.log('Cache failed:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle video requests
  if (event.request.url.includes('hero-video')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request);
        })
    );
  }
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
