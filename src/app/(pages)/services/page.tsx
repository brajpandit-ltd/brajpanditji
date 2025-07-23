import React from "react";
import Image from "next/image";

import data from "@/constants/pujaServices.json";

import Filter from "./Filter";
import SearchHeader from "./SearchHeader";
import PoojaCard from "./PoojaCard";

const page = () => {
  const { poojaServices } = data;

  return (
    <>
      <section className="relative py-16 md:py-24">
        <Image
          src="/assets/services-hero.jpg"
          alt="Braj Pandit services hero"
          fill
          priority
          loading="eager"
          className="object-cover -z-1"
        />

        <div className="max-w-[350px] md:max-w-[650px] px-8">
          <h4 className="text-sm md:text-base font-normal">
            Bring Poojas From Brajdham
          </h4>
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-primary">Sacred</span> Services for Your{" "}
            <span className="text-secondary">Spiritual Journey</span>
          </h1>
          <p className="text-sm md:text-xl font-medium mt-3 md:mt-6">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>
          <p className="mt-4">Scroll Down🔻</p>
        </div>
      </section>

      <section className="flex sticky top-0 pt-8 pb-16 mx-4 md:mx-8">
        <div className="hidden md:block">
          <Filter />
        </div>

        <div className="flex-1">
          <SearchHeader />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {poojaServices?.map((puja, idx) => (
              <PoojaCard key={puja.slug + idx} pooja={puja} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
