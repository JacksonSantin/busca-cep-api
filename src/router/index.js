import { createRouter, createWebHistory } from 'vue-router'
import BuscaCep from "@/module/view/buscaCep.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: BuscaCep
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
