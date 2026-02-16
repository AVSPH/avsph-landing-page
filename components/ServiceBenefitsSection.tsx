
import Image from "next/image";
import { DollarSign, Clock, Shield} from "lucide-react";

export default function ServiceBenefitsSection() {
    
    return(
            <section className="py-20 bg-[var(--primary)] text-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            {/* Benefits Image */}
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/assets/hero-team.png"
                                    alt="Dedicated Administrative Support Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose AVSPH for Admin Support?</h2>
                            <p className="text-lg text-blue-100 mb-8">
                                We provide more than just remote staff. We provide a strategic partnership dedicated to your operational excellence and scalability.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white mt-1 border border-white/10">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Cost-Effective Outsourcing</h4>
                                        <p className="text-blue-100/90">Save up to 70% on overhead compared to hiring local staff, without compromising on work quality or reliability.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white mt-1 border border-white/10">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Rapid Turnaround & Efficiency</h4>
                                        <p className="text-blue-100/90">Experience the "follow the sun" model. Assign tasks before you sleep and wake up to completed projects.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-text mt-1 border border-white/10">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Enterprise-Grade Security</h4>
                                        <p className="text-blue-100/90">We utilize NDA protection, secure password management, and encrypted communication to keep your business data safe.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );

}