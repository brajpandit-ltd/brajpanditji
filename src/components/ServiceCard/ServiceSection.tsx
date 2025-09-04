
//ServiceCard//ServiceSection.tsx
"use client";

import pujas from "@/data/pujas.json";
import { Puja } from "@/types/puja";
import { ServiceCard } from "./ServiceCard";

export function ServiceSection() {
  return (
    <section className="px-4 md:px-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Our <span className="text-primary">Premium</span> Services
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm md:text-base font-medium text-center max-w-4xl mx-auto mb-10">
        Experience authentic Vedic rituals with our premium Pandit booking
        service. From Griha Pravesh to Wedding Poojas, we provide expert
        Pandits, auspicious muhurats, and complete pooja samagri for a
        hassle-free, spiritually enriching experience. Book now for divine
        blessings!
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {(pujas as Puja[]).slice(0, 6).map((puja) => (
          <ServiceCard key={puja.id} puja={puja} />
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <a
          href="/services"
          className="inline-block border border-primary text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
        >
          See All Pooja Services
        </a>
      </div>
    </section>
  );
}
