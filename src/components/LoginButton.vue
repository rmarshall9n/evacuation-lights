<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

function onLogin()
{
    loginWithRedirect();
}
</script>
<template>
    <a class="text-zinc-200 hover:text-white cursor-pointer" @click.prevent="onLogin">Login</a>
</template>