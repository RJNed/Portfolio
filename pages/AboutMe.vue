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
    { name: 'description', content: 'Learn about Ryan Nedbalek\'s background, interests, and professional journey.' },
    { property: 'og:title', content: 'About Me | Ryan Nedbalek' },
    { property: 'og:description', content: 'Discover Ryan\'s personal story, education, and experience.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/AboutMe' }
  ]
})
</script>

<style scoped>
header {
  background: var(--accent);
  color: #000000;
  text-align: center;
  padding: 20px;
}

header h1 {
  margin: 0;
  font-size: 48px;
  color: #000000;
}

header p {
  margin: 0;
  padding-top: 10px;
  font-size: 20px;
  color: #000000;
}

h2 {
  color: var(--text-primary);
  text-align: center;
  font-size: 28px;
  border-bottom: 2px solid var(--border);
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.team {
  border-radius: 8px;
  box-shadow: 0 4px 12px var(--shadow);
  background: var(--card-bg);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 900px;
  border: 1px solid var(--border);
}

.team-member {
  text-align: center;
  max-width: 250px;
  padding: 10px;
}

.team-member img {
  width: 90%;
  border-radius: 50%;
  border: 2px solid var(--accent);
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.team-member img:hover {
  transform: scale(1.05);
}

.team-member h3 {
  color: var(--text-primary);
  font-size: 24px;
  margin-bottom: 15px;
}

.team-member p {
  color: var(--text-secondary);
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
}

.team:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px var(--shadow);
}

.background-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  overflow: hidden;
  background: var(--bg-gradient);
  transition: background 0.3s ease;
}

.content-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1;
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
  gap: 30px;
  flex-wrap: wrap;
}

.whoSection {
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 5px 10px 10px 0;
  color: var(--text-primary);
}

.rightSection {
  flex: 2;
  min-width: 300px;
  padding: 5px;
  border-radius: 8px;
  color: var(--text-primary);
  text-align: left;
}

.rightBackground {
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 4px 8px var(--shadow);
  padding: 25px;
  border: 1px solid var(--border);
}

.rightContent {
  color: var(--text-primary);
  padding: 20px;
  text-align: left;
}

.rightContent h2 {
  color: var(--text-primary);
  border-bottom: 2px solid var(--border);
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.skills-list {
  list-style-type: none;
  padding: 0;
}

.skills-list li {
  padding: 5px 0;
  color: var(--text-secondary);
}

.job {
  margin-bottom: 20px;
}

.job h3 {
  margin-bottom: 5px;
  color: var(--text-primary);
}

.job p {
  font-style: italic;
  color: var(--text-secondary);
}

.job ul {
  padding-left: 20px;
  color: var(--text-secondary);
}

/* Mobile & tablet responsiveness */
@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .whoSection,
  .rightSection {
    max-width: 100%;
  }

  .team {
    justify-content: center;
    width: 100%;
  }
}

@media (max-width: 600px) {
  header h1 {
    font-size: 1.8rem;
  }

  p, .job p {
    font-size: 1rem;
  }

  .rightContent {
    padding: 10px;
  }

  .rightContent h2 {
    font-size: 1.2rem;
  }

  .job h3 {
    font-size: 1.1rem;
  }
}
</style>
