import {drizzle} from 'drizzle-orm/node-postgres';
import {Pool} from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://postgres:amulya@localhost:5432/mrng'
});

export const db = drizzle(pool);
