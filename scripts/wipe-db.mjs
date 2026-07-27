/**
 * Wipe all collections in the portfolio MongoDB database.
 * Usage: node --env-file=.env.local scripts/wipe-db.mjs
 *    or: MONGODB_URI=... node scripts/wipe-db.mjs
 */
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "everkrypton_portfolio";

if (!uri) {
  console.error("MONGODB_URI is required");
  process.exit(1);
}

async function main() {
  console.log("Connecting…");
  await mongoose.connect(uri, { dbName });
  const db = mongoose.connection.db;
  if (!db) throw new Error("No db");

  const collections = await db.listCollections().toArray();
  console.log(
    `Found ${collections.length} collection(s) in ${dbName}:`,
    collections.map((c) => c.name).join(", ") || "(none)"
  );

  for (const col of collections) {
    await db.dropCollection(col.name);
    console.log(`Dropped: ${col.name}`);
  }

  // Also list other dbs on cluster briefly for visibility (no drop of other dbs)
  try {
    const admin = db.admin();
    const { databases } = await admin.listDatabases();
    console.log(
      "Cluster databases:",
      databases.map((d) => d.name).join(", ")
    );
  } catch {
    // free tier may restrict listDatabases
  }

  await mongoose.disconnect();
  console.log("Done. Database cleaned.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
