<script setup lang="ts">
  import { useLightsStore } from '@/store/lights';
  import DataTable from '@/components/DataTable.vue'
  import ViewLightButton from '@/components/lights/ViewLightButton.vue'
  import EditLightButton from '@/components/lights/EditLightButton.vue'

  const store = useLightsStore()

  store.fetch()

  const lights = store.active
</script>

<template>
  <DataTable
    :headings="['Name', 'Description', '']"
    :data="lights.map(light => [
      { name: 'name', value: light.name },
      { name: 'description', value: light.description },
      { name: 'actions', value: light.id }
    ])"
  >
    <template v-slot:actions="{value: id}">
      <ViewLightButton :id="id" class="mr-2 px-2 py-1 rounded bg-zinc-200 text-zinc-800 shadow-md hover:bg-zinc-300 hover:text-zinc-700" />
      <EditLightButton :id="id" class="px-2 py-1 rounded bg-zinc-200 text-zinc-800 shadow-md hover:bg-zinc-300 hover:text-zinc-700" />
    </template>
  </DataTable>
</template>
