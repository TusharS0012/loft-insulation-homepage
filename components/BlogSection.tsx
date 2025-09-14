"use client";

import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How Loft Insulation Cuts Energy Bills by 25%",
    excerpt:
      "Learn how effective loft insulation can drastically reduce your energy costs while keeping your home comfortable.",
    link: "/blog/loft-insulation-energy-savings",
  },
  {
    title: "Government ECO4 Grants Explained",
    excerpt:
      "Discover how you can benefit from government energy-efficiency schemes like ECO4 to get subsidized insulation.",
    link: "/blog/eco4-grants",
  },
  {
    title: "Signs You Need Loft Insulation Replacement",
    excerpt:
      "Identify the warning signs that your existing loft insulation may need updating to improve efficiency.",
    link: "/blog/loft-insulation-replacement",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Latest Energy Tips & Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.link}
              className="block bg-white rounded-3xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-700">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
