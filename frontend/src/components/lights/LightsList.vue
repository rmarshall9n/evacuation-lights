<script setup lang="ts">
import { useLightsStore } from '@/store/lights';
import UiTable from '@/components/ui/UiTable.vue'

const store = useLightsStore()
</script>

<template>
  <p v-if="store.active.length === 0" class="text-center">No active lights could be found.</p>

  <UiTable v-else :headings="['Name', 'Description', '']" :data="store.active.map(light => [
    { name: 'name', value: light.name },
    { name: 'description', value: light.description },
    { name: 'actions', value: light.id }
  ])">
    <template v-slot:actions="{value: id}">
      <div class="flex space-x-1">
        <UiButton :to="'/lights/' + id" sm>View</UiButton>
        <UiButton :to="'/lights/' + id + '/edit'" sm>Edit</UiButton>
      </div>
    </template>
  </UiTable>
</template>
