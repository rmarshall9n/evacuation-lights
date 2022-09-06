<script setup lang="ts">
  import type { Audit, LightRecord } from '@/types';
  import { useLightsStore } from '@/store/lights';
  import { useLightRecordsStore } from '@/store/lightRecords';

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
  <p>Created at: {{ audit.created_at }}</p>
  <p>Completed: {{ audit.completed_at !== null ? 'Yes' : 'No'}}</p>

  <h3>Checklist</h3>

  <table>
    <thead>
      <tr>
        <th>Light name</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="light in lightsStore.active" :key="light.id">
        <td>{{ light.name }}</td>
        <td><input type="checkbox" :checked="lightRecordsStore.checked(props.audit.id, light.id)" :disabled="audit.completed_at !== null" @change="record($event.target.checked, light.id)" /></td>
      </tr>
    </tbody>
  </table>
</template>
