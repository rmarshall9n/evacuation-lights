import type { RouteLocation } from 'vue-router';
import { useLightsStore } from '@/store/lights';

export function guardLight(to: RouteLocation) {
  const store = useLightsStore()

  store.fetchOne(Number(to.params.id))

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
