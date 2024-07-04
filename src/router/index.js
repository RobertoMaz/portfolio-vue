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
          path: '',
          name: 'homeView',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'about-me',
          name: 'about-me',
          component: () => import('@/views/AboutMeView.vue')
        },
        {
          path: 'my-work',
          name: 'my-work',
          component: () => import('@/views/MyWorkView.vue')
        },
        {
          path: 'contact-me',
          name: 'contact-me',
          component: () => import('@/views/ContactView.vue')
        },
      ]
    }
  ]
})

export default router
