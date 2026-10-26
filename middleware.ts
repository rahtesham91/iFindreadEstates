import { NextResponse, type NextRequest } from "next/server";

// English pages live at /<path> (served from app/[lang] as "en"); Arabic pages at /ar/<path>.
const PRIMARY_HOST = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifindrealestates.com").host;
// Hosts that must 301 to the primary domain so Google only indexes one address.
const REDIRECT_HOSTS = new Set([
  "ifindrealestate.vercel.app",
  "ifindrealestates.com",
  "www.ifindrealestates.com",
]);
REDIRECT_HOSTS.delete(PRIMARY_HOST);

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase();
  if (REDIRECT_HOSTS.has(host)) {
    const to = new URL(req.nextUrl.pathname + req.nextUrl.search, `https://${PRIMARY_HOST}`);
    return NextResponse.redirect(to, 301);
  }
  // Any other address (Vercel preview/branch URLs, etc.) stays usable but is kept out of Google.
  const offPrimary = host !== PRIMARY_HOST && !host.startsWith("localhost");
  const { pathname } = req.nextUrl;
  let res: NextResponse;
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    res = NextResponse.next();
  } else {
    const url = req.nextUrl.clone();
    url.pathname = `/en${pathname === "/" ? "" : pathname}`;
    res = NextResponse.rewrite(url);
  }
  if (offPrimary) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  // skip Next internals, API routes and anything that is a file (has an extension)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
