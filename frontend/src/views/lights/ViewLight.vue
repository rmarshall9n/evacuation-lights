<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useLightsStore } from '@/store/lights';
import UiDataGrid from '@/components/ui/UiDataGrid.vue';

const route = useRoute()
const router = useRouter()
const store = useLightsStore()

const light = store.get(Number(route.params.id))

async function lightRetired(): Promise<void> {
  if (light) {
    await store.retire(light.id)
  }

  router.push('/lights')
}
</script>
<template>
  <h1 class="text-6xl font-thin mb-8">View Light</h1>

  <UiPanel v-if="light" class="max-w-3xl">
    <UiDataGrid :data="[
      { label: 'Name', value: light.name},
      { label: 'Description', value: light.description !== null ? 'Yes' : 'No'},
    ]" />

    <template v-slot:footer>
      <UiButton @click="lightRetired">Retire Light</UiButton>
    </template>
  </UiPanel>
</template>
