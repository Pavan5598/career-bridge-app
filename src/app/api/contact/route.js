// import { sendEmail } from "@/lib/mailer";
// import {
//   adminTemplate,
//   userTemplate,
// } from "@/lib/emailTemplates";

// export async function POST(req) {
//   try {
//     const { name, email, course, message } =
//       await req.json();

//     await sendEmail({
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Course Inquiry",
//       html: adminTemplate({
//         name,
//         email,
//         course,
//         message,
//       }),
//     });

//     await sendEmail({
//       to: email,
//       subject: "Thank You For Contacting Us",
//       html: userTemplate({
//         name,
//         course,
//       }),
//     });

//     return Response.json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json(
//       {
//         success: false,
//         message: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// import { connectDB } from "@/lib/mongodb";
// import Contact from "@/models/Contact";

// import { sendEmail } from "@/lib/mailer";
// import {
//   adminTemplate,
//   userTemplate,
// } from "@/lib/emailTemplates";

// export async function POST(req) {
//   try {
//     const { name, email, course, message } =
//       await req.json();

//     // Connect MongoDB
//     await connectDB();

//     // Save Form Data
//     await Contact.create({
//       name,
//       email,
//       course,
//       message,
//     });

//     // Send Emails
//     await Promise.all([
//       sendEmail({
//         to: process.env.ADMIN_EMAIL,
//         subject: "New Course Inquiry",
//         html: adminTemplate({
//           name,
//           email,
//           course,
//           message,
//         }),
//       }),

//       sendEmail({
//         to: email,
//         subject: `Your ${course} Enquiry Has Been Received`,
//         html: userTemplate({
//           name,
//           course,
//         }),
//       }),
//     ]);

//     return Response.json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json(
//       {
//         success: false,
//         message: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendEmail } from "@/lib/mailer";
import {
  adminTemplate,
  userTemplate,
} from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { name, email, course, message } = await req.json();

    // ✅ VALIDATION
    if (!name || !email || !course || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // DB CONNECT
    await connectDB();

    // SAVE TO DB
    const savedContact = await Contact.create({
      name,
      email,
      course,
      message,
    });

    // 🚀 EMAILS (NON-BLOCKING - IMPROVED SAFETY)
    (async () => {
      try {
        await Promise.all([
          sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: "New Course Inquiry",
            html: adminTemplate({
              name,
              email,
              course,
              message,
            }),
          }),

          sendEmail({
            to: email,
            subject: `Your ${course} Enquiry Has Been Received`,
            html: userTemplate({
              name,
              course,
            }),
          }),
        ]);
      } catch (emailErr) {
        console.error("Email sending failed:", emailErr);
      }
    })();

    // ✅ RESPONSE (ENHANCED FOR ADMIN DASHBOARD)
    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",

      // 👇 IMPORTANT FOR ADMIN PANEL
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        course: savedContact.course,
        message: savedContact.message,
        createdAt: savedContact.createdAt,
      },
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Server error",
      },
      { status: 500 }
    );
  }
}