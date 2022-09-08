<script setup lang="ts">
  import type { LightPayload } from '@/types';
  import router from '@/router';
  import { useLightsStore } from '@/store/lights';
  import LightForm from '@/components/lights/LightForm.vue'

  const store = useLightsStore()

  function create(payload: LightPayload)
  {
    store.create(payload)

    router.push('/lights')
  }
</script>

<template>
  <h1 class="text-6xl font-thin mb-8">Create Light</h1>

  <LightForm @on-submitted="create" />
</template>

