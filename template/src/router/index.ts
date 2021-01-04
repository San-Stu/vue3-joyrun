import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/pages/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const base = process.env.NODE_ENV === 'production' ? '/activity/vue3test/' : ''
const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
