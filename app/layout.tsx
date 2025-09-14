import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true, // Preloads the font for faster first paint
});

export const metadata: Metadata = {
  title: {
    default: "Loft Insulation Solutions | Energy Efficient Home Insulation",
    template: "%s | Loft Insulation Solutions",
  },
  description:
    "Professional loft insulation services to reduce energy bills and improve home comfort. Expert installation with quality materials and guaranteed results.",
  keywords: [
    "loft insulation",
    "home insulation",
    "energy efficiency",
    "thermal insulation",
    "roof insulation",
    "attic insulation",
  ],
  authors: [{ name: "Loft Insulation Solutions" }],
  creator: "Loft Insulation Solutions",
  publisher: "Loft Insulation Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://loft-insulation-solutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://loft-insulation-solutions.com",
    title: "Loft Insulation Solutions | Energy Efficient Home Insulation",
    description:
      "Professional loft insulation services to reduce energy bills and improve home comfort. Expert installation with quality materials and guaranteed results.",
    siteName: "Loft Insulation Solutions",
    images: [
      {
        url: "/images/hero-insulation.jpg",
        width: 1200,
        height: 630,
        alt: "Professional loft insulation installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loft Insulation Solutions | Energy Efficient Home Insulation",
    description:
      "Professional loft insulation services to reduce energy bills and improve home comfort.",
    images: ["/images/hero-insulation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
