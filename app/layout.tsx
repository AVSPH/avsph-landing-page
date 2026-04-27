import type { Metadata } from "next";
import { Lexend, Source_Sans_3, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advancedvirtualstaff.com"),
  title: "Advanced Virtual Staff | 24/7 Premium Outsource Support",
  description:
    "Partner with Advanced Virtual Staff for dedicated, exceptional virtual assistants. We match you with top 1% talent for admin support, customer service, bookkeeping, and more. Cancel anytime, affordable rates.",
  keywords:
    "virtual assistant, VA services, outsourcing, remote staff, Philippines, admin support, customer service, bookkeeping",
  openGraph: {
    title: "Advanced Virtual Staff | Your Success. Our Mission.",
    description:
      "Get matched with exceptional virtual assistants from our top 1% talent pool. 24/7 support, affordable rates, flexible contracts.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/drpxke63n/image/upload/v1771586449/advancedvirtualstaff.com__4_1_qdwoxu.png",
        width: 1200,
        height: 630,
        alt: "Advanced Virtual Staff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Virtual Staff | Your Success. Our Mission.",
    description:
      "Get matched with exceptional virtual assistants from our top 1% talent pool. 24/7 support, affordable rates, flexible contracts.",
    images: [
      "https://res.cloudinary.com/drpxke63n/image/upload/v1771586449/advancedvirtualstaff.com__4_1_qdwoxu.png",
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Advanced Virtual Staff",
  url: "https://advancedvirtualstaff.com",
  logo: "https://res.cloudinary.com/drpxke63n/image/upload/v1771586449/advancedvirtualstaff.com__4_1_qdwoxu.png",
  description:
    "Philippine-based virtual assistant company providing dedicated admin support, customer service, bookkeeping, and more to businesses worldwide.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@advancedvirtualstaff.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/advancedvirtualstaff",
    "https://www.linkedin.com/company/advanced-virtual-staff",
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "Virtual Assistant Services",
    "Administrative Support",
    "Customer Service Outsourcing",
    "Bookkeeping Support",
    "Remote Staffing",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Advanced Virtual Staff",
  url: "https://advancedvirtualstaff.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://advancedvirtualstaff.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TWXNMT6C" />
      <GoogleAnalytics gaId="G-ZYWKX4SN8K" />
      <body
        className={`${lexend.variable} ${sourceSans3.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
