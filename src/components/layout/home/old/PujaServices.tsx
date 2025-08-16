import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/constants/pujaServices.json";
import { slugify } from "@/utils/unitsFun";

const PujaServicesPage = () => {
  const { poojaServicesCategories } = data;

  return (
    <section className="py-12 px-4 md:px-12">
      <div className="max-w-[955px] flex flex-col gap-3 text-center mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our <span className="text-primary">Premium</span> Services
        </h2>

        <p className="text-sm md:base">
          Experience authentic Vedic rituals with our premium Pandit booking
          service. From Griha Pravesh to Wedding Poojas, we provide expert
          Pandits, auspicious muhurats, and complete pooja samagri for a
          hassle-free, spiritually enriching experience. Book now for divine
          blessings!
        </p>
      </div>

      <div className="flex flex-wrap gap-5 mt-8 justify-center">
        {poojaServicesCategories?.map((cat, idx) => (
          <div
            key={cat.slug + idx}
            className="relative w-[300px] h-[350px] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <Link
              href={`/services?category=${encodeURIComponent(cat.title)}`}
              key={slugify(cat.title)}
              className="w-full h-full"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                width={300}
                height={350}
                className="object-cover w-full h-full"
              />
              {cat.popular && (
                <span className="absolute top-3 left-3 bg-white text-[#a11d1d] font-semibold text-sm rounded-full px-4 py-1 shadow">
                  Popular puja
                </span>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[rgba(231,231,231,0.7)]">
                <h3 className="text-sm font-medium">{cat.title}</h3>
                <p className="text-xs">{cat.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PujaServicesPage;
