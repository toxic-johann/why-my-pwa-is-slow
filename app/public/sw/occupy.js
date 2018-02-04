self.addEventListener('install', event => {
  const images = new Array(100).fill('/expensive/image').map((prefix, index) => `${prefix}/${index}`);
  const urls = images;
  event.waitUntil(caches.open('occupy')
    .then(cache => {
      return cache.addAll(urls);
    })
    .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', () => self.clients.claim());
