import type { Light, LightPayload, LightsApi } from '../types'
import { axios } from './Api'

async function all(): Promise<Light[]> {
  const response = await axios().get<Light[]>('/lights')

  return response.data
}

async function get(id: number): Promise<Light> {
  const response = await axios().get<Light>('/lights/' + id)

  return response.data
}

async function store(payload: LightPayload): Promise<Light> {
  const response = await axios().post<Light>('/lights', payload)

  return response.data
}

async function update(id: number, payload: LightPayload): Promise<Light> {
  const response = await axios().post<Light>('/lights/' + id, payload)

  return response.data
}

async function retire(id: number): Promise<Light> {
  const response = await axios().post<Light>('/lights/' + id + '/retire')

  return response.data
}

export const lightsApi: LightsApi = {
  all,
  get,
  store,
  update,
  retire,
};
