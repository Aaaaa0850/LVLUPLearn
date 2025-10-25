import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const pool = mysql.createPool({
	host: process.env.DB_HOST!,
  user: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  ssl: { rejectUnauthorized: true }
});

export const db = drizzle(pool, { schema: schema, mode: "default"});
export * from "./schema";
