"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Heart, Handshake, FileCheck, Rocket,
  Scale, Building2, Megaphone, ArrowRight,
  Sparkles, CheckCircle, Shield, Users,
  Target, Award, Globe, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicePopup } from "@/components/ui/service-popup";

const services = [
  {
    id: "ngo-funding",
    icon: Heart,
    title: "NGO Funding & Grant Support",
    shortDesc: "End-to-end support for NGOs to secure government grants, corporate funding, and international donations.",
    fullDesc: "We provide comprehensive funding solutions for NGOs, helping you navigate the complex world of grants, corporate funding, and international donations. Our team ensures your organization gets the financial support it needs to make a difference.",
    category: "Funding",
    features: [
      "Government Grants - Central & State",
      "Corporate Funding & CSR",
      "International Donations",
      "Project Proposal Development",
      "Grant Application Support",
      "Compliance & Reporting"
    ],
    process: [
      "Understanding your organization's mission",
      "Identifying relevant funding opportunities",
      "Developing compelling proposals",
      "Application submission and follow-up",
      "Fund disbursement and reporting"
    ],
    color: "from-rose-500 to-rose-700",
    bg: "from-rose-50 to-rose-100",
    border: "border-rose-200",
    badge: "Popular"
  },
  {
    id: "merger-acquisition",
    icon: Handshake,
    title: "Merger & Acquisition Services",
    shortDesc: "Strategic M&A advisory for businesses looking to merge, acquire, or expand their operations.",
    fullDesc: "Our M&A experts guide you through every step of the merger and acquisition process, from initial strategy to successful integration. We help you identify opportunities, evaluate targets, and execute transactions that create value.",
    category: "Corporate",
    features: [
      "Target Identification & Screening",
      "Due Diligence Services",
      "Valuation & Deal Structuring",
      "Negotiation Support",
      "Post-Merger Integration",
      "Regulatory Compliance"
    ],
    process: [
      "Strategic planning and goal setting",
      "Target identification and evaluation",
      "Due diligence and valuation",
      "Negotiation and deal structuring",
      "Integration planning and execution"
    ],
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    badge: "Strategic"
  },
  {
    id: "certification",
    icon: FileCheck,
    title: "Certification Services",
    shortDesc: "Complete assistance for business registrations, ISO certifications, and compliance requirements.",
    fullDesc: "We simplify the certification process for your business, ensuring you meet all regulatory requirements and industry standards. From company registration to ISO certification, we handle all the paperwork and compliance for you.",
    category: "Compliance",
    features: [
      "ISO Certification (9001, 14001, etc.)",
      "Company Registration (Pvt Ltd, LLP)",
      "MSME/UDYAM Registration",
      "GST Registration & Compliance",
      "FSSAI & Other Licenses",
      "Annual Compliance Filings"
    ],
    process: [
      "Understanding your certification needs",
      "Document preparation and verification",
      "Application submission",
      "Inspection and audit support",
      "Certification issuance"
    ],
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100",
    border: "border-green-200",
    badge: "Essential"
  },
  {
    id: "growth-strategy",
    icon: Rocket,
    title: "Growth Strategy",
    shortDesc: "Data-driven growth strategies to scale your business, increase revenue, and capture market share.",
    fullDesc: "We help you develop and execute data-driven growth strategies that drive revenue, expand market presence, and create sustainable competitive advantage. Our team combines analytics, industry insights, and creative thinking to fuel your business growth.",
    category: "Consulting",
    features: [
      "Market Research & Analysis",
      "Revenue Growth Strategies",
      "Market Entry & Expansion",
      "Digital Transformation",
      "Product & Service Innovation",
      "Strategic Planning"
    ],
    process: [
      "Business assessment and goal definition",
      "Market research and competitive analysis",
      "Strategy development and validation",
      "Implementation roadmap creation",
      "Performance monitoring and optimization"
    ],
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    badge: "Impactful"
  },
  {
    id: "legal-consultancy",
    icon: Scale,
    title: "Legal Consultancy",
    shortDesc: "Expert legal advice and support for business contracts, compliance, and regulatory matters.",
    fullDesc: "Our legal experts provide comprehensive advice on all business legal matters, including contracts, compliance, intellectual property, and dispute resolution. We help you navigate the complex legal landscape with confidence.",
    category: "Legal",
    features: [
      "Contract Drafting & Review",
      "Business Compliance Consulting",
      "Intellectual Property Rights",
      "Employment Law & HR Compliance",
      "Dispute Resolution Support",
      "Tax Planning & Advisory"
    ],
    process: [
      "Understanding your legal needs",
      "Documentation and review",
      "Strategy development",
      "Implementation and support",
      "Ongoing compliance monitoring"
    ],
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    badge: "Expert"
  },
  {
    id: "business-registration",
    icon: Building2,
    title: "Business Registration",
    shortDesc: "Complete support for company incorporation, partnership registration, and business entity setup.",
    fullDesc: "We simplify the entire business registration process, helping you choose the right entity structure and complete all legal formalities. From incorporation to tax registrations, we ensure your business is properly established.",
    category: "Compliance",
    features: [
      "Company Incorporation (Pvt Ltd, LLP)",
      "Partnership & Sole Proprietorship",
      "GST Registration",
      "MSME/UDYAM Registration",
      "Import-Export Code (IEC)",
      "Professional Tax Registration"
    ],
    process: [
      "Understanding your business structure needs",
      "Document preparation and verification",
      "Application submission",
      "Government department follow-up",
      "Registration certificate issuance"
    ],
    color: "from-amber-500 to-amber-700",
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    badge: "Quick"
  },
  {
    id: "marketing-branding",
    icon: Megaphone,
    title: "Marketing & Branding Services",
    shortDesc: "Comprehensive marketing and branding solutions to build your brand and grow your business.",
    fullDesc: "We help you build a powerful brand presence and execute effective marketing strategies that drive awareness, engagement, and growth. From brand identity to digital marketing, we cover all aspects of your marketing needs.",
    category: "Marketing",
    features: [
      "Brand Identity & Design",
      "Digital Marketing Strategy",
      "Social Media Management",
      "Content Marketing",
      "SEO & SEM",
      "Website Development & Optimization"
    ],
    process: [
      "Brand assessment and goal setting",
      "Strategy development",
      "Creative design and execution",
      "Campaign launch and monitoring",
      "Performance analysis and optimization"
    ],
    color: "from-cyan-500 to-cyan-700",
    bg: "from-cyan-50 to-cyan-100",
    border: "border-cyan-200",
    badge: "Creative"
  }
];

const categories = ["All", "Funding", "Corporate", "Compliance", "Consulting", "Legal", "Marketing"];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
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
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Services</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Impact That Powers Your Business
              </p>
              <p className="text-blue-200/80 text-sm mt-1">
                We offer a full scale of services to meet your needs
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
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white shadow-lg shadow-gray-200/30"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
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

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleServiceClick(service)}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 cursor-pointer"
            >
              {/* Badge */}
              <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${service.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                {service.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {service.shortDesc}
              </p>

              {/* Category Tag */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {service.category}
                </span>
                <span className="text-xs font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">No services found</h3>
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
              <p className="text-sm font-medium text-gray-700">Need help choosing the right service?</p>
              <p className="text-xs text-gray-500">Our experts are here to guide you</p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
              Talk to an Expert
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Service Popup */}
      <ServicePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        service={selectedService}
      />
    </div>
  );
}