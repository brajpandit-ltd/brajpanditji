"use client";

import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@/components/common";

// constant data
import data from "@/constants/pujaServices.json";

// redux
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsOpenFilters,
  setCategoryFilter,
  setTrendingFilter,
} from "@/store/features/pujaSeavicesSlice";

const Filter = () => {
  const { poojaFilters } = data;

  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.pujaServices);

  return (
    <>
      <aside className="relative w-full md:w-[320px] p-8 pt-10 h-screen md:border-r-4 mx-auto md:border-primary md:h-auto overflow-auto">
        <span className="absolute top-4 right-4 text-2xl cursor-pointer md:hidden">
          <RxCross2 onClick={() => dispatch(setIsOpenFilters(false))} />
        </span>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-primary text-lg mb-2 border-b-2 border-primary pb-1 text-center">
            Filters by categories
          </h4>

          <div className="flex flex-wrap gap-2">
            {poojaFilters?.categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => dispatch(setCategoryFilter(cat))}
                label={cat}
                size="small"
                variant={
                  filters?.category?.includes(cat) ? `primary` : `default`
                }
              />
            ))}
          </div>
        </div>
        {/* Trending Topics */}
        <div className="mb-8">
          <div className="font-semibold text-primary text-lg mb-2 border-b-2 border-primary pb-1 text-center">
            Filters by Trending Topics
          </div>
          <div className="flex flex-col gap-2">
            {poojaFilters?.trendingTopics.map((topic) => (
              <Button
                key={topic}
                onClick={() => dispatch(setTrendingFilter(topic))}
                label={topic}
                size="small"
                variant={
                  filters?.trending?.includes(topic) ? `primary` : `default`
                }
              />
            ))}
          </div>
        </div>
        {/* Regions (Placeholder) */}
        <div>
          <div className="font-semibold text-primary text-lg mb-2 border-b-2 border-primary pb-1 text-center">
            Filters by Regions
          </div>
          {/* Add region filter buttons here */}
        </div>
      </aside>
    </>
  );
};

export default Filter;
