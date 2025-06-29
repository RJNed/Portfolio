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
    const serviceID = useRuntimeConfig().public.emailjsServiceId
    const templateID = useRuntimeConfig().public.emailjsTemplateId
    const publicKey = useRuntimeConfig().public.emailjsPublicKey
  
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
    background: var(--component-blue);
    border-radius: 8px;
    box-shadow: 0 4px 12px var(--shadow);
    padding: 25px;
    width: 600px;
    height: 100%;
    border: 1px solid var(--navbar-border);
    transition: background 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
  }
  form {
    background-color: var(--component-blue);
    border: none;
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
    color: var(--text-primary);
  }

  label {
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--text-primary);
  }
  input,
  textarea {
    padding: 10px;
    border: 1px solid var(--border);
    border-radius: 5px;
    font-size: 16px;
    font-family: inherit;
    background-color: var(--bg-secondary);
    color: var(--text-primary); 
    transition: border-color 0.1s ease, background-color 0.1s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent);
  }

  button[type="submit"] {
    padding: 12px;
    font-size: 16px;
    background-color: var(--accent);
    color: #000000;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  button[type="submit"]:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
  }


  @media (max-width: 768px) {
    .form-card {
    padding: 25px;
    width: 450px;
    height: 100%;
    margin-bottom: 20px;
  }
  }

  @media (max-width: 525px) {
    .form-card {
    padding: 15px;
    width: 300px;
    height: 100%;
  }
  }
  </style>
  