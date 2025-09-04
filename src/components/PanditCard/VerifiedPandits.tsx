"use client";

import Link from "next/link";
import pandits from "@/data/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";

export default function VerifiedPanditsSection() {
  return (
    <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="flex-col justify-center lg:pt-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="text-red-500">Verified</span> PanditJi
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg">
            Book highly knowledgeable Vedic Pandits and Purohits, well-versed
            in Sanskrit mantras, Hindu scriptures, and astrology. Ensure a
            spiritually enriching and traditionally accurate ritual experience
            at your doorstep.
          </p>

          {/* Button that navigates to /pandits */}
          <Link
            href="/pandits"
            className="inline-block border border-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition"
          >
            See All PanditJis
          </Link>
        </div>

        {/* Right Pandit Grid (2 rows × 3 cards = 6 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-0">
          {(pandits as Pandit[]).slice(0, 6).map((pandit) => (
            <PanditCard key={pandit.id} pandit={pandit} />
          ))}
        </div>
      </div>
    </section>
  );
}
