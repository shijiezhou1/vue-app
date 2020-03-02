import Vue from 'vue'
import Router from 'vue-router'
import * as views from "./views/index";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: '404' }
    },
    {
      path: '/404',
      name: '404',
      component: views.NotFound,
      props: (route) =>{
        return { resource: route.path }
      }
    },
    {
      path: '/',
      name: 'home',
      component: views.Home
    },
    {
      path: '/about',
      name: 'about',
      component: views.About
    },
    {
      path: '/project',
      name: 'project',
      component: views.Project
    },
    {
      path: '/cv',
      name: 'cv',
      component: views.Cv
    },
    {
      path: '/contact',
      name: 'contact',
      component: views.Contact
    }
  ]
})
