// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/seo', 'nuxt-jsonld'],
  css: ['@/assets/main.css',],
  ui: {
    colorMode: false,
  },
  app: {
    head: {
      title: 'First Line Transport INC',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'First Line INC' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      htmlAttrs: {
        lang: 'en',
      }
    }
  },
  nitro: {
  serverAssets: [
    { baseName: 'cities', dir: 'node_modules/@app/cities' }
  ]
}
})