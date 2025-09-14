// components/Testimonials.tsx
"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  review: string;
  image?: string;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mary Johnson",
    rating: 5,
    review:
      "The team was professional, and our energy bills dropped significantly after installation. Highly recommended!",
    image: "/images/testimonials/photo1.jpeg",
    location: "London, UK",
  },
  {
    name: "Sam Smith",
    rating: 4,
    review:
      "Quick and efficient installation. The installers explained everything clearly. Very satisfied with the service!",
    image: "/images/testimonials/photo2.jpeg",
    location: "Manchester, UK",
  },
  {
    name: "Michael Johnson",
    rating: 5,
    review:
      "Eco-friendly materials and trustworthy installers. Our loft has never been warmer!",
    image: "/images/testimonials/photo3.jpeg",
    location: "Liverpool, UK",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-green-200"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  {t.location && (
                    <p className="text-sm text-gray-500">{t.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
