import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const jsUcfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const loadRouter = (name) => () => import(`@/views/${jsUcfirst(name)}.vue`);

export default new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: loadRouter('Notfound'),
      props: (route) => {
        return { resource: route.path, title: '404 Not Found | 🤣' }
      }
    },
    {
      path: '/',
      name: 'home',
      component: loadRouter('home'),
      props: (route) => { return { title: 'Home | 🏠' } }
    },
    {
      path: '/article',
      name: 'article',
      component: loadRouter('article'),
      // props: (route) => { return { title: 'Article | 🙂' } }
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: loadRouter('about'),
      props: (route) => { return { title: 'About | 🌞' } }
    },
    {
      path: '/expedition',
      name: 'expedition',
      component: loadRouter('expedition'),
      props: (route) => { return { title: 'Expedition | 🔥' } }
    },
    {
      path: '/cv',
      name: 'cv',
      component: loadRouter('cv'),
      props: (route) => { return { title: 'CV | ✉️' } }
    },
    {
      path: '/contact',
      name: 'contact',
      component: loadRouter('contact'),
      props: (route) => { return { title: 'Contact | 📞' } }
    },
    {
      path: '/consociation',
      name: 'consociation',
      component: loadRouter('consociation'),
      props: (route) => { return { title: 'Consociation | 🌿' } }
    },
    {
      path: '/blog',
      name: 'blog',
      component: loadRouter('blog'),
      props: (route) => { return { title: 'Blog | 📊' } }
    },
    {
      path: '/collection',
      name: 'colelction',
      component: loadRouter('collection'),
      props: ( route ) => {
        return { title: 'Colelction | 👌🏻' }
      }
    },
    {
      path: '/exclusive',
      name: 'exclusive',
      component: loadRouter('exclusive'),
      props: ( route ) => {
        return { title: 'Exclusive | 🙂' }
      }
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: loadRouter('podcast'),
      props: ( route ) => {
        return { title: 'Podcast | 🌞' }
      }
    },
    {
      path: '/book',
      name: 'book',
      component: loadRouter('book'),
      props: ( route ) => {
        return { title: 'Book | 🏵' }
      }
    },
  ]
})
