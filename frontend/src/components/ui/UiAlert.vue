<script setup lang="ts">
  defineProps<{
    variant?: 'danger' | 'warning' | 'info'
  }>()
</script>
<template>
  <div role="alert"
    :class="[
      'rounded-lg py-5 px-6 mb-4 text-base mb-3',
      !variant ? ['bg-slate-100', 'text-slate-700'] : '',
      variant === 'danger' ? ['bg-red-100', 'text-red-700'] : '',
      variant === 'warning' ? ['bg-yellow-100', 'text-yellow-700'] : '',
      variant === 'info' ? ['bg-blue-100', 'text-blue-700'] : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

rounded-lg py-5 px-6 mb-4 text-base mb-3 bg-slate-100 text-slate-700
