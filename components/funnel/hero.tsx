"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const exampleImages = [
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590232/home-1_emez7q.jpg", title: "Home service" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590232/electric-2_bjcgki.jpg", title: "Electrical service" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590231/electric-1_wnp2qt.jpg", title: "Electrical work" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590231/pool-2_foflrt.jpg", title: "Pool service" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590230/plumbing-2_e5zlx9.png", title: "Plumbing service" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590230/pool-1_s6vriq.jpg", title: "Pool maintenance" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590229/klicktiv-1_kv2av9.jpg", title: "Klicktiv dashboard" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590229/plumbing-1_d1fvfo.jpg", title: "Plumbing work" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590229/klicktiv-2_n5f5gb.jpg", title: "Klicktiv system" },
  { url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776590229/home-2_jjnkzd.jpg", title: "Home service 2" },
];

const marqueeImages = [...exampleImages, ...exampleImages];

function LandingHero() {
  return (
    <section className="w-full min-h-[120vh] flex flex-col items-center justify-center gap-14 pb-16 pt-24 overflow-x-hidden relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e7e5e4 1px, transparent 1px), linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)`,
          WebkitMaskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)`,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="flex flex-col justify-center items-center w-[280px] sm:w-[420px] md:w-[600px] lg:w-[750px] text-center z-10">
        <motion.div
          className="flex items-center gap-2 mb-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-amber-400 text-sm">★★★★★</span>
          <span className="text-sm font-semibold text-[var(--foreground)]">4.9</span>
          <span className="text-sm text-[var(--muted)]">Rated by field services</span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--primary)] leading-tight"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        >
          LANDING PAGE LIVE IN 24HRS.{" "}
          <span className="text-[var(--accent)]">Full website & CRM in 7 days.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[var(--foreground-light)] mt-6 leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          One complete package built for field service businesses. Professional website, local SEO,
          fully configured GHL CRM, and Klicktiv financial system — all managed for you every month.
          No tech work. No separate vendors. One simple price.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-10 sm:mt-14">
          <motion.a
            href="/booking"
            className="btn-primary flex items-center gap-2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
            whileHover={{ scale: 1.05, transition: { type: "spring", damping: 30, stiffness: 400 } }}
          >
            Get My Landing Page Live <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#included"
            className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
          >
            See what&apos;s included ↓
          </motion.a>
        </div>

        <motion.p
          className="mt-4 text-xs text-[var(--muted)]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
        >
          12-month commitment · Rate locked · No setup fee · Cancel after 12 months
        </motion.p>
      </div>

      <motion.div
        className="w-full overflow-hidden pb-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="flex gap-4"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {marqueeImages.map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={img.title}
              className="w-80 h-120 object-cover rounded-xl flex-shrink-0 shadow-lg"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export { LandingHero };
