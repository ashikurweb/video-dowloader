<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">Download Settings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Default Quality</label>
        <!-- Custom dropdown -->
        <div class="relative" @keydown.escape="open=false">
          <button type="button"
                  class="w-full h-10 px-3 border rounded-md bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                  @click="open = !open"
                  @blur="onBlur">
            <span>{{ selected.label }}</span>
            <svg class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"/></svg>
          </button>
          <transition name="fade-up">
            <div v-show="open" class="absolute z-10 bottom-full mb-1 w-full rounded-md border bg-white shadow-lg overflow-hidden">
              <ul class="max-h-56 overflow-auto py-1">
                <li v-for="opt in options" :key="opt.value">
                  <button type="button"
                          class="w-full text-left px-3 py-2 text-sm hover:bg-blue-50"
                          @mousedown.prevent
                          @click="select(opt)">
                    {{ opt.label }}
                  </button>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Download Location</label>
        <div class="relative">
          <input type="text" value="/Users/Downloads/Videos" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10">
          <button class="absolute inset-y-0 right-0 px-3 flex items-center">📂</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const options = [
  { label: '1080p (Recommended)', value: '1080p' },
  { label: '1440p', value: '1440p' },
  { label: '2160p', value: '2160p' },
  { label: '4320p', value: '4320p' },
  { label: '720p', value: '720p' },
  { label: '480p', value: '480p' },
  { label: '360p', value: '360p' },
  { label: '144p', value: '144p' },
]
const selected = ref(options[0])

function select(opt) {
  selected.value = opt
  open.value = false
}

function onBlur() {
  // Allow click to register before closing
  setTimeout(() => { open.value = false }, 100)
}
</script>

<style scoped>
/* Smooth upward dropdown */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity .15s ease, transform .15s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(.98);
}
</style>


