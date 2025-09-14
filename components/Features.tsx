// components/AboutLIS.tsx
"use client";

import React from "react";
import { Home, Box, House, Layers, Trash2, CreditCard } from "lucide-react";

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
      "Loft insulation is one of the most cost-effective ways to improve your home’s energy efficiency. Our expert team ensures proper installation that meets building regulations, helping you cut energy bills and reduce your carbon footprint.",
  },
  {
    icon: <Box className="w-6 h-6 text-yellow-500" />,
    title: "Loft Boarding & Storage",
    description:
      "Maximize your loft’s potential with professional loft boarding and storage solutions, creating safe walking and storage space without compromising insulation.",
  },
  {
    icon: <House className="w-6 h-6 text-yellow-500" />,
    title: "Roof & Rafter Insulation",
    description:
      "Fit insulation directly under roof slopes to reduce heat loss, maintain consistent indoor temperatures, and make your home more comfortable year-round.",
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    title: "Cavity Wall / Floor Insulation",
    description:
      "Fill gaps in walls and floors with durable insulating materials to reduce heat loss, save on heating bills, and improve energy efficiency in older homes.",
  },
  {
    icon: <Trash2 className="w-6 h-6 text-yellow-500" />,
    title: "Loft Clearance",
    description:
      "Remove unwanted items, debris, and old or contaminated insulation responsibly, preparing your loft for fresh, efficient insulation.",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
    title: "Government Grant Assistance",
    description:
      "Check eligibility and secure funding for free or subsidized loft insulation under government schemes like ECO4 or GBIS, hassle-free.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">
          Your Global Marketplace for Certified
          Loft Insulation Installers
        </h1>
        <p className="text-gray-700 mb-12 text-center lg:text-left max-w-3xl">
          Welcome to LIS (Loft Insulation Services), the premier online marketplace
          connecting homeowners and businesses with expert loft insulation installers
          worldwide. With a vast network of over <strong>5,000 certified installers</strong>
          spanning the UK, Canada, USA, Germany, Netherlands, France, Sweden, Finland,
          and Ireland, LIS is dedicated to helping you find the best, most reliable,
          and competitively priced installer near you.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
          Find Your Ideal Installer: Local Expertise, Global Standards
        </h2>
        <p className="text-gray-700 mb-12 text-center lg:text-left max-w-3xl">
          Our robust platform allows you to search, compare, and connect with
          qualified professionals in your vicinity. Every installer in our network
          meets high standards of quality, reliability, and customer service, making
          LIS your trusted partner for energy-efficient home upgrades.
        </p>

        {/* Services Grid */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-yellow-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
