"use client";

import { ArrowRight, Calculator, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResourcesSection() {
    const resources = [
        {
            title: "Savings Calculator",
            description:
                "Discover how much you can save by hiring a virtual assistant compared to a local employee. See the numbers for yourself.",
            icon: <Calculator className="w-8 h-8" />,
            href: "/resources/savings-calculator",
            color: "var(--primary)",
            bg: "bg-blue-50",
        },
        {
            title: "Delegation Matrix",
            description:
                "Identify which tasks to delegate, schedule, or delete. Optimize your workflow and focus on your zone of genius.",
            icon: <LayoutDashboard className="w-8 h-8" />,
            href: "/resources/delegation-matrix",
            color: "var(--accent)",
            bg: "bg-amber-50",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                    <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
                        Free Resources
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                        Tools to <span className="text-[var(--accent)]">Scale Your Business</span>
                    </h2>
                    <p className="text-lg text-[var(--foreground-light)] max-w-2xl mx-auto leading-relaxed">
                        Use our free tools to make informed hiring decisions and optimize your
                        operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {resources.map((resource, index) => (
                        <Link
                            key={index}
                            href={resource.href}
                            className="group relative overflow-hidden rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                        >
                            <div
                                className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    resource.bg
                                )}
                            />

                            <div className="relative z-10">
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm"
                                    style={{
                                        background: `${resource.color}15`,
                                        color: resource.color,
                                    }}
                                >
                                    {resource.icon}
                                </div>

                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: "var(--primary)" }}
                                >
                                    {resource.title}
                                </h3>

                                <p className="text-[var(--foreground-light)] mb-8 leading-relaxed">
                                    {resource.description}
                                </p>

                                <div className="flex items-center font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                                    Try Tool <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
