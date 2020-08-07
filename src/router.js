import Vue from 'vue'
import Router from 'vue-router'
import * as views from "./views/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: views.NotFound,
      props: (route) => {
        return { resource: route.path, title: '404 Not Found | 🤣' }
      }
    },
    {
      path: '/',
      name: 'home',
      component: views.Home,
      props: (route) => { return { title: 'Home | 🏠' } }
    },
    {
      path: '/article',
      name: 'article',
      component: views.Article,
      // props: (route) => { return { title: 'Article | 🙂' } }
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: views.About,
      props: (route) => { return { title: 'About | 🌞' } }
    },
    {
      path: '/expedition',
      name: 'expedition',
      component: views.Expedition,
      props: (route) => { return { title: 'Expedition | 🔥' } }
    },
    {
      path: '/cv',
      name: 'cv',
      component: views.Cv,
      props: (route) => { return { title: 'CV | ✉️' } }
    },
    {
      path: '/contact',
      name: 'contact',
      component: views.Contact,
      props: (route) => { return { title: 'Contact | 📞' } }
    },
    {
      path: '/consociation',
      name: 'consociation',
      component: views.Consociation,
      props: (route) => { return { title: 'Consociation | 🌿' } }
    },
    {
      path: '/blog',
      name: 'blog',
      component: views.Blog,
      props: (route) => { return { title: 'Blog | 📊' } }
    },
    {
      path: '/collection',
      name: 'colelction',
      component: views.Collection,
      props: ( route ) => {
        return { title: 'Colelction | 👌🏻' }
      }
    },
    {
      path: '/exclusive',
      name: 'exclusive',
      component: views.Exclusive,
      props: ( route ) => {
        return { title: 'Exclusive | 🙂' }
      }
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: views.Podcast,
      props: ( route ) => {
        return { title: 'Podcast | 🌞' }
      }
    },
    {
      path: '/book',
      name: 'book',
      component: views.Book,
      props: ( route ) => {
        return { title: 'Book | 🏵' }
      }
    },
  ]
})
