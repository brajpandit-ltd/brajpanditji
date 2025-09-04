"use client";

import Image from "next/image";
import { Puja } from "@/types/puja";
import { Button } from "@/components/ui";

interface AllServicesCardProps {
  puja: Puja;
}

export function AllServicesCard({ puja }: AllServicesCardProps) {
  return (
    <div className="flex flex-col h-20 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white">
      {/* Image */}
      <div className="relative w-full h-72">
        <Image
          src={puja.image}
          alt={puja.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {puja.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{puja.title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
          {puja.description}
        </p>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-600">
            ₹{puja.price.toLocaleString()}
          </span>
          <Button
            variant="primary"
            label="Book Now"
            className="px-5 py-2 rounded-full text-sm font-medium"
          />
        </div>
      </div>
    </div>
  );
}
