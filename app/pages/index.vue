<template>
    <div class="min-h-screen">
        <!-- Header with mobile optimization -->
        <Header/>
        
        <!-- Main content with semantic HTML -->
        <main>
            <!-- Hero section -->
            <section>
                <Top />
            </section>
            
            <!-- Content sections with proper spacing -->
            <div class="space-y-16 md:space-y-20">
                <div class="px-4 md:px-8 lg:px-16 xl:px-24">
                    <!-- Why choose us section -->
                    <section>
                        <Whyus />
                    </section>
                    
                    <!-- Vehicle types section -->
                    <section>
                        <Cartype />
                    </section>
                    
                    <!-- Services section -->
                    <section>
                        <Services />
                    </section>
                </div>
                
                <!-- Blog section -->
                <section>
                    <Blog />
                </section>
                
                <!-- FAQ section -->
                <section>
                    <Questions />
                </section>
            </div>
        </main>
        
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
// SEO Meta Tags for Homepage - Optimized for performance and mobile
useHead({
    title: 'First Line Transport INC - Fast & Reliable Auto Transport Services',
    meta: [
        {
            name: 'description',
            content: 'Fast & reliable auto transport across the USA. Get instant quotes for open and enclosed car shipping with 30-day TruePrice guarantee. Licensed, insured, and trusted nationwide.'
        },
        {
            name: 'keywords',
            content: 'auto transport, car shipping, vehicle transport, fast car shipping, reliable auto transport, nationwide car shipping, open transport, enclosed transport, door to door car shipping, car carrier'
        },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'author', content: 'First Line Transport INC' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
    ],
    link: [
        { rel: 'canonical', href: 'https://fltransportinc.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: '//fltransportinc.com' },
        { rel: 'preload', as: 'image', href: '/first.jpg', type: 'image/jpeg' },
        { rel: 'preload', as: 'image', href: '/logo.png', type: 'image/png' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

// Open Graph & Social Media Meta - Enhanced for better sharing
useSeoMeta({
    ogTitle: 'First Line Transport INC - Fast & Reliable Auto Transport Services',
    ogDescription: 'Fast & reliable auto transport across the USA. Get instant quotes for open and enclosed car shipping with 30-day TruePrice guarantee. Licensed, insured, and trusted nationwide.',
    ogUrl: 'https://fltransportinc.com',
    ogImage: 'https://fltransportinc.com/social-share.jpg',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageAlt: 'First Line Transport - Professional Auto Transport Services',
    ogType: 'website',
    ogLocale: 'en_US',
    ogSiteName: 'First Line Transport INC',
    
    // Twitter Cards - Optimized
    twitterCard: 'summary_large_image',
    twitterTitle: 'First Line Transport INC - Fast & Reliable Auto Transport',
    twitterDescription: 'Fast & reliable auto transport across the USA. Get instant quotes with 30-day TruePrice guarantee.',
    twitterImage: 'https://fltransportinc.com/social-share.jpg',
    twitterImageAlt: 'First Line Transport - Professional Auto Transport Services',
    twitterSite: '@FirstLineTransport',
    twitterCreator: '@FirstLineTransport'
})

useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'First Line Transport INC',
    alternateName: 'First Line Transport',
    url: 'https://fltransportinc.com',
    logo: 'https://fltransportinc.com/logo.png',
    description: 'Professional auto transport and car shipping services across the United States with open and enclosed transport options',
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
        'https://www.youtube.com/FirstLineTransport'
    ]
})

// Service Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Auto Transport Services',
    serviceType: 'Vehicle Transportation',
    description: 'Professional auto transport and car shipping services including open transport, enclosed transport, and door-to-door delivery',
    provider: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        url: 'https://fltransportinc.com'
    },
    areaServed: {
        '@type': 'Country',
        name: 'United States'
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Auto Transport Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Open Auto Transport',
                    description: 'Cost-effective open carrier vehicle shipping'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Enclosed Auto Transport',
                    description: 'Premium enclosed carrier vehicle shipping'
                }
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Door-to-Door Car Shipping',
                    description: 'Convenient pickup and delivery at your location'
                }
            }
        ]
    }
})

// Website Schema
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'First Line Transport INC',
    url: 'https://fltransportinc.com',
    description: 'Professional auto transport and car shipping services nationwide',
    publisher: {
        '@type': 'Organization',
        name: 'First Line Transport INC'
    }
})

// Breadcrumb Schema for Homepage
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

// FAQ Schema for common questions
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does car shipping cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Car shipping costs vary based on distance, vehicle type, and transport method. Open transport typically ranges from $300-$1,800 depending on distance, while enclosed transport costs 30-60% more for premium protection.'
            }
        },
        {
            '@type': 'Question',
            name: 'How long does auto transport take?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Auto transport typically takes 1-7 days depending on distance. Short routes (under 500 miles) take 1-3 days, while cross-country shipments average 5-7 days.'
            }
        },
        {
            '@type': 'Question',
            name: 'Is my car insured during transport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, all vehicles are covered by carrier insurance during transport. We work with licensed and insured carriers that provide comprehensive cargo insurance coverage.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the difference between open and enclosed transport?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Open transport uses open-air trailers and is more cost-effective, while enclosed transport provides full protection in a covered trailer, ideal for luxury or classic cars.'
            }
        }
    ]
})

// LocalBusiness Schema for better local SEO
useJsonld({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fltransportinc.com/#business',
    name: 'First Line Transport INC',
    image: 'https://fltransportinc.com/logo.png',
    telephone: '+1-929-923-7706',
    url: 'https://fltransportinc.com',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060'
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday', 
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        opens: '08:00',
        closes: '20:00'
    },
    priceRange: '$300-$2500',
    serviceArea: {
        '@type': 'Country',
        name: 'United States'
    }
})
</script>