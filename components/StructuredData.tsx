export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Loft Insulation Solutions",
    "description": "Professional loft insulation services to reduce energy bills and improve home comfort. Expert installation with quality materials and guaranteed results.",
    "url": "https://loft-insulation-solutions.com",
    "telephone": "0800-123-4567",
    "email": "info@loftinsulation-solutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "United Kingdom"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "services": [
      {
        "@type": "Service",
        "name": "Loft Insulation",
        "description": "Professional loft insulation installation to improve energy efficiency"
      },
      {
        "@type": "Service", 
        "name": "Cavity Wall Insulation",
        "description": "Cavity wall insulation services for improved thermal performance"
      },
      {
        "@type": "Service",
        "name": "Floor Insulation", 
        "description": "Floor insulation solutions for ground floor heat retention"
      }
    ],
    "offers": {
      "@type": "Offer",
      "description": "Free consultation and quote for loft insulation services",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/loftinsulationsolutions",
      "https://www.twitter.com/loftinsulation",
      "https://www.linkedin.com/company/loft-insulation-solutions"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
