"use client";

import { CASE_STUDIES } from "@/data/case-studies.data";
import { Compare } from "@/components/ui/compare";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import React from 'react';


export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {


    const [slug, setSlug] = React.useState<string>("");

    React.useEffect(() => {
        params.then(p => setSlug(p.slug));
    }, [params]);

    if (!slug) return null;

    const study = CASE_STUDIES.find((s) => s.slug === slug);

    if (!study) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
            <div className="container px-4 md:px-6">
                {/* Header */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-sm font-medium text-[var(--foreground-light)] hover:text-[var(--primary)] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>
                    <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-4">
                        {study.industry}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                        {study.title}
                    </h1>
                    <p className="text-xl text-[var(--foreground-light)] leading-relaxed">
                        {study.description}
                    </p>
                </div>

                {/* Before / After Comparison */}
                <section className="mb-20 max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[var(--foreground-light)] font-medium text-sm uppercase tracking-widest">
                            Website Transformation
                        </span>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-3xl border border-gray-100 flex justify-center w-full">
                        <div className="bg-white rounded-2xl shadow-xl w-full flex justify-center overflow-hidden">
                            <Compare
                                firstImage={study.images.before}
                                secondImage={study.images.after}
                                firstImageClassName="object-cover object-left-top w-full h-full"
                                secondImageClassname="object-cover object-left-top w-full h-full"
                                className="h-[250px] w-full md:h-[600px] aspect-video"
                                slideMode="hover"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between w-full max-w-[1000px] mx-auto mt-6 text-xs md:text-sm font-bold text-[var(--foreground-light)] px-4 uppercase tracking-wider">
                        <span>Before: The Old Site</span>
                        <span>After: The New Landing Page</span>
                    </div>
                </section>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--primary)]">The Challenge</h2>
                        <p className="text-[var(--foreground-light)] leading-relaxed">
                            {study.challenge}
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--primary)]">The Solution</h2>
                        <p className="text-[var(--foreground-light)] leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                </div>

                {/* Results & Testimonial */}
                <section className="max-w-5xl mx-auto bg-[var(--primary)] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                                Key Results
                            </h3>
                            <ul className="space-y-4">
                                {study.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="h-2 w-2 rounded-full bg-[var(--accent)] mt-2.5"></div>
                                        <span className="text-lg font-medium text-white/90">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <Quote className="w-8 h-8 text-[var(--accent)] mb-4 opacity-80" />
                            <blockquote className="text-xl italic text-white mb-6">
                                "{study.testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-blue-600 flex items-center justify-center font-bold text-white uppercase">
                                    {study.testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{study.testimonial.author}</div>
                                    <div className="text-sm text-white/60">{study.testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-20 text-center">
                    <Link
                        href="/booking"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-[var(--accent)] rounded-xl hover:bg-[var(--accent)]/90 hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        Get Similar Results
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
