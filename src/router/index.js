import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/notebooks',
      component: () => import('@/components/NotebookList.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/note',
      component: () => import('@/components/NoteDetail.vue')
    },
    {
      path: '/trash',
      component: () => import('@/components/TrashDetail.vue')
    }

  ]
})
