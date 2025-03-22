<template>
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img :src="image" :alt="name" class="w-full h-48 object-cover rounded-xl mb-4" />
      <h2 class="text-xl font-semibold mb-2">{{ name }}</h2>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    name: String,
    description: String,
  })
  </script>
  
<style scoped>
</style>