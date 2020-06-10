import Vue from 'vue'
import Router from 'vue-router'

// LAZY ROUTER
const Home = () => import('@/views/Home');
const Article = () => import('@/views/Article');
const Blog = () => import('@/views/Blog');
const NotFound = () => import('@/views/NotFound');
const About = () => import('@/views/About');
const Expedition = () => import('@/views/Expedition');
const Cv = () => import('@/views/Cv');
const Consoiation = () => import('@/views/Consociation');
const Contact = () => import('@/views/Contact');
const Collection = () => import('@/views/Collection')
const Exclusive = () => import('@/views/Exclusive')

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound,
      props: ( route ) => {
        return {resource: route.path}
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/expedition',
      name: 'expedition',
      component: Expedition,
    },
    {
      path: '/cv',
      name: 'cv',
      component: Cv,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/consociation',
      name: 'consociation',
      component: Consoiation,
    },
     {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
        path: '/collection',
        name: 'colelction',
        component: Collection,
    },
    {
      path: '/exclusive',
      name: 'exclusive',
      component: Exclusive,
    }
  ]
} )
