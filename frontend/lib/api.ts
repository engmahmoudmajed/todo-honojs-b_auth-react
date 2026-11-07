import { hc } from 'hono/client'
import type { AppType } from '../../backend/src/app' // type-only import

export const api = hc<AppType>('/').api