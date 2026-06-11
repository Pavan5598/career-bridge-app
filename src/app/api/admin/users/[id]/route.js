// import { NextResponse } from "next/server";
// import User from "@/models/User";
// import { connectDB } from "@/lib/mongodb";

// export async function PUT(
//   req,
//   { params }
// ) {
//   try {
//     await connectDB();

//     const body = await req.json();

//     const user =
//       await User.findByIdAndUpdate(
//         params.id,
//         body,
//         {
//           new: true,
//           runValidators: true,
//         }
//       );

//     if (!user) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "User not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     return NextResponse.json(
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

// export async function DELETE(
//   req,
//   { params }
// ) {
//   try {
//     await connectDB();

//     const user =
//       await User.findById(params.id);

//     if (!user) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "User not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     if (
//       user.email ===
//       process.env.ADMIN_EMAIL
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message:
//             "Admin cannot be deleted",
//         },
//         {
//           status: 403,
//         }
//       );
//     }

//     await User.findByIdAndDelete(
//       params.id
//     );

//     return NextResponse.json({
//       success: true,
//     });
//   } catch (error) {
//     return NextResponse.json(
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
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function PUT(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const body = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      body,
      {
        returnDocument: "after",
      }
    );

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
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const user = await User.findById(id);

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

    await User.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}