 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Phone, Mail, MapPin, Clock,
  Sparkles, Shield, Users, CheckCircle,
  Send, MessageCircle, Building2, Globe,
  Award, Headphones, Calendar, FileText,
  X, Youtube, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Sparkles, label: "Free Consultation", color: "text-blue-600" },
  { icon: Users, label: "Expert Guidance", color: "text-indigo-600" },
  { icon: Globe, label: "Pan India Service", color: "text-green-600" },
  { icon: Shield, label: "Transparent Process", color: "text-purple-600" }
];

const contactInfo = [
  { 
    icon: Phone, 
    label: "Helpline No.", 
    value: "+91 99740 99178",
    subValue: "099980 33962",
    action: "Call Us",
    href: "tel:+919974099178"
  },
  { 
    icon: Mail, 
    label: "Email Us", 
    value: "info@satyasupport.co.in",
    action: "Detailed Inquiry",
    href: "mailto:info@satyasupport.co.in"
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "Noida, Sector 18",
    subValue: "Serving Pan India",
    action: "View on Map"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.mobile && formData.service) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: "", mobile: "", service: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/60 px-4 py-2 rounded-full mb-4"
          >
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Let's Discuss Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Business Needs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 leading-relaxed"
          >
            Get professional guidance on government funding and business compliance. 
            We're here to fuel your growth.
          </motion.p>
        </div>

        {/* Features Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200/60 shadow-sm text-sm font-medium text-gray-700"
            >
              <feature.icon className={`w-4 h-4 ${feature.color}`} />
              {feature.label}
            </span>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500">{info.label}</p>
                    <p className="text-base font-bold text-gray-900">{info.value}</p>
                    {info.subValue && (
                      <p className="text-sm text-gray-500">{info.subValue}</p>
                    )}
                    {info.action && (
                      <a
                        href={info.href || "#"}
                        className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {info.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200/60 shadow-xl shadow-gray-200/30">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                Request Expert Callback
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form and we'll analyze your requirements before calling.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Choose Service Category
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select Service...</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="MSME Funding">MSME Funding</option>
                    <option value="Government Schemes">Government Schemes</option>
                    <option value="Startup Funding">Startup Funding</option>
                    <option value="Certification Services">Certification Services</option>
                    <option value="Business Consulting">Business Consulting</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full shadow-2xl shadow-blue-600/30"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Request Sent!
                    </>
                  ) : (
                    <>
                      Confirm Callback Request
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <Shield className="w-3.5 h-3.5 text-green-500" />
                    100% Secure
                  </span>
                  <span className="w-px h-4 bg-gray-200" />
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <Users className="w-3.5 h-3.5 text-blue-500" />
                    Verified Experts
                  </span>
                  <span className="w-px h-4 bg-gray-200" />
                  <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    Noida, Sector 18
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200/50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">24/7 Support</p>
              <p className="text-xs text-gray-500">We're here to help anytime</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">{String.fromCharCode(64 + i)}</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-blue-600 font-bold">20,000+</span> businesses
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500">Follow us:</span>
            <div className="flex gap-1.5">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500 hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-pink-50 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500 hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}