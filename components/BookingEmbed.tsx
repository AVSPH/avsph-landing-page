"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";

export default function BookingEmbed() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Force iframe remount on component mount
  useEffect(() => {
    setIframeKey(Date.now());
  }, []);

  return (
    <>
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-sm">
                <Calendar
                  className="w-4 h-4"
                  style={{ color: "var(--secondary)" }}
                />
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--secondary)" }}
                >
                  Book Your Discovery Call
                </span>
              </div>

              <h1 className="section-title mb-6">
                Let's Discuss How We Can{" "}
                <span className="gradient-text">Transform Your Business</span>
              </h1>

              <p className="section-subtitle max-w-2xl mx-auto">
                Schedule a free 30-minute consultation to explore how our
                virtual assistants can streamline your operations and help you
                scale.
              </p>
            </div>

            {/* Booking Embed Container */}
            <div className="relative min-h-[650px]">
              <iframe
                key={iframeKey}
                src="https://avsph.advancedvirtualstaff.com/widget/booking/exTl4Yfikib3XZlM9CTe"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "900px",
                }}
                scrolling="no"
                id={`exTl4Yfikib3XZlM9CTe_${iframeKey}`}
                title="Book an Appointment"
              />
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  30 Min
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Free Consultation
                </p>
              </div>
              <div className="p-4">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  48 Hours
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Get Matched With VA
                </p>
              </div>
              <div className="p-4">
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  Zero Risk
                </div>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  No Obligation Trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Script */}
      <Script
        src="https://avsph.advancedvirtualstaff.com/js/form_embed.js"
        strategy="afterInteractive"
        onReady={() => setScriptLoaded(true)}
        onLoad={() => setScriptLoaded(true)}
      />
    </>
  );
}
