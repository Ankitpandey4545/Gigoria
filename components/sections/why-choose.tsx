"use client";

import { motion } from "framer-motion";
import { 
  Users, Shield, Clock, Sparkles,
  ArrowRight, CheckCircle, Star,
  Briefcase, FileCheck, Handshake,
  Rocket, Target, Award, TrendingUp,
  Zap, Globe, BarChart3, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Expert Financial Guidance",
    description: "Our experienced advisors understand your business and recommend the most suitable funding options.",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Zap,
    title: "Fast & Hassle-Free Approvals",
    description: "We simplify the entire process with minimal documentation and quicker turnaround times.",
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600"
  },
  {
    icon: Target,
    title: "Customized Finance Solutions",
    description: "Every business is unique. We tailor our solutions to match your specific needs and goals.",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Shield,
    title: "Transparent & Ethical Process",
    description: "No hidden charges, no false promises — complete clarity at every step.",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Globe,
    title: "Wide Network of Lending Partners",
    description: "Access multiple banks and NBFCs to secure the best possible terms.",
    color: "from-rose-500 to-rose-700",
    bg: "from-rose-50 to-rose-100",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600"
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "From consultation to disbursement and beyond, we're with you at every stage.",
    color: "from-amber-500 to-amber-700",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  }
];

const stats = [
  { value: "₹100Cr+", label: "Total Funded", icon: TrendingUp },
  { value: "95%", label: "Success Rate", icon: Star },
  { value: "20,000+", label: "Happy Clients", icon: Users },
  { value: "28+", label: "States Covered", icon: Globe }
];

export function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">
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
            <span className="text-sm font-semibold text-blue-700">Why Gigoria</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Finance Made
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Simple, Reliable & Transparent
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            We understand your business needs and provide tailored financial solutions
            with complete transparency and support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6"
          >
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200/60 rounded-2xl px-6 py-3 shadow-lg shadow-gray-200/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">Trusted by</span>
              <span className="text-sm font-extrabold text-blue-600">20,000+</span>
              <span className="text-sm text-gray-400">businesses</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-bold text-gray-900 ml-1">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}