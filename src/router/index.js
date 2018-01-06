import Vue from 'vue'
import Router from 'vue-router'
import History from '@/components/history'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
