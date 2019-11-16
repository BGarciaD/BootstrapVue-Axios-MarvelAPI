import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import Comics from './views/Comics.vue'
import Creators from './views/Creators.vue'
import Events from './views/Events.vue'
import Series from './views/Series.vue'
import Stories from './views/Stories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/comics',
      name: 'comics',
      component: Comics
    },
    {
      path: '/creators',
      name: 'creators',
      component: Creators
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/stories',
      name: 'stories',
      component: Stories
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
