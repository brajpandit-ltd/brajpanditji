import { NextRequest, NextResponse } from "next/server";
import data from "@/constants/pujaServices.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category")?.toLowerCase();

  const filteredPoojaServices = data.poojaServices.filter((pooja) => {
    if (category === "" || !category) {
      return true;
    }

    return pooja.category.toLowerCase().includes(category);
  });

  return NextResponse.json({
    success: true,
    message: "Success",
    data: filteredPoojaServices,
  });
}
