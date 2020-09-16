import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const jsUcfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const loadRouter = (name) => () => import(`@/views/${jsUcfirst(name)}.vue`);

const routes = [
  {
    path: '*',
    name: '404',
    component: loadRouter('Notfound'),
    meta: { title: '404 Not Found | 🤣' },
    props: (route) => {
      return { resource: route.path }
    }
  },
  {
    path: '/',
    name: 'home',
    component: loadRouter('home'),
    meta: { title: 'SHIJIE ZHOU | PORTFOLIO' },
  },
  {
    path: '/article',
    name: 'article',
    component: loadRouter('article'),
    props: true,
    meta: { title: 'Article | 🙂' },
  },
  {
    path: '/about',
    name: 'about',
    component: loadRouter('about'),
    meta: { title: 'About | 🌞' },
  },
  {
    path: '/expedition',
    name: 'expedition',
    component: loadRouter('expedition'),
    meta: { title: 'Expedition | 🔥' },
  },
  {
    path: '/cv',
    name: 'cv',
    component: loadRouter('cv'),
    meta: { title: 'CV | ✉️' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: loadRouter('contact'),
    meta: { title: 'Contact | 📞' }
  },
  {
    path: '/consociation',
    name: 'consociation',
    component: loadRouter('consociation'),
    meta: { title: 'Consociation | 🌿' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: loadRouter('blog'),
    meta: { title: 'Blog | 📊' },
  },
  {
    path: '/collection',
    name: 'colelction',
    component: loadRouter('collection'),
    meta: { title: 'Colelction | 👌🏻' }
  },
  {
    path: '/exclusive',
    name: 'exclusive',
    component: loadRouter('exclusive'),
    meta: { title: 'Exclusive | 🙂' }
  },
  {
    path: '/podcast',
    name: 'podcast',
    component: loadRouter('podcast'),
    meta: { title: 'Podcast | 🌞' }
  },
  {
    path: '/book',
    name: 'book',
    component: loadRouter('book'),
    meta: { title: 'Book | 🏵' }
  },
]

const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'SHIJIE ZHOU | PORTFOLIO'
  next();
});

export default router;
