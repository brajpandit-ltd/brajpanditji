import { NextRequest, NextResponse } from "next/server";
import data from "@/constants/ePujas.json";

export async function GET(req: NextRequest, { params }: any) {
  const { ePoojaSlug } = await params;

  const { ePujas } = data;

  const ePooja = ePujas.find((pooja) => pooja.slug === ePoojaSlug);

  if (!ePooja) {
    return NextResponse.json(
      { success: false, message: "Service Not found, Please try again." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "success",
    data: ePooja,
  });
}
