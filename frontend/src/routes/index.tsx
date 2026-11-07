import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })
import type { AppType } from '../../../backend/src/app'
import { hc } from 'hono/client'
const client = hc<AppType>('/')




function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  )
}
