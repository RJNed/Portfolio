// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt'],
  devtools: { enabled: false },
  css: ['@/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000/api'  // Base URL for your API
    }
  }
})
