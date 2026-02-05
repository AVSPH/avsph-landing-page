import {
    LayoutGrid,
    MessageSquare,
    DollarSign,
    Monitor,
    Share2,
    TrendingUp,
    Settings,
    Layers,
    ArrowRight
} from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <LayoutGrid className="w-7 h-7" />,
            title: "Administrative Support",
            description: "Email management, calendar scheduling, data entry, and document preparation.",
            color: "#00B4D8",
        },
        {
            icon: <MessageSquare className="w-7 h-7" />,
            title: "Customer Service",
            description: "24/7 customer support, live chat handling, and client relationship management.",
            color: "#F5A623",
        },
        {
            icon: <DollarSign className="w-7 h-7" />,
            title: "Bookkeeping & Finance",
            description: "Invoicing, expense tracking, financial reports, and accounts management.",
            color: "#10B981",
        },
        {
            icon: <Monitor className="w-7 h-7" />,
            title: "Web Development",
            description: "Website building, maintenance, WordPress management, and landing pages.",
            color: "#8B5CF6",
        },
        {
            icon: <Share2 className="w-7 h-7" />,
            title: "Social Media Management",
            description: "Content creation, scheduling, community management, and analytics.",
            color: "#EC4899",
        },
        {
            icon: <TrendingUp className="w-7 h-7" />,
            title: "Lead Generation",
            description: "Prospect research, cold outreach, CRM management, and appointment setting.",
            color: "#F97316",
        },
        {
            icon: <Settings className="w-7 h-7" />,
            title: "Technical Support",
            description: "IT helpdesk, software troubleshooting, and technical documentation.",
            color: "#06B6D4",
        },
        {
            icon: <Layers className="w-7 h-7" />,
            title: "Project Management",
            description: "Task coordination, team communication, and project tracking.",
            color: "#0F2A4A",
        },
    ];

    return (
        <section id="services" className="section" style={{ background: "#FFFFFF" }}>
            <div className="container">
                <div className="text-center mb-16">
                    <span
                        className="text-sm font-semibold uppercase tracking-wider mb-4 block"
                        style={{ color: "var(--secondary)" }}
                    >
                        Our Services
                    </span>
                    <h2 className="section-title">
                        Expert <span className="gradient-text">Virtual Assistants</span> for Every Need
                    </h2>
                    <p className="section-subtitle">
                        From administrative tasks to specialized technical work, our virtual assistants
                        are equipped to handle all your business needs with excellence.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-[var(--card)] border border-[var(--border-light)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                style={{
                                    background: `${service.color}10`,
                                    color: service.color,
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3
                                className="font-semibold mb-3 text-lg"
                                style={{ color: "var(--primary)" }}
                            >
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-light)" }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#contact" className="btn-secondary">
                        Need a Custom Solution?
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
