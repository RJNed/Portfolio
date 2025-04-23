<template>
    <div class="projects-background">
      <div class="project-overlay">
        <div class="details">
          <h1>Projects</h1>
          <div v-for="project in projects" :key="project.id">
              <projectCard
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
import projectCard from '~/components/projectCard.vue'
import projects from '~/data/projects.json' // JSON file import

useHead({
  title: 'Projects | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Browse Ryan Nedbalek’s personal and professional projects — including software, web apps, 3D modeling, and IT infrastructure builds.' },
    { name: 'keywords', content: 'Ryan Nedbalek projects, portfolio projects, web development, Vue projects, Nuxt apps, home lab, engineering projects' },
    { property: 'og:title', content: 'Projects | Ryan Nedbalek' },
    { property: 'og:description', content: 'Explore a curated list of Ryan’s featured projects with documentation, source code, and real-world applications.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/Projects' }
  ]
})
</script>


<style scoped>
.projects-background {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #282828;
  overflow: hidden;
}

.projects-background::before {
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

.project-overlay {
  position: relative;
  z-index: 1;
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* color: white;
  margin:5px;
  padding: 20px; */
  width: 100%;
  max-width: 1000px;
}

.details {
  width: 100%;
  margin-top: 40px;
  text-align: center;
  align-items: center;
  /* padding: 5px; */
  color:#fcfcc0;
}

</style>