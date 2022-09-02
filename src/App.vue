<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorWrapper from './components/ErrorWrapper.vue';
</script>

<template>
  <header>
      <h1>Evacuation Lights</h1>

      <nav>
        <RouterLink to="/lights">List Lights</RouterLink>
        <RouterLink to="/lights/create">Create Light</RouterLink>
      </nav>
  </header>

  <ErrorWrapper>
    <RouterView />
  </ErrorWrapper>
</template>
