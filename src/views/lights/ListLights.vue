<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import LightsList from '@/components/lights/LightsList.vue'
</script>

<template>
  <h2>Lights</h2>

  <RouterLink to="/lights/create">Create Light</RouterLink>

  <LightsList />
</template>
