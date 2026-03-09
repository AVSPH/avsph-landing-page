"use client";

import { ArrowRight, CheckCircle2, MonitorSmartphone, Search, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MockupGallery from "@/components/MockupGallery";

export default function WebServicesPage() {
    const webFeatures = [
        {
            title: "Custom Design",
            description: "Beautiful, responsive designs tailored to your brand identity.",
            icon: <MonitorSmartphone className="w-8 h-8 text-[var(--primary)]" />
        },
        {
            title: "SEO Optimized",
            description: "Built with best practices to help you rank higher on Google.",
            icon: <Search className="w-8 h-8 text-[var(--accent)]" />
        },
        {
            title: "Lightning Fast",
            description: "Optimized for speed to keep your visitors engaged.",
            icon: <Zap className="w-8 h-8 text-[var(--primary)]" />
        },
        {
            title: "Secure & Reliable",
            description: "Top-tier security to protect your business and user data.",
            icon: <ShieldCheck className="w-8 h-8 text-[var(--accent)]" />
        }
    ];

    // Mockups are rendered using the MockupGallery component

    return (
        <main className="bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
                        Web Services
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                        We Build Websites That <br className="hidden md:block" />
                        <span className="text-[var(--accent)]">Generate Leads</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--foreground-light)] max-w-3xl mx-auto mb-10 leading-relaxed">
                        A professional online presence is critical for service businesses. We design and develop high-converting, SEO-optimized websites tailored specifically for trades and home services.
                    </p>
                    <div className="flex justify-center">
                         <a href="#contact" className="btn-primary flex items-center gap-2">
                             Get a Free Quote <ArrowRight className="w-5 h-5" />
                         </a>
                    </div>
                </div>
            </section>

            {/* Portfolio / Industry Section */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">Targeted Solutions by Industry</h2>
                        <p className="text-lg text-[var(--foreground-light)] max-w-2xl mx-auto">
                            We understand that every service industry has unique needs. Our websites are built with your specific customer journey in mind.
                        </p>
                    </div>

                    <MockupGallery />
                </div>
            </section>
                    
            {/* Core Features */}
            <section className="py-16 bg-[var(--card)] border-y border-[var(--border-light)]">
                <div className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {webFeatures.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-[var(--border-light)]">
                                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{feature.title}</h3>
                                <p className="text-[var(--foreground-light)]">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
