import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StickyBanner className="py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[13px] sm:text-sm md:text-lg pr-8 sm:pr-10">
          <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-[11px] sm:text-sm shrink-0">
            Limited Offer:
          </span>
          <span className="text-white/90 leading-tight ml-1">
            <span className="sm:hidden">
              Field Service Bundle - $489/mo.{"  "}
              <Link
                href="/limited-offers"
                className="font-semibold text-white underline underline-offset-4 decoration-white/70 hover:decoration-white"
              >
                View Offer
              </Link>
            </span>
            <span className="hidden sm:inline">
              Field Service Bundle - Website, SEO, GHL, and Klicktiv for
              $489/mo.
            </span>
          </span>
          <Link
            href="/limited-offers"
            className="hidden sm:inline font-semibold text-white underline underline-offset-4 decoration-white/70 hover:decoration-white ml-1"
          >
             View Offer
          </Link>
        </div>
      </StickyBanner>
      <Header />
      {children}
      <Footer />
    </>
  );
}
