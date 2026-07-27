import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project, toProjectJSON } from "@/lib/models/Project";
import { isAdminFromRequest } from "@/lib/auth";
import { fetchSiteMetadata } from "@/lib/metadata";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find()
      .sort({ order: 1, createdAt: -1 })
      .lean();
    return NextResponse.json({
      projects: projects.map((p) =>
        toProjectJSON(p as unknown as Parameters<typeof toProjectJSON>[0])
      ),
    });
  } catch (err) {
    console.error("GET /api/projects", err);
    return NextResponse.json(
      { error: "Failed to load projects", projects: [] },
      { status: 500 }
    );
  }
}

const createSchema = z.object({
  url: z.string().url(),
  title: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  image: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    if (!(await isAdminFromRequest(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const parsed = createSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { url, title, description, tags, featured, image } = parsed.data;

    let meta;
    try {
      meta = await fetchSiteMetadata(url);
    } catch (e) {
      meta = {
        title: new URL(url).hostname,
        description: "",
        image: "",
        siteName: new URL(url).hostname,
        favicon: "",
        url,
      };
      console.warn("Metadata fetch failed:", e);
    }

    await connectDB();
    const count = await Project.countDocuments();

    const project = await Project.create({
      title: (title || meta.title || "Untitled").slice(0, 200),
      description: (description || meta.description || "").slice(0, 500),
      url: meta.url || url,
      image: image || meta.image || "",
      siteName: meta.siteName || "",
      favicon: meta.favicon || "",
      tags: tags || [],
      featured: featured ?? false,
      order: count,
    });

    return NextResponse.json(
      { project: toProjectJSON(project) },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/projects", err);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
