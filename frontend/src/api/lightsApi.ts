import type { Light, LightPayload, LightsApi } from '../types'
import { persist, retrieve } from './LocalStorage';

function all(): Light[]
{
  return retrieve<Light>('lights')
}

function get(id: number): Light|null
{
  const light = retrieve<Light>('lights').find((item: Light) => item.id === id);

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

  let lights = retrieve<Light>('lights')

  lights.push(light)

  persist<Light>('lights', lights)

  return light
}

function update(id: number, payload: Partial<Light>): Light|null
{
  let lights = retrieve<Light>('lights')

  const index = lights.findIndex((light) => light.id === id)

  if (index === -1) {
    return null
  }

  lights[index] = {
    ...lights[index],
    ...payload
  }

  persist<Light>('lights', lights)

  return lights[index]
}

export const lightsApi: LightsApi = {
  all,
  get,
  store,
  update,
};
