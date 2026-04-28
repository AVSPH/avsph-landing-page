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
  title: "Field Service Virtual Assistants | Advanced Virtual Staff",
  alternates: {
    canonical: "/",
  },
  description:
    "Dedicated virtual assistants and dispatchers for HVAC, plumbing, roofing, and field service businesses. SOP-trained Filipino VAs, full-time dispatch from $1,100/mo, and a complete website + CRM + SEO bundle from $489/mo. Launch in 7 days. No setup fee.",
  keywords:
    "virtual assistant, field service virtual assistant, dispatch support, HVAC virtual assistant, plumbing VA, roofing VA, Filipino VA, remote staff, Philippines, admin support",
  openGraph: {
    siteName: "Advanced Virtual Staff",
    title: "Field Service Virtual Assistants | Advanced Virtual Staff",
    description:
      "SOP-trained Filipino virtual assistants and dispatchers for HVAC, plumbing, roofing, and field service businesses. Launch in 7 days. Save up to 70% vs. local hires.",
    type: "website",
    url: "https://advancedvirtualstaff.com",
    images: [
      {
        url: "https://res.cloudinary.com/drpxke63n/image/upload/v1771586449/advancedvirtualstaff.com__4_1_qdwoxu.png",
        width: 1200,
        height: 630,
        alt: "Advanced Virtual Staff — Field Service Virtual Assistants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Service Virtual Assistants | Advanced Virtual Staff",
    description:
      "SOP-trained Filipino virtual assistants and dispatchers for HVAC, plumbing, roofing, and field service businesses. Launch in 7 days.",
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
  foundingDate: "2020",
  sameAs: [
    "https://www.facebook.com/avsphvirtualassistanceservices",
    "https://www.linkedin.com/company/advanced-virtual-staff-ph/",
    "https://x.com/advancedvstaff",
    "https://www.instagram.com/advancedvirtualstaff",
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

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Advanced Virtual Staff Team",
  url: "https://advancedvirtualstaff.com/about",
  jobTitle: "Virtual Staffing Specialists",
  affiliation: {
    "@type": "Organization",
    name: "Advanced Virtual Staff",
    url: "https://advancedvirtualstaff.com",
  },
  knowsAbout: [
    "Field Service Virtual Assistants",
    "Dispatch Support for Home Services",
    "HVAC Business Operations",
    "Plumbing and Roofing Scheduling",
    "Filipino Remote Staffing",
  ],
  sameAs: [
    "https://www.linkedin.com/company/advanced-virtual-staff-ph/",
    "https://www.facebook.com/avsphvirtualassistanceservices",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://advancedvirtualstaff.com",
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
