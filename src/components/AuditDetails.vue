<script setup lang="ts">
  import type { Audit } from '@/types';

  defineProps<{
    audit: Audit
  }>()
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
      <tr v-for="light in audit.lights" :key="light.id">
        <td>{{ light.name }}</td>
        <td><input type="checkbox" :disabled="audit.completed_at !== null" /></td>
      </tr>
    </tbody>
  </table>
</template>
