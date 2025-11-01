export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Define redirects for old URLs or common variations
  const redirects: Record<string, string> = {
    // Old blog structure redirects
    '/blog/open-transport': '/blogs/open',
    '/blog/enclosed-transport': '/blogs/enclosed',
    '/blog/door-to-door': '/blogs/door-to-door',
    '/blog/hawaii-alaska': '/blogs/hawaii-alaska',
    '/blog/pricing': '/blogs/pricing',
    '/blog/prepare': '/blogs/prepare',
    '/blog/mistakes': '/blogs/mistakes',
    '/blog/transport-type': '/blogs/transport_type',
    
    // Service page redirects
    '/services/open': '/blogs/open',
    '/services/enclosed': '/blogs/enclosed',
    '/services/door-to-door': '/blogs/door-to-door',
    '/services/hawaii-alaska': '/blogs/hawaii-alaska',
    
    // Common misspellings and variations
    '/open-transport': '/blogs/open',
    '/enclosed-transport': '/blogs/enclosed',
    '/car-shipping': '/',
    '/auto-transport': '/',
    '/vehicle-transport': '/',
    
    // Legacy paths
    '/home': '/',
    '/index': '/',
    '/index.html': '/',
    '/index.php': '/',
    
    // Remove www if present
    ...(url.hostname.startsWith('www.') ? {
      [url.pathname]: url.pathname
    } : {})
  }
  
  // Check for redirects
  if (redirects[url.pathname]) {
    return sendRedirect(event, redirects[url.pathname], 301)
  }
  
  // Handle www redirect
  if (url.hostname.startsWith('www.')) {
    const newUrl = url.href.replace('www.', '')
    return sendRedirect(event, newUrl, 301)
  }
  
  // Handle trailing slash consistency (remove trailing slashes except for root)
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    return sendRedirect(event, url.pathname.slice(0, -1), 301)
  }
})