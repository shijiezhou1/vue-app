import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vue navigation
import VueNavigationBar from "vue-navigation-bar"
import "vue-navigation-bar/dist/vue-navigation-bar.css";

Vue.component("vue-navigation-bar", VueNavigationBar)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
