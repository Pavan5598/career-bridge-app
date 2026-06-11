// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// import { connectDB } from "@/lib/mongodb";
// import Otp from "@/models/Otp";

// export async function POST(req) {
//   try {
//     const { email, otp } = await req.json();

//     await connectDB();

//     const otpRecord = await Otp.findOne({
//       email,
//     });

//     if (!otpRecord) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "OTP not found",
//         },
//         { status: 400 }
//       );
//     }

//     if (otpRecord.otp !== otp) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid OTP",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       new Date() > otpRecord.expiresAt
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "OTP expired",
//         },
//         { status: 400 }
//       );
//     }

//     const token = jwt.sign(
//       {
//         email,
//         role: "admin",
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     const response =
//       NextResponse.json({
//         success: true,
//         message: "Login successful",
//       });

//     response.cookies.set(
//       "token",
//       token,
//       {
//         httpOnly: true,
//         secure:
//           process.env.NODE_ENV ===
//           "production",
//         sameSite: "strict",
//         path: "/",
//         maxAge:
//           60 * 60 * 24 * 7,
//       }
//     );

//     await Otp.deleteOne({
//       email,
//     });

//     return response;
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal Server Error",
//       },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";
// import { connectDB } from "@/lib/mongodb";
// import Otp from "@/models/Otp";

// export async function POST(req) {
//   try {
//     const { email, otp } = await req.json();

//     await connectDB();

//     const otpRecord = await Otp.findOne({ email });

//     if (!otpRecord) {
//       return NextResponse.json(
//         { success: false, message: "OTP not found" },
//         { status: 400 }
//       );
//     }

//     if (otpRecord.otp !== otp) {
//       return NextResponse.json(
//         { success: false, message: "Invalid OTP" },
//         { status: 400 }
//       );
//     }

//     if (new Date() > otpRecord.expiresAt) {
//       return NextResponse.json(
//         { success: false, message: "OTP expired" },
//         { status: 400 }
//       );
//     }

//     // ✅ FIXED ROLE USAGE
//     const token = jwt.sign(
//       {
//         email,
//         role: otpRecord.role, // 🔥 IMPORTANT FIX
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       }
//     );

//     const response = NextResponse.json({
//       success: true,
//       message: "Login successful",
//       role: otpRecord.role, // 👈 IMPORTANT FOR FRONTEND REDIRECT
//     });

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       path: "/",
//       maxAge: 60 * 60 * 24 * 7,
//     });

//     await Otp.deleteOne({ email });

//     return response;
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { success: false, message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// const token = jwt.sign(
//   {
//     email: process.env.ADMIN_EMAIL,
//     role: "admin",
//   },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "7d",
//   }
// );

// const response = NextResponse.json({
//   success: true,
//   role: "admin",
// });

// response.cookies.set("token", token, {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "strict",
//   maxAge: 60 * 60 * 24 * 7,
//   path: "/",
// });

// return response;

import { connectDB } from "@/lib/mongodb";
import Otp from "@/models/Otp";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    await connectDB();

    const otpRecord = await Otp.findOne({ email });

    if (!otpRecord) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP not found",
        },
        { status: 400 }
      );
    }

    if (otpRecord.otp !== otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP",
        },
        { status: 400 }
      );
    }

    if (new Date() > otpRecord.expiresAt) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP Expired",
        },
        { status: 400 }
      );
    }

   

    let permissions = [];

if (otpRecord.role === "admin") {
  permissions = [
    "dashboard",
    "users",
    "courses",
    "enquiries",
    "students",
    "reports",
    "settings",
    "rbac",
  ];
} else {
  const user = await User.findOne({
    email,
  });

  permissions =
    user?.permissions || [];
}

const token = jwt.sign(
  {
    email,
    role: otpRecord.role,
    permissions,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

await Otp.deleteOne({ email });

const response = NextResponse.json({
  success: true,
  role: otpRecord.role,
  permissions,
});

response.cookies.set("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
});

return response;
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