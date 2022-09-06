<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  defineProps<{
    id: number
  }>()
</script>

<template>
    <RouterLink :to="'/lights/' + id + '/edit'">Edit</RouterLink>
</template>
