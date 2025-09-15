self.addEventListener('install', e=>{e.waitUntil(caches.open('trab-v1').then(c=>c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./og.png'])))});
self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))})