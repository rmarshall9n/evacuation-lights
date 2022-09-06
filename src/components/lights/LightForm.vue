<script setup lang="ts">
  import type { Light, LightPayload } from '../types'
  import { reactive } from 'vue';

  const props = defineProps<{
    light?: Light
  }>()

  const form: LightPayload = reactive({
    name: props.light?.name ?? '',
    description: props.light?.description ?? '',
  })

  const emit = defineEmits(['onSubmitted'])

  function submit()
  {
    emit('onSubmitted', form)

    form.name = ''
    form.description = ''
  }
</script>

<template>
  <form @submit.prevent="submit" data-test="form">
    <div>
      <label>Name: </label><input type="text" name="name" v-model="form.name" data-test="input-name">
    </div>

    <div>
      <label>Description: </label><input type="text" name="description" v-model="form.description" data-test="input-description">
    </div>

    <button>{{ light ? 'Edit' : 'Create' }}</button>
  </form>
</template>
