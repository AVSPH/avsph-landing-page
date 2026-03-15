import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  MonitorSmartphone,
  PhoneCall,
  Rocket,
  Search,
  Wrench,
  Zap,
} from "lucide-react";
import CTABookACall from "@/components/CTABookACall";
import MockupGallery from "@/components/MockupGallery";
import KlicktivShowcaseSection from "@/components/KlicktivShowcaseSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const planIncludeItems = [
  { label: "Professional Website" },
  { label: "Local SEO" },
  { label: "GoHighLevel (GHL)", badge: "FREE" },
  { label: "Klicktiv Account", badge: "FREE" },
  { label: "Automations and Setup" },
  { label: "Monthly Management" },
];

const highlightPills = [
  "Built for field service businesses",
  "Free GHL account included",
  "Free Klicktiv account included",
  "Website + SEO + automation",
  "Powered by Advanced Virtual Staff",
];

const includedItems = [
  {
    title: "Professional Website",
    description:
      "A custom-built, conversion-focused website for field service businesses. Fast, mobile-first, and built to turn visitors into booked jobs from day one.",
    icon: <MonitorSmartphone className="w-6 h-6 text-[var(--primary)]" />,
  },
  {
    title: "Local SEO",
    description:
      "Rank on Google and Google Maps when local customers search for your services. We handle keywords, on-page optimization, and ongoing SEO management.",
    icon: <Search className="w-6 h-6 text-[var(--accent)]" />,
  },
  {
    title: "GoHighLevel (GHL) Account",
    description:
      "Your GHL CRM fully configured with workflows for missed call text-back, review requests, estimate follow-ups, and appointment booking.",
    icon: <Zap className="w-6 h-6 text-[var(--primary)]" />,
    badge: "Included free",
  },
  {
    title: "Klicktiv Account",
    description:
      "Automate commission splits, track job costs in real time, manage payroll breakdowns, and see live revenue dashboards without spreadsheets.",
    icon: <DollarSign className="w-6 h-6 text-[var(--accent)]" />,
    badge: "Included free",
  },
  {
    title: "Ongoing Monthly Management",
    description:
      "We handle the technical side so you stay focused on the field. Ongoing website maintenance, SEO updates, and platform optimization every month.",
    icon: <Wrench className="w-6 h-6 text-[var(--primary)]" />,
  },
  {
    title: "Full Onboarding and Configuration",
    description:
      "We build, configure, and launch everything for you. Your website, GHL automations, and Klicktiv system go live with no technical work required.",
    icon: <Rocket className="w-6 h-6 text-[var(--accent)]" />,
  },
];

const pricingCards = [
  {
    title: "Core Plan - Most Popular",
    subtitle: "AVSPH Field Service Bundle",
    price: "$289",
    cadence: "/month",
    note: "Billed monthly. 12-month commitment.",
    features: [
      "Custom conversion-optimized website",
      "Local SEO with Google and Maps focus",
      "Free GoHighLevel account fully configured",
      "Free Klicktiv account with financial system setup",
      "Lead automation for text-back, reviews, and follow-ups",
      "Commission and job cost automation via Klicktiv",
      "Monthly maintenance and SEO management",
      "Dedicated AVS support team",
      "Rate locked for full 12-month term",
    ],
    cta: "Get Started - $289/mo",
    primary: true,
  },
  {
    title: "Optional Add-On",
    subtitle: "Full-Time Call Dispatch",
    price: "$1,100",
    cadence: "/month",
    note: "Add a dedicated dispatcher to your core plan.",
    features: [
      "Full-time dispatcher for inbound calls",
      "Job booking and schedule management",
      "Customer confirmations and follow-up calls",
      "CRM updates inside your GHL account",
      "Works seamlessly with your core plan",
    ],
    cta: "Add Dispatch to My Plan",
  },
  {
    title: "Core + Dispatch Bundle",
    subtitle: "Everything included",
    price: "$1,389",
    cadence: "/month",
    note: "Website, SEO, GHL, Klicktiv plus a full-time dispatcher.",
    features: [
      "All core plan deliverables",
      "Dedicated dispatcher for daily operations",
      "One consolidated monthly rate",
      "Single team managing the full stack",
    ],
    cta: "Bundle and Save",
  },
];

const faqs = [
  {
    question: "Is the $289/month rate locked?",
    answer:
      "Yes. The core plan rate is locked for a full 12-month term once you start.",
  },
  {
    question: "Do I need a GoHighLevel account already?",
    answer:
      "No. We provide a GoHighLevel account and configure it for your business as part of the plan.",
  },
  {
    question: "What does onboarding include?",
    answer:
      "We build your website, set up automations, connect your GHL workflows, and configure Klicktiv so everything launches ready to use.",
  },
  {
    question: "Can I add dispatch later?",
    answer:
      "Yes. You can start with the core plan and add the full-time dispatcher when you are ready to scale operations.",
  },
];

export default function LimitedOffersPage() {
  return (
    <main className="bg-[var(--background)]">
      {/* Hero */}
      <section className="relative min-h-screen pt-40 lg:pt-48 pb-16 overflow-hidden bg-white">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-left">
            <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
              AVSPH - Field Service Plan
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
              Your Website, SEO and Digital Stack - Done.
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-light)] max-w-2xl mb-10 leading-relaxed">
              One complete package built for field service businesses.
              Professional website, local SEO, free GHL account, and a free
              Klicktiv financial operating system - all for one simple monthly
              price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2"
              >
                Get Started for $289/mo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#included" className="btn-secondary">
                See What&apos;s Included
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {highlightPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--background-alt)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white shadow-xl border border-[var(--border)]">
            <div className="px-8 py-8 text-white bg-primary">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                AVSPH Core Plan
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mt-3 text-white">
                Field Service Bundle
              </h3>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-lg font-semibold text-white">$</span>
                <span className="text-5xl font-extrabold leading-none text-white">
                  289
                </span>
                <span className="text-sm font-medium text-white">/month</span>
              </div>
              <p className="mt-4 text-sm text-white">
                12-month commitment - All inclusive
              </p>
            </div>

            <div className="px-8 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
                Includes
              </p>
              <div className="space-y-3">
                {planIncludeItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                      <span className="text-[var(--foreground)]">
                        {item.label}
                      </span>
                    </div>
                    {item.badge ? (
                      <span className="text-[10px] font-semibold tracking-wide text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2143]"
              >
                Claim This Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--background-alt)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Targeted Solutions by Industry</h2>
            <p className="section-subtitle">
              We build websites tailored to each service industry so your
              customers see the exact solutions they need.
            </p>
          </div>
          <MockupGallery />
        </div>
      </section>

      {/* Included */}
      <section id="included" className="section bg-[var(--background-alt)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Everything Your Business Needs. Nothing You Don&apos;t.
            </h2>
            <p className="section-subtitle">
              One plan covers your entire digital foundation. Simple,
              transparent, and ready to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedItems.map((item) => (
              <div key={item.title} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--background-alt)] border border-[var(--border)]">
                    {item.icon}
                  </div>
                  {item.badge ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              One core plan covers your entire digital foundation. Add full-time
              call dispatch when you are ready to scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`card h-full flex flex-col ${card.primary ? "border-2 border-[var(--accent)]" : ""}`}
              >
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
                    {card.title}
                  </p>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mt-2">
                    {card.subtitle}
                  </h3>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-[var(--primary)]">
                    {card.price}
                  </span>
                  <span className="text-sm text-[var(--muted)]">
                    {card.cadence}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] mb-6">{card.note}</p>
                <div className="space-y-3 mb-8">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                      <span className="text-[var(--foreground)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-auto ${card.primary ? "btn-primary" : "btn-secondary"} justify-center`}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-[var(--muted)]">
            <PhoneCall className="w-4 h-4" />
            Need help choosing? Talk with our team and we will map the right
            plan.
          </div>
        </div>
      </section>

      <KlicktivShowcaseSection />

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">
              Quick answers to the most common questions about the field service
              plan.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="bg-white border rounded-xl px-2 last:border-b"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card)",
                }}
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline cursor-pointer">
                  <span className="font-semibold text-base md:text-lg text-left text-[var(--primary)]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[var(--foreground-light)]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABookACall
        title="Ready to lock in the $289/month offer?"
        subtitle="Book a free call and we will walk you through the Field Service Bundle and next steps."
      />
    </main>
  );
}












