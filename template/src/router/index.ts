import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Page2 from '@/pages/page2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
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
