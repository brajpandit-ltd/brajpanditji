"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface Filters {
  category: string[];
  trending: string[];
  search: string;
}

const usePoojaServicesHook = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filters, setFilters] = useState<Filters>({
    category: ["All Pujas"],
    trending: [],
    search: "",
  });
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const handleFilters = (
    key: "search" | "category" | "trending",
    value: any
  ) => {
    if (key === "category" || key === "trending") {
      // Ensure unique values in category and trending arrays
      value = Array.from(new Set(value));
    }

    if (key === "search") {
      value = value.trim();
    }

    setFilters({ ...filters, [key]: value });
  };

  //   useEffect(() => {
  //     const params = new URLSearchParams(searchParams.toString());

  //     if (filters?.search) {
  //       params.set("q", filters?.search);
  //     } else {
  //       params.delete("q");
  //     }

  //     router.replace(`${pathname}?${params.toString()}`);
  //   }, [filters?.search]);

  return {
    isOpenFilters,
    setIsOpenFilters,

    filters,
    handleFilters,
  };
};

export default usePoojaServicesHook;
