<script setup lang="ts">
import { useAuditsStore } from '@/store/audits';
import { useRoute } from 'vue-router';

const store = useAuditsStore()
const route = useRoute()

const audit = store.getAudit(Number(route.params.id))
console.log(audit)
</script>

<template>
  <h2>Audit</h2>

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
        <td><input type="checkbox" /></td>
      </tr>
    </tbody>
  </table>

  <button>Complete audit</button>

</template>
