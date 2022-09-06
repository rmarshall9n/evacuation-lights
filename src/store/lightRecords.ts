import { computed, type Ref } from 'vue'
import type { LightRecord, LightRecordPayload } from '@/types'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { lightRecordsApi } from '@/api/LightRecordsApi'

export const useLightRecordsStore = defineStore('lightRecords', () => {

  const lightRecords: Ref<LightRecord[]> = ref([])

  const checked = computed(() =>
    (auditId: number, lightId: number): boolean => lightRecords.value.find((record) => record.auditId === auditId && record.lightId === lightId) !== undefined
  )

  function fetch(): void
  {
    lightRecords.value = lightRecordsApi.all()
  }

  function all(): LightRecord[]
  {
    return lightRecords.value
  }

  function create(payload: LightRecordPayload): void
  {
    const lightrecords = lightRecordsApi.store(payload)

    lightRecords.value.push(lightrecords)
  }

  function destroy(auditId: number, lightId: number): void
  {
    lightRecordsApi.destroy(auditId, lightId)

    const index = lightRecords.value.findIndex((record) => record.auditId === auditId && record.lightId === lightId)

    if (index === -1) {
      return
    }

    lightRecords.value.splice(index, 1);
  }

  return {
    checked,
    fetch,
    all,
    create,
    destroy,
  }
})
