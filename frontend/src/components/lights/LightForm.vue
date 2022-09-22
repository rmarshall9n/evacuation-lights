<script setup lang="ts">
import type { Light, LightPayload } from '@/types'
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import UiInput from '@/components/ui/UiInput.vue'

const props = defineProps<{
  light?: Light
}>()

const form: LightPayload = reactive({
  name: props.light?.name ?? '',
  description: props.light?.description ?? '',
})

const v$ = useVuelidate({
  name: { required },
  description: { required }
}, form)

const emit = defineEmits(['onSubmitted'])

async function submit() {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    return
  }

  emit('onSubmitted', { ...form })
}
</script>

<template>
  <form @submit.prevent="submit" data-test="form">
    <UiPanel class="max-w-3xl">
      <UiInput label="Name" value="5" v-model="form.name" :errors="v$.name.$errors" data-test="input-name"
        class="mb-5" />

      <UiInput label="Description" value="5" v-model="form.description" :errors="v$.description.$errors"
        data-test="input-description" />

      <template v-slot:footer>
        <UiButton>Save</UiButton>
      </template>
    </UiPanel>
  </form>
</template>
