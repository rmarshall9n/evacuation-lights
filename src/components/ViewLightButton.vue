<script setup lang="ts">
  import type { Light } from '@/types';
  import { RouterLink } from 'vue-router'

  defineProps<{
    light: Light
  }>()
</script>

<template>
    <RouterLink :to="'/lights/' + light.id">View</RouterLink>
</template>
