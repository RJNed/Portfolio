<template>
  <div class="background-container">
    <div class="content-container">
      <h2>Contact Information</h2>
      <div class="contact-card">
        <address class="contact-info">
          <p><strong>Name:</strong> Ryan Nedbalek</p>
          <p><strong>Email:</strong> 
            <a href="mailto:rjnedbalek@gmail.com">rjnedbalek@gmail.com</a>
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

      <!-- Contact Form -->
      <div class="form-card">
        <h3>Send a Message</h3>
        <form @submit.prevent>
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* General Headings */
h2 {
  color: #fcfcc0;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 15px;
  color: #000;
}

/* Layout */
.background-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: #282828;
  overflow: hidden;
  padding: 40px 20px;
}

.background-container::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/src/Background/Pexels.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  background-attachment: fixed;
  z-index: 0;
}

.content-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

/* Contact Card */
.contact-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 25px;
  margin-bottom: 30px;
}

.contact-info {
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
}

.contact-info a {
  color: #000;
  text-decoration: underline;
}

/* Social Links */
.social-links {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-links a {
  display: inline-block;
  padding: 10px 15px;
  background-color: #f0f0f0;
  color: #000;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  background-color: #dcdcdc;
  transform: translateY(-2px);
}

/* Contact Form */
.form-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 16px;
  font-family: inherit;
}

button[type="submit"] {
  padding: 12px;
  font-size: 16px;
  background-color: #282828;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #444;
}

/* Mobile Styles */
@media (max-width: 768px) {
  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  .contact-info {
    font-size: 16px;
  }

  .social-links a {
    font-size: 16px;
    padding: 8px 12px;
  }

  input,
  textarea {
    font-size: 14px;
  }

  button[type="submit"] {
    font-size: 14px;
  }
}
</style>
