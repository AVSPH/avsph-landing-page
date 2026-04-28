import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GeoSummarySection() {
  const keyTakeaways = [
    "Field service businesses save up to 70% on staffing costs by hiring SOP-trained Filipino virtual assistants instead of local employees.",
    "Advanced Virtual Staff VAs are pre-trained in dispatch, scheduling, invoicing, call handling, and CRM tools used by HVAC, plumbing, roofing, and pest control companies.",
    "Full-time dedicated VAs start at $1,100/month. The Field Service Bundle — including a website, GHL CRM, and SEO — starts at $489/month.",
    "All placements launch within 7 days. No setup fees. Cancel anytime with no long-term contracts.",
    "Every VA operates under a documented SOP system with hourly time tracking and daily end-of-day reports sent to the client.",
  ];

  const comparisonData = [
    { category: "Monthly Cost", local: "$4,000–$6,000", avs: "From $1,100" },
    { category: "Onboarding Time", local: "4–8 weeks", avs: "7 days" },
    { category: "SOP Training", local: "Self-managed", avs: "Included" },
    { category: "Daily Reports", local: "Varies", avs: "Every day" },
    { category: "Contract", local: "12+ months", avs: "Cancel anytime" },
  ];

  return (
    <article
      className="section"
      style={{ background: "var(--background)" }}
      aria-label="Summary and key takeaways"
    >
      <div className="container max-w-5xl mx-auto">

        {/* TL;DR */}
        <header className="mb-12 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            TL;DR
          </span>
          <h2 className="section-title mb-4">
            Key <span className="gradient-text">Takeaways</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Everything you need to know about hiring a virtual assistant for your field service business — condensed into five points.
          </p>
        </header>

        {/* Key Takeaways list */}
        <ul className="space-y-4 mb-14" role="list">
          {keyTakeaways.map((point, i) => (
            <li
              key={i}
              className="flex gap-4 p-5 rounded-xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <CheckCircle2
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "var(--secondary)" }}
              />
              <p className="text-base leading-relaxed" style={{ color: "var(--foreground-light)" }}>
                {point}
              </p>
            </li>
          ))}
        </ul>

        {/* Comparison table */}
        <section aria-label="Cost and feature comparison" className="mb-14">
          <h3
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "var(--primary)" }}
          >
            Local Hire vs. Advanced Virtual Staff — At a Glance
          </h3>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--primary)", color: "white" }}>
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Local / In-House Hire</th>
                  <th className="px-6 py-4 text-left font-semibold">Advanced Virtual Staff</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "var(--card)" : "var(--background-alt)",
                      color: "var(--foreground-light)",
                    }}
                  >
                    <td className="px-6 py-4 font-medium" style={{ color: "var(--primary)" }}>{row.category}</td>
                    <td className="px-6 py-4">{row.local}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: "var(--secondary)" }}>{row.avs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step-by-step guide */}
        <section aria-label="How to get started" className="mb-14">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: "var(--primary)" }}
          >
            How to Get Started in 3 Steps
          </h3>
          <p className="mb-6 text-base" style={{ color: "var(--foreground-light)" }}>
            Most field service owners are live with a dedicated VA within one week. Here is exactly how the process works:
          </p>
          <ol className="space-y-4" role="list">
            {[
              {
                step: "1",
                title: "Book a free discovery call",
                detail: "Tell us which tasks are consuming your time — dispatch, invoicing, call handling, follow-ups, or all of the above. The call takes 20 minutes and has no obligation.",
              },
              {
                step: "2",
                title: "Receive your matched VA profile within 48 hours",
                detail: "We screen candidates from our top 1% talent pool. You review the profile, approve the match, and we handle the SOP onboarding.",
              },
              {
                step: "3",
                title: "Your VA goes live — typically within 7 days",
                detail: "Daily end-of-day reports start from day one. Hourly time tracking is active. Your account manager stays available throughout.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 p-5 rounded-xl"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "var(--secondary)" }}
                >
                  {item.step}
                </span>
                <div>
                  <strong className="block mb-1" style={{ color: "var(--primary)" }}>
                    {item.title}
                  </strong>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-light)" }}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Conclusion / Recommendation */}
        <section
          aria-label="Conclusion and recommendation"
          className="p-8 rounded-2xl"
          style={{ background: "var(--background-alt)", border: "1px solid var(--border)" }}
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "var(--primary)" }}
          >
            Our Recommendation
          </h3>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--foreground-light)" }}>
            If you run an <strong>HVAC, plumbing, roofing, pest control, landscaping, or electrical business</strong> and are spending more than 10 hours a week on dispatch, scheduling, invoicing, or customer follow-ups — you are leaving money on the table. A dedicated, SOP-trained VA can handle all of those tasks at a fraction of the cost of a local hire.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--foreground-light)" }}>
            On the other hand, if your volume is very low (fewer than 5 jobs per week), a part-time arrangement or the{" "}
            <Link href="/limited-offers" className="underline font-medium" style={{ color: "var(--secondary)" }}>
              Field Service Bundle
            </Link>{" "}
            at $489/month may be a better starting point before scaling to a full-time VA.
          </p>
          <Link
            href="/booking"
            className="btn-primary inline-flex items-center gap-2"
          >
            Book a Free Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </div>
    </article>
  );
}
