<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots()
</script>
<template>
  <div class="p-5 rounded-lg shadow-lg bg-white flex flex-col">
    <div>
      <slot></slot>
    </div>

    <div v-if="slots.footer !== undefined" class="mt-5">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
