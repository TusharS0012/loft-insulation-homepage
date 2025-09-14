"use client";

import React from "react";
import Link from "next/link";

const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-green-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Get Your FREE Home Energy Survey Today!
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Upgrade your loft insulation and start saving on energy bills. Our
          certified installers are ready to assist you with fast, reliable, and
          eco-friendly solutions.
        </p>
        <Link
          href="/quote"
          className="inline-block px-12 py-4 font-semibold rounded-xl text-lg
                     bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900
                     shadow-lg transform transition-all duration-1000
                     animate-bounce"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
