import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../views/HomeLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: 'about-me',
          name: 'about-me',
          component: () => import('@/views/AboutMeView.vue')
        }
      ]
    }
  ]
})

export default router
