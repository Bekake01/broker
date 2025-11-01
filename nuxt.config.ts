// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // SEO and Performance Modules
  modules: [
    '@nuxt/image', 
    '@nuxt/ui', 
    '@nuxtjs/seo',
    '@nuxtjs/sitemap', 
    'nuxt-jsonld'
  ],
  
  css: ['@/assets/main.css'],
  
  ui: {
    colorMode: false,
  },

  // Global Site Configuration for SEO
  site: {
    url: 'https://fltransportinc.com',
    name: 'First Line Transport INC',
    description: 'Fast & reliable auto transport across the USA. Professional car shipping services with TruePrice guarantee, licensed carriers, and nationwide coverage.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    },
    twitter: '@FirstLineTransport',
    trailingSlash: false
  },

  // SEO Configuration
  seo: {
    redirectToCanonicalSiteUrl: true,
    fallbackTitle: 'First Line Transport INC - Professional Auto Transport Services',
    templateParams: {
      separator: ' | ',
      siteName: 'First Line Transport INC'
    }
  },

  // Sitemap Configuration
  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true,
    defaultSitemapsChunkSize: 1000,
    exclude: [
      '/admin/**',
      '/api/**',
      '/thank-you',
      '/404',
      '/_nuxt/**'
    ],
    urls: async () => {
      return [
        {
          loc: '/',
          lastmod: new Date(),
          changefreq: 'weekly',
          priority: 1.0
        },
        {
          loc: '/blogs/open',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/blogs/enclosed',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/blogs/door-to-door',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/blogs/hawaii-alaska',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/blogs/pricing',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blogs/prepare',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blogs/mistakes',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.7
        },
        {
          loc: '/blogs/transport_type',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.7
        }
      ]
    }
  },

  // Robots Configuration
  // robots: {
    
  //   Allow: '/',
  //   Sitemap: 'https://fltransportinc.com/sitemap.xml'
  // },

  // Image Optimization
  image: {
    formats: ['webp', 'avif', 'jpeg'],
    quality: 85,
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 1920,
          height: 1080
        }
      },
      card: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 600,
          height: 400
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 300,
          height: 200
        }
      }
    }
  },

  // App Configuration
  app: {
    head: {
      title: 'First Line Transport INC - Fast & Reliable Auto Transport Services',
      titleTemplate: '%s | First Line Transport INC',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'First Line Transport' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
        { name: 'application-name', content: 'First Line Transport INC' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: '//fltransportinc.com' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  // Route Rules for Performance
  routeRules: {
    '/': { 
      prerender: true,
      headers: { 
        'Cache-Control': 's-maxage=31536000',
        'X-Robots-Tag': 'index, follow, max-image-preview:large'
      }
    },
    '/blogs/**': { 
      prerender: true,
      headers: { 
        'Cache-Control': 's-maxage=31536000',
        'X-Robots-Tag': 'index, follow, max-image-preview:large'
      }
    },
    '/api/**': { 
      headers: { 
        'X-Robots-Tag': 'noindex, nofollow' 
      } 
    },
    '/admin/**': { 
      headers: { 
        'X-Robots-Tag': 'noindex, nofollow' 
      } 
    }
  },

  // Performance Optimizations
  experimental: {
    payloadExtraction: false,
    // inlineSSRStyles: false
  },

  nitro: {
    serverAssets: [
      { baseName: 'cities', dir: 'node_modules/@app/cities' }
    ],
    compressPublicAssets: true,
    minify: true
  },

  // Build Optimizations
  build: {
    transpile: ['@nuxtjs/seo']
  }
})