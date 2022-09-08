<script setup lang="ts">
  import type { Light } from '@/types';

  defineProps<{
    light: Light
  }>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3">
    <div>
      <p class="font-medium text-slate-700">Name</p>
      <p>{{ light.name }}</p>
    </div>
    <div>
      <p class="font-medium text-slate-700">Description</p>
      <p>{{ light.description }}</p>
    </div>
  </div>
</template>
