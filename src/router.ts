import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('./views/About.vue') },
  { path: '/about', component: () => import('./views/Game.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})