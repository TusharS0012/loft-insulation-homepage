// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Loft Insulation UK | Loft Insulation Leads - Verified Homeowners",
  description:
    "Claim free loft insulation in the UK & Cut energy bills, stay warmer. Get fresh, verified loft insulation leads in the UK. Connect with eligible homeowners",
  metadataBase: new URL("https://www.loft-insulation-services-uk.com/"),
  openGraph: {
    title: "Free Loft Insulation Grants UK, Buy Quality Loft Insulation Leads",
    description:
      "Access government-backed grants for free loft insulation in the UK. Exclusive loft insulation leads in the UK",
    url: "https://www.loft-insulation-services-uk.com/",
    siteName: "Loft Insulation Services UK",
    images: [
      {
        url: "image-url",
        alt: "Loft Insulation Services UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get fresh, verified loft insulation leads in the UK.",
    description:
      "Apply for free loft insulation in the UK. Check your eligibility under the 2025 energy-saving scheme.",
    creator: "@l4rgindia",
    images: ["image-url"],
  },
  robots: { index: true, follow: true },
  authors: [{ name: "LIS UK" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Custom meta / link tags */}
        <meta
          name="keywords"
          content="Insulation companies near me, Loft insulation leads UK, Free loft insulation UK, ECO4 loft insulation UK, Loft insulation cost UK, Attic insulation UK"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://d3euc6irt3la1j.cloudfront.net/apple-icon-180x180.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="https://d3euc6irt3la1j.cloudfront.net/favicon-32x32.webp"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.loft-insulation-services-uk.com/",
              name: "Loft Insulation Services UK",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.loft-insulation-services-uk.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
