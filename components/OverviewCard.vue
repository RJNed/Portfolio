<template>
    <div class="project-details" v-if="project">
      <div class="project-overview">
        <h1>{{ project.name }}</h1>
        <img :src="project.image" :alt="project.name" />
        <li v-for="(item, index) in project.tech" :key="index">{{ item }}</li>
      </div>
      <div class="description">
        <p>{{ project.description }}</p>
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
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    max-width: 500px;
    margin: auto;
    gap: 30px;
    z-index: 1;
  }

  .project-overview {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 25px;
    width: 600px;
    height: 100%;
    color:rgba(0, 0, 0);
    text-align: center;
    padding-bottom: 10px;
  }

  .project-overview h1{
    font-size: x-large;
  }

  .project-overview li{
    font-size: larger;
    text-align: start;
    margin-left: 20px;
  }
  
  .project-overview img {
    max-width: 70%;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
</style>
  