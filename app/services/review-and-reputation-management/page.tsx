import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Star, MessageSquare, Shield, Globe, TrendingUp } from "lucide-react";
import ServiceBenefitsSection from '@/components/ServiceBenefitsSection'
import CTABookACall from "@/components/CTABookACall";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { reviewFeatures, reviewFaqs } from "@/data/service.data";   


export const metadata: Metadata = {
    title: "Best Review & Reputation Management Virtual Assistants | AVSPH",
    description:
        "Hire top-tier reputation management virtual assistants. Automated review requests, negative feedback mitigation, and cross-platform monitoring.",
    openGraph: {
        title: "Best Review & Reputation Management Virtual Assistants | AVSPH",
        description:
            "Hire top-tier reputation management virtual assistants. Automated review requests, negative feedback mitigation, and cross-platform monitoring.",
        url: "https://advancedvirtualstaff.com/services/review-and-reputation-management",
        siteName: "Advanced Virtual Staff Ph",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/hero-images/administrative-support.jpg", // Using placeholder image
                width: 1200,
                height: 630,
                alt: "Review & Reputation Management Virtual Assistant",
            },
        ],
    },
    alternates: {
        canonical: "https://advancedvirtualstaff.com/services/review-and-reputation-management",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Review & Reputation Management Virtual Assistant",
            provider: {
                "@type": "Organization",
                name: "Advanced Virtual Staff Ph",
                url: "https://advancedvirtualstaff.com",
                logo: "https://advancedvirtualstaff.com/assets/logo.png",
                sameAs: [
                    "https://www.facebook.com/advancedvirtualstaffph",
                    "https://www.linkedin.com/company/advanced-virtual-staff-ph",
                ],
            },
            description:
                "Professional review and reputation management services including automated review requests, negative feedback mitigation, and cross-platform monitoring.",
            areaServed: "Worldwide",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Reputation Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Review Requests",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Negative Feedback Mitigation",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Response Management",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Review Marketing",
                        },
                    },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: reviewFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://advancedvirtualstaff.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://advancedvirtualstaff.com/services",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Review & Reputation Management",
                    item: "https://advancedvirtualstaff.com/services/review-and-reputation-management",
                },
            ],
        },
    ],
};

export default function ReviewManagementPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-20 lg:pt-32 pb-20 overflow-hidden bg-[var(--background)]">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content Side */}
                        <div className="text-left animate-slide-up">
                            <span className="inline-block py-2 px-4 rounded-full bg-cyan-50 text-cyan-600 font-bold text-sm tracking-wide mb-6 border border-cyan-100">
                                Professional Reputation Management
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                                Turn Happy Customers <br />
                                into <span className="text-[var(--accent)]">5-Star Reviews.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--foreground-light)] mb-8 leading-relaxed max-w-xl">
                                Build unbreakable trust. We automate review requests, monitor every platform, and help you dominate your local market with social proof.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="btn-primary"
                                >
                                    Get Started Today
                                </a>
                                <a
                                    href="#features"
                                    className="btn-secondary"
                                >
                                    See How We Help
                                </a>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative animate-fade-in lg:h-[600px] h-[400px] w-full">
                            {/* Decorative background blob/shape */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-50/50 rounded-full blur-3xl -z-10"></div>

                            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                                <Image
                                    src="https://res.cloudinary.com/drpxke63n/image/upload/v1771238702/5-benefits-of-online-reputation-management_se2trl.jpg"
                                    alt="Review and Reputation Management Background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Subtle overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dominate Local Search</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Reviews are the currency of the internet. We help you mint more of them and protect your reputation from negativity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviewFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                                    <Star className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <ServiceBenefitsSection />

            {/* FAQs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-3xl pb-2 ">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our reputation management services.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4  py-2">
                        {reviewFaqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`faq-${index}`}
                                className="bg-white border rounded-xl px-2 last:border-b"
                            >
                                <AccordionTrigger className="px-4 py-4 hover:no-underline text-lg font-semibold text-gray-900 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <CTABookACall
                title="Protect your reputation."
                subtitle="Schedule a free consultation to discuss your reputation management needs and find your perfect virtual assistant match."
            />
        </>
    );
}
