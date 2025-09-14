"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center text-white overflow-hidden"
    >
      {/* Video Background */}
      {inView && (
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="/videos/Floor_Insulation_Video_Generation.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/video-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full px-6 sm:px-6 lg:px-16 flex">
        <div className="w-full lg:w-1/2 px-4 space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Save Up to{" "}
            <span className="text-yellow-300">25% on Energy Bills</span> with
            Professional Loft Insulation
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Expert installation, certified materials, nationwide coverage.
            Connect with over <strong>5,000 certified installers</strong> across
            the UK, Canada, USA, Germany & India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="#get-quote"
              className="inline-block px-8 py-4 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition transform animate-bounce-slow"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition"
            >
              Call Now
            </a>
          </div>

          <p className="mt-4 text-sm text-white/80">
            Your trusted partner for energy-efficient loft insulation solutions
            worldwide.
          </p>
        </div>
      </div>

      {/* Custom animation class */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
