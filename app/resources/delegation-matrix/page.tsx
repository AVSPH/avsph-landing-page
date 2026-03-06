"use client";

import { useState } from "react";
import { DragDropProvider, DragOverlay } from "@dnd-kit/react";
import { useDraggable } from "@dnd-kit/react";
import { useDroppable } from "@dnd-kit/react";
import {
    LayoutDashboard,
    ArrowRight,
    Trash2,
    CheckCircle,
    Briefcase,
    Calendar,
    Mail,
    Phone,
    FileText,
    Instagram,
    Plane,
    Database,
    DollarSign,
    RefreshCw,
    GripVertical,
    User,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Types
type TaskCategory = "bank" | "do" | "schedule" | "delegate" | "delete";

type TaskItem = {
    id: string;
    label: string;
    icon: React.ElementType;
    category: TaskCategory;
};

type Quadrant = {
    id: TaskCategory;
    title: string;
    description: string;
    color: string;
    bg: string;
    border: string;
    icon: React.ElementType;
};

// Initial Data
const INITIAL_TASKS: TaskItem[] = [
    { id: "admin", label: "Managing emails, booking meetings, travel planning, filing digital receipts.", icon: Mail, category: "bank" },
    { id: "sales", label: "Finding leads on LinkedIn, cold emailing, following up with prospects.", icon: Briefcase, category: "bank" },
    { id: "support", label: "Answering \"how-to\" questions, onboarding new clients, sending contracts.", icon: User, category: "bank" },
    { id: "appointments", label: "Inbound Calls & Setting appointments.", icon: Phone, category: "bank" },
    { id: "content", label: "Posting to Instagram/LinkedIn, editing TikToks/Reels, writing blog posts.", icon: Instagram, category: "bank" },
    { id: "bookkeeping", label: "Sending invoices, following up on late payments, basic bookkeeping.", icon: DollarSign, category: "bank" },
    { id: "technical", label: "Fixing website bugs, setting up email automations, CRM data entry.", icon: Database, category: "bank" },
];

const QUADRANTS: Quadrant[] = [
    {
        id: "do",
        title: "Do It Yourself",
        description: "High Value, High Enjoyment. Your Zone of Genius.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        icon: CheckCircle,
    },
    {
        id: "schedule",
        title: "Schedule It",
        description: "High Value, Low Enjoyment. Important but draining.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: Calendar,
    },
    {
        id: "delegate",
        title: "Delegate It",
        description: "Low Value, Low Enjoyment. The 'Zone of Drudgery'.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        icon: Briefcase,
    },
    {
        id: "delete",
        title: "Delete It",
        description: "Low Value, High Enjoyment? Distractions.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200",
        icon: Trash2,
    },
];

// ─── Draggable Task Card ────────────────────────────────────────────────────
function DraggableTaskCard({
    task,
    variant,
    onRemove,
}: {
    task: TaskItem;
    variant: "bank" | "quadrant";
    onRemove?: () => void;
}) {
    const { ref, isDragSource } = useDraggable({
        id: task.id,
        data: { task },
    });

    return (
        <div
            ref={ref}
            className={cn(
                "p-3 rounded-xl border-2 shadow-sm cursor-grab active:cursor-grabbing group flex items-center justify-between select-none transition-all duration-200",
                variant === "bank"
                    ? "bg-gray-50 hover:bg-white"
                    : "bg-white/90 backdrop-blur-sm",
                isDragSource
                    ? "opacity-30 border-[var(--primary)] scale-95"
                    : variant === "bank"
                        ? "border-gray-200 hover:border-[var(--primary)] hover:shadow-md"
                        : "border-transparent hover:border-gray-200 hover:shadow-md"
            )}
        >
            <div className="flex items-center gap-3 pointer-events-none">
                <div
                    className={cn(
                        "p-2 rounded-lg border transition-colors shrink-0",
                        variant === "bank"
                            ? "bg-white border-gray-100 text-gray-500 group-hover:text-[var(--primary)]"
                            : "bg-gray-50 border-gray-100 text-gray-500"
                    )}
                >
                    <task.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm text-gray-700 text-left leading-snug tracking-tight">{task.label}</span>
            </div>

            {variant === "quadrant" && onRemove ? (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition-all"
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    <Trash2 className="w-3.5 h-3.5" />
                </button>
            ) : (
                <GripVertical className="w-4 h-4 text-gray-300 group-hover:text-[var(--primary)] pointer-events-none" />
            )}
        </div>
    );
}

// ─── Droppable Zone ─────────────────────────────────────────────────────────
function DroppableZone({
    id,
    children,
    className,
}: {
    id: string;
    children: React.ReactNode;
    className?: string;
}) {
    const { ref, isDropTarget } = useDroppable({ id });

    return (
        <div
            ref={ref}
            className={cn(className, isDropTarget && "ring-4 ring-[var(--primary)]/40 ring-offset-2 scale-[1.02] shadow-2xl")}
        >
            {children}
        </div>
    );
}

// ─── Overlay Card (rendered in portal during drag) ──────────────────────────
function OverlayCard({ task }: { task: TaskItem }) {
    const Icon = task.icon;

    return (
        <div className="p-3 rounded-xl border-2 border-[var(--primary)] bg-white shadow-2xl flex items-center gap-3 select-none ring-2 ring-[var(--primary)]/30 rotate-2 scale-105 min-w-[200px] max-w-[400px]">
            <div className="p-2 rounded-lg border bg-white border-gray-100 text-[var(--primary)] shrink-0">
                <Icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm text-gray-800 text-left leading-snug tracking-tight">{task.label}</span>
            <GripVertical className="w-4 h-4 text-[var(--primary)] ml-auto shrink-0" />
        </div>
    );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function DelegationMatrixPage() {
    const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
    const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

    const moveTask = (taskId: string, targetCategory: TaskCategory) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === taskId ? { ...t, category: targetCategory } : t))
        );
    };

    const getTasksByCategory = (category: TaskCategory) => {
        return tasks.filter((t) => t.category === category);
    };

    const resetMatrix = () => {
        setTasks(INITIAL_TASKS);
    };

    const activeTask = tasks.find((t) => t.id === activeTaskId) || null;

    // Calculate Recommendation
    const getRecommendation = () => {
        const delegateTasks = getTasksByCategory("delegate");
        const scheduleTasks = getTasksByCategory("schedule");
        const totalDelegatable = delegateTasks.concat(scheduleTasks);

        if (totalDelegatable.length === 0) return null;

        const vaMapping: Record<string, string> = {
            admin: "General Admin VA",
            sales: "Lead Gen / Sales VA",
            support: "Customer Support VA",
            appointments: "Appointment Setter / Call Dispatch",
            content: "Social Media / Content VA",
            bookkeeping: "Bookkeeping VA",
            technical: "Technical VA"
        };

        const neededVAs = Array.from(new Set(totalDelegatable.map(t => vaMapping[t.id]).filter(Boolean)));

        if (neededVAs.length === 0) return null;
        if (neededVAs.length === 1) return neededVAs[0];
        if (neededVAs.length === 2) return neededVAs.join(" & ");
        return "Multiple VA Specialists";
    };

    const recommendation = getRecommendation();

    return (
        <DragDropProvider
            onDragStart={(event) => {
                setActiveTaskId(event.operation.source?.id as string);
            }}
            onDragEnd={(event) => {
                setActiveTaskId(null);

                if (event.canceled) return;

                const sourceId = event.operation.source?.id as string;
                const targetId = event.operation.target?.id as TaskCategory;

                if (!sourceId || !targetId) return;

                const task = tasks.find((t) => t.id === sourceId);
                if (task && targetId !== task.category) {
                    moveTask(sourceId, targetId);
                }
            }}
        >
            <section className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
                <div className="container px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 animate-in slide-in-from-top-4 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[var(--primary)] font-semibold text-sm mb-6 border border-gray-100 shadow-sm">
                            <LayoutDashboard className="w-4 h-4" />
                            <span>Delegation Matrix</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
                            Clarify Your Role. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                                Scale Your Business.
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Drag tasks into the quadrants to see where you&apos;re wasting time
                            and exactly who you need to hire next.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Task Bank */}
                        <div className="lg:col-span-3 space-y-4">
                            <DroppableZone
                                id="bank"
                                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 transition-all duration-300 lg:sticky lg:top-24"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">Task Bank</h3>
                                    <button
                                        onClick={resetMatrix}
                                        className="text-xs text-gray-500 hover:text-[var(--primary)] flex items-center gap-1 transition-colors"
                                    >
                                        <RefreshCw className="w-3 h-3" /> Reset
                                    </button>
                                </div>

                                <div className="space-y-3 min-h-[200px]">
                                    {getTasksByCategory("bank").length === 0 && (
                                        <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                                            <CheckCircle className="w-8 h-8 text-emerald-400 mb-2 opacity-50" />
                                            <p className="text-sm text-gray-400 italic">
                                                All tasks categorized!
                                                <br />
                                                Check your results.
                                            </p>
                                        </div>
                                    )}
                                    {getTasksByCategory("bank").map((task) => (
                                        <DraggableTaskCard key={task.id} task={task} variant="bank" />
                                    ))}
                                </div>
                            </DroppableZone>
                        </div>

                        {/* Matrix (Right Side) */}
                        <div className="lg:col-span-9 space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                {QUADRANTS.map((quadrant) => (
                                    <DroppableZone
                                        key={quadrant.id}
                                        id={quadrant.id}
                                        className={cn(
                                            "rounded-2xl border-2 p-6 min-h-[280px] flex flex-col transition-all duration-300 relative",
                                            quadrant.bg,
                                            quadrant.border
                                        )}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <quadrant.icon className={cn("w-5 h-5", quadrant.color)} />
                                            <h3 className={cn("font-bold text-lg", quadrant.color)}>
                                                {quadrant.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-gray-500/80 mb-6 font-medium uppercase tracking-wide">
                                            {quadrant.description}
                                        </p>

                                        <div className="flex-grow space-y-2">
                                            {getTasksByCategory(quadrant.id).map((task) => (
                                                <DraggableTaskCard
                                                    key={task.id}
                                                    task={task}
                                                    variant="quadrant"
                                                    onRemove={() => moveTask(task.id, "bank")}
                                                />
                                            ))}

                                            {getTasksByCategory(quadrant.id).length === 0 && (
                                                <div className="h-full flex items-center justify-center border-2 border-dashed rounded-xl transition-all min-h-[120px] border-black/5">
                                                    <span className="text-sm font-medium text-black/20">
                                                        Drop items here
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </DroppableZone>
                                ))}
                            </div>

                            {/* Recommendation Result */}
                            {recommendation && (
                                <div className="bg-primary rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden text-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/grid.svg')]"></div>
                                    <div className="relative z-10 max-w-2xl mx-auto">
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                            <span className="text-white">Your Hiring Roadmap</span>
                                        </h2>
                                        <p className="text-gray-300 mb-8 text-lg">
                                            Based on your matrix, your immediate next hire should be:
                                        </p>

                                        <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl text-xl md:text-2xl font-black mb-8 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                            {recommendation}
                                        </div>

                                        <div className="flex justify-center gap-4">
                                            <Link
                                                href="/booking"
                                                className="bg-[var(--accent)] text-white px-8 py-4 rounded-xl font-bold  transition-colors flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
                                            >
                                                Book a Strategy Call{" "}
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                        <p className="mt-4 text-sm text-white">
                                            We have pre-vetted professionals ready to start in 72h.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Drag Overlay — renders in a portal, always on top, scroll-safe */}
            <DragOverlay dropAnimation={{ duration: 200, easing: "ease-out" }}>
                {activeTask ? <OverlayCard task={activeTask} /> : null}
            </DragOverlay>
        </DragDropProvider>
    );
}
