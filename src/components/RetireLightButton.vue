<script setup lang="ts">
  import { retireLight } from '@/api/lights'
  import type { Light } from '@/types';

  const props = defineProps<{
    light: Light
  }>()

  const emit = defineEmits(['onRetired'])

  function retire() {
    retireLight(props.light.id)
    emit('onRetired')
  }
</script>

<template>
  <button @click="retire" data-test="button">Retire</button>
</template>
