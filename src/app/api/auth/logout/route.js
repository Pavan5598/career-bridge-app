// export async function POST() {
//   const response = Response.json({
//     success: true,
//     message: "Logged out successfully",
//   });

//   response.cookies.set("token", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     expires: new Date(0),
//     path: "/",
//   });

//   return response;
// }

import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/", // ✅ MUST BE SAME AS LOGIN COOKIE
    expires: new Date(0),
  });

  return response;
}