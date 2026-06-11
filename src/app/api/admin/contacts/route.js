import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}