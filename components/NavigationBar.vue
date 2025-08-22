<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="brand">
      <a href="/"><img src="/public/images/portfolio-icon-cropped.png" /></a>
    </div>

    <!-- Nav Links (Always at the bottom for mobile) -->
    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li><a href="/">Featured</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/documentation">Documentation</a></li>
      <li><a href="/aboutme">About Me</a></li>
      <li><a href="/contact-page">Contact</a></li>
    </ul>

    <!-- Theme Toggle -->
    <ThemeToggle class="theme-toggle-nav" />

    <!-- Hamburger for Mobile -->
    <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
      ☰
    </div>

    <!-- Theme Toggle -->
    <ThemeToggle class="theme-toggle-nav" />

    <!-- Hamburger for Mobile -->
    <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
      ☰
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped>
/* Base Navbar Layout */
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  flex-wrap: wrap;
  background: var(--navbar-bg);
  box-shadow: inset 1px 1px 3px var(--shadow),
              inset -1px -1px 3px var(--shadow),
              2px 2px 5px var(--shadow);
  border: 1px solid var(--navbar-border);
  background: var(--navbar-bg);
  box-shadow: inset 1px 1px 3px var(--shadow),
              inset -1px -1px 3px var(--shadow),
              2px 2px 5px var(--shadow);
  border: 1px solid var(--navbar-border);
  padding: 10px 20px;
  gap: 20px;
  position: relative;
  position: relative;
}

/* Brand Logo */
.brand {
  position: absolute;
  left: 20px;
  position: absolute;
  left: 20px;
}
.brand img {
  width: 60px;
  height: 45px;
  transition: all 0.5s ease;
}
.brand:hover {
  transform: translateY(-5px);
  transition: all 0.5s ease;
}

/* Theme Toggle */
.theme-toggle-nav {
  position: absolute;
  right: 20px;
/* Theme Toggle */
.theme-toggle-nav {
  position: absolute;
  right: 20px;
}

/* Hamburger */
.hamburger {
  display: none;
  font-size: 28px;
  color: var(--navbar-text);
  color: var(--navbar-text);
  cursor: pointer;
  position: absolute;
  right: 60px;
  position: absolute;
  right: 60px;
}

/* Nav Links */
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 40px;
  margin: 10px;
  padding: 5px;
  margin: 10px;
  padding: 5px;
}

.nav-links li a {
  text-decoration: none;
  color: var(--navbar-text);
  color: var(--navbar-text);
  font-weight: bold;
  font-size: 22px;
}
.nav-links a:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
  text-decoration: underline;
  color: var(--accent);
  color: var(--accent);
}

@media (max-width: 1120px){
  .nav-links {
  gap: 20px;
  }
  .nav-links li a {
  font-size: 18px;
}
}

/* Responsive Layout */
@media (max-width: 945px) {
  .navbar {
    justify-content: space-between;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .brand {
    position: static;
    position: static;
    order: 1;
  }

  .theme-toggle-nav {
    position: static;
  .theme-toggle-nav {
    position: static;
    order: 2;
  }

  .hamburger {
    display: block;
    position: static;
    position: static;
    order: 3;
    padding-left: 10px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: var(--navbar-bg);
    padding: 10px 0;
    border-top: 1px solid var(--border);
    border-top: 1px solid var(--border);
    order: 4;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
    text-align: center;
  }
}
</style>
