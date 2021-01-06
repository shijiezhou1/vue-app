importScripts("/precache-manifest.b09d830ca113805e8964afbcb217f344.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

