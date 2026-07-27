import { connectDB } from "./mongodb";
import mongoose from "mongoose";

/** Drop every collection in the connected database. */
export async function wipeDatabase(): Promise<{ dropped: string[] }> {
  await connectDB();
  const db = mongoose.connection.db;
  if (!db) throw new Error("No database connection");

  const collections = await db.listCollections().toArray();
  const dropped: string[] = [];

  for (const col of collections) {
    await db.dropCollection(col.name);
    dropped.push(col.name);
  }

  return { dropped };
}
