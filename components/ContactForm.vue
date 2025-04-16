<template>
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
          <textarea id="message" rows="5" placeholder="Your message here..." v-model="contactMessage"></textarea>
        </div>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import emailjs from 'emailjs-com'
  
  const name = ref('')
  const email = ref('')
  const subject = ref('')
  const contactMessage = ref('')
  
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

  h2 {
    text-align: center;
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
    .form-card {
    padding: 25px;
    width: 450px;
    height: 100%;
    margin-bottom: 20px;
  }
  }

  </style>
  