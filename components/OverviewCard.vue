<template>
  <div class="project-details" v-if="project">
    <h1 class="project-title">{{ project.name }}</h1>

    <div class="content-grid">
      <!-- Left Column -->
      <div class="left-column">
        <img
          :src="project.image"
          :alt="`Project image for ${project.name}`"
          class="project-image"
        />
        <ul class="tech-list">
          <li v-for="(item, index) in project.tech" :key="index">{{ item }}</li>
        </ul>
      </div>

      <!-- Right Column -->
      <div class="right-column">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  import { useRoute, useError } from 'nuxt/app'
  import projects from '~/data/projects.json'
  
  const route = useRoute()
  const error = useError()
  
  const slug = route.params.slug
  const project = projects.find(project => project.slug === slug)
  
  if (!project) {
    error({ statusCode: 404, message: 'Project not found' })
  } else {
    useHead({
      title: `${project.name} | Ryan Nedbalek`,
      meta: [
        { name: 'description', content: project.description },
        { property: 'og:title', content: project.name },
        { property: 'og:description', content: project.description },
        { property: 'og:image', content: project.image }
      ]
    })
  }
  </script>
  
 
<style scoped>
.project-details {
  width: 90vw;
  max-width: 1600px;
  margin: 0 auto;
  color: white;
  z-index: 1;
}

.project-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 50px;
}

.content-grid {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Left Column */
.left-column {
  flex: 1;
  min-width: 350px;
  max-width: 600px;
}

.project-image {
  width: 80%;
  height: auto;
  border-radius: 10px;
  margin: 35px;
  margin-bottom: 50px;
  margin-top: 0px;
  transition: transform 0.3s ease;
  border: 1px solid #fcfcc0;
}

.project-image:hover {
  transform: scale(1.05);
}

.tech-list {
  list-style-type: disc;
  padding-left: 25px;
  font-size: 1.2rem;
  color: white;
  margin: 35px;
  margin-top: 0px;
}

/* Right Column */
.right-column {
  flex: 2;
  min-width: 400px;
  font-size: 1.2rem;
  line-height: 1.8;
}

/* Optional: improve large screen appearance */
@media (min-width: 1600px) {
  .project-details {
    width: 95vw;
  }

  .project-title {
    font-size: 3.5rem;
  }

  .tech-list {
    font-size: 1.3rem;
  }

  .right-column {
    font-size: 1.3rem;
  }
}
</style>