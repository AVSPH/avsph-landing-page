import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Clock, DollarSign, Shield, Star, Users } from "lucide-react";
import ServiceBenefitsSection from "@/components/ServiceBenefitsSection";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { administrativeFeatures, administrativeFaqs } from "@/data/service.data";
import CTABookACall from "@/components/CTABookACall";


export const metadata: Metadata = {
    title: "Best Administrative Support Virtual Assistants | AVSPH - Reliable & Secure",
    description:
        "Hire top-tier administrative support virtual assistants. Expert email management, scheduling, data entry, CRM maintenance, and travel planning for growing businesses.",
    openGraph: {
        title: "Best Administrative Support Virtual Assistants | AVSPH",
        description:
            "Hire top-tier administrative support virtual assistants. Expert email management, scheduling, data entry, CRM maintenance, and travel planning for growing businesses.",
        url: "https://advancedvirtualstaff.com/services/administrative-support",
        siteName: "Advanced Virtual Staff Ph",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/hero-images/administrative-support.jpg",
                width: 1200,
                height: 630,
                alt: "Administrative Support Virtual Assistant",
            },
        ],
    },
    alternates: {
        canonical: "https://advancedvirtualstaff.com/services/administrative-support",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Administrative Support Virtual Assistant",
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
                "Professional administrative support services including email management, calendar scheduling, data entry, CRM maintenance, and travel planning.",
            areaServed: "Worldwide",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Administrative Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Email & Inbox Management",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Calendar & Schedule Management",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "CRM Management & Data Entry",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Travel & Itinerary Planning",
                        },
                    },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: administrativeFaqs.map((faq) => ({
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
                    name: "Administrative Support",
                    item: "https://advancedvirtualstaff.com/services/administrative-support",
                },
            ],
        },
    ],
};

export default function AdministrativeSupportPage() {
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
                            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6 border border-blue-100">
                                Premium Administrative Support
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
                                Reliable Admin Support, <br />
                                <span className="text-[var(--accent)]">Done Your Way</span>, Every Time.
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--foreground-light)] mb-8 leading-relaxed max-w-xl">
                                Stop getting bogged down by administrative tasks. Our vetted administrative VAs handle your inbox, complex scheduling, CRM, and data entry so you can focus on scaling your business.
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                                <Image
                                    src="https://res.cloudinary.com/drpxke63n/image/upload/v1771237552/two-asian-businesswomen-sitting-together-office-desk-looking-computer-screen_1_dctsjx.jpg"
                                    alt="Administrative Support Virtual Assistant"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Administrative Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We don't just "do tasks". We take ownership of your operational workflow. From inbox management to complex travel logistics, our VAs are trained to deliver excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {administrativeFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                    <CheckCircle className="w-6 h-6" />
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
                        <p className="text-gray-600">Common questions about our administrative support services.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4  py-2">
                        {administrativeFaqs.map((faq, index) => (
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
                title="Get admin support that follows systems, not guesswork."
                subtitle="Schedule a free consultation to discuss your administrative needs and find your perfect virtual assistant match."
            />
        </>
    );
}
