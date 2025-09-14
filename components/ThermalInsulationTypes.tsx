// components/ThermalInsulationTypes.tsx
"use client";

import React from "react";
import { Circle, Home, Box, Layers, Trash2, CreditCard } from "lucide-react";

interface InsulationType {
  title: string;
  description: string;
  keyPoints: string[];
  pros: string[];
  cons: string[];
}

const insulationTypes: InsulationType[] = [
  {
    title: "Blanket Insulation (Batts & Rolls)",
    description:
      "Blanket insulation is the most common form, available as pre-cut batts or rolls made of fiberglass, mineral wool, plastic fibers, or natural fibers. Installed between joists, studs, and rafters, ideal for attics and unfinished walls.",
    keyPoints: ["Best For: Open loft floors, walls, floors"],
    pros: ["Affordable", "DIY-friendly", "Widely available"],
    cons: ["Must be cut to fit perfectly", "Not ideal for irregular spaces"],
  },
  {
    title: "Loose-Fill Insulation (Blown-In)",
    description:
      "Loose-fill insulation consists of small particles blown into cavities using special equipment, filling gaps and hard-to-reach areas. Perfect for retrofitting existing attics and walls.",
    keyPoints: ["Best For: Existing homes, awkward loft spaces"],
    pros: ["Excellent coverage", "Minimal structural disruption"],
    cons: ["May settle over time", "Needs pro installation for best results"],
  },
  {
    title: "Spray Foam Insulation",
    description:
      "Spray foam expands on application, sealing even the smallest gaps. Available as open-cell (softer, sound-absorbing) or closed-cell (denser, moisture-resistant), delivering one of the highest R-values per inch.",
    keyPoints: ["Best For: Air sealing, loft rafters, wall cavities"],
    pros: ["Creates air & moisture barrier", "Very effective"],
    cons: ["Higher cost", "Professional installation required"],
  },
  {
    title: "Structural Insulated Panels (SIPs)",
    description:
      "SIPs are prefabricated panels consisting of foam insulation sandwiched between two structural boards. They form walls, floors, and roofs for highly efficient new buildings.",
    keyPoints: ["Best For: New-build homes, extensions"],
    pros: ["Very strong", "Fast installation", "High insulation value"],
    cons: ["Higher upfront cost", "Professional assembly required"],
  },
];

const ThermalInsulationTypes: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
          Types of Thermal Insulation
        </h2>
        <p className="text-gray-700 mb-12 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          Our marketplace connects you with installers proficient in a wide
          array of loft insulation solutions. Each type offers distinct benefits
          tailored to different property needs, budgets, and environmental
          considerations. Understanding these options is key to making an
          informed decision for your home.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {insulationTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <Circle className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {type.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4">{type.description}</p>

              {type.keyPoints.length > 0 && (
                <ul className="mb-4 list-disc list-inside text-gray-700 font-medium">
                  {type.keyPoints.map((point, i) => (
                    <li key={i} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {type.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {type.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermalInsulationTypes;
