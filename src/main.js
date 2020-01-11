import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vue navigation
import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import store from './store'

Vue.component("vue-navigation-bar", VueNavigationBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
