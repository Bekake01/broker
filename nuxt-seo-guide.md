# Nuxt SEO Optimization Guide

## Table of Contents
1. [Global Configuration](#global-configuration)
2. [Page-Specific Optimization](#page-specific-optimization)
3. [Technical Implementation](#technical-implementation)

---

## Global Configuration

### 1. Install Required Modules

```bash
npm install @nuxtjs/seo @nuxtjs/sitemap nuxt-jsonld
```

### 2. Nuxt Config Setup (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    'nuxt-jsonld'
  ],

  site: {
    url: 'https://fltransportinc.com',
    name: 'FL Transport Inc',
    description: 'Professional auto transport and car shipping services across the United States',
    defaultLocale: 'en'
  },

  sitemap: {
    strictNuxtContentPaths: true,
    exclude: [
      '/admin/**',
      '/thank-you',
      '/404'
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
          loc: '/open-transport',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/enclosed-transport',
          lastmod: new Date(),
          changefreq: 'monthly',
          priority: 0.8
        },
        // Add other shipping method pages
        {
          loc: '/insights',
          lastmod: new Date(),
          changefreq: 'weekly',
          priority: 0.7
        }
      ]
    }
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin', '/api'],
    Sitemap: 'https://fltransportinc.com/sitemap.xml'
  }
})
```

### 3. Global Meta Tags (`app.vue` or layout)

```vue
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  ogSiteName: 'FL Transport Inc',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>
```

### 4. Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /thank-you

Sitemap: https://fltransportinc.com/sitemap.xml
```

### 5. AI-Readable Content

Create `public/ai.json`:

```json
{
  "organization": "FL Transport Inc",
  "industry": "Auto Transport & Car Shipping",
  "topics": [
    "Auto Transport",
    "Car Shipping",
    "Vehicle Logistics",
    "Open Transport",
    "Enclosed Transport",
    "Nationwide Car Shipping"
  ],
  "services": [
    "Open Auto Transport",
    "Enclosed Auto Transport",
    "Door-to-Door Car Shipping",
    "Terminal-to-Terminal Shipping"
  ],
  "service_areas": "United States (Nationwide)",
  "main_pages": [
    "https://fltransportinc.com",
    "https://fltransportinc.com/open-transport",
    "https://fltransportinc.com/enclosed-transport",
    "https://fltransportinc.com/insights"
  ],
  "contact": {
    "website": "https://fltransportinc.com",
    "country": "United States"
  }
}
```

---

## Page-Specific Optimization

### Homepage (`pages/index.vue`)

```vue
<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: 'FL Transport Inc - Professional Auto Transport & Car Shipping Services',
  meta: [
    {
      name: 'description',
      content: 'Reliable nationwide auto transport and car shipping services. Get instant quotes for open and enclosed vehicle transport across the United States.'
    },
    {
      name: 'keywords',
      content: 'auto transport, car shipping, vehicle transport, nationwide shipping, open transport, enclosed transport'
    },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fltransportinc.com/' }
  ]
})

// Open Graph
useSeoMeta({
  ogTitle: 'FL Transport Inc - Professional Auto Transport Services',
  ogDescription: 'Reliable nationwide auto transport and car shipping services. Get instant quotes for open and enclosed vehicle transport.',
  ogUrl: 'https://fltransportinc.com',
  ogImage: 'https://fltransportinc.com/social-share.jpg',
  ogLocale: 'en_US',
  
  // Twitter Cards
  twitterTitle: 'FL Transport Inc - Professional Auto Transport Services',
  twitterDescription: 'Reliable nationwide auto transport and car shipping services.',
  twitterImage: 'https://fltransportinc.com/social-share.jpg',
  twitterCard: 'summary_large_image'
})

// Structured Data - Organization
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FL Transport Inc',
  url: 'https://fltransportinc.com',
  logo: 'https://fltransportinc.com/logo.png',
  description: 'Professional auto transport and car shipping services across the United States',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: 'English'
  }
})

// Breadcrumbs
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fltransportinc.com'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Main heading - only ONE H1 per page -->
    <h1>Professional Auto Transport & Car Shipping Services</h1>
    
    <!-- Sub-headings follow logical hierarchy -->
    <section>
      <h2>Our Transport Services</h2>
      
      <article>
        <h3>Open Auto Transport</h3>
        <p>Cost-effective car shipping solution...</p>
        <!-- Link with rel attribute -->
        <NuxtLink to="/open-transport" rel="bookmark">
          Learn more about Open Transport
        </NuxtLink>
      </article>
      
      <article>
        <h3>Enclosed Auto Transport</h3>
        <p>Premium protection for your vehicle...</p>
        <NuxtLink to="/enclosed-transport" rel="bookmark">
          Learn more about Enclosed Transport
        </NuxtLink>
      </article>
    </section>

    <!-- Images with proper attributes -->
    <img
      src="/images/auto-transport-truck.jpg"
      alt="Professional auto transport truck carrying vehicles"
      loading="eager"
      width="1200"
      height="800"
      title="FL Transport Inc - Auto Transport Services"
    />
  </div>
</template>
```

### Shipping Method Page Example (`pages/open-transport.vue`)

```vue
<script setup lang="ts">
useHead({
  title: 'Open Auto Transport - Affordable Car Shipping | FL Transport Inc',
  meta: [
    {
      name: 'description',
      content: 'Open auto transport is the most cost-effective way to ship your car. Safe, reliable, and trusted by thousands. Get your free quote today.'
    },
    {
      name: 'keywords',
      content: 'open auto transport, open car shipping, affordable vehicle transport, car carrier'
    },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fltransportinc.com/open-transport' }
  ]
})

useSeoMeta({
  ogTitle: 'Open Auto Transport - Affordable Car Shipping',
  ogDescription: 'Open auto transport is the most cost-effective way to ship your car. Safe, reliable, and trusted by thousands.',
  ogUrl: 'https://fltransportinc.com/open-transport',
  ogImage: 'https://fltransportinc.com/images/open-transport-og.jpg',
  ogLocale: 'en_US',
  
  twitterTitle: 'Open Auto Transport - Affordable Car Shipping',
  twitterDescription: 'Open auto transport is the most cost-effective way to ship your car.',
  twitterImage: 'https://fltransportinc.com/images/open-transport-twitter.jpg',
  twitterCard: 'summary_large_image'
})

// Service Schema
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Open Auto Transport',
  provider: {
    '@type': 'Organization',
    name: 'FL Transport Inc',
    url: 'https://fltransportinc.com'
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  description: 'Cost-effective open auto transport services for cars, trucks, and SUVs nationwide'
})

// Breadcrumbs
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fltransportinc.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Open Transport',
      item: 'https://fltransportinc.com/open-transport'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Breadcrumb navigation -->
    <nav aria-label="Breadcrumb">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <NuxtLink to="/" itemprop="item">
            <span itemprop="name">Home</span>
          </NuxtLink>
          <meta itemprop="position" content="1" />
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <span itemprop="name">Open Transport</span>
          <meta itemprop="position" content="2" />
        </li>
      </ol>
    </nav>

    <!-- Only ONE H1 per page -->
    <h1>Open Auto Transport - Affordable & Reliable Car Shipping</h1>
    
    <section>
      <h2>What is Open Auto Transport?</h2>
      <p>Open auto transport is the most popular and cost-effective method...</p>
      
      <!-- Image with descriptive filename and all attributes -->
      <img
        src="/images/open-auto-transport-carrier.jpg"
        alt="Open car carrier transporting multiple vehicles on highway"
        loading="lazy"
        width="800"
        height="600"
        title="Open Auto Transport Service"
      />
    </section>

    <section>
      <h2>Benefits of Open Transport</h2>
      <h3>Cost-Effective Solution</h3>
      <p>Save money while ensuring safe delivery...</p>
      
      <h3>Wide Availability</h3>
      <p>More carriers available for faster pickup...</p>
    </section>

    <!-- Internal linking -->
    <section>
      <h2>Compare Transport Methods</h2>
      <p>Not sure if open transport is right for you?</p>
      <NuxtLink to="/enclosed-transport" rel="bookmark">
        Compare with Enclosed Transport
      </NuxtLink>
    </section>
  </div>
</template>
```

### Insights/Blog Page (`pages/insights/[slug].vue`)

```vue
<script setup lang="ts">
const route = useRoute()

// Example: Dynamic meta based on article
const article = {
  title: 'How to Prepare Your Car for Auto Transport',
  description: 'Essential checklist and tips for preparing your vehicle before shipping',
  publishDate: '2024-10-15',
  author: 'FL Transport Team',
  image: '/images/insights/car-preparation.jpg'
}

useHead({
  title: `${article.title} | FL Transport Inc`,
  meta: [
    { name: 'description', content: article.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: article.author }
  ],
  link: [
    { rel: 'canonical', href: `https://fltransportinc.com/insights/${route.params.slug}` }
  ]
})

useSeoMeta({
  ogTitle: article.title,
  ogDescription: article.description,
  ogUrl: `https://fltransportinc.com/insights/${route.params.slug}`,
  ogImage: `https://fltransportinc.com${article.image}`,
  ogType: 'article',
  ogLocale: 'en_US',
  
  twitterTitle: article.title,
  twitterDescription: article.description,
  twitterImage: `https://fltransportinc.com${article.image}`,
  twitterCard: 'summary_large_image'
})

// Article Schema
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: `https://fltransportinc.com${article.image}`,
  datePublished: article.publishDate,
  author: {
    '@type': 'Organization',
    name: 'FL Transport Inc'
  },
  publisher: {
    '@type': 'Organization',
    name: 'FL Transport Inc',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fltransportinc.com/logo.png'
    }
  }
})

// Breadcrumbs
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://fltransportinc.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insights',
      item: 'https://fltransportinc.com/insights'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: article.title,
      item: `https://fltransportinc.com/insights/${route.params.slug}`
    }
  ]
})
</script>

<template>
  <article>
    <nav aria-label="Breadcrumb">
      <ol>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/insights">Insights</NuxtLink></li>
        <li>{{ article.title }}</li>
      </ol>
    </nav>

    <h1>{{ article.title }}</h1>
    
    <img
      :src="article.image"
      :alt="article.title"
      loading="eager"
      width="1200"
      height="630"
      :title="article.title"
    />

    <section>
      <h2>Essential Preparation Steps</h2>
      <!-- Content here -->
    </section>
  </article>
</template>
```

### FAQ Section Example (can be added to any page)

```vue
<script setup lang="ts">
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does auto transport take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Auto transport typically takes 1-7 days depending on distance. Cross-country shipments average 5-7 days, while shorter distances may take 1-3 days.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my car insured during transport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all vehicles are covered by carrier insurance during transport. We work with licensed and insured carriers that provide cargo insurance.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between open and enclosed transport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open transport uses open-air trailers and is more affordable, while enclosed transport provides full protection in a covered trailer, ideal for luxury or classic cars.'
      }
    }
  ]
})
</script>

<template>
  <section>
    <h2>Frequently Asked Questions</h2>
    
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">How long does auto transport take?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Auto transport typically takes 1-7 days depending on distance...</p>
      </div>
    </div>

    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Is my car insured during transport?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">Yes, all vehicles are covered by carrier insurance...</p>
      </div>
    </div>
  </section>
</template>
```

---

## Technical Implementation

### 1. Image Optimization

#### Use Descriptive Filenames
❌ Bad: `IMG_1234.jpg`, `photo.png`  
✅ Good: `open-auto-transport-truck.jpg`, `enclosed-car-carrier.jpg`

#### Image Component with All Attributes

```vue
<template>
  <!-- Hero image - load immediately -->
  <img
    src="/images/auto-transport-hero.jpg"
    alt="Professional auto transport service with modern car carriers"
    loading="eager"
    width="1920"
    height="1080"
    title="FL Transport Inc - Nationwide Auto Transport"
  />

  <!-- Below-fold images - lazy load -->
  <img
    src="/images/enclosed-transport-service.jpg"
    alt="Enclosed auto transport trailer protecting luxury vehicles"
    loading="lazy"
    width="800"
    height="600"
    title="Enclosed Auto Transport Service"
  />
</template>
```

#### Modern Image Formats (Nuxt Image Module)

```bash
npm install @nuxt/image
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  
  image: {
    formats: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  }
})
```

```vue
<template>
  <!-- Automatically optimized and responsive -->
  <NuxtImg
    src="/images/car-shipping.jpg"
    alt="Car shipping service"
    loading="lazy"
    width="800"
    height="600"
    format="webp"
  />
</template>
```

### 2. Link Best Practices

```vue
<template>
  <!-- Internal navigation links -->
  <NuxtLink to="/open-transport" rel="bookmark">
    Open Transport Services
  </NuxtLink>

  <!-- External links -->
  <a href="https://example.com" rel="external noopener noreferrer" target="_blank">
    Partner Site
  </a>

  <!-- Icon-only link with accessible text -->
  <a href="/contact" aria-label="Contact FL Transport Inc">
    <span class="sr-only">Contact Us</span>
    <Icon name="mail" />
  </a>

  <!-- Download link -->
  <a href="/brochure.pdf" download rel="noopener">
    Download Brochure
  </a>
</template>

<style>
/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
```

### 3. Page Speed Optimization

#### Code Splitting & Lazy Loading

```vue
<script setup lang="ts">
// Lazy load heavy components
const HeavyComponent = defineAsyncComponent(() => 
  import('@/components/HeavyComponent.vue')
)
</script>

<template>
  <div>
    <!-- Load immediately -->
    <Hero />
    
    <!-- Load when visible -->
    <LazyTestimonials />
    
    <!-- Conditional lazy load -->
    <HeavyComponent v-if="showComponent" />
  </div>
</template>
```

#### Optimize Third-Party Scripts

```vue
<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://analytics.example.com/script.js',
      defer: true, // Load after page parse
      async: true  // Don't block rendering
    }
  ]
})
</script>
```

#### Font Loading Optimization

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
    }
  ]
})
</script>
```

### 4. Core Web Vitals

#### Cumulative Layout Shift (CLS)
- Always specify `width` and `height` for images
- Reserve space for dynamic content
- Avoid inserting content above existing content

```vue
<template>
  <!-- Reserve space to prevent layout shift -->
  <div class="video-container" style="aspect-ratio: 16/9;">
    <iframe src="..."></iframe>
  </div>
</template>
```

#### Largest Contentful Paint (LCP)
- Optimize hero images
- Use `loading="eager"` for above-fold images
- Preload critical resources

```vue
<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/hero-image.jpg'
    }
  ]
})
</script>
```

### 5. Internal Linking Strategy

```vue
<template>
  <article>
    <h2>Choose Your Transport Method</h2>
    
    <!-- Link to related services -->
    <p>
      Our <NuxtLink to="/open-transport">open transport service</NuxtLink> 
      is perfect for most vehicles, while 
      <NuxtLink to="/enclosed-transport">enclosed transport</NuxtLink> 
      offers premium protection.
    </p>

    <!-- Link to relevant insights -->
    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li>
          <NuxtLink to="/insights/prepare-car-for-shipping">
            How to Prepare Your Car for Shipping
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/insights/open-vs-enclosed">
            Open vs Enclosed Transport: Which is Right for You?
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </article>
</template>
```

### 6. 301 Redirects & Canonical URLs

#### Server-side redirects (`server/middleware/redirects.ts`)

```typescript
export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Redirect old URLs to new ones
  const redirects: Record<string, string> = {
    '/old-page': '/new-page',
    '/services/shipping': '/open-transport'
  }
  
  if (redirects[url.pathname]) {
    return sendRedirect(event, redirects[url.pathname], 301)
  }
})
```

#### Canonical URL for duplicate content

```vue
<script setup lang="ts">
// If you have similar pages, set canonical to preferred version
useHead({
  link: [
    { 
      rel: 'canonical', 
      href: 'https://fltransportinc.com/open-transport' 
    }
  ]
})
</script>
```

### 7. Robots Meta Tags for Specific Pages

```vue
<script setup lang="ts">
// Thank you page - don't index
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Regular page - index and follow
useHead({
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
```

### 8. SSL/HTTPS

Ensure your domain has SSL certificate installed. All URLs should use `https://`

```typescript
// Force HTTPS redirect in nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/**': {
      redirect: {
        statusCode: 301
      }
    }
  }
})
```

Or use server middleware:

```typescript
// server/middleware/force-https.ts
export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  if (url.protocol === 'http:' && !url.hostname.includes('localhost')) {
    return sendRedirect(event, url.href.replace('http:', 'https:'), 301)
  }
})
```

---

## SEO Checklist

### Global Requirements
- [ ] Install `@nuxtjs/seo`, `@nuxtjs/sitemap`, `nuxt-jsonld`
- [ ] Configure `nuxt.config.ts` with site info
- [ ] Create `sitemap.xml` configuration
- [ ] Create `robots.txt` in `/public`
- [ ] Create `/ai.json` for AI crawlers
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure global meta tags
- [ ] Set up 301 redirects for old URLs

### Every Page Needs
- [ ] Unique `<title>` tag (50-60 characters)
- [ ] Unique meta `description` (150-160 characters)
- [ ] Canonical URL
- [ ] Only ONE `<h1>` tag
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Open Graph tags (title, description, image, url)
- [ ] Twitter Card tags
- [ ] Robots meta tag
- [ ] Breadcrumb navigation with schema
- [ ] Structured data (Organization, Service, Article, FAQ)

### Images
- [ ] Descriptive filename (not IMG_1234.jpg)
- [ ] `alt` attribute with descriptive text
- [ ] `width` and `height` attributes
- [ ] `loading="eager"` for above-fold, `"lazy"` for below
- [ ] `title` attribute
- [ ] Modern formats (WebP, AVIF)

### Links
- [ ] Descriptive anchor text
- [ ] `rel` attribute for external links
- [ ] Hidden text for icon-only links
- [ ] Internal links to related pages

### Performance
- [ ] Optimize images (compress, modern formats)
- [ ] Lazy load below-fold content
- [ ] Code splitting for heavy components
- [ ] Defer/async third-party scripts
- [ ] Preconnect to external domains
- [ ] Reserve space for dynamic content (CLS)

---

## Quick Reference: Meta Tags Template

```vue
<script setup lang="ts">
useHead({
  title: 'Page Title - FL Transport Inc',
  meta: [
    { name: 'description', content: 'Page description here' },
    { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://fltransportinc.com/page-url' }
  ]
})

useSeoMeta({
  // Open Graph
  ogTitle: 'Page Title',
  ogDescription: 'Page description',
  ogUrl: 'https://fltransportinc.com/page-url',
  ogImage: 'https://fltransportinc.com/images/og-image.jpg',
  ogType: 'website',
  ogLocale: 'en_US',
  
  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: 'Page Title',
  twitterDescription: 'Page description',
  twitterImage: 'https://fltransportinc.com/images/twitter-image.jpg'
})

// Schema markup
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  // ... schema data
})
</script>
```

---

## Additional Resources

- [Nuxt SEO Module Docs](https://nuxtseo.com/)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Note:** Replace all placeholder URLs, images, and content with your actual fltransportinc.com data. Test all implementations in Google Search Console and validate structured data with Google's Rich Results Test.