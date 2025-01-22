// src/app/api/integration/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    date: {
      created_at: "2025-01-21",
      updated_at: "2025-01-21",
    },
    descriptions: {
      app_description: "Detects and tracks profane words in all messages.",
      app_logo:
        "https://res.cloudinary.com/devsource/image/upload/v1737510989/pngtree-no-cursing-sign-png-image_6610915_meqkww.png",
      app_name: "Profanity Checker",
      app_url: "https://profanity-checker-omega.vercel.app/api/integration/",
      background_color: "#ffffff",
    },
    is_active: false,
    key_features: [
      "Monitor and filter out offensive language from messages in real-time.",
      "Notify admins when offensive language is detected.",
      "Allow customization of the profanity list and sensitivity settings.",
      "Integrate with chat platforms like Slack and Teams for seamless filtering.",
    ],
    permissions: {
      events: [
        "Monitor and filter out offensive language from messages in real-time.",
        "Notify admins when offensive language is detected.",
        "Allow customization of the profanity list and sensitivity settings.",
        "Integrate with chat platforms like Slack and Teams for seamless filtering.",
      ],
    },
    author: "Layobright Company",
    website: "https://profanity-checkers.vercel.app",
    settings: [
      {
        label: "customProfaneWords",
        type: "multi-select",
        description: "Select custom profane words to track.",
        required: true,
        default: "fuck, dick, ass, fuck-off",
      },
      {
        label: "sensitivity",
        type: "number",
        description: "Adjust profanity detection sensitivity (1-5).",
        default: 3,
      },
      {
        label: "maskingStyle",
        type: "dropdown",
        options: ["asterisks", "dashes", "partial"],
        description: "Choose how to mask detected profane words.",
        default: "partial",
        required: true,
      },
      {
        label: "actionOnDetection",
        type: "dropdown",
        options: ["flag", "block", "replace"],
        description: "Decide how to handle detected messages.",
        default: "flag",
        required: true,
      },
      {
        label: "notificationOnDetection",
        type: "checkbox",
        description: "Notify admins when a profane message is detected.",
        default: "No",
        required: true,
      },
      {
        label: "maxProfanityCount",
        type: "number",
        description: "Set the maximum allowed profane words per message.",
        default: 3,
        required: true,
      },
    ],
  });
}
