import { createRouter, createWebHistory } from 'vue-router'
import { guardLight } from './Guards'
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
      component: () => import('../views/lights/ListLights.vue'),
    },
    {
      path: '/lights/create',
      name: 'lights-create',
      component: () => import('../views/lights/CreateLight.vue')
    },
    {
      path: '/lights/:id(\\d+)/edit',
      name: 'lights-edit',
      component: () => import('../views/lights/EditLight.vue'),
      beforeEnter: [guardLight]
    },
    {
      path: '/lights/:id(\\d+)',
      name: 'lights-id',
      component: () => import('../views/lights/ViewLight.vue'),
      beforeEnter: [guardLight]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
