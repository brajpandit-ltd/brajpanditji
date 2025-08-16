import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import services from "@/services/services";
import { SearchPujaFiltersParams } from "@/types/pujaService";
import SearchHeader from "../SearchHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book Pooja In Temples Across India",
};

const pujaCategories = [
  {
    title: "All",
    slug: "all",
    image: "/assets/pujas/all.jpg",
  },
  {
    title: "Puja",
    slug: "puja",
    image: "/assets/pujas/puja.jpg",
  },
  {
    title: "Rudrabhishek",
    slug: "rudrabhishek",
    image: "/assets/pujas/rudrabhishek.jpg",
  },
];

const page = async ({
  searchParams,
}: {
  searchParams: Promise<SearchPujaFiltersParams>;
}) => {
  const params = await searchParams;

  const getQueryParams = () => {
    const query = new URLSearchParams();
    if (params.searchQuery) query.set("searchQuery", params.searchQuery);
    if (params.category) query.set("category", params.category);

    return query.toString();
  };

  let ePujas: any = [];
  try {
    const { data: pujas } = await services.ePujas(getQueryParams());
    ePujas = pujas;
  } catch (error: any) {
    console.error("Error fetching e-pooja services:", error?.message);
  }

  return (
    <>
      <section className="px-6 py-8 md:py-12 lg:py-16 text-center bg-amber-100">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">
          Sacred Rituals for Your Spiritual Journey
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience the sacred rituals of Sanatan Dharma performed by expert
          Vedic pandits. Book a puja that suits your spiritual needs.
        </p>
      </section>

      <div className="flex-1 px-6 py-8 md:py-12">
        <SearchHeader
          basePathname="/services/e-puja"
          pujaCategories={pujaCategories}
        />

        <Suspense fallback={<p>Loading...</p>}>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {ePujas?.map((puja: any, idx: number) => (
              <div
                key={puja.slug + idx}
                className="w-full min-w-[230px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group snap-start"
              >
                <Link href={`/services/e-puja/${puja.slug}`}>
                  <Image
                    src={puja?.bannerImage}
                    alt={puja?.title}
                    width={230}
                    height={100}
                    className="object-cover h-[150px] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-bold">{puja?.title}</h3>
                    <p className="text-xs line-clamp-2">{puja.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default page;
