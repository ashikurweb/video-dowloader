<template>
  <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 mb-6">
    <h1 class="text-2xl font-bold text-center mb-2">Download Videos from Any Platform</h1>
    <p class="text-gray-600 text-center mb-6">Paste your video URL below and select your preferred quality</p>

    <div class="flex justify-center space-x-4 mb-6">
      <button class="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full">▶ YouTube</button>
      <button class="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full">f Facebook</button>
      <button class="flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full">◎ Instagram</button>
      <button class="flex items-center px-4 py-2 bg-black text-white rounded-full">♪ TikTok</button>
      <button class="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full">G Google</button>
    </div>

    <div class="flex gap-2">
      <input
        type="text"
        v-model="urlInput"
        placeholder="tailwind 4 vue 3 ant design vue make this design"
        class="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button @click="clearUrl" class="px-4 py-2 text-gray-500 hover:text-gray-700">✖</button>
      <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">📋 Paste</button>
      <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center" :disabled="loading" @click="analyze">🔍 {{ loading ? 'Analyzing...' : 'Analyze' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const urlInput = ref('tailwind 4 vue 3 ant design vue make this design')
const loading = ref(false)

function clearUrl() {
  urlInput.value = ''
}

function analyze() {
  loading.value = true
  setTimeout(() => { loading.value = false }, 800)
}
</script>

<style scoped>
</style>


