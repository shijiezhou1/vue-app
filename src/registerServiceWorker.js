
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      let confirmationResult = confirm("New content found! Do you want to reload the app?")
      if (confirmationResult) registration.waiting.postMessage({action: "skipWaiting"})
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
  }

  if (isRunningStandalone()) {
      /* This code will be executed if app is running standalone since chrome
        ios wont show the content properly
      */

      let refreshing
      navigator.serviceWorker.addEventListener("controllerchange", e=>{
        if (refreshing) return
        window.location.reload()
        refreshing = true
      })
  }
}
