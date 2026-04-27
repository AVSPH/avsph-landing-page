import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ComparisonSection from "@/components/ComparisonSection";
import { faqs } from "@/data/faq.data";

export const revalidate = false;

export const metadata: Metadata = {
  title: "FAQs | Advanced Virtual Staff",
  description:
    "Find answers to common questions about Advanced Virtual Staff's virtual assistant services, pricing, hiring process, and more.",
  alternates: {
    canonical: "https://advancedvirtualstaff.com/faqs",
  },
  openGraph: {
    title: "FAQs | Advanced Virtual Staff",
    description:
      "Find answers to common questions about our virtual assistant services, pricing, and hiring process.",
    url: "https://advancedvirtualstaff.com/faqs",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <ComparisonSection />
        <FAQSection />
      </main>
    </>
  );
}
