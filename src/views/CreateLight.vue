<script setup lang="ts">
  import router from '@/router';
  import LightForm from '../components/LightForm.vue'

  function created()
  {
    router.push('/lights')
  }
</script>

<template>
  <h2>Add light</h2>

  <LightForm @onCreated="created" />
</template>

