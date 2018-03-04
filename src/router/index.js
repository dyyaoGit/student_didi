import Vue from 'vue'
import Router from 'vue-router'
import apply from '@/views/apply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'apply',
      component: apply
    },
    {
      path: '/mydidi',
      name: 'mydidi',
      component: () => import('@/views/mydidi')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }

  ]
})
