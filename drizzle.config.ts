import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://postgres:amulya@localhost:5432/mrng',
    ssl:false,
  }
});
