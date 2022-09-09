<script setup lang="ts">
  import type { ErrorObject } from '@vuelidate/core';
  import { ucfirst } from '@/helpers';
  import { computed, ErrorCodes } from 'vue';

  const props = defineProps<{
    label: string,
    modelValue: string,
    errors?: ErrorObject[]
  }>()

  const emit = defineEmits(['update:modelValue'])

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(modelValue) {
      emit('update:modelValue', modelValue)
    }
  })


</script>

<template>
    <label class="block">
      <span class="block font-medium text-slate-700">{{ label }}</span>

      <input type="text" v-model="modelValue"
        :class="[
          'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400',
          'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
          'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
          errors.length > 0 ? 'border-red-400 text-red-500 focus:border-red-400 focus:ring-red-200' : ''
        ]"
      />

      <p v-for="error of errors" :key="error.$uid" class="text-red-500 font-light mt-2">{{ ucfirst(error.$property) }} {{ error.$message.toLowerCase() }}.</p>
  </label>

</template>
