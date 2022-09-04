<script setup lang="ts">
import { onErrorCaptured, ref, type ComponentPublicInstance } from 'vue';

const hasError = ref(false)

onErrorCaptured((error: unknown, instance: ComponentPublicInstance | null, info: string): boolean | void => {
  hasError.value = true
})
</script>

<template>
  <template v-if="hasError">
    <h1>Error</h1>
    <p>An error occurred</p>
  </template>
  <slot v-else></slot>
</template>
