"use client";

import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@/components/ui";
import usePoojaServicesHook from "@/hooks/usePoojaServicesHook";

const categories = [
  "All Pujas",
  "Puja On Special Events",
  "Upcoming Pujas",
  "Dosha Nivaran Pujas",
  "Mukti Karmas",
];

const trendingTopics = [
  "Griha Pravesh Puja",
  "Satyanarayan Puja",
  "Rudrabhishek Puja",
  "Marriage Puja",
  "Others",
];

const Filter = () => {
  const { filters, handleFilters, setIsOpenFilters } = usePoojaServicesHook();

  return (
    <>
      <aside className="w-[320px] p-8 pt-10 md:border-r-4 md:border-primary h-screen md:h-auto overflow-auto">
        <span className="absolute top-4 right-4 text-2xl cursor-pointer md:hidden">
          <RxCross2 onClick={() => setIsOpenFilters(false)} />
        </span>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-primary text-lg mb-2 border-b-2 border-primary pb-1 text-center">
            Filters by categories
          </h4>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => {
                  handleFilters("category", [...filters?.category, cat]);
                  handleFilters("trending", []);
                }}
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
            {trendingTopics.map((topic) => (
              <Button
                key={topic}
                onClick={() => {
                  handleFilters("trending", [...filters?.trending, topic]);
                }}
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
