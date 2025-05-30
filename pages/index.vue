<template>
  <div class="home-background">
    <div class="home-overlay">
      <div class="message">
        <p>NOTICE: This website is under construction and many features are not complete.</p>
        <p>Here is a list of features to be added in the future:</p>
      </div>
      <div class="bullets">
        <li>Search and filtering</li>
        <li>Project and Documentation page content</li>
        <li>Better page scaling for any device</li>
        <li>Updated page styling</li>
        <li>Light and Dark mode</li>
      </div>
      <p>If you have suggestions for features feel free to <a class='bulletref' href="/Contact-Page">contact</a> me!</p>
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
            <h3>Software Projects</h3>
            <p>View Software, Scripts, and CAD Projects</p>
            <a href="/Projects?type=Software">View Projects</a>
          </div>
          <div class="project-card">
            <h3>Lab Projects</h3>
            <p>View 3D Printing, Electronics, and Robotics Projects</p>
            <a href="/Projects?type=Design">View Projects</a>
          </div>
          <div class="project-card">
            <h3>Documentation</h3>
            <p>View Documentation for Completed and Upcoming Projects</p>
            <a href="/Documentation">View Documentation</a>
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
    { property: 'og:description', content: 'Explore Ryan’s personal projects and engineering work.' },
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
}

.bullets {
  text-align: left;
  padding-left: 1.5rem;
}

.bulletref {
  color: #00aaff;
}

.home-background {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #282828;
}

.home-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/pexels.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  background-attachment: fixed;
}

.home-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
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
  background: rgba(255, 255, 255, 0.85);
  color: #333;
}

.featured-projects-banner h1,
.home-section h2,
.home-cta h2 {
  font-size: 2.5rem;
  color: #000;
  margin: 0 0 1rem;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  background: #b4c1c147;
  padding: 20px;
  border-radius: 8px;
  border: #00000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 250px;
  text-align: center;
}

.project-card:hover{
  background-color: #ffffff5d;
  border: 2px solid #4747476f;
  transition: background-color 1s ease, border-color 1s ease;
}

.project-card h3 {
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
}

.project-card p {
  font-size: 1rem;
  color: #242424;
  margin-bottom: 15px;
}

.project-card a {
  text-decoration: none;
  color: #00aaff;
  font-weight: bold;
}

.home-cta {
  background: #0044cc;
  color: white;
}

.home-cta p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.cta-button {
  display: inline-block;
  text-decoration: none;
  background: #00aaff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #0077b6;
}

.home-footer {
  color: white;
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
  color: #00aaff;
  font-size: 0.9rem;
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
