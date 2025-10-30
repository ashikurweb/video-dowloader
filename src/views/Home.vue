<template>
  <div class="min-h-screen flex flex-col bg-[#f0f7ff]">
    <HeaderBar />

    <main class="flex-grow p-6">
      <AnalyzeForm />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div class="lg:col-span-1">
          <VideoInfoCard />
          <RecentDownloads />
        </div>
        <div class="lg:col-span-2">
          <QualityGrid />
          <DownloadSettings />
        </div>
      </div>
    </main>

    <BottomStatusBar />
  </div>
 </template>

<script setup>
import HeaderBar from '../components/HeaderBar.vue'
import AnalyzeForm from '../components/AnalyzeForm.vue'
import VideoInfoCard from '../components/VideoInfoCard.vue'
import RecentDownloads from '../components/RecentDownloads.vue'
import QualityGrid from '../components/QualityGrid.vue'
import DownloadSettings from '../components/DownloadSettings.vue'
import BottomStatusBar from '../components/BottomStatusBar.vue'

</script>

<style scoped>
</style>


