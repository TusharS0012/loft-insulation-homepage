# Loft Insulation Homepage

A production-ready Next.js 14 homepage for a loft insulation company, optimized for performance, accessibility, and SEO.

## Features

- ⚡ **Next.js 14** with App Router and TypeScript
- 🎨 **Tailwind CSS** with JIT compilation and purging
- 📱 **Responsive design** optimized for all devices
- ♿ **Accessibility** compliant with WCAG guidelines
- 🔍 **SEO optimized** with metadata API and structured data
- 📊 **Web Vitals tracking** with console logging
- 🖼️ **Optimized images** with next/image and AVIF/WebP support
- 🚀 **Performance focused** with server components and minimal JS

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Replace placeholder images:**
   - Open `public/images/placeholder-generator.html` in your browser
   - Download the generated images and replace the placeholders
   - Or add your own images with the same filenames

3. **Customize branding:**
   - Update colors in `tailwind.config.js`
   - Replace company information in `components/Footer.tsx`
   - Update metadata in `app/layout.tsx`

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and fonts
│   └── page.tsx             # Homepage with all sections
├── components/
│   ├── Hero.tsx             # Hero section with email capture
│   ├── Features.tsx         # Product features grid
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Footer with links and contact
│   └── ReportVitals.tsx     # Web Vitals tracking component
├── public/
│   └── images/              # Optimized images (replace placeholders)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Performance Optimizations

- **Images**: Optimized with next/image, AVIF/WebP formats, proper sizing
- **Fonts**: Inter font with display: swap to prevent FOIT
- **Components**: Server components by default, client components only when needed
- **Bundle**: Minimal JavaScript, tree-shaking enabled
- **Caching**: Static generation with ISR where appropriate

## Web Vitals

The app includes Web Vitals tracking that logs to console:
- **LCP** (Largest Contentful Paint) - should be < 2.5s
- **CLS** (Cumulative Layout Shift) - should be < 0.1
- **INP** (Interaction to Next Paint) - should be < 200ms
- **FCP** (First Contentful Paint)
- **FID** (First Input Delay)
- **TTFB** (Time to First Byte)

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Content
- Update hero text in `components/Hero.tsx`
- Modify features in `components/Features.tsx`
- Change CTA messaging in `components/CTA.tsx`
- Update footer links in `components/Footer.tsx`

### SEO
- Update metadata in `app/layout.tsx`
- Add structured data (JSON-LD) for better search results
- Update OpenGraph and Twitter card images

## Production Checklist

- [ ] Replace all placeholder images with optimized versions
- [ ] Update company information and contact details
- [ ] Customize colors to match brand guidelines
- [ ] Add real Google Analytics tracking
- [ ] Set up proper domain and SSL certificate
- [ ] Configure CDN for image optimization
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Verify accessibility with screen readers

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private project - All rights reserved.
