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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
