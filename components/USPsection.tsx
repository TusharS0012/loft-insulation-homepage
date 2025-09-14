"use client";

import React from "react";
import { CheckCircle, Leaf, Clock, Award } from "lucide-react";
import Link from "next/link";

interface USPItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const uspItems: USPItem[] = [
  {
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    title: "Certified & Accredited Installers",
    description:
      "FENSA, TrustMark, and Microgeneration Certification Scheme (MCS)",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Energy Bill Savings",
    description:
      "Save up to 25% on your energy bills with our insulation solutions",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    title: "Eco-Friendly Materials",
    description: "Our insulation solutions are made from recycled materials",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Fast, Hassle-Free Installation",
    description: "Most installations completed within a day",
  },
];

const USPSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Why Choose LIS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {uspItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-700 text-sm">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/survey"
            className="inline-block px-10 py-4 bg-yellow-500 text-green-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition text-lg animate-bounce"
          >
            Book Your Free Survey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
