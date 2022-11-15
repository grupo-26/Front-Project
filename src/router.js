import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login.vue'),
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
      path: '/registro',
      component: () => import('@/views/Registro.vue'),
    },

    {
      name: 'trilhas',
      path: '/trilhas/:id',
      component: () => import('@/views/Trilhas.vue'),
      props: true,
    },

    {
      name: 'course',
      path: '/course/:stack/:title/:iduser/:idcurso',
      component: () => import('@/views/Course.vue'),
      props: true,
    },
    {
      name: 'aula',
      path: '/aula/:curso/:mod/:id/:iduser/:idcurso/:aulaoriginalid/:pts',
      component: () => import("@/views/Aula.vue"),
      props: true,
    },
    {
      path: "/profile",
      component: () => import("@/views/Profile.vue"),
    }
  ],
})
