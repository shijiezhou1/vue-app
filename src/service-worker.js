self.__precacheManifest = [].concat(self.__precacheManifest || []);
if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
// install new service worker when ok, then reload page.
self.addEventListener("message", msg => {

  if (msg.data && msg.data.type === "skipWaiting") {
    self.skipWaiting();
  }

})
