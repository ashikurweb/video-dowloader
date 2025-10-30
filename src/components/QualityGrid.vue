<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold mb-2">Select Quality & Download</h2>
    <!-- Tabs -->
    <div class="mb-4">
      <div class="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1">
        <button
          class="px-4 py-2 rounded-md text-sm transition"
          :class="activeTab === 'video' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-800'"
          @click="activeTab = 'video'"
        >Video</button>
        <button
          class="px-4 py-2 rounded-md text-sm transition"
          :class="activeTab === 'audio' ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-800'"
          @click="activeTab = 'audio'"
        >Audio</button>
      </div>
    </div>

    <div v-if="activeTab === 'video'" class="grid grid-cols-3 gap-4 mb-6">
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">4320p</h3>
        <p class="text-sm text-gray-600">8K Ultra HD</p>
        <p class="text-xs text-gray-500">2.8 GB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">2160p</h3>
        <p class="text-sm text-gray-600">4K Ultra HD</p>
        <p class="text-xs text-gray-500">1.2 GB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer bg-blue-50 border-blue-500">
        <h3 class="font-semibold">1440p</h3>
        <p class="text-sm text-gray-600">2K QHD</p>
        <p class="text-xs text-gray-500">650 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">1080p</h3>
        <p class="text-sm text-gray-600">Full HD</p>
        <p class="text-xs text-gray-500">320 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">720p</h3>
        <p class="text-sm text-gray-600">HD</p>
        <p class="text-xs text-gray-500">180 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">480p</h3>
        <p class="text-sm text-gray-600">SD</p>
        <p class="text-xs text-gray-500">95 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">360p</h3>
        <p class="text-sm text-gray-600">Low</p>
        <p class="text-xs text-gray-500">65 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">144p</h3>
        <p class="text-sm text-gray-600">Mobile</p>
        <p class="text-xs text-gray-500">25 MB</p>
        <p class="text-xs text-gray-500">MP4</p>
      </div>
    </div>

    <div v-else class="grid grid-cols-3 gap-4 mb-6">
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">320 kbps</h3>
        <p class="text-sm text-gray-600">High Quality</p>
        <p class="text-xs text-gray-500">18 MB</p>
        <p class="text-xs text-gray-500">MP3</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer bg-blue-50 border-blue-500">
        <h3 class="font-semibold">256 kbps</h3>
        <p class="text-sm text-gray-600">Recommended</p>
        <p class="text-xs text-gray-500">14 MB</p>
        <p class="text-xs text-gray-500">M4A</p>
      </div>
      <div class="border rounded-md p-4 text-center cursor-pointer hover:border-blue-500">
        <h3 class="font-semibold">128 kbps</h3>
        <p class="text-sm text-gray-600">Standard</p>
        <p class="text-xs text-gray-500">8 MB</p>
        <p class="text-xs text-gray-500">MP3</p>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-medium mb-2">Ready to Download</h3>
      <p class="text-sm text-gray-600 mb-4">{{ activeTab === 'video' ? '1440p • 650 MB • MP4' : '256 kbps • 14 MB • M4A' }}</p>
      <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 flex items-center">⬇️ Download</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('video')
</script>

<style scoped>
</style>


