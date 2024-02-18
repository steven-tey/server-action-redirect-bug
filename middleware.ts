import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  // if there's a `pw` query parameter, redirect to https://dub.co
  if (req.nextUrl.searchParams.has("pw")) {
    return NextResponse.redirect("https://dub.co");
  }

  return NextResponse.next();
}
