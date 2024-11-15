import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Post triggered", body);
    return NextResponse.json(
      {
        success: true,
        message: "Success!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process POST request",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Add logic for GET request
    return NextResponse.json(
      {
        success: true,
        message: "GET request successful!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing GET request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process GET request",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(req) {
  const allowedMethods = ["POST", "GET"];
  const requestMethod = req.method;

  if (!allowedMethods.includes(requestMethod)) {
    return NextResponse.json(
      {
        success: false,
        error: `Method ${requestMethod} Not Allowed`,
      },
      {
        status: 405,
        headers: {
          Allow: allowedMethods.join(", "),
        },
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Options request successful!",
    },
    {
      status: 200,
      headers: {
        Allow: allowedMethods.join(", "),
      },
    }
  );
}
