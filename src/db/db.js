import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import pg from "pg";

export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool);
