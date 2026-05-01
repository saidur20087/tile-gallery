import { NextResponse } from "next/server";

export async function middleware(request) {

  const sessionResponse = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
    headers: {
      
      cookie: request.headers.get("cookie") || "",
    },
  });

  const session = await sessionResponse.json();

  const { nextUrl } = request;
  
  
  const isLoggedIn = session && (session.user || session.session);

  
  const isPrivateRoute = 
    nextUrl.pathname.startsWith('/my-profile');
    
   


  if (isPrivateRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};