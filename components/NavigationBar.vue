<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="brand">
      <a href="/"><img src="/public/images/portfolio-icon-cropped.png" /></a>
    </div>

    <!-- Search -->
    <div class="search-container">
      <input type="text" placeholder="Looking for..." v-model="searchQuery" />
      <button @click="handleSearch">
        <i class="searchbtn">search</i>
      </button>
    </div>

    <!-- Hamburger for Mobile -->
    <div class="hamburger" @click="isMenuOpen = !isMenuOpen">
      ☰
    </div>

    <!-- Nav Links (Always at the bottom for mobile) -->
    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li><a href="/">Featured</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/documentation">Documentation</a></li>
      <li><a href="/aboutme">About Me</a></li>
      <li><a href="/contact-page">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const isMenuOpen = ref(false);

const handleSearch = () => {
  alert(`Search functionality is currently under construction`);
};
</script>

<style scoped>
/* Base Navbar Layout */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: linear-gradient(to bottom, #283e51, #333);
  box-shadow: inset 1px 1px 3px rgba(34, 34, 34, 0.5),
              inset -1px -1px 3px rgba(0, 0, 0, 0.3),
              2px 2px 5px rgba(0, 0, 0, 0.7);
  border: 1px solid #1f2c3b;
  padding: 10px 20px;
  gap: 20px;
}

/* Brand Logo */
.brand {
  order: 1;
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

/* Search */
.search-container {
  display: flex;
  align-items: center;
  gap: 5px;
  order: 3;
}
.search-container input {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 25px;
}
.search-container button {
  background-color: #ffd000;
  border: none;
  border-radius: 4px;
  padding: 5px;
  height: 35px;
  cursor: pointer;
}
.search-container button:hover {
  background-color: #fda015;
}
.searchbtn {
  font-size: 16px;
  color: black;
}

/* Hamburger */
.hamburger {
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
  order: 4;
}

/* Nav Links */
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 40px;
  order: 2;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 22px;
}
.nav-links a:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
  text-decoration: underline;
  color: lightyellow;
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
    flex-direction: row;
    flex-wrap: wrap;
  }

  .brand {
    order: 1;
  }

  .search-container {
    flex: 1;
    justify-content: center;
    order: 2;
    padding: 10px 0;
    width: 100%;
  }

  .hamburger {
    display: block;
    order: 3;
    padding-left: 10px;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #2c3e50;
    padding: 10px 0;
    border-top: 1px solid #1f2c3b;
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
