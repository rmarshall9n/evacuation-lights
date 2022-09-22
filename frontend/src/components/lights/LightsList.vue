<script setup lang="ts">
import { useLightsStore } from '@/store/lights';
import UiTable from '@/components/ui/UiTable.vue'

const store = useLightsStore()

const lights = store.active
</script>

<template>
  <UiTable :headings="['Name', 'Description', '']" :data="lights.map(light => [
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
