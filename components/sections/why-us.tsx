 "use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Calendar, Sparkles, Shield,
  TrendingUp, Award, Users, Rocket,
  CheckCircle, Star, Target, Zap,
  Globe, Clock, Handshake, Lightbulb,
  BarChart3, LineChart, Crown, Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Compass,
    title: "Clear Direction",
    description: "You'll always know what to do next with our expert guidance.",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Crown,
    title: "Lasting Wealth",
    description: "Build sustainable wealth that grows with your business.",
    color: "from-amber-500 to-amber-700",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    icon: Lightbulb,
    title: "Smart Guidance",
    description: "Guidance that builds wealth and shows you the way forward.",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description: "Strategic growth solutions tailored to your business goals.",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  }
];

const stats = [
  { value: "₹100Cr+", label: "Wealth Created", icon: TrendingUp },
  { value: "95%", label: "Client Success", icon: Award },
  { value: "20,000+", label: "Businesses Guided", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star }
];

const trustBadges = [
  { icon: Shield, label: "100% Transparent" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Handshake, label: "Trusted Partner" },
  { icon: Globe, label: "Pan India Service" }
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100/60 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">Why Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            You'll Always Know
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              What to Do Next.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            Guidance that builds wealth and shows you the way forward.
            Your success is our priority.
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
              className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 cursor-pointer"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
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
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-30" />
            <Button 
              size="lg" 
              className="relative shadow-2xl shadow-indigo-600/30 group text-base font-bold px-8 py-6"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white flex items-center justify-center shadow-md">
                    <span className="text-[10px] text-white font-bold">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                Join <span className="text-indigo-600 font-bold">20,000+</span> successful businesses
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-sm font-bold text-gray-700 ml-1">4.9/5</span>
              <span className="text-sm text-gray-500">(1,200+ reviews)</span>
            </div>
          </div>

          {/* Bottom Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-sm text-gray-400"
          >
            ✦ No hidden charges ✦ 100% transparent ✦ Expert guidance
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}