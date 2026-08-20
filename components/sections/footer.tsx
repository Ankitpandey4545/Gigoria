 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, Phone, Mail, MapPin, Clock,
  Send, Shield, Award, Users, Globe,
  ChevronRight, Sparkles, Building2,
  Calendar, MessageCircle, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blogs" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

 const supportLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" }, // ✅ Yeh link automatically page open karega
];

const socialLinks = [
  { 
    label: "X", 
    href: "#", 
    color: "hover:bg-black",
    icon: (
      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: "#", 
    color: "hover:bg-blue-700",
    icon: (
      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    label: "Facebook", 
    href: "#", 
    color: "hover:bg-blue-600",
    icon: (
      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    label: "Instagram", 
    href: "#", 
    color: "hover:bg-pink-600",
    icon: (
      <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    )
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <span className="font-extrabold text-xl text-white">Gigoria</span>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] leading-tight">
                    Powering Growth
                  </p>
                </div>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                Let's Build Your Financial Success. We're eager to learn about your goals 
                and support you every step of the way.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
                  Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Contact Us
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Our Phone</p>
                    <a href="tel:+919910796075" className="text-gray-300 hover:text-white transition-colors">
                      +91 99107 96075
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Our Email</p>
                    <a href="mailto:Support@gigoria.in" className="text-gray-300 hover:text-white transition-colors">
                      Support@gigoria.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Mon-Fri</p>
                    <p className="text-gray-300">9:30am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Office Address
            </h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    18th Floor, Office No. 17, Silver Wing Building / Wave One Building,
                    Noida, Uttar Pradesh, 201301
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-green-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      Serving Pan India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Follow us on</p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${social.color} hover:border-transparent transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Gigoria. Designed By SentraWeb
          </p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              Secure & Trusted
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Heart className="w-3.5 h-3.5 text-red-500" />
              Made with care
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}