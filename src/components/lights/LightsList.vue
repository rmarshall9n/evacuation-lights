<script setup lang="ts">
  import { useLightsStore } from '@/store/lights';
  import ViewLightButton from '@/components/lights/ViewLightButton.vue'
  import EditLightButton from '@/components/lights/EditLightButton.vue'

  const store = useLightsStore()

  store.fetch()
  const lights = store.active
</script>

<template>
  <ul>
    <li v-for="light in lights" :key="light.id" data-test="light">
      {{ light.name }}: {{ light.description }}
      <ViewLightButton :id="light.id" /> |
      <EditLightButton :id="light.id" />
    </li>
  </ul>
</template>
