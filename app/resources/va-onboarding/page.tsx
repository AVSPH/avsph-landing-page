"use client";

import {
    CheckCircle2,
    ShieldCheck,
    FileVideo,
    MessageCircle,
    Calendar,
    Target,
    Users,
    Lightbulb,
    ArrowRight,
    Search,
    UserCircle,
    FileText,
    BookOpen,
    Key,
    RefreshCw,
    CheckSquare,
    Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CTASection from "@/components/CTASection";

const PRE_ONBOARDING_CHECKLIST = [
    {
        title: "Access & Security",
        icon: ShieldCheck,
        color: "text-blue-600",
        bg: "bg-blue-50",
        items: [
            "LastPass, Dashlane, Google Keep, Doc file, Spreadsheet: Create a folder for shared passwords so you don't have to send them over plain text.",
            "Email Alias: Set up a company email (e.g., va@yourcompany.com) or a dedicated Gmail.",
            "Software Access: Add them to your Project Management tool (Asana, Trello, ClickUp), Slack, or CRM."
        ]
    },
    {
        title: 'Documentation',
        icon: FileVideo,
        color: "text-amber-600",
        bg: "bg-amber-50",
        items: [
            "SOPs (Standard Operating Procedures): Loom videos are great for this. Record your screen while doing a task.",
            'Brand Guidelines: Give them a feel for your "voice," color palette, and logo usage.',
            'The "Who\'s Who": A simple list of key contacts or team members they might need to interact with.'
        ]
    },
    {
        title: "Communication Rules",
        icon: MessageCircle,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        items: [
            "Primary Channel: Define where daily talk happens (Slack vs. Email).",
            "Check-in Cadence: Set a weekly 15-minute sync or a daily EOD (End of Day) report.",
            "Emergency Protocol: How should they reach you if something is urgent?"
        ]
    }
];

const FIVE_DAY_PLAN = [
    { day: "Day 1", focus: "Orientation", text: "Meet & Greet via Video Call. Review tools, communication expectations, and your company's mission." },
    { day: "Day 2", focus: "Shadowing", text: 'Have the VA watch you perform 2-3 core tasks. Give them "View Only" access to relevant docs.' },
    { day: "Day 3", focus: "Small Wins", text: 'Assign a "low-stakes" task (e.g., inbox cleanup or data entry). Review it immediately and provide feedback.' },
    { day: "Day 4", focus: "Independence", text: "Let them handle a recurring task solo. Stay available for questions but don't hover." },
    { day: "Day 5", focus: "Review & Pivot", text: "Review the week's work. Ask: 'What was confusing?' and 'What do you need from me to be faster?'" },
];

const PRO_TIPS = [
    { title: "The 80/20 Feedback Loop", text: "In the first two weeks, over-communicate. It's better to give too much direction than to let them guess and have to redo the work." },
    { title: 'The "Loom" Hack', text: "Instead of writing long manuals, record yourself doing the task once. It's faster for you and easier for them to follow." },
    { title: "Encourage Questions", text: 'Tell them, "I\'d rather you ask five questions now than spend five hours on the wrong thing."' },
];

const FOUR_PILLARS = [
    {
        title: "Cultural Immersion",
        purpose: "To align their mindset with your brand standards.",
        icon: Users,
        color: "text-[var(--primary)]",
        bg: "bg-[var(--primary)]/10",
        details: (
            <div className="space-y-4 mt-5 text-sm text-[var(--foreground-light)]">
                <div>
                    <strong className="text-[var(--primary)] block mb-1">The "Why" Behind the Work:</strong>
                    <p className="italic">"In this business, we don't just [Task, e.g., Answer emails]; we [Result, e.g., Provide peace of mind]. When you perform [Task], remember that it helps the client [Benefit]. Our goal is to always be [Adjective 1] and [Adjective 2]."</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <strong className="block text-[var(--primary)] mb-3">Our Communication Style Guide:</strong>
                    <ul className="space-y-2 list-disc list-inside">
                        <li><strong>Our Voice is:</strong> [e.g., Casual but professional / Highly technical / High-energy]</li>
                        <li><strong>Greeting Preference:</strong> [e.g., 'Hi Name!' vs 'Dear Name,']</li>
                        <li><strong>Sign-off Preference:</strong> [e.g., 'Best,' vs 'Cheers,' vs 'Talk soon!']</li>
                        <li><strong>Examples to Follow:</strong> [Link to a 'Golden Email' or perfect project report]</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: 'The "Gradual Release"',
        purpose: "To prevent overwhelm and ensure technical accuracy.",
        icon: Target,
        color: "text-blue-600",
        bg: "bg-blue-50",
        details: (
            <ul className="space-y-4 mt-5 text-sm text-[var(--foreground-light)]">
                <li className="flex gap-3"><span className="font-bold text-gray-900 shrink-0 whitespace-nowrap">Phase 1 (I Do):</span> <span className="italic">"Watch this Loom video [Link] of me doing [Task]. Take notes on any steps that aren't clear."</span></li>
                <li className="flex gap-3"><span className="font-bold text-gray-900 shrink-0 whitespace-nowrap">Phase 2 (We Do):</span> <span className="italic">"On our Zoom call at [Time], we will do [Task] together. I'll let you drive the screen while I talk you through it."</span></li>
                <li className="flex gap-3"><span className="font-bold text-gray-900 shrink-0 whitespace-nowrap">Phase 3 (You Do):</span> <span className="italic">"Today, try [Task] on your own. Save it as a Draft and send me a message when it's ready for review. Don't worry about speed yet; focus on the process."</span></li>
            </ul>
        )
    },
    {
        title: "Permission to Fail (Safe Sandbox)",
        purpose: "To build confidence and improve your documentation.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        details: (
            <div className="space-y-5 mt-5 text-sm text-[var(--foreground-light)]">
                <div>
                    <strong className="text-gray-900 block mb-2">The Sandbox Task:</strong>
                    <p className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 italic">"For your first week, I want you to handle [Low-Stakes Task, e.g., Organizing the 'Inspiration' folder]. If anything goes wrong here, it's a quick fix, so feel free to experiment."</p>
                </div>
                <div>
                    <strong className="text-gray-900 block mb-2">The "Course Correction" Script:</strong>
                    <p className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 italic">"I noticed [Specific Error] in the last task. No big deal! It looks like our SOP (Standard Operating Procedure) might be missing a step or is a bit confusing. Can you look at the SOP and suggest how we should re-word it so this mistake doesn't happen again?"</p>
                </div>
            </div>
        )
    },
    {
        title: "The Feedback Loop (Daily Check-in)",
        purpose: "To maintain momentum and catch 'bottlenecks' early.",
        icon: RefreshCw,
        color: "text-[var(--accent)]",
        bg: "bg-[var(--accent)]/10",
        details: (
            <div className="space-y-4 mt-5 text-sm text-[var(--foreground-light)]">
                <p><strong className="text-gray-900">The Daily "3-Bullet" Update (VA sends this via Slack/Email):</strong></p>
                <ul className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-3">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> <span className="font-bold text-gray-900 shrink-0">Done:</span> <span>What did you complete today?</span></li>
                    <li className="flex gap-3 items-start"><ArrowRight className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" /> <span className="font-bold text-gray-900 shrink-0">Next:</span> <span>What is your priority for tomorrow?</span></li>
                    <li className="flex gap-3 items-start"><ShieldCheck className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" /> <span className="font-bold text-gray-900 shrink-0">Blocked:</span> <span>Is there any password, file, or answer you are waiting on from me?</span></li>
                </ul>
            </div>
        )
    }
];

const ACTIVITY_TEMPLATES = [
    {
        title: "1. The Audit Task",
        icon: Search,
        text: "\"I've been doing [Process Name] the same way for a year. Since you have a fresh set of eyes, can you watch my Loom video on this and tell me 2 things you think could be done faster or better? I value your expertise!\""
    },
    {
        title: "2. The Bio Write-Up",
        icon: UserCircle,
        text: "\"We are so excited to have you! Please write a 3-4 sentence 'Professional Bio' about yourself. Include your background, what you're great at, and one fun fact (like a hobby or favorite food). I'll be sharing this with the team so they can get to know you.\""
    },
    {
        title: "3. The Scavenger Hunt",
        icon: Target,
        text: "To make sure you have the 'keys to the kingdom,' find these 5 things and send me the links/names:",
        list: [
            "Our Brand Logo file.",
            "The Client Contract template.",
            "The password for the CRM (Check LastPass).",
            "My 'Frequently Used Links' doc.",
            "The folder for [Specific Project]."
        ]
    }
];

const WELCOME_KIT = [
    {
        title: "1. Mission & Values",
        items: [
            "Our Mission: [Insert 1-sentence mission]",
            "Core Values: [e.g., Speed, Accuracy, Transparency]"
        ]
    },
    {
        title: "2. Key Contacts",
        items: [
            "Primary Manager: [Name/Contact]",
            "Emergency Contact: [Phone/WhatsApp]"
        ]
    },
    {
        title: "3. Communication Hub",
        items: [
            "Primary Tool: [e.g., Slack/Discord]",
            "Check-in Style: [e.g., Daily EOD reports]",
            "Meetings: [e.g., Monday 10 AM Sync]"
        ]
    },
    {
        title: "4. Tech Stack & Access",
        items: [
            "Password Manager: [Link to LastPass/Dashlane]",
            "Project Management: [Link to Asana/Trello]",
            "File Storage: [Link to Google Drive/Dropbox]"
        ]
    },
    {
        title: "5. SOPs (Standard Operating Procedures)",
        items: [
            "[Link to Video Training Folder]",
            "[Link to Written Manuals]"
        ]
    },
    {
        title: "6. Feedback & Growth",
        items: [
            "How we handle corrections: [Describe feedback loop]",
            "Review Schedule: [e.g., 30-day, 90-day review]"
        ]
    }
];

export default function VAOnboardingPage() {
    return (
        <main className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="container relative z-10 text-center">
                    <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
                        Resources
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[var(--primary)]  leading-tight">
                        How to Successfully <br className="hidden md:block" />
                        <span className="text-[var(--accent)]">Onboard Your New VA</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--foreground-light)] max-w-3xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: "0.2s" }}>
                        The complete, step-by-step blueprint to integrate your Virtual Assistant into your business for long-term success.
                    </p>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-20 bg-[var(--primary)]">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">The Pre-Onboarding <span className="text-[var(--accent)]">Checklist</span></h2>
                        <p className="text-blue-100 text-lg md:text-xl leading-relaxed">Before day one, ensure you have the "infrastructure" ready so they aren't sitting idle.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
                        {PRE_ONBOARDING_CHECKLIST.map((checklist, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-black/20 border border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                                <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-tight text-center">{checklist.title}</h3>
                                <div className="space-y-6 flex-1">
                                    {checklist.items.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="mt-0.5 shrink-0">
                                                <CheckSquare className={cn("w-5 h-5", checklist.color)} strokeWidth={2.5} />
                                            </div>
                                            <p className="text-[#64748B] text-[15px] leading-relaxed group-hover:text-gray-900 transition-colors">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5-Day Plan Section */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] mb-4">The 5-Day Success Plan</h2>
                            <p className="text-[var(--foreground-light)] text-lg">The goal for Week 1 isn't total mastery; it's integration and confidence.</p>
                        </div>

                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                            {FIVE_DAY_PLAN.map((plan, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <span className="font-bold text-sm">{idx + 1}</span>
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[var(--primary)]/30 transition-all duration-300 ml-4 md:ml-0">
                                        <div className="flex flex-col mb-2">
                                            <span className="text-[var(--accent)] font-bold text-sm uppercase tracking-wider">{plan.day}</span>
                                            <h3 className="text-xl font-bold text-primary">{plan.focus}</h3>
                                        </div>
                                        <p className="text-[var(--foreground-light)]">{plan.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pro Tips Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Visual enhancements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="bg-[var(--primary)] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden max-w-6xl mx-auto shadow-[var(--primary)]/20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Lightbulb className="w-8 h-8 text-[var(--accent)]" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Pro-Tips for Success</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {PRO_TIPS.map((tip, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                        {tip.title}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Four Pillars */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] mb-4">The Four Pillars of Effective Onboarding</h2>
                        <p className="text-[var(--foreground-light)] text-lg">Master these four core principles to turn a new hire into a long-term asset.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {FOUR_PILLARS.map((pillar, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", pillar.bg, pillar.color)}>
                                        <pillar.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pillar {idx + 1}: <br className="hidden lg:block" /> {pillar.title}</h3>
                                        <p className="text-[var(--accent)] font-medium text-sm">Purpose: {pillar.purpose}</p>
                                    </div>
                                </div>
                                <div className="flex-1 bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                                    {pillar.details}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive & Welcome Kit */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container px-4 md:px-6 mb-10">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Deep Dive Activity Templates */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[var(--primary)] mb-3">Deep Dive Activity Templates</h2>
                                <p className="text-[var(--foreground-light)]">Use these templates to create engagement early in the onboarding process.</p>
                            </div>

                            <div className="space-y-6">
                                {ACTIVITY_TEMPLATES.map((activity, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                                                <activity.icon className="w-5 h-5" />
                                            </div>
                                            {activity.title}
                                        </h3>
                                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                            <p className="italic text-gray-700 leading-relaxed text-sm mb-3">"{activity.text}"</p>
                                            {activity.list && (
                                                <ul className="space-y-2 mt-3 pl-2">
                                                    {activity.list.map((item, i) => (
                                                        <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                                                            <LinkIcon className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Welcome Kit */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[var(--primary)] mb-3">VA Welcome Kit: Overview</h2>
                                <p className="text-[var(--foreground-light)]">A snapshot of what to include in your welcome package.</p>
                            </div>

                            <div className="bg-[var(--primary)] rounded-[2rem] p-6 md:p-8 text-white shadow-xl">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {WELCOME_KIT.map((section, idx) => (
                                        <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/10">
                                            <h3 className="font-bold text-lg text-[var(--accent)] mb-4 pb-2 border-b border-white/10">{section.title}</h3>
                                            <ul className="space-y-3">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0"></span>
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-5 bg-white shadow-md rounded-2xl border border-gray-100 text-center">
                                    <p className="text-[var(--primary)] font-medium text-sm">
                                        <strong className="block text-lg mb-2 text-gray-900">Note on Expectations:</strong>
                                        Most VAs won't hit 100% productivity until Week 3 or 4. Treat the onboarding month as an investment. You are "slowing down now so you can go faster later."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>  
                </div>
                <CTASection/>
            </section>
        </main>
    );
}
