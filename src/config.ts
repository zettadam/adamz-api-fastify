import process from 'node:process'
import type { Config, Environment, LogLevel } from './types.js'

const config: Config = {
  environment:
    (process.env.NODE_ENVIRONMENT as Environment) ??
    ('development' as Environment),

  // Network
  host: process.env.HOST ?? '127.0.0.1',
  port: Number(process.env.PORT) ?? 3000,

  // Logging
  logLevel: (process.env.LOG_LEVEL as LogLevel) ?? ('INFO' as LogLevel),

  // Database
  dbUser: process.env.PGUSER ?? '',
  dbPassword: process.env.PGPASSWORD ?? '',
  dbHost: process.env.PGHOST ?? '127.0.0.1',
  dbPort: Number(process.env.PGPORT) ?? 5432,
  dbName: process.env.PGDATABASE ?? '',
}

export default config
