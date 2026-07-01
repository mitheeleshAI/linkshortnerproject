import { Pool } from '@neondatabase/serverless'

type LinkRow = {
    id: string
    title?: string | null
    original_url: string
    short_id?: string | null
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export async function getUserLinks(userId: string): Promise<LinkRow[]> {
    if (!process.env.DATABASE_URL) return []

    const sql = `
    SELECT id, title, original_url, short_id
    FROM links
    WHERE user_id = $1
    ORDER BY created_at DESC
  `

    const res = await pool.query(sql, [userId])
    return res.rows as LinkRow[]
}
