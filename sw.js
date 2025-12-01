/**
 * Service Worker for NFC Keyring Website
 * Provides offline support and caching for better performance
 */

const CACHE_NAME = 'wisdom-library-v76';
const urlsToCache = [
  '/',
  '/index.html',
  '/purchase.html',
  '/styles-combined.css',
  '/dark-mode.css',
  '/config.js',
  '/script-modern.js',
  '/purchase.js',
  '/features.js',
  '/lazy-loading.js',
  '/manifest.json',
  '/images/confucius.jpg',
  '/images/laozi.jpg',
  '/images/buddha.jpg',
  '/images/doheop-logo.png',
  '/images/products/product-buddha-lotus.jpg',
  '/images/products/product-laozi-taiji.jpg',
  '/images/products/product-confucius-book.jpg',
  '/images/products/product-set-3pieces.jpg',
  '/images/products/product-set-outdoor.jpg',
  '/images/products/product-confucius-flatlay.jpg',
  '/images/products/product-buddha-flatlay.jpg',
  '/images/products/product-flatlay-set.jpg',
  '/images/products/product-detail-lifestyle.jpg',
  '/videos/confucius-bg.mp4',
  '/videos/buddha-bg.mp4',
  '/videos/laozi-bg.mp4'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Message event - handle skip waiting
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('⚡ Service Worker: Skipping waiting and activating immediately');
    self.skipWaiting();
  }
});

