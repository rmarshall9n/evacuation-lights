<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { RouterLink, RouterView } from 'vue-router'
import ErrorWrapper from '@/components/ErrorWrapper.vue';
import LoginButton from './components/LoginButton.vue';
import LogoutButton from './components/LogoutButton.vue';

const { isAuthenticated, user } = useAuth0();

const links: { text: string, url: string }[] = [
  { text: 'Audits', url: '/' }
]

if (user.value.role === 'admin') {
  links.push({ text: 'Lights', url: '/lights' })
}
</script>

<template>
  <header class="mb-8">
    <nav class="py-2 bg-teal-600 shadow-2xl">
      <div class="container mx-auto flex justify-between">
        <ul class="flex justify-center items-center space-x-3">
          <li v-if="isAuthenticated" v-for="link of links" :key="link.url" class="px-3 py-2">
            <RouterLink :to="link.url" class="text-zinc-200 hover:text-white">
              {{ link.text }}
            </RouterLink>
          </li>
        </ul>

        <div class="flex justify-center items-center space-x-3">
          <LoginButton v-if="!isAuthenticated" class="px-3 py-2"></LoginButton>
          <LogoutButton v-if="isAuthenticated" class="px-3 py-2"></LogoutButton>
          <span class="py-2 text-white text-xl font-semibold">Evacuation Lights</span>
        </div>
      </div>
    </nav>
  </header>

  <div class="container mx-auto">
    <ErrorWrapper>
      <RouterView />
    </ErrorWrapper>
  </div>
</template>
