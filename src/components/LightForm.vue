<script setup lang="ts">
  import type { LightPayload } from '../types'
  import { reactive } from 'vue';
  import { useLightsStore } from '@/store/lights';

  const store = useLightsStore()

  const form: LightPayload = reactive({
    name: '',
    description: ''
  })

  const emit = defineEmits(['onCreated'])

  function create()
  {
    store.create(form)

    form.name = ''
    form.description = ''

    emit('onCreated')
  }
</script>

<template>
  <form @submit.prevent="create" data-test="form">
    <div>
      <label>Name: </label><input type="text" name="name" v-model="form.name" data-test="input-name">
    </div>

    <div>
      <label>Description: </label><input type="text" name="description" v-model="form.description" data-test="input-description">
    </div>

    <button>Create</button>
  </form>
</template>
