import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Layers, ClipboardList, Users, TrendingUp, BarChart3 } from "lucide-react";
import CTASection from "@/components/CTASection";
import CTABookACall from "@/components/CTABookACall";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { operationsFeatures, operationsFaqs } from "@/data/service.data";


export const metadata: Metadata = {
    title: "Best Operations & Task Coordination Virtual Assistants | AVSPH",
    description:
        "Hire top-tier operations virtual assistants. Daily task tracking, internal coordination, SOP execution, workflow support, and KPI monitoring.",
    openGraph: {
        title: "Best Operations & Task Coordination Virtual Assistants | AVSPH",
        description:
            "Hire top-tier operations virtual assistants. Daily task tracking, internal coordination, SOP execution, workflow support, and KPI monitoring.",
        url: "https://advancedvirtualstaff.com/services/operations-and-task-coordination",
        siteName: "Advanced Virtual Staff Ph",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/hero-images/administrative-support.jpg", // Using placeholder image
                width: 1200,
                height: 630,
                alt: "Operations & Task Coordination Virtual Assistant",
            },
        ],
    },
    alternates: {
        canonical: "https://advancedvirtualstaff.com/services/operations-and-task-coordination",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Operations & Task Coordination Virtual Assistant",
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
                "Professional operations and task coordination services including daily task tracking, internal coordination, SOP execution, and workflow support.",
            areaServed: "Worldwide",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Operations Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Task Tracking",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Internal Coordination",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "SOP Execution",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "KPI Monitoring",
                        },
                    },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: operationsFaqs.map((faq) => ({
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
                    name: "Operations & Task Coordination",
                    item: "https://advancedvirtualstaff.com/services/operations-and-task-coordination",
                },
            ],
        },
    ],
};

export default function OperationsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero-images/administrative-support.jpg"
                        alt="Operations and Task Coordination Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/50" />
                </div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[url('/assets/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6 border border-indigo-100">
                            Professional Business Operations
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                            Streamline Your <span className="text-primary">Business Operations.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop drowning in chaos. We organize your tasks, enforce your SOPs, and keep your team aligned so you can focus on growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a style={{
                                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                            }} href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                                Get Organized Today
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operational Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We are the glue that holds your business together. From daily checklists to complex project management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operationsFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            {/* Placeholder for an image or graphic */}
                            <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-600/5"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale with Confidence</h3>
                                        <p className="text-gray-600">Structure allows for growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Delegate Operations?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                You can't be the CEO and the office manager at the same time. We handle the day-to-day execution so you can drive the vision.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 mt-1">
                                        <ClipboardList className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Consistency & Quality</h4>
                                        <p className="text-gray-600">We ensure that your SOPs aren't just documents in a folder—they are active processes being followed every day.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 mt-1">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Aligned Teams</h4>
                                        <p className="text-gray-600">We facilitate better communication between the field and the office, reducing errors and friction.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600 mt-1">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Data-Driven Decisions</h4>
                                        <p className="text-gray-600">With accurate KPI tracking, you'll have the numbers you need to make smart business moves.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-3xl pb-2 ">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our operations support.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4  py-2">
                        {operationsFaqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`faq-${index}`}
                                className="bg-white border rounded-xl px-2"
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

            <CTABookACall />
            <CTASection />
        </>
    );
}
