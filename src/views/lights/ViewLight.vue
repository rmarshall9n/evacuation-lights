<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { useLightsStore } from '@/store/lights';
  import LightDetails from '@/components/lights/LightDetails.vue'

  const route = useRoute()
  const router = useRouter()
  const store = useLightsStore()

  const light = store.get(Number(route.params.id))

  function lightRetired()
  {
    if (light) {
      store.retire(light.id)
    }

    router.push('/lights')
  }
</script>
<template>
  <h1 class="text-6xl font-thin mb-8">View Light</h1>

  <UiPanel>
    <LightDetails v-if="light" :light="light" />

    <template v-slot:footer>
      <UiButton v-if="light" :id="light.id" @click="lightRetired">Retire Light</UiButton>
    </template>
  </UiPanel>
</template>
