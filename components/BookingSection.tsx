"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Script from "next/script";
import { Skeleton } from "./ui/skeleton";

export default function BookingSection() {
  const [iframeKey, setIframeKey] = useState(0);



  return (
    <section
      id="booking"
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

            <h2 className="section-title mb-6">
              Let's Discuss How We Can{" "}
              <span className="gradient-text">Transform Your Business</span>
            </h2>

            <p className="section-subtitle max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to explore how our virtual
              assistants can streamline your operations and help you scale.
            </p>
          </div>

          {/* Booking Embed Container */}
          <div className="bg-none shadow-none py-5 relative min-h-[650px]">


            {/* Actual Iframe */}
            <div
            >
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
          </div>

        </div>
      </div>

      {/* Embed Script */}
      <Script
        src="https://avsph.advancedvirtualstaff.com/js/form_embed.js"
      />
    </section>
  );
}
