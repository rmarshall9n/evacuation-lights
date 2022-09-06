<script setup lang="ts">
  import { useLightsStore } from '@/store/lights';

  const store = useLightsStore()

  const props = defineProps<{
    id: number
  }>()

  const emit = defineEmits(['onRetired'])

  function retire(): void
  {
    store.retire(props.id)
    emit('onRetired')
  }
</script>

<template>
  <button @click="retire" data-test="button">Retire</button>
</template>
