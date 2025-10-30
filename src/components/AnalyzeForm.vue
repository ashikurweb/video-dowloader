<template>
  <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 mb-6">
    <h1 class="text-2xl font-bold text-center mb-2">Download Videos from Any Platform</h1>
    <p class="text-gray-600 text-center mb-6">Paste your video URL below and select your preferred quality</p>

    <div class="flex justify-center space-x-4 mb-6">
      <button class="flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 gap-2">
        <SocialIcon name="YouTube" />
        <span>YouTube</span>
      </button>
      <button class="flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 gap-2">
        <SocialIcon name="Facebook" />
        <span>Facebook</span>
      </button>
      <button class="flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 gap-2">
        <SocialIcon name="Instagram" />
        <span>Instagram</span>
      </button>
      <button class="flex items-center px-4 py-2 rounded-full bg-black text-white gap-2">
        <SocialIcon name="TikTok" />
        <span>TikTok</span>
      </button>
      <button class="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 gap-2">
        <SocialIcon name="Google" />
        <span>Google</span>
      </button>
    </div>

    <div class="flex gap-2">
      <input
        type="text"
        v-model="urlInput"
        placeholder="tailwind 4 vue 3 ant design vue make this design"
        class="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button v-ripple @click="clearUrl" class="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-md"><i class="fas fa-times"></i></button>
      <button v-ripple class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-2"><i class="far fa-clipboard"></i><span>Paste</span></button>
      <button v-ripple class="btn-glossy btn-blue" :disabled="loading" @click="analyze"><i class="fas fa-search"></i><span>{{ loading ? 'Analyzing...' : 'Analyze' }}</span></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SocialIcon from './icons/SocialIcon.vue'

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


