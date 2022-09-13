import { createRouter, createWebHistory } from 'vue-router'
import { authGuard  } from '@auth0/auth0-vue';
import { guardLight } from './Guards'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import ListAudits from '@/views/audits/ListAudits.vue'
import ViewAudit from '@/views/audits/ViewAudit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/',
      name: 'audits',
      component: ListAudits,
    },
    {
      path: '/audits/:id([0-9]*)',
      name: 'audit',
      component: ViewAudit,
    },
    {
      path: '/lights',
      name: 'lights',
      component: () => import('@/views/lights/ListLights.vue'),
    },
    {
      path: '/lights/create',
      name: 'lights-create',
      component: () => import('@/views/lights/CreateLight.vue'),
    },
    {
      path: '/lights/:id(\\d+)/edit',
      name: 'lights-edit',
      component: () => import('@/views/lights/EditLight.vue'),
      beforeEnter: [guardLight]
    },
    {
      path: '/lights/:id(\\d+)',
      name: 'lights-id',
      component: () => import('@/views/lights/ViewLight.vue'),
      beforeEnter: [guardLight]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
      meta: {
        guest: true
      }
    },
  ]
})

router.beforeEach(async (to, from) => {  
  if (to.meta.guest !== true) {
    authGuard(to)
  }
})

export default router
