"use client";

import { ResourceCard } from "@/components/ResourceCard";
import {
    HelpCircle,
    Calculator,
    LayoutDashboard,
    FileText,
    Phone,
    Users
} from "lucide-react";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="max-w-3xl mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                        <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
                            Resources
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                            Tools to Help You <br className="hidden md:block" />
                            <span className="text-[var(--accent)]">Scale & Succeed</span>
                        </h1>
                        <p className="text-xl text-[var(--foreground-light)] leading-relaxed">
                            Everything you need to make informed decisions about scaling your team and reclaiming your time.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                        {/* Featured Large Item: Savings Calculator */}
                        <ResourceCard
                            title="Savings Calculator"
                            description="See exactly how much you can save by hiring a dedicated virtual assistant compared to a local employee. Crunch the numbers instantly."
                            href="/resources/savings-calculator"
                            icon={Calculator}
                            badge="Most Popular"
                            className="lg:col-span-2 lg:row-span-2"
                            variant="featured"
                        />

                        {/* Tall Item: Delegation Matrix */}
                        <ResourceCard
                            title="Delegation Matrix"
                            description="Interactive tool to help you identify which tasks to delegate, eliminate, or keep. Find your next hire with clarity."
                            href="/resources/delegation-matrix"
                            icon={LayoutDashboard}
                            badge="Interactive"
                            className="lg:row-span-2 bg-blue-50/30"
                        />

                        {/* Standard Items */}
                        <ResourceCard
                            title="Case Studies"
                            description="Real-world examples of how businesses scaled with AVSPH."
                            href=""
                            icon={FileText}
                            badge="Coming Soon"
                        />

                        <ResourceCard
                            title="FAQs"
                            description="Answers to common questions about our process and pricing."
                            href="/faqs"
                            icon={HelpCircle}
                        />

                        {/* Call to Action Item */}
                        <ResourceCard
                            title="Book a Strategy Call"
                            description="Ready to get started? Let's build your dream team."
                            href="/booking"
                            icon={Phone}
                            variant="highlight"
                            className="md:col-span-2 lg:col-span-1"
                        />

                    </div>
                </div>
            </section>
        </main>
    );
}
