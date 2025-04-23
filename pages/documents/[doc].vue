<template>
  <div class="background">
    <div class="project-details" v-if="projectdoc">
      <h1>{{ projectdoc.name }}</h1>
      <img :src="projectdoc.image" :alt="projectdoc.name" />
      <p>{{ projectdoc.description }}</p>
      <!-- Add more project info here if needed -->
    </div>
  </div>
</template>

<script setup>
import { useRoute, useError } from 'nuxt/app'
import documents from '~/data/documents.json'

const route = useRoute()
const error = useError()

const doc = route.params.doc
const projectdoc = documents.find(p => p.doc === doc)

if (!projectdoc) {
  error({ statusCode: 404, message: 'Project documentation not found' })
} else {
  useHead({
    title: `${projectdoc.name} | Ryan Nedbalek`,
    meta: [
      { name: 'description', content: projectdoc.description },
      { property: 'og:title', content: projectdoc.name },
      { property: 'og:description', content: projectdoc.description },
      { property: 'og:image', content: projectdoc.image }
    ]
  })
}
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  min-height: 100vh;
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

.project-details {
  color: white;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
  z-index: 1;
}

.project-details img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
}
</style>
