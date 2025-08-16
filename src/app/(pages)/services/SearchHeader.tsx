"use client";

import React, { useEffect, useState, useTransition } from "react";
import { CiSearch } from "react-icons/ci";

import { Button } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/pujaSeavicesSlice";
import { useRouter } from "next/navigation";
import { debounce } from "@/utils/unitsFun";
import { PujaCategory } from "@/types/pujaService";

const SearchHeader = ({
  basePathname,
  pujaCategories,
}: {
  basePathname: string;
  pujaCategories: PujaCategory[];
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();

  const { filters } = useAppSelector(
    (state: { pujaServices: any }) => state.pujaServices
  );

  const [searchQuery, setSearchQuery] = useState<string>(
    filters?.searchQuery || ""
  );

  const handleSearch = (searchQuery: string) => {
    dispatch(setFilters({ searchQuery }));
  };

  const handleDebounceSearch = debounce(handleSearch, 500);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters?.searchQuery) params.set("searchQuery", filters.searchQuery);
    if (filters?.category) params.set("category", filters.category);

    startTransition(() => {
      router.push(`${basePathname}?${params.toString()}`);
    });
  }, [filters, basePathname, router]);

  return (
    <>
      <div className="flex justify-between md:justify-end items-center gap-4 mb-6">
        <div className="relative w-full md:w-[400px]">
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
              handleDebounceSearch(e.target.value);
            }}
            autoComplete="off"
            className="w-full py-3 pl-4 pr-11 rounded-full border border-gray-300 text-base outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a11d1d] text-xl pointer-events-none">
            <CiSearch className="w-[20px] h-[20px]" />
          </span>
        </div>
      </div>

      {pujaCategories && pujaCategories.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-6">
          {pujaCategories.map((cat: any) => (
            <Button
              key={cat?.slug}
              onClick={() => dispatch(setFilters({ category: cat?.slug }))}
              label={cat?.title}
              size="small"
              variant={
                filters?.category?.includes(cat?.slug) ? `primary` : `default`
              }
            />
          ))}
        </div>
      )}

      {isPending && (
        <p className="text-sm text-gray-500 mt-4">Loading pujas...</p>
      )}
    </>
  );
};

export default SearchHeader;
