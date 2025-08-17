"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@/components/common";

// constant data
import data from "@/constants/pujaServices.json";

// redux
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsOpenFilters,
  setTagsFilter,
  updateFiltersBySearchParams,
  resetFilters,
  setFilters,
} from "@/store/features/pujaSeavicesSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { poojaFilters } = data;
  const { filters } = useAppSelector((state: any) => state.pujaServices);

  // update filters by search query params
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const filtersParams = {
      searchQuery: params.get("searchQuery") || "",
      category: params.get("category") || "",
      trending: params.get("trending") || "",
      tags: params.getAll("tags"),
    };
    dispatch(updateFiltersBySearchParams(filtersParams));

    router.push(`/?${params.toString()}`);

    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch, searchParams, router]);

  // when i change the filters, update the url search params
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters?.searchQuery) params.set("searchQuery", filters.searchQuery);
    if (filters?.category) params.set("category", filters.category);
    if (filters?.trending) params.set("trending", filters.trending);

    if (filters?.tags?.length)
      filters.tags.forEach((tag: any) => {
        params.append("tags", tag);
      });

    router.push(`/?${params.toString()}`);
  }, [filters, router]);

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
            {poojaFilters?.trendingTopics.map((trending, idx) => (
              <Button
                key={trending + idx}
                onClick={() => dispatch(setFilters({ trending }))}
                label={trending}
                size="v-small"
                variant={
                  filters?.trending?.includes(trending) ? `primary` : `default`
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
          <div className="flex flex-wrap gap-2">
            {poojaFilters?.tags.map((tag) => (
              <Button
                key={tag}
                onClick={() => dispatch(setTagsFilter(tag))}
                label={tag}
                size="v-small"
                variant={filters?.tags?.includes(tag) ? `primary` : `default`}
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
