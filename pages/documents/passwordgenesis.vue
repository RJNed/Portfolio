<template>
  <div class="background">
    <div class="project-details">
      <h1 class="project-title">Password Generator</h1>
      
      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <img
            src="/images/password.png"
            alt="Password Generator project plan"
            class="project-image"
          />
          <h3>Project Details</h3>
          <ul class="tech-list">
            <li><strong>Project:</strong> Password Genesis</li>
            <li><strong>Start Date:</strong> August 15, 2025</li>
            <li><strong>Status:</strong> Completed</li>
            <li><strong>Model:</strong> Lean SDLC</li>
            <li><strong>Framework:</strong> Vanilla JavaScript</li>
            <li><strong>Hosting:</strong> Vercel</li>
            <li><strong>Repository:</strong> <a href="https://github.com/RJNed/PasswordGenesis" target="_blank">PasswordGenesis GitHub</a></li>
            <li><strong>Website:</strong> <a href="https://PasswordGenesis.com" target="_blank">PasswordGenesis</a></li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <div class="content-section">
            <h2>SDLC Model</h2>
            <p><strong>Chosen Model:</strong> Lean</p>
            <p><strong>Justification:</strong> For this focused utility project, the Lean approach enabled rapid iteration and continuous improvement, allowing for quick delivery of core functionality while minimizing waste and enabling fast feedback cycles.</p>
          </div>

          <div class="content-section">
            <h2>Project Overview</h2>
            <p><strong>Project Name:</strong> Password Genesis</p>
            <p><strong>Description:</strong> A secure password generator utility that creates strong, customizable passwords using cryptographically secure random number generation.</p>
            
            <h3>Goals and Objectives:</h3>
            <ul>
              <li>Generate cryptographically secure random passwords</li>
              <li>Ensure cross-browser compatibility</li>
              <li>Create an intuitive, responsive user interface</li>
              <li>Educate the user on password safety and attacks</li>
              <li>Password creation animation (not complete yet)</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Scope</h2>
            <h3>In Scope:</h3>
            <ul>
              <li>Password generation with configurable length (4-32 characters)</li>
              <li>Password strength indicator</li>
              <li>Responsive web design</li>
              <li>Cross-browser compatibility</li>
            </ul>
            
            <h3>Out of Scope:</h3>
            <ul>
              <li>Password storage or management</li>
              <li>User accounts or authentication</li>
              <li>Password history or favorites</li>
              <li>Mobile app version</li>
              <li>Server-side processing</li>
            </ul>
            
            <h3>Assumptions and Constraints:</h3>
            <ul>
              <li>Project uses only client-side technologies</li>
              <li>No external dependencies or libraries</li>
              <li>Target browsers: Chrome, Firefox, Safari, Edge</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Timeline</h2>
            <p><strong>Start Date:</strong> August 15, 2025</p>
            <p><strong>Completion Date:</strong> August 25, 2025</p>
            <p><strong>Key Milestones:</strong></p>
            <ul>
              <li>Requirements Analysis: August 10-12</li>
              <li>Design & Planning: August 13-15</li>
              <li>Core Development: August 16-21</li>
              <li>Testing & Refinement: August 20-21</li>
              <li>Deployment: August 21</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Requirements</h2>
            <h3>Functional Requirements:</h3>
            <ul>
              <li>Generate passwords with length between 4-32-128 characters</li>
              <li>Provide real-time password strength feedback</li>
              <li>Display generated password in a readable format</li>
              <li>Include a "Generate New Password" button</li>
              <li>Better input validation</li>
            </ul>
            
            <h3>Non-Functional Requirements:</h3>
            <ul>
              <li>Use cryptographically secure random number generation</li>
              <li>Ensure responsive design for mobile and desktop</li>
              <li>Maintain cross-browser compatibility</li>
              <li>Provide immediate user feedback for all actions</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Design Plan</h2>
            <h3>User Interface Design:</h3>
            <ul>
              <li><strong>Layout:</strong> Clean, centered design with clear visual hierarchy</li>
              <li><strong>Controls:</strong> Intuitive UI</li>
              <li><strong>Strength Indicator:</strong> Visual bar showing password strength level</li>
              <li><strong>Generate Button:</strong> Prominent, accessible button for new passwords</li>
            </ul>
            
            <h3>Style/Theme Guidelines:</h3>
            <ul>
              <li><strong>Visual Style:</strong> Modern, minimalist design with focus on usability</li>
              <li><strong>Color Scheme:</strong> Dark theme with high contrast for readability</li>
              <li><strong>Typography:</strong> Clear fonts with appropriate sizing</li>
              <li><strong>Interactive Elements:</strong> Smooth hover effects and transitions</li>
            </ul>
            
            <h3>Technology Stack:</h3>
            <ul>
              <li><strong>Frontend:</strong> HTML5, CSS3, Vanilla JavaScript</li>
              <li><strong>Random Generation:</strong> Web Crypto API (crypto.getRandomValues)</li>
              <li><strong>Styling:</strong> CSS Grid and Flexbox for responsive layout</li>
              <li><strong>Hosting:</strong> Vercel</li>
              <li><strong>Version Control:</strong> Git with GitHub</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Development Plan</h2>
            <h3>Phases:</h3>
            <ol>
              <li><strong>Setup & Structure:</strong> Create HTML structure, CSS framework, and JavaScript modules</li>
              <li><strong>Core Functionality:</strong> Implement password generation algorithm and character selection</li>
              <li><strong>User Interface:</strong> Build responsive layout with all interactive elements</li>
              <li><strong>Advanced Features:</strong> Add strength indicator and validation</li>
              <li><strong>Testing & Optimization:</strong> Cross-browser testing and performance optimization</li>
              <li><strong>Deployment:</strong> Configure Vercel and final testing</li>
            </ol>
            <p><strong>Version Control:</strong> Git with hosting on GitHub</p>
          </div>

          <div class="content-section">
            <h2>Testing Strategy</h2>
            <h3>Testing Types:</h3>
            <ul>
              <li>Functional testing of password generation and customization</li>
              <li>Cross-browser compatibility testing</li>
              <li>Responsive design testing on various screen sizes</li>
              <li>Security testing of random number generation</li>
            </ul>
            
            <h3>Test Cases:</h3>
            <ul>
              <li>Generate passwords with different length ranges</li>
              <li>Validate strength indicator accuracy</li>
              <li>Test edge cases (minimum/maximum lengths)</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Deployment Plan</h2>
            <h3>Deployment Environment:</h3>
            <ul>
              <li><strong>Platform:</strong> Vercel</li>
              <li><strong>Environment Type:</strong> Static website</li>
              <li><strong>Framework:</strong> Vanilla HTML/CSS/JavaScript</li>
              <li><strong>Build Process:</strong> No build step required</li>
              <li><strong>Custom Domain:</strong> passwordgenesis.com</li>
              <li><strong>HTTPS:</strong> Enabled by default via Vercel</li>
            </ul>
            
            <h3>Tools & Services:</h3>
            <ul>
              <li><strong>Development:</strong> VS Code, Git, GitHub, Web Crypto API</li>
              <li><strong>Testing:</strong> Browser DevTools, Lighthouse, manual testing</li>
              <li><strong>Deployment:</strong> Vercel, Git workflow</li>
            </ul>
            
            <h3>Post-Deployment Steps:</h3>
            <ol>
              <li>Verify all functionality works on live site</li>
              <li>Test on multiple browsers and devices</li>
              <li>Run Lighthouse audit for performance and accessibility</li>
              <li>Validate HTTPS and security headers</li>
              <li>Update documentation and README</li>
            </ol>
          </div>

          <div class="content-section">
            <h2>Security Considerations</h2>
            <h3>Implementation Security:</h3>
            <ul>
              <li>Use Web Crypto API for cryptographically secure random generation</li>
              <li>Ensure no passwords are stored or transmitted</li>
              <li>Validate all user inputs and parameters</li>
              <li>Implement proper error handling without exposing sensitive information</li>
            </ul>
            
            <h3>Best Practices:</h3>
            <ul>
              <li>Follow OWASP guidelines for client-side security</li>
              <li>Use Content Security Policy headers</li>
              <li>Implement proper input sanitization</li>
              <li>Ensure secure communication over HTTPS</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Maintenance Plan</h2>
            <p><strong>Update Schedule:</strong> As needed for security patches or feature enhancements</p>
            <p><strong>Monitoring:</strong> Frequent testing and User feedback</p>
            
            <h3>Future Enhancements:</h3>
            <ul>
              <li>Add password history (local storage)</li>
              <li>Implement password strength meter improvements</li>
              <li>Add export functionality for multiple passwords</li>
              <li>Consider PWA capabilities for offline use</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Password Generator Project Plan | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Detailed project plan for the Password Genesis generator - SDLC model, requirements, timeline, and development phases.' },
    { property: 'og:title', content: 'Password Generator Project Plan | Ryan Nedbalek' },
    { property: 'og:description', content: 'Comprehensive project plan showing the development process, requirements, and technical decisions for the Password Genesis generator.' },
    { property: 'og:image', content: '/images/password.png' }
  ]
})
</script>
  
<style scoped>
  .background {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    background: var(--bg-gradient);
    overflow: hidden;
    transition: background 0.3s ease;
  }

  .project-details {
    width: 90vw;
    max-width: 1600px;
    margin: 0 auto;
    color: var(--text-primary);
    z-index: 1;
    transition: color 0.3s ease;
  }

  .project-title {
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .content-grid {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* Left Column */
  .left-column {
    flex: 1;
    min-width: 350px;
    max-width: 600px;
  }

  .project-image {
    width: 80%;
    height: auto;
    border-radius: 10px;
    margin: 50px;
    margin-top: 0px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    border: 1px solid var(--accent);
  }

  .project-image:hover {
    transform: scale(1.05);
  }

  .tech-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 18px;
    color: var(--text-secondary);
    margin: 35px;
    margin-top: 0px;
    transition: color 0.3s ease;
  }

  .tech-list li {
    margin-bottom: 10px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    transition: border-color 0.3s ease;
  }

  .left-column h3 {
    text-align: center;
    font-size: 24px;
    margin: 0px 0 10px 0;
    color: var(--text-primary);
    padding: 8px 0;
    transition: color 0.3s ease;
  }

  /* Right Column */
  .right-column {
    flex: 2;
    min-width: 400px;
    font-size: 18px;
    line-height: 1.8;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .content-section {
    padding: 25px;
  }

  .content-section h2 {
    color: var(--text-primary);
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 28px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 10px;
    transition: color 0.3s ease, border-color 0.3s ease;
  }

  .content-section h3 {
    color: var(--text-primary);
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 22px;
    transition: color 0.3s ease;
  }

  .content-section p {
    margin-bottom: 15px;
  }

  .content-section ul,
  .content-section ol {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .content-section li {
    margin-bottom: 8px;
  }

  .content-section strong {
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  /* Optional: improve large screen appearance */
  @media (min-width: 1600px) {
    .project-details {
      width: 95vw;
    }

    .project-title {
      font-size: 48px;
    }

    .tech-list {
      font-size: 20px;
    }

    .right-column {
      font-size: 20px;
    }
  }

  @media(max-width: 899px){
    .content-grid{
      align-items: center;
      justify-content: center;
    }

    .left-column{
      text-align: center;
      margin-right: 25px;
    }

    .left-column ul{
      text-align: start;
    }

    .right-column{
      text-align: center;
    }

    .content-section {
      padding: 20px;
    }

    .project-title {
      font-size: 36px;
    }
  }
</style> 