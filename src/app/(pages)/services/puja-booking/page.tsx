import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import services from "@/services/services";
import BookingForm from "./BookingForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Puja Booking | Braj Pandit Ji",
};

const page = async ({ searchParams }: any) => {
  const { pujaSlug, pujaType } = searchParams;
  const { data: pujaService }: { data: any; success: boolean } =
    pujaType === "ePuja"
      ? await services.ePuja(pujaSlug)
      : pujaType === "personalisedPuja"
        ? await services.personalisedPuja(pujaSlug)
        : { data: null };

  const { data: pujas }: { data: any; success: boolean } =
    pujaType === "ePuja"
      ? await services.ePujas()
      : pujaType === "personalisedPuja"
        ? await services.personalisedPujas()
        : { data: [] };

  return (
    <div className="min-h-screen px-4 py-14 bg-gradient-to-br">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 dark:bg-gray-900 rounded-3xl overflow-hidden">
        {/* Puja Information */}
        <div className="p-8 md:p-12">
          <div className="rounded-2xl mb-6 w-full h-64 object-cover shadow-xl border border-yellow-300 dark:border-yellow-800">
            <Image
              src={pujaService?.thumbnail || "/assets/pujas/default.jpg"}
              alt={pujaService?.title || "Puja Image"}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-800 dark:text-yellow-300 mb-4">
            {pujaService?.title || "Puja Service"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {pujaService?.description ||
              "Book an auspicious puja ceremony with verified pandits."}
          </p>
        </div>

        {/* Booking Form */}
        <BookingForm pujaService={pujaService} pujas={pujas} />
      </div>
    </div>
  );
};

export default page;
