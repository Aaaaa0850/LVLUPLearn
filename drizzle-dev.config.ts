import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.DEV_DB_HOST!,
    user: process.env.DEV_DB_USERNAME!,
    password: process.env.DEV_DB_PASSWORD!,
    database: process.env.DEV_DB_DATABASE!,
    ssl: { rejectUnauthorized: true }
  },
});
