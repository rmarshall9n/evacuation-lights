<script setup lang="ts">
  import type { LightPayload } from '@/types';
  import { useRoute, useRouter } from 'vue-router'
  import { useLightsStore } from '@/store/lights';
  import LightForm from '@/components/lights/LightForm.vue';

  const route = useRoute()
  const router = useRouter()
  const store = useLightsStore()

  const light = store.get(Number(route.params.id))

  function update(form: LightPayload) {
    if (light) {
      store.update(light?.id, form)
    }

    router.push('/lights')
  }
</script>
<template>
  <h1>Edit light</h1>

  <LightForm v-if="light" :light="light" @on-submitted="update" />
</template>
