import type { LightRecord, LightRecordPayload, LightRecordsApi } from '../types'
import { retrieve, persist } from './LocalStorage';

function all(): LightRecord[]
{
  return retrieve<LightRecord>('lightRecords')
}

function store(payload: LightRecordPayload): LightRecord
{
  const record: LightRecord = {
    id: Math.floor(Math.random() * 100000),
    created_at: (new Date()).toISOString(),
    ...payload
  }

  let records = retrieve<LightRecord>('lightRecords')

  records.push(record)

  persist<LightRecord>('lightRecords', records)

  return record
}

function destroy(auditId: number, lightId: number): void
{
  let records = retrieve<LightRecord>('lightRecords')

  const index = records.findIndex((record) => record.auditId === auditId && record.lightId === lightId)

  if (index === -1) {
    return
  }

  records.splice(index, 1);

  persist<LightRecord>('lightRecords', records)
}

// function update(id: number, payload: Partial<Light>): Light|null
// {
//   let lights = retrieve<LightRecord>('lightRecords')

//   const index = lights.findIndex((light) => light.id === id)

//   if (index === -1) {
//     return null
//   }

//   lights[index] = {
//     ...lights[index],
//     ...payload
//   }

//   persist<LightRecord>('lightRecords', lights)

//   return lights[index]
// }

export const lightRecordsApi: LightRecordsApi = {
  all,
  store,
  destroy,
  // update,
};
