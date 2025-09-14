# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Replace placeholder images:**
   - Open `public/images/placeholder-generator.html` in your browser
   - Right-click each image and "Save image as..." with the correct filename
   - Or add your own images with these exact filenames:
     - `hero-insulation.jpg` (600x400px)
     - `energy-savings.jpg` (300x200px)
     - `professional-installation.jpg` (300x200px)
     - `quality-materials.jpg` (300x200px)
     - `guarantee.jpg` (300x200px)

3. **Customize for your brand:**
   - Update colors in `tailwind.config.js` (primary/secondary color schemes)
   - Replace company info in `components/Footer.tsx`
   - Update contact details in `components/CTA.tsx`
   - Modify metadata in `app/layout.tsx`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Check the browser console for Web Vitals metrics

## Production Build

```bash
npm run build
npm start
```

## Performance Testing

After setup, test your site with:
- **Lighthouse** (Chrome DevTools)
- **PageSpeed Insights** (Google)
- **WebPageTest** (webpagetest.org)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Customization Checklist

- [ ] Replace all placeholder images
- [ ] Update brand colors in Tailwind config
- [ ] Change company name and contact details
- [ ] Update hero messaging and features
- [ ] Add real Google Analytics tracking
- [ ] Set up proper domain and SSL
- [ ] Test on mobile devices
- [ ] Run accessibility audit
- [ ] Verify all links work correctly

## File Structure

```
loft-insulation-homepage/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features grid
│   ├── CTA.tsx              # Call-to-action
│   ├── Footer.tsx           # Footer
│   ├── ReportVitals.tsx     # Web Vitals tracking
│   └── StructuredData.tsx   # SEO structured data
├── public/
│   └── images/              # Image assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Vitals Documentation](https://web.dev/vitals/)
