import { NextResponse } from "next/server";
import { clearSessionCookieOptions } from "@/lib/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  const opts = clearSessionCookieOptions();
  res.cookies.set(opts);
  return res;
}
