import { NextRequest, NextResponse } from "next/server";
import data from "@/constants/pujaServices.json";

export async function GET(req: NextRequest, { params }: any) {
  const { poojaSlug } = await params;

  const { poojaServices } = data;

  const puja = poojaServices.find((pooja) => pooja.slug === poojaSlug);

  if (!puja) {
    return NextResponse.json(
      { success: false, message: "Service Not found, Please try again." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "success",
    data: puja,
  });
}
