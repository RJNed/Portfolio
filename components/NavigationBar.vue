<template>
    <nav class="navbar">
      <!-- Logo or Brand -->
      <div class="brand">
        <a href="/ "><img src="../src/Logos/portfolio-icon.png"></img></a>
      </div>
      
      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><a href="/">Featured</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Documentation">Documentation</a></li>
        <li><a href="/AboutMe">About Me</a></li>
        <li><a href="/Contact-Page">Contact</a></li>

      </ul>
      
      <!-- Search Field -->
      <div class="search-container">
        <input type="text" placeholder="Looking for..." v-model="searchQuery" />
        <button @click="handleSearch">
          <i class="fas fa-search">search</i> 
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  
  const handleSearch = () => {
    alert(`Searching for: ${searchQuery.value}`);
    // Add logic for actual search functionality here
  };
  </script>
  
  
  <style scoped>
  /* Styling the Navbar */
  .navbar {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background: linear-gradient(to bottom, #283e51, #333);  /* Gradient background */
    text-align: center;
    font-size: 18px;

    /* Beveled effect */
    box-shadow: inset 1px 1px 3px rgba(34, 34, 34, 0.5),
                inset -1px -1px 3px rgba(0, 0, 0, 0.3),
                2px 2px 5px rgba(0, 0, 0, 0.7);  /* Outer shadow for more depth */
    border: 1px solid #1f2c3b;
  }
  
  .brand img{
    width: 100%;
    height: 75px;
    padding-left: 10px;
    transition: all 0.5s ease;
  }

  .brand :hover {
    transform: translateY(-5px);
    
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-left: 50px;
    font-size: 20px;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  
  .nav-links a:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    text-decoration: underline;
    color: lightyellow;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
  
  .search-container input {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    width: 300px;
    height: 25px;
  }
  
  .search-container button {
    background-color: #ffd000;
    color: black;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    height: 35px;
  }
  
  .search-container button:hover {
    background-color: #fda015;
  }
  
  .fas.fa-search {
    font-size: 16px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      display: none; /* Hide links by default */
    }
  
    .navbar:hover .nav-links {
      display: flex; /* Show links when hovered */
    }
  }

  </style>