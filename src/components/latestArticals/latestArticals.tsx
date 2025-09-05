"use client";

import React from "react";
import Image from "next/image";

type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
};

const articles: Article[] = [
  {
    id: "a1",
    title: "Significance of Raksha Bandhan Puja",
    description:
      "Explore the spiritual importance of Raksha Bandhan rituals and how they strengthen the bond between siblings.",
    image: "/assets/articles/temple.jpg",
    date: "August 30, 2025",
  },
  {
    id: "a2",
    title: "Why Janmashtami is Celebrated",
    description:
      "Understand the divine story of Lord Krishna’s birth and the traditions followed during Janmashtami.",
    image: "/assets/articles/diwalipuja.jpg",
    date: "August 20, 2025",
  },
  {
    id: "a3",
    title: "Vastu Tips for Positive Energy",
    description:
      "Learn simple yet effective Vastu Shastra tips to bring harmony, peace, and positivity into your home.",
    image: "/assets/articles/premmandir.png",
    date: "July 15, 2025",
  },
];

export default function LatestArticles() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Our <span className="text-primary">Latest</span>{" "}
            <span className="text-red-600">Articles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Stay updated with our latest spiritual insights, Vedic knowledge,
            and puja-related articles curated for your divine journey.
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {article.description}
                </p>
                <button className="text-primary font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
