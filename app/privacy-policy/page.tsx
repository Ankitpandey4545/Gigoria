"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Shield, Lock, Eye, 
  FileText, Users, Database, Cookie,
  Mail, Phone, Globe, CheckCircle,
  AlertTriangle, Info, Clock, Building2,
  ArrowRight, Home, Server, Key,
  UserCheck, FileCheck, Share2, Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
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
              <h1 className="text-3xl sm:text-4xl font-extrabold">Privacy Policy</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Protecting Personal Data with Care
              </p>
              <p className="text-blue-200/80 text-xs mt-1">
                Last Updated: July 28, 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          {/* Introduction */}
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
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Gigoria Startup Advisory Pvt. Ltd. (&ldquo;Gigoria&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, share, and safeguard your personal data when you visit our website (gigoria.in) or use our business advisory, registration, compliance, funding, and consultancy services.
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-blue-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    This Privacy Policy is prepared in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act), and may be updated from time to time to reflect changes in legal requirements or our business practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scope and Applicability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Scope and Applicability</h2>
                <p className="text-gray-600 leading-relaxed">
                  This Privacy Policy applies to all personal information collected through our website, contact forms, consultation requests, emails, telephone conversations, and other communication channels used for providing our services.
                </p>
                <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <p className="text-indigo-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    It also applies to any information collected offline that is later stored or processed electronically by Gigoria.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect the following categories of information:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Personal Information</h4>
                    <ul className="space-y-1.5">
                      {["Full Name", "Email Address", "Mobile Number", "Company or Organization Name"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Business Information</h4>
                    <ul className="space-y-1.5">
                      {["Address (where applicable)", "Documents submitted for registrations or compliance services"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Technical Information</h4>
                    <ul className="space-y-1.5">
                      {["IP Address", "Browser Type", "Device Information", "Operating System", "Date & Time of Visit", "Pages Visited", "Website Usage Data", "Cookies and Analytics Information"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Communication Information</h4>
                    <ul className="space-y-1.5">
                      {["Emails", "Phone Calls", "WhatsApp Conversations", "Contact Form Enquiries", "Customer Support Communications"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500 mt-2">These records help us improve our services and maintain quality standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The information collected may be used for the following purposes:
                </p>
                <ul className="space-y-2">
                  {[
                    "Providing requested business consultancy services",
                    "Processing registrations, compliance, and documentation",
                    "Evaluating eligibility for government schemes, grants, loans, and funding programs",
                    "Responding to enquiries and customer support requests",
                    "Improving our website and service quality",
                    "Sending important updates regarding services",
                    "Preventing fraud and ensuring website security",
                    "Meeting legal and regulatory obligations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Legal Basis for Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Legal Basis for Processing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We process personal information based on one or more of the following legal grounds:
                </p>
                <ul className="space-y-2">
                  {[
                    "Your consent",
                    "Performance of a requested service",
                    "Compliance with applicable laws",
                    "Legitimate business interests",
                    "Other lawful grounds permitted under the Digital Personal Data Protection Act, 2023"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-yellow-800 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    You may withdraw your consent at any time by contacting us. However, withdrawal of consent may affect our ability to provide certain services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sharing of Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Sharing of Personal Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your information may be shared only when necessary with:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Government Authorities", "Regulatory Bodies", "Financial Institutions", "Banking Partners", "Service Providers", "Technology Partners", "Document Verification Agencies", "Legal Authorities where required by law"].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">All third-party service providers are expected to maintain appropriate confidentiality and security standards.</p>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    We do not sell or rent your personal information to any third party.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookies and Tracking Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website may use cookies and similar technologies to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Improve website functionality",
                    "Analyse visitor behaviour",
                    "Enhance user experience",
                    "Maintain website security",
                    "Measure website performance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-teal-50 border border-teal-200 rounded-xl">
                  <p className="text-teal-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    You may disable cookies through your browser settings at any time. However, certain website features may not function properly if cookies are disabled.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain personal information only for as long as necessary to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Provide requested services",
                    "Meet legal and regulatory requirements",
                    "Resolve disputes",
                    "Maintain business records",
                    "Fulfil accounting and audit obligations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-slate-800 text-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Once information is no longer required, it is securely deleted or anonymized.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gigoria implements appropriate administrative, technical, and organisational security measures to protect your personal information against:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Unauthorized Access", "Data Loss", "Misuse", "Alteration", "Disclosure"].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-amber-800 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Although we strive to use commercially acceptable means to protect your data, no method of electronic transmission or storage can guarantee complete security.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Subject to applicable Indian laws, you may have the right to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Access your personal information",
                    "Request correction of inaccurate information",
                    "Request completion of incomplete information",
                    "Request deletion of personal data where legally applicable",
                    "Withdraw consent for future processing",
                    "Raise grievances regarding data processing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 bg-cyan-50 border border-cyan-200 rounded-xl">
                  <p className="text-cyan-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    To exercise these rights, please contact us using the details provided below.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are intended for businesses, entrepreneurs, and organizations.
                </p>
                <div className="mt-4 p-4 bg-pink-50 border border-pink-200 rounded-xl">
                  <p className="text-pink-800 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    We do not knowingly collect personal information from children without obtaining the consent required under applicable laws.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* International Data Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Where personal information is transferred outside India, appropriate contractual, organisational, and technical safeguards are implemented in accordance with applicable legal requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                <Share2 className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites for your convenience.
                </p>
                <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-xl">
                  <p className="text-rose-800 text-sm">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Gigoria is not responsible for the privacy practices or content of external websites. Users are encouraged to review the privacy policies of those websites before sharing personal information.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions, requests, or grievances regarding this Privacy Policy or the processing of your personal information, please contact us:
                </p>
                <div className="space-y-2 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm font-semibold text-gray-900">Gigoria Startup Advisory Pvt. Ltd.</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a href="mailto:support@gigoria.in" className="hover:text-blue-600 transition-colors">support@gigoria.in</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <a href="tel:+919910796075" className="hover:text-blue-600 transition-colors">+91 99107 96075</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <a href="https://gigoria.in" className="hover:text-blue-600 transition-colors">https://gigoria.in</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/60 shadow-lg shadow-gray-200/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Gigoria reserves the right to update or modify this Privacy Policy at any time to reflect changes in legal requirements, technology, or business practices.
                </p>
                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <p className="text-gray-700 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    Any updates will be published on this page with the revised Last Updated date. Continued use of our website or services after such changes constitutes acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Have questions about our Privacy Policy?</p>
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