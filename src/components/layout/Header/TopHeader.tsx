"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-white border border-red-600 text-gray-900 text-sm shadow-sm relative h-15">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4">
        {/* Centered Section */}
        <span className="text-gray-800 font-medium">
          Vedic Pandit for
        </span>

        {/* Dotted Border Pill */}
        <div className="flex items-center gap-2 border border-dotted border-red-600 rounded-full px-4 py-1">
          {/* Icon */}
          
          <span className="font-semibold text-gray-900">
            Pitru Paksha / Shradh Puja
          </span>
        </div>

        {/* Book Now Button */}
        <Link
          href="/services/e-puja/pitru-paksha"
          className="bg-red-600 text-white px-5 py-1.5 rounded-full font-medium shadow-md hover:bg-red-700 transition"
        >
          Book Now
        </Link>

        {/* Close Button (absolute right) */}
        <button className="absolute right-4 text-gray-700 hover:text-red-600">
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
