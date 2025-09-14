// components/FAQs.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question:
      "1. How does LIS (Loft Insulation Services) help me find a loft insulation installer?",
    answer:
      "LIS provides a comprehensive online marketplace where you can enter your location and specific insulation needs. Our platform then matches you with a curated list of over 5,000 certified loft insulation installers in our global network, allowing you to compare their profiles, services, customer reviews, and quotes to find the best fit near you. We streamline the entire process from search to connection.",
  },
  {
    question: "2. Are the installers on LIS reliable and certified?",
    answer:
      "Absolutely. Every installer listed on the LIS marketplace undergoes a rigorous vetting process, which includes verifying certifications, licenses, insurance, and checking customer feedback. Our goal is to connect you only with reliable, experienced, and highly-rated professionals who adhere to industry standards and best practices.",
  },
  {
    question: "3. Can I get quotes from multiple installers through LIS?",
    answer:
      "Yes, our platform is designed to facilitate easy comparison. Once you submit your project details, you will typically receive quotes from multiple installers in your area. This allows you to evaluate different offers, understand cost variations, and make an informed decision based on your budget and requirements.",
  },
  {
    question:
      "4. What types of loft insulation can I find installers for on LIS?",
    answer:
      "Our diverse network covers Blanket Insulation, Loose-Fill Insulation, Spray Foam, Rigid Foam Board, Radiant Barrier, Multifoil, Natural Materials, Foam-in-Place Injection, ICFs, and Structural Insulated Panels (SIPs). No matter your specific insulation needs or property type, you can find a suitable expert.",
  },
  {
    question: "5. What if I'm not sure which type of loft insulation I need?",
    answer:
      "Many installers on LIS offer free consultations and surveys. They can assess your loft space, discuss your goals (thermal performance, budget, eco-friendliness), and recommend the most suitable insulation type for your property. They also explain the benefits and considerations of each option in detail.",
  },
  {
    question: "6. Is LIS available in my country?",
    answer:
      "LIS operates globally, with a strong presence in the UK, Canada, USA, Germany, Netherlands, France, Sweden, Finland, and Ireland. Simply select your country and enter your location on our platform to connect with local installers. Our network continues to expand.",
  },
  {
    question:
      "7. How does LIS ensure I find a 'cheap' installer without compromising quality?",
    answer:
      "Our marketplace model fosters competition among installers, which often leads to more competitive pricing. While we help you find cost-effective options, we never compromise on quality. Our vetting process ensures that even competitively priced installers maintain high standards of workmanship and use quality materials, balancing affordability with reliability.",
  },
];

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void }> = ({
  faq,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef, isOpen]);

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100 transition"
        onClick={onClick}
      >
        {faq.question}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: isOpen ? `${height}px` : "0px" }}
        className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="pt-2 text-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onClick={() => toggleFAQ(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
