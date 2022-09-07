import type { Audit } from '@/types'
import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { auditsApi } from '@/api/auditsApi'
import { useLightsStore } from './lights'
import { useLightRecordsStore } from './lightRecords'

// Missing
// Not working
// Insufficient brightness

export const useAuditsStore = defineStore('audits', () => {
  const audits: Ref<Audit[]> = ref([])

  const getDaysSinceLastAudit = computed(() => {
    type CompletedAudit = Audit & { completed_at: string }

    const sorted = audits.value
      .filter((audit): audit is CompletedAudit  => audit.completed_at !== null)
      .sort((auditA, auditB) => (auditA.completed_at < auditB.completed_at) ? 1 : -1)

    if (sorted.length === 0) {
      return 0
    }

    const timeDiff = Date.now() - Date.parse(sorted[0].completed_at)

    return Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  })

  const canCompleteAudit = computed(() => (id: number): boolean => {
    const audit = audits.value.find((audit) => audit.id === id)

    if (audit === undefined) {
      return false
    }

    if (audit.completed_at !== null) {
      return false
    }

    const lightsStore = useLightsStore()
    const lightIds = lightsStore.active.map(light => light.id)

    const recordStore = useLightRecordsStore()

    for (const lightId of lightIds) {
      if (recordStore.checked(id, lightId) === false) {
        return false
      }
    }

    return true
  })

  function fetch(): void
  {
    audits.value = auditsApi.all()
  }

  function fetchOne(id: number): void
  {
    const audit = auditsApi.get(id)

    if (audit === null) {
      return
    }

    const index = audits.value.findIndex((element) => element.id === id)

    // if the audit is not found in the state, add it. Otherwise update it.
    if (index === -1) {
      audits.value.push(audit)
    } else {
      audits.value[index] = audit
    }
  }

  function get(id: number): Audit | null
  {
    return audits.value.find((audit) => audit.id === id) || null
  }

  function all(): Audit[]
  {
    return audits.value
  }

  function create(): Audit
  {
    const audit = auditsApi.store()

    audits.value.push(audit)

    return audit
  }

  function complete(id: number)
  {
    const index = audits.value.findIndex((audit) => audit.id === id)

    if (index === -1) {
      return
    }

    const audit = auditsApi.update(id, {
      completed_at: (new Date()).toISOString(),
    })

    if (audit === null) {
      return
    }

    audits.value[index] = audit
  }

  return {
    fetch,
    fetchOne,
    get,
    all,
    create,
    getDaysSinceLastAudit,
    complete,
    canCompleteAudit,
  }
})

