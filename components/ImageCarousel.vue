<template>
    <div class="carousel-container">
      <button class="nav-button left" @click="prevImage">‹</button>
  
      <div class="carousel-wrapper">
        <div
          class="carousel-images"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img 
            v-for="(image, index) in images" 
            :key="index" 
            :src="image" 
            class="carousel-image" 
            alt="Carousel Image"
          />
        </div>
      </div>
  
      <button class="nav-button right" @click="nextImage">›</button>
  
      <div class="pagination-dots">
        <span 
          v-for="(images, index) in images" 
          :key="index" 
          :class="{ active: currentIndex === index }" 
          @click="currentIndex = index"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import Shop1 from '@/images/shop1.jpg';
  import Shop2 from '@/images/shop2.jpg';
  import Shop3 from '@/images/shop3.jpg';
  import Shop4 from '@/images/shop4.jpg';
  import Shop5 from '@/images/shop5.jpg';
  import Shop6 from '@/images/shop6.jpg';

  const images = [Shop1, Shop2, Shop3, Shop4, Shop5, Shop6];

  const currentIndex = ref(0);
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  };
  
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
  };
  
  // Auto-slide functionality
  let interval: ReturnType<typeof setInterval>;
  
  onMounted(() => {
    interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    window.addEventListener('keydown', handleKeydown); // Keyboard navigation
  });
  
  onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener('keydown', handleKeydown);
  });
  
  // Keyboard navigation functionality
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  
  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-image {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
    height: 400px;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
  }
  
  .nav-button.left {
    left: 10px;
  }
  
  .nav-button.right {
    right: 10px;
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .pagination-dots {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .pagination-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  
  .pagination-dots span.active {
    background-color: rgba(255, 255, 255, 1);
  }
  
  @media (max-width: 768px) {
    .carousel-image {
      height: 250px;
    }
  
    .nav-button {
      font-size: 1.5rem;
      padding: 8px;
    }
  }
  </style>