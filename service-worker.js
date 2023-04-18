// Registrando o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Adicionando arquivos ao cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/logica1.js',
        'img/bateriaimg.png',
        "https://johnstonpc.github.io/bateria100/",
        '/alarme.mp3',
      ]);
    })
  );
});


// Recuperando arquivos do cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});



if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function(registration) {
    console.log("Service worker registrado com sucesso:", registration.scope);
  }).catch(function(error) {
    console.log("Falha ao registrar o service worker:", error);
  });
}
