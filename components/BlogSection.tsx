"use client";

import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How Loft Insulation Cuts Energy Bills by 25%",
    excerpt:
      "Learn how effective loft insulation can drastically reduce your energy costs while keeping your home comfortable throughout the year.",
    link: "/blog/loft-insulation-energy-savings",
    date: "September 5, 2025",
    readTime: "4 min read",
  },
  {
    title: "Government ECO4 Grants Explained",
    excerpt:
      "Discover how you can benefit from government energy-efficiency schemes like ECO4 to get subsidized insulation and reduce your carbon footprint.",
    link: "/blog/eco4-grants",
    date: "August 28, 2025",
    readTime: "5 min read",
  },
  {
    title: "Signs You Need Loft Insulation Replacement",
    excerpt:
      "Identify the warning signs that your existing loft insulation may need updating to improve efficiency and maintain a healthier home environment.",
    link: "/blog/loft-insulation-replacement",
    date: "August 10, 2025",
    readTime: "3 min read",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Latest Energy Tips & Blog
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
          Stay updated with expert insights, energy-saving tips, and the latest
          updates on insulation grants. Our blog helps you make informed
          decisions to keep your home efficient and eco-friendly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.link}
              className="group block bg-white rounded-3xl p-6 shadow-lg border border-yellow-200 hover:border-yellow-400 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-xs font-medium bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600">
                {post.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <span className="text-yellow-600 font-semibold group-hover:underline">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
