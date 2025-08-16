import { NextRequest, NextResponse } from "next/server";

import data from "@/constants/pandits.json";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const status = searchParams.get("status")?.toString().toLowerCase();

  const approvedPandits = data.filter((pandit) => pandit.status === status);

  return NextResponse.json({
    success: true,
    message: "success",
    data: approvedPandits,
  });
}
