// components/ThermalInsulationTypes.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Wind, Droplet, Hammer } from "lucide-react";

interface InsulationType {
  title: string;
  icon: React.ReactNode;
  description: string;
  pros: string[];
  cons: string[];
}

const insulationTypes: InsulationType[] = [
  {
    title: "Blanket Insulation",
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    description:
      "Pre-cut rolls or batts (fiberglass, mineral wool, natural fibers). Great for open lofts and unfinished walls.",
    pros: ["Affordable", "DIY-friendly"],
    cons: ["Not ideal for irregular spaces"],
  },
  {
    title: "Loose-Fill (Blown-In)",
    icon: <Wind className="w-6 h-6 text-indigo-600" />,
    description:
      "Small particles blown into cavities, filling gaps perfectly. Excellent for retrofits and awkward lofts.",
    pros: ["Excellent coverage", "Minimal disruption"],
    cons: ["May settle over time"],
  },
  {
    title: "Spray Foam",
    icon: <Droplet className="w-6 h-6 text-indigo-600" />,
    description:
      "Expands on application, sealing gaps and offering very high insulation per inch.",
    pros: ["Air + moisture barrier", "Very effective"],
    cons: ["Higher cost"],
  },
  {
    title: "SIPs Panels",
    icon: <Hammer className="w-6 h-6 text-indigo-600" />,
    description:
      "Prefabricated foam panels between structural boards. Fast and strong for new builds.",
    pros: ["High insulation", "Quick install"],
    cons: ["Upfront cost"],
  },
];

const ThermalInsulationTypes: React.FC = () => {
  return (
    <section className="py-20 bg-green-200">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-cyan-900 mb-4 text-center lg:text-left"
        >
          Types of Thermal Insulation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          Explore popular insulation solutions—each designed for different
          needs, budgets, and property types.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {insulationTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {type.icon}
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {type.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mb-4">{type.description}</p>

              <div className="flex justify-between text-sm">
                <ul className="space-y-1 text-green-600">
                  {type.pros.map((pro, i) => (
                    <li key={i}>+ {pro}</li>
                  ))}
                </ul>
                <ul className="space-y-1 text-red-500">
                  {type.cons.map((con, i) => (
                    <li key={i}>- {con}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermalInsulationTypes;
