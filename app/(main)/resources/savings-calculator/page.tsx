"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calculator, DollarSign, TrendingDown, CheckCircle, ArrowRight, ChevronDown, User, Monitor } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CTABookACall from "@/components/CTABookACall";
import { cn } from "@/lib/utils";

// Data for roles and their average US rates (approximate)
const ROLES = [
    { id: "admin", label: "Administrative Assistant", usRate: 22, avsphRate: 8 },
    { id: "bookkeeper", label: "Bookkeeper", usRate: 25, avsphRate: 10 },
    { id: "csr", label: "Customer Support Rep", usRate: 20, avsphRate: 8 },
    { id: "dispatcher", label: "Dispatcher", usRate: 24, avsphRate: 9 },
    { id: "marketing", label: "Marketing Specialist", usRate: 30, avsphRate: 12 },
    { id: "custom", label: "Custom Role", usRate: 25, avsphRate: 10 },
];

export default function SavingsCalculatorPage() {
    const [selectedRole, setSelectedRole] = useState(ROLES[0]);
    const [usHourlyRate, setUsHourlyRate] = useState<number | string>(ROLES[0].usRate);
    const [vaHourlyRate, setVaHourlyRate] = useState<number | string>(ROLES[0].avsphRate);
    const [hoursPerWeek, setHoursPerWeek] = useState(40);

    // Update rates when role changes
    useEffect(() => {
        setUsHourlyRate(selectedRole.usRate);
        setVaHourlyRate(selectedRole.avsphRate);
    }, [selectedRole]);

    // Constants
    const WEEKS_PER_YEAR = 52;
    const US_OVERHEAD_PERCENTAGE = 0.30; // 30% for taxes, benefits, equipment, etc.

    // Calculations
    // Calculations
    const usHourlyRateNum = typeof usHourlyRate === "string" ? Number(usHourlyRate) || 0 : usHourlyRate;
    const vaHourlyRateNum = typeof vaHourlyRate === "string" ? Number(vaHourlyRate) || 0 : vaHourlyRate;

    const usAnnualBase = usHourlyRateNum * hoursPerWeek * WEEKS_PER_YEAR;
    const usOverhead = usAnnualBase * US_OVERHEAD_PERCENTAGE;
    const usTotalAnnual = usAnnualBase + usOverhead;

    const vaAnnual = vaHourlyRateNum * hoursPerWeek * WEEKS_PER_YEAR;

    const annualSavings = usTotalAnnual - vaAnnual;
    const savingsPercentage = usTotalAnnual > 0 ? (annualSavings / usTotalAnnual) * 100 : 0;

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-50/50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[var(--primary)] font-semibold text-sm mb-6 border border-gray-100 shadow-sm">
                            <Calculator className="w-4 h-4" />
                            <span>Cost Savings Estimator</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-[1.1]">
                            See How Much You Can <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                                Save with AVSPH
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Compare the total cost of a local employee versus a dedicated Virtual Assistant.
                            Real numbers, real savings.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Calculator Controls */}
                        <div className="lg:col-span-5 animate-in slide-in-from-left-4 duration-700 delay-100 fade-in">
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
                                {/* Decorative gradients */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

                                <h3 className="text-xl font-bold text-gray-900 mb-8 relative z-10">Configure Your Role</h3>

                                <div className="space-y-8 relative z-10">
                                    {/* Role Selection */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">
                                            Position to Hire
                                        </label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-[var(--primary)] hover:ring-4 hover:ring-blue-50/50 transition-all duration-300 outline-none text-left group-focus:border-blue-500">
                                                    <span className="font-medium text-gray-900">{selectedRole.label}</span>
                                                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[var(--primary)] transition-colors" />
                                                </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[300px] p-2 bg-white rounded-xl shadow-xl border border-gray-100" align="start">
                                                {ROLES.map((role) => (
                                                    <DropdownMenuItem
                                                        key={role.id}
                                                        onSelect={() => setSelectedRole(role)}
                                                        className="p-3 rounded-lg hover:bg-blue-50 cursor-pointer focus:bg-blue-50 focus:text-blue-700 font-medium text-gray-700"
                                                    >
                                                        {role.label}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>

                                    {/* Rate Inputs */}
                                    <div className="grid grid-cols-1 gap-6">
                                        {/* US Rate */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                                                    Your Local Employee Rate
                                                </label>
                                            </div>
                                            <div className="relative group/input">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <span className="text-gray-400 font-medium group-focus-within/input:text-gray-900 transition-colors">$</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    className="w-full pl-8 pr-12 py-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-4 focus:ring-red-50 focus:border-red-500 outline-none transition-all font-semibold text-gray-900"
                                                    value={usHourlyRate}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        setUsHourlyRate(val === "" ? "" : Number(val));
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                    <span className="text-gray-400 text-sm font-medium">/hr</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* VA Rate */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                                                    Our VA Rate
                                                </label>
                                                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Estimated</span>
                                            </div>
                                            <div className="relative group/input">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <span className="text-gray-400 font-medium group-focus-within/input:text-gray-900 transition-colors">$</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    className="w-full pl-8 pr-12 py-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-4 focus:ring-green-50 focus:border-green-500 outline-none transition-all font-semibold text-gray-900"
                                                    value={vaHourlyRate}
                                                    onChange={(e) => {
                                                        const val = e.target.value;
                                                        setVaHourlyRate(val === "" ? "" : Number(val));
                                                    }}
                                                />
                                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                    <span className="text-gray-400 text-sm font-medium">/hr</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hours Per Week */}
                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        <div className="flex justify-between items-end">
                                            <label className="text-sm font-semibold text-gray-700 ml-1">
                                                Hours Per Week
                                            </label>
                                            <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-900">
                                                {hoursPerWeek}h
                                            </div>
                                        </div>
                                        <Slider
                                            defaultValue={[40]}
                                            max={60}
                                            step={1}
                                            value={[hoursPerWeek]}
                                            onValueChange={(val) => setHoursPerWeek(val[0])}
                                            className="py-2 cursor-pointer"
                                        />
                                        <div className="flex justify-between text-xs font-medium text-gray-400">
                                            <span>Part-time (20h)</span>
                                            <span>Full-time (40h)</span>
                                            <span>Overtime (60h)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-gray-100 backdrop-blur-sm">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-900 block mb-1">Did you know?</strong>
                                    US employees cost ~30% more than their salary due to taxes, benefits, & equipment. We've included this in the calculation.
                                </p>
                            </div>
                        </div>

                        {/* Results Display */}
                        <div className="lg:col-span-7 animate-in slide-in-from-right-4 duration-700 delay-200 fade-in flex flex-col h-full">
                            <div className="bg-primary text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between group">
 

                       

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8 opacity-80">
                                        <TrendingDown className="w-6 h-6 text-emerald-400" />
                                        <span className="text-sm font-semibold tracking-wider uppercase text-emerald-100">Estimated Annual Savings</span>
                                    </div>

                                    <div className="mb-12">
                                        <div className="flex items-baseline gap-4 flex-wrap">
                                            <div className="text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
                                                {formatCurrency(annualSavings)}
                                            </div>
                                            <span className="text-2xl md:text-3xl font-bold text-emerald-400">
                                                / year
                                            </span>
                                        </div>
                                        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-300 font-medium text-sm">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            That's {savingsPercentage.toFixed(0)}% less overhead
                                        </div>
                                    </div>

                                    {/* Comparison Bars */}
                                    <div className="space-y-8 max-w-xl">
                                        {/* US Employee Bar */}
                                        <div className="relative group/bar">
                                            <div className="flex justify-between text-sm mb-3">
                                                <div className="flex items-center gap-2 text-indigo-100 font-medium">
                                                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                                                    Local Employee Total
                                                </div>
                                                <span className="font-bold text-white">{formatCurrency(usTotalAnnual)}</span>
                                            </div>
                                            <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                                <div className="h-full bg-indigo-500 rounded-full w-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                                            </div>
                                            <div className="mt-2 text-xs text-indigo-300/60 pl-4">
                                                Includes estimated 30% burden (taxes, benefits, etc.)
                                            </div>
                                        </div>

                                        {/* AVSPH VA Bar */}
                                        <div className="relative group/bar">
                                            <div className="flex justify-between text-sm mb-3">
                                                <div className="flex items-center gap-2 text-emerald-100 font-medium">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                                    AVSPH Virtual Assistant
                                                </div>
                                                <span className="font-bold text-white">{formatCurrency(vaAnnual)}</span>
                                            </div>
                                            <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                                <div
                                                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.5)] relative"
                                                    style={{ width: `${(vaAnnual / usTotalAnnual) * 100}%` }}
                                                >
                                                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-xs text-emerald-300/60 pl-4">
                                                Flat hourly rate. No hidden fees.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-between items-center">
                                    <div className="text-center sm:text-left">
                                        <p className="text-indigo-200 mb-1 font-medium">Stop burning cash.</p>
                                        <p className="text-white font-bold text-lg">Reinvest {formatCurrency(annualSavings)} into growth.</p>
                                    </div>
                                    <Link
                                        href="/booking"
                                        className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20"
                                    >
                                        Hire Your VA Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
