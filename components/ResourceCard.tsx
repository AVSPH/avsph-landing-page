"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
    className?: string;
    variant?: "default" | "featured" | "highlight";
}

export function ResourceCard({
    title,
    description,
    href,
    icon: Icon,
    badge,
    className,
    variant = "default",
}: ResourceCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-3xl p-8 transition-all duration-300",
                "bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1",
                variant === "featured" && "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-blue-50/50",
                variant === "highlight" && "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white border-none",
                className
            )}
        >
            <div className="flex h-full flex-col justify-between gap-6 relative z-10">
                <div className="flex items-start justify-between">
                    <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110",
                        variant === "highlight" ? "bg-white/20 text-white" : "bg-[var(--primary)]/5 text-[var(--primary)]"
                    )}>
                        <Icon className="h-6 w-6" />
                    </div>
                    {badge && (
                        <span className={cn(
                            "inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
                            variant === "highlight"
                                ? "bg-white/20 text-white"
                                : "bg-[var(--accent)]/10 text-[var(--accent)]"
                        )}>
                            {badge}
                        </span>
                    )}
                </div>

                <div>
                    <h3 className={cn(
                        "mb-3 text-2xl font-bold tracking-tight",
                        variant === "highlight" ? "text-white" : "text-[var(--primary)]"
                    )}>
                        {title}
                    </h3>
                    <p className={cn(
                        "text-base leading-relaxed",
                        variant === "highlight" ? "text-white/80" : "text-[var(--foreground-light)]"
                    )}>
                        {description}
                    </p>
                </div>

                <div className={cn(
                    "flex items-center text-sm font-bold mt-auto group-hover:gap-2 transition-all",
                    variant === "highlight" ? "text-white" : "text-[var(--accent)]"
                )}>
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>

            {/* Background Decor */}
            <div className={cn(
                "absolute -right-12 -top-12 h-64 w-64 rounded-full blur-3xl transition-opacity opacity-0 group-hover:opacity-100",
                variant === "highlight" ? "bg-white/10" : "bg-[var(--accent)]/5"
            )}></div>

            {/* Gradient Overlay for Highlight */}
            {variant === "highlight" && (
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}
        </Link>
    );
}
