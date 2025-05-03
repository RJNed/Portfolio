<template>
    <NuxtLink :to="`/documents/${slug}`" class="cardContainer">
      <div class="imageSection">
        <h3 class="projectName">{{ name }}</h3>
        <img :src="image" :alt="name" class="projectPreview" />
      </div>
      <div class="descriptionSection">
        <p class="projectDescription">{{ description }}</p>
      </div>
    </NuxtLink>
  </template>

  
  <script setup>
  defineProps({
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .cardContainer {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration-line: none;
    border-radius: 8px;
    /* border: 2px solid rgb(250, 235, 215, 0.4); */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.85);
    text-align: center;
    width: 100%;
    max-width: 1000px;
    /* padding: 20px; */
    margin-bottom: 20px;
    /* flex-wrap: nowrap; prevent premature wrap */
  }
  
  .cardContainer:hover {
    transform: translateY(-10px);
    transition: all 0.5s ease;
  }
  
  .imageSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    flex: 0 0 150px;
    color: rgb(17, 18, 18);
    padding: 15px
  }
  
  .descriptionSection {
    flex: 1 1 0%;
    min-width: 0;
  }
  
  .descriptionSection p {
    color: rgb(16, 16, 16);
    text-align: left;
    padding-left: 20px;
    width: 100%;
  }
  
  .imageSection h3 {
    font-size: 22px;
    margin: 0px 0px 10px;
    padding: 0px;
  }
  
  .projectPreview {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 4px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .cardContainer {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .imageSection,
    .descriptionSection {
      width: 100%;
      /* text-align: center; */
    }
  
    .descriptionSection p {
      padding-left: 0;
      text-align: center;
    }
  }
  </style>
  