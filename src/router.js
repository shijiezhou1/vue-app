import Vue from 'vue'
import Router from 'vue-router'
import * as views from "./views/index";

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '*',
      name: '404',
      component: views.NotFound,
      props: ( route ) => {
        return {resource: route.path}
      }
    },
    {
      path: '/',
      name: 'home',
      component: views.Home,
      meta: {keepAlive:false},
    },
    {
      path: '/article',
      name: 'article',
      component: views.Article,
      meta: {keepAlive:false},
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: views.About,
      meta: {keepAlive:false},
    },
    {
      path: '/expedition',
      name: 'expedition',
      component: views.Expedition,
      meta: {keepAlive:false},
    },
    {
      path: '/cv',
      name: 'cv',
      component: views.Cv,
      meta: {keepAlive:false},
    },
    {
      path: '/contact',
      name: 'contact',
      component: views.Contact,
      meta: {keepAlive:false},
    },
    {
      path: '/consociation',
      name: 'consociation',
      component: views.Consociation,
      meta: {keepAlive:false},
    },
     {
      path: '/blog',
      name: 'blog',
      component: views.Blog,
      meta: {keepAlive:false},
    },
    {
        path: '/collection',
        name: 'colelction',
        component: views.Collection,
        meta: {keepAlive:false},
    },
    {
      path: '/exclusive',
      name: 'exclusive',
      component: views.Exclusive,
      meta: {keepAlive:false},
    }
  ]
} )
