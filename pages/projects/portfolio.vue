<template>
  <div class="background">
    <div class="project-details">
      <h1 class="project-title">Portfolio Website</h1>

      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <img
            src="/images/fotis-fotopoulos-unsplash.jpg"
            alt="Portfolio website project image"
            class="project-image"
          />
          <button class="button" @click="documentation">Go to Documentation</button>
          <h3>Tech Stack</h3>
          <ul class="tech-list">
            <li>Frontend: Vue 3 + Nuxt.js</li>
            <li>Backend: Node.js + Express</li>
            <li>Scripting Language: TypeScript</li>
            <li>Styling: CSS</li>
            <li>Hosting: Vercel</li>
            <li>Repository: GitHub</li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <h2>Project Overview</h2>
          <p>A fast, clean portfolio site hosted on Vercel—built with Vue 3 and Nuxt.js to showcase technical projects and documentation.</p>
          
          <h2>What is this project?</h2>
          <p>This site is a collection of my projects, split into two main areas: Software and Lab work. The Software Projects cover coding with tools like Vue 3, Nuxt.js, Node.js, TypeScript, Python, and SQL. The Lab Projects are hands-on builds—things like 3D printing, CAD models, electronics, IoT devices, and home networking setups.</p>
          
          <h2>Key Features</h2>
          <ul>
            <li>Project showcasing with filtering</li>
            <li>Contact form functionality</li>
            <li>Responsive design</li>
            <li>SEO optimization</li>
            <li>Reusable components</li>
            <li>Secure environment variable handling</li>
          </ul>

          <h2>Goals</h2>
          <p>Primary goal of this project is to deepen my understanding of the software development life cycle. Organizing and breaking down challenges into manageable tasks to ultimately create a finished product. In doing so, the finished product would be a platform of my own design to share future projects with the world.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio Website | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'A fast, clean portfolio site built with Vue 3 and Nuxt.js to showcase technical projects and documentation.' },
    { property: 'og:title', content: 'Portfolio Website | Ryan Nedbalek' },
    { property: 'og:description', content: 'Explore the portfolio website project built with Vue 3, Nuxt.js, and TypeScript.' },
    { property: 'og:image', content: '/images/Maintenance.png' }
  ]
})

const documentation = () => {
  navigateTo('/documents/portfolio')
}
</script>
  
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    background: var(--bg-gradient);
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .project-details {
    width: 90vw;
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

  .button {
    background-color: var(--accent);
    color: var(--text-primary);
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    display: block;
    margin: 20px auto;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  }

  .button:hover {
    background-color: var(--accent-hover);
    transform: scale(1.05);
    border: 1px solid var(--border);
    border-radius: 5px;
  }

  /* Dark mode button text color override */
  [data-theme="dark"] .button {
    color: #000000;
  }

  /* Left Column */
  .left-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 350px;
    max-width: 600px;
  }

  .project-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
    margin: 0 0 20px 0;
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

  .left-column h3 {
    text-align: center;
    font-size: 24px;
    margin: 20px 0 10px 0;
    color: var(--text-primary);
    padding: 8px 0;
    transition: color 0.3s ease;
  }

  /* Right Column */
  .right-column {
    flex: 2;
    min-width: 400px;
    font-size: 20px;
    line-height: 1.8;
    margin-bottom: 20px;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .right-column h2 {
    color: var(--text-primary);
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 10px;
    transition: color 0.3s ease, border-color 0.3s ease;
  }

  .right-column ul {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .right-column li {
    margin-bottom: 8px;
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
}
</style> 