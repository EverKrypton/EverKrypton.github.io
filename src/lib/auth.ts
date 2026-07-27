import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const COOKIE_NAME = "ek_master_session";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  const secret = process.env.JWT_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("Missing JWT_SECRET or ADMIN_PASSWORD");
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE_NAME)?.value);
}

export async function isAdminFromRequest(
  request: NextRequest
): Promise<boolean> {
  return verifySessionToken(request.cookies.get(COOKIE_NAME)?.value);
}

export function sessionCookieOptions(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: MAX_AGE,
  };
}

export function clearSessionCookieOptions() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 0,
  };
}

export function checkAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "master";
  if (!password || password.length > 256) return false;
  // Constant-time-ish compare for simple passwords
  if (password.length !== expected.length) {
    // still run a compare to avoid leaking length easily
    let mismatch = 0;
    for (let i = 0; i < password.length; i++) {
      mismatch |= password.charCodeAt(i) ^ expected.charCodeAt(i % expected.length);
    }
    return false;
  }
  let result = 0;
  for (let i = 0; i < expected.length; i++) {
    result |= password.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return result === 0;
}

export { COOKIE_NAME };
