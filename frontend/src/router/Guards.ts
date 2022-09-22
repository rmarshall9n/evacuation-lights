import type { RouteLocation } from 'vue-router';
import { useLightsStore } from '@/store/lights';
import { AxiosError } from 'axios';

function notFound(to: RouteLocation) {
  return {
    name: 'not-found',
    params: { pathMatch: to.path.substring(1).split('/') },
    query: to.query,
    hash: to.hash,
  }
}

export async function guardLight(to: RouteLocation) {
  const store = useLightsStore()

  try {
    await store.fetchOne(Number(to.params.id))
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      throw error
    }

    if (error.response?.status === 404) {
      return notFound(to)
    }
  }
}

export async function guardLights(to: RouteLocation) {
  const store = useLightsStore()

  await store.fetch()
}
