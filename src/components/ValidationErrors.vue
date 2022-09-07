<script setup lang="ts">
  import type { ErrorObject } from '@vuelidate/core';

  defineProps<{
    errors: ErrorObject[]
  }>()

  function ucfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>
<template>
  <p
    v-for="error of errors"
    :key="error.$uid"
    data-test="validation-error"
    >
    {{  ucfirst(error.$property) }}: {{ error.$message }}
  </p>
</template>
