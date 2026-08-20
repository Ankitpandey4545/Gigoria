"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Minus, Sparkles, Mail, Send,
  CheckCircle, HelpCircle, MessageCircle,
  ArrowRight, BookOpen, Newspaper, TrendingUp,
  Shield, Users, Clock, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is Gigoria?",
    answer: "Gigoria is a business finance consulting platform that helps startups, SMEs, and enterprises access the right financial solutions. We provide expert guidance and connect businesses with trusted lenders to secure funding efficiently."
  },
  {
    question: "What types of business loans does Gigoria offer?",
    answer: "We assist with a wide range of financial solutions including: Business Loans, MSME / SME Loans, Working Capital Finance, Startup Funding, Loan Against Property, Balance Transfer, and Financial Advisory Services."
  },
  {
    question: "Who can apply for a business loan through Gigoria?",
    answer: "Any business entity including: Proprietorships, Partnerships, Private Limited Companies, LLPs, Startups, and MSMEs. Eligibility depends on business stability, financial records, and lender criteria."
  },
  {
    question: "What documents are required to apply?",
    answer: "Commonly required documents include: KYC documents, Business registration proof, Bank statements, Financial statements / ITR, GST returns (if applicable). Our team assists you throughout the documentation process."
  },
  {
    question: "Can startups apply for funding even if they are new?",
    answer: "Yes! We support startups at various stages and help them explore suitable funding options based on their business model, projections, and growth potential."
  }
];

const resources = [
  { 
    icon: Newspaper, 
    title: "Latest News", 
    description: "Stay updated with the latest financial news and trends.",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100"
  },
  { 
    icon: BookOpen, 
    title: "Resources", 
    description: "Access guides, articles, and tools for business growth.",
    color: "from-indigo-500 to-indigo-700",
    bg: "from-indigo-50 to-indigo-100"
  },
  { 
    icon: TrendingUp, 
    title: "Market Insights", 
    description: "Get expert insights on market trends and opportunities.",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - FAQ */}
          <div className="lg:col-span-3">
            {/* Section Header */}
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/60 px-4 py-2 rounded-full mb-4"
              >
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">FAQs</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight"
              >
                Frequently Asked
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Questions
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-gray-600"
              >
                Common questions on financial planning and investing
              </motion.p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      openIndex === index 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px bg-gradient-to-r from-blue-200 to-transparent mb-4" />
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Newsletter & Resources */}
          <div className="lg:col-span-2">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-600/30 mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">Newsletter</h3>
                  <p className="text-blue-100 text-sm">Latest News & Resources</p>
                </div>
              </div>

              <p className="text-blue-100 text-sm mb-4">
                Subscribe to get the latest updates on funding schemes, financial tips, and business growth strategies.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-xl shadow-white/20"
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-green-300 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Thank you for subscribing!
                </motion.p>
              )}
            </motion.div>

            {/* Resources */}
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.bg} flex items-center justify-center shrink-0`}>
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900">{resource.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{resource.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-200/50"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                Trusted by <span className="text-blue-600 font-bold">20,000+</span> businesses
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}