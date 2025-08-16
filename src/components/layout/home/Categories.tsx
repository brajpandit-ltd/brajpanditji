"use client";

import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/pujaSeavicesSlice";

const Categories = ({ categories }: any) => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.pujaServices);

  const handleCat = (cat: string) => dispatch(setFilters({ category: cat }));

  return (
    <div className="overflow-x-auto mt-3 md:mt-4 no-scrollbar">
      <div className="flex gap-3 snap-x snap-mandatory overflow-x-scroll">
        {categories?.map((cat: any, idx: number) => (
          <div
            key={cat.slug + idx}
            className="w-full min-w-[60px] md:min-w-[100px] cursor-pointer"
            onClick={() => handleCat(cat.slug)}
          >
            <Image
              src={cat?.image}
              alt={cat?.title}
              width={100}
              height={100}
              className={`object-cover w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full ${
                filters.category === cat?.slug && "border-2 border-primary"
              }`}
            />
            <h4
              className={`text-sm text-center font-medium line-clamp-1 ${filters.category === cat?.slug && "text-primary"}`}
            >
              {cat?.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
