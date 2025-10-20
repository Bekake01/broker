# Technology Stack

## Framework & Runtime
- **Nuxt 4.1.3** - Vue.js meta-framework with SSR enabled
- **Vue 3.5.22** - Frontend framework
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Node.js** - Runtime environment

## UI & Styling
- **Nuxt UI 4.0.1** - Component library with blue primary theme
- **Tailwind CSS** - Utility-first CSS framework (via Nuxt UI)
- **Nuxt Image 1.11.0** - Optimized image handling

## Configuration
- **SSR enabled** for better SEO and performance
- **Light mode only** (colorMode disabled)
- **TypeScript** throughout the project

## Common Commands

### Development
```bash
npm run dev          # Start development server on localhost:3000
npm install          # Install dependencies
npm run postinstall  # Prepare Nuxt (runs automatically)
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run generate # Generate static site
```

## Project Type
- **Type**: ES Module
- **Private**: Yes (not published to npm)
- **Build Target**: Universal (SSR + Client)