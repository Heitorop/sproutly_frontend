// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },

  modules: ['@nuxt/ui'],

  css: ['~/assets/styles/main.css'],

})
