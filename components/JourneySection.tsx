import { CheckCircle2 } from "lucide-react";
import NextImage from "next/image";

interface TeamMember {
    name: string;
    src: string;
}

const teamMembers: TeamMember[] = [
    { name: "Team Member 1", src: "/team/1.png" },
    { name: "Team Member 2", src: "/team/2.png" },
    { name: "Team Member 3", src: "/team/3.png" },

];

export default function JourneySection() {
    const milestones = [
        {
            year: "July 2022",
            title: "AVS Started",
            description: "In July 2022, AVS (Advanced Virtual Staff) was established as a new business venture."
        },
        {
            year: "August 2022",
            title: "Gained 3 Clients",
            description: "It quickly gained momentum and acquired three clients within a month, in August 2022."
        },
        {
            year: "May 2023",
            title: "Hired 30+ VAs",
            description: "AVS hired over 30 virtual assistants on the 10th month with purely organic marketing."
        },
        {
            year: "July 2023",
            title: "One Year Anniversary",
            description: "70+ Virtual Assistants, more than 30+ clients in different fields."
        },
    ];

    return (
        <section className="section bg-primary overflow-hidden relative">
            <div className="container relative z-10">
                <div className="mb-20">
                    <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-4">Our Journey</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
                        How our virtual assistance <br />
                        <span className="text-accent">journey began</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* The Line Diagram Background - Stylized Curve */}
                    <div className="absolute top-0 left-0 w-full h-64 -translate-y-full hidden lg:block opacity-10 pointer-events-none text-white">
                        {/* SVG Curve simulating the reference graphic */}
                        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
                            <path d="M0,400 C300,350 600,100 1200,0 L1200,400 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Timeline Connector Line (Mobile/Tablet) */}
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-white/20 hidden lg:block" />

                        {milestones.map((item, i) => (
                            <div key={i} className="relative pt-16 group">
                                {/* Dot */}
                                <div className="absolute top-6 left-0 lg:left-0 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-sm ring-1 ring-white/20 group-hover:bg-accent group-hover:ring-accent transition-all duration-300 z-10" />

                                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <span className="text-sm font-bold text-primary mb-2 block">{item.year} — {item.title}</span>
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
                        <p className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-4">Team Members</p>
                        <div className="flex -space-x-4">
                            {teamMembers.slice(0, 3).map((member, i) => (
                                <div key={i} className="relative w-16 h-16 rounded-full border-4 border-white bg-blue-800 overflow-hidden">
                                    <NextImage
                                        src={member.src}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-16 h-16 rounded-full border-4 border-primary bg-accent text-white flex items-center justify-center font-bold shadow-md">
                                +20
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg text-blue-100 max-w-md ml-auto">
                            Talented virtual assistants dedicated to supporting your daily work and business growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
