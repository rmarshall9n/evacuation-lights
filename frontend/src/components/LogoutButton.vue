<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { logout } = useAuth0();

function onLogout()
{
    logout({
        returnTo: 'http://localhost:8080/login'
    });
}
</script>
<template>
    <a class="text-zinc-200 hover:text-white cursor-pointer" @click.prevent="onLogout">Logout</a>
</template>