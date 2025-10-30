<template>
  <!-- YouTube -->
  <svg v-if="nameLower === 'youtube'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41.2 41.2 0 0 0 0 12c0 1.9.2 3.8.5 5.8a4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8c.4-1.9.5-3.9.5-5.8s-.1-3.9-.5-5.8ZM9.8 15.6V8.4L15.8 12l-6 3.6Z"/>
  </svg>

  <!-- Facebook -->
  <svg v-else-if="nameLower === 'facebook'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.6V12h2.8V9.7c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12Z"/>
  </svg>

  <!-- Instagram -->
  <svg v-else-if="nameLower === 'instagram'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.8 6a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 17.8 6Z"/>
  </svg>

  <!-- TikTok -->
  <svg v-else-if="nameLower === 'tiktok'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 8.1c-2.1-.4-4-1.6-5.2-3.4V16a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1a3.5 3.5 0 1 0 3.5 3.5V2h2.6c.5 2.3 2.3 4.1 4.6 4.6V8.1Z"/>
  </svg>

  <!-- Google -->
  <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.35 11.1h-9.4v2.9h5.4a5.3 5.3 0 1 1-2-5.8l2.1-2.1A8.2 8.2 0 1 0 12.1 20a8.1 8.1 0 0 0 9.25-6.6Z"/>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ name: { type: String, required: true } })
const nameLower = computed(() => (props.name || '').toLowerCase())
</script>

<style scoped>
</style>


