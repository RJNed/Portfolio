<template>
  <div class="background">
    <div class="project-details">
      <h1 class="project-title">Web Development Project Plan</h1>
      
      <div class="content-grid">
        <!-- Left Column -->
        <div class="left-column">
          <img
            src="/images/fotis-fotopoulos-unsplash.jpg"
            alt="Portfolio project plan"
            class="project-image"
          />
          <h3>Project Details</h3>
          <ul class="tech-list">
            <li><strong>Project:</strong> Portfolio Website</li>
            <li><strong>Start Date:</strong> March 15, 2025</li>
            <li><strong>Status:</strong> Ongoing</li>
            <li><strong>Model:</strong> Lean SDLC</li>
            <li><strong>Framework:</strong> Vue 3 + Nuxt</li>
            <li><strong>Hosting:</strong> Vercel</li>
            <li><strong>Repository:</strong> <a href="https://github.com/RJNed/portfolio" target="_blank">Portfolio GitHub</a></li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <div class="content-section">
            <h2>SDLC Model</h2>
            <p><strong>Chosen Model:</strong> Lean</p>
            <p><strong>Justification:</strong> As a solo developer, the Lean strategy allows for rapid iteration, delivering core features and functionality fast while minimizing waste and enabling continuous improvement.</p>
          </div>

          <div class="content-section">
            <h2>Project Overview</h2>
            <p><strong>Project Name:</strong> Portfolio Website</p>
            <p><strong>Description:</strong> A central portfolio site designed to showcase my technical projects and documentation. It allows anyone to explore my complete and ongoing work and contact me directly.</p>
            
            <h3>Goals and Objectives:</h3>
            <ul>
              <li>Showcase my portfolio and personal projects</li>
              <li>Learn and apply new technologies/frameworks</li>
              <li>Demonstrate full-stack and project management skills</li>
              <li>Ensure mobile-friendliness and responsive design</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Scope</h2>
            <h3>In Scope:</h3>
            <ul>
              <li>Homepage, contact form, about page, and responsive layout</li>
              <li>Projects and documentation sections</li>
              <li>Filtering and searching features</li>
              <li>Dynamic UI compatible with any device</li>
            </ul>
            
            <h3>Out of Scope:</h3>
            <ul>
              <li>User authentication and dashboards</li>
              <li>Database integration</li>
              <li>External APIs</li>
              <li>Self-hosted deployment</li>
            </ul>
            
            <h3>Assumptions and Constraints:</h3>
            <ul>
              <li>Project will use open-source libraries only</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Timeline</h2>
            <p><strong>Start Date:</strong> March 15, 2025</p>
            <p><strong>Estimated End Date:</strong> Ongoing</p>
            <p><strong>Key Milestones:</strong> To be added as project phases are completed</p>
          </div>

          <div class="content-section">
            <h2>Requirements</h2>
            <h3>Functional Requirements:</h3>
            <ul>
              <li>Users can view a categorized list of software and lab projects</li>
              <li>Contact form sends email to site owner (me)</li>
              <li>Project pages include overview, documentation links, and repo access</li>
              <li>Projects can be filtered by category (e.g., software, lab)</li>
              <li>Site navigation includes Home, About, Projects, Docs, and Contact</li>
            </ul>
            
            <h3>Non-Functional Requirements:</h3>
            <ul>
              <li>Responsive and mobile-friendly UI</li>
              <li>Code organized in reusable Vue 3 components</li>
              <li>SEO support for major pages</li>
              <li>Sensitive data managed via environment variables</li>
              <li>HTTPS enforced on all communication</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Design Plan</h2>
            <h3>Wireframe Notes:</h3>
            <ul>
              <li><strong>Nav Bar:</strong> Fixed top layout with route-based SPA links</li>
              <li><strong>Image Carousel:</strong> Displays rotating featured project previews</li>
              <li><strong>Category Buttons:</strong> Route to filtered project views</li>
              <li><strong>CTA Section:</strong> Prompts users to visit the contact page</li>
              <li><strong>Footer:</strong> Hyperlinks to key pages and social profiles, mobile-optimized</li>
            </ul>
            
            <h3>Style/Theme Guidelines:</h3>
            <ul>
              <li><strong>Visual Style:</strong> Modern, professional, tech-leaning</li>
              <li><strong>Color Scheme:</strong> Dark/navy backgrounds with translucent light containers</li>
              <li><strong>Layout:</strong> Clean grid-based structure with light hover effects and box shadows</li>
              <li><strong>Typography:</strong> Simple, legible sans-serif font; scaled for mobile</li>
            </ul>
            
            <h3>Technology Stack:</h3>
            <ul>
              <li><strong>Frontend:</strong> Vue 3 + Nuxt</li>
              <li><strong>Backend:</strong> Node.js + Express (if needed)</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>Styling:</strong> CSS (with optional Tailwind)</li>
              <li><strong>Hosting:</strong> Vercel</li>
              <li><strong>Repository:</strong> GitHub</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Development Plan</h2>
            <h3>Phases:</h3>
            <ol>
              <li><strong>Project Setup:</strong> Git repo, Vite/Nuxt configuration, routing, linting</li>
              <li><strong>Layout & Navigation:</strong> Build nav bar, routes, and search component</li>
              <li><strong>Homepage Components:</strong> Add carousel, category buttons, and CTA section</li>
              <li><strong>Content Pages:</strong> Build Projects, Documentation, About, and Contact sections</li>
              <li><strong>Routing & Transitions:</strong> Implement navigation logic and smooth transitions</li>
              <li><strong>Responsive Styling:</strong> Apply responsive layouts using CSS or media queries</li>
              <li><strong>Accessibility & SEO:</strong> Use semantic HTML, aria-labels, and meta tags</li>
              <li><strong>Testing & Debugging:</strong> Manual QA + Lighthouse audits</li>
              <li><strong>Deployment:</strong> Configure and deploy on Vercel, set custom domain</li>
            </ol>
            <p><strong>Version Control:</strong> Git with hosting on GitHub</p>
          </div>

          <div class="content-section">
            <h2>Testing Strategy</h2>
            <h3>Testing Types:</h3>
            <ul>
              <li>Manual testing for functionality and UI responsiveness</li>
              <li>Lighthouse audits for performance, accessibility, SEO</li>
            </ul>
            
            <h3>Bug Tracking:</h3>
            <ul>
              <li>All bugs tracked via GitHub Issues with labels (bug, in progress, fixed)</li>
              <li>Issues prioritized by visibility and user impact</li>
            </ul>
          </div>

          <div class="content-section">
            <h2>Deployment Plan</h2>
            <h3>Deployment Environment:</h3>
            <ul>
              <li><strong>Platform:</strong> Vercel</li>
              <li><strong>Environment Type:</strong> Static SPA with client-side routing</li>
              <li><strong>Framework:</strong> Vue 3 + Nuxt</li>
              <li><strong>Build Tool:</strong> Vite</li>
              <li><strong>Output Directory:</strong> dist/</li>
              <li><strong>Routing Mode:</strong> History or hash (based on router setup)</li>
              <li><strong>Custom Domain:</strong> Optional (e.g., ryannedbalek.com)</li>
              <li><strong>HTTPS:</strong> Enabled by default via Vercel</li>
              <li><strong>Environment Variables:</strong> Configured via Vercel Dashboard (prefixed with VITE_)</li>
            </ul>
            
            <h3>Tools & Services:</h3>
            <ul>
              <li><strong>Development:</strong> Vue 3, Vite, VS Code, Git, GitHub, Node.js</li>
              <li><strong>Testing & Auditing:</strong> Manual QA, Lighthouse, (optional) Vitest + Vue Test Utils</li>
              <li><strong>Forms/Integration:</strong> EmailJS, Vercel-managed env vars</li>
            </ul>
            
            <h3>Post-Deployment Steps:</h3>
            <ol>
              <li>Functionality check (nav, carousel, forms)</li>
              <li>Responsive & browser testing (desktop, tablet, mobile)</li>
              <li>Run Lighthouse and resolve major issues</li>
              <li>Verify SEO tags and metadata</li>
              <li>Test email delivery and fallback</li>
              <li>Set up optional analytics (Google Analytics, Plausible)</li>
              <li>Configure custom domain and HTTPS</li>
              <li>Tag release in GitHub and create backups</li>
            </ol>
          </div>

          <div class="content-section">
            <h2>Maintenance Plan</h2>
            <p><strong>Update Schedule:</strong> As needed after new project completions or updates</p>
            <p><strong>Monitoring Tools:</strong> Vercel's built-in performance and status dashboard</p>
            
            <h3>Issue Tracking Process:</h3>
            <ul>
              <li>Use GitHub Issues to log bugs and feature requests</li>
              <li>Tag, prioritize, and close after testing and confirmation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio Project Plan | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Detailed project plan for the portfolio website - SDLC model, requirements, timeline, and development phases.' },
    { property: 'og:title', content: 'Portfolio Project Plan | Ryan Nedbalek' },
    { property: 'og:description', content: 'Comprehensive project plan showing the development process, requirements, and technical decisions for the portfolio website.' },
    { property: 'og:image', content: '/images/Maintenance.png' }
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