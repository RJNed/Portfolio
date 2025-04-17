<template>
    <div class="container">
        <div class="projects-background">
          <div class="details">
              <h1>Projects</h1>
              <!--image currently not imported properly-->

              <!--need to implement store base rendering of information-->
                

              <!--do we need to implement a database to handle project and documentation? -->
                <!-- no dont **need** a database -->
                  <!-- cleaner code and best practice -->
              <a class="projectLink" href="/testPage"> 
              <projectCard
              image = ""
              name = "Project Test"
              description = "Testing if this works"/>
              </a>
        </div>
        </div>
    </div>
</template>

<script setup>
import projectCard from '~/components/projectCard.vue';

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
  height: 100vw;
  width: 100vw;
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