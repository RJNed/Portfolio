// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt'],
  devtools: { enabled: false },
  css: ['@/assets/css/global.css', '@/assets/css/theme.css'],
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var defaultTheme = theme || (systemPrefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', defaultTheme);
              } catch (e) {
                // Fallback to light theme if localStorage is not available
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `,
          type: 'text/javascript'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_EMAILJS_PUBLIC_KEY
    }
  }
})

