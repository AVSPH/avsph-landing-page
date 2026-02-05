import {
  LayoutGrid,
  Phone,
  DollarSign,
  Calendar,
  ClipboardList,
  TrendingUp,
  Star,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
    const services = [
      {
        icon: <LayoutGrid className="w-7 h-7" />,
        title: "Administrative Support",
        description:
          "Email management, document preparation, CRM updates, and daily office tasks tailored for service businesses.",
        color: "#00B4D8",
      },
      {
        icon: <Phone className="w-7 h-7" />,
        title: "Call Handling & Customer Support",
        description:
          "Inbound call answering, customer inquiries, follow-ups, and missed-call recovery to help you book more jobs.",
        color: "#F5A623",
      },
      {
        icon: <Calendar className="w-7 h-7" />,
        title: "Scheduling & Dispatching",
        description:
          "Appointment scheduling, technician dispatching, route coordination, and calendar management.",
        color: "#10B981",
      },
      {
        icon: <ClipboardList className="w-7 h-7" />,
        title: "Estimates & Invoicing",
        description:
          "Sending estimates, invoices, payment follow-ups, and job documentation support.",
        color: "#8B5CF6",
      },
      {
        icon: <DollarSign className="w-7 h-7" />,
        title: "Bookkeeping Support",
        description:
          "Invoice tracking, expense categorization, payroll assistance, and basic financial reporting.",
        color: "#EC4899",
      },
      {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Lead Intake & Follow-Ups",
        description:
          "Handling new leads, CRM updates, appointment setting, and consistent follow-ups to close more jobs.",
        color: "#F97316",
      },
      {
        icon: <Star className="w-7 h-7" />,
        title: "Review & Reputation Management",
        description:
          "Review requests, Google & Yelp follow-ups, and reputation monitoring for local service brands.",
        color: "#06B6D4",
      },
      {
        icon: <Layers className="w-7 h-7" />,
        title: "Operations & Task Coordination",
        description:
          "Daily task tracking, internal coordination, SOP execution, and workflow support.",
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
