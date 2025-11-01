# SEO Composable Usage Examples

## Basic Page SEO Setup

```vue
<script setup lang="ts">
const { generateSEOConfig, generateBreadcrumbs, generateArticleSchema } = useSEO()

// Generate SEO configuration
const seoConfig = generateSEOConfig({
  title: 'Open Auto Transport - Affordable Car Shipping',
  description: 'Open auto transport is the most cost-effective way to ship your car. Safe, reliable, and trusted by thousands.',
  path: '/blogs/open',
  image: '/open.jpg',
  type: 'article',
  keywords: ['open auto transport', 'car shipping', 'vehicle transport']
})

// Apply SEO configuration
useHead(seoConfig.head)
useSeoMeta(seoConfig.seoMeta)

// Add breadcrumb schema
useJsonld(generateBreadcrumbs([
  { name: 'Home', item: 'https://fltransportinc.com' },
  { name: 'Blog', item: 'https://fltransportinc.com/blogs' },
  { name: 'Open Transport' }
]))

// Add article schema
useJsonld(generateArticleSchema({
  headline: 'Open Auto Transport - Affordable Car Shipping',
  description: 'Complete guide to open auto transport services',
  image: '/open.jpg',
  datePublished: '2024-01-15',
  url: 'https://fltransportinc.com/blogs/open'
}))
</script>
```

## Service Page SEO

```vue
<script setup lang="ts">
const { generateSEOConfig, generateServiceSchema, generateFAQSchema } = useSEO()

// Service page SEO
const seoConfig = generateSEOConfig({
  title: 'Door-to-Door Car Shipping Service',
  description: 'Convenient door-to-door car shipping with pickup and delivery at your location.',
  path: '/blogs/door-to-door',
  keywords: ['door to door car shipping', 'auto transport pickup', 'car delivery service']
})

useHead(seoConfig.head)
useSeoMeta(seoConfig.seoMeta)

// Add service schema
useJsonld(generateServiceSchema({
  name: 'Door-to-Door Car Shipping',
  description: 'Convenient pickup and delivery directly at your specified locations',
  serviceType: 'Auto Transport Service'
}))

// Add FAQ schema
useJsonld(generateFAQSchema([
  {
    question: 'How does door-to-door car shipping work?',
    answer: 'Our drivers pick up your vehicle at your specified location and deliver it directly to your destination.'
  }
]))
</script>
```

## Blog Article SEO

```vue
<script setup lang="ts">
const { generateSEOConfig, generateArticleSchema, generateBreadcrumbs } = useSEO()

const article = {
  title: 'How to Prepare Your Car for Auto Transport',
  description: 'Essential checklist and tips for preparing your vehicle before shipping',
  publishDate: '2024-10-15',
  image: '/prepare.jpg'
}

// Article SEO setup
const seoConfig = generateSEOConfig({
  title: article.title,
  description: article.description,
  path: '/blogs/prepare',
  image: article.image,
  type: 'article',
  publishedTime: article.publishDate,
  keywords: ['car preparation', 'auto transport checklist', 'vehicle shipping prep']
})

useHead(seoConfig.head)
useSeoMeta(seoConfig.seoMeta)

// Article structured data
useJsonld(generateArticleSchema({
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.publishDate,
  url: 'https://fltransportinc.com/blogs/prepare'
}))

// Breadcrumbs
useJsonld(generateBreadcrumbs([
  { name: 'Home', item: 'https://fltransportinc.com' },
  { name: 'Blog', item: 'https://fltransportinc.com/blogs' },
  { name: article.title }
]))
</script>
```

## Helper Functions Usage

```vue
<script setup lang="ts">
const { 
  generateTitle, 
  generateDescription, 
  generateOGImage, 
  generateCanonical 
} = useSEO()

// Generate optimized title
const pageTitle = generateTitle('Auto Transport Pricing Guide')
// Result: "Auto Transport Pricing Guide | First Line Transport INC"

// Generate optimized description
const metaDescription = generateDescription(
  'Learn about all the factors that affect auto transport pricing including distance, vehicle type, transport method, and seasonal variations. Get accurate quotes today.'
)
// Result: Truncated to 160 characters if needed

// Generate Open Graph image URL
const ogImageUrl = generateOGImage('/pricing.webp')
// Result: "https://fltransportinc.com/pricing.webp"

// Generate canonical URL
const canonicalUrl = generateCanonical('/blogs/pricing')
// Result: "https://fltransportinc.com/blogs/pricing"
</script>
```

## Schema Generation Examples

```vue
<script setup lang="ts">
const { 
  generateFAQSchema, 
  generateServiceSchema, 
  generateReviewSchema 
} = useSEO()

// FAQ Schema
const faqSchema = generateFAQSchema([
  {
    question: 'How much does car shipping cost?',
    answer: 'Car shipping costs vary based on distance, vehicle type, and transport method.'
  },
  {
    question: 'How long does auto transport take?',
    answer: 'Auto transport typically takes 1-7 days depending on distance.'
  }
])

// Service Schema
const serviceSchema = generateServiceSchema({
  name: 'Enclosed Auto Transport',
  description: 'Premium enclosed carrier vehicle shipping for luxury and classic cars',
  serviceType: 'Vehicle Transportation'
})

// Review Schema (when you have reviews)
const reviewSchema = generateReviewSchema({
  itemName: 'First Line Transport INC',
  ratingValue: 4.8,
  reviewCount: 150
})

// Apply schemas
useJsonld(faqSchema)
useJsonld(serviceSchema)
useJsonld(reviewSchema)
</script>
```

## Complete Page Example

```vue
<template>
  <div>
    <!-- Breadcrumb Navigation -->
    <nav aria-label="Breadcrumb">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <NuxtLink to="/" itemprop="item">
            <span itemprop="name">Home</span>
          </NuxtLink>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">{{ pageTitle }}</span>
          <meta itemprop="position" content="2" />
        </li>
      </ol>
    </nav>

    <!-- Main Content -->
    <article>
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
      
      <!-- Content here -->
    </article>
  </div>
</template>

<script setup lang="ts">
const { generateSEOConfig, generateBreadcrumbs, generateArticleSchema } = useSEO()

const pageTitle = 'Complete Auto Transport Guide'
const pageDescription = 'Everything you need to know about auto transport services, pricing, and how to choose the right shipping method for your vehicle.'

// Complete SEO setup
const seoConfig = generateSEOConfig({
  title: pageTitle,
  description: pageDescription,
  path: '/blogs/complete-guide',
  image: '/guide.jpg',
  type: 'article',
  keywords: ['auto transport guide', 'car shipping guide', 'vehicle transport tips']
})

useHead(seoConfig.head)
useSeoMeta(seoConfig.seoMeta)

// Structured data
useJsonld(generateBreadcrumbs([
  { name: 'Home', item: 'https://fltransportinc.com' },
  { name: pageTitle }
]))

useJsonld(generateArticleSchema({
  headline: pageTitle,
  description: pageDescription,
  image: '/guide.jpg',
  datePublished: '2024-11-01',
  url: 'https://fltransportinc.com/blogs/complete-guide'
}))
</script>
```

This composable provides a clean, reusable way to handle SEO across all pages while maintaining consistency and following best practices.