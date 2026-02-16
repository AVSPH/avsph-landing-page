import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Clock, DollarSign, Shield, Receipt, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import CTABookACall from "@/components/CTABookACall";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { estimatesFeatures, estimatesFaqs } from "@/data/service.data";


export const metadata: Metadata = {
    title: "Best Estimates & Invoicing Virtual Assistants | AVSPH",
    description:
        "Hire top-tier estimates and invoicing virtual assistants. Rapid estimate creation, invoice generation, payment follow-ups, and job documentation management.",
    openGraph: {
        title: "Best Estimates & Invoicing Virtual Assistants | AVSPH",
        description:
            "Hire top-tier estimates and invoicing virtual assistants. Rapid estimate creation, invoice generation, payment follow-ups, and job documentation management.",
        url: "https://advancedvirtualstaff.com/services/estimates-and-invoicing",
        siteName: "Advanced Virtual Staff Ph",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/hero-images/administrative-support.jpg", // Using placeholder image
                width: 1200,
                height: 630,
                alt: "Estimates and Invoicing Virtual Assistant",
            },
        ],
    },
    alternates: {
        canonical: "https://advancedvirtualstaff.com/services/estimates-and-invoicing",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Estimates & Invoicing Virtual Assistant",
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
                "Professional estimates and invoicing services including rapid estimate creation, invoice generation, payment follow-ups, and job documentation management.",
            areaServed: "Worldwide",
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Estimates & Invoicing Services",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Rapid Estimate Creation",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Invoice Generation",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Payment Follow-Ups",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Job Documentation",
                        },
                    },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: estimatesFaqs.map((faq) => ({
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
                    name: "Estimates & Invoicing",
                    item: "https://advancedvirtualstaff.com/services/estimates-and-invoicing",
                },
            ],
        },
    ],
};

export default function EstimatesPage() {
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
                        alt="Estimates and Invoicing Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/50" />
                </div>
                <div className="absolute inset-0 z-0 opacity-5 bg-[url('/assets/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-6 border border-purple-100">
                            Professional Financial Admin Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                            Get Paid Faster. <span className="text-primary">Less Paperwork.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop letting cash flow suffer because you're too busy to invoice. We handle estimates, invoicing, and follow-ups so you can focus on the work.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a style={{
                                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                            }} href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1">
                                Get Started Today
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Streamline Your Cash Flow</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From the initial quote to the final payment, we ensure your financial documentation is professional, accurate, and on time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {estimatesFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                    <Receipt className="w-6 h-6" />
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
                                        <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Proposals</h3>
                                        <p className="text-gray-600">Win more jobs with speed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Delegate Invoicing?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Administrative lag is the #1 killer of cash flow for service businesses. We eliminate the bottleneck between finishing the job and sending the bill.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 mt-1">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Improve Cash Flow</h4>
                                        <p className="text-gray-600">Invoices sent within 24 hours of job completion are paid 50% faster. We ensure they go out instantly.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600 mt-1">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Win More Bids</h4>
                                        <p className="text-gray-600">Speed wins. By getting a professional estimate to the customer before your competitor does, you increase your close rate.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600 mt-1">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Audit-Proof Records</h4>
                                        <p className="text-gray-600">We meticulously organize every signed document, permit, and changelog so you're always prepared.</p>
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
                        <p className="text-gray-600">Common questions about our estimates and invoicing services.</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4  py-2">
                        {estimatesFaqs.map((faq, index) => (
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
                title="Improve your cash flow."
                subtitle="Schedule a free consultation to discuss your estimates and invoicing needs and find your perfect virtual assistant match."
            />
        </>
    );
}
