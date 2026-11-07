import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { db } from './db'
import { usersTable } from './db/schema'

const app = new Hono()
  .basePath('/api')
  .get('/hello', (c) => c.json({ message: 'Hello from Hono' }))
  .get('/users', async (c) => {
    const users = await db.select().from(usersTable)
    return c.json(users)
  })
  .post(
    '/users',
    zValidator(
      'json',
      z.object({
        name: z.string().min(1),
        age: z.number().int().positive(),
        email: z.string().email(),
      })
    ),
    async (c) => {
      const body = c.req.valid('json')
      const [user] = await db.insert(usersTable).values(body).returning()
      return c.json(user, 201)
    }
  )

export default app
export type AppType = typeof app