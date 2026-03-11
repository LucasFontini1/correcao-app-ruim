import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/homeView.vue'
import newItemView from '@/views/newItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/new-item',
      name: 'new',
      component: newItemView,
    }
  ],
})

export default router
