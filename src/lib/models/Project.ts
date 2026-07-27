import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "", trim: true },
    url: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    siteName: { type: String, default: "" },
    favicon: { type: String, default: "" },
    tags: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type ProjectDocument = InferSchemaType<typeof ProjectSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProjectJSON = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  siteName: string;
  favicon: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export function toProjectJSON(doc: ProjectDocument): ProjectJSON {
  return {
    id: String(doc._id),
    title: doc.title,
    description: doc.description || "",
    url: doc.url,
    image: doc.image || "",
    siteName: doc.siteName || "",
    favicon: doc.favicon || "",
    tags: doc.tags || [],
    featured: Boolean(doc.featured),
    order: doc.order ?? 0,
    createdAt: doc.createdAt
      ? new Date(doc.createdAt as Date).toISOString()
      : new Date().toISOString(),
    updatedAt: doc.updatedAt
      ? new Date(doc.updatedAt as Date).toISOString()
      : new Date().toISOString(),
  };
}

export const Project: Model<ProjectDocument> =
  (mongoose.models.Project as Model<ProjectDocument>) ||
  mongoose.model<ProjectDocument>("Project", ProjectSchema);
