"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Shield, AlertCircle, Info, 
  FileText, ExternalLink, CheckCircle,
  Building2, Globe, Users, Scale,
  BookOpen, AlertTriangle, Clock,
  ArrowRight, Home
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-600/30 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Disclaimer</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Last Updated: {new Date().toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          {/* General Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">General Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  GIGORIA STARTUP ADVISORY PRIVATE LIMITED (&ldquo;Gigoria&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a private limited company engaged in providing startup advisory, business consulting, registration, compliance, funding facilitation, and related professional services across India.
                </p>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-amber-800 text-sm font-medium">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    We are an independent consultancy and are not affiliated with, endorsed by, or associated with any Government or Non-Government Department, Ministry, Authority, Agency, or Organization. We do not claim to represent any government body. Our role is limited to providing professional consultancy and assistance to our clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Information Accuracy</h2>
                <p className="text-gray-600 leading-relaxed">
                  The information available on this website is provided for general informational purposes only. While we make every effort to ensure that the information is accurate and up to date, laws, regulations, government policies, procedures, eligibility criteria, and documentation requirements may change without prior notice.
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Actual approvals, registrations, certifications, grants, funding, loans, or other services are subject to the review, discretion, and final decision of the respective government departments, financial institutions, regulatory authorities, or other concerned organizations.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Gigoria does not guarantee the approval, sanction, or success of any application or service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Professional Advisory</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our recommendations and consultancy services are based on the information provided by clients and our professional understanding of the applicable rules and regulations at the time of consultation.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-yellow-800 text-sm font-medium">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Clients are advised to independently verify important information wherever necessary before making any business or financial decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gigoria shall not be held responsible for any direct, indirect, incidental, consequential, or financial loss arising from:
                </p>
                <ul className="space-y-2">
                  {[
                    "Changes in government policies or regulations",
                    "Delays or decisions made by government departments or third-party authorities",
                    "Rejection, cancellation, or delay of applications",
                    "Incomplete or incorrect information provided by clients",
                    "Circumstances beyond our reasonable control"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                <ExternalLink className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites for the convenience of users. Gigoria does not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party website.
                </p>
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <p className="text-purple-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    Users are encouraged to review the policies of such websites before using their services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Payment Disclaimer</h2>
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-4">
                  <p className="text-red-800 text-sm font-medium">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    For your security, all payments must be made only in the name of <strong>GIGORIA STARTUP ADVISORY PRIVATE LIMITED</strong>.
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We accept payments only through our official business banking channels, including:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["NEFT", "RTGS", "IMPS", "Cashfree", "Razorpay"].map((method) => (
                    <span key={method} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                      {method}
                    </span>
                  ))}
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-amber-800 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    We never request payments to any personal bank account, UPI ID, wallet, or account held in an individual's name. Before making any payment, please ensure that you have received the official payment details directly from Gigoria. The Company shall not be responsible for payments made to unauthorized persons or accounts.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Changes to Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Changes to this Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  Gigoria reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Continued use of this website and our services shall constitute your acceptance of the updated Disclaimer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Have questions about our Disclaimer?</p>
                <p className="text-xs text-gray-500">We're here to help clarify any concerns</p>
              </div>
            </div>
            <Link href="/contact">
              <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}