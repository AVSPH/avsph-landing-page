import { MessageSquare, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Needs",
      description:
        "Share your requirements with us. What tasks do you need help with? What skills are you looking for? We'll understand your business and find the perfect match.",
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "We Match You With Talent",
      description:
        "Our team rigorously screens candidates from our top 1% talent pool. We present you with the best matches based on skills, experience, and cultural fit.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Start Working Together",
      description:
        "Once you approve, your virtual assistant starts immediately. We provide ongoing support, monitoring, and daily reports to ensure smooth collaboration.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      style={{ background: "var(--primary)" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary-light)" }}
          >
            How It Works
          </span>
          <h2 className="text-white mb-4">
            Getting Started is{" "}
            <span style={{ color: "var(--accent)" }}>Simple</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            We've streamlined the process to get you working with your ideal
            virtual assistant as quickly as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative text-center flex flex-col items-center">
                {/* Icon with Step Label */}
                <div className="relative inline-block mb-8">
                  {/* Icon Circle */}
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                    style={{
                      background: "var(--secondary)",
                      color: "var(--primary)",
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/booking"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
