export const useSEO = () => {
  // Generate SEO-friendly title
  const generateTitle = (pageTitle: string, includeCompany = true) => {
    const companyName = 'First Line Transport INC'
    return includeCompany ? `${pageTitle} | ${companyName}` : pageTitle
  }

  // Generate meta description with optimal length
  const generateDescription = (description: string, maxLength = 160) => {
    if (description.length <= maxLength) return description
    return description.substring(0, maxLength - 3) + '...'
  }

  // Generate Open Graph image URL
  const generateOGImage = (imagePath?: string) => {
    const baseUrl = 'https://fltransportinc.com'
    return imagePath ? `${baseUrl}${imagePath}` : `${baseUrl}/social-share.jpg`
  }

  // Generate canonical URL
  const generateCanonical = (path: string) => {
    const baseUrl = 'https://fltransportinc.com'
    return `${baseUrl}${path}`
  }

  // Generate SEO configuration object
  const generateSEOConfig = (options: {
    title: string
    description: string
    path: string
    image?: string
    type?: 'website' | 'article'
    publishedTime?: string
    modifiedTime?: string
    keywords?: string[]
  }) => {
    const {
      title,
      description,
      path,
      image,
      type = 'website',
      publishedTime,
      modifiedTime,
      keywords = []
    } = options

    return {
      head: {
        title: generateTitle(title),
        meta: [
          { name: 'description', content: generateDescription(description) },
          { name: 'keywords', content: keywords.join(', ') },
          { name: 'robots', content: 'index, follow, max-image-preview:large' },
          { name: 'author', content: 'First Line Transport INC' }
        ],
        link: [
          { rel: 'canonical', href: generateCanonical(path) }
        ]
      },
      seoMeta: {
        ogTitle: title,
        ogDescription: generateDescription(description),
        ogUrl: generateCanonical(path),
        ogImage: generateOGImage(image),
        ogImageAlt: title,
        ogType: type,
        ogLocale: 'en_US',
        
        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: generateDescription(description, 200),
        twitterImage: generateOGImage(image),
        twitterImageAlt: title,
        
        ...(publishedTime && { articlePublishedTime: publishedTime }),
        ...(modifiedTime && { articleModifiedTime: modifiedTime })
      }
    }
  }

  // Generate breadcrumb schema
  const generateBreadcrumbs = (items: Array<{ name: string; item?: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(item.item && { item: item.item })
      }))
    }
  }

  // Generate article schema
  const generateArticleSchema = (options: {
    headline: string
    description: string
    image: string
    datePublished: string
    dateModified?: string
    author?: string
    url: string
  }) => {
    const {
      headline,
      description,
      image,
      datePublished,
      dateModified,
      author = 'First Line Transport Team',
      url
    } = options

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline,
      description,
      image: generateOGImage(image),
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Organization',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: 'First Line Transport INC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://fltransportinc.com/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }
    }
  }

  // Generate FAQ schema
  const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }

  // Generate service schema
  const generateServiceSchema = (options: {
    name: string
    description: string
    serviceType: string
    areaServed?: string
    provider?: string
  }) => {
    const {
      name,
      description,
      serviceType,
      areaServed = 'United States',
      provider = 'First Line Transport INC'
    } = options

    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      serviceType,
      provider: {
        '@type': 'Organization',
        name: provider,
        url: 'https://fltransportinc.com'
      },
      areaServed: {
        '@type': 'Country',
        name: areaServed
      }
    }
  }

  // Generate review schema
  const generateReviewSchema = (options: {
    itemName: string
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }) => {
    const {
      itemName,
      ratingValue,
      reviewCount,
      bestRating = 5,
      worstRating = 1
    } = options

    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'First Line Transport INC',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue,
        reviewCount,
        bestRating,
        worstRating
      }
    }
  }

  return {
    generateTitle,
    generateDescription,
    generateOGImage,
    generateCanonical,
    generateSEOConfig,
    generateBreadcrumbs,
    generateArticleSchema,
    generateFAQSchema,
    generateServiceSchema,
    generateReviewSchema
  }
}