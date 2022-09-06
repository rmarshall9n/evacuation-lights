import type { Audit, AuditsApi } from '../types'
import { persist, retrieve } from './LocalStorage';

function all(): Audit[]
{
  return retrieve<Audit>('audits')
}

function get(id: number): Audit|null
{
  const audit = retrieve<Audit>('audits').find((item: Audit) => item.id === id);

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
    records: [],
  }

  let audits = retrieve<Audit>('audits')

  audits.push(audit)

  persist<Audit>('audits', audits)

  return audit
}

function update(id: number, payload: Partial<Audit>): Audit|null
{
  let audits = retrieve<Audit>('audits')

  const index = audits.findIndex((audit) => audit.id === id)

  if (index === -1) {
    return null
  }

  audits[index] = {
    ...audits[index],
    ...payload
  }

  persist<Audit>('audits', audits)

  return audits[index]
}

export const auditsApi: AuditsApi = {
  all,
  get,
  store,
  update,
};
