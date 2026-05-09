import { NextResponse } from "next/server";

const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    if (!apiKey || !listId) {
      return NextResponse.json(
        { message: "Newsletter is not configured yet." },
        { status: 500 }
      );
    }

    const brevoResponse = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || "",
          SOURCE: "Elite Auto Detailing Website",
        },
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });

    const data = await brevoResponse.json().catch(() => null);

    if (!brevoResponse.ok) {
      return NextResponse.json(
        {
          message:
            data?.message ||
            "Could not subscribe at the moment. Please try again.",
        },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({
      message: "You’re on the Elite list.",
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
