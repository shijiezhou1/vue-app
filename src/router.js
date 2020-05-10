import Vue from 'vue'
import Router from 'vue-router'
import * as views from "./views/index";

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '*',
      name: '404',
      // redirect: { name: '404' }
      component: views.NotFound,
      props: ( route ) => {
        return {resource: route.path}
      }
    },
    {
      path: '/',
      name: 'home',
      component: views.Home
    },
    {
      path: '/article',
      name: 'article',
      component: views.Article,
      props: true
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
    },
    {
      path: '/consociation',
      name: 'consociation',
      component: views.Consociation
    }
  ]
} )
