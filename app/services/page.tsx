"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    services,
    administrativeFeatures,
    callHandlingFeatures,
    schedulingFeatures,
    estimatesFeatures,
    bookkeepingFeatures,
    leadIntakeFeatures,
    reviewFeatures,
    operationsFeatures
} from "@/data/service.data";
import SOPProcessSection from "@/components/SOPProcessSection";

export default function ServicesPage() {
    return (
        <main className=" bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block animate-fade-in">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] animate-slide-up leading-tight">
                        Dedicated, SOP-Trained <br className="hidden md:block" />
                        <span className="text-[var(--accent)]">Virtual Staff</span> for Service-Based Businesses
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--foreground-light)] max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        Every role we provide is backed by clear Standard Operating Procedures (SOPs), structured onboarding, and ongoing quality checks. Our virtual staff don’t “figure it out as they go”, they follow proven systems aligned with your business.
                    </p>
                </div>
            </section>

            {/* Services List - Zigzag Layout */}
            <section className="py-16 md:py-24">
                <div className="container">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24 last:mb-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group perspective-1000">
                                <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                </div>
                                {/* Decorative Elements */}
                                <div className={`absolute -z-10 w-full h-full border-2 border-[var(--primary)]/30 rounded-2xl top-4 ${index % 2 === 0 ? "left-4" : "right-4"} transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1`}></div>
                                <div className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} w-24 h-24 bg-[var(--primary)]/10 rounded-full blur-2xl`}></div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm border border-[var(--primary)]/20">
                                        {index + 1}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/50 to-transparent"></div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)] leading-tight">
                                    {service.title}
                                </h2>

                                <p className="text-lg text-[var(--foreground-light)] mb-8 leading-relaxed border-l-4 border-[var(--primary)]/30 pl-6">
                                    {service.description}
                                </p>

                                {(() => {
                                    let features = null;
                                    switch (service.title) {
                                        case "Administrative Support": features = administrativeFeatures; break;
                                        case "Call Handling & Customer Support": features = callHandlingFeatures; break;
                                        case "Scheduling & Dispatching": features = schedulingFeatures; break;
                                        case "Estimates & Invoicing": features = estimatesFeatures; break;
                                        case "Bookkeeping Support": features = bookkeepingFeatures; break;
                                        case "Lead Intake & Follow-Ups": features = leadIntakeFeatures; break;
                                        case "Review & Reputation Management": features = reviewFeatures; break;
                                        case "Operations & Task Coordination": features = operationsFeatures; break;
                                        default: features = null;
                                    }

                                    return features && (
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            {features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-1 flex-shrink-0" />
                                                    <span className="text-[var(--foreground)] font-medium">{feature.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                })()}

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={service.href}
                                        className="btn-primary"
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* SOP Process Section */}
            <SOPProcessSection />
        </main>
    );
}
