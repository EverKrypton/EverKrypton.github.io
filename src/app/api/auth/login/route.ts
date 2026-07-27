import { NextRequest, NextResponse } from "next/server";
import {
  checkAdminPassword,
  createSessionToken,
  sessionCookieOptions,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = String(body?.password || "");

    if (!checkAdminPassword(password)) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await createSessionToken();
    const res = NextResponse.json({ ok: true });
    const opts = sessionCookieOptions(token);
    res.cookies.set(opts);
    return res;
  } catch {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
