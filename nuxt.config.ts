// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['@/assets/main.css',],
  ui: {
    colorMode: false
  },
  app: {
    head: {
      title: 'First Line Transport INC',
      link: [
        { rel: "icon", type: "image/png", href: "favicon-16x16.png" },
        { rel: "icon", type: "image/png", href: "favicon-32x32.png" },
      ]
    }
  }
})