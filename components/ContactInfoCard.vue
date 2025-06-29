<template>
    <div class="contact-card">
      <h2>Contact Information</h2>
      <address class="contact-info">
        <p><strong>Name:</strong> Ryan Nedbalek</p>
        <p><strong>Email:</strong> 
          <a href="mailto:ryannedbalek@gmail.com">ryannedbalek@gmail.com</a>
        </p>
        <p><strong>Where to find me:</strong></p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/ryannedbalek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            LinkedIn
          </a>
          <a href="https://github.com/RJNed" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            GitHub
          </a>
          <a href="https://www.instagram.com/ryannedbalek" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            Instagram
          </a>
        </div>
      </address>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>

  .contact-card {
    background: var(--component-blue);
    border-radius: 8px;
    box-shadow: 0 4px 12px var(--shadow);
    padding: 25px;
    width: 400px;
    max-width: 600px;
    min-height: 100%;
    border: 1px solid var(--navbar-border);
    transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  
  .contact-info {
    color: var(--text-primary);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.6;
  }
  
  .contact-info a {
    color: var(--accent);
    text-decoration: underline;
  }

  .contact-info a:hover {
    color: var(--accent-hover);
  }

  h2 {
    text-align: center;
    color: var(--text-primary);
  }
  
  .social-links {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .social-links a {
    display: inline-block;
    padding: 10px 15px;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: 1px solid var(--border);
  }
  
  .social-links a:hover {
    background-color: var(--bg-tertiary);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .contact-card {
      padding: 25px;
      width: 450px;
      min-height: 100%;
    }
    
    .contact-info { font-size: 16px; }
    
    .social-links a { font-size: 16px; padding: 8px 12px; }
  }

  @media (max-width: 525px){
    .contact-card {
      padding: 15px;
      width: 300px;
      min-height: 100%;
    }
}
  </style>
  