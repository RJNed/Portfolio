<template>
  <div class="carousel-container">
    <button class="nav-button left" @click="prevImage">‹</button>

    <div class="carousel-wrapper">
      <div
        class="carousel-images"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <NuxtLink
          v-for="(project, index) in projects"
          :key="project.id"
          :to="`/projects/${project.slug}`"
          class="carousel-link"
        >
          <img
            :src="project.image"
            class="carousel-image"
            :alt="project.name"
          />
        </NuxtLink>
      </div>
    </div>

    <button class="nav-button right" @click="nextImage">›</button>

    <div class="pagination-dots">
      <span
        v-for="(_, index) in projects"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import projects from '~/data/projects.json';

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(nextImage, 5000);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  clearInterval(interval);
  window.removeEventListener('keydown', handleKeydown);
});

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

.carousel-link {
  flex-shrink: 0;
  width: 100%;
}

.carousel-image {
  width: 100%;
  object-fit: cover;
  height: 400px;
  display: block;
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
