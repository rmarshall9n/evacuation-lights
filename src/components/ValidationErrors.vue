<script setup lang="ts">
  import type { ErrorObject } from '@vuelidate/core';
  import { ucfirst } from '@/helpers';

  defineProps<{
    errors: ErrorObject[]
  }>()
</script>
<template>
  <div v-if="errors.length > 0" class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">
    <p v-for="error of errors" :key="error.$uid" data-test="validation-error">
      <span class="font-bold">{{  ucfirst(error.$property) }}:</span> {{ error.$message }}
    </p>
  </div>
</template>
