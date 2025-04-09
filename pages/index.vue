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
            <h3>Software Projects</h3>
            <p>View Software, Scripts, and CAD Projects</p>
            <a href="/Projects">View Projects</a>
          </div>
          <div class="project-card">
            <h3>Lab Projects</h3>
            <p>View 3D Printing, Electronics, and Robotics Projects</p>
            <a href="/Projects">View Projects</a>
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
</script>

<style scoped>
/* Reset default margins and padding for the entire page */
.home-background {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-image: url('/src/Background/Pexels.jpg');
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
}

/* Featured Projects Banner */
.featured-projects-banner {
  background: rgb(181, 181, 181);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.featured-projects-banner h1 {
  font-size: 3rem;
  color: #000;
  margin: 0;
}

/* Sections */
.home-section {
  margin: 40px 0;
  padding: 20px;
  background: rgb(181, 181, 181);
  border-radius: 10px;
  color: #333;
  max-width: 800px;
  text-align: center;
}

.home-section h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #0c0c0c;
}

.project-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.project-card {
  background: #dedede;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
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

/* Call to Action */
.home-cta {
  width: 800px;
  max-width: 800px;
  margin: 40px 0;
  padding: 20px;
  background: #0044cc;
  color: white;
  border-radius: 10px;
  text-align: center;
}

.home-cta h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.home-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.cta-button {
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

/* Footer */
.home-footer {
  width: 800px;
  margin-top: 40px;
  padding: 10px 20px;
  color: white;
  text-align: center;
  border-radius: 5px;
}

.footer-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links a {
  text-decoration: none;
  color: #00aaff;
  font-size: 0.9rem;
}
</style>
