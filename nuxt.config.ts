// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4,
  },
  vite: { 
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2024-04-03',
})
