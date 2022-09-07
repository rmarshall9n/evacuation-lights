<script setup lang="ts">
  import { useAuditsStore } from '@/store/audits';

  const store = useAuditsStore()

  const props = defineProps<{
    id: number
  }>()

  const emit = defineEmits(['onCompleted'])

  function complete(): void
  {
    if (!store.canCompleteAudit(props.id)) {
      return
    }

    store.complete(props.id)

    emit('onCompleted')
  }
</script>

<template>
  <button @click="complete" data-test="button" :disabled="!store.canCompleteAudit(props.id)">Complete</button>
</template>
