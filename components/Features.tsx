// components/AboutLIS.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Box, House, Layers, Trash2, CreditCard } from "lucide-react";
import Image from "next/image";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Home className="w-6 h-6 text-yellow-500" />,
    title: "Loft Insulation",
    description:
      "Cut energy bills and reduce your carbon footprint with expert loft insulation that meets building standards.",
  },
  {
    icon: <Box className="w-6 h-6 text-yellow-500" />,
    title: "Loft Boarding & Storage",
    description:
      "Create safe walking and storage space in your loft without compromising insulation efficiency.",
  },
  {
    icon: <House className="w-6 h-6 text-yellow-500" />,
    title: "Roof & Rafter Insulation",
    description:
      "Keep your home warm year-round with insulation under roof slopes for consistent indoor comfort.",
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    title: "Cavity Wall / Floor Insulation",
    description:
      "Fill wall and floor gaps with durable materials to improve efficiency and lower heating costs.",
  },
  {
    icon: <Trash2 className="w-6 h-6 text-yellow-500" />,
    title: "Loft Clearance",
    description:
      "Safely clear old or contaminated insulation and prepare your loft for a fresh upgrade.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
    title: "Government Grant Assistance",
    description:
      "Get hassle-free support to secure funding through ECO4, GBIS, and other schemes.",
  },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 80 },
};

const AboutLIS: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 place-items-center">
        {/* Left Column - Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-6 leading-snug">
            Your Global Marketplace for Certified Installers
          </h1>
          <p className="text-slate-600 mb-6 max-w-xl leading-relaxed">
            LIS connects homeowners with{" "}
            <span className="font-semibold text-slate-800">
              5,000+ certified experts
            </span>{" "}
            across the UK, USA, Canada, and Europe — making energy-efficient
            upgrades simpler, faster, and more affordable.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
            Local Expertise, Global Standards
          </h2>
          <p className="text-slate-600 max-w-xl leading-relaxed">
            Search, compare, and hire trusted professionals who meet high
            standards in quality and service — ensuring your loft project is
            stress-free.
          </p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Full-width container */}
          <div className="relative w-full h-96 lg:h-96 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/london.png"
              alt="Professional loft insulation team at work"
              width={600}
              height={600}
              className="object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 lg:px-12 mt-20">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition transform"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-yellow-100">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLIS;
