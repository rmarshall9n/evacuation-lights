<script setup lang="ts">
  import type { Light } from '@/types';

  defineProps<{
    light: Light
  }>()
</script>

<template>
  <p>Name: {{ light.name }}</p>
  <p>Description: {{ light.description }}</p>
</template>
