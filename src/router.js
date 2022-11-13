import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/trilhas',
      component: () => import('@/views/Trilhas.vue'),
    },
    {
      name: 'course',
      path: '/course/:stack/:title',
      component: () => import('@/views/Course.vue'),
      props: true,
    },
    {
      path: '/aula',
      component: () => import("@/views/Aula.vue"),
    }
  ],
})
