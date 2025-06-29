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
    { name: 'description', content: 'Browse Ryan Nedbalek\'s personal and professional projects — including software, web apps, 3D modeling, and IT infrastructure builds.' },
    { name: 'keywords', content: 'Ryan Nedbalek projects, portfolio projects, web development, Vue projects, Nuxt apps, home lab, engineering projects' },
    { property: 'og:title', content: 'Projects | Ryan Nedbalek' },
    { property: 'og:description', content: 'Explore a curated list of Ryan\'s featured projects with documentation, source code, and real-world applications.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/Projects' }
  ]
})
</script>

<style scoped>
h1 {
  text-align: center;
  color: var(--text-primary);
  font-size: 48px;
  margin-bottom: 30px;
}

h2 {
  color: var(--text-primary);
  text-align: center;
  font-size: 28px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.projects-background {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--bg-gradient);
  overflow: hidden;
  transition: background 0.3s ease;
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
  color: var(--text-primary);
}

.filter-wrapper{
  margin: 20px;
}

#type-filter {
  padding: 6px 20px;
  border-radius: 6px;
  background-color: var(--card-bg);
  color: var(--text-primary);
  border: 2px solid var(--accent);
  appearance: none;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

#type-filter:hover {
  border-color: var(--accent-hover);
  background-color: var(--bg-secondary);
}

#type-filter:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--shadow);
}

.project-card h3 {
  color: var(--text-primary);
  font-size: 24px;
  margin-bottom: 15px;
}

.project-card p {
  color: var(--text-secondary);
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
}

.project-card:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px var(--shadow);
}

@media(max-width: 1120px){
  .project-overlay{
    width: 80%;
  }
}
</style>