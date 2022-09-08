<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { useAuditsStore } from '@/store/audits';
  import AuditDetails from '@/components/AuditDetails.vue';
  import CompleteAuditButton from '@/components/CompleteAuditButton.vue';

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

  <AuditDetails v-if="audit" :audit="audit" />

  <CompleteAuditButton v-if="audit && audit.completed_at === null" :id="audit.id" @on-completed="completed" />
</template>
