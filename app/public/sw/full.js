self.addEventListener('install', event => {
  const images = new Array(2000).fill('/image').map((prefix, index) => `${prefix}/${index}`);
  const urls = images;
  event.waitUntil(caches.open('full')
    .then(cache => {
      return cache.addAll(urls);
    })
    .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('fetch', event => {
  const { request } = event;
  if (/image\/1/.test(request.url)) {
    event.respondWith(caches.match(request));
  }
});
