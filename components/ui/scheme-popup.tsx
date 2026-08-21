"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, CheckCircle, ArrowRight, Clock, FileText,
  Users, IndianRupee, Shield, Building2,
  Award, Target, Zap, Globe, AlertCircle,
  Calendar, Phone, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SchemePopupProps {
  isOpen: boolean;
  onClose: () => void;
  scheme: {
    id: string;
    name: string;
    fullName: string;
    category: string;
    amount: string;
    benefit: string;
    description: string;
    eligibility: string;
    documents: string[];
    process: string[];
    color: string;
    bg: string;
    border: string;
    icon: any;
    badge: string;
    interest: string;
    tenure: string;
  } | null;
}

export function SchemePopup({ isOpen, onClose, scheme }: SchemePopupProps) {
  if (!isOpen || !scheme) return null;

  const Icon = scheme.icon;

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
            <div className={`bg-gradient-to-r ${scheme.color} p-6 md:p-8 text-white`}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {scheme.badge}
                    </span>
                    <span className="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {scheme.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold mt-2">{scheme.name}</h2>
                  <p className="text-white/80 text-sm">{scheme.fullName}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  About this Scheme
                </h3>
                <p className="text-gray-700 leading-relaxed">{scheme.description}</p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <IndianRupee className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-500">Amount</p>
                  <p className="text-sm font-bold text-gray-900">{scheme.amount}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <Award className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-500">Benefit</p>
                  <p className="text-sm font-bold text-gray-900">{scheme.benefit}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-500">Interest</p>
                  <p className="text-sm font-bold text-gray-900">{scheme.interest}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3 text-center">
                  <Calendar className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-500">Tenure</p>
                  <p className="text-sm font-bold text-gray-900">{scheme.tenure}</p>
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Eligibility Criteria
                </h3>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <p className="text-gray-700 text-sm leading-relaxed">{scheme.eligibility}</p>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Required Documents
                </h3>
                <div className="flex flex-wrap gap-2">
                  {scheme.documents.map((doc, index) => (
                    <span key={index} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-gray-500" />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Application Process
                </h3>
                <div className="space-y-2">
                  {scheme.process.map((step, index) => (
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
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Learn More
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