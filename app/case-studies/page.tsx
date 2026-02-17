import { Construction } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Case Studies | Coming Soon",
    description: "Explore our success stories and see how we've helped businesses scale.",
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 max-w-lg w-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                    <Construction className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Coming Soon</h1>
                <p className="text-gray-400 mb-8">
                    We're currently compiling our success stories. Check back soon to see how we've helped businesses like yours scale with ease.
                </p>
                <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Resources
                </Link>
            </div>
        </div>
    );
}
