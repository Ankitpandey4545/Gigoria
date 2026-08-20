"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Briefcase, FileCheck, LineChart,
  Building2, Users, Handshake, Target,
  Rocket, Shield, Award, TrendingUp,
  Zap, Globe, CheckCircle, Sparkles,
  BarChart3, BookOpen, GraduationCap, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "NGO Funding & Grant Support",
    description: "End-to-end support for NGOs to secure government grants, corporate funding, and international donations.",
    color: "from-rose-500 to-rose-700",
    bg: "from-rose-50 to-rose-100",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    features: ["Government Grants", "Corporate Funding", "International Donations"]
  },
  {
    icon: Handshake,
    title: "Merger & Acquisition Services",
    description: "Strategic M&A advisory for businesses looking to merge, acquire, or expand their operations.",
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    features: ["Due Diligence", "Valuation", "Integration Planning"]
  },
  {
    icon: FileCheck,
    title: "Certification Services",
    description: "Complete assistance for business registrations, ISO certifications, and compliance requirements.",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    features: ["ISO Certification", "Company Registration", "Compliance"]
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    description: "Data-driven growth strategies to scale your business, increase revenue, and capture market share.",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    features: ["Market Research", "Revenue Growth", "Scale Planning"]
  }
];

const stats = [
  { value: "₹100Cr+", label: "Funds Facilitated", icon: TrendingUp },
  { value: "95%", label: "Success Rate", icon: Target },
  { value: "20,000+", label: "Businesses Served", icon: Users },
  { value: "28+", label: "States Covered", icon: Globe }
];

export function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-400/5 rounded-full blur-3xl" />

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
            <span className="text-sm font-semibold text-blue-700">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Bold Vision.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Extraordinary Results.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            From funding to growth strategy, we provide comprehensive services 
            to help your business achieve extraordinary results.
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
              <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${service.bg} ${service.iconColor} border ${service.border}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="shadow-2xl shadow-blue-600/30 group">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">Trusted by <span className="text-blue-600 font-bold">20,000+</span> businesses</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}