import { NextResponse, type NextRequest } from "next/server";

// English pages live at /<path> (served from app/[lang] as "en"); Arabic pages at /ar/<path>.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // skip Next internals, API routes and anything that is a file (has an extension)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
