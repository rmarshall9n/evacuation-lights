import type { Light, LightPayload, LightsService } from '../types'

function retrieveLights(): Light[]
{
  let lights = localStorage.getItem('lights')

  if (lights === null) {
    return []
  }

  return JSON.parse(lights)
}

function persistLights(lights: Light[]): void
{
  localStorage.setItem('lights', JSON.stringify(lights))
}

function all(): Light[]
{
  return retrieveLights()
}

function get(id: number): Light|null
{
  const light = retrieveLights().find((item: Light) => item.id === id);

  if (light === undefined) {
    return null
  }

  return light
}

function store(payload: LightPayload): Light
{
  const light: Light = {
    id: Math.floor(Math.random() * 100000),
    retired: false,
    ...payload
  }

  let lights = retrieveLights()

  lights.push(light)

  persistLights(lights)

  return light
}

function update(id: number, payload: Partial<Light>): Light|null
{
  let lights = retrieveLights()

  const index = lights.findIndex((light) => light.id === id)

  if (index === -1) {
    return null
  }

  lights[index] = {
    ...lights[index],
    ...payload
  }

  persistLights(lights)

  return lights[index]
}

export const lightsApi: LightsService = {
  all,
  get,
  store,
  update,
};
