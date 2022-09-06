<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  defineProps<{
    id: number
  }>()
</script>

<template>
    <RouterLink :to="'/lights/' + id">View</RouterLink>
</template>
