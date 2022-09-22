import type { RouteLocation } from 'vue-router';
import { useLightsStore } from '@/store/lights';

export async function guardLight(to: RouteLocation) {
  const store = useLightsStore()

  await store.fetchOne(Number(to.params.id))

  const light = store.get(Number(to.params.id))

  if (light === null) {
    return {
      name: 'not-found',
      params: { pathMatch: to.path.substring(1).split('/') },
      query: to.query,
      hash: to.hash,
    }
  }
}

export async function guardLights(to: RouteLocation) {
  const store = useLightsStore()

  await store.fetch()
}
