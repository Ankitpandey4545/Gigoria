"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Users, Briefcase, Award,
  Mail, Phone,
  ArrowRight, Sparkles, Target, Heart,
  CheckCircle, Shield, Clock, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    designation: "Founder & CEO",
    bio: "20+ years of experience in financial advisory and business consulting. Passionate about helping MSMEs grow and succeed.",
    email: "rajesh@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Priya Sharma",
    designation: "Head of Operations",
    bio: "Expert in streamlining business processes and ensuring seamless service delivery for all clients.",
    email: "priya@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Amit Patel",
    designation: "Lead Financial Advisor",
    bio: "Chartered Accountant with deep expertise in government schemes, funding, and tax planning.",
    email: "amit@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sneha Reddy",
    designation: "Senior Consultant",
    bio: "Specializes in business registration, compliance, and helping startups navigate regulatory frameworks.",
    email: "sneha@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Vikram Singh",
    designation: "Business Development Head",
    bio: "Driving growth through strategic partnerships and expanding Gigoria's presence across India.",
    email: "vikram@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Ananya Gupta",
    designation: "Marketing Lead",
    bio: "Creative strategist focused on brand building and digital marketing for business growth.",
    email: "ananya@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Rahul Mehta",
    designation: "Technology Lead",
    bio: "Digital transformation expert building innovative solutions for business scalability.",
    email: "rahul@gigoria.in",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Neha Jain",
    designation: "Client Relations Manager",
    bio: "Ensuring exceptional client experience and building long-lasting business relationships.",
    email: "neha@gigoria.in",
    linkedin: "#",
    twitter: "#"
  }
];

const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Expert Team", icon: Users },
  { value: "20,000+", label: "Happy Clients", icon: Heart },
  { value: "28+", label: "States Covered", icon: Globe }
];

const values = [
  { 
    icon: Target, 
    title: "Client First",
    description: "We prioritize our clients' success above everything else.",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-100"
  },
  { 
    icon: Shield, 
    title: "Integrity",
    description: "We operate with complete transparency and ethical practices.",
    color: "from-green-500 to-green-700",
    bg: "from-green-50 to-green-100"
  },
  { 
    icon: Sparkles, 
    title: "Excellence",
    description: "We deliver high-quality solutions with attention to detail.",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-100"
  },
  { 
    icon: Heart, 
    title: "Empathy",
    description: "We understand your challenges and support you genuinely.",
    color: "from-rose-500 to-rose-700",
    bg: "from-rose-50 to-rose-100"
  }
];

// Custom Social Icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function TeamPage() {
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
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">Our Team</h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                Meet the experts behind Gigoria
              </p>
              <p className="text-blue-200/80 text-sm mt-1">
                Dedicated professionals committed to your business growth
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${value.bg} flex items-center justify-center mb-3`}>
                  <value.icon className={`w-6 h-6 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-blue-600/30">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-extrabold text-gray-900 text-center">
                {member.name}
              </h3>
              
              {/* Designation */}
              <p className="text-sm font-semibold text-blue-600 text-center mb-2">
                {member.designation}
              </p>

              {/* Bio */}
              <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Contact Links */}
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
                <a
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href={member.linkedin}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href={member.twitter}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100/60"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Want to join our team?</p>
              <p className="text-xs text-gray-500">We're always looking for talented individuals</p>
            </div>
          </div>
          <Link href="/contact">
            <Button variant="gradient" size="sm" className="shadow-lg shadow-blue-600/30">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}