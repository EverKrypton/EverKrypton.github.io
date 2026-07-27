import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project, toProjectJSON } from "@/lib/models/Project";
import { isAdminFromRequest } from "@/lib/auth";
import { z } from "zod";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(request: NextRequest, context: Ctx) {
  try {
    if (!(await isAdminFromRequest(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    await connectDB();
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/projects/[id]", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

const updateSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  description: z.string().max(500).optional(),
  url: z.string().url().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
});

export async function PATCH(request: NextRequest, context: Ctx) {
  try {
    if (!(await isAdminFromRequest(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const body = await request.json();
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await connectDB();
    const project = await Project.findByIdAndUpdate(
      id,
      { $set: parsed.data },
      { new: true }
    );

    if (!project) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ project: toProjectJSON(project) });
  } catch (err) {
    console.error("PATCH /api/projects/[id]", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
