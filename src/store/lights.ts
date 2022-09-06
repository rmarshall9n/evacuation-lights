import type { Light, LightPayload } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { lightsApi } from '@/api/lightsApi'

export const useLightsStore = defineStore('lights', () => {

  const lights: Ref<Light[]> = ref([])

  const active = computed(() => lights.value.filter(light => light.retired === false))


  function fetch(): void
  {
    lights.value = lightsApi.all()
  }

  function fetchOne(id: number): void
  {
    const light = lightsApi.get(id)

    if (light === null) {
      return
    }

    const index = lights.value.findIndex((element) => element.id === id)

    // if the light is not found in the state, add it. Otherwise update it.
    if (index === -1) {
      lights.value.push(light)
    } else {
      lights.value[index] = light
    }
  }

  function get(id: number): Light | null
  {
    return lights.value.find((light) => light.id === id) || null
  }

  function all(): Light[]
  {
    return lights.value
  }


  function create(payload: LightPayload): void
  {
    const light = lightsApi.store(payload)

    lights.value.push(light)
  }

  function retire(id: number): void
  {
    const index = lights.value.findIndex((light) => light.id === id)

    if (index === -1) {
      return
    }

    const light = lightsApi.update(id, {
      retired: true
    })

    if (light === null) {
      return
    }

    lights.value[index] = light
  }

  function update(id: number, payload: LightPayload): void
  {
    const light = lightsApi.update(id, payload)

    if (light === null) {
      return
    }

    const index = lights.value.findIndex((light) => light.id === id)

    if (index === -1) {
      return
    }

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
