<script setup lang="ts">
  import type { Light } from '@/types';
  import { storeLight, getNextLightId } from '../api/lights.js'
  import LightForm from '../components/LightForm.vue'


  function createLight(light: Light) {
    light.id = getNextLightId()

    storeLight(light)
  }
</script>

<template>
  <h2>Add light</h2>

  <LightForm @onCreate="createLight" />
  <!--
  Missing
  Not working
  Insufficient brightness -->
</template>

