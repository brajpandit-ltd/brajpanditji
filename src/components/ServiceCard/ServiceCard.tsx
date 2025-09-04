"use client";

import Image from "next/image";
import { Puja } from "@/types/puja";

interface ServiceCardProps {
  puja: Puja;
}

export function ServiceCard({ puja }: ServiceCardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Full Image */}
      <div className="relative w-full h-64">
        <Image
          src={puja.image}
          alt={puja.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Overlay Content */}
<div className="absolute bottom-0 left-0 right-0 bg-white/40 backdrop-blur-sm p-4">
  <h3 className="text-lg font-bold text-gray-800 mb-2">
    {puja.title}
  </h3>
  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
    {puja.description}
  </p>
</div>


      {/* Badge */}
      <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
        Premium
      </div>
    </div>
  );
}
