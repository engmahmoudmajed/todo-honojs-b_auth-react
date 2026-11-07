import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const db = drizzle({ client: pool })

export async function checkDb() {
  try {
    await pool.query('SELECT 1')
    console.log('✅ Database connected')
    return true
  } catch (err) {
    console.error('❌ Database connection failed:', (err as Error).message)
    return false
  }
}