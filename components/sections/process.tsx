"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, FileSearch, ClipboardCheck, 
  FileText, CreditCard, CheckCircle, 
  Sparkles, Users, Clock, Shield,
  TrendingUp, Target, Zap, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Understand Your Requirement",
    description: "Share your business details and funding needs with our team.",
    features: ["Business Details", "Funding Needs", "Initial Consultation"],
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    stat: "100+",
    statLabel: "Daily Queries"
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Financial Assessment",
    description: "Our experts evaluate your profile and identify the best financing options.",
    features: ["Profile Evaluation", "Best Options", "Expert Analysis"],
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    stat: "95%",
    statLabel: "Success Rate"
  },
  {
    number: "03",
    icon: FileText,
    title: "Documentation & Approval",
    description: "We assist with documentation and ensure fast approval through our lending partners.",
    features: ["Documentation", "Fast Approval", "Lending Partners"],
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    stat: "48hrs",
    statLabel: "Avg. Approval"
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Fund Disbursement",
    description: "Approved funds are directly credited to your bank account.",
    features: ["Direct Transfer", "Quick Disbursement", "Bank Account"],
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    stat: "₹10Cr+",
    statLabel: "Disbursed"
  }
];

const trustBadges = [
  { icon: Shield, label: "100% Transparent" },
  { icon: Clock, label: "Fast Processing" },
  { icon: Users, label: "Expert Team" },
  { icon: Award, label: "Trusted Partner" }
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/60 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Simple & Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Funding Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            From consultation to disbursement, we guide you through every step 
            with complete transparency and support.
          </motion.p>
        </div>

        {/* Process Steps - Timeline Style */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number - Mobile */}
                <div className="md:hidden flex items-center gap-4 w-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-extrabold shadow-xl shadow-blue-600/30 shrink-0`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.statLabel}</p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex md:w-5/12 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className={`w-full max-w-sm p-6 rounded-2xl bg-white border ${step.border} shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center mb-4`}>
                      <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.features.map((feature, idx) => (
                        <span key={idx} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${step.bg} ${step.iconColor}`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className={`text-xs font-bold ${step.iconColor}`}>{step.stat}</span>
                      <span className="text-xs text-gray-400">{step.statLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Center Circle - Desktop */}
                <div className="hidden md:flex md:w-2/12 justify-center relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl font-extrabold shadow-2xl shadow-blue-600/30 relative z-10`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-indigo-600" />
                  )}
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? '' : ''}`} />

                {/* Mobile Step Content */}
                <div className="md:hidden w-full">
                  <div className={`p-5 rounded-2xl bg-white border ${step.border} shadow-lg shadow-gray-200/30`}>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.features.map((feature, idx) => (
                        <span key={idx} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${step.bg} ${step.iconColor}`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className={`text-xs font-bold ${step.iconColor}`}>{step.stat}</span>
                      <span className="text-xs text-gray-400">{step.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200/60 rounded-2xl px-6 py-3 shadow-lg shadow-gray-200/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Start your journey today</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}