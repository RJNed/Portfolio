<template>
  <header>
      <h1>Welcome to My Portfolio!</h1>
      <p>Learning more, one project at a time.</p>
  </header>

  <div class="background-container">
      <div class="content-container">
          <!-- Left Section -->
          <div class="whoSection">
              <h2>Who I am</h2>
              <div class="team">
                  <div class="team-member">
                      <img src="/images/ryancartoon.png" alt="Team Member 3">
                      <h3>Ryan Nedbalek</h3>
                      <p>A passionate IT professional and software developer with a curiosity for all things tech. 
                      I love building, problem-solving, and experimenting. 
                      My portfolio showcases the projects that push me to learn, create, and refine my craft—one challenge at a time.</p>
                  </div>
              </div>
          </div>

          <!-- Right Section -->
          <div class="rightSection">
            <h2>What I do</h2>
            <div class="rightBackground">
              <div class="rightContent">
                <h2>Skills</h2>
                <ul class="skills-list">
                  <li><strong>Engineering & Product Development:</strong> SolidWorks and Fusion360 Design, Technical Documentation, Troubleshooting (Digital & Analog Systems)</li>
                  <li><strong>Networking & Systems:</strong> Computer Networking, UNIX, System Maintenance & Diagnostics, and VMware</li>
                  <li><strong>Software & Programming:</strong> Python, HTML, CSS, SQL, Software Troubleshooting</li>
                  <li><strong>Soft Skills:</strong> Problem-Solving, Team Collaboration, Communication</li>
                </ul>

                <h2>Experience</h2>
                
                <div class="job">
                  <h3>Product Engineer</h3>
                  <p><em>Blackbox Technologies Int'l, LLC | Pasadena, TX | 02/2024 - Present</em></p>
                  <ul>
                    <li>Designed and optimized product components using SolidWorks for 3D modeling and drafting.</li>
                    <li>Provided technical support to clients and technicians, troubleshooting issues.</li>
                    <li>Developed product design specifications and collaborated with cross-functional teams for successful product launches.</li>
                    <li>Led full product development lifecycles, from concept phase to final production.</li>
                    <li>Prepared detailed reports with data analysis, cost-benefit evaluations, and proposed solutions.</li>
                    <li>Created and maintained process and production documentation to streamline workflows.</li>
                    <li>Automated processes and improved user experience through custom-developed programs.</li>
                    <li>Analyzed code and optimized system performance by identifying and correcting errors.</li>
                  </ul>
                </div>

                <div class="job">
                  <h3>Software Developer (Contracted)</h3>
                  <p><em>Hylio, Inc. | Houston, TX | 09/2023 - 12/2023 </em></p>
                  <ul>
                    <li>Developed and implemented Vue 3 components for a scalable front-end architecture.</li>
                    <li>Integrated TypeScript to enhance code maintainability and performance.</li>
                    <li>Managed version control (Git) and worked in an agile development environment.</li>
                  </ul>
                </div>

                <div class="job">
                  <h3>Technician</h3>
                  <p><em>Blackbox Technologies Int'l, LLC | Houston, TX | 01/2020 - 08/2022</em></p>
                  <ul>
                    <li>Installed, repaired, and maintained advanced life support systems for digital command units.</li>
                    <li>Conducted preventative maintenance and diagnostics to minimize system failures.</li>
                    <li>Troubleshot digital and analog systems, ensuring operational efficiency.</li>
                    <li>Diagnosed and repaired computer systems, PLCs, and control interfaces to maintain seamless operation.</li>
                    <li>Identified and resolved hardware and software issues in embedded systems and industrial control units.</li>
                  </ul>
                </div>

                <h2>Education</h2>
                <p><strong>University of Houston – Clear Lake</strong> | Clear Lake, TX</p>
                <p><em>Bachelor of Science in Computer Information Systems | 12/2023</em></p>
                <ul>
                  <li>Minor in Cybersecurity</li>
                  <li>Honors Student</li>
                </ul>

                <h2>Certifications</h2>
                <ul>
                  <li>Cisco CyberOps Associate Certificate</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>


<script setup>
useHead({
  title: 'About Me | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Learn about Ryan Nedbalek’s background, interests, and professional journey in software and robotics.' },
    { property: 'og:title', content: 'About Me | Ryan Nedbalek' },
    { property: 'og:description', content: 'Discover Ryan’s personal story, education, and experience.' },
    { property: 'og:image', content: '/images/portfolio-icon.jpg' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/AboutMe' }
  ]
})
</script>

<style scoped>
header {
  background-color: #22345f;
  color: #fff;
  text-align: center;
  padding: 20px;
}

header h1 {
  margin: 0;
}

header p{
  margin: 0;
  padding-top: 10px;
}

h2 {
  color: #fcfcc0;
  text-align: center;
  font-size: 24px;
}

.team {
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.85);
  width: 250px;
  display: flex;
  justify-content: space-around; /* Ensure even spacing between team members */
  flex-wrap: wrap; /* Allows wrapping if needed */
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 90%;
  border-radius: 50%;
  border: 1px solid #000000; /* Added `border-style: solid` */
  margin-bottom: 15px;
}
.team:hover{
    transform: translateY(-10px);
    transition: all 0.5s ease;
}

p {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}

.background-container {
  position: relative;
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
  background-image: url('/images/pexels.jpg'); /* Path to your background image */
  background-size: cover;
  background-position: center;
  opacity: 0.25; /* Background opacity at 25% */
  background-attachment: fixed; /* Keeps the background fixed when scrolling */
  z-index: 0;
}


.content-container {
  position: relative;
  display: flex;
  justify-content: space-between; /* Space sections evenly */
  align-items: flex-start; /* Align items to the top */
  z-index: 1;
  width: 90%; /* Prevents it from stretching too much */
  margin: 20px auto; /* Centers the container */
  gap: 30px; /* Space between sections */
}

.whoSection {
  position: relative;
  padding: 5px;
  max-width: 450px;
  margin: 0 auto;
  color:black
}

/* Right Section */
.rightSection {
  flex: 1; /* Takes available space */
  padding: 5px;
  border-radius: 8px;
  color: black;
  text-align: left;
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
}

.rightContent h2 {
  color: #22345f;
  border-bottom: 2px solid #000000;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.skills-list {
  list-style-type: none;
  padding: 0;
}

.skills-list li {
  padding: 5px 0;
}

.job {
  margin-bottom: 20px;
}

.job h3 {
  margin-bottom: 5px;
  color: #22345f;
}

.job p {
  font-style: italic;
  color: #1c1c1c; /* Darker for better readability */
}

.job ul {
  padding-left: 20px;
}
</style>