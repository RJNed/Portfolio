<template>
    <div class="container">
        <div class="doc-background">
            <div class="details"><h1>Documentation</h1></div>
            
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
h1{
    text-align: center;
}

.doc-background {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #282828;
}

.doc-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/Background/Pexels.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  background-attachment: fixed;
}

.details{
  position: relative;
  padding: 5px;
  max-width: 450px;
  margin: 0 auto;
  color:black
}
</style>