import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { PujaService } from "@/types/pujaService";
import { Button } from "@/components/common";
import services from "@/services/services";

export async function generateStaticParams() {
  // Replace this with your actual list of slugs, or fetch from your data source
  return [
    { serviceSlug: "rudrakshya" },
    { serviceSlug: "zodiac" },
    { serviceSlug: "wealth" },
    // ...add all possible slugs you want to statically generate
  ];
}

export default async function page({ params }: { params: any }) {
  const { serviceSlug } = params;

  let poojaDetails: PujaService | null = null;

  try {
    const { data } = await services.personalisedPuja(serviceSlug);
    poojaDetails = data;
  } catch (error) {
    console.error("Error fetching e-pooja services:", error);
  }

  if (!poojaDetails) {
    return (
      <div className="text-red-600 p-8 text-center">
        Puja not found, Try our other Puja Services.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Left Image Section */}
        <div className="md:w-1/2 relative">
          <Image
            src={poojaDetails?.bannerImage}
            alt={poojaDetails?.title}
            className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
            // onError={(e) => (e.target.src = "/fallback.jpg")}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-800 via-red-600 to-transparent text-white text-center py-4 px-2 flex flex-col gap-2 items-center">
            <a
              href="https://wa.me/+918433243283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaWhatsapp className="text-green-300" /> <span>Whatsapp Us</span>
            </a>
            <a
              href="tel:+916395857663"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhoneAlt className="text-yellow-300" /> <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-4">
              {poojaDetails?.title}
            </h2>
            <p className="text-gray-800 dark:text-gray-300 text-justify leading-relaxed">
              {poojaDetails?.description}
            </p>
            <p className="text-sm mt-4 text-gray-500 dark:text-gray-400 italic">
              📂 Category: {poojaDetails?.category} | ⭐ Ratings:{" "}
              {poojaDetails?.rating || 0}/5
            </p>
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href={`/services/puja-booking?service=${serviceSlug}&pandit=Vrinda%20Pandit`}
            >
              <Button label="📿 Book Us Now" />
            </Link>

            <Link href="/services">
              <Button label="← Back to Services" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
