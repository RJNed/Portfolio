<!-- This is a slug for the placeholder projects. It is not used in the actual project. -->
<template>
  <div class ="background">
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
  </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app'
import { computed, watchEffect } from 'vue'
import projects from '~/data/projects.json'

const route = useRoute()

// Make slug reactive
const slug = computed(() => route.params.slug)
const project = computed(() => {
  console.log('Looking for project with slug:', slug.value)
  console.log('Available projects:', projects.map(p => p.slug))
  
  // Don't throw error if slug is undefined (during initial render)
  if (!slug.value) {
    console.log('Slug is undefined, returning null')
    return null
  }
  
  const foundProject = projects.find(project => project.slug === slug.value)
  console.log('Found project:', foundProject)
  
  if (!foundProject) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found'
    })
  }
  
  return foundProject
})

// Set up head when project changes
watchEffect(() => {
  if (project.value) {
    useHead({
      title: `${project.value.name} | Ryan Nedbalek`,
      meta: [
        { name: 'description', content: project.value.description },
        { property: 'og:title', content: project.value.name },
        { property: 'og:description', content: project.value.description },
        { property: 'og:image', content: project.value.image }
      ]
    })
  }
})
</script>
  
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background: var(--bg-gradient);
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .project-details {
    width: 100vw;
    max-width: 1600px;
    margin: 0 auto;
    color: var(--text-primary);
    z-index: 1;
    transition: color 0.3s ease;
  }

  .project-title {
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .content-grid {
    display: flex;
    gap: 20px;
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
    margin: 50px;
    margin-top: 0px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    border: 1px solid var(--border);
  }

  .project-image:hover {
    transform: scale(1.05);
  }

  .tech-list {
    list-style-type: disc;
    padding-left: 40px;
    font-size: 20px;
    color: var(--text-secondary);
    margin: 35px;
    margin-top: 0px;
    transition: color 0.3s ease;
  }

  /* Right Column */
  .right-column {
    flex: 2;
    min-width: 400px;
    font-size: 20px;
    line-height: 1.8;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

/* Optional: improve large screen appearance */
@media (min-width: 1600px) {
  .project-details {
    width: 95vw;
  }

  .project-title {
    font-size: 48px;
  }

  .tech-list {
    font-size: 22px;
  }

  .right-column {
    font-size: 22px;
  }
}

@media(max-width: 899px){
  .content-grid{
    align-items: center;
    justify-content: center;
  }

  .left-column{
    text-align: center;
    margin-right: 25px;
  }

  .left-column ul{
    text-align: start;
  }

  .right-column{
    text-align: center;
  }

  .project-title {
    font-size: 36px;
  }

  .background{
    height: 100%;
  }
}
</style>
  