<script setup lang="ts">
  import type { Light, LightPayload } from '@/types'
  import { reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
  import ValidationErrors from '@/components/ValidationErrors.vue'

  const props = defineProps<{
    light?: Light
  }>()

  const form: LightPayload = reactive({
    name: props.light?.name ?? '',
    description: props.light?.description ?? '',
  })

  const rules = {
    name: { required },
    description: { required }
  }

  const v$ = useVuelidate(rules, form)

  const emit = defineEmits(['onSubmitted'])

  async function submit()
  {
    const isFormCorrect = await v$.value.$validate()

    if (!isFormCorrect) {
      return
    }
    emit('onSubmitted', {...form})

    form.name = ''
    form.description = ''
  }
</script>

<template>
  <ValidationErrors :errors="v$.$errors" />

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
