"use client";

import Link from "next/link";
import pandits from "@/data/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";

export default function VerifiedPanditsSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-500">Verified</span> PanditJi
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Book highly knowledgeable Vedic Pandits and Purohits, well-versed
            in Sanskrit mantras, Hindu scriptures, and astrology, ensuring a
            spiritually enriching and traditionally accurate ritual experience.
          </p>

          {/* Button that navigates to /pandits */}
          <Link
            href="/pandits"
            className="inline-block border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            See All PanditJis
          </Link>
        </div>

        {/* Right Pandit Grid (2 rows × 3 cards = 6 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(pandits as Pandit[]).slice(0, 6).map((pandit) => (
            <PanditCard key={pandit.id} pandit={pandit} />
          ))}
        </div>
      </div>
    </section>
  );
}
