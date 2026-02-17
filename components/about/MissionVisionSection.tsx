"use client";

import { Target, Eye, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MissionVisionSection() {
  const items = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description:
        "To empower businesses worldwide by connecting them with exceptional Filipino virtual assistants, enabling growth, efficiency, and success through reliable and professional remote staffing solutions.",
      color: "var(--primary)",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description:
        "To become the most trusted and preferred virtual staffing partner globally, recognized for our commitment to quality, integrity, and creating meaningful opportunities for Filipino professionals.",
      color: "var(--accent)",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Promise",
      description:
        "We promise to deliver more than just staff – we deliver peace of mind. Every VA is thoroughly vetted, trained, and supported to ensure they exceed your expectations and become a valuable extension of your team.",
      color: "var(--primary)",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
            Mission & Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
            Driven by <span className="text-[var(--accent)]">Purpose & Passion</span>
          </h2>
          <p className="text-lg text-[var(--foreground-light)] max-w-2xl mx-auto leading-relaxed">
            Our core values guide everything we do, from how we select talent to
            how we serve our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative border top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  index === 1 ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-[var(--primary)]/10 text-[var(--primary)]"
                )}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-[var(--foreground-light)] mb-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
