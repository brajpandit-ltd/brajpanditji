"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // Hide the header when closed

  return (
    <div className="bg-white border border-red-600 text-gray-900 text-sm shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-3 md:gap-6 relative md:justify-center">
        {/* Left / Center Content */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-center">
          <span className="text-gray-800 font-medium">Vedic Pandit for</span>

          <div className="flex items-center gap-2 border border-dotted border-red-600 rounded-full px-3 py-1">
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              Pitru Paksha / Shradh E -Puja
            </span>
          </div>
        </div>

        {/* Right Content: Book Now */}
        <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
          <Link
            href="/services/e-puja/pitru-paksha"
            className="bg-red-600 text-white px-5 py-1.5 rounded-full font-medium shadow-md hover:bg-red-700 transition text-sm md:text-base"
          >
            200 /-  Book Now
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)} // Hide header when clicked
          className="absolute top-2 right-2 md:top-3 md:right-4 text-gray-700 hover:text-red-600"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
