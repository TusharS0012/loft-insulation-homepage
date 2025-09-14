# LOFT Insulation Homepage - Design Specifications

## 🎨 **New Color Palette**

### Primary Colors
- **Orange (#E6781D)**: Main brand color for CTAs and highlights
- **Sage Green (#7CA597)**: Secondary color for trust indicators and eco-friendly elements
- **Sky Blue (#56C4D8)**: Accent color for headlines and stats
- **Neutral (#F9F9F9)**: Base background color

### Color Usage
- **Hero**: White background with video overlay, sky blue headlines
- **Features**: Light grey background with sage green accents
- **CTA**: Orange background with white text for maximum contrast
- **Footer**: Dark slate background with light text

## 🏗️ **Layout Structure**

### Navigation Header
- Fixed position with backdrop blur
- Orange "LI" logo with company name
- Desktop: Horizontal menu with "Get Quote" CTA
- Mobile: Hamburger menu with full-width CTA button

### Hero Section
- **Video Background**: Full-screen muted video loop
- **Centered Content**: Large headline with sky blue accent
- **CTA Card**: White card with backdrop blur containing "Book Free Demo" form
- **Trust Indicators**: Sage green dots with white text
- **Stats Grid**: Sky blue numbers with white labels
- **Scroll Indicator**: Animated arrow at bottom

### Features Section
- **Background**: White with light grey cards
- **Icons**: Sage green circular backgrounds
- **Hover Effects**: Subtle orange overlay
- **Additional Benefits**: Light grey background with sage green icons

### CTA Section
- **Background**: Orange gradient
- **Buttons**: White primary, white border secondary
- **Stats**: White text with subtle borders

### Footer
- **Background**: Dark neutral
- **Links**: Light grey with white hover
- **Company Info**: Two-column layout with contact details

## 🎯 **Design Principles**

### Warm + Eco-Friendly
- Sage green for environmental trust
- Orange for warmth and energy
- Natural color combinations

### Modern + Clean
- Flat design with rounded corners
- Generous whitespace
- Clean typography (Inter font)

### Trustworthy + Energy-Saving
- Sky blue for clean energy associations
- Professional video background
- Clear trust indicators and guarantees

## 📱 **Responsive Design**

### Mobile (< 768px)
- Stacked navigation with hamburger menu
- Single column hero content
- 2x2 stats grid
- Full-width buttons

### Tablet (768px - 1024px)
- Horizontal navigation
- Centered hero content
- 2x2 feature grid
- Side-by-side buttons

### Desktop (> 1024px)
- Full horizontal navigation
- Large hero content
- 4-column feature grid
- Horizontal button layout

## 🎬 **Video Specifications**

### File Requirements
- **Format**: MP4 (H.264)
- **Duration**: 30-60 seconds
- **Resolution**: 1920x1080 minimum
- **File Size**: Under 10MB
- **Audio**: Muted (auto-muted for web)

### Content Suggestions
1. Home exterior wide shot
2. Installers working in attic
3. Insulation materials close-up
4. Installation process steps
5. Finished clean installation
6. Happy homeowner or energy savings

### Fallback
- Static image (`/images/hero-insulation.jpg`) if video fails to load
- Poster image for video loading state

## 🚀 **Performance Optimizations**

### Video
- `playsInline` for mobile compatibility
- `muted` for autoplay compliance
- `loop` for continuous playback
- Poster image for loading state

### Images
- Next.js Image component with optimization
- Proper `sizes` attributes for responsive loading
- AVIF/WebP format support

### Fonts
- Inter font with `display: swap`
- Preloaded for performance
- Fallback to system fonts

## ♿ **Accessibility Features**

### Navigation
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

### Hero
- Semantic HTML structure
- Proper form labels
- Focus management
- Color contrast compliance

### Video
- Fallback content for non-video browsers
- Poster image for accessibility
- Muted for autoplay compliance

## 📊 **Web Vitals Targets**

- **LCP**: < 2.5s (video optimization)
- **CLS**: < 0.1 (stable layout)
- **INP**: < 200ms (smooth interactions)
- **FCP**: < 1.8s (fast first paint)

## 🛠️ **Implementation Notes**

### Components Updated
- ✅ Hero: Video background, centered CTA
- ✅ Navigation: Fixed header with new colors
- ✅ Features: Updated color scheme
- ✅ CTA: Orange background
- ✅ Footer: Dark theme
- ✅ Global styles: New color palette

### Files Modified
- `tailwind.config.js`: New color palette
- `app/globals.css`: Updated component styles
- `components/Hero.tsx`: Complete redesign
- `components/Navigation.tsx`: New component
- `components/Features.tsx`: Color updates
- `components/CTA.tsx`: Orange theme
- `components/Footer.tsx`: Dark theme

### Next Steps
1. Add video file to `/public/videos/loft-insulation-demo.mp4`
2. Replace placeholder images with real ones
3. Test on multiple devices and browsers
4. Run Lighthouse audit for performance
5. Verify accessibility with screen readers
