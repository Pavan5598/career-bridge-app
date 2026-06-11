// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;

//   // Protect admin routes
//   if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
//     if (!token) {
//       return NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );
//     }

//     try {
//       jwt.verify(token, process.env.JWT_SECRET);
//     } catch {
//       return NextResponse.redirect(
//         new URL("/admin/login", request.url)
//       );
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/dashboard/:path*"],
// };

// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;

//   const { pathname } = request.nextUrl;

//   // =========================
//   // NO TOKEN → BLOCK ADMIN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/admin/login", request.url)
//     );
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const role = decoded.role;

//     // =========================
//     // ADMIN ROUTE PROTECTION
//     // =========================
//     if (pathname.startsWith("/admin/dashboard")) {
//       if (role !== "admin") {
//         return NextResponse.redirect(
//           new URL("/", request.url) // 👈 send user to homepage
//         );
//       }
//     }

//     return NextResponse.next();

//   } catch (err) {
//     return NextResponse.redirect(
//       new URL("/admin/login", request.url)
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;

//   // =========================
//   // PUBLIC ROUTES (ALLOW)
//   // =========================
//   const publicRoutes = ["/login", "/register"];

//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // =========================
//   // NO TOKEN → FORCE LOGIN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const role = decoded.role;

//     // =========================
//     // ADMIN ROUTES
//     // =========================
//     if (pathname.startsWith("/admin")) {
//       if (role !== "admin") {
//         return NextResponse.redirect(new URL("/", request.url));
//       }
//     }

//     // =========================
//     // USER SHOULD NOT ACCESS ADMIN
//     // =========================
//     if (pathname === "/" && role === "admin") {
//       return NextResponse.redirect(
//         new URL("/admin/dashboard", request.url)
//       );
//     }

//     return NextResponse.next();

//   } catch (err) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }


// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;

//   // =========================
//   // SKIP STATIC FILES & INTERNAL NEXT FILES
//   // =========================
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/favicon.ico") ||
//     pathname.includes(".")
//   ) {
//     return NextResponse.next();
//   }

//   // =========================
//   // PUBLIC ROUTES
//   // =========================
//   const isPublicRoute =
//     pathname.startsWith("/login") ||
//     pathname.startsWith("/register");

//   if (isPublicRoute) {
//     // If already logged in, redirect away from login/register
//     if (token) {
//       try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         if (decoded.role === "admin") {
//           return NextResponse.redirect(
//             new URL("/admin/dashboard", request.url)
//           );
//         }

//         return NextResponse.redirect(new URL("/", request.url));
//       } catch (err) {
//         // invalid token → allow login page
//         return NextResponse.next();
//       }
//     }

//     return NextResponse.next();
//   }

//   // =========================
//   // NO TOKEN → FORCE LOGIN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const role = decoded.role;

//     // =========================
//     // ADMIN ROUTES PROTECTION
//     // =========================
//     if (pathname.startsWith("/admin")) {
//       if (role !== "admin") {
//         return NextResponse.redirect(new URL("/", request.url));
//       }
//     }

//     // =========================
//     // OPTIONAL: BLOCK ADMIN FROM USER HOME
//     // (you can remove this if admin should also access user site)
//     // =========================
//     if (pathname === "/" && role === "admin") {
//       return NextResponse.redirect(
//         new URL("/admin/dashboard", request.url)
//       );
//     }

//     return NextResponse.next();
//   } catch (err) {
//     // Invalid token → force login
//     const response = NextResponse.redirect(
//       new URL("/login", request.url)
//     );

//     response.cookies.set("token", "", { expires: new Date(0) });

//     return response;
//   }
// }

// // =========================
// // MIDDLEWARE MATCHER
// // =========================
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };


// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// export async function  middleware(request) {
//   // const Cookies = await cookies();
//   const token = await request.cookies.get("token")?.value;

//   const { pathname } = request.nextUrl;
//   console.log("Token:", token);
//   if(!token){
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // =========================
//   // PUBLIC ROUTES
//   // =========================
//   const publicRoutes = ["/login", "/register"];

//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // =========================
//   // NO TOKEN → REDIRECT TO LOGIN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   let decoded;

//   try {
//     decoded = jwt.verify(token, process.env.JWT_SECRET);
//   } catch (err) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const role = decoded.role;

//   // =========================
//   // ADMIN ROUTES PROTECTION
//   // =========================
//   if (pathname.startsWith("/admin")) {
//     if (role !== "admin") {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   // =========================
//   // OPTIONAL: PREVENT ADMIN FROM STAYING ON HOME
//   // (clean UX - redirect admin to dashboard)
//   // =========================
//   if (pathname === "/" && role === "admin") {
//     return NextResponse.redirect(
//       new URL("/admin/dashboard", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// // =========================
// // APPLY MIDDLEWARE TO ALL ROUTES
// // =========================
// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|api).*)",
//   ],
// };



// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function proxy(request) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;
//   // console.log("Token:", token);

//   // =========================
//   // PUBLIC ROUTES
//   // =========================
//   const publicRoutes = ["/login", "/register"];

//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // =========================
//   // NO TOKEN → REDIRECT LOGIN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   let decoded;

//   try {
//     decoded = jwt.verify(token, process.env.JWT_SECRET);
//   } catch (err) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const role = decoded.role;

//   // =========================
//   // ADMIN ROUTES
//   // =========================
//   if (pathname.startsWith("/admin")) {
//     if (role !== "admin") {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   // =========================
//   // OPTIONAL ADMIN REDIRECT
//   // =========================
//   if (pathname === "/" && role === "admin") {
//     return NextResponse.redirect(
//       new URL("/admin/dashboard", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// // =========================
// // MATCHER
// // =========================
// export const config = {
//   matcher: ["/((?!_next|favicon.ico|api).*)"],
// };


// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(request) {
//   const token = request.cookies.get("token")?.value;
//   const { pathname } = request.nextUrl;

//   // =========================
//   // PUBLIC ROUTES
//   // =========================
//   const publicRoutes = ["/login"];

//   // =========================
//   // LOGIN PAGE HANDLING
//   // =========================
//   if (pathname === "/login") {
//     if (!token) {
//       return NextResponse.next();
//     }

//     try {
//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );

//       if (decoded.role === "admin") {
//         return NextResponse.redirect(
//           new URL("/admin/dashboard", request.url)
//         );
//       }
//     } catch (error) {
//       return NextResponse.next();
//     }

//     return NextResponse.next();
//   }

//   // =========================
//   // PUBLIC ROUTES
//   // =========================
//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // =========================
//   // TOKEN REQUIRED
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }

//   let decoded;

//   try {
//     decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );
//   } catch (error) {
//     const response = NextResponse.redirect(
//       new URL("/login", request.url)
//     );

//     response.cookies.delete("token");

//     return response;
//   }

//   // =========================
//   // ADMIN CHECK
//   // =========================
//   if (decoded.role !== "admin") {
//     const response = NextResponse.redirect(
//       new URL("/login", request.url)
//     );

//     response.cookies.delete("token");

//     return response;
//   }

//   // =========================
//   // ROOT REDIRECT
//   // =========================
//   if (pathname === "/") {
//     return NextResponse.redirect(
//       new URL("/admin/dashboard", request.url)
//     );
//   }

//   // =========================
//   // PROTECTED ADMIN ROUTES
//   // =========================
//   if (pathname.startsWith("/admin")) {
//     return NextResponse.next();
//   }

//   // =========================
//   // BLOCK EVERYTHING ELSE
//   // =========================
//   return NextResponse.redirect(
//     new URL("/admin/dashboard", request.url)
//   );
// }

// export const config = {
//   matcher: [
//     "/",
//     "/login",
//     "/admin/:path*",
//   ],
// };


// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function proxy(request) {
//   const token = request.cookies.get("token")?.value;
//   const pathname = request.nextUrl.pathname;


//   if (pathname === "/login") {
//     if (!token) return NextResponse.next();

//     try {
//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );
//       // console.log("DECODED:", decoded);

//       if (decoded.role === "admin") {
//         return NextResponse.redirect(
//           new URL("/admin/dashboard", request.url)
//         );
//       }
//     } catch (error) {
//   console.log("JWT VERIFY ERROR:", error.message);
//    }

//     return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     if (decoded.role !== "admin") {
//       return NextResponse.redirect(
//         new URL("/login", request.url)
//       );
//     }

//     return NextResponse.next();
//   } catch {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }
// }

// export const config = {
//   matcher: [
//     "/admin/:path*",
//     "/login",
//   ],
// };

// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function proxy(request) {
//   const token = request.cookies.get("token")?.value;
//   const pathname = request.nextUrl.pathname;

//   // =========================
//   // LOGIN PAGE
//   // =========================
//   if (pathname === "/login") {
//     if (!token) return NextResponse.next();

//     try {
//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );

//       if (decoded.role === "admin") {
//         return NextResponse.redirect(
//           new URL("/dashboard", request.url)
//         );
//       }

//       if (decoded.role === "user") {
//         return NextResponse.redirect(
//           new URL("/user/dashboard", request.url)
//         );
//       }
//     } catch (error) {
//       console.log("JWT ERROR:", error.message);
//     }

//     return NextResponse.next();
//   }

//   // =========================
//   // NO TOKEN
//   // =========================
//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     // =========================
//     // ADMIN ROUTES
//     // =========================
//     if (pathname.startsWith("/admin")) {
//       if (decoded.role !== "admin") {
//         return NextResponse.redirect(
//           new URL("/user/dashboard", request.url)
//         );
//       }
//     }

//     // =========================
//     // USER ROUTES
//     // =========================
//     if (pathname.startsWith("/user")) {
//       if (decoded.role !== "user") {
//         return NextResponse.redirect(
//           new URL("/dashboard", request.url)
//         );
//       }
//     }

//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }
// }

// export const config = {
//   matcher: [
//     "/login",
//     "/admin/:path*",
//     "/user/:path*",
//   ],
// };

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {
const token =
request.cookies.get("token")?.value;

const pathname =
request.nextUrl.pathname;

// =========================
// LOGIN PAGE
// =========================
if (pathname === "/login") {
if (!token) {
return NextResponse.next();
}


try {
  jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  return NextResponse.redirect(
    new URL(
      "/dashboard",
      request.url
    )
  );
} catch (error) {
  console.log(
    "JWT ERROR:",
    error.message
  );
}

return NextResponse.next();


}

// =========================
// PROTECTED ROUTES
// =========================
if (!token) {
return NextResponse.redirect(
new URL("/login", request.url)
);
}

try {
jwt.verify(
token,
process.env.JWT_SECRET
);


return NextResponse.next();


} catch (error) {
return NextResponse.redirect(
new URL("/login", request.url)
);
}
}

export const config = {
matcher: [
"/login",
"/dashboard/:path*",
],
};
