<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import LightDetails from '@/components/LightDetails.vue'
  import RetireLightButton from '@/components/RetireLightButton.vue'
  import type { Light } from '@/types';

  const route = useRoute()
  const router = useRouter()

  const light = route.meta.light as Light

  function lightRetired(light: Light) {
    router.push('/lights')
  }
</script>
<template>
  <h1>View light</h1>
  <LightDetails :light="light"/>
  <RetireLightButton :light="light" @onRetired="lightRetired"/>
</template>
