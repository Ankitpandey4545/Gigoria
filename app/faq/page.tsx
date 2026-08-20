 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Plus, Minus, HelpCircle, 
  Sparkles, Users, Shield, Clock,
  ArrowRight, Home, BookOpen, Compass,
  Briefcase, PiggyBank, Target, Award,
  CheckCircle, Info, Lightbulb, Heart,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What should a financial plan include?",
    answer: "A comprehensive financial plan should include: 1) Current financial situation analysis, 2) Clear financial goals (short-term and long-term), 3) Budget and cash flow management, 4) Investment strategy, 5) Risk management and insurance, 6) Retirement planning, 7) Tax planning, 8) Estate planning, and 9) Regular review and adjustment strategy."
  },
  {
    question: "Can you help me plan for retirement?",
    answer: "Absolutely! We provide comprehensive retirement planning services including: 1) Assessing your current retirement savings, 2) Determining your retirement income needs, 3) Creating a customized savings and investment strategy, 4) Recommending appropriate retirement accounts and products, 5) Regular portfolio reviews and adjustments, and 6) Helping you transition smoothly into retirement."
  },
  {
    question: "What is your investment philosophy?",
    answer: "Our investment philosophy is built on: 1) Long-term wealth creation through disciplined investing, 2) Diversification across asset classes to manage risk, 3) Evidence-based investment strategies, 4) Regular portfolio rebalancing, 5) Cost-effective investment solutions, 6) Alignment with your personal goals and risk tolerance, and 7) Transparent communication about performance and strategy."
  },
  {
    question: "Will I have a dedicated advisor?",
    answer: "Yes! Every client is assigned a dedicated financial advisor who understands your unique situation, goals, and concerns. Your advisor will be your single point of contact, ensuring personalized attention, consistent communication, and a deep understanding of your financial journey."
  },
  {
    question: "What is Wealth Management?",
    answer: "Wealth management is a holistic approach to managing your entire financial life. It includes investment management, financial planning, tax strategies, estate planning, risk management, and other financial services. Our goal is to help you grow, protect, and transfer your wealth effectively while achieving your life goals."
  },
  {
    question: "What is Financial Planning?",
    answer: "Financial planning is the process of setting, planning, and achieving your life goals through proper management of your finances. It involves assessing your current financial situation, identifying your short and long-term goals, and creating a comprehensive strategy to achieve them, including budgeting, saving, investing, and risk management."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply: 1) Book a free consultation call with our team, 2) Share your financial goals and concerns, 3) We'll analyze your situation and recommend a customized plan, 4) Review and approve the plan, 5) We'll help you implement it, and 6) Regular reviews to track progress and make adjustments as needed."
  },
  {
    question: "Are you a fiduciary?",
    answer: "Yes, we act as a fiduciary for our clients. This means we are legally and ethically bound to act in your best interests at all times. We provide unbiased advice, full transparency about fees and conflicts of interest, and always prioritize your financial well-being over our own compensation."
  },
  {
    question: "Are you an independent firm?",
    answer: "Yes, Gigoria is an independently owned and operated firm. Being independent means we are not tied to any specific financial products or institutions. We have the freedom to recommend the best solutions for you, without any pressure to sell specific products, ensuring truly unbiased advice."
  }
];

const categories = [
  { icon: Briefcase, label: "Financial Planning", color: "from-blue-500 to-blue-700", bg: "from-blue-50 to-blue-100" },
  { icon: PiggyBank, label: "Retirement Planning", color: "from-indigo-500 to-indigo-700", bg: "from-indigo-50 to-indigo-100" },
  { icon: Compass, label: "Investment Strategy", color: "from-green-500 to-green-700", bg: "from-green-50 to-green-100" },
  { icon: Users, label: "Wealth Management", color: "from-purple-500 to-purple-700", bg: "from-purple-50 to-purple-100" }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-600/30 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Financial Planning FAQ's</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Common questions on financial planning and investing
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-4 border border-gray-200/60 shadow-lg shadow-gray-200/30 flex items-center gap-3`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.bg} flex items-center justify-center shrink-0`}>
                <category.icon className={`w-5 h-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{category.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white shadow-lg shadow-gray-200/30"
            />
            <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-blue-600 font-medium hover:text-blue-700"
              >
                Clear
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-gray-500 mt-2">
              Showing {filteredFaqs.length} result{filteredFaqs.length !== 1 && 's'}
            </p>
          )}
        </motion.div>

        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3 pr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-100 transition-colors">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    openIndex === index 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                      : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
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
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <div className="h-px bg-gradient-to-r from-blue-200 to-transparent mb-4" />
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No results found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Still have questions?</p>
              <p className="text-xs text-gray-500">We're here to help you with any financial queries</p>
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
  );
}