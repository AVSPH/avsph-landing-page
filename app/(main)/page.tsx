import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import ServicesSection from "@/components/ServicesSection";
import WebServiceSection from "@/components/WebServiceSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResourcesSection from "@/components/ResourcesSection";
import GeoSummarySection from "@/components/GeoSummarySection";

const faqSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a field service virtual assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A field service virtual assistant is a remote staff member trained to handle the back-office operations of trades and home service businesses — including dispatch, scheduling, call handling, estimates, invoicing, and CRM management.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a field service virtual assistant cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full-time dedicated dispatch and admin VAs from Advanced Virtual Staff start at $1,100 per month. This compares to $4,000–$6,000 per month for an equivalent local hire, saving field service businesses up to 70%.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I hire a virtual assistant for my HVAC or plumbing business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advanced Virtual Staff can match and onboard a VA for your field service business within 7 days of your discovery call. There is no setup fee and no long-term contract required.",
      },
    },
    {
      "@type": "Question",
      name: "What tasks can a field service VA handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Field service VAs from Advanced Virtual Staff handle scheduling and dispatching, call handling and customer support, estimates and invoicing, lead intake and follow-ups, bookkeeping support, review and reputation management, and operations coordination.",
      },
    },
    {
      "@type": "Question",
      name: "Are the virtual assistants trained on field service SOPs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All VAs are onboarded using a documented SOP system specific to field service operations. They are trained on tools like ServiceTitan, Jobber, Housecall Pro, and GoHighLevel before their first day.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my virtual assistant service anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Advanced Virtual Staff offers flexible month-to-month arrangements. There are no long-term contracts and no cancellation fees.",
      },
    },
  ],
};

const howToSchemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hire a Virtual Assistant for Your Field Service Business",
  description:
    "A step-by-step guide to hiring an SOP-trained Filipino VA from Advanced Virtual Staff — from discovery call to live dispatch support in 7 days.",
  totalTime: "P7D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "1100",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book a free discovery call",
      text: "Tell us which field service tasks you need covered — dispatch, scheduling, invoicing, call handling, or lead follow-ups. The call takes 20 minutes and has no obligation.",
      url: "https://advancedvirtualstaff.com/booking",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Receive your matched VA profile within 48 hours",
      text: "Our team screens candidates from our top 1% talent pool. You review the profile, approve the match, and we handle the SOP onboarding.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Your VA goes live within 7 days",
      text: "Daily end-of-day reports start from day one. Hourly time tracking is active. Your account manager stays available throughout for any adjustments.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchemaJsonLd) }}
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <WebServiceSection />
        <ChallengeSection />
        <HowItWorksSection />
        <ResourcesSection />
        <JourneySection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection /> */}
        {/* <GeoSummarySection /> */}
        <CTASection />
      </main>
    </>
  );
}
