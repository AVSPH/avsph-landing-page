"use client";

import { useState } from "react";
import { Phone, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq.data";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs;

  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--secondary)" }}
          >
            Got Questions?
          </span>
          <h2 className="section-title">
            Common <span className="gradient-text">Questions</span> Answered
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our virtual assistant services
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: "var(--muted)" }}
            />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all focus:outline-none focus:border-[var(--secondary)]"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pb-5">
          {filteredFAQs.length === 0 ? (
            <div
              className="text-center py-16 px-6 rounded-2xl "
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <Search
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "var(--muted)" }}
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--primary)" }}
              >
                No results found
              </h3>
              <p style={{ color: "var(--foreground-light)" }}>
                Try adjusting your search query
              </p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-2xl overflow-hidden border-2 transition-all"
                  style={{
                    background: "var(--card)",
                    borderColor: "var(--border)",
                  }}
                >
                  <AccordionTrigger
                    className="px-6 py-5 hover:no-underline"
                    style={{ color: "var(--primary)" }}
                  >
                    <span className="font-semibold text-base md:text-lg text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-5"
                    style={{ color: "var(--foreground-light)" }}
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

      </div>
    </section>
  );
}
