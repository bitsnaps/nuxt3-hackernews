import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
// If you have enabled Take Over Mode or installed the Volar, you can disable generating the shim for *.vue files:
typescript: {
    shim: false
  },
  experimental: {}
})
