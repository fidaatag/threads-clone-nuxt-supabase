// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  },
  devtools: { enabled: true }
})
