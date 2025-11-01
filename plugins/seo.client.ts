export default defineNuxtPlugin(() => {
    // Performance monitoring for Core Web Vitals
    if (typeof window !== 'undefined') {
        // Add structured data for better search understanding
        const addStructuredData = (data: any) => {
            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.textContent = JSON.stringify(data)
            document.head.appendChild(script)
        }

        // Add global business hours schema
        addStructuredData({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://fltransportinc.com/#localbusiness',
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
                            description: 'Cost-effective open carrier vehicle shipping nationwide'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Enclosed Auto Transport',
                            description: 'Premium enclosed carrier vehicle shipping for luxury cars'
                        }
                    }
                ]
            }
        })

        // Add performance monitoring
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                // Track Core Web Vitals for SEO
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime)
                }
                if (entry.entryType === 'first-input') {
                    console.log('FID:', (entry as any).processingStart - entry.startTime)
                }
                if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                    console.log('CLS:', (entry as any).value)
                }
            }
        })

        // Observe performance metrics
        try {
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
        } catch (e) {
            // Fallback for browsers that don't support all entry types
            console.log('Performance observer not fully supported')
        }
    }

    // Add click tracking for internal links (for SEO analytics)
    if (typeof window !== 'undefined') {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement
            const link = target.closest('a')

            if (link && link.hostname === window.location.hostname) {
                // Track internal link clicks for SEO insights
                console.log('Internal link clicked:', link.href)
            }
        })
    }
})