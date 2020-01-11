import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Project from './views/Project.vue'
import Cv from './views/Cv.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
	{
		path: '/project',
		name: 'project',
		component: Project
	},
    {
    	path: '/cv',
    	name: 'cv',
    	component: Cv
    },
  ]
})
