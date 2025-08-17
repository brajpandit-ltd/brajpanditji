import { NextRequest, NextResponse } from "next/server";
import data from "@/constants/ePujas.json";

export async function GET(req: NextRequest) {
  const { ePujas: upcommingPujas } = data;

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const category = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("searchQuery") || "";

  const filteredPoojaServices = upcommingPujas.filter((pooja) => {
    if (category === "all")
      return pooja.title.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      pooja.category?.includes(category) &&
      pooja.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedPujas = filteredPoojaServices.map((pooja) => ({
    title: pooja.title,
    slug: pooja.slug,
    subtitle: pooja.subtitle,
    bannerImage: pooja.bannerImage,
    location: pooja.location,
  }));

  return NextResponse.json({
    success: true,
    message: "Success",
    data: type === "all" ? filteredPoojaServices : sortedPujas,
  });
}
