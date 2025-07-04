<template>
  <div class="home-background">
    <div class="home-overlay">
      <!-- Featured Vendors Banner -->
      <div class="featured-projects-banner">
        <h1>Featured Projects</h1>
        <!-- Hero Section -->
        <div class="home-carousel-container">
          <!-- need to implement project routing based off of current image -->
          <ImageCarousel />
        </div>
      </div>
      <!-- Featured Projects Section -->
      <section id="projects" class="home-section">
        <h2>Project Categories</h2>
        <div class="project-cards">
          <div class="project-card">
            <NuxtLink to="/projects?type=Software">
              <h3>Software Projects</h3>
              <p>View Software, Scripts, and CAD Projects</p>
              <span class="view-link">View Projects</span>
            </NuxtLink>
          </div>
          <div class="project-card">
            <NuxtLink to="/projects?type=Lab">
              <h3>Lab Projects</h3>
              <p>View 3D Printing, Electronics, and Robotics Projects</p>
              <span class="view-link">View Projects</span>
            </NuxtLink>
          </div>
          <div class="project-card">
            <NuxtLink to="/documentation">
              <h3>Documentation</h3>
              <p>View Documentation for Completed and Upcoming Projects</p>
              <span class="view-link">View Documentation</span>
            </NuxtLink>
          </div>
        </div>
      </section>


      <!-- Call to Action -->
      <section class="home-cta">
        <h2>Let's Build Something Together!</h2>
        <p>Interested in collaborating or learning more?</p>
        <a href="/Contact-Page" class="cta-button">Get in Touch</a>
      </section>

      <!-- Footer -->
      <footer class="home-footer">
        <!--place social media stuff here-->
        <p>&copy; 2025 Ryan J. Nedbalek. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/ryannedbalek/">LinkedIn</a>
          <a href="https://github.com/RJNed">Github</a>
          <a href="https://www.instagram.com/ryannedbalek">Instagram</a>
          <a href="/Contact-Page">Contact</a>
          <a href="/AboutMe">About Me</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue';

useHead({
  title: 'Ryan Nedbalek | Software Developer ',
  meta: [
    { name: 'description', content: 'Portfolio of Ryan Nedbalek — Software developer, product engineer, and IT professinoal. Showcasing personal projects, tech experiments, and creative problem solving.' },
    { name: 'keywords', content: 'Ryan Nedbalek, developer, portfolio, Nuxt, Vue, robotics, product engineer, TypeScript, Node.js, home lab, web development' },
    { property: 'og:title', content: 'Ryan Nedbalek | Developer Portfolio' },
    { property: 'og:description', content: 'Explore Ryan\'s personal projects and engineering work.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com' }
  ]
})
</script>

<style scoped>
.message {
  text-align: center;
  padding: 1rem;
  color: var(--text-primary);
}

.bullets {
  text-align: left;
  padding-left: 1.5rem;
  color: var(--text-primary);
}

.bulletref {
  color: var(--text-primary);
}

.home-background {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: var(--bg-gradient);
  transition: background 0.3s ease;
}

.home-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-primary);
  padding: 20px;
  width: 100%;
  max-width: 1200px;
}

.featured-projects-banner,
.home-section,
.home-cta,
.home-footer {
  width: 90%;
  max-width: 800px;
  margin: 1rem auto;
  padding: 20px;
  border-radius: 10px;
}

.featured-projects-banner,
.home-section {
  background: var(--component-blue);
  color: var(--text-primary);
  box-shadow: 0 4px 12px var(--shadow);
  border: 1px solid var(--navbar-border);
}

.featured-projects-banner h1,
.home-section h2,
.home-cta h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin: 0px;
  padding-bottom: 10px;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 8px var(--shadow);
  width: 100%;
  max-width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.project-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 8px 16px var(--shadow);
  border: 1px solid var(--accent);
}

.project-card h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.project-card p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.project-card a {
  text-decoration: none;
  color: var(--accent);
  font-weight: bold;
}

.view-link {
  text-decoration: none;
  color: var(--accent);
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

.home-cta {
  background: var(--component-blue);
  color: var(--text-primary);
  border: 1px solid var(--navbar-border);
}

.home-cta h2 {
  color: var(--text-primary);
}

.home-cta p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.cta-button {
  display: inline-block;
  text-decoration: none;
  background: white;
  color: #1e3a8a;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid white;
}

.cta-button:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.home-footer {
  color: var(--text-primary);
  text-align: center;

}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.footer-links a {
  text-decoration: none;
  color: #3498db;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #2980b9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .featured-projects-banner h1,
  .home-section h2,
  .home-cta h2 {
    font-size: 1.75rem;
  }

  .project-card {
    max-width: 100%;
  }

  .cta-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .home-overlay {
    padding: 10px;
  }

  .featured-projects-banner,
  .home-section,
  .home-cta,
  .home-footer {
    padding: 15px;
  }

  .featured-projects-banner h1,
  .home-section h2,
  .home-cta h2 {
    font-size: 1.5rem;
  }

  .project-card p {
    font-size: 0.9rem;
  }

  .footer-links a {
    font-size: 0.8rem;
  }

  .bulletref {
    display: block;
    margin-top: 0.5rem;
  }
}

</style>
