<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import LightsList from '@/components/lights/LightsList.vue'
</script>

<template>
  <h1 class="text-6xl font-thin mb-8">Lights</h1>

  <RouterLink to="/lights/create"
    class="px-3 py-2 rounded bg-zinc-200 text-zinc-800 shadow-md hover:bg-zinc-300 hover:text-zinc-700"
  >
    Create Light
  </RouterLink>

  <LightsList class="mt-7" />
</template>
