import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PineapplesPage from '@/views/PineapplesPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/pineapples',
    name: 'pineapples',
    component: PineapplesPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
