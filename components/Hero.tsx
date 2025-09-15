"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="relative">
      <section
        ref={ref}
        className="relative h-screen flex items-center text-white overflow-hidden"
      >
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
            preload="none"
            poster="/images/video-poster.jpg"
            onLoadedData={() => setVideoLoaded(true)}
          />
        )}

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 max-w-7xl w-full px-6 sm:px-6 lg:px-16 flex items-center">
          <div className="w-full lg:w-1/2 px-4 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Save Up to{" "}
              <span className="text-yellow-300">25% on Energy Bills</span> with
              Professional Loft Insulation
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Expert installation, certified materials, nationwide coverage.
              Connect with over <strong>5,000 certified installers</strong>{" "}
              worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="#get-quote"
                className="inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition transform animate-bounce-slow"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+1234567890"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
              >
                Call Now
              </a>
            </div>

            <p className="mt-4 text-sm text-white/80">
              Your trusted partner for energy-efficient loft insulation
              solutions worldwide.
            </p>
          </div>
        </div>

        <style jsx>{`
          .animate-bounce-slow {
            animation: bounce 2.5s infinite;
          }
        `}</style>
      </section>

      <section id="get-quote" className="relative z-20 -mt-12 px-4 pb-16">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-6 mx-auto max-w-6xl border border-yellow-400">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Get a Free Quote in 60 Seconds
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none w-full"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none w-full"
            />

            {/* Custom styled dropdown */}
            <div className="relative">
              <select className="appearance-none p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none w-full bg-white text-black font-medium pr-10 cursor-pointer hover:border-yellow-400 transition">
                <option value="">Who You Are</option>
                <option value="homeowner">House Owner</option>
                <option value="provider">Service Provider</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
                ▼
              </span>
            </div>

            <div className="relative">
              <select className="appearance-none p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none w-full bg-white text-black font-medium pr-10 cursor-pointer hover:border-yellow-400 transition">
                <option value="">Select Service</option>
                <option>Loft Insulation</option>
                <option>Loft Boarding & Storage</option>
                <option>Roof & Rafter Insulation</option>
                <option>Cavity Wall / Floor Insulation</option>
                <option>Loft Clearance</option>
                <option>Government Grant Assistance</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
                ▼
              </span>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition duration-300 shadow-md w-full"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
