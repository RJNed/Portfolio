<template>
  <div class="background">
    <div class="project-details">
      <h1 class="project-title">Password Generator</h1>

      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <img
            src="/images/password.png"
            alt="Password Generator image"
            class="project-image"
          />
          <h3>Tech Stack</h3>
          <ul class="tech-list">
            <li>HTML</li>
            <li>Scripting Language: JavaScript</li>
            <li>Styling: CSS</li>
            <li>Hosting: Vercel</li>
            <li>Repository:<a href="https://github.com/RJNed/PasswordGenesis" target="_blank">Github</a></li>
          </ul>
          <button class="button" @click="documentation">Go to Documentation</button>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <h2>Project Overview</h2>
          <p>Modern password generator and cybersecurity web application project</p>
          
          <h2>About This Project</h2>
          <p>This project is a web application built with JavaScript, HTML, and CSS that generates strong and randomized passwords. It serves as both a practice in front-end development and an exploration of cybersecurity concepts, particularly secure password creation. In addition to generating passwords, the site provides educational resources to help users understand password management best practices, combining technical implementation with practical security awareness.</p>
          
          <h2>Goals</h2>
            <p>This project showcases my skills in JavaScript, HTML, and CSS while exploring cybersecurity concepts and addressing common questions about password management.</p>
            <p>Beyond a simple interface, I focused on validation often overlooked by other password sites. Since sliders can be tampered with, I added safeguards in the JavaScript logic to enforce true limits and prevent overloads.</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Password Generator | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Password Generator with a modern style to showcase solely HTML, JS, and CSS knowledge.' },
    { property: 'og:title', content: 'Password Generator | Ryan Nedbalek' },
    { property: 'og:description', content: 'Password Generator - Genesis of passwords.' },
    { property: 'og:image', content: '/images/Placeholder1.png' }
  ]
})

const documentation = () => {
  navigateTo('/documents/passwordgenesis')
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
    margin: 0px;
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