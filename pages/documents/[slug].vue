<!-- documentation structure idea:
Overview / Project Summary
  -What the project is
  -Key goals

Tech Stack
  -Tools, frameworks, APIs used

Features
  -Main functionality
  -Screenshots or diagrams

Architecture / Flow
  -How it works (can be brief)
  -Optional diagrams

Development Process
  -Phases, challenges, solutions

Testing
  -Types of testing done and tools used

Deployment
  -Hosting platform, environment config, etc.

Post-Launch
  -Improvements, updates, lessons learned
🔗 At the bottom: Include a Download Full Documentation (.docx / .pdf) link. -->
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
          <p class="listoverview">Overview</p>
          <ul class="tech-list">
            <li v-for="(item, index) in project.tech" :key="index">{{ item }}</li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <h2>What is the project?</h2>
          <p>{{ project.description }}</p>

          <h2>What is the goal?</h2>
          <p>{{ project.goal }}</p>

          <h2>Features</h2>
          <li v-for="(item, index) in project.features" :key="index">{{ item }}</li>

          <h2>Development Process</h2>
          <p>-</p>

          <h2>Testing</h2>
          <p>-</p>

          <h2>Deployment</h2>
          <p>-</p>

          <h2>Post-Launch</h2>
          <h3>Improvements</h3>
          <p>-</p>
          <h3>Lessons Learned</h3>
          <p>-</p>
        </div>
      </div>
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

  .project-details {
  width: 90vw;
  max-width: 1600px;
  margin: 0 auto;
  color: white;
  z-index: 1;
  }

  .project-title {
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
  }

  .content-grid {
    display: flex;
    gap: 60px;
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
    margin: 40px;
    margin-top: 0px;
    transition: transform 0.3s ease;
    border: 1px solid #fcfcc0;
  }

  .project-image:hover {
    transform: scale(1.05);
  }

  .tech-list {
    list-style-type: disc;
    padding-left: 40px;
    font-size: 20px;
    color: white;
    margin: 35px;
    margin-top: 0px;
  }

  /* Right Column */
  .right-column {
    flex: 2;
    min-width: 400px;
    font-size: 20px;
    line-height: 1.8;
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
    margin-right: 10px;
  }

  .left-column ul{
    text-align: start;
  }

  .right-column{
    text-align: center;
  }

  .right-column p {
    margin: 20px
  }

  .background{
    height: 100%;
  }
}
</style>
  