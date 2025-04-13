<template>
    <div class="cardContainer">
      <div class = "imageSection">
        <h3 class="projectName">{{ name }}</h3>
        <!--<img :src="image" :alt="name" class="projectPreview" /> -->
        <img src="C:\Users\Ryan\Desktop\Porfolio\src\DemoVendors\Shop2.jpg" :alt="name" class="projectPreview" />
      </div>
      <div class="descriptionSection">
        <p class="projectDescription">{{ description }}</p>
      </div>
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
.cardContainer{
  position: relative;
  z-index: 1;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 1000px;
  height:150px;
  margin: 20px;
  padding: 20px;
}

.descriptionSection p{
  color:rgb(16, 16, 16);
  text-align: left;
  width: 800px;
  padding-left: 20px;
}

.imageSection h3{
  font-size: 22px;
  margin: 0px;
  padding: 0px;
}

.projectPreview {
  height: 125px;
  width: 125px;
  text-align: center;
  align-self: center;
  border-radius: 4px;
}

.imageSection{
  display:flex;
  flex-direction: column;
  border-radius: 4px;
  width: 150px;
  height:100%;
  color:rgb(17, 18, 18);
}

</style>