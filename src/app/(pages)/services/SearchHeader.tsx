"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui";
import Filter from "./Filter";
import usePoojaServicesHook from "@/hooks/usePoojaServicesHook";

const SearchHeader = () => {
  const { filters, handleFilters, isOpenFilters, setIsOpenFilters } =
    usePoojaServicesHook();

  return (
    <>
      <div className="flex justify-between md:justify-end items-center gap-4 mb-6">
        <div className="relative w-full md:w-[400px]">
          <input
            type="text"
            placeholder="Search for services..."
            value={filters?.search}
            onChange={(e) => handleFilters("search", e.target.value)}
            autoComplete="off"
            className="w-full py-3 pl-4 pr-11 rounded-full border border-gray-300 text-base outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a11d1d] text-xl pointer-events-none">
            <CiSearch className="w-[20px] h-[20px]" />
          </span>
        </div>

        <Button
          variant="default"
          className="md:hidden"
          onClick={() => setIsOpenFilters(!isOpenFilters)}
          size={`small`}
          label="Filters"
        />
      </div>

      {isOpenFilters && (
        <div className="fixed top-0 left-0 right-0 w-full h-full z-[999] mt-20 bg-white md:hidden">
          <Filter />
        </div>
      )}
    </>
  );
};

export default SearchHeader;
