import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('./views/About.vue') },
  { path: '/game', component: () => import('./views/Game.vue') },
  { path: '/result', component: () => import('./views/Result.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})