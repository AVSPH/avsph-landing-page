import type { Metadata } from "next";
import { Lexend, Source_Sans_3, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { GoogleTagManager } from "@next/third-parties/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TWXNMT6C" />
      <body
        className={`${lexend.variable} ${sourceSans3.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <StickyBanner className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
          <div className="container flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center text-[11px] sm:text-sm md:text-base pr-8 sm:pr-10">
            <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-[10px] sm:text-sm">
              Limited Offer
            </span>
            <span className="text-white/90 leading-tight max-w-[30ch] sm:max-w-none">
              <span className="sm:hidden">
                Field Service Bundle - $289/mo.{" "}
                <Link
                  href="/limited-offers"
                  className="font-semibold text-white underline underline-offset-4 decoration-white/70 hover:decoration-white"
                >
                  View Offer
                </Link>
              </span>
              <span className="hidden sm:inline">
                Field Service Bundle - Website, SEO, GHL, and Klicktiv for
                $289/mo.
              </span>
            </span>
            <Link
              href="/limited-offers"
              className="hidden sm:inline font-semibold text-white underline underline-offset-4 decoration-white/70 hover:decoration-white"
            >
              View Offer
            </Link>
          </div>
        </StickyBanner>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
