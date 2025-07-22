import React from "react";
import Image from "next/image";

import { poojaServices } from "@/constants/static.json";

import Filter from "./Filter";
import SearchHeader from "./SearchHeader";
import PoojaCard from "./PoojaCard";

const page = () => {
  const handleBookNow = (poojaTitle: string) => {
    alert(`Booking for ${poojaTitle} initiated!`);
  };

  // const filteredPujas = poojaCategories.filter((puja: any) => {
  //   let matchesCategory =
  //     selectedCategory === "All Pujas" || puja.title === selectedCategory;
  //   let matchesTrending =
  //     !selectedTrending ||
  //     puja.title === selectedTrending ||
  //     (selectedTrending === "Others" && puja.title === "Others");
  //   let matchesSearch = puja.title.toLowerCase().includes(search.toLowerCase());
  //   return matchesCategory && matchesTrending && matchesSearch;
  // });

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

      <section className="flex bg-white min-h-screen sticky pt-8 pb-16 top-0 mx-4 md:mx-8">
        <div className="hidden md:block">
          <Filter />
        </div>

        <div className="flex-1 overflow-auto">
          <SearchHeader />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {poojaServices.map((puja, idx) => (
              <PoojaCard key={puja.slug + idx} pooja={puja} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
