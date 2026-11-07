import app from './app'
import { checkDb } from './db'

const port = Number(process.env.PORT) || 3000

await checkDb()
console.log(`🚀 Server running on http://localhost:${port}`)

export default { port, fetch: app.fetch }