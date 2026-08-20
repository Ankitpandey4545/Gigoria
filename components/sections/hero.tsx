"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Calendar, TrendingUp, Target, Globe,
  Shield, Star, Clock, CheckCircle
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-[-20%] left-[-5%] w-[700px] h-[700px] bg-indigo-400/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16">
          
          {/* Left Content */}
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/60 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Trusted by <span className="text-blue-600">20,000+</span> businesses
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight"
            >
              Powering Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 mt-2">
                Digital Assets
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Get expert financial guidance, fast approvals, and customized funding solutions 
              tailored to your business needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-base font-bold px-8 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 group"
              >
                Let's Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base font-bold px-8"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Call
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { value: "₹100Cr+", label: "Funded", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
                { value: "90%", label: "Success Rate", icon: Target, color: "from-indigo-500 to-indigo-600" },
                { value: "100%", label: "Online Process", icon: Globe, color: "from-purple-500 to-purple-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group bg-white rounded-2xl px-5 py-4 border border-gray-200/60 shadow-md shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color.split(' ')[0]}-50 to-${stat.color.split(' ')[1]}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`w-5 h-5 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-gray-900">{stat.value}</div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Premium Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/20 border border-white/20">
                {/* Replace this image with your own */}
                <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
                    {/* Main Icon/Illustration */}
                    <div className="text-8xl mb-6 animate-float">🚀</div>
                    
                    <h3 className="text-4xl font-extrabold text-center">Grow Your Business</h3>
                    <p className="text-xl text-blue-100 text-center mt-2">Fast & Easy Funding Solutions</p>
                    
                    {/* Stats Overlay */}
                    <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 text-center">
                        <div className="text-2xl font-extrabold">₹10Cr+</div>
                        <div className="text-sm text-blue-200">Sanctioned</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 text-center">
                        <div className="text-2xl font-extrabold">48hrs</div>
                        <div className="text-sm text-blue-200">Approval</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold text-gray-800">ISO Certified</span>
                  </div>
                </div>
                
                {/* Bottom Left Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">100%</div>
                    <div className="text-sm text-gray-500 font-medium">Approval Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">24/7</div>
                    <div className="text-sm text-gray-500 font-medium">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}