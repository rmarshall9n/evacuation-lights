<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorWrapper from './components/ErrorWrapper.vue';

const links: { text: string, url: string }[] = [
  { text: 'Audits', url: '/' },
  { text: 'Lights', url: '/lights' }
]
</script>

<template>
  <header>
    <nav class="mb-8 px-10 py-2 flex justify-between bg-teal-600 shadow-2xl">
      <ul class="flex justify-center space-x-3">
        <RouterLink v-for="link of links" :key="link.url" :to="link.url"
          class="px-3 py-2 text-zinc-200 hover:text-white"
        >
          {{ link.text }}
        </RouterLink>
      </ul>
      <span class="py-2 text-white text-xl font-semibold">Evacuation Lights</span>
    </nav>
  </header>

  <div class="px-10">
    <ErrorWrapper>
      <RouterView />
    </ErrorWrapper>
  </div>
</template>
