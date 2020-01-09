import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueNavigationBar from "vue-navigation-bar"

Vue.component("vue-navigation-bar", VueNavigationBar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
