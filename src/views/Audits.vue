<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuditsStore } from '@/store/audits';
  import UiAlert from '@/components/ui/UiAlert.vue';
  import UiTable from '@/components/ui/UiTable.vue';

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
  <h1 class="text-6xl font-thin mb-8">Audits</h1>

  <UiAlert :variant="daysSinceLastAudit > 30 ? 'danger' : 'info'">
    <p>{{ daysSinceLastAudit }} days since last completed audit.</p>
  </UiAlert>

  <p v-if="daysSinceLastAudit > 30">You are due an audit</p>

  <UiButton @click="startAudit">Start Audit</UiButton>

  <UiPanel class="mt-6">
    <UiTable
      :headings="['Date', 'Completed', '']"
      :data="audits.map(audit => [
        { name: 'date', value: audit.created_at },
        { name: 'description', value: audit.completed_at !== null ? 'Yes' : 'No' },
        { name: 'actions', value: audit.id }
      ])"
    >
      <template v-slot:actions="{value: id}">
        <div class="flex space-x-1">
          <UiButton :to="'/audits/' + id" sm>View</UiButton>
        </div>
      </template>
    </UiTable>
  </UiPanel>
</template>
