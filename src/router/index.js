import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Callback from '@/views/Callback'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
          path:'/callback',
          name:'callback',
          component:Callback
      }
      ]
})

router.beforeEach((to, from, next) => {
          next()
})
export default router
