import { createRouter, createWebHistory } from 'vue-router'

const BASE_URL = '/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Valentines.vue')
    }
  ]
})

export default router
