<script setup lang="ts">
  import type { Audit } from '@/types';
  import { useLightsStore } from '@/store/lights';
  import { useLightRecordsStore } from '@/store/lightRecords';
import UiTable from './ui/UiTable.vue';

  const props = defineProps<{
    audit: Audit
  }>()

  const lightsStore = useLightsStore()
  const lightRecordsStore = useLightRecordsStore()

  lightsStore.fetch()
  lightRecordsStore.fetch()

  function record(event: boolean, lightId: number): void
  {
    if (event === true) {
      lightRecordsStore.create({
        auditId: props.audit.id,
        lightId,
        issue: false,
        note: ''
      })
    } else {
      lightRecordsStore.destroy(props.audit.id, lightId)
    }
  }
</script>
<template>
  <UiTable :headings="['Light name', 'Completed']"
    :data="lightsStore.active.map(light => [
      { name: 'name', value: light.name },
      { name: 'completed', value: light },
    ])"
  >
    <template v-slot:completed="{value: light}">
      <input type="checkbox" :checked="lightRecordsStore.checked(props.audit.id, light.id)" :disabled="audit.completed_at !== null" @change="record($event.target.checked, light.id)" />
    </template>
  </UiTable>
</template>
