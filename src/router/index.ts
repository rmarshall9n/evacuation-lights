import { getLight } from '@/api/lights'
import { createRouter, createWebHistory } from 'vue-router'
import ListLights from '../views/ListLights.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lights',
      name: 'lights',
      component: ListLights
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
        const light = getLight(Number(to.params.id))

        if (light === null) {
          return {
            name: 'not-found',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash,
          }
        }
        to.meta = { light, ...to.meta }
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
