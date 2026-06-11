import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();

    const { userId, permissions } = await req.json();

    if (!Array.isArray(permissions)) {
      return NextResponse.json(
        {
          success: false,
          message: "Permissions must be an array",
        },
        {
          status: 400,
        },
      );
    }

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID required",
        },
        {
          status: 400,
        },
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        permissions,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Permissions updated successfully",
      user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
