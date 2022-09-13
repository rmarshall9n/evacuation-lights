<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  
  const { loginWithRedirect } = useAuth0();
  
  function onLogin()
  {
      loginWithRedirect();
  }
</script>
<template>
  <div class="container px-6 py-12 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="md:w-8/12 lg:w-5/12">
        <h1 class="text-6xl font-thin mb-8 text-center">Evacuation Lights</h1>
        <UiButton class="w-full" @click.prevent="onLogin">Login</UiButton>
      </div>
    </div>
  </div>
</template>
