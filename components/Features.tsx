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
    icon: (
      <Image
        src="/images/icons8-co2-50.png"
        alt="Loft Insulation"
        width={30}
        height={30}
      />
    ),
    title: "Loft Insulation",
    description:
      "Loft insulation is one of the most cost-effective ways to improve your home's energy efficiency. By installing high-quality insulation material between your loft joists or rafters, we prevent heat from escaping through your roof, keeping your home warmer in winter and cooler in summer. Our expert team ensures proper installation that meets UK building regulations, helping you cut energy bills by up to 25% while reducing your carbon footprint.",
  },
  {
    icon: (
      <Image
        src="/images/icons8-warehouse-50.png"
        alt="Loft Boarding & Storage"
        width={25}
        height={25}
      />
    ),
    title: "Loft Boarding & Storage",
    description:
      "Maximize your loft’s potential with our professional loft boarding and storage solutions. We install strong, secure, and insulated loft boards that create safe walking and storage space without compromising the effectiveness of your insulation. This service is ideal if you need extra storage for boxes, seasonal items, or household essentials while keeping your home energy efficient.",
  },
  {
    icon: (
      <Image
        src="/images/icons8-roof-tiles-50.png"
        alt="Roof & Rafter Insulation"
        width={25}
        height={25}
      />
    ),
    title: "Roof & Rafter Insulation",
    description:
      "For homes with unboarded lofts or difficult-to-insulate spaces, roof and rafter insulation is the perfect solution. We fit insulation directly under the roof slopes, reducing heat loss through the rafters. This not only keeps your loft usable throughout the year but also helps maintain a consistent indoor temperature, making your home more comfortable and reducing energy usage.",
  },
  {
    icon: (
      <Image
        src="/images/icons8-wooden-floor-50.png"
        alt="Cavity Wall / Floor Insulation"
        width={25}
        height={25}
      />
    ),
    title: "Cavity Wall / Floor Insulation",
    description:
      "Heat often escapes through uninsulated walls and floors. Our cavity wall and floor insulation services fill those gaps with safe, durable insulating materials to reduce heat loss significantly. This service is particularly effective for older homes and properties with suspended floors, helping you save on heating bills and create a more energy-efficient home.",
  },
  {
    icon: (
      <Image
        src="/images/icons8-recycle-bin-50.png"
        alt="Loft Clearance"
        width={25}
        height={25}
      />
    ),
    title: "Loft Clearance",
    description:
      "A cluttered loft or old, damaged insulation can stop you from maximizing your space. Our loft clearance service removes unwanted items, debris, and old or contaminated insulation quickly and responsibly. We prepare your loft for fresh, efficient insulation, giving you a cleaner, safer, and healthier attic environment.",
  },
  {
    icon: (
      <Image
        src="/images/icons8-museum-50.png"
        alt="Government Grant Assistance"
        width={25}
        height={25}
      />
    ),
    title: "Government Grant Assistance",
    description:
      "Did you know you may qualify for free or subsidized loft insulation under government energy-efficiency schemes like ECO4 or GBIS? Our team helps you check eligibility, handle paperwork, and secure funding so you can upgrade your insulation at little or no cost. We make the process hassle-free so you can focus on enjoying a warmer, more energy-efficient home.",
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-6 leading-snug">
            Your Global Marketplace for Certified Installers
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl leading-relaxed">
            Welcome to LIS (Loft Insulation Services), the premier online
            marketplace connecting homeowners and businesses with expert loft
            insulation installers worldwide. With a vast network of
            <span className="font-semibold text-slate-800">
              5,000+ certified experts
            </span>{" "}
            spanning key regions including the{" "}
            <span className="font-semibold text-slate-800">
              United Kingdom, Canada, United States, Germany, Netherlands,
              France, Sweden, Finland, and Ireland,
            </span>
            LIS (Loft Insulation Services) is dedicated to helping you find the
            <span className="font-semibold text-slate-800">
              best, most reliable, and competitively priced installer near you.
            </span>{" "}
            We simplify the process of upgrading your home's energy efficiency,
            ensuring comfort, savings, and a greener footprint.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
            Local Expertise, Global Standards
          </h3>
          <p className="text-slate-600 max-w-xl leading-relaxed">
            At LIS (Loft Insulation Services), we understand that finding the
            right installer can be a daunting task. That's why we've built a
            robust platform that allows you to easily search, compare, and
            connect with qualified professionals in your vicinity. Our rigorous
            vetting process ensures that every installer in our network meets
            high standards of quality, reliability, and customer service.
            Whether you're looking to reduce your energy bills, enhance your
            home's comfort, or meet specific energy efficiency regulations, LIS
            (Loft Insulation Services) is your trusted partner.
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
              <p className="text-slate-600 text-base leading-relaxed">
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
