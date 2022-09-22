import type { Light, LightPayload } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { lightsApi } from '@/api/lightsWebApi'

export const useLightsStore = defineStore('lights', () => {

  const lights: Ref<Light[]> = ref([])

  const all = computed(() => lights.value)
  const active = computed(() => lights.value.filter(light => light.retired === false))

  function get(id: number): Light | null {
    return lights.value.find((light) => light.id === id) || null
  }

  async function fetch(): Promise<void> {
    lights.value = await lightsApi.all()
  }

  async function fetchOne(id: number): Promise<void> {
    const light = await lightsApi.get(id)
    const index = lights.value.findIndex((element) => element.id === id)

    // if the light is not found in the state, add it. Otherwise update it.
    if (index === -1) {
      lights.value.push(light)
    } else {
      lights.value[index] = light
    }
  }

  async function create(payload: LightPayload): Promise<void> {
    const light = await lightsApi.store(payload)

    lights.value.push(light)
  }

  async function update(id: number, payload: LightPayload): Promise<void> {
    const light = await lightsApi.update(id, payload)
    const index = lights.value.findIndex((light) => light.id === id)

    if (index === -1) {
      return
    }

    lights.value[index] = light
  }

  async function retire(id: number): Promise<void> {
    const index = lights.value.findIndex((light) => light.id === id)

    if (index === -1) {
      return
    }

    const light = await lightsApi.retire(id)

    lights.value[index] = light
  }

  return {
    active,
    fetch,
    fetchOne,
    get,
    all,
    create,
    retire,
    update,
  }
})
