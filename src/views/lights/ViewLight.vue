<script setup lang="ts">
  import type { Light } from '@/types';
  import { useRoute, useRouter } from 'vue-router'
  import { useLightsStore } from '@/store/lights';
  import LightDetails from '@/components/lights/LightDetails.vue'
  import RetireLightButton from '@/components/lights/RetireLightButton.vue'

  const route = useRoute()
  const router = useRouter()
  const store = useLightsStore()

  const light = store.get(Number(route.params.id))

  function lightRetired(light: Light) {
    router.push('/lights')
  }
</script>
<template>
  <h1 class="text-6xl font-thin mb-8">View Light</h1>

  <LightDetails v-if="light" :light="light"/>

  <RetireLightButton v-if="light" :id="light.id" @on-retired="lightRetired"/>
</template>
