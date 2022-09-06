<script setup lang="ts">
  import type { Light } from '@/types';
  import { useRoute, useRouter } from 'vue-router'
  import { useLightsStore } from '@/store/lights';
  import LightDetails from '@/components/LightDetails.vue'
  import RetireLightButton from '@/components/RetireLightButton.vue'

  const route = useRoute()
  const router = useRouter()
  const store = useLightsStore()

  const light = store.get(Number(route.params.id))

  function lightRetired(light: Light) {
    router.push('/lights')
  }
</script>
<template>
  <h1>View light</h1>

  <template v-if="light !== null">
    <LightDetails :light="light"/>

    <RetireLightButton :id="light.id" @onRetired="lightRetired"/>
  </template>
</template>
