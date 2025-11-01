export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Security headers for better SEO
  setHeader(event, 'X-Content-Type-Options', 'nosniff')
  setHeader(event, 'X-Frame-Options', 'DENY')
  setHeader(event, 'X-XSS-Protection', '1; mode=block')
  setHeader(event, 'Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Canonical URL enforcement
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    return sendRedirect(event, url.pathname.slice(0, -1), 301)
  }
  
  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && url.protocol === 'http:') {
    return sendRedirect(event, url.href.replace('http:', 'https:'), 301)
  }
  
  // Set appropriate cache headers for static assets
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    setHeader(event, 'Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Set cache headers for HTML pages
  if (url.pathname.match(/\.(html|htm)$/) || !url.pathname.includes('.')) {
    setHeader(event, 'Cache-Control', 'public, max-age=3600, must-revalidate')
  }
})