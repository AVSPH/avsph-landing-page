"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const staffImages = [
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290076/C1963T01_m54vff.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290074/C1929T01_atg4mp.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770290072/C1917T01_ydklsp.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-5_ryqmkc.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-9_uao4az.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289947/hero-4_ni7d9e.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-2_u7pc3e.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-1_xk6dpg.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-3_c7trjr.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-8_omwxqi.jpg",
    "https://res.cloudinary.com/drpxke63n/image/upload/v1770289945/hero-6_nbhtdn.jpg",
  ];

  // Duplicate for infinite scroll - enough items for smoother loop
  const column1 = [...staffImages, ...staffImages, ...staffImages];
  const column2 = [...staffImages.reverse(), ...staffImages, ...staffImages];
  const column3 = [
    ...staffImages.sort(() => Math.random() - 0.5),
    ...staffImages,
    ...staffImages,
  ]; // Randomize slightly
  const column4 = [...staffImages.reverse(), ...staffImages, ...staffImages];
  const column5 = [...staffImages, ...staffImages, ...staffImages];
  const column6 = [...staffImages.reverse(), ...staffImages, ...staffImages];
  const column7 = [
    ...staffImages.sort(() => Math.random() - 0.5),
    ...staffImages,
    ...staffImages,
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
      {/* Background Marquee Grid - Full Screen */}
      <div className="absolute inset-0 overflow-hidden z-0 mask-gradient-vertical">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 h-[120vh] -mt-[10vh] opacity-100">
          {/* Column 1 (Visible on all) */}
          <MarqueeColumn images={column1} direction="up" duration={200} />

          {/* Column 2 (Visible on all) */}
          <MarqueeColumn
            images={column2}
            direction="down"
            duration={220}
            className="mt-[-50px]"
          />

          {/* Column 3 (Visible on all) */}
          <MarqueeColumn images={column3} direction="up" duration={210} />

          {/* Column 4 (Hidden on mobile < md) */}
          <MarqueeColumn
            images={column4}
            direction="down"
            duration={230}
            className="hidden md:block mt-[-30px]"
          />

          {/* Column 5 (Hidden on mobile < md) */}
          <MarqueeColumn
            images={column5}
            direction="up"
            duration={215}
            className="hidden md:block"
          />

          {/* Column 6 (Hidden on tablet < lg) */}
          <MarqueeColumn
            images={column6}
            direction="down"
            duration={250}
            className="hidden lg:block mt-[-40px]"
          />

          {/* Column 7 (Hidden on tablet < lg) */}
          <MarqueeColumn
            images={column7}
            direction="up"
            duration={215}
            className="hidden lg:block"
          />
        </div>
      </div>

      {/* Radial Blur Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] md:w-[600px] h-[700px] bg-white blur-[80px] rounded-full" />
        <div className="absolute w-full h-full bg-white/80 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 tracking-tight"
          >
            Hire Once. <span className="text-primary  ">Scale Fast.</span>{" "}
            Cancel Anytime.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            We help service-based businesses reclaim 20+ hours a week by
            building and managing a reliable offshore team for them without
            hiring headaches, long contracts, or HR stress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="btn-primary rounded-full px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto"
            >
              Book a Free Call
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full font-semibold border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MarqueeColumn({
  images,
  direction = "up",
  duration = 40,
  className = "",
}: {
  images: string[];
  direction?: "up" | "down";
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: direction === "up" ? 0 : "-50%" }}
        animate={{ y: direction === "up" ? "-50%" : 0 }}
        transition={{ duration: duration, ease: "linear", repeat: Infinity }}
        className="flex flex-col gap-4"
      >
        {images.map((src, i) => (
          <MarqueeImage key={i} src={src} />
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeImage({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-slate-100">
      {/* Skeleton Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}
      <Image
        src={src}
        alt="Team Member"
        fill
        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
        className={`object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
