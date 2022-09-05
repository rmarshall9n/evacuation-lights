import type { Audit, AuditsApi } from '../types'
import { lightsApi } from './lightsApi'

function retrieve(type: string): Audit[]
{
  let models = localStorage.getItem(type)

  if (models === null) {
    return []
  }

  return JSON.parse(models)
}

function persist(type: string, models: Audit[]): void
{
  localStorage.setItem(type, JSON.stringify(models))
}

function all(): Audit[]
{
  return retrieve('audits')
}

function get(id: number): Audit|null
{
  const audit = retrieve('audits').find((item: Audit) => item.id === id);

  if (audit === undefined) {
    return null
  }

  return audit
}

function store(): Audit
{
  const audit: Audit = {
    id: Math.floor(Math.random() * 100000),
    created_at: (new Date()).toISOString(),
    completed_at: null,
    lights: lightsApi.all().filter((light) => light.retired === false)
  }

  let audits = retrieve('audits')

  audits.push(audit)

  persist('audits', audits)

  return audit
}

function update(id: number, payload: Partial<Audit>): Audit|null
{
  let audits = retrieve('audits')

  const index = audits.findIndex((audit) => audit.id === id)

  if (index === -1) {
    return null
  }

  audits[index] = {
    ...audits[index],
    ...payload
  }

  persist('audits', audits)

  return audits[index]
}

export const auditsApi: AuditsApi = {
  all,
  get,
  store,
  update,
};
