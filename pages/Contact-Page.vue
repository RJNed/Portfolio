<template>
  <div class="background-container">
    <div class="content-container">
      <h2>Contact Information</h2>
      <div class="rightBackground">
        <div class="rightContent">
          <p>Name: Ryan Nedbalek</p>
          <p>Email: <a href="mailto:rjnedbalek@gmail.com">rjnedbalek@gmail.com</a> </p>
          <p>Where to find me?</p>
          <a href="https://www.linkedin.com/in/ryannedbalek/">LinkedIn</a>
          <br>
          <br>
          <a href="https://github.com/RJNed">Github</a>
          <br>
          <br>
          <a href="https://www.instagram.com/ryannedbalek">Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
</script>

<style scoped>
h2 {
  color: #fcfcc0;
  text-align: center;
  font-size: 24px;
}

.team-member img {
  width: 90%;
  border-radius: 50%;
  border: 3px solid #000000; /* Added `border-style: solid` */
  margin-bottom: 15px;
}
.team:hover{
    transform: translateY(-10px);
    transition: all 0.5s ease;
}

.background-container {
  position: absolute;
  height: 100%; /* Ensures the container takes the full viewport height */
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures the background is contained */
  background-color: #282828;
}

/* Apply opacity to the background using ::before */
.background-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/Background/Pexels.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  opacity: 0.25; /* Background opacity at 25% */
  background-attachment: fixed; /* Keeps the background fixed when scrolling */
  z-index: 0;
}


.content-container {
  position: relative;
  /*display: flex;
  align-items: flex-start;  Align items to the top */
  z-index: 1;
  width: 90%; /* Prevents it from stretching too much */
  margin: 20px auto; /* Centers the container */
}


.rightBackground {
  background: rgba(255, 255, 255, 0.85); /* White with 85% opacity */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
}

.rightContent {
  color: #000; /* Ensures text is fully visible */
  padding: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
}

</style>