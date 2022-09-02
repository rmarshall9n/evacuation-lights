import type { Light } from '../types'

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

export function getNextLightId(): number
{
  let id = parseInt(localStorage.getItem('latestId') || '0') + 1

  localStorage.setItem('latestId', id.toString())

  return id
}

export function storeLight(light: Light): void
{
  let lights = retrieveLights()

  lights.push(light)

  persistLights(lights)
}

export function getLights(): Light[]
{
  return retrieveLights()
}

export function getLight(id: number): Light | null
{
  if (!Number.isInteger(id)) {
    return null
  }

  let lights = retrieveLights()

  const light = lights.find((item: Light) => item.id === id);

  if (light === undefined) {
    return null
  }

  return light
}

export function retireLight(id: number): void
{
  let lights = retrieveLights()

  lights = lights.filter((light: Light) => light.id !== id)

  persistLights(lights)
}
