<script setup lang="ts">
  import { reactive } from 'vue';
  import type { Light } from '../types'

  const emit = defineEmits(['onCreate'])

  const light: Light = reactive({
    id: 0,
    name: '',
    description: ''
  })

  function create() {
    emit('onCreate', {...light})

    light.name = ''
    light.description = ''
  }
</script>

<template>
  <form @submit.prevent="create" data-test="form">
    <div>
      <label>Name: </label><input type="text" name="name" v-model="light.name" data-test="input-name">
    </div>

    <div>
      <label>Description: </label><input type="text" name="description" v-model="light.description" data-test="input-description">
    </div>

    <button>Create</button>
  </form>
</template>
