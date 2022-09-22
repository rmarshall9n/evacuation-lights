import type { App } from 'vue';
import { createRouter as createVueRouter, createWebHistory, type Router } from 'vue-router'
import { Auth0Plugin, authGuard } from '@auth0/auth0-vue';
import { guardLight, guardLights } from './Guards'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import NotAuthorized from '@/views/NotAuthorized.vue'
import ListAudits from '@/views/audits/ListAudits.vue'
import ViewAudit from '@/views/audits/ViewAudit.vue'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    roles?: string[]
  }
}

export function createRouter(app: App, auth: Auth0Plugin): Router {
  const router = createVueRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          requiresAuth: true
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
        beforeEnter: [guardLights],
        meta: {
          roles: ['admin']
        }
      },
      {
        path: '/lights/create',
        name: 'lights-create',
        component: () => import('@/views/lights/CreateLight.vue'),
        meta: {
          roles: ['admin']
        }
      },
      {
        path: '/lights/:id(\\d+)/edit',
        name: 'lights-edit',
        component: () => import('@/views/lights/EditLight.vue'),
        beforeEnter: [guardLight],
        meta: {
          roles: ['admin']
        }
      },
      {
        path: '/lights/:id(\\d+)',
        name: 'lights-id',
        component: () => import('@/views/lights/ViewLight.vue'),
        beforeEnter: [guardLight],
        meta: {
          roles: ['admin']
        }
      },
      {
        path: '/not-authorized',
        name: 'not-authorized',
        component: NotAuthorized,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
        meta: {
          requiresAuth: true
        }
      },
    ]
  })

  router.beforeEach(async (to) => {
    // If the route allows requiresAuths, allow everyone through
    if (to.meta.requiresAuth === true) {
      return
    }

    // Check the user is authenticated
    const authenticated = await authGuard(to)

    if (!authenticated) {
      return false
    }

    // Check the user is authorized
    const role = auth.user.value.role ?? 'user'

    if (to.meta.roles && to.meta.roles.find((requiredRole) => requiredRole === role) === undefined) {
      return {
        path: '/not-authorized',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }

    }

    return
  })

  return router
}
