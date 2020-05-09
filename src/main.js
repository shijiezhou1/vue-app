import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vue navigation
import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css"

// STORE
import store from './stores/store'

// SOCKET IO 
import VueSocketIO from 'vue-socket.io'
import Toasted from 'vue-toasted';

// LAZY LOADING IMAGE
import VueLazyload from 'vue-lazyload'


Vue.use(Toasted)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
// Lets Register a Global Toasts.
Vue.toasted.register('appError',
  (payload) => {
    if (!payload.message) {
      return "Message not definded."
    }
    return payload.message;
  },
  {
    type: 'error'
  });


Vue.toasted.register('appSuccess',
  (payload) => {
    if (!payload.message) {
      return "Message not definded."
    }
    return payload.message;
  }, {
  type: 'success'
});

Vue.toasted.register('appInfo',
  (payload) => {
    if (!payload.message) {
      return "Message not definded."
    }
    return payload.message;
  }, {
  type: 'info'
});

// Now setup our socket and vuex configuration
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8910',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  },
  options: {} //Optional options
}))

Vue.component("vue-navigation-bar", VueNavigationBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
