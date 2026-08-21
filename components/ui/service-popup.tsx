"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, CheckCircle, ArrowRight, Clock, FileText,
  Users, Target, Zap, Globe, Shield,
  Sparkles, Award, BookOpen, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    icon: any;
    title: string;
    shortDesc: string;
    fullDesc: string;
    category: string;
    features: string[];
    process: string[];
    color: string;
    bg: string;
    border: string;
    badge: string;
  } | null;
}

export function ServicePopup({ isOpen, onClose, service }: ServicePopupProps) {
  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Header with Gradient */}
            <div className={`bg-gradient-to-r ${service.color} p-6 md:p-8 text-white`}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold mt-2">{service.title}</h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  About this Service
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.fullDesc}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 bg-gray-50 rounded-xl p-3">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Our Process
                </h3>
                <div className="space-y-2">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                      </div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <Link href="/contact" className="flex-1">
                  <Button variant="gradient" className="w-full shadow-lg shadow-blue-600/30">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/schemes" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View Schemes
                  </Button>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  100% Secure
                </span>
                <span className="w-px h-3 bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  Trusted by 20,000+
                </span>
                <span className="w-px h-3 bg-gray-200" />
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-500" />
                  Pan India
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}