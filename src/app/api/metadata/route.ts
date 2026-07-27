import { NextRequest, NextResponse } from "next/server";
import { isAdminFromRequest } from "@/lib/auth";
import { fetchSiteMetadata } from "@/lib/metadata";
import { z } from "zod";

export const dynamic = "force-dynamic";

const schema = z.object({
  url: z.string().url(),
});

export async function POST(request: NextRequest) {
  try {
    if (!(await isAdminFromRequest(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const meta = await fetchSiteMetadata(parsed.data.url);
    return NextResponse.json({ metadata: meta });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch metadata";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
