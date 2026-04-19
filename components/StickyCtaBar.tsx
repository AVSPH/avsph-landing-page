"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[var(--primary)] border-t border-white/10 shadow-2xl transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between gap-4 py-3">
        <div className="hidden sm:block">
          <p className="text-white font-semibold text-sm">
            AVSPH Core Plan — $489/mo
          </p>
          <p className="text-white/60 text-xs">
            Limited onboarding slots this month · Rate locked · No setup fee
          </p>
        </div>
        <a
          href="/booking"
          className="ml-auto inline-flex items-center gap-2 bg-[var(--accent)] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Get Started for $489/mo <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
