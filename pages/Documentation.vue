<template>
    <div class="doc-background">
        <div class="doc-layout">
            <div class="details">
              <h1>Documentation</h1>
              <Filter />
            </div>
        </div>
    </div>
</template>

<script setup>
import Filter from '~/components/Filter.vue';

  useHead({
    title: 'Project Documentation | Ryan Nedbalek',
    meta: [
      { name: 'description', content: 'Technical documentation for Ryan Nedbalek\'s projects. Dive into the planning, tools, architecture, and code behind each build.' },
      { name: 'keywords', content: 'project documentation, Ryan Nedbalek, developer docs, portfolio documentation, Nuxt project docs, Vue, software architecture' },
      { property: 'og:title', content: 'Project Documentation | Ryan Nedbalek' },
      { property: 'og:description', content: 'Explore the detailed documentation behind Ryan\'s projects — planning, code breakdowns, tools used, and lessons learned.' },
      { property: 'og:image', content: '/images/portfolio-icon.png' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.ryannedbalek.com/Documentation' }
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

.doc-background {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  background: var(--bg-gradient);
  overflow: hidden;
  transition: background 0.3s ease;
}

.doc-layout {
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

@media(max-width: 1120px){
  .doc-layout{
    width: 80%;
  }
}
</style>