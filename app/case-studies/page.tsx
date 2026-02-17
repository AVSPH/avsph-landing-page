"use client";

import { ResourceCard } from "@/components/ResourceCard";
import { CASE_STUDIES } from "@/data/case-studies.data";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Metadata cannot be exported from a Client Component.
// If metadata is needed, it should be moved to a layout.tsx or a separate server component wrapper.

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
            <div className="container px-4 md:px-6">
                <div className="mb-12">
                    <Link
                        href="/resources"
                        className="inline-flex items-center text-sm font-medium text-[var(--foreground-light)] hover:text-[var(--primary)] mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--primary)]">
                        Case Studies
                    </h1>
                    <p className="text-xl text-[var(--foreground-light)] max-w-3xl">
                        Real results from real businesses. See the impact of strategic delegation and professional support.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CASE_STUDIES.map((study) => (
                        <ResourceCard
                            key={study.slug}
                            title={study.client}
                            description={study.title} // Use the catchy title as description for the card
                            href={`/case-studies/${study.slug}`}
                            icon={FileText}
                            badge={study.industry}
                            variant="default"
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
