import { defineStore } from 'pinia'
import { ref } from 'vue'

// Missing
// Not working
// Insufficient brightness

export const useAuditsStore = defineStore('audits', () => {
  const audits = ref([
    {
      id: 1,
      created_at: '2022-05-31',
      completed_at: '2022-05-31',
      lights: []
    },
    {
      id: 2,
      created_at: '2022-06-31',
      completed_at: '2022-06-31',
      lights: []
    },
    {
      id: 3,
      created_at: '2022-07-31',
      completed_at: '2022-07-31',
    },
    {
      id: 4,
      created_at: '2022-08-31',
      completed_at: null,
      lights: []
    }
  ])

  function getAudit(id: number) {
    const audit = audits.value.find((element) => element.id === id)

    return audit === undefined ? null : audit
  }

  function createAudit() {
    const audit = {
      id: Math.floor(Math.random() * 100000),
      created_at: (new Date()).toISOString(),
      completed_at: null,
      lights: [
        {
          id: 1,
          name: 'light name 1',
          description: 'light description 1',
        },
        {
          id: 2,
          name: 'light name 2',
          description: 'light description 2',
        }
      ]
    }

    audits.value.push(audit)

    return audit
  }

  function completeAudit(id: number) {
    audits.value.find((element) => element.id === id).completed_at = new Date()
  }

  function getLastCompletedAudit() {
    const sorted = audits.value
      .filter((audit) => audit.completed_at !== null)
      .sort((a, b) => (a.completed_at < b.completed_at) ? 1 : -1)

    return sorted.length > 0 ? sorted[0] :  null
  }

  function getDaysSinceLastAudit() {
    const lastAudit = getLastCompletedAudit()

    if (lastAudit === null  || lastAudit.completed_at === null) {
      return 0
    }

    const timeDiff = Date.now() - Date.parse(lastAudit.completed_at)

    return Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  }

  return {
    audits,
    getAudit,
    createAudit,
    getLastCompletedAudit,
    getDaysSinceLastAudit
  }
})

