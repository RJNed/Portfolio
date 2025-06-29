<template>
    <div class="background-container">
      <div class="content-container">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </div>
</template>

<script setup>
import ContactInfoCard from '~/components/ContactInfoCard.vue'
import ContactForm from '~/components/ContactForm.vue'

useHead({
  title: 'Contact | Ryan Nedbalek',
  meta: [
    { name: 'description', content: 'Get in touch with Ryan Nedbalek for freelance work, collaboration, or just to say hi. Quick response guaranteed through the contact form.' },
    { name: 'keywords', content: 'contact Ryan Nedbalek, developer contact, freelance web developer, portfolio contact form, email form' },
    { property: 'og:title', content: 'Contact | Ryan Nedbalek' },
    { property: 'og:description', content: 'Reach out to Ryan through the contact form for project inquiries, tech talks, or networking.' },
    { property: 'og:image', content: '/images/portfolio-icon.png' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ryannedbalek.com/Contact-Page' }
  ]
})
</script>

<style scoped>
.background-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: var(--bg-gradient);
  transition: background 0.3s ease;
}

.content-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 25px;
  max-width: 1000px;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
}

@media (max-width: 525px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
}
</style>
