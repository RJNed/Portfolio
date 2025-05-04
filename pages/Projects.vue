<template>
  <div class="projects-background">
    <div class="project-overlay">
      <div class="details">
        <h1>Projects</h1>
        <Filter />
      </div>
    </div>
  </div>
</template>

<script setup>

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

.filter-wrapper{
  margin: 20px;
}

#type-filter {
  padding: 6px 20px;
  border-radius: 6px;
  background-color: #c7cdd2;
  color: #000000;
  border: 2px solid #444;
  appearance: none; /* Removes default OS styles */
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

#type-filter:hover {
  border-color: #888;
  background-color: #cadff2;
}

#type-filter:focus {
  outline: none;
  border-color: #fcfcc0;
  box-shadow: 0 0 0 2px rgba(252, 252, 192, 0.4);
}

@media(max-width: 1120px){
  .project-overlay{
    width: 80%;
  }
}
</style>