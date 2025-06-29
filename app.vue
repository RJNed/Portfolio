<template>
  <NuxtRouteAnnouncer />
  <div>
    <NavigationBar/>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// Theme initialization is handled in plugins/theme.client.ts
</script>

<style scoped>
body{
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>