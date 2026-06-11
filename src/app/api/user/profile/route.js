// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";

// export async function GET() {
//   try {
//     const cookieStore = await cookies();

//     const token = cookieStore.get("token")?.value;

//     if (!token) {
//       return NextResponse.json(
//         {
//           success: false,
//         },
//         { status: 401 }
//       );
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     await connectDB();

//     if (
//   decoded.email ===
//   process.env.ADMIN_EMAIL
// ) {
//   return NextResponse.json({
//     success: true,
//     user: {
//       email: decoded.email,
//       role: "Admin",
//       permissions: [
//         "dashboard",
//         "users",
//         "courses",
//         "enquiries",
//         "students",
//         "reports",
//         "settings",
//         "rbac",
//       ],
//     },
//   });
// }

//     return NextResponse.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//       },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

const ADMIN_PERMISSIONS = [
  "dashboard",
  "users",
  "courses",
  "enquiries",
  "students",
  "reports",
  "settings",
  "rbac",
];

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    await connectDB();

    // =========================
    // ADMIN PROFILE
    // =========================
    if (
      decoded.email
        ?.trim()
        .toLowerCase() ===
      process.env.ADMIN_EMAIL
        ?.trim()
        .toLowerCase()
    ) {
      return NextResponse.json({
        success: true,
        user: {
          email: decoded.email,
          role: "Admin",
          permissions:
            ADMIN_PERMISSIONS,
        },
      });
    }

    // =========================
    // NORMAL USER PROFILE
    // =========================
    const user =
      await User.findOne({
        email: decoded.email
          ?.trim()
          .toLowerCase(),
      }).lean();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        permissions:
          user.permissions || [],
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}