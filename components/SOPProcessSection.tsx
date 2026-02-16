"use client";

import {
    MapPin,
    FileText,
    Users,
    Activity,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import CTABookACall from "./CTABookACall";

export default function SOPProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Role-Specific SOP Mapping",
            subtitle: "No generic training. Only job-specific systems.",
            description: "Before a VA is assigned, we define exactly what success looks like for the role:",
            points: [
                "Daily responsibilities",
                "Tools and software used",
                "Communication rules",
                "Escalation paths",
                "KPIs and performance standards"
            ],
            footer: "If you already have SOPs, we train directly from them. If you don’t, we help create clean, easy-to-follow SOPs based on proven service-based company workflows.",
            icon: <MapPin className="w-6 h-6 text-white" />
        },
        {
            number: "02",
            title: "Pre-Deployment VA Training",
            subtitle: "Your VA is trained before they touch your business.",
            description: "Each VA completes:",
            points: [
                "SOP walkthroughs",
                "Tool and software simulations",
                "Script and workflow training",
                "Real-world task scenarios"
            ],
            footer: "They don’t start until they can perform tasks independently and accurately.",
            icon: <FileText className="w-6 h-6 text-white" />
        },
        {
            number: "03",
            title: "Live Onboarding & Shadowing",
            subtitle: "Smooth handoff. No disruption.",
            description: "Once assigned, your VA:",
            points: [
                "Shadows your current process",
                "Learns your brand voice and preferences",
                "Adjusts SOPs to match your operation",
                "Aligns with your team’s communication style"
            ],
            footer: "This ensures a seamless transition, no micromanaging required.",
            icon: <Users className="w-6 h-6 text-white" />
        },
        {
            number: "04",
            title: "Quality Control & Performance Monitoring",
            subtitle: "Consistency doesn’t happen by accident.",
            description: "We actively monitor:",
            points: [
                "Task accuracy",
                "SOP compliance",
                "Response times",
                "Customer interaction quality"
            ],
            footer: "If performance slips, we retrain immediately, before it becomes a problem.",
            icon: <Activity className="w-6 h-6 text-white" />
        },
        {
            number: "05",
            title: "Continuous SOP Optimization",
            subtitle: "As your business grows, your systems grow with it.",
            description: "We update SOPs as:",
            points: [
                "Services expand",
                "Tools change",
                "Volume increases",
                "Team structure evolves"
            ],
            footer: "Your VA scales with you, not against you.",
            icon: <TrendingUp className="w-6 h-6 text-white" />
        }
    ];


    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
                        How Our SOP Training Works
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--primary)]">
                        Systemized. Documented. <br />
                        <span className="text-[var(--accent)]">Performance-Driven.</span>
                    </h2>
                    <p className="text-lg text-[var(--foreground-light)] leading-relaxed">
                        We don’t place random VAs and hope for the best. Every VA we deploy is trained using clear, documented Standard Operating Procedures (SOPs) designed specifically for HVAC and home service businesses.
                        Our process ensures your VA follows your workflows the same way, every time.
                    </p>
                </div>

                <div className="relative mb-20">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--primary)] to-[var(--primary) hidden lg:block -translate-x-1/2"></div>

                    <div className="space-y-12 lg:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Timeline Node (Desktop) */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)] border-4 border-white shadow-lg z-10 text-white font-bold">
                                    {index + 1}
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 lg:text-right">
                                    <div className={`p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${index % 2 === 1 ? 'lg:text-left' : ''}`}>
                                        <div className="flex items-center gap-4 mb-4 lg:hidden">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white font-bold text-sm">
                                                {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-[var(--primary)]">{step.title}</h3>
                                        </div>

                                        <h3 className="text-2xl font-bold text-[var(--primary)] mb-2 hidden lg:block">{step.title}</h3>
                                        <p className="text-[var(--accent)] font-semibold mb-4">{step.subtitle}</p>

                                        <p className="text-[var(--foreground)] mb-4">{step.description}</p>

                                        <ul className={`space-y-2 mb-6 inline-block text-left`}>
                                            {step.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[var(--foreground-light)]">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="text-sm text-[var(--foreground-light)] italic border-t border-gray-200 pt-4 mt-2">
                                            {step.footer}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Side for Layout Balance */}
                                <div className="w-full lg:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <CTABookACall
                    title="Want SOP-trained staff that actually follow your systems?"
                    subtitle="Let’s talk about how our specialized VA training can transform your operations."
                />
            </div>
        </section>
    );
}
