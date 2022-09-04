<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorWrapper from './components/ErrorWrapper.vue';
</script>

<template>
  <header>
      <h1>Evacuation Lights</h1>

      <nav>
        <RouterLink to="/">Dashboard</RouterLink> |
        <RouterLink to="/lights">Lights</RouterLink>
      </nav>
  </header>

  <ErrorWrapper>
    <RouterView />
  </ErrorWrapper>
</template>
