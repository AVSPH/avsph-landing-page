"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Error response:", result);
        throw new Error(result.error || "Failed to create contact");
      }

      console.log("Contact created:", result);
      alert("Thank you! We'll be in touch shortly.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--secondary-dark) 100%)",
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 right-0 w-1/2 h-full"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="300" cy="100" r="150" stroke="white" strokeWidth="1" />
          <circle cx="350" cy="200" r="100" stroke="white" strokeWidth="1" />
          <circle cx="250" cy="300" r="80" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span
              className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.15)" }}
            >
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book a free consultation call and discover how our virtual
              assistants can transform your operations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free 30-minute consultation",
                "No obligation, no pressure",
                "Get matched within 48 hours",
                "Start with a risk-free trial",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "var(--accent)" }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-white/60 text-sm">Call us directly</p>
                <a
                  href="tel:+13183929582"
                  className="flex items-center gap-2 text-2xl font-bold text-white hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  +1 (318) 392-9582
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "var(--card)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--primary)" }}
            >
              Book Your Free Call
            </h3>
            <p className="mb-6" style={{ color: "var(--muted)" }}>
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:border-[var(--secondary)]"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:border-[var(--secondary)]"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:border-[var(--secondary)]"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
                <ArrowRight className="w-5 h-5" />
              </button>

              <p
                className="text-center text-sm"
                style={{ color: "var(--muted)" }}
              >
                No spam, no sales pressure. Just a friendly conversation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
