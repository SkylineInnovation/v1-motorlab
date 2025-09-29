# MotorLab Development Scratchpad

## Project Overview
- MotorLab is a vehicle inspection center website
- Built with Next.js and Tailwind CSS
- Features Arabic language and RTL support
- Responsive design for all screen sizes

## Technology Stack
- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language Support**: Arabic (RTL)
- **Font**: Noto Sans Arabic

## Directory Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── layout/
│       ├── Footer.tsx
│       └── Header.tsx
```

## Implemented Features
- Responsive header with navigation menu
- Hero section with image slider
- Services section with custom icons
- About section with company information
- Testimonials section with customer reviews
- Footer with contact information and social links

## Lessons
- When using Next.js with RTL languages, set both `lang="ar"` and `dir="rtl"` in the HTML tag
- For Arabic support, use the Noto Sans Arabic font from Google Fonts
- When using custom CSS with Tailwind, be careful with at-rules like `@theme` that might not be standard
- SVG placeholders are useful for development before actual images are available
- Component-based architecture makes it easy to organize and maintain the codebase
- **Modern Design Implementation (2024-09-29):**
  - Glass morphism effects work well with backdrop-filter and rgba backgrounds
  - Fixed positioning for floating navigation requires proper z-index management
  - Dark theme with proper contrast ratios improves readability
  - Animated components should be reusable and configurable
  - When transforming existing components, preserve all original content and functionality
  - CSS custom properties are essential for consistent theming across components
- **Auth Pages Design (2025-09-30):**
  - Clean white backgrounds with subtle borders work well for auth pages
  - Maintain brand colors (primary blue and secondary orange) for consistency
  - Use simple, centered layouts for login/signup forms
  - Include proper validation and error messaging
  - Loading states improve UX during async operations
  - Link back to home page for easy navigation
  - AuthContext integration allows for seamless authentication flow

## To-Do
- [ ] Implement remaining pages (Services, Booking, About, Blog, Contact)
- [ ] Add actual images and content
- [ ] Implement language switching functionality
- [ ] Add animations and transitions for better UX
- [ ] Implement booking form functionality
