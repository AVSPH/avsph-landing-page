import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanced Virtual Staff | 24/7 Premium Outsource Support",
  description: "Partner with Advanced Virtual Staff for dedicated, exceptional virtual assistants. We match you with top 1% talent for admin support, customer service, bookkeeping, and more. Cancel anytime, affordable rates.",
  keywords: "virtual assistant, VA services, outsourcing, remote staff, Philippines, admin support, customer service, bookkeeping",
  openGraph: {
    title: "Advanced Virtual Staff | Your Growth. Our Mission.",
    description: "Get matched with exceptional virtual assistants from our top 1% talent pool. 24/7 support, affordable rates, no contracts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${sourceSans3.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
