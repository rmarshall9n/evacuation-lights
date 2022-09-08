<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuditsStore } from '@/store/audits';

  const store = useAuditsStore()
  const router = useRouter()

  const daysSinceLastAudit = store.getDaysSinceLastAudit

  store.fetch()
  const audits = store.all()

  function startAudit()
  {
    const audit = store.create()
    router.push('/audits/' + audit.id)
  }
</script>

<template>
  <p>Days since last completed audit: {{ daysSinceLastAudit }}</p>

  <p v-if="daysSinceLastAudit > 30">You are due an audit</p>

  <button @click="startAudit"
    class="px-3 py-2 rounded bg-zinc-200 text-zinc-800 shadow-md hover:bg-zinc-300 hover:text-zinc-700"
  >
    Start Audit
  </button>

  <h2 class="text-4xl font-thin my-8">Past Audits</h2>

  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Completed</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="audit in audits" :key="audit.id">
        <td>{{ audit.created_at }}</td>
        <td>{{ audit.completed_at !== null ? 'Yes' : 'No'}}</td>
        <td><RouterLink :to="'audits/' + audit.id">View</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>
