self.__precacheManifest = [].concat(self.__precacheManifest || []);
if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
// install new service worker when ok, then reload page.
self.addEventListener("message", msg => {

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

})
