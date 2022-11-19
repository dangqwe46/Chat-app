import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const cookie_session = request.cookies.get("next-auth.session-token");

  if (url.pathname === "/" && !cookie_session) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/login" && cookie_session) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};
