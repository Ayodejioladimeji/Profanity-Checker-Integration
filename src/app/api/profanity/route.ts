// src/app/api/profanity/route.ts

/* eslint-disable */

import { NextRequest, NextResponse } from "next/server";
import { checkProfanity } from "@/lib/profanityFilter";
import { ProfanitySettings } from "@/types/settings";
import Cors from "cors";

Cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://telex.im",
    "https://staging.telex.im",
    "https://telex-auth.vercel.app",
    "https://profanity-checker-omega.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

/* eslint-disable */

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // await runMiddleware(req, res, cors);

    const { text, settings }: { text: string; settings: ProfanitySettings } =
      await req.json();

    if (!text || !settings) {
      return NextResponse.json(
        { error: "Text and settings are required" },
        { status: 400 }
      );
    }

    // Process profanity check
    const { containsProfanity, modifiedText } = checkProfanity(text, settings);

    return NextResponse.json({
      originalText: text,
      modifiedText,
      containsProfanity,
      action: settings.actionOnDetection,
      message: containsProfanity
        ? "Profane words detected."
        : "No profanity detected.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
