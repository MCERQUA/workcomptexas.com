import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Texas workers comp insurance",
    "workers compensation Texas contractors",
    "Texas WC insurance",
    "Texas workers compensation",
    "Texas non-subscriber workers comp",
    "roofing workers comp Texas",
    "HVAC workers comp Texas",
    "general contractor WC Texas",
    "subcontractor workers comp Texas",
    "construction workers comp Texas",
    "Texas WC opt out",
    "small business workers comp Texas",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Workers' compensation insurance for Texas contractors — general contractors, subcontractors, roofing, HVAC, construction, and specialty trades. Texas WC opt-out guidance and non-subscriber insurance. A-rated carriers. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — Texas contractors workers comp` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Workers' comp for Texas contractors — GC, roofing, HVAC, construction, and specialty trades. Texas WC opt-out guidance and non-subscriber insurance. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "State", name: "Texas" },
    serviceType: [
      "General Contractor Workers Compensation Insurance Texas",
      "Subcontractor Workers Compensation Insurance Texas",
      "Texas WC Opt-Out Guidance",
      "Non-Subscriber Insurance Texas",
      "Construction Workers Compensation Texas",
      "Small Business Workers Compensation Texas",
      "Roofing Workers Compensation Texas",
      "HVAC Workers Compensation Texas",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
