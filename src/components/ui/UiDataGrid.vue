<script setup lang="ts">
  defineProps<{
    data: any[],
  }>()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3">
    <div v-for="cell of data">
      <p class="font-medium text-slate-700">{{ cell.label }}</p>
      <p class="font-light text-slate-700">{{ cell.value }}</p>
    </div>
  </div>
</template>
