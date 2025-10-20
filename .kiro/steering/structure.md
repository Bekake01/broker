# Project Structure

## Root Level
- `nuxt.config.ts` - Main Nuxt configuration
- `app.config.ts` - App-specific configuration (UI theme, color mode)
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## App Directory (`app/`)
Main application code following Nuxt 3+ structure:

### Pages (`app/pages/`)
- `index.vue` - Homepage with header, hero section, and components
- `about.vue` - About page
- Uses file-based routing

### Components (`app/components/`)
- `top.vue` - Hero section with background image and CTA
- `whyus.vue` - Why choose us section
- `cartype.vue` - Car types/services section
- `carousel.vue` - Image carousel component

### Assets (`app/assets/`)
- `main.css` - Global styles
- Video files: `globus.mp4`, `mylogo.webm`, `video.webm`

### Root App (`app/app.vue`)
- Minimal root component with `<NuxtPage/>`

## Server Directory (`server/`)
- `api/` - API routes
- `home.js` - Example API endpoint

## Public Directory (`public/`)
- Static assets: images, icons, videos
- Favicon files and PWA icons
- `robots.txt`

## Generated/Build (`/.nuxt/`)
- Auto-generated Nuxt files
- TypeScript definitions
- UI component configurations
- Build artifacts

## Conventions
- **File naming**: kebab-case for components and pages
- **Component structure**: Single File Components (.vue)
- **API routes**: JavaScript files in `server/api/`
- **Static assets**: Place in `public/` for direct access
- **Styling**: Tailwind classes with custom CSS in assets