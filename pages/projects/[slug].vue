<template>
  <div class="background">
    <OverviewCard/>
  </div>
</template>
  
<script setup>

</script>
  
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #282828;
    overflow: hidden;
  }

  .background::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('/images/pexels.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.25;
    background-attachment: fixed;
    z-index: 0;
  }
</style>
  