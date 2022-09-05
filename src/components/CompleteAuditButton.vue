<script setup lang="ts">
  import { useAuditsStore } from '@/store/audits';

  const store = useAuditsStore()

  const props = defineProps<{
    id: number
  }>()

  const emit = defineEmits(['onCompleted'])

  function complete(): void
  {
    store.complete(props.id)
    emit('onCompleted')
  }
</script>

<template>
  <button @click="complete" data-test="button">Complete</button>
</template>
