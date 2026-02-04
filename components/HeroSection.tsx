"use client"
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const staffImages = [
    "/assets/hero-images/hero-1.JPG",
    "/assets/hero-images/hero-2.JPG",
    "/assets/hero-images/hero-3.JPG",
    "/assets/hero-images/hero-4.JPG",
    "/assets/hero-team.png",
  ];

  // duplicate for infinite scroll
  const column1 = [...staffImages, ...staffImages, ...staffImages];
  const column2 = [...staffImages.reverse(), ...staffImages, ...staffImages];

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)" }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-bl from-blue-50/50 to-transparent"
          style={{ transform: 'skewX(-20deg) translateX(20%)' }}
        />
      </div>

      {/* Mobile Background Grid - Visible on mobile < lg */}
      <div className="h-[100vh] absolute inset-0 z-0 lg:hidden overflow-hidden opacity-90 pointer-events-none">
        <div className="relative w-full h-full flex gap-4 mask-gradient-vertical">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-1/2 space-y-4 animate-marquee-up"
          >
            {column1.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src={src} alt="Team Member" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-1/2 space-y-4 mt-[-50px] animate-marquee-down"
          >
            {column2.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image src={src} alt="Team Member" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Mobile Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-2xl animate-fade-in relative z-20 text-center lg:text-left mx-auto lg:mx-0">

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900">
              Hire Once. <span className="text-blue-600">Scale Fast.</span> Cancel Anytime.
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              We help service-based businesses reclaim 20+ hours a week by building and managing a reliable offshore team for them without hiring headaches, long contracts, or HR stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Link href="#contact" className="btn-primary rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Book a Strategy Call
              </Link>
              <Link href="#services" className="px-8 py-4 bg-white rounded-full font-semibold border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                View Services
              </Link>
            </div>
          </div>

          {/* Right Content - Dynamic Sliding Grid (Desktop Only) */}
          <div className="relative h-[600px] lg:h-[700px] w-full hidden lg:flex gap-6 overflow-hidden mask-gradient-vertical">
            {/* Gradient Masks */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#EFF6FF] via-transparent to-[#EFF6FF] h-full w-full" style={{ background: 'linear-gradient(to bottom, #F8FAFC 0%, transparent 20%, transparent 80%, #EFF6FF 100%)' }} />

            {/* Column 1 - Up */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-1/2 space-y-6 animate-marquee-up opacity-90 pause-on-hover"
            >
              {column1.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <Image src={src} alt="Team Member" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </motion.div>

            {/* Column 2 - Down */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-1/2 space-y-6 mt-[-100px] animate-marquee-down pause-on-hover"
            >
              {column2.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                  <Image src={src} alt="Team Member" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Card Badge */}
                  {i % 3 === 0 && (
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-slate-800">Available Now</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
