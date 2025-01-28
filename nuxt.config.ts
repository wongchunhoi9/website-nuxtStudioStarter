// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  image: {
    // Options
  },
  vite: { 
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2024-04-03',
})

