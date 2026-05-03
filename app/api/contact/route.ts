import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";

// Simple in-memory rate limiting (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip") || "unknown";
  return ip;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per hour)
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour
    });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "3600" } }
      );
    }

    // Parse request body
    const data = await request.json();

    // Validate form data
    const validation = validateContactForm(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Log submission (in production, save to database)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ip: clientIp,
      userAgent: request.headers.get("user-agent"),
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        // Don't log full message for privacy
      },
    });

    // In production, send email here using Resend or SendGrid
    // For now, just return success
    console.log("Email would be sent to:", process.env.CONTACT_EMAIL);

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
