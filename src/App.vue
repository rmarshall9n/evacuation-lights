<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ErrorWrapper from '@/components/ErrorWrapper.vue';

const links: { text: string, url: string }[] = [
  { text: 'Audits', url: '/' },
  { text: 'Lights', url: '/lights' }
]
</script>

<template>
  <header class="mb-8">
    <nav class="py-2 bg-teal-600 shadow-2xl">
      <div class="container mx-auto flex justify-between">
        <ul class="flex justify-center space-x-3">
          <RouterLink v-for="link of links" :key="link.url" :to="link.url"
            class="px-3 py-2 text-zinc-200 hover:text-white"
          >
            {{ link.text }}
          </RouterLink>
        </ul>
        <span class="py-2 text-white text-xl font-semibold">Evacuation Lights</span>
      </div>
    </nav>
  </header>

  <div class="container mx-auto">
    <ErrorWrapper>
      <RouterView />
    </ErrorWrapper>
  </div>
</template>
