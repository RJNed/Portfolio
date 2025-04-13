<template>
    <div class="container">
        <div class="projects-background">
          <div class="details">
              <h1>Projects</h1>
              <!--image currently not imported properly-->

              <!--need to implement store base rendering of information-->
                

              <!--do we need to implement a database to handle project and documentation? -->
                <!-- no dont **need** a database -->
                  <!-- cleaner code and best practice -->
              <a class="projectLink" href="/testPage"> 
              <projectCard
              image = ""
              name = "Project Test"
              description = "Testing if this works"/>
              </a>
        </div>
        </div>
    </div>
</template>

<script setup>
import projectCard from '~/components/projectCard.vue';
</script>

<style scoped>
.projects-background {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  position: relative;
  background-color: #282828;
  overflow: hidden;
}

.projects-background::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('../src/Background/pexels.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  background-attachment: fixed;
  z-index: 0;
}

.projectLink {
  text-decoration-line: none;
}

.details {
  margin-top: -250px;
  text-align: center;
  align-items: center;
  padding: 5px;
  color:#fcfcc0;
}

</style>