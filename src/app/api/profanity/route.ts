// src/app/api/profanity/route.ts

import { NextRequest, NextResponse } from "next/server";
import { checkProfanity } from "@/lib/profanityFilter";
import { ProfanitySettings } from "@/types/settings";

export async function POST(req: NextRequest) {
  try {
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
