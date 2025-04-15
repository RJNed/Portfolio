<template>
  <div class="background-container">
    <div class="content-container">
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

      <!-- Contact Form -->
      <div class="form-card">
        <h2>Send a Message</h2>
        <form @submit.prevent="handleMessage">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" v-model="name" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" v-model="email" />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input id="subject" type="text" placeholder="Subject" v-model="subject" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5"  placeholder="Your message here..." v-model="contactMessage"></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const name = ref('')
const email = ref('')
const subject = ref('')
const contactMessage = ref('')

useHead({
  title: 'Contact | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Get in touch with Ryan Nedbalek for freelance work, collaboration, or just to say hi. Quick response guaranteed through the contact form.' },
    { name: 'keywords', content: 'contact Ryan Nedbalek, developer contact, freelance web developer, portfolio contact form, email form' },
    { property: 'og:title', content: 'Contact | Ryan Nedbalek' },
    { property: 'og:description', content: 'Reach out to Ryan through the contact form for project inquiries, tech talks, or networking.' },
    { property: 'og:image', content: '/images/portfolio-icon.jpg' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/Contact-Page' }
  ]
})

const handleMessage = () => {
  const serviceID = 'service_2w0ggij'      
  const templateID = 'template_iwca5bm'    
  const publicKey = 'cKK2nzE7-DjGJs5sl'

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    subject: subject.value,
    message: contactMessage.value,
  }

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert('Message sent successfully!')
      name.value = ''
      email.value = ''
      subject.value = ''
      contactMessage.value = ''
    }, (error) => {
      console.error('Email send error:', error)
      alert('Failed to send message. Please try again later.')
    })
}
</script>

<style scoped>
h2 {
  color: #060606;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.background-container {
  display: flex;
  justify-content: center;
  height: 100vw;
  width: 100vw;
  position: relative;
  background-color: #282828;
}
.background-container::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/images/pexels.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  background-attachment: fixed;
  z-index: 0;
}
.content-container {
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  height:500px;
  margin-top: 100px;
  justify-content: space-between;
  gap: 25px;
}
.contact-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 25px;
  margin-bottom: 30px;
  min-width: 250px;
  width: 400px;
  max-width: 600px;
  height: 100%;
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
.form-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 25px;
  width: 600px;
  height: 100%;
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
@media (max-width: 768px) {
  h2 { font-size: 20px; }
  h3 { font-size: 18px; }
  .contact-info { font-size: 16px; }
  .social-links a { font-size: 16px; padding: 8px 12px; }
  input, textarea { font-size: 14px; }
  button[type="submit"] { font-size: 14px; }
}
</style>
