<script setup lang="ts">
  import type { Light } from '@/types';
  import ViewLightButton from '@/components/ViewLightButton.vue'

  defineProps<{
    lights: Light[]
  }>()
</script>

<template>
  <ul>
    <li v-for="light in lights" :key="light.id" data-test="light">
      {{ light.name }}: {{ light.description }}
      <ViewLightButton :light="light" />
    </li>
  </ul>
</template>
