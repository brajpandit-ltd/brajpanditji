import { NextResponse } from "next/server";

export const ApiResponse = <T>(
  success: boolean,
  message: string,
  data: T,
  status: number
) => {
  return NextResponse.json({ success, message, data }, { status });
};
