"use client";

import { motion } from "framer-motion";
import { 
  Building2, Clock, Shield, Percent, 
  CheckCircle, Users, 
  Briefcase, IndianRupee, Zap, Globe,
  TrendingUp, Target, BarChart3,
  Award, Sparkles, Rocket, Star,
  FileCheck, Handshake, LineChart, BadgeCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const schemes = [
  {
    name: "PMEGP",
    fullName: "Prime Minister Employment Generation Programme",
    icon: Building2,
    amount: "Up to ₹50L",
    benefit: "15-35% Subsidy",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    badge: "Popular",
    features: [
      { icon: Sparkles, label: "Government Backed" },
      { icon: Users, label: "Employment Generation" }
    ]
  },
  {
    name: "CGTMSE",
    fullName: "Credit Guarantee Trust for MSEs",
    icon: Shield,
    amount: "Up to ₹5Cr",
    benefit: "No Collateral",
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    badge: "Zero Collateral",
    features: [
      { icon: FileCheck, label: "Guarantee Cover" },
      { icon: Handshake, label: "Trust Based" }
    ]
  },
  {
    name: "Mudra Loan",
    fullName: "Pradhan Mantri Mudra Yojana",
    icon: IndianRupee,
    amount: "Up to ₹10L",
    benefit: "Low Interest",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    badge: "Quick",
    features: [
      { icon: Zap, label: "Fast Approval" },
      { icon: LineChart, label: "Low Interest" }
    ]
  },
  {
    name: "Stand-Up India",
    fullName: "For SC/ST & Women Entrepreneurs",
    icon: Users,
    amount: "₹10L - ₹1Cr",
    benefit: "Special Category",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    badge: "Inclusive",
    features: [
      { icon: Award, label: "Special Benefits" },
      { icon: Rocket, label: "Women Empowerment" }
    ]
  }
];

const stats = [
  { value: "₹10L-₹5Cr", label: "Funding Range", icon: TrendingUp },
  { value: "7-45 Days", label: "Processing Time", icon: Clock },
  { value: "85%", label: "CGTMSE Coverage", icon: Shield },
  { value: "15-35%", label: "PMEGP Subsidy", icon: Percent },
];

export function Schemes() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-3xl" />

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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-sm font-semibold text-blue-700">Government Initiatives</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Government Schemes We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Facilitate
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            Expert MSME loan consultant support and business consulting for PMEGP, 
            CGTMSE, Mudra & other schemes across India.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {schemes.map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
            >
              {/* Badge */}
              <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${scheme.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                {scheme.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${scheme.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <scheme.icon className={`w-8 h-8 bg-gradient-to-r ${scheme.color} bg-clip-text text-transparent`} />
              </div>

              {/* Name */}
              <h3 className="text-xl font-extrabold text-gray-900">{scheme.name}</h3>
              
              {/* Full Name */}
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{scheme.fullName}</p>

              {/* Divider */}
              <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Loan Amount</span>
                  <span className="text-sm font-bold text-gray-900">{scheme.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Key Benefit</span>
                  <span className="text-sm font-bold text-green-600">{scheme.benefit}</span>
                </div>
              </div>

              {/* Small Feature Icons */}
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-gray-100/50">
                {scheme.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <feature.icon className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[10px] font-medium text-gray-500">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-6 h-6 bg-blue-600/10 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-3.5 h-3.5 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FileCheck, label: "MSME Registered" },
            { icon: Globe, label: "Pan India Service" },
            { icon: Users, label: "Expert Consultants" },
            { icon: Target, label: "Transparent Process" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-200/50"
            >
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <item.icon className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200/60 rounded-2xl px-6 py-2 shadow-lg shadow-gray-200/30">
            <span className="text-sm font-medium text-gray-600">Serving MSMEs across</span>
            <span className="text-sm font-extrabold text-blue-600">28+ States</span>
            <span className="text-sm text-gray-400">in India</span>
          </div>
          
          <div className="mt-8">
            <Button size="lg" className="shadow-2xl shadow-blue-600/30">
              View More Government Schemes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}