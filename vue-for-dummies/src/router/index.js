import { createRouter, createWebHistory } from 'vue-router'
import Snippet from '../components/Snippet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Snippet
    }
  ]
})

export default router
