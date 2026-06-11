import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
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

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      phone,
      role,
      permissions,
    } = body;

    if (!name || !email || !role) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, Email and Role are required",
        },
        {
          status: 400,
        }
      );
    }

    if (
      email.toLowerCase() ===
      process.env.ADMIN_EMAIL.toLowerCase()
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This email is reserved for Admin",
        },
        {
          status: 400,
        }
      );
    }

    if (
      permissions &&
      !Array.isArray(permissions)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Permissions must be an array",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await User.findOne({
        email: email.toLowerCase(),
      });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message:
            "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || "",
      role,
      permissions:
        permissions || [],
    });

    return NextResponse.json({
      success: true,
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
      }
    );
  }
}