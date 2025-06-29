<template>
  <div class="background">
    <div class="project-details">
      <h1 class="project-title">Calculator</h1>

      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <img
            src="/images/Placeholder1.png"
            alt="Calculator project image"
            class="project-image"
          />
          <h3>Tech Stack</h3>
          <ul class="tech-list">
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <h2>Project Overview</h2>
          <p>This site is currently under construction. We're actively working on updates—please check back soon!</p>
          
          <h2>About This Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          
          <h2>Coming Soon</h2>
          <p>This project is in development. Check back later for updates!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Calculator | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Calculator project - currently under construction.' },
    { property: 'og:title', content: 'Calculator | Ryan Nedbalek' },
    { property: 'og:description', content: 'Calculator project - currently under construction.' },
    { property: 'og:image', content: '/images/Placeholder1.png' }
  ]
})
</script>
  
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    overflow: hidden;
  }

  .project-details {
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto;
    color: #2c3e50;
    z-index: 1;
  }

  .project-title {
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
    color: #2c3e50;
  }

  .content-grid {
    display: flex;
    gap: 20px;
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
    margin: 50px;
    margin-top: 0px;
    transition: transform 0.3s ease;
    border: 1px solid #2c3e50;
  }

  .project-image:hover {
    transform: scale(1.05);
  }

  .tech-list {
    list-style-type: disc;
    padding-left: 40px;
    font-size: 20px;
    color: #2c3e50;
    margin: 35px;
    margin-top: 0px;
  }

  .left-column h3 {
    font-size: 24px;
    margin: 20px 0 10px 0;
    color: #2c3e50;
  }

  /* Right Column */
  .right-column {
    flex: 2;
    min-width: 400px;
    font-size: 20px;
    line-height: 1.8;
  }

  .right-column h2 {
    color: #2c3e50;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #2c3e50;
    padding-bottom: 10px;
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