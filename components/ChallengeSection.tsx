import { Clock, Users, DollarSign, CheckCircle } from "lucide-react";

export default function ChallengeSection() {
    const challenges = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Spending too much time on repetitive tasks?",
            description: "Free up 20+ hours per week by delegating admin work, data entry, and routine operations.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Struggling to find reliable talent?",
            description: "Access our pre-vetted pool of exceptional virtual assistants.",
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "Worried about the cost of hiring?",
            description: "Save up to 70% compared to local hires with our affordable hourly rates and zero overhead costs.",
        },
    ];

    return (
        <section className="section" style={{ background: "var(--background-alt)" }}>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                            style={{ color: "var(--secondary)" }}
                        >
                            The Challenge
                        </span>
                        <h2 className="mb-6">
                            Running a Business is{" "}
                            <span className="gradient-text">Hard Enough</span>
                        </h2>
                        <p className="text-lg mb-8" style={{ color: "var(--foreground-light)" }}>
                            As a business owner, you wear too many hats. Your time is valuable,
                            and spending it on tasks that could be delegated is costing you growth opportunities.
                        </p>

                        <div className="space-y-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="flex gap-4">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "rgba(4, 68, 101, 0.1)", // derived from new secondary
                                            color: "var(--secondary)",
                                        }}
                                    >
                                        {challenge.icon}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1 text-base"
                                            style={{ color: "var(--primary)" }}
                                        >
                                            {challenge.title}
                                        </h4>
                                        <p className="text-sm" style={{ color: "var(--muted)" }}>
                                            {challenge.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Solution Card */}
                    <div className="relative">
                        <div
                            className="card p-8"
                            style={{
                                background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                                border: "none",
                            }}
                        >
                            <div className="text-white">
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                                    style={{ background: "rgba(255, 255, 255, 0.15)" }}
                                >
                                    <CheckCircle className="w-4 h-4" />
                                    The Solution
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                    Let Us Handle the Hiring
                                </h3>
                                <p className="text-white/80 mb-6">
                                    We take the burden off your shoulders. From talent sourcing to
                                    performance monitoring, we provide end-to-end staffing solutions
                                    so you can focus on what matters.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Rigorous vetting process",
                                        "Perfect talent matching",
                                        "Ongoing support & monitoring",
                                        "No lock-in contract arrangements",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-white/90">
                                            <span
                                                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                                style={{ background: "var(--accent)" }}
                                            >
                                                <CheckCircle className="w-3 h-3 text-white" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="btn-primary">
                                    Get Started Today
                                </a>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div
                            className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl"
                            style={{ background: "var(--secondary)", opacity: 0.2 }}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
