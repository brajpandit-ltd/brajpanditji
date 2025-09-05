"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Significance of Diwali Puja",
    description:
      "Discover the spiritual importance of Diwali Puja and the rituals performed for prosperity and blessings.",
    image: "/assets/articles/diwalipuja.jpg",
    date: "Sep 1, 2025",
  },
  {
    id: 2,
    title: "Prem Mandir – A Divine Experience",
    description:
      "Learn about the history, architecture, and spiritual aura of Prem Mandir in Vrindavan.",
    image: "/assets/articles/premmandir.png",
    date: "Aug 25, 2025",
  },
  {
    id: 3,
    title: "Importance of Kundli in Vedic Astrology",
    description:
      "How Kundli influences life decisions, compatibility, and future predictions in Vedic traditions.",
    image: "/assets/pujas/kundali.png",
    date: "Aug 10, 2025",
  },
];

export default function BlogsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#fff5dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Spiritual <span className="text-red-600">Blogs & Articles</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Explore Vedic wisdom, rituals, temple stories, and astrological
            insights through our curated blogs.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#fff5dc] rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow">
                    {blog.description}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-block text-red-600 font-semibold hover:underline text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
