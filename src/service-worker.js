self.__precacheManifest = [].concat(self.__precacheManifest || []);
if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
// install new service worker when ok, then reload page.
self.addEventListener("message", msg => {

  console.log( '****************', msg )

  if ( data && data.type === 'SKIP_WAITING' ) {
    self.skipWaiting();
  }

})
