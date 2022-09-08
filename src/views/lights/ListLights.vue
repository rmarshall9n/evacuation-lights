<script setup lang="ts">
  import LightsList from '@/components/lights/LightsList.vue'
</script>

<template>
  <h1 class="text-6xl font-thin mb-8">Lights</h1>

  <UiButton to="/lights/create">Create Light</UiButton>

  <UiPanel class="mt-6 max-w-3xl">
    <LightsList />
  </UiPanel>
</template>
