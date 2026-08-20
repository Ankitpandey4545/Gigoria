 "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Phone, ArrowRight, 
  Home, Layers, Briefcase, BookOpen, Users, Mail,
  Sparkles, Crown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Schemes", href: "/schemes", icon: Layers, badge: "NEW" },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Blogs", href: "/blogs", icon: BookOpen },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md shadow-gray-200/50 border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/50"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-all group-hover:scale-105">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white shadow-lg shadow-yellow-400/50 flex items-center justify-center">
                <Crown className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">Gigoria</span>
              <p className="text-[9px] font-semibold text-blue-600 uppercase tracking-[0.2em] leading-tight">
                Powering Growth
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-1 text-[9px] font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="tel:+919999999999"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="font-medium">+91 99999 99999</span>
            </Link>
            <Button size="sm" className="shadow-lg shadow-blue-600/25">
              Apply Now
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      {item.name}
                      {item.badge && (
                        <span className="ml-2 text-[10px] font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
              
              <div className="border-t border-gray-100 my-3 pt-3 space-y-3">
                <Link
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  Call: +91 99999 99999
                </Link>
                <Link href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">
                    Apply Now →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}