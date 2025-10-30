<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">Download Settings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Default Quality</label>
        <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>1080p (Recommended)</option>
          <option>1440p</option>
          <option>2160p</option>
          <option>4320p</option>
          <option>720p</option>
          <option>480p</option>
          <option>360p</option>
          <option>144p</option>
        </select>
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
</script>

<style scoped>
</style>


