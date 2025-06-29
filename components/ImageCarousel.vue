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
          @click="handleCarouselClick"
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
const isTransitioning = ref(false);

const nextImage = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % projects.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const prevImage = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const handleCarouselClick = (event: Event) => {
  // Prevent navigation if carousel is transitioning
  if (isTransitioning.value) {
    event.preventDefault();
    return;
  }
};

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    if (!isTransitioning.value) {
      nextImage();
    }
  }, 5000);
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
  max-width: 800px;
  margin: 0 auto;
  background: var(--component-blue);
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow);
  border: 1px solid var(--navbar-border);
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  background-color: rgba(128, 128, 128, 0.7);
  color: white;
  border: none;
  padding: 12px 16px;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  backdrop-filter: blur(4px);
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

.nav-button:hover {
  background-color: rgba(128, 128, 128, 0.9);
  transform: translateY(-50%) scale(1.05);
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
  background-color: var(--border);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-dots span.active {
  background-color: var(--accent);
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
