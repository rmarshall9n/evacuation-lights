// import { getLight } from '@/api/lightsApi'
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import Audit from '../views/Audit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/audits/:id([0-9]*)',
      name: 'audit',
      component: Audit
    },
    {
      path: '/lights',
      name: 'lights',
      component: () => import('../views/ListLights.vue'),
    },
    {
      path: '/lights/create',
      name: 'lights-create',
      component: () => import('../views/CreateLight.vue')
    },
    {
      path: '/lights/:id([0-9]*)',
      name: 'lights-id',
      component: () => import('../views/ViewLight.vue'),
      beforeEnter(to) {
        // const light = getLight(Number(to.params.id))

        // if (light === null) {
        //   return {
        //     name: 'not-found',
        //     params: { pathMatch: to.path.substring(1).split('/') },
        //     query: to.query,
        //     hash: to.hash,
        //   }
        // }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
