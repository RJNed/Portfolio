<template>
  <div class="background">
    <div class="document-details" v-if="project">
      <h1>{{ project.name }}</h1>

      <img :src="project.image" :alt="project.name" />
      <p>{{ project.description }}</p>
      <!-- Add more project info here if needed -->
    </div>
  </div>
  </template>
  
  <script setup>
  import { useRoute, useError } from 'nuxt/app'
  import project_docs from '~/data/documentation.json'
  
  const route = useRoute()
  const error = useError()
  
  const slug = route.params.slug
  const project = project_docs.find(project => project.slug === slug)
  
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
.background {
  display: flex;
  justify-content: center;
  height: 100%;
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

  .document-details {
    color: white;
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    text-align: center;
    z-index: 1;
  }
  
  .document-details img {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    border-radius: 10px;
  }
  </style>
  