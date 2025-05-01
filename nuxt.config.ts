// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt'],
  devtools: { enabled: false },
  css: ['@/assets/css/global.css'],
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_EMAILJS_PUBLIC_KEY
    }
  }
})

