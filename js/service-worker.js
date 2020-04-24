// nazywamy nasze cache- w zmiennej będzie wygodniej
const MY_CACHE = 'cache-name';
// w tej tablicy lądują wszystkie pliki, które chcemy dodać do cache
const MY_FILES = [
    
];

// instalujemy nasz service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(MY_CACHE).then(function(cache) {
      return cache.addAll(MY_FILES);
    })
  );
});
// po aktywacji chcę skasować wszystkie cache w naszej domenie, które nie są naszym cache (to opcjonalne)
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== MY_CACHE;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
// strategia 'Network falling back to cache'
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});