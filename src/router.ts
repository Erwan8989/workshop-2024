import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})