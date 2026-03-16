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
  { label: "Professional 8-page website" },
  { label: "Local SEO targeting 15+ keywords" },
  { label: "Fully configured GHL CRM", badge: "FREE" },
  { label: "Klicktiv financial system", badge: "FREE" },
  { label: "5+ automations pre-built and live" },
  { label: "30+ local directories listed on" },
];

const highlightPills = [
  "$176/mo software included free (GHL + Klicktiv)",
  "Landing page live in 24hrs · Full launch in 7 days",
  "5+ automations pre-built and live on day one",
  "30+ local directories your business is listed on",
];

const includedItems = [
  {
    title: "Professional Website",
    description:
      "A custom-built, conversion-focused website for field service businesses. Landing page live in 24hrs, full site in 7 days.",
    icon: <MonitorSmartphone className="w-6 h-6 text-[var(--primary)]" />,
    features: [
      "Up to 8 pages (Home, Services, About, Contact + more)",
      "Sub-2-second load speed target",
      "2 rounds of revisions included",
      "Contact & booking form built in",
      "SSL, hosting & domain setup included",
    ],
  },
  {
    title: "Local SEO",
    description:
      "Rank on Google and Google Maps when local customers search for your services. Includes ongoing monthly optimization.",
    icon: <Search className="w-6 h-6 text-[var(--accent)]" />,
    features: [
      "Up to 15 targeted local keywords",
      "Google Business Profile fully optimized",
      "Submitted to 30+ local directories & citations",
      "Monthly rank tracking report included",
      "On-page SEO across all website pages",
    ],
  },
  {
    title: "GoHighLevel (GHL) Account",
    description:
      "Your GHL CRM fully configured and ready on launch day, valued at $97/mo, included at no extra cost.",
    icon: <Zap className="w-6 h-6 text-[var(--primary)]" />,
    badge: "Included free",
    features: [
      "5 pre-built automation workflows configured",
      "Missed call text-back in under 60 seconds",
      "Automated review request sequences (3-step)",
      "Estimate follow-up & appointment booking pipeline",
      "Valued at $97/mo, included free",
    ],
  },
  {
    title: "Klicktiv Account",
    description:
      "A financial operating system built for field service, eliminates spreadsheets and manual reconciliation for good.",
    icon: <DollarSign className="w-6 h-6 text-[var(--accent)]" />,
    badge: "Included free",
    features: [
      "Commission split rules for up to 10 technicians",
      "Real-time job cost & revenue dashboards",
      "Automated payroll breakdowns per pay cycle",
      "Saves owners 5–8 hrs/week on manual tracking",
      "Valued at $79/mo, included free",
    ],
  },
  {
    title: "Ongoing Monthly Management",
    description:
      "We handle all the technical upkeep so you stay focused on the field, no maintenance tasks on your end.",
    icon: <Wrench className="w-6 h-6 text-[var(--primary)]" />,
    features: [
      "Up to 5 website edits or updates per month",
      "Changes completed within 48 business hours",
      "Monthly SEO performance review & updates",
      "GHL & Klicktiv platform optimization included",
      "99.9% uptime monitoring with proactive alerts",
    ],
  },
  {
    title: "Full Onboarding & Configuration",
    description:
      "We build, configure, and launch your entire stack, no technical work required on your end, ever.",
    icon: <Rocket className="w-6 h-6 text-[var(--accent)]" />,
    features: [
      "Landing page in 24hrs · Full stack in 7 days",
      "2 dedicated onboarding calls with your AVS team",
      "30-point pre-launch checklist completed for you",
      "GHL automations + Klicktiv + website all configured",
      "Dedicated account manager from day one",
    ],
  },
];

const pricingCards = [
  {
    title: "CORE PLAN",
    price: "$289",
    cadence: "/mo",
    note: "Billed monthly. 12-month commitment. Rate locked for the full term.",
    features: [
      "8-page custom conversion website",
      "Local SEO — 15 keywords + Google Maps",
      "30+ directory & citation submissions",
      "GHL CRM — 5 workflows configured (valued $97/mo)",
      "Klicktiv financial system (valued $79/mo)",
      "Missed call text-back in under 60 seconds",
      "5 website edits/mo, completed in 48 hrs",
      "Monthly SEO rank report",
      "Dedicated AVS account manager",
      "Landing page in 24hrs · Full stack in 7 days",
    ],
    cta: "Claim this plan",
  },
  {
    title: "ADD-ON",
    price: "$1,100",
    cadence: "/mo",
    note: "Add a full-time dedicated dispatcher to your core plan — billed separately.",
    features: [
      "Full-time dispatcher, 40 hrs/week",
      "Inbound call handling & job booking",
      "Schedule management & technician coordination",
      "Customer confirmations & follow-up calls",
      "CRM updates inside your GHL account",
      "Works seamlessly with core plan stack",
      "Replaces a $3,500+/mo in-house hire",
    ],
    cta: "Add dispatch to my plan",
  },
  {
    title: "CORE + DISPATCH BUNDLE",
    price: "$1,389",
    cadence: "/mo",
    note: "Save $1/mo vs. buying separately. Everything included — website, SEO, GHL, Klicktiv, and a full-time dispatcher.",
    features: [
      "Everything in the core plan",
      "Full-time dispatcher included",
      "One consolidated monthly invoice",
      "Single AVS team managing the full stack",
      "Priority onboarding — live in 7 days",
      "Equivalent to $3,676+/mo in standalone value",
    ],
    cta: "Bundle and save",
    primary: true,
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
              Landing page live in 24hrs. Full website & CRM in 7 days.
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-light)] max-w-2xl mb-10 leading-relaxed">
              One complete package built for field service businesses. You get a
              professional 8-page website, local SEO targeting 15+ keywords, a
              fully configured GHL CRM, and a Klicktiv financial system — all
              managed for you every month. No tech work. No separate vendors. One
              simple price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/booking"
                className="btn-primary flex items-center gap-2"
              >
                Get Started for $289/mo <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#included" className="btn-secondary flex items-center gap-1">
                See what&apos;s included <ArrowRight className="w-4 h-4 rotate-90" />
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--muted)]">
              12-month commitment · Rate locked for full term · No setup fee · Cancel after 12 months
            </p>
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
                href="/booking"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2143]"
              >
                Claim This Plan
              </a>
            </div>
          </div>
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
                <p className="text-[var(--foreground-light)] mb-6">
                  {item.description}
                </p>
                {item.features && (
                  <ul className="space-y-2 mt-auto">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
                className={`card h-full flex flex-col relative ${
                  card.primary ? "border-2 border-[var(--accent)]" : ""
                }`}
              >
                <div className="mb-4">
                  <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">
                    {card.title}
                  </p>
                </div>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-[var(--primary)]">
                    {card.price}
                  </span>
                  <span className="text-base font-medium text-[var(--muted)] mb-1">
                    {card.cadence}
                  </span>
                </div>
                <p className="text-sm text-[var(--foreground-light)] leading-relaxed mb-6">
                  {card.note}
                </p>

                {card.title === "ADD-ON" && (
                  <div className="w-full h-px bg-[var(--border)] mb-6" />
                )}

                <div className="space-y-3 mb-8">
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" />
                      <span className="text-[var(--foreground)] text-sm leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-col items-center gap-4">
                  <a
                    href="/booking"
                    className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      card.primary
                        ? "bg-[var(--primary)] text-white hover:bg-[#0F2143]"
                        : "bg-white text-[var(--primary)] border border-[var(--border)] hover:bg-[var(--background-alt)]"
                    }`}
                  >
                    {card.cta}
                  </a>
                </div>
              </div>
            ))}
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












