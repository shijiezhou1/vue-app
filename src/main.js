import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vue navigation
import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css"

// Vuetify
import vuetify from '@/plugins/vuetify' // path to vuetify export

// STORE
import store from './stores/store'

// SOCKET IO
import VueSocketIO from 'vue-socket.io'
import Toasted from 'vue-toasted';

// LAZY LOADING IMAGE
import VueLazyload from 'vue-lazyload'

// Vue analytics
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-149847604-1',
  router
})

Vue.use(Toasted)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/error.gif'),
  loading: require('@/assets/images/loading.gif'),
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
  connection: 'http://localhost:8000', //TODO setup environment variable.
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
  vuetify,
  render: h => h(App)
}).$mount('#app')
