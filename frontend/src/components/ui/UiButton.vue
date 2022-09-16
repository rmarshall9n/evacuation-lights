<script setup lang="ts">
  const props = defineProps<{
    to?: string,
    sm?: boolean,
  }>()

  let classes = [
    'inline-block',
    'rounded',
    'bg-teal-600',
    'text-white',
    'shadow-sm',
    'shadow-teal-800',
    'hover:bg-teal-700',
    'hover:shadow',
    'hover:shadow-teal-800',
    'focus:bg-teal-800',
    'focus:shadow-inner'
  ]

  if (props.sm === true) {
    classes.push('px-2')
    classes.push('py-1')
  } else {
    classes.push('px-3')
    classes.push('py-2')
  }
</script>
<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <slot></slot>
  </RouterLink>

  <button v-else :class="classes">
    <slot></slot>
  </button>
</template>
