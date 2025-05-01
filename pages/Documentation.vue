<template>
    <div class="doc-background">
        <div class="doc-layout">
            <div class="details">
              <h1>Documentation</h1>
              <div v-for="project in project_docs" :key="project.id">
              <documentCard
                :image="project.image"
                :name="project.name"
                :description="project.description"
                :slug="project.slug"
              />
              </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import documentCard from "~/components/documentCard.vue"
import project_docs from '~/data/documentation.json' // JSON file import


useHead({
  title: 'Project Documentation | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Technical documentation for Ryan Nedbalek’s projects. Dive into the planning, tools, architecture, and code behind each build.' },
    { name: 'keywords', content: 'project documentation, Ryan Nedbalek, developer docs, portfolio documentation, Nuxt project docs, Vue, software architecture' },
    { property: 'og:title', content: 'Project Documentation | Ryan Nedbalek' },
    { property: 'og:description', content: 'Explore the detailed documentation behind Ryan’s projects — planning, code breakdowns, tools used, and lessons learned.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/Documentation' }
  ]
})
</script>

<style scoped>
h1{
    text-align: center;
}

.doc-background {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #282828;
  overflow: hidden;
}

.doc-background::before {
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

.projectLink {
  text-decoration-line: none;
}

.details {
  margin-top: 20px;
  text-align: center;
  align-items: center;
  padding: 5px;
  color:#fcfcc0;
}

</style>