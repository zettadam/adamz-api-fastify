import process from 'node:process'
import type { Config, LogLevel } from './types.js'

const config: Config = {
  // Network
  host: process.env.HOST ?? '127.0.0.1',
  port: Number(process.env.PORT) ?? 3000,

  // Logging
  logLevel: (process.env.LOG_LEVEL as LogLevel) ?? ('INFO' as LogLevel),

  // Database
  dbUser: process.env.DB_USER ?? '',
  dbPassword: process.env.DB_PASSWORD ?? '',
  dbHost: process.env.DB_HOST ?? '127.0.0.1',
  dbPort: Number(process.env.DB_PORT) ?? 5432,
  dbName: process.env.DB_NAME ?? '',
}

export default config
