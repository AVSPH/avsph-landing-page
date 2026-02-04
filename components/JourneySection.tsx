import { CheckCircle2 } from "lucide-react";

export default function JourneySection() {
    const milestones = [
        {
            year: "2020",
            title: "Our Early Beginning",
            description: "Started as a small virtual assistant service supporting entrepreneurs with essential administrative tasks."
        },
        {
            year: "2022",
            title: "Expanding Our Services",
            description: "Grew our capabilities into project coordination, detailed research tasks, responsive customer support, and operational help."
        },
        {
            year: "2023",
            title: "Strengthening Our Workflow",
            description: "Built a more structured, productivity-focused VA system with efficient processes and task automation."
        },
        {
            year: "2025",
            title: "Becoming a VA Partner",
            description: "Evolved into a complete virtual support team helping startups and growing businesses operate smoothly."
        },
    ];

    return (
        <section className="section bg-white overflow-hidden relative">
            <div className="container relative z-10">
                <div className="mb-20">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Our Journey</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
                        How our virtual assistance <br />
                        <span className="text-blue-600">journey began</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Line Diagram Background - Stylized Curve */}
                    <div className="absolute top-0 left-0 w-full h-64 -translate-y-full hidden lg:block opacity-20 pointer-events-none text-blue-500">
                        {/* SVG Curve simulating the reference graphic */}
                        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,400 C300,350 600,100 1200,0 L1200,400 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Timeline Connector Line (Mobile/Tablet) */}
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-blue-100 hidden lg:block" />

                        {milestones.map((item, i) => (
                            <div key={i} className="relative pt-16 group">
                                {/* Dot */}
                                <div className="absolute top-6 left-0 lg:left-0 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-100 border-4 border-white shadow-sm ring-1 ring-blue-200 group-hover:bg-blue-500 group-hover:ring-blue-500 transition-all duration-300 z-10" />

                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="text-sm font-bold text-blue-600 mb-2 block">{item.year} — {item.title}</span>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Team/Awards Section from Reference */}
                <div className="mt-32 grid lg:grid-cols-2 gap-16 items-end">
                    <div>
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Team Members</p>
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((x) => (
                                <div key={x} className="w-16 h-16 rounded-full border-4 border-white bg-slate-200 shadow-md" />
                            ))}
                            <div className="w-16 h-16 rounded-full border-4 border-white bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                                +20
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg text-slate-600 max-w-md ml-auto">
                            Talented virtual assistants dedicated to supporting your daily work and business growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
