"use client";

import pujas from "@/data/pujas.json";
import { Puja } from "@/types/puja";
import { AllServicesCard } from "./AllServicesCard";
import { ServiceCard } from "./ServiceCard";

export function AllServices() {
  // Group pujas by category
  const groupedPujas = (pujas as Puja[]).reduce((acc, puja) => {
    if (!acc[puja.category]) {
      acc[puja.category] = [];
    }
    acc[puja.category].push(puja);
    return acc;
  }, {} as Record<string, Puja[]>);

  return (
    <section className="px-4 md:px-10 py-16 bg-gradient-to-b from-[#fffdf7] to-[#fff5dc]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore <span className="text-orange-600">All Pujas</span> & Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-medium text-center max-w-4xl mx-auto mb-12">
          Choose from a wide range of Vedic rituals and ceremonies, performed by
          verified Pandits. Browse by categories such as Festivals, House
          Ceremonies, Weddings, and Spiritual Pujas.
        </p>

        {/* Categories */}
        <div className="space-y-20">
          {Object.keys(groupedPujas).map((category, index) => (
            <div key={category} className="space-y-10">
              {/* Category Heading */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-[2px] w-16 bg-orange-500"></span>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 capitalize">
                  {category} Pujas
                </h3>
                <span className="h-[2px] w-16 bg-orange-500"></span>
              </div>

              {/* Services Grid (4 per row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {groupedPujas[category].map((puja) => (
                  <AllServicesCard key={puja.id} puja={puja} />
                 
                ))}
              </div>

              {/* Divider between categories */}
              {index < Object.keys(groupedPujas).length - 1 && (
                <div className="border-t border-gray-300 mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
