<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { useAuditsStore } from '@/store/audits';
  import AuditChecklist from '@/components/AuditChecklist.vue';
  import CompleteAuditButton from '@/components/CompleteAuditButton.vue';
  import UiDataGrid from '../components/ui/UiDataGrid.vue';

  const store = useAuditsStore()
  const route = useRoute()
  const router = useRouter()

  const id = Number(route.params.id)
  store.fetchOne(id)
  const audit = store.get(id)

  function completed(): void {
    router.push('/')
  }
</script>

<template>
  <h1 class="text-6xl font-thin mb-8">Audit</h1>

  <UiPanel v-if="audit">
    <UiDataGrid :data="[
      { label: 'Created at', value: audit.created_at},
      { label: 'Completed', value: audit.completed_at !== null ? 'Yes' : 'No'},
    ]" />

    <h3 class="text-2xl font-thin mt-6 mb-2">Checklist</h3>

    <AuditChecklist :audit="audit" />

    <template v-slot:footer>
      <CompleteAuditButton v-if="audit && audit.completed_at === null" :id="audit.id" @on-completed="completed" />
    </template>
  </UiPanel>

</template>
