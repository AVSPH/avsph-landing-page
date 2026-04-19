import {
  CheckCircle2,
  DollarSign,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { LandingHero } from "@/components/funnel/hero";
import CTABookACall from "@/components/CTABookACall";
import MockupGallery from "@/components/MockupGallery";
import KlicktivShowcaseSection from "@/components/KlicktivShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StickyCtaBar from "@/components/StickyCtaBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const trustStats = [
  { value: "47+", label: "Field service clients" },
  { value: "30 days", label: "Avg. first Google Maps lead" },
  { value: "$176/mo", label: "Software included free" },
  { value: "⭐ 4.9", label: "Average client rating" },
];

const launchSteps = [
  {
    day: "Day 0",
    title: "You Sign Up",
    desc: "Complete onboarding form. We start configuration same day.",
  },
  {
    day: "Day 1",
    title: "Landing Page Live",
    desc: "Your first page is live and capturing leads within 24 hours.",
  },
  {
    day: "Day 3",
    title: "GHL + Klicktiv Active",
    desc: "CRM automations running. Financial system fully configured.",
  },
  {
    day: "Day 7",
    title: "Full Stack Launched",
    desc: "Complete 8-page site, SEO submitted, all systems live.",
  },
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
      "Your GHL CRM fully configured and ready on launch day, included at no extra cost.",
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
    badge: "Free — $97/mo value",
    highlight: true,
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
      "A financial operating system built for field service, eliminates spreadsheets and manual reconciliation.",
    icon: <DollarSign className="w-6 h-6 text-emerald-600" />,
    badge: "Free — $79/mo value",
    highlight: true,
    features: [
      "Commission split rules for up to 10 technicians",
      "Real-time job cost & revenue dashboards",
      "Automated payroll breakdowns per pay cycle",
      "Saves 5–8 hours/week on manual tracking",
      "Valued at $79/mo, included free",
    ],
  },
  {
    title: "Ongoing Monthly Management",
    description:
      "We handle all technical upkeep so you stay focused on operations.",
    icon: <Wrench className="w-6 h-6 text-[var(--primary)]" />,
    features: [
      "Up to 5 website edits per month",
      "Changes completed within 48 business hours",
      "Monthly SEO performance review & updates",
      "GHL & Klicktiv optimization included",
      "99.9% uptime monitoring",
    ],
  },
  {
    title: "Full Onboarding & Configuration",
    description:
      "We build, configure, and launch your entire stack — no technical work required.",
    icon: <Rocket className="w-6 h-6 text-[var(--accent)]" />,
    features: [
      "Landing page in 24hrs · Full stack in 7 days",
      "2 onboarding calls",
      "30-point pre-launch checklist",
      "Full system configuration (GHL + Klicktiv + website)",
      "Dedicated account manager",
    ],
  },
];

const valueComparison = [
  { item: "Website design + hosting", market: "$300–500/mo", label: "Included" },
  { item: "Local SEO", market: "$800–1,500/mo", label: "Included" },
  { item: "GHL CRM", market: "$97/mo", label: "Free" },
  { item: "Klicktiv", market: "$79/mo", label: "Free" },
  { item: "Ongoing management", market: "$200–400/mo", label: "Included" },
];

const pricingStats = [
  { value: "$489", label: "All-inclusive monthly rate" },
  { value: "24 hrs", label: "Landing page live" },
  { value: "7 days", label: "Full stack launched" },
  { value: "$16", label: "Less than per day" },
];

const pricingCards = [
  {
    title: "CORE PLAN",
    price: "$489",
    cadence: "/mo",
    note: "Billed monthly. 12-month commitment. Rate locked.",
    badge: "Most Popular",
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
    cta: "Claim this plan →",
    primary: true,
  },
  {
    title: "ADD-ON",
    price: "$1,100",
    cadence: "/mo",
    description: "Full-time dedicated dispatcher",
    note: "Add a full-time dedicated dispatcher to your core plan — billed separately.",
    features: [
      "40 hrs/week support",
      "Call handling & booking",
      "Schedule management",
      "Customer follow-ups",
      "CRM updates",
      "Replaces $3,500+/mo hire",
    ],
    cta: "Add dispatch to my plan",
  },
  {
    title: "CORE + DISPATCH BUNDLE",
    price: "$1,589",
    cadence: "/mo",
    description: "Full system + dispatcher",
    note: "Everything included — website, SEO, GHL, Klicktiv, and a full-time dispatcher.",
    badge: "Best Value",
    features: [
      "Everything in the core plan",
      "Full-time dispatcher included",
      "One invoice",
      "Single team management",
      "Priority onboarding",
      "Equivalent to $3,676+/mo value",
    ],
    cta: "Get the Full Stack →",
  },
];

const riskReversal = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    title: "Rate locked for 12 months",
    desc: "No surprise price increases mid-term.",
  },
  {
    icon: <Star className="w-5 h-5 text-emerald-500" />,
    title: "Dedicated account manager from day 1",
    desc: "One person owns your results. We stay until it works.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    title: "Cancel after 12 months",
    desc: "No long-term lock-in beyond your first year.",
  },
];

const faqs = [
  {
    question: "Is the $489/month rate locked?",
    answer:
      "Yes. The core plan rate is locked for a full 12-month term once you start. No mid-term increases.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We replace it with a conversion-optimized 8-page site built for field service. If you want to keep your existing domain, we handle the migration.",
  },
  {
    question: "What if I already use GoHighLevel?",
    answer:
      "We configure your existing account with our field service automation stack — 5 workflows, missed call text-back, review sequences, and booking pipeline.",
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
    question: "What happens to the rate after 12 months?",
    answer:
      "Your rate stays the same unless you choose to change your plan. There are no surprise price increases after the commitment period.",
  },
  {
    question: "How is this different from a local digital agency?",
    answer:
      "Local agencies typically charge $800–1,500/mo for SEO alone, bill separately for website maintenance, and don't include CRM or financial tools. AVSPH bundles everything at one fixed price with a guaranteed launch timeline.",
  },
  {
    question: "Can I add dispatch later?",
    answer:
      "Yes. You can start with the core plan and add the full-time dispatcher when you are ready to scale operations.",
  },
  {
    question: "What if I want to cancel early?",
    answer:
      "The plan is a 12-month commitment. After 12 months, you can cancel any time with 30 days notice.",
  },
];

export default function LimitedOffersPage() {
  return (
    <main className="bg-[var(--background)]">
      <StickyCtaBar />

      <LandingHero />

      {/* Trust Strip */}
      {/* <section className="bg-[var(--primary)] py-6">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Launch Timeline */}
      <section className="section bg-white">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              What Happens After{" "}
              <span className="text-[var(--accent)]">You Sign Up</span>
            </h2>
            <p className="section-subtitle">
              Most clients are live and capturing leads before the week is out.
            </p>
          </div>
          <div className="relative">
            {/* connector line - desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-[var(--border)]" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {launchSteps.map((step, i) => (
                <div
                  key={step.day}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--primary)] flex flex-col items-center justify-center mb-4 shadow-lg">
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">
                      {step.day}
                    </span>
                    <span className="text-lg font-extrabold text-white leading-none">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-light)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="included" className="section bg-[var(--background-alt)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Everything Your Business Needs.{" "}
              <span className="text-[var(--accent)]">
                Nothing You Don&apos;t.
              </span>
            </h2>
            <p className="section-subtitle">
              One plan covers your entire digital foundation. Simple,
              transparent, and ready to launch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="card"
                style={
                  item.highlight
                    ? { background: "#ecfdf5", borderColor: "#6ee7b7" }
                    : undefined
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={
                      item.highlight
                        ? { background: "#d1fae5", borderColor: "#6ee7b7" }
                        : {
                            background: "var(--background-alt)",
                            borderColor: "var(--border)",
                          }
                    }
                  >
                    {item.icon}
                  </div>
                  {item.badge ? (
                    <span
                      className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full"
                      style={
                        item.highlight
                          ? { color: "#065f46", background: "#a7f3d0" }
                          : {
                              color: "var(--accent)",
                              background:
                                "color-mix(in srgb, var(--accent) 10%, transparent)",
                            }
                      }
                    >
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
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                      >
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

      {/* Industries */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Targeted Solutions{" "}
              <span className="text-[var(--accent)]">by Industry</span>
            </h2>
            <p className="section-subtitle">
              Websites tailored per service industry.
            </p>
          </div>
          <MockupGallery />
        </div>
      </section>

      {/* Value Comparison */}
      <section className="section bg-[var(--background-alt)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              What You&apos;d Pay{" "}
              <span className="text-[var(--accent)]">
                Buying This Separately
              </span>
            </h2>
            <p className="section-subtitle">
              The $489/mo bundle replaces over $1,400/mo worth of tools and
              agency retainers.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--background-alt)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
              <span>What You Need</span>
              <span className="text-center">What Others Charge</span>
              <span className="text-center">With AVSPH</span>
            </div>
            {valueComparison.map((row, i) => (
              <div
                key={row.item}
                className={`grid grid-cols-3 px-6 py-4 items-center border-t border-[var(--border)] ${
                  i % 2 === 0 ? "bg-white" : "bg-[var(--background-alt)]/50"
                }`}
              >
                <span className="font-medium text-[var(--foreground)]">
                  {row.item}
                </span>
                <span className="text-center text-[var(--foreground-light)] line-through text-sm">
                  {row.market}
                </span>
                <span className="text-center text-emerald-600 font-semibold text-sm">
                  {row.label}
                </span>
              </div>
            ))}
            <div className="grid grid-cols-3 px-6 py-5 bg-[var(--primary)] items-center">
              <span className="font-bold text-white text-lg">Total Value</span>
              <span className="text-center text-white/70 line-through text-sm">
                $1,476–$2,576/mo
              </span>
              <span className="text-center text-white font-extrabold text-xl">
                $489/mo
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-5 text-center">
            <p className="text-emerald-700 text-sm font-medium uppercase tracking-widest mb-1">
              Your total savings
            </p>
            <p className="text-3xl font-extrabold text-emerald-700">
              $987–$2,087<span className="text-xl font-bold">/mo</span>
            </p>
            <p className="text-emerald-600 text-sm mt-1">
              vs. buying website, SEO, GHL, Klicktiv, and management separately
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-[var(--foreground-light)]">
                If your average job is $500, one additional job per month covers
                the entire investment.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-[var(--foreground-light)]">
                Most clients see their first inbound Google Maps lead within 30
                days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section bg-[var(--background-alt)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Simple, Transparent{" "}
              <span className="text-[var(--accent)]">Pricing</span>
            </h2>
            <p className="section-subtitle">
              One core plan covers your entire digital foundation. Add full-time
              call dispatch when ready to scale.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {pricingStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white rounded-2xl border border-[var(--border)] px-4 py-6"
              >
                <p className="text-3xl font-extrabold text-[var(--primary)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--foreground-light)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`card h-full flex flex-col relative ${
                  card.primary ? "border-2 border-[var(--accent)]" : ""
                }`}
              >
                {"badge" in card && card.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap ${
                        card.primary
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--primary)] text-white"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">
                    {card.title}
                  </p>
                  {"description" in card && card.description && (
                    <p className="text-sm text-[var(--foreground-light)] mt-1">
                      {card.description}
                    </p>
                  )}
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

                <div className="mt-auto pt-6">
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

          {/* Risk Reversal */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {riskReversal.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 bg-white rounded-2xl border border-[var(--border)] px-5 py-4"
              >
                {item.icon}
                <div>
                  <p className="font-semibold text-sm text-[var(--primary)]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--foreground-light)] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KlicktivShowcaseSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">
              <span className="text-[var(--accent)]">Frequently Asked</span>{" "}
              Questions
            </h2>
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
        title="Ready to lock in the $489/month offer?"
        subtitle="Book a free call and we will walk you through the Field Service Bundle and next steps."
      />

      {/* Low-friction contact fallback */}
      <section className="bg-white py-6 border-t border-[var(--border)]">
        <div className="container text-center">
          <p className="text-sm text-[var(--muted)]">
            Not ready to book a call?{" "}
            <a
              href="/contact"
              className="font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            >
              Send us a question first →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
