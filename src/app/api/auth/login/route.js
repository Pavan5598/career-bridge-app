// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return Response.json(
//         {
//           success: false,
//           message: "Email and Password are required",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       email !== process.env.ADMIN_EMAIL ||
//       password !== process.env.ADMIN_PASSWORD
//     ) {
//       return Response.json(
//         {
//           success: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
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

//     const response = Response.json({
//       success: true,
//       message: "Login successful",
//     });

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//       path: "/",
//     });

//     return response;
//   } catch (error) {
//     console.error("Login Error:", error);

//     return Response.json(
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

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email and Password are required",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       email !== process.env.ADMIN_EMAIL ||
//       password !== process.env.ADMIN_PASSWORD
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
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

//     const response = NextResponse.json({
//       success: true,
//       message: "Login successful",
//     });

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       path: "/",
//       maxAge: 60 * 60 * 24 * 7,
//     });

//     return response;
//   } catch (error) {
//     console.error("Login Error:", error);

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
// import { connectDB } from "@/lib/mongodb";
// import Otp from "@/models/Otp";

// import { sendEmail } from "@/lib/mailer";

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email and Password are required",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       email !== process.env.ADMIN_EMAIL ||
//       password !== process.env.ADMIN_PASSWORD
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Invalid email or password",
//         },
//         { status: 401 }
//       );
//     }

//     await connectDB();

//     const otp = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     await Otp.findOneAndUpdate(
//       { email },
//       {
//         otp,
//         expiresAt: new Date(
//           Date.now() + 5 * 60 * 1000
//         ),
//       },
//       {
//         upsert: true,
//       }
//     );

//     await sendEmail({
//       to: email,
//       subject: "Admin Login OTP",
//       html: `
//         <div>
//           <h2>Admin Verification</h2>

//           <p>Your OTP is:</p>

//           <h1>${otp}</h1>

//           <p>
//             This OTP will expire in 5 minutes.
//           </p>
//         </div>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       otpRequired: true,
//       email,
//       message: "OTP sent successfully",
//     });
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

// import { connectDB } from "@/lib/mongodb";
// import User from "@/models/User";
// import Otp from "@/models/Otp";
// import bcrypt from "bcryptjs";
// import { sendEmail } from "@/lib/mailer";

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return Response.json({
//         success: false,
//         message: "Email & Password required",
//       }, { status: 400 });
//     }

//     let role;

//     // =========================
//     // 👨‍💼 ADMIN CHECK
//     // =========================
//     if (email === process.env.ADMIN_EMAIL) {
//       if (password !== process.env.ADMIN_PASSWORD) {
//         return Response.json({
//           success: false,
//           message: "Invalid admin credentials",
//         }, { status: 401 });
//       }

//       role = "admin";
//     }

//     // =========================
//     // 👤 USER CHECK (MONGO DB)
//     // =========================
//     else {
//       await connectDB();

//       const user = await User.findOne({ email });

//       if (!user) {
//         return Response.json({
//           success: false,
//           message: "User not found",
//         }, { status: 400 });
//       }

//       const match = await bcrypt.compare(password, user.password);

//       if (!match) {
//         return Response.json({
//           success: false,
//           message: "Invalid credentials",
//         }, { status: 401 });
//       }

//       role = "user";
//     }

//     // =========================
//     // 🔐 OTP FOR BOTH
//     // =========================
//     await connectDB();

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     await Otp.findOneAndUpdate(
//       { email },
//       {
//         email,
//         otp,
//         role,
//         expiresAt: new Date(Date.now() + 5 * 60 * 1000),
//       },
//       { upsert: true }
//     );

//     await sendEmail({
//       to: email,
//       subject: "OTP Verification",
//       html: `<h1>Your OTP is ${otp}</h1>`,
//     });

//     return Response.json({
//       success: true,
//       otpRequired: true,
//       email,
//       role,
//       message: "OTP sent successfully",
//     });

//   } catch (err) {
//     console.error(err);

//     return Response.json({
//       success: false,
//       message: "Server error",
//     }, { status: 500 });
//   }
// }


// import { connectDB } from "@/lib/mongodb";
// import Otp from "@/models/Otp";
// import { sendEmail } from "@/lib/mailer";

// export async function POST(req) {
//   try {
//     const { email } = await req.json();

//     if (!email) {
//       return Response.json(
//         {
//           success: false,
//           message: "Email is required",
//         },
//         { status: 400 }
//       );
//     }

//     // Allow only admin email
//     if (email !== process.env.ADMIN_EMAIL) {
//       return Response.json(
//         {
//           success: false,
//           message: "Unauthorized email",
//         },
//         { status: 401 }
//       );
//     }

//     await connectDB();

//     const otp = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     await Otp.findOneAndUpdate(
//       { email },
//       {
//         email,
//         otp,
//         role: "admin",
//         expiresAt: new Date(Date.now() + 5 * 60 * 1000),
//       },
//       {
//         upsert: true,
//         new: true,
//       }
//     );

//     await sendEmail({
//       to: email,
//       subject: "Admin Login OTP",
//       html: `<h2>Your OTP is: ${otp}</h2>`,
//     });

//     return Response.json({
//       success: true,
//       message: "OTP sent successfully",
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json(
//       {
//         success: false,
//         message: "Server error",
//       },
//       { status: 500 }
//     );
//   }
// }


// import { connectDB } from "@/lib/mongodb";
// import Otp from "@/models/Otp";
// import { sendEmail } from "@/lib/mailer";

// export async function POST(req) {
//   try {
//     const { email } = await req.json();

//     if (!email) {
//       return Response.json(
//         {
//           success: false,
//           message: "Email is required",
//         },
//         { status: 400 }
//       );
//     }

//     if (
//       email.trim().toLowerCase() !==
//       process.env.ADMIN_EMAIL.trim().toLowerCase()
//     ) {
//       return Response.json(
//         {
//           success: false,
//           message: "Unauthorized Email",
//         },
//         { status: 401 }
//       );
//     }

//     await connectDB();

//     const otp = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     await Otp.findOneAndUpdate(
//       { email },
//       {
//         email,
//         otp,
//         role: "admin",
//         expiresAt: new Date(Date.now() + 5 * 60 * 1000),
//       },
//       {
//         upsert: true,
//         new: true,
//       }
//     );

//     await sendEmail({
//       to: email,
//       subject: "Admin Login OTP",
//       html: `
//         <h2>Admin Login</h2>
//         <h1>${otp}</h1>
//         <p>Valid for 5 minutes.</p>
//       `,
//     });

//     return Response.json({
//       success: true,
//       message: "OTP Sent Successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message: "Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Otp from "@/models/Otp";
import { sendEmail } from "@/lib/mailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    await connectDB();

    let role;

    // =========================
    // ADMIN CHECK
    // =========================
    if (
      email.trim().toLowerCase() ===
      process.env.ADMIN_EMAIL.trim().toLowerCase()
    ) {
      role = "admin";
    }

    // =========================
    // USER CHECK
    // =========================
    else {
      const user = await User.findOne({
        email: email.trim().toLowerCase(),
      });

      if (!user) {
        return Response.json(
          {
            success: false,
            message: "User not found",
          },
          { status: 404 }
        );
      }

      role = "user";
    }

    // =========================
    // GENERATE OTP
    // =========================
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // =========================
    // SAVE OTP
    // =========================
    await Otp.findOneAndUpdate(
      { email },
      {
        email,
        otp,
        role,
        expiresAt: new Date(
          Date.now() + 5 * 60 * 1000
        ),
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );

    // =========================
    // SEND EMAIL
    // =========================
    await sendEmail({
      to: email,
      subject: `${role === "admin" ? "Admin" : "User"} Login OTP`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>${role.toUpperCase()} Login</h2>
          <p>Your OTP is:</p>
          <h1 style="letter-spacing: 4px;">${otp}</h1>
          <p>This OTP is valid for 5 minutes.</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      role,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
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