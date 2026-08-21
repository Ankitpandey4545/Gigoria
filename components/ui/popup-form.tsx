"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, User, Mail, Phone, Building2, 
  CheckCircle, ArrowRight, Shield, Clock,
  Sparkles, Users, Target, Award,
  Loader2, AlertCircle, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [eligibility, setEligibility] = useState<null | {
    eligible: boolean;
    score: number;
    message: string;
    suggestedSchemes: string[];
  }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate Step 1
      if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Check Eligibility
      checkEligibility();
    }
  };

  const checkEligibility = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      // Mock eligibility check
      const score = Math.floor(Math.random() * 40) + 60; // 60-100
      const eligible = score >= 70;
      
      const schemes = [];
      if (eligible) {
        if (score >= 85) {
          schemes.push("PMEGP", "CGTMSE", "Mudra Loan", "Stand-Up India");
        } else if (score >= 75) {
          schemes.push("PMEGP", "Mudra Loan");
        } else {
          schemes.push("Mudra Loan");
        }
      }
      
      setEligibility({
        eligible,
        score,
        message: eligible 
          ? "Congratulations! You are eligible for funding." 
          : "We can still help you! Let's discuss your options.",
        suggestedSchemes: schemes
      });
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        resetForm();
        onClose();
      }, 3000);
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ name: "", email: "", phone: "", company: "" });
    setEligibility(null);
    setIsSuccess(false);
  };

  if (!isOpen) return null;

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
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
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

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">🎉 Form Submitted!</h3>
                <p className="text-gray-600 mt-2">
                  Our team will contact you within 24 hours.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-green-500" />
                  100% Secure & Confidential
                </div>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-gray-900">
                        {step === 1 && "Get Started"}
                        {step === 2 && "Check Your Eligibility"}
                        {step === 3 && "Review & Submit"}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Step {step} of 3
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Step 1: Personal Details */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <User className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-900">Your Details</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Fill in your details to check loan eligibility.
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 99999 99999"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Eligibility Check */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-900">Check Eligibility</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        We'll analyze your profile for loan eligibility.
                      </p>
                      
                      {isSubmitting ? (
                        <div className="text-center py-8">
                          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">Analyzing your profile...</p>
                          <p className="text-sm text-gray-400">Please wait a moment</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-700">Profile Summary</p>
                                <p className="text-xs text-gray-500 mt-1">
                                  Name: {formData.name}<br />
                                  Email: {formData.email}<br />
                                  Phone: {formData.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-700">
                                We'll check your eligibility for various government schemes like PMEGP, CGTMSE, Mudra Loan, and more.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 3: Eligibility Result */}
                  {step === 3 && eligibility && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-900">Eligibility Result</h3>
                      </div>
                      
                      {/* Score */}
                      <div className="text-center mb-6">
                        <div className="relative inline-block">
                          <div className="w-24 h-24 rounded-full border-4 border-blue-100 flex items-center justify-center mx-auto">
                            <span className="text-3xl font-extrabold text-blue-600">{eligibility.score}%</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <p className={`mt-2 font-bold ${eligibility.eligible ? 'text-green-600' : 'text-amber-600'}`}>
                          {eligibility.message}
                        </p>
                      </div>
                      
                      {/* Suggested Schemes */}
                      {eligibility.suggestedSchemes.length > 0 && (
                        <div className="bg-green-50 rounded-xl p-4 border border-green-100 mb-4">
                          <p className="text-sm font-semibold text-green-800 mb-2">
                            Suggested Schemes for you:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {eligibility.suggestedSchemes.map((scheme) => (
                              <span key={scheme} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                {scheme}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {!eligibility.eligible && (
                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-4">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-700">
                              Don't worry! Our experts can still help you find the right funding options. Submit your details and we'll reach out.
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                        <div className="flex items-center gap-2 text-sm text-blue-700">
                          <Shield className="w-4 h-4 shrink-0" />
                          <span>Your information is 100% secure and confidential</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (step === 1) {
                        onClose();
                      } else {
                        setStep(step - 1);
                      }
                    }}
                    className="text-sm"
                  >
                    {step === 1 ? "Skip for now" : "Back"}
                  </Button>
                  
                  <Button
                    variant="gradient"
                    onClick={step === 3 ? handleSubmit : handleNext}
                    disabled={isSubmitting}
                    className="shadow-xl shadow-blue-600/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Processing...
                      </>
                    ) : step === 3 ? (
                      <>
                        Submit
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    ) : step === 2 ? (
                      <>
                        Check Eligibility
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}