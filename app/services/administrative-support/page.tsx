import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Clock, DollarSign, Shield, Star, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { administrativeFeatures, administrativeFaqs } from "@/data/service.data";


export const metadata: Metadata = {
    title: "Administrative Support Virtual Assistants | AVSPH - Reliable & Efficient",
    description:
        "Hire top-tier administrative support virtual assistants. Expert email management, scheduling, data entry, and office coordination for growing businesses.",
    openGraph: {
        title: "Administrative Support Virtual Assistants | AVSPH",
        description:
            "Hire top-tier administrative support virtual assistants. Expert email management, scheduling, data entry, and office coordination for growing businesses.",
        url: "https://advancedvirtualstaff.com/services/administrative-support",
        siteName: "Advanced Virtual Staff",
        locale: "en_US",
        type: "website",
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Administrative Support Virtual Assistant",
    provider: {
        "@type": "Organization",
        name: "Advanced Virtual Staff",
        url: "https://advancedvirtualstaff.com",
    },
    description: "Professional administrative support services including email management, scheduling, and data entry.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Administrative Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Email Management",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Calendar Management",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "CRM Management",
                },
            },
        ],
    },
};

export default function AdministrativeSupportPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-5 bg-[url('/assets/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                            Administrative Support Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                            Reclaim Your Time with Expert <span className="text-primary">Admin Support</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop drowning in busy work. Our premium virtual assistants handle your emails, scheduling, and data so you can focus on growing your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                                Get Started Today
                            </a>
                            <a href="#features" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-100 rounded-full hover:border-gray-300 hover:bg-gray-50">
                                View Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Admin Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We don't just "do tasks". We take ownership of your administrative workflow.
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
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            {/* Placeholder for an image or graphic */}
                            <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-600/5"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Dedicated Talent</h3>
                                        <p className="text-gray-600">Top 1% of VAs in the Philippines</p>
                                    </div>
                                </div>
                            </div>
                            {/* Floating cards could be added here for visual flair */}
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose AVSPH?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We provide more than just staff. We provide a partnership dedicated to your operational excellence.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 mt-1">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Cost Effective</h4>
                                        <p className="text-gray-600">Save up to 70% compared to hiring local staff without compiling on quality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 mt-1">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Fast Turnaround</h4>
                                        <p className="text-gray-600">Get tasks done overnight. Assign work before you sleep and wake up to completed projects.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600 mt-1">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Secure & Reliable</h4>
                                        <p className="text-gray-600">Enterprise-grade security protocols to keep your sensitive business data safe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common questions about our administrative support services.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {administrativeFaqs.map((faq, index) => (
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

            {/* CTA Section */}
            <CTASection />
        </>
    );
}
