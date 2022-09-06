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
  <h2>Add light</h2>

  <LightForm @onSubmitted="create" />
</template>

