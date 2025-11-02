<template>
  <div>
    <NuxtPage/>
    <Modal />
    <Consultant />
  </div>
</template>

<script setup lang="ts">
// Global SEO Configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// Global Open Graph and Social Media Meta
useSeoMeta({
  ogSiteName: 'First Line Transport INC',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: '@FirstLineTransport'
})

// Global Organization Schema
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.fltransportinc.com/#organization',
  name: 'First Line Transport INC',
  alternateName: 'First Line Transport',
  url: 'https://www.fltransportinc.com',
  logo: 'https://www.fltransportinc.com/logo.png',
  description: 'Professional auto transport and car shipping services across the United States with fast, reliable delivery and TruePrice guarantee.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-929-923-7706',
    contactType: 'Customer Service',
    availableLanguage: 'English',
    areaServed: 'US'
  },
  sameAs: [
    'https://www.facebook.com/FirstLineTransport',
    'https://www.youtube.com/FirstLineTransport',
    'https://twitter.com/FirstLineTransport'
  ]
})

// Global Website Schema
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.fltransportinc.com/#website',
  name: 'First Line Transport INC',
  url: 'https://www.fltransportinc.com',
  description: 'Fast & reliable auto transport across the USA. Professional car shipping services with TruePrice guarantee.',
  publisher: {
    '@id': 'https://www.fltransportinc.com/#organization'
  }
})
</script>