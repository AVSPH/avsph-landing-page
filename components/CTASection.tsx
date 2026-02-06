"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight, Phone, Loader2 } from "lucide-react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

        // Handle duplicate contact error
        if (result.error === "duplicate") {
          // Show success state even for duplicates
          setIsSubmitted(true);
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
          });
          return;
        }

        throw new Error(result.error || "Failed to create contact");
      }

      console.log("Contact created:", result);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
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
              Stay Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get the latest insights, tips, and exclusive offers delivered
              straight to your inbox.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Weekly industry insights and trends",
                "Exclusive tips for business growth",
                "Early access to new services",
                "Special offers for subscribers only",
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
                <p className="text-white/60 text-sm">Questions? Contact us</p>
                <a
                  href="tel:+13183929582"
                  className="flex items-center gap-2 text-2xl font-bold text-white hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  +1 731-300-9692
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
              Join Our Newsletter
            </h3>
            <p className="mb-6" style={{ color: "var(--muted)" }}>
              Subscribe now and stay updated with valuable insights and
              exclusive content.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:border-[var(--secondary)]"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:border-[var(--secondary)]"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
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
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 text-lg font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                style={{
                  background: isSubmitted ? "#22c55e" : "var(--primary)",
                  color: "white",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitted ? (
                  "Submitted ✓"
                ) : isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Subscribe to Newsletter
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p
                className="text-center text-sm"
                style={{ color: "var(--muted)" }}
              >
                Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
