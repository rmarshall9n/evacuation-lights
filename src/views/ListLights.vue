<script setup lang="ts">
import { onBeforeMount, ref, type Ref } from 'vue';
import type { Light } from '@/types';
import { getLights } from '@/api/lights';
import LightsList from '../components/LightsList.vue'

const lights: Ref<Light[]> = ref([])

onBeforeMount(() => {
  lights.value = getLights()
})
</script>

<template>
  <h2>Lights</h2>

  <LightsList :lights="lights" />
</template>
