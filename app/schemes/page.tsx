"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Building2, Shield, IndianRupee, Users,
  Sparkles, ArrowRight, CheckCircle, Clock,
  FileText, Award, Target, Zap, Globe,
  Search, Filter, X, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchemePopup } from "@/components/ui/scheme-popup";

const schemes = [
  {
    id: "pmegp",
    name: "PMEGP",
    fullName: "Prime Minister Employment Generation Programme",
    category: "Government Scheme",
    amount: "Up to ₹50L",
    benefit: "15-35% Subsidy",
    description: "Promotes self-employment through setting up of new micro-enterprises in rural and urban areas.",
    eligibility: "Any individual above 18 years of age. Should have passed 8th standard for projects costing above ₹10L.",
    documents: ["Aadhar Card", "PAN Card", "Project Report", "Bank Account", "Business Plan"],
    process: [
      "Submit application through local bank",
      "Project appraisal by bank",
      "Final approval and disbursement"
    ],
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    icon: Building2,
    badge: "Popular",
    interest: "8-10%",
    tenure: "3-7 Years"
  },
  {
    id: "cgtmse",
    name: "CGTMSE",
    fullName: "Credit Guarantee Trust for MSEs",
    category: "Credit Guarantee",
    amount: "Up to ₹5Cr",
    benefit: "No Collateral Required",
    description: "Provides guarantee cover to banks for loans given to micro and small enterprises without collateral.",
    eligibility: "MSMEs registered with Udyam. Should have business stability of 2+ years.",
    documents: ["Udyam Certificate", "ITR", "Bank Statements", "Financial Statements"],
    process: [
      "Apply through bank branch",
      "Bank evaluates application",
      "CGTMSE provides guarantee",
      "Loan disbursement"
    ],
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    icon: Shield,
    badge: "Zero Collateral",
    interest: "7-9%",
    tenure: "5-10 Years"
  },
  {
    id: "mudra",
    name: "Mudra Loan",
    fullName: "Pradhan Mantri Mudra Yojana",
    category: "Government Scheme",
    amount: "Up to ₹10L",
    benefit: "Low Interest Rate",
    description: "Provides loans to non-corporate, non-farm small/micro enterprises for income generating activities.",
    eligibility: "Individual entrepreneurs, small businesses. Should have a viable business plan.",
    documents: ["Aadhar Card", "Business Plan", "Bank Account", "Project Proposal"],
    process: [
      "Visit any bank branch",
      "Submit loan application",
      "Bank evaluates proposal",
      "Disbursement in 3-5 days"
    ],
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    icon: IndianRupee,
    badge: "Quick",
    interest: "6-8%",
    tenure: "1-5 Years"
  },
  {
    id: "standup",
    name: "Stand-Up India",
    fullName: "Stand-Up India Scheme",
    category: "Government Scheme",
    amount: "₹10L - ₹1Cr",
    benefit: "Special Category Benefits",
    description: "Supports SC/ST and women entrepreneurs by providing loans for setting up greenfield enterprises.",
    eligibility: "SC/ST or Women entrepreneurs. Should be first-time entrepreneur. Business should be in manufacturing/services.",
    documents: ["Caste Certificate", "Business Plan", "Project Report", "Bank Account"],
    process: [
      "Apply through any bank",
      "Project evaluation",
      "Approval and disbursement"
    ],
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    icon: Users,
    badge: "Inclusive",
    interest: "8-10%",
    tenure: "3-10 Years"
  },
  {
    id: "startupindia",
    name: "Startup India",
    fullName: "Startup India Initiative",
    category: "Government Scheme",
    amount: "Tax Benefits",
    benefit: "100% Tax Exemption",
    description: "Provides tax benefits, funding support, and ecosystem support for recognized startups.",
    eligibility: "DPIIT recognized startups. Incorporated within 10 years. Annual turnover less than ₹100Cr.",
    documents: ["DPIIT Recognition", "Incorporation Certificate", "Financial Statements"],
    process: [
      "Apply on Startup India portal",
      "Get DPIIT recognition",
      "Access benefits and funding"
    ],
    color: "from-rose-500 to-rose-700",
    bg: "from-rose-50 to-rose-100",
    border: "border-rose-200",
    icon: Award,
    badge: "Tax Benefits",
    interest: "N/A",
    tenure: "N/A"
  },
  {
    id: "ahidf",
    name: "AHIDF",
    fullName: "Agri Infrastructure Development Fund",
    category: "Government Scheme",
    amount: "Up to ₹100Cr",
    benefit: "Interest Subvention",
    description: "Provides funding for agricultural infrastructure projects like cold storage, warehouses, and processing units.",
    eligibility: "Agri businesses, Farmer Producer Organizations, Startups in agri-sector.",
    documents: ["Project Report", "Land Documents", "Financial Statements"],
    process: [
      "Submit application",
      "Project evaluation",
      "Approval and funding"
    ],
    color: "from-amber-500 to-amber-700",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    icon: Target,
    badge: "Agri Focus",
    interest: "5-7%",
    tenure: "10-15 Years"
  }
];

const categories = ["All", "Government Scheme", "Credit Guarantee", "Agri Focus", "Tax Benefits"];

export default function SchemesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedScheme, setSelectedScheme] = useState<typeof schemes[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSchemeClick = (scheme: typeof schemes[0]) => {
    setSelectedScheme(scheme);
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
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
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Government Schemes</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Navigate government funding with confidence
              </p>
              <p className="text-blue-200/80 text-sm mt-1">
                A curated, actively maintained map of every major central and state funding scheme worth knowing — with honest eligibility notes and end-to-end application support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white shadow-lg shadow-gray-200/30"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schemes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleSchemeClick(scheme)}
              className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
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
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Interest Rate</span>
                  <span className="text-sm font-bold text-gray-900">{scheme.interest}</span>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No schemes found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Ready when you are</p>
              <p className="text-xs text-gray-500">Start your funding journey today</p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
              Talk to a Consultant
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scheme Popup */}
      <SchemePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        scheme={selectedScheme}
      />
    </div>
  );
}