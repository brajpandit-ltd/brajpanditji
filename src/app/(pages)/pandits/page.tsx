// src/app/(pages)/pandits/page.tsx

import { PanditGrid } from "@/components/PanditCard/PanditGrid";

export default function PanditsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-[#fff5dc] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Expert Pandits</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Choose from our verified, highly experienced Pandits to perform your
            pujas and ceremonies with authenticity and devotion.
          </p>
        </div>
      </section>

      {/* Pandit Grid */}
      <PanditGrid />
    </main>
  );
}
